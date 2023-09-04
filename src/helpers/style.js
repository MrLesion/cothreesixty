function createStyle(){
    const styleSheet = document.createElement( 'style' );
    styleSheet.textContent = `
			.co-three-sixty{
				position:relative;
				width:100%;
				box-shadow: 0 0 3px 1px rgba(0,0,0,.25);
			}
			.co-three-sixty-canvas{
				width: 100%;
			}
			.co-three-sixty-icon{
				//position: absolute;
				bottom:0%;
				width: 100%;
				left:0;
				opacity:1;
				cursor: pointer;
				transition: opacity .3s ease;
			}
			.co-three-sixty-icon.is-rotating{
			    //opacity: 0;
			}
		`;
    this.shadow.appendChild( styleSheet );
}

export {createStyle};