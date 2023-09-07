function log ( strMessage, objData = {} ) {
    if ( this.options.debug === true ) {
        console.log( `--| ${strMessage}`, objData );
    }
}

function warn ( strMessage, objData = {} ) {
    if ( this.options.debug === true ) {
        console.warn( `--| ${strMessage}`, objData );
    }
}

function error ( strMessage, objData = {} ) {
    if ( this.options.debug === true ) {
        console.error( `--| ${strMessage}`, objData );
    }
}

export { log, warn, error }