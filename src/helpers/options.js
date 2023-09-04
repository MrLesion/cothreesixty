function getOptionName ( strOptionsName ) {
    return strOptionsName.split( '-' ).map( ( char, index ) => index ? char.charAt( 0 ).toUpperCase() + char.slice( 1 ).toLowerCase() : char.toLowerCase() ).join( '' );
}

function getOptionValue ( strAttribute ) {
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
}

function isOptionsValid () {
    if ( this.imageSlot !== null ) {
        return this.imageSlot.querySelectorAll( 'img' ).length > 0;
    }
    return this.options.amount > 0 && this.options.folder !== '' && this.options.filename !== '';
}

function setOptions () {
    this.getAttributeNames().forEach( ( attributeName ) => {
        {
            this.options[ getOptionName( attributeName ) ] = getOptionValue( this.getAttribute( attributeName ) );
        }
    } );
    if ( this.imageSlot !== null ) {
        this.options.amount = this.imageSlot.querySelectorAll( 'img' ).length;
    }
}

export { getOptionName, getOptionValue, isOptionsValid, setOptions }