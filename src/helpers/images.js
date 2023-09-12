import { log } from './debug';
import { setState } from './events';

function mapImages () {
    if ( this.imageSlot !== null ) {
        return [];
    }
    else {
        let amount = this.options.amount;
        if ( this.options.imageList.length > 0 ) {
            amount = this.options.imageList.length
        }
        return [ ...new Array( amount ) ].map( ( _item, index ) => {
            const imageIndex = ( index + this.options.startIndex );
            let imageName    = imageIndex.toString();
            if ( this.options.leadingZeroPadding > 0 ) {
                imageName = imageName.padStart( this.options.leadingZeroPadding, '0' );
            }
            const imagePath = `${this.options.folder}${this.options.filename}`;
            return imagePath.replace( '{index}', imageName );
        } );
    }
}

function preloadImages ( imagePaths ) {
    if ( this.imageSlot !== null ) {
        return new Promise( ( resolve, reject ) => {
            this.images = [ ...Array.from( this.imageSlot.querySelectorAll( 'img' ) ) ];
            resolve( this.images );
        } );
    }
    else {
        return new Promise( ( resolve, reject ) => {
            this.images          = [];
            let loadedImageCount = 0;
            for ( let i = 0; i < imagePaths.length; i++ ) {
                ( ( index ) => {
                    const image   = new Image();
                    image.src     = imagePaths[ index ];
                    image.onload  = () => {
                        loadedImageCount++;
                        this.images[ index ] = image;
                        if ( loadedImageCount === imagePaths.length ) {
                            resolve( this.images );
                        }
                    };
                    image.onerror = () => {
                        reject( `Failed to load image: ${imagePaths[ i ]}` );
                    };
                } )( i );
            }
        } );
    }
}

function drawImage () {
    const scale = this.zoomLevel;
    const image = this.images[ this.rotation - this.options.startIndex ];
    if ( this.state === 'loading' ) {
        this.canvas.width  = image.width;
        this.canvas.height = image.height;
        setState.call(this, 'ready');
    }
    this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
    image.width = this.canvas.width;
    log.call( this, `Drawing image ${this.rotation}` );
    const sx = scale > 1 ? image.width / ( scale * scale ) : 0;
    const sy = scale > 1 ? image.height / ( scale * scale ) : 0;
    const sw = image.width;
    const sh = image.height;
    const dx = -this.panning.x;
    const dy = -this.panning.y;
    const dw = this.canvas.width * scale;
    const dh = this.canvas.height * scale;
    this.context.drawImage( image, sx, sy, sw, sh, dx, dy, dw, dh );
}

export { mapImages, preloadImages, drawImage }
