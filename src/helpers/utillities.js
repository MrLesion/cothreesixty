const buildHtmlElement = ( tagName, attributes = {}, content = '' ) => {
    const htmlElement = document.createElement( tagName );
    Object.keys( attributes ).forEach( key => htmlElement.setAttribute( key, attributes[ key ] ) );
    if ( content !== '' ) {
        htmlElement.textContent = content;
    }
    return htmlElement;
}

export {buildHtmlElement}