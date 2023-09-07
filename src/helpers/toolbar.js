import {getToolIcon} from './icon'
function createToolbar () {
    if ( this.options.tools.length ) {
        const toolBarContainer = document.createElement('div');
        toolBarContainer.setAttribute('class', 'co-three-sixty-toolbar');
        this.options.tools.forEach((tool) =>{
            const toolElement = document.createElement('div');
            toolElement.setAttribute('class', `co-three-sixty-toolbar-item co-three-sixty-toolbar-item-${tool}`);
            toolElement.innerHTML = getToolIcon(tool);
            toolElement.addEventListener('click', toolEvent.bind(this, tool));
            toolBarContainer.appendChild(toolElement);
        });
        this.container.appendChild(toolBarContainer);
    }
}

function toolEvent (...args) {
    const tool = args[0];
    switch ( tool ) {
        case 'spin':
            this.autoSpin.call( this );
            break;
        case 'zoom':
            //this.zoomLevel = 2;
            //this.zoom.call(this);
            break;
    }
}


export { createToolbar };