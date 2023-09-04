function createToolbar () {
    if ( this.options.tools.length ) {
        const container = document.createElement('div');
        container.setAttribute('class', 'co-three-sixty-toolbar');
        this.options.tools.forEach((tool) =>{
            const toolElement = document.createElement('div');
            toolElement.setAttribute('class', `co-three-sixty-toolbar-item co-three-sixty-toolbar-item-${tool}`);
            toolElement.textContent = tool;
            toolElement.addEventListener('click', toolEvent.bind(this, tool));
            container.appendChild(toolElement);
        });
        this.container.appendChild(container);
    }
}

function toolEvent (...args) {
    const tool = args[0];
    switch ( tool ) {
        case 'spin':
            this.autoSpin.call( this );
            break;
        case 'zoom':
            console.warn(`Tool "${tool}" is not implemented yet`)
            break;
    }
}


export { createToolbar };