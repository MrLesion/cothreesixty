class CoThreeSixty extends HTMLElement {
	constructor() {
		super();

		/* Create shadow-dom */
		const shadow = this.attachShadow({ mode: 'open' });

		/* Set global variables */
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.isDragging = false;
        this.prevX = 0;
        this.totalDistance = 0;
        this.isMobile = !!('ontouchstart' in window || navigator.msMaxTouchPoints);

		/* Create and set options */
		this.defaultOptions = {
			folder: '',
			filename:'',
			amount: 0,
			speed: 1,
			start: 1,
			spinSpeed: 100,
			autoSpin: false,
			debug: false,
			leadingZeros: 0
		};

		this.options = Object.assign({}, this.defaultOptions);
		this.setOptions();

		/* Create container */
		const container = document.createElement('div');
        container.setAttribute('class', 'co-three-sixty');

		/* Create style */
		const style = document.createElement('style');

		style.textContent = `
			.co-three-sixty{
				position:relative;
				width:100%;
				box-shadow: 0 0 3px 1px rgba(0,0,0,.25);
			}
			.co-three-sixty-canvas{
				width: 100%;
  				
			}
			.co-three-sixty-icon{
				position: absolute;
				bottom:10%;
				width: 100%;
				left:0;

			}
			.co-three-sixty-failed{
				position: absolute;
				color: red;
				bottom:50%;
				width: 100%;
				text-align:center;
				font-family:arial;
				font-size: 20px;
				left:0;

			}
		`;


		/* Update rotation start index from options */
        this.rotation = this.options.start;

        /* Setup canvas */
		this.canvas.width = 800;
		this.canvas.height = 500;
		this.canvas.setAttribute('class', 'co-three-sixty-canvas');
		
		/* Create icon */
		this.createIcon(container);
    	
    	/* Append element to shadow-dom */
    	shadow.appendChild(style);
    	container.appendChild(this.canvas);
    	shadow.appendChild(container);

    	/* Test for required options */
    	if(this.isOptionsValid() === true){
    		this.debug('Initialized');
    		this.setAttribute('state', 'ready');
    		this.drawImage();
	    	if(this.options.autoSpin === true){
	    		this.autoSpin();
	    	}
	    	this.bindEvents();
	    	
        } else{
        	const error = document.createElement('div');
        	error.setAttribute('class', 'co-three-sixty-failed');
        	error.innerHTML = '!! Viewer fail to load - missing required options !!<br>Please check folder, filename and amount options.';
        	container.appendChild(error);
        	console.error('Options fail', this.options);
        }
    	
	}

	bindEvents(){
		this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
        this.canvas.addEventListener('dragleave', this.handleMouseUp.bind(this));
	}

	createIcon( domContainer ){
		const svg = '<svg fill="#e1e1e1" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 480" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M391.502,210.725c-5.311-1.52-10.846,1.555-12.364,6.865c-1.519,5.31,1.555,10.846,6.864,12.364 C431.646,243.008,460,261.942,460,279.367c0,12.752-15.51,26.749-42.552,38.402c-29.752,12.82-71.958,22.2-118.891,26.425 l-40.963-0.555c-0.047,0-0.093-0.001-0.139-0.001c-5.46,0-9.922,4.389-9.996,9.865c-0.075,5.522,4.342,10.06,9.863,10.134 l41.479,0.562c0.046,0,0.091,0.001,0.136,0.001c0.297,0,0.593-0.013,0.888-0.039c49.196-4.386,93.779-14.339,125.538-28.024 C470.521,316.676,480,294.524,480,279.367C480,251.424,448.57,227.046,391.502,210.725z"></path> <path d="M96.879,199.333c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10H138v41.333H96.879c-5.522,0-10,4.477-10,10 s4.478,10,10,10H148c5.523,0,10-4.477,10-10V148c0-5.523-4.477-10-10-10H96.879c-5.522,0-10,4.477-10,10s4.478,10,10,10H138 v41.333H96.879z"></path> <path d="M188.879,280.667h61.334c5.522,0,10-4.477,10-10v-61.333c0-5.523-4.477-10-10-10h-51.334V158H240c5.523,0,10-4.477,10-10 s-4.477-10-10-10h-51.121c-5.523,0-10,4.477-10,10v122.667C178.879,276.19,183.356,280.667,188.879,280.667z M198.879,219.333 h41.334v41.333h-41.334V219.333z"></path> <path d="M291.121,280.667h61.334c5.522,0,10-4.477,10-10V148c0-5.523-4.478-10-10-10h-61.334c-5.522,0-10,4.477-10,10v122.667 C281.121,276.19,285.599,280.667,291.121,280.667z M301.121,158h41.334v102.667h-41.334V158z"></path> <path d="M182.857,305.537c-3.567-4.216-9.877-4.743-14.093-1.176c-4.217,3.567-4.743,9.876-1.177,14.093l22.366,26.44 c-47.196-3.599-89.941-12.249-121.37-24.65C37.708,308.06,20,293.162,20,279.367c0-16.018,23.736-33.28,63.493-46.176 c5.254-1.704,8.131-7.344,6.427-12.598c-1.703-5.253-7.345-8.13-12.597-6.427c-23.129,7.502-41.47,16.427-54.515,26.526 C7.674,252.412,0,265.423,0,279.367c0,23.104,21.178,43.671,61.242,59.48c32.564,12.849,76.227,21.869,124.226,25.758 l-19.944,22.104c-3.7,4.1-3.376,10.424,0.725,14.123c1.912,1.726,4.308,2.576,6.696,2.576c2.731,0,5.453-1.113,7.427-3.301 l36.387-40.325c1.658-1.837,2.576-4.224,2.576-6.699v-0.764c0-2.365-0.838-4.653-2.365-6.458L182.857,305.537z"></path> <path d="M381.414,137.486h40.879c5.522,0,10-4.477,10-10V86.592c0-5.523-4.478-10-10-10h-40.879c-5.522,0-10,4.477-10,10v40.894 C371.414,133.009,375.892,137.486,381.414,137.486z M391.414,96.592h20.879v20.894h-20.879V96.592z"></path> </g> </g> </g> </g></svg>';
		const blob = new Blob([svg], {type: 'image/svg+xml'});
		const url = URL.createObjectURL(blob);

		const svgImage = new Image();
		svgImage.onload = () => {
		    domContainer.appendChild(svgImage);
		}
		svgImage.width = 100;
		svgImage.height = 100;
		svgImage.src = url;
		svgImage.setAttribute('class', 'co-three-sixty-icon');
		svgImage.addEventListener('click', this.autoSpin.bind(this));
	}

	setOptions(){
		const optionsContanerSlot = this.querySelector('slot[name="options"]');
		
		if(optionsContanerSlot !== null){
			const optionSlots = optionsContanerSlot.querySelectorAll('slot');
			optionSlots.forEach((optionSlot) =>{
				const optionName = this.getOptionName(optionSlot.name);
				if( Object.hasOwn(this.options, optionName) ){
					const optionValue = this.getOptionValue(optionSlot.textContent);
					this.options[optionName] = optionValue;
				}
			});
		} else{
			this.getAttributeNames().forEach((opt) =>{
				const optionName = this.getOptionName(opt);
				if( Object.hasOwn(this.options, optionName) ){
					const optionValue = this.getOptionValue(this.getAttribute(opt));
					this.options[optionName] = optionValue;
				}
			});
		}
	}

	update( objUpdatedOptions ){
		this.options = Object.assign({}, this.defaultOptions, objUpdatedOptions);
		this.rotation = this.options.start;
		this.drawImage();
	}

	drawImage(){
		
		const image = new Image();
		image.onload = () =>{
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			image.width = this.canvas.width;
			this.debug(`Drawing image ${this.rotation}`);
            this.context.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
		}
		image.onerror = (err) =>{ console.error(err); }
		image.src = this.getImagePath();
	}
	autoSpin(){
		let hasCycled = false;
		const startIndex = this.rotation;

		const interval = setInterval(() =>{
			if(hasCycled === false && this.rotation < this.options.amount){
				this.rotation++;
				this.drawImage();
				
			} else{

				if(hasCycled === false){
					this.debug('rotation limit reached, setting hasCycled to true');
					this.rotation = 1;
					hasCycled = true;
				}
				
				if(this.rotation < startIndex){
					this.rotation++;
					this.drawImage();
					
				} else{
					clearInterval(interval);
					this.rotation = startIndex;
				}
				
			}
		}, this.options.spinSpeed);
	}

	handleMouseDown( event ){

		this.canvas.style.cursor = 'grabbing';
		this.totalDistance = 0;
		this.isDragging = true;
        this.prevX = this.isMobile ? event.touches[0].clientX : event.pageX;
	}

	handleMouseMove( event ){
		if (this.isDragging) {
			const currentPositionX = this.isMobile ? event.touches[0].clientX : event.clientX;
			const deltaX = (currentPositionX - this.prevX);
			const direction = deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0;
			const amount = this.options.amount;

			this.totalDistance += Math.abs(deltaX);

			if(this.totalDistance % this.options.speed === 0){
				this.rotation += direction;
				
			}

		
            if (this.rotation < 1) {
                this.rotation = amount;
            } else if (this.rotation > amount) {
                this.rotation = 1;
            }

            this.drawImage();
            this.prevX = this.isMobile ? event.touches[0].clientX : event.clientX;
        }
	}

	handleMouseUp(){
		this.canvas.style.cursor = 'auto';
		this.isDragging = false;
	}

	getImagePath(){
		let imageIndex = this.rotation;

		if(this.options.leadingZeros > 0){
			let leadingZeroString = '';
			if(imageIndex < 10){
				for (var i = 0; i < this.options.leadingZeros; i++) {
					leadingZeroString += '0';
				}
			}
			if(imageIndex >= 10 && imageIndex < 100 && this.options.leadingZeros > 1){
				for (var i = 0; i < (this.options.leadingZeros - 1); i++) {
					leadingZeroString += '0';
				}
			}
			imageIndex = `${leadingZeroString}${imageIndex}`;
		}

		const imagePath = `${this.options.folder}${this.options.filename}`;

		return imagePath.replace('{index}', imageIndex);
	}

	getOptionValue( strAttribute ){
		let value = Number(strAttribute);
		if(isNaN(value)){
			value = strAttribute;

			if(value.toLowerCase() === 'true'){
				value = true;
			} else if(value.toLowerCase() === 'false'){
				value = false;
			}
		}
		return value;
	}

	getOptionName( strOptionsName ){
		return strOptionsName.split('-').map((e,i) => i ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()).join('');
	}

	isOptionsValid(){
		return this.options.amount > 0 && this.options.folder !== '' && this.options.filename !== '';
	}

	debug( strMessage, objData = {} ){
		if(this.options.debug === true){
			console.log(`--| ${strMessage}`, objData);
		}
	}

}

customElements.define('co-three-sixty', CoThreeSixty);