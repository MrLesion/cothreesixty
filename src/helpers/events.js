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
        if ( this.zooming.level > 1 ) {
            
            /*
             const mouseX = event.clientX - this.canvas.getBoundingClientRect().left;
             const mouseY = event.clientY - this.canvas.getBoundingClientRect().top;

             this.panning.x = (this.panning.x - mouseX) * (1 - this.zooming.factor) + mouseX;
             this.panning.y = (this.panning.y - mouseY) * (1 - this.zooming.factor) + mouseY;
             */
            const mouseX =  (this.canvas.getBoundingClientRect().left / 2);
            const mouseY = (this.canvas.getBoundingClientRect().top / 2);
            this.panning.x = ( mouseX );
            this.panning.y = ( mouseY );
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
    if ( this.zooming.level === 1 ) {
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
    } else{
        /*
        let scale = this.zooming.level;
        if (event.deltaY > 0) {
            scale -= this.zooming.factor;
        } else {
            scale += this.zooming.factor;
        }
        this.zooming.level = scale;

        const mouseX = event.clientX - this.canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - this.canvas.getBoundingClientRect().top;

        // Adjust the offset to keep the zoom centered on the mouse position
        this.panning.x = (this.panning.x - mouseX) * (1 - this.zooming.factor) + mouseX;
        this.panning.y = (this.panning.y - mouseY) * (1 - this.zooming.factor) + mouseY;
        
        console.log(scale);
        
         */
    }
    
}

export { emitEvent, setState, bindEvents }