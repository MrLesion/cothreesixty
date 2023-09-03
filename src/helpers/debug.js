export const debug = ( instance, strMessage, objData = {} ) => {
    if ( instance.options.debug === true ) {
     console.log( `--| ${strMessage}`, objData );
    }
}