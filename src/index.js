import { getStyle } from './helpers/style'
import { getIcon } from './helpers/icon';
import { debug } from './helpers/debug';
import { optionsHelper } from './helpers/options'
import { imageHelper } from './helpers/images'

class CoThreeSixty extends HTMLElement {
    constructor () {
        super();
        /* Create shadow-root */
        this.shadow = this.attachShadow( { mode: 'open' } );
        /* Set global variables */
        this.canvas        = document.createElement( 'canvas' );
        this.context       = this.canvas.getContext( '2d' );
        this.container     = document.createElement( 'div' );
        this.state         = 'loading';
        this.svgIcon       = null;
        this.isDragging    = false;
        this.prevX         = 0;
        this.totalDistance = 0;
        this.isMobile      = !!( 'ontouchstart' in window || navigator.msMaxTouchPoints );
        this.images        = [];
        this.imageSlot     = this.querySelector( 'slot[name="imageList"]' );
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
            height: 500
        };
        this.options        = Object.assign( {}, this.defaultOptions );
        optionsHelper.setOptions( this );
        /* Set container */
        this.container.setAttribute( 'class', 'co-three-sixty' );
        this.setState( this.state );
        /* Create style */
        const style = getStyle();
        /* Update rotation start index from options */
        this.rotation = this.options.startIndex;
        /* Setup canvas */
        this.canvas.width  = this.options.width;
        this.canvas.height = this.options.height;
        this.canvas.setAttribute( 'class', 'co-three-sixty-canvas' );
        /* Create icon */
        this.createIcon();
        /* Append element to shadow-dom */
        this.shadow.appendChild( style );
        this.container.appendChild( this.canvas );
        this.shadow.appendChild( this.container );
        if ( this.options.initOnLoad === true ) {
            this.init();
        }
    }

    init ( objOptions = null ) {
        if ( objOptions !== null ) {
            this.options = Object.assign( {}, this.defaultOptions, objOptions );
            optionsHelper.setOptions( this );
        }
        if ( optionsHelper.isOptionsValid( this ) === true ) {
            const imagePaths = imageHelper.mapImages( this );
            imageHelper.preloadImages( this, imagePaths ).then( () => {
                debug( this, 'Initialized' );
                imageHelper.drawImage( this );
                if ( this.options.autoSpin === true ) {
                    this.autoSpin();
                }
                this.bindEvents();
            } )
        }
        else {
            console.error( 'Options fail', this.options );
        }
    }

    bindEvents () {
        this.canvas.addEventListener( 'mousedown', this.handleMouseDown.bind( this ) );
        this.canvas.addEventListener( 'mousemove', this.handleMouseMove.bind( this ) );
        this.canvas.addEventListener( 'mouseup', this.handleMouseUp.bind( this ) );
        this.canvas.addEventListener( 'dragleave', this.handleMouseUp.bind( this ) );
    }

    createIcon () {
        const icon  = getIcon();
        icon.onload = () => {
            this.container.appendChild( icon );
            this.svgIcon = icon;
        }
        icon.addEventListener( 'click', this.autoSpin.bind( this ) );
    }

    update ( objUpdatedOptions ) {
        this.setState( 'loading' );
        this.options   = Object.assign( {}, this.defaultOptions, objUpdatedOptions );
        this.rotation  = this.options.startIndex;
        this.imageSlot = null;
        this.images    = [];
        this.init();
    }

    autoSpin () {
        let hasCycled    = false;
        const startIndex = this.rotation;
        const interval   = setInterval( () => {
            if ( hasCycled === false && this.rotation < this.options.amount ) {
                this.rotation++;
                imageHelper.drawImage( this );
            }
            else {
                if ( hasCycled === false ) {
                    debug( this, 'rotation limit reached, setting hasCycled to true' );
                    this.rotation = this.options.startIndex;
                    hasCycled     = true;
                }
                if ( this.rotation < startIndex ) {
                    this.rotation++;
                    imageHelper.drawImage( this );
                }
                else {
                    clearInterval( interval );
                    this.rotation = startIndex;
                }
            }
        }, this.options.spinSpeed );
    }

    handleMouseDown ( event ) {
        this.canvas.style.cursor = 'grabbing';
        this.totalDistance       = 0;
        this.isDragging          = true;
        this.prevX               = this.isMobile ? event.touches[ 0 ].clientX : event.pageX;
    }

    handleMouseMove ( event ) {
        if ( this.isDragging ) {
            this.svgIcon.classList.add( 'is-rotating' );
            const currentPositionX = this.isMobile ? event.touches[ 0 ].clientX : event.clientX;
            const deltaX           = ( currentPositionX - this.prevX );
            const direction        = deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0;
            const amount           = this.options.amount;
            this.totalDistance += Math.abs( deltaX );
            if ( this.totalDistance % 2 === 0 ) {
                this.rotation += direction;
            }
            if ( this.rotation < 1 ) {
                this.rotation = amount;
            }
            else if ( this.rotation > amount ) {
                this.rotation = 1;
            }
            imageHelper.drawImage( this );
            this.prevX = this.isMobile ? event.touches[ 0 ].clientX : event.clientX;
        }
    }

    handleMouseUp () {
        this.canvas.style.cursor = 'auto';
        this.isDragging          = false;
        this.svgIcon.classList.remove( 'is-rotating' );
    }

    setState ( state ) {
        this.state = state;
        this.setAttribute( 'state', this.state );
    }
}

customElements.define( 'co-three-sixty', CoThreeSixty );