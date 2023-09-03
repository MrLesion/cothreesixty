/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/debug.js":
/*!******************************!*\
  !*** ./src/helpers/debug.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debug: () => (/* binding */ debug)\n/* harmony export */ });\n﻿const debug = ( instance, strMessage, objData = {} ) => {\r\n    if ( instance.options.debug === true ) {\r\n     console.log( `--| ${strMessage}`, objData );\r\n    }\r\n}\n\n//# sourceURL=webpack://360/./src/helpers/debug.js?");

/***/ }),

/***/ "./src/helpers/icon.js":
/*!*****************************!*\
  !*** ./src/helpers/icon.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   iconHelper: () => (/* binding */ iconHelper)\n/* harmony export */ });\n﻿const iconHelper = {\r\n    getIcon () {\r\n        const svg       = '<svg fill=\"#e1e1e1\" height=\"200px\" width=\"200px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 480 480\" xml:space=\"preserve\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g> <g> <g> <path d=\"M391.502,210.725c-5.311-1.52-10.846,1.555-12.364,6.865c-1.519,5.31,1.555,10.846,6.864,12.364 C431.646,243.008,460,261.942,460,279.367c0,12.752-15.51,26.749-42.552,38.402c-29.752,12.82-71.958,22.2-118.891,26.425 l-40.963-0.555c-0.047,0-0.093-0.001-0.139-0.001c-5.46,0-9.922,4.389-9.996,9.865c-0.075,5.522,4.342,10.06,9.863,10.134 l41.479,0.562c0.046,0,0.091,0.001,0.136,0.001c0.297,0,0.593-0.013,0.888-0.039c49.196-4.386,93.779-14.339,125.538-28.024 C470.521,316.676,480,294.524,480,279.367C480,251.424,448.57,227.046,391.502,210.725z\"></path> <path d=\"M96.879,199.333c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10H138v41.333H96.879c-5.522,0-10,4.477-10,10 s4.478,10,10,10H148c5.523,0,10-4.477,10-10V148c0-5.523-4.477-10-10-10H96.879c-5.522,0-10,4.477-10,10s4.478,10,10,10H138 v41.333H96.879z\"></path> <path d=\"M188.879,280.667h61.334c5.522,0,10-4.477,10-10v-61.333c0-5.523-4.477-10-10-10h-51.334V158H240c5.523,0,10-4.477,10-10 s-4.477-10-10-10h-51.121c-5.523,0-10,4.477-10,10v122.667C178.879,276.19,183.356,280.667,188.879,280.667z M198.879,219.333 h41.334v41.333h-41.334V219.333z\"></path> <path d=\"M291.121,280.667h61.334c5.522,0,10-4.477,10-10V148c0-5.523-4.478-10-10-10h-61.334c-5.522,0-10,4.477-10,10v122.667 C281.121,276.19,285.599,280.667,291.121,280.667z M301.121,158h41.334v102.667h-41.334V158z\"></path> <path d=\"M182.857,305.537c-3.567-4.216-9.877-4.743-14.093-1.176c-4.217,3.567-4.743,9.876-1.177,14.093l22.366,26.44 c-47.196-3.599-89.941-12.249-121.37-24.65C37.708,308.06,20,293.162,20,279.367c0-16.018,23.736-33.28,63.493-46.176 c5.254-1.704,8.131-7.344,6.427-12.598c-1.703-5.253-7.345-8.13-12.597-6.427c-23.129,7.502-41.47,16.427-54.515,26.526 C7.674,252.412,0,265.423,0,279.367c0,23.104,21.178,43.671,61.242,59.48c32.564,12.849,76.227,21.869,124.226,25.758 l-19.944,22.104c-3.7,4.1-3.376,10.424,0.725,14.123c1.912,1.726,4.308,2.576,6.696,2.576c2.731,0,5.453-1.113,7.427-3.301 l36.387-40.325c1.658-1.837,2.576-4.224,2.576-6.699v-0.764c0-2.365-0.838-4.653-2.365-6.458L182.857,305.537z\"></path> <path d=\"M381.414,137.486h40.879c5.522,0,10-4.477,10-10V86.592c0-5.523-4.478-10-10-10h-40.879c-5.522,0-10,4.477-10,10v40.894 C371.414,133.009,375.892,137.486,381.414,137.486z M391.414,96.592h20.879v20.894h-20.879V96.592z\"></path> </g> </g> </g> </g></svg>';\r\n        const blob      = new Blob( [ svg ], { type: 'image/svg+xml' } );\r\n        const url       = URL.createObjectURL( blob );\r\n        const svgImage  = new Image();\r\n        svgImage.width  = 100;\r\n        svgImage.height = 100;\r\n        svgImage.src    = url;\r\n        svgImage.setAttribute( 'class', 'co-three-sixty-icon' );\r\n        return svgImage;\r\n    },\r\n    createIcon ( instance ) {\r\n        const icon  = this.getIcon();\r\n        icon.onload = () => {\r\n            instance.container.appendChild( icon );\r\n            instance.svgIcon = icon;\r\n        }\r\n        icon.addEventListener( 'click', instance.autoSpin.bind( instance ) );\r\n    }\r\n}\n\n//# sourceURL=webpack://360/./src/helpers/icon.js?");

/***/ }),

/***/ "./src/helpers/images.js":
/*!*******************************!*\
  !*** ./src/helpers/images.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   imageHelper: () => (/* binding */ imageHelper)\n/* harmony export */ });\n/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug */ \"./src/helpers/debug.js\");\n﻿\r\n\r\nconst imageHelper = {\r\n    mapImages (instance) {\r\n        if ( instance.imageSlot !== null ) {\r\n            return [];\r\n        }\r\n        else {\r\n            let amount = instance.options.amount;\r\n            if(instance.options.imageList.length > 0){\r\n                amount = instance.options.imageList.length\r\n            }\r\n            return [ ...new Array( amount) ].map( ( _item, index ) => {\r\n                let imageIndex = ( index + instance.options.startIndex );\r\n                let imageName  = imageIndex.toString();\r\n                if ( instance.options.leadingZeroPadding > 0 ) {\r\n                    imageName = imageName.padStart( instance.options.leadingZeroPadding, '0' );\r\n                }\r\n                const imagePath = `${instance.options.folder}${instance.options.filename}`;\r\n                return imagePath.replace( '{index}', imageName );\r\n            } );\r\n        }\r\n    },\r\n    preloadImages ( instance, imagePaths ) {\r\n        if ( instance.imageSlot !== null ) {\r\n            return new Promise( ( resolve, reject ) => {\r\n                instance.images = [ ...Array.from( instance.imageSlot.querySelectorAll( 'img' ) ) ];\r\n                resolve( instance.images );\r\n            } );\r\n        }\r\n        else {\r\n            return new Promise( ( resolve, reject ) => {\r\n                instance.images          = [];\r\n                let loadedImageCount = 0;\r\n                for ( let i = 0; i < imagePaths.length; i++ ) {\r\n                    ( ( index ) => {\r\n                        const image   = new Image();\r\n                        image.src     = imagePaths[ index ];\r\n                        image.onload  = () => {\r\n                            loadedImageCount++;\r\n                            instance.images[ index ] = image;\r\n                            if ( loadedImageCount === imagePaths.length ) {\r\n                                resolve( instance.images );\r\n                            }\r\n                        };\r\n                        image.onerror = () => {\r\n                            reject( `Failed to load image: ${imagePaths[ i ]}` );\r\n                        };\r\n                    } )( i );\r\n                }\r\n            } );\r\n        }\r\n    },\r\n    drawImage (instance) {\r\n        const image = instance.images[ instance.rotation - instance.options.startIndex ];\r\n        if ( instance.state === 'loading' ) {\r\n            instance.canvas.width  = image.width;\r\n            instance.canvas.height = image.height;\r\n            instance.setState( 'ready' );\r\n        }\r\n        instance.context.clearRect( 0, 0, instance.canvas.width, instance.canvas.height );\r\n        image.width = instance.canvas.width;\r\n        (0,_debug__WEBPACK_IMPORTED_MODULE_0__.debug)( instance, `Drawing image ${instance.rotation}` );\r\n        instance.context.drawImage( image, 0, 0, instance.canvas.width, instance.canvas.height );\r\n    }\r\n}\n\n//# sourceURL=webpack://360/./src/helpers/images.js?");

/***/ }),

/***/ "./src/helpers/options.js":
/*!********************************!*\
  !*** ./src/helpers/options.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   optionsHelper: () => (/* binding */ optionsHelper)\n/* harmony export */ });\n﻿const optionsHelper = {\r\n    getOptionName ( strOptionsName ) {\r\n        return strOptionsName.split( '-' ).map( ( char, index ) => index ? char.charAt( 0 ).toUpperCase() + char.slice( 1 ).toLowerCase() : char.toLowerCase() ).join( '' );\r\n    },\r\n    getOptionValue ( strAttribute ) {\r\n        let value = Number( strAttribute );\r\n        if ( isNaN( value ) ) {\r\n            value = strAttribute;\r\n            if ( value.toLowerCase() === 'true' ) {\r\n                value = true;\r\n            }\r\n            else if ( value.toLowerCase() === 'false' ) {\r\n                value = false;\r\n            }\r\n        }\r\n        return value;\r\n    },\r\n    isOptionsValid ( instance ) {\r\n        if ( instance.imageSlot !== null ) {\r\n            return instance.imageSlot.querySelectorAll( 'img' ).length > 0;\r\n        }\r\n        return instance.options.amount > 0 && instance.options.folder !== '' && instance.options.filename !== '';\r\n    },\r\n    setOptions (instance) {\r\n        instance.getAttributeNames().forEach( ( attributeName ) => {\r\n            {\r\n                instance.options[ this.getOptionName( attributeName ) ] = this.getOptionValue( instance.getAttribute( attributeName ) );\r\n            }\r\n        } );\r\n        if ( instance.imageSlot !== null ) {\r\n            instance.options.amount = instance.imageSlot.querySelectorAll( 'img' ).length;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://360/./src/helpers/options.js?");

/***/ }),

/***/ "./src/helpers/style.js":
/*!******************************!*\
  !*** ./src/helpers/style.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStyle: () => (/* binding */ getStyle)\n/* harmony export */ });\n﻿const getStyle = () => {\r\n    const styleSheet = document.createElement( 'style' );\r\n    styleSheet.textContent = `\r\n\t\t\t.co-three-sixty{\r\n\t\t\t\tposition:relative;\r\n\t\t\t\twidth:100%;\r\n\t\t\t\tbox-shadow: 0 0 3px 1px rgba(0,0,0,.25);\r\n\t\t\t}\r\n\t\t\t.co-three-sixty-canvas{\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t\t.co-three-sixty-icon{\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tbottom:10%;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tleft:0;\r\n\t\t\t\topacity:1;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\ttransition: opacity .3s ease;\r\n\t\t\t}\r\n\t\t\t.co-three-sixty-icon.is-rotating{\r\n\t\t\t    opacity: 0;\r\n\t\t\t}\r\n\t\t`;\r\n    return styleSheet;\r\n}\n\n//# sourceURL=webpack://360/./src/helpers/style.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/style */ \"./src/helpers/style.js\");\n/* harmony import */ var _helpers_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/icon */ \"./src/helpers/icon.js\");\n/* harmony import */ var _helpers_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/debug */ \"./src/helpers/debug.js\");\n/* harmony import */ var _helpers_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/options */ \"./src/helpers/options.js\");\n/* harmony import */ var _helpers_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/images */ \"./src/helpers/images.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass CoThreeSixty extends HTMLElement {\r\n    constructor () {\r\n        super();\r\n        /* Create shadow-root */\r\n        this.shadow = this.attachShadow( { mode: 'open' } );\r\n        /* Set global variables */\r\n        this.canvas        = document.createElement( 'canvas' );\r\n        this.context       = this.canvas.getContext( '2d' );\r\n        this.container     = document.createElement( 'div' );\r\n        this.state         = 'loading';\r\n        this.svgIcon       = null;\r\n        this.isDragging    = false;\r\n        this.prevX         = 0;\r\n        this.totalDistance = 0;\r\n        this.isMobile      = !!( 'ontouchstart' in window || navigator.msMaxTouchPoints );\r\n        this.images        = [];\r\n        this.imageSlot     = this.querySelector( 'slot[name=\"imageList\"]' );\r\n        /* Create and set options */\r\n        this.defaultOptions = {\r\n            folder: '',\r\n            filename: '',\r\n            amount: 0,\r\n            imageList: [],\r\n            startIndex: 0,\r\n            spinSpeed: 100,\r\n            autoSpin: false,\r\n            debug: false,\r\n            leadingZeroPadding: 0,\r\n            initOnLoad: true,\r\n            width: 500,\r\n            height: 500\r\n        };\r\n        this.options        = Object.assign( {}, this.defaultOptions );\r\n        _helpers_options__WEBPACK_IMPORTED_MODULE_3__.optionsHelper.setOptions( this );\r\n        /* Set container */\r\n        this.container.setAttribute( 'class', 'co-three-sixty' );\r\n        this.setState( this.state );\r\n        /* Create style */\r\n        const style = (0,_helpers_style__WEBPACK_IMPORTED_MODULE_0__.getStyle)();\r\n        /* Update rotation start index from options */\r\n        this.rotation = this.options.startIndex;\r\n        /* Setup canvas */\r\n        this.canvas.width  = this.options.width;\r\n        this.canvas.height = this.options.height;\r\n        this.canvas.setAttribute( 'class', 'co-three-sixty-canvas' );\r\n        /* Create icon */\r\n        _helpers_icon__WEBPACK_IMPORTED_MODULE_1__.iconHelper.createIcon( this );\r\n        /* Append element to shadow-dom */\r\n        this.shadow.appendChild( style );\r\n        this.container.appendChild( this.canvas );\r\n        this.shadow.appendChild( this.container );\r\n        if ( this.options.initOnLoad === true ) {\r\n            this.init();\r\n        }\r\n    }\r\n\r\n    init ( objOptions = null ) {\r\n        if ( objOptions !== null ) {\r\n            this.options = Object.assign( {}, this.defaultOptions, objOptions );\r\n            _helpers_options__WEBPACK_IMPORTED_MODULE_3__.optionsHelper.setOptions( this );\r\n        }\r\n        if ( _helpers_options__WEBPACK_IMPORTED_MODULE_3__.optionsHelper.isOptionsValid( this ) === true ) {\r\n            const imagePaths = _helpers_images__WEBPACK_IMPORTED_MODULE_4__.imageHelper.mapImages( this );\r\n            _helpers_images__WEBPACK_IMPORTED_MODULE_4__.imageHelper.preloadImages( this, imagePaths ).then( () => {\r\n                (0,_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.debug)( this, 'Initialized' );\r\n                _helpers_images__WEBPACK_IMPORTED_MODULE_4__.imageHelper.drawImage( this );\r\n                if ( this.options.autoSpin === true ) {\r\n                    this.autoSpin();\r\n                }\r\n                this.bindEvents();\r\n            } )\r\n        }\r\n        else {\r\n            console.error( 'Options fail', this.options );\r\n        }\r\n    }\r\n\r\n    bindEvents () {\r\n        this.canvas.addEventListener( 'mousedown', this.handleMouseDown.bind( this ) );\r\n        this.canvas.addEventListener( 'mousemove', this.handleMouseMove.bind( this ) );\r\n        this.canvas.addEventListener( 'mouseup', this.handleMouseUp.bind( this ) );\r\n        this.canvas.addEventListener( 'dragleave', this.handleMouseUp.bind( this ) );\r\n    }\r\n\r\n    update ( objUpdatedOptions ) {\r\n        this.setState( 'loading' );\r\n        this.options   = Object.assign( {}, this.defaultOptions, objUpdatedOptions );\r\n        this.rotation  = this.options.startIndex;\r\n        this.imageSlot = null;\r\n        this.images    = [];\r\n        this.init();\r\n    }\r\n\r\n    autoSpin () {\r\n        let hasCycled    = false;\r\n        const startIndex = this.rotation;\r\n        this.svgIcon.classList.add( 'is-rotating' );\r\n        const interval   = setInterval( () => {\r\n            if ( hasCycled === false && this.rotation < this.options.amount ) {\r\n                this.rotation++;\r\n                _helpers_images__WEBPACK_IMPORTED_MODULE_4__.imageHelper.drawImage( this );\r\n            }\r\n            else {\r\n                if ( hasCycled === false ) {\r\n                    (0,_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.debug)( this, 'rotation limit reached, setting hasCycled to true' );\r\n                    this.rotation = this.options.startIndex;\r\n                    hasCycled     = true;\r\n                }\r\n                if ( this.rotation < startIndex ) {\r\n                    this.rotation++;\r\n                    _helpers_images__WEBPACK_IMPORTED_MODULE_4__.imageHelper.drawImage( this );\r\n                }\r\n                else {\r\n                    clearInterval( interval );\r\n                    this.svgIcon.classList.remove( 'is-rotating' );\r\n                    this.rotation = startIndex;\r\n                }\r\n            }\r\n        }, this.options.spinSpeed );\r\n    }\r\n\r\n    handleMouseDown ( event ) {\r\n        this.canvas.style.cursor = 'grabbing';\r\n        this.totalDistance       = 0;\r\n        this.isDragging          = true;\r\n        this.prevX               = this.isMobile ? event.touches[ 0 ].clientX : event.pageX;\r\n    }\r\n\r\n    handleMouseMove ( event ) {\r\n        if ( this.isDragging ) {\r\n            this.svgIcon.classList.add( 'is-rotating' );\r\n            const currentPositionX = this.isMobile ? event.touches[ 0 ].clientX : event.clientX;\r\n            const deltaX           = ( currentPositionX - this.prevX );\r\n            const direction        = deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0;\r\n            const amount           = this.options.amount;\r\n            this.totalDistance += Math.abs( deltaX );\r\n            if ( this.totalDistance % 2 === 0 ) {\r\n                this.rotation += direction;\r\n            }\r\n            if ( this.rotation < 1 ) {\r\n                this.rotation = amount;\r\n            }\r\n            else if ( this.rotation > amount ) {\r\n                this.rotation = 1;\r\n            }\r\n            _helpers_images__WEBPACK_IMPORTED_MODULE_4__.imageHelper.drawImage( this );\r\n            this.prevX = this.isMobile ? event.touches[ 0 ].clientX : event.clientX;\r\n        }\r\n    }\r\n\r\n    handleMouseUp () {\r\n        this.canvas.style.cursor = 'auto';\r\n        this.isDragging          = false;\r\n        this.svgIcon.classList.remove( 'is-rotating' );\r\n    }\r\n\r\n    setState ( state ) {\r\n        this.state = state;\r\n        this.setAttribute( 'state', this.state );\r\n    }\r\n}\r\n\r\ncustomElements.define( 'co-three-sixty', CoThreeSixty );\n\n//# sourceURL=webpack://360/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;