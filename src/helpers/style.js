function createStyle(){
    const styleSheet = document.createElement( 'style' );
    styleSheet.textContent = `
			.co-three-sixty{
				position:relative;
				width:100%;
				box-shadow: 0 0 3px 1px rgba(0,0,0,.25);
			}
			.co-three-sixty.is-interacting .co-three-sixty-icon{
			    display:none;
				opacity:0;
			}
			.co-three-sixty-canvas{
				width: 100%;
				display: block;
			}
			.co-three-sixty-icon{
				position: absolute;
				bottom:5%;
				width: 100%;
				left:0;
				opacity:.5;
				cursor: pointer;
				transition: opacity .3s ease;
			}

			.co-three-sixty-toolbar{
			    display:flex;
			    width: 100%;
			    justify-content: start;
			    //background: #f1f1f1;
			}
			.co-three-sixty-toolbar-item{
			    padding: 5px;
			    //border-right: 1px solid #e1e1e1;
			    cursor: pointer;
			    color: #1e1e1e;
			    transition: all .3s ease;
			}
			.co-three-sixty-toolbar-item:hover{
			    color: #000;
			}
			.co-three-sixty-toolbar-item svg{
			    width: 25px;
			}
		`;
    this.shadow.appendChild( styleSheet );
}

export {createStyle};