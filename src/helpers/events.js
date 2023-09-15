import { drawImage } from './images';
import { log } from './debug';
import { buildHtmlElement } from './utillities';

function createEvent ( eventName, detail ) {
    return new CustomEvent( eventName, {
        detail: detail,
        bubbles: true,
        cancelable: true,
        composed: false
    } );
}

function emitEvent ( eventName, detail = {} ) {
    const event = createEvent( eventName, detail );
    this.dispatchEvent( event );
}

function setState ( state ) {
    this.state = state;
    log.call( this, `Setting state to ${state}` );
    this.setAttribute( 'state', this.state );
}

function bindEvents () {
    this.canvas.addEventListener( 'mouseenter', mouseEnter.bind( this ) );
    this.canvas.addEventListener( 'mouseleave', mouseLeave.bind( this ) );
    this.canvas.addEventListener( 'mousedown', mouseDown.bind( this ) );
    this.canvas.addEventListener( 'mousemove', mouseMove.bind( this ) );
    this.canvas.addEventListener( 'mouseup', mouseUp.bind( this ) );
    this.canvas.addEventListener( 'dragleave', mouseUp.bind( this ) );
    this.canvas.addEventListener( 'wheel', mouseWheel.bind( this ) );
}

function mouseEnter () {
    this.container.classList.add( 'is-interacting' );
}

function mouseLeave () {
    this.container.classList.remove( 'is-interacting' );
}

function mouseDown ( event ) {
    this.canvas.style.cursor = 'grabbing';
    this.totalDistance       = 0;
    this.isDragging          = true;
    this.prevX               = this.isMobile ? event.touches[ 0 ].clientX : event.pageX;
}

function mouseMove ( event ) {
    if ( this.isDragging ) {
        const currentPositionX = this.isMobile ? event.touches[ 0 ].clientX : event.clientX;
        const amount           = this.options.amount;
        const deltaX           = ( currentPositionX - this.prevX );
        const direction        = deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0;
        this.totalDistance += Math.abs( deltaX );
        if ( ( this.totalDistance + amount ) % 2 / amount === 0 ) {
            this.rotation += direction;
        }
        if ( this.rotation < this.options.startIndex ) {
            this.rotation = amount;
        }
        else if ( this.rotation > amount ) {
            this.rotation = this.options.startIndex;
        }
        drawImage.call( this );
        this.prevX = this.isMobile ? event.touches[ 0 ].clientX : event.clientX;
    }
    else {
        if ( this.zoomLevel > 1 ) {
            const rect          = this.canvas.getBoundingClientRect();
            const mousePosition = {
                x: event.clientX,
                y: event.clientY
            };
            this.panning.x      = mousePosition.x * this.zoomLevel;
            this.panning.y      = mousePosition.y * this.zoomLevel;
            drawImage.call( this );
        }
    }
}

function mouseUp () {
    this.canvas.style.cursor = 'auto';
    this.isDragging          = false;
}

function mouseWheel ( event ) {
    event.preventDefault();
    if ( this.zoomLevel === 1 ) {
        if ( event.deltaY > 0 ) {
            this.rotation--;
        }
        else {
            this.rotation++;
        }
        if ( this.rotation < this.options.startIndex ) {
            this.rotation = this.options.amount;
        }
        else if ( this.rotation > this.options.amount ) {
            this.rotation = this.options.startIndex;
        }
        drawImage.call( this );
    }
}

export { emitEvent, setState, bindEvents }