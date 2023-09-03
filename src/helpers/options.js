export const optionsHelper = {
    getOptionName ( strOptionsName ) {
        return strOptionsName.split( '-' ).map( ( char, index ) => index ? char.charAt( 0 ).toUpperCase() + char.slice( 1 ).toLowerCase() : char.toLowerCase() ).join( '' );
    },
    getOptionValue ( strAttribute ) {
        let value = Number( strAttribute );
        if ( isNaN( value ) ) {
            value = strAttribute;
            if ( value.toLowerCase() === 'true' ) {
                value = true;
            }
            else if ( value.toLowerCase() === 'false' ) {
                value = false;
            }
        }
        return value;
    },
    isOptionsValid ( instance ) {
        if ( instance.imageSlot !== null ) {
            return instance.imageSlot.querySelectorAll( 'img' ).length > 0;
        }
        return instance.options.amount > 0 && instance.options.folder !== '' && instance.options.filename !== '';
    },
    setOptions (instance) {
        instance.getAttributeNames().forEach( ( attributeName ) => {
            {
                instance.options[ this.getOptionName( attributeName ) ] = this.getOptionValue( instance.getAttribute( attributeName ) );
            }
        } );
        if ( instance.imageSlot !== null ) {
            instance.options.amount = instance.imageSlot.querySelectorAll( 'img' ).length;
        }
    }
}