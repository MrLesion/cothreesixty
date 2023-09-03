import { debug } from './debug';

export const imageHelper = {
    mapImages (instance) {
        if ( instance.imageSlot !== null ) {
            return [];
        }
        else {
            let amount = instance.options.amount;
            if(instance.options.imageList.length > 0){
                amount = instance.options.imageList.length
            }
            return [ ...new Array( amount) ].map( ( _item, index ) => {
                let imageIndex = ( index + instance.options.startIndex );
                let imageName  = imageIndex.toString();
                if ( instance.options.leadingZeroPadding > 0 ) {
                    imageName = imageName.padStart( instance.options.leadingZeroPadding, '0' );
                }
                const imagePath = `${instance.options.folder}${instance.options.filename}`;
                return imagePath.replace( '{index}', imageName );
            } );
        }
    },
    preloadImages ( instance, imagePaths ) {
        if ( instance.imageSlot !== null ) {
            return new Promise( ( resolve, reject ) => {
                instance.images = [ ...Array.from( instance.imageSlot.querySelectorAll( 'img' ) ) ];
                resolve( instance.images );
            } );
        }
        else {
            return new Promise( ( resolve, reject ) => {
                instance.images          = [];
                let loadedImageCount = 0;
                for ( let i = 0; i < imagePaths.length; i++ ) {
                    ( ( index ) => {
                        const image   = new Image();
                        image.src     = imagePaths[ index ];
                        image.onload  = () => {
                            loadedImageCount++;
                            instance.images[ index ] = image;
                            if ( loadedImageCount === imagePaths.length ) {
                                resolve( instance.images );
                            }
                        };
                        image.onerror = () => {
                            reject( `Failed to load image: ${imagePaths[ i ]}` );
                        };
                    } )( i );
                }
            } );
        }
    },
    drawImage (instance) {
        const image = instance.images[ instance.rotation - instance.options.startIndex ];
        if ( instance.state === 'loading' ) {
            instance.canvas.width  = image.width;
            instance.canvas.height = image.height;
            instance.setState( 'ready' );
        }
        instance.context.clearRect( 0, 0, instance.canvas.width, instance.canvas.height );
        image.width = instance.canvas.width;
        debug( instance, `Drawing image ${instance.rotation}` );
        instance.context.drawImage( image, 0, 0, instance.canvas.width, instance.canvas.height );
    }
}