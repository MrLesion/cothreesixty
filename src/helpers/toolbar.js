import { getToolIcon } from './icon'
import { buildHtmlElement } from './utillities';

function createToolbar () {
    if ( this.options.tools.length ) {
        const toolBarContainer = buildHtmlElement( 'div', {
            class: 'co-three-sixty-toolbar'
        } );
        this.options.tools.forEach( ( tool ) => {
            const toolElement = buildHtmlElement('div', {
                class: `co-three-sixty-toolbar-item co-three-sixty-toolbar-item-${tool}`
            });
            toolElement.innerHTML = getToolIcon( tool );
            toolElement.addEventListener( 'click', toolEvent.bind( this, tool ) );
            toolBarContainer.appendChild( toolElement );
        } );
        this.container.appendChild( toolBarContainer );
    }
}

function toolEvent ( ...args ) {
    const tool = args[ 0 ];
    switch ( tool ) {
        case 'spin':
            this.spin.call( this );
            break;
        case 'zoom':
            if ( this.zoomLevel > 1 ) {
                this.panning.x = 0;
                this.panning.y = 0;
                this.zoom.call( this, 1 );
            }
            else {
                this.zoom.call( this, 3 );
            }
            break;
    }
}

export { createToolbar };