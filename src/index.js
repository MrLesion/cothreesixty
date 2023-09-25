import { log, warn, error } from './helpers/debug';
import { createStyle } from './helpers/style'
import { create360Icon } from './helpers/icon';
import { createToolbar } from './helpers/toolbar'
import { isOptionsValid, setOptions } from './helpers/options'
import { mapImages, preloadImages, drawImage } from './helpers/images'
import { emitEvent, bindEvents, setState } from './helpers/events';

customElements.define( 'co-three-sixty', class extends HTMLElement {
    constructor () {
        super();
        /* Create shadow-root */
        this.shadow = this.attachShadow( { mode: 'open' } );
        /* Set global variables */
        this.canvas        = document.createElement( 'canvas' );
        this.context       = this.canvas.getContext( '2d' );
        this.container     = document.createElement( 'div' );
        this.state         = 'loading';
        this.isDragging    = false;
        this.prevX         = 0;
        this.totalDistance = 0;
        this.isMobile      = !!( 'ontouchstart' in window || navigator.msMaxTouchPoints );
        this.zooming = {
            level: 1,
            factor: 0.1,
            offsetX: 0,
            offsetY: 0
        };
        this.panning       = {
            x: 0,
            y: 0
        };
        this.images        = [];
        
        /* Create and set options */
        this.defaultOptions = {
            folder: '',
            filename: '',
            amount: 0,
            imageList: [],
            startIndex: 0,
            spinSpeed: 100,
            autoSpin: false,
            debug: false,
            leadingZeroPadding: 0,
            initOnLoad: true,
            width: 500,
            height: 500,
            tools: []
        };
    }

    connectedCallback(){
        if (window.document.readyState === 'loading') {
            window.document.addEventListener( 'DOMContentLoaded', () => {
                console.log(document.readyState);
                this.loadedCallback.call(this);
            });
            
        } else {
            this.loadedCallback.call(this);
        }
        
    }
    
    loadedCallback(){
        this.imageSlot     = this.querySelector( 'slot[name="imageList"]' );

        setOptions.call( this );
        /* Set container */
        this.container.setAttribute( 'class', 'co-three-sixty' );
        setState.call( this, this.state );
        /* Update rotation start index from options */
        this.rotation = this.options.startIndex;
        /* Setup canvas */
        this.canvas.width  = this.options.width;
        this.canvas.height = this.options.height;
        this.canvas.setAttribute( 'class', 'co-three-sixty-canvas' );
        /* Create style */
        createStyle.call( this );
        /* Create icon */
        create360Icon.call( this );
        /* Create toolbar */
        createToolbar.call( this );
        /* Append element to shadow-dom */
        this.container.appendChild( this.canvas );
        this.shadow.appendChild( this.container );
        if ( this.options.initOnLoad === true ) {
            log.call( this, 'Init on load' );
            this.init();
        }
        log.call( this, 'DOMContentLoaded' );
    }

    /* Public init method */
    init ( objOptions = null ) {
        if ( objOptions !== null ) {
            setOptions.call( this, objOptions );
        }
        if ( isOptionsValid.call( this ) === true ) {
            const imagePaths = mapImages.call( this );
            preloadImages.call( this, imagePaths ).then( () => {
                log.call( this, 'Initialized', this.options );
                emitEvent.call( this, 'loaded' );
                drawImage.call( this );
                if ( this.options.autoSpin === true ) {
                    this.spin();
                }
                bindEvents.call( this );
            } )
        }
        else {
            error.call( this, 'Options fail', this.options );
        }
    }

    /* Public update method */
    update ( objUpdatedOptions = {} ) {
        setState.call( this, 'loading' );
        this.options   = Object.assign( {}, this.defaultOptions, objUpdatedOptions );
        this.rotation  = this.options.startIndex;
        this.imageSlot = null;
        this.images    = [];
        emitEvent.call( this, 'updated' );
        this.init();
    }

    /* Public spin method */
    spin () {
        let hasCycled    = false;
        const startIndex = this.rotation;
        const interval   = setInterval( () => {
            if ( hasCycled === false && this.rotation < this.options.amount ) {
                this.rotation++;
                drawImage.call( this );
            }
            else {
                if ( hasCycled === false ) {
                    log.call( this, 'rotation limit reached, setting hasCycled to true' );
                    this.rotation = this.options.startIndex;
                    hasCycled     = true;
                }
                if ( this.rotation < startIndex ) {
                    this.rotation++;
                    drawImage.call( this );
                }
                else {
                    clearInterval( interval );
                    this.rotation = startIndex;
                }
            }
        }, this.options.spinSpeed );
    }

    /* Public zoom method */
    zoom ( zoomLevel = 1 ) {
        this.zooming.level = zoomLevel;
        drawImage.call( this );
    }
} );