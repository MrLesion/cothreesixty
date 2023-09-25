import { getToolIcon } from './icon'
import { buildHtmlElement } from './utillities';
import { drawImage } from './images';

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
            if ( this.zooming.level > 1 ) {
                this.panning.x = 0;
                this.panning.y = 0;
                this.zooming.level = 1;
                drawImage.call( this );
            }
            else {
                const bbox = this.canvas.getBoundingClientRect();
                this.zooming.level = 3;
                this.panning.x = (bbox.left / 2) / ( this.zooming.level * this.zooming.level );
                this.panning.y = (bbox.top / 2) / ( this.zooming.level * this.zooming.level );
                drawImage.call( this );
            }
            break;
    }
}

export { createToolbar };