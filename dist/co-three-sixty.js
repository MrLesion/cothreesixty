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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   error: () => (/* binding */ error),\n/* harmony export */   log: () => (/* binding */ log),\n/* harmony export */   warn: () => (/* binding */ warn)\n/* harmony export */ });\n﻿function log ( strMessage, objData = {} ) {\r\n    if ( this.options.debug === true ) {\r\n        console.log( `--| ${strMessage}`, objData );\r\n    }\r\n}\r\n\r\nfunction warn ( strMessage, objData = {} ) {\r\n    if ( this.options.debug === true ) {\r\n        console.warn( `--| ${strMessage}`, objData );\r\n    }\r\n}\r\n\r\nfunction error ( strMessage, objData = {} ) {\r\n    if ( this.options.debug === true ) {\r\n        console.error( `--| ${strMessage}`, objData );\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://co-three-sixty/./src/helpers/debug.js?");

/***/ }),

/***/ "./src/helpers/events.js":
/*!*******************************!*\
  !*** ./src/helpers/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bindEvents: () => (/* binding */ bindEvents),\n/* harmony export */   emitEvent: () => (/* binding */ emitEvent),\n/* harmony export */   setState: () => (/* binding */ setState)\n/* harmony export */ });\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ \"./src/helpers/images.js\");\n/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug */ \"./src/helpers/debug.js\");\n﻿\r\n\r\n\r\nfunction createEvent ( eventName, detail ) {\r\n    return new CustomEvent( eventName, {\r\n        detail: detail,\r\n        bubbles: true,\r\n        cancelable: true,\r\n        composed: false\r\n    } );\r\n}\r\n\r\nfunction emitEvent ( eventName, detail = {} ) {\r\n    const event = createEvent( eventName, detail );\r\n    this.dispatchEvent( event );\r\n}\r\n\r\nfunction setState ( state ) {\r\n    this.state = state;\r\n    _debug__WEBPACK_IMPORTED_MODULE_1__.log.call( this, `Setting state to ${state}` );\r\n    this.setAttribute( 'state', this.state );\r\n}\r\n\r\nfunction bindEvents () {\r\n    this.container.addEventListener( 'mouseenter', mouseEnter.bind( this ) );\r\n    this.container.addEventListener( 'mouseleave', mouseLeave.bind( this ) );\r\n    this.canvas.addEventListener( 'mousedown', mouseDown.bind( this ) );\r\n    this.canvas.addEventListener( 'mousemove', mouseMove.bind( this ) );\r\n    this.canvas.addEventListener( 'mouseup', mouseUp.bind( this ) );\r\n    this.canvas.addEventListener( 'dragleave', mouseUp.bind( this ) );\r\n    this.canvas.addEventListener( 'wheel', mouseWheel.bind( this ) );\r\n}\r\n\r\nfunction mouseEnter () {\r\n    this.container.classList.add( 'is-interacting' );\r\n}\r\n\r\nfunction mouseLeave () {\r\n    this.container.classList.add( 'is-interacting' );\r\n}\r\n\r\nfunction mouseDown ( event ) {\r\n    this.canvas.style.cursor = 'grabbing';\r\n    this.totalDistance       = 0;\r\n    this.isDragging          = true;\r\n    this.prevX               = this.isMobile ? event.touches[ 0 ].clientX : event.pageX;\r\n}\r\n\r\nfunction mouseMove ( event ) {\r\n    if ( this.isDragging ) {\r\n        const currentPositionX = this.isMobile ? event.touches[ 0 ].clientX : event.clientX;\r\n        const amount           = this.options.amount;\r\n        const deltaX           = ( currentPositionX - this.prevX );\r\n        const direction        = deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0;\r\n        this.totalDistance += Math.abs( deltaX );\r\n        if ( ( this.totalDistance + amount ) % 2 / amount === 0 ) {\r\n            this.rotation += direction;\r\n        }\r\n        if ( this.rotation < this.options.startIndex ) {\r\n            this.rotation = amount;\r\n        }\r\n        else if ( this.rotation > amount ) {\r\n            this.rotation = this.options.startIndex;\r\n        }\r\n        _images__WEBPACK_IMPORTED_MODULE_0__.drawImage.call( this );\r\n        this.prevX = this.isMobile ? event.touches[ 0 ].clientX : event.clientX;\r\n    }\r\n    else {\r\n        if ( this.zoomLevel > 1 ) {\r\n            const rect          = this.canvas.getBoundingClientRect();\r\n            const mousePosition = {\r\n                x: event.clientX,\r\n                y: event.clientY\r\n            };\r\n            this.panning.x      = mousePosition.x * this.zoomLevel;\r\n            this.panning.y      = mousePosition.y * this.zoomLevel;\r\n            _images__WEBPACK_IMPORTED_MODULE_0__.drawImage.call( this );\r\n        }\r\n    }\r\n}\r\n\r\nfunction mouseUp () {\r\n    this.canvas.style.cursor = 'auto';\r\n    this.isDragging          = false;\r\n}\r\n\r\nfunction mouseWheel ( event ) {\r\n    event.preventDefault();\r\n    if ( this.zoomLevel === 1 ) {\r\n        if ( event.deltaY > 0 ) {\r\n            this.rotation--;\r\n        }\r\n        else {\r\n            this.rotation++;\r\n        }\r\n        if ( this.rotation < this.options.startIndex ) {\r\n            this.rotation = this.options.amount;\r\n        }\r\n        else if ( this.rotation > this.options.amount ) {\r\n            this.rotation = this.options.startIndex;\r\n        }\r\n        _images__WEBPACK_IMPORTED_MODULE_0__.drawImage.call( this );\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://co-three-sixty/./src/helpers/events.js?");

/***/ }),

/***/ "./src/helpers/icon.js":
/*!*****************************!*\
  !*** ./src/helpers/icon.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create360Icon: () => (/* binding */ create360Icon),\n/* harmony export */   get360Icon: () => (/* binding */ get360Icon),\n/* harmony export */   getToolIcon: () => (/* binding */ getToolIcon)\n/* harmony export */ });\n﻿function get360Icon () {\r\n    const svg       = '<svg fill=\"#e1e1e1\" height=\"200\" width=\"200\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 480\" xml:space=\"preserve\"><path d=\"M391.502 210.725c-5.311-1.52-10.846 1.555-12.364 6.865-1.519 5.31 1.555 10.846 6.864 12.364C431.646 243.008 460 261.942 460 279.367c0 12.752-15.51 26.749-42.552 38.402-29.752 12.82-71.958 22.2-118.891 26.425l-40.963-.555-.139-.001c-5.46 0-9.922 4.389-9.996 9.865-.075 5.522 4.342 10.06 9.863 10.134l41.479.562.136.001c.297 0 .593-.013.888-.039 49.196-4.386 93.779-14.339 125.538-28.024C470.521 316.676 480 294.524 480 279.367c0-27.943-31.43-52.321-88.498-68.642zM96.879 199.333c-5.522 0-10 4.477-10 10s4.478 10 10 10H138v41.333H96.879c-5.522 0-10 4.477-10 10s4.478 10 10 10H148c5.523 0 10-4.477 10-10V148c0-5.523-4.477-10-10-10H96.879c-5.522 0-10 4.477-10 10s4.478 10 10 10H138v41.333H96.879zM188.879 280.667h61.334c5.522 0 10-4.477 10-10v-61.333c0-5.523-4.477-10-10-10h-51.334V158H240c5.523 0 10-4.477 10-10s-4.477-10-10-10h-51.121c-5.523 0-10 4.477-10 10v122.667c0 5.523 4.477 10 10 10zm10-61.334h41.334v41.333h-41.334v-41.333z\"/><path d=\"M291.121 280.667h61.334c5.522 0 10-4.477 10-10V148c0-5.523-4.478-10-10-10h-61.334c-5.522 0-10 4.477-10 10v122.667c0 5.523 4.478 10 10 10zm10-122.667h41.334v102.667h-41.334V158zM182.857 305.537c-3.567-4.216-9.877-4.743-14.093-1.176-4.217 3.567-4.743 9.876-1.177 14.093l22.366 26.44c-47.196-3.599-89.941-12.249-121.37-24.65C37.708 308.06 20 293.162 20 279.367c0-16.018 23.736-33.28 63.493-46.176 5.254-1.704 8.131-7.344 6.427-12.598-1.703-5.253-7.345-8.13-12.597-6.427-23.129 7.502-41.47 16.427-54.515 26.526C7.674 252.412 0 265.423 0 279.367c0 23.104 21.178 43.671 61.242 59.48 32.564 12.849 76.227 21.869 124.226 25.758l-19.944 22.104c-3.7 4.1-3.376 10.424.725 14.123a9.96 9.96 0 0 0 6.696 2.576 9.975 9.975 0 0 0 7.427-3.301l36.387-40.325a9.999 9.999 0 0 0 2.576-6.699v-.764a9.999 9.999 0 0 0-2.365-6.458l-34.113-40.324zM381.414 137.486h40.879c5.522 0 10-4.477 10-10V86.592c0-5.523-4.478-10-10-10h-40.879c-5.522 0-10 4.477-10 10v40.894c0 5.523 4.478 10 10 10zm10-40.894h20.879v20.894h-20.879V96.592z\"/></svg>';\r\n    const blob      = new Blob( [ svg ], { type: 'image/svg+xml' } );\r\n    const url       = URL.createObjectURL( blob );\r\n    const svgImage  = new Image();\r\n    svgImage.width  = 100;\r\n    svgImage.height = 100;\r\n    svgImage.src    = url;\r\n    svgImage.setAttribute( 'class', 'co-three-sixty-icon' );\r\n    return svgImage;\r\n}\r\n\r\nfunction create360Icon () {\r\n    const icon  = get360Icon();\r\n    icon.onload = () => {\r\n        this.container.appendChild( icon );\r\n    }\r\n    icon.addEventListener( 'click', this.spin.bind( this ) );\r\n}\r\n\r\nfunction getToolIcon ( iconName ) {\r\n    const spinIcon = '<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"currentColor\"><path d=\"M15 49A24 24 0 0 1 32 8M49 15a24 24 0 0 1-17 41\"/><path d=\"M15.03 40v8.97H8M48.97 24v-8.97H56\"/></svg>';\r\n    const zoomIcon = '<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"currentColor\"><circle cx=\"28\" cy=\"28\" r=\"20\"/><path d=\"M56 56 42.14 42.14M16 28h24M28 16v24\"/></svg>';\r\n    const iconEnum = {\r\n        'spin': spinIcon,\r\n        'zoom': zoomIcon\r\n    }\r\n    return iconEnum[ iconName ];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://co-three-sixty/./src/helpers/icon.js?");

/***/ }),

/***/ "./src/helpers/images.js":
/*!*******************************!*\
  !*** ./src/helpers/images.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawImage: () => (/* binding */ drawImage),\n/* harmony export */   mapImages: () => (/* binding */ mapImages),\n/* harmony export */   preloadImages: () => (/* binding */ preloadImages)\n/* harmony export */ });\n/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug */ \"./src/helpers/debug.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/helpers/events.js\");\n﻿\r\n\r\n\r\nfunction mapImages () {\r\n    if ( this.imageSlot !== null ) {\r\n        return [];\r\n    }\r\n    else {\r\n        let amount = this.options.amount;\r\n        if ( this.options.imageList.length > 0 ) {\r\n            amount = this.options.imageList.length\r\n        }\r\n        return [ ...new Array( amount ) ].map( ( _item, index ) => {\r\n            const imageIndex = ( index + this.options.startIndex );\r\n            let imageName    = imageIndex.toString();\r\n            if ( this.options.leadingZeroPadding > 0 ) {\r\n                imageName = imageName.padStart( this.options.leadingZeroPadding, '0' );\r\n            }\r\n            const imagePath = `${this.options.folder}${this.options.filename}`;\r\n            return imagePath.replace( '{index}', imageName );\r\n        } );\r\n    }\r\n}\r\n\r\nfunction preloadImages ( imagePaths ) {\r\n    if ( this.imageSlot !== null ) {\r\n        return new Promise( ( resolve, reject ) => {\r\n            this.images = [ ...Array.from( this.imageSlot.querySelectorAll( 'img' ) ) ];\r\n            resolve( this.images );\r\n        } );\r\n    }\r\n    else {\r\n        return new Promise( ( resolve, reject ) => {\r\n            this.images          = [];\r\n            let loadedImageCount = 0;\r\n            for ( let i = 0; i < imagePaths.length; i++ ) {\r\n                ( ( index ) => {\r\n                    const image   = new Image();\r\n                    image.src     = imagePaths[ index ];\r\n                    image.onload  = () => {\r\n                        loadedImageCount++;\r\n                        this.images[ index ] = image;\r\n                        if ( loadedImageCount === imagePaths.length ) {\r\n                            resolve( this.images );\r\n                        }\r\n                    };\r\n                    image.onerror = () => {\r\n                        reject( `Failed to load image: ${imagePaths[ i ]}` );\r\n                    };\r\n                } )( i );\r\n            }\r\n        } );\r\n    }\r\n}\r\n\r\nfunction drawImage () {\r\n    const scale = this.zoomLevel;\r\n    const image = this.images[ this.rotation - this.options.startIndex ];\r\n    if ( this.state === 'loading' ) {\r\n        this.canvas.width  = image.width;\r\n        this.canvas.height = image.height;\r\n        _events__WEBPACK_IMPORTED_MODULE_1__.setState.call(this, 'ready');\r\n    }\r\n    this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );\r\n    image.width = this.canvas.width;\r\n    _debug__WEBPACK_IMPORTED_MODULE_0__.log.call( this, `Drawing image ${this.rotation}` );\r\n    const sx = scale > 1 ? image.width / ( scale * scale ) : 0;\r\n    const sy = scale > 1 ? image.height / ( scale * scale ) : 0;\r\n    const sw = image.width;\r\n    const sh = image.height;\r\n    const dx = -this.panning.x;\r\n    const dy = -this.panning.y;\r\n    const dw = this.canvas.width * scale;\r\n    const dh = this.canvas.height * scale;\r\n    this.context.drawImage( image, sx, sy, sw, sh, dx, dy, dw, dh );\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://co-three-sixty/./src/helpers/images.js?");

/***/ }),

/***/ "./src/helpers/options.js":
/*!********************************!*\
  !*** ./src/helpers/options.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getOptionName: () => (/* binding */ getOptionName),\n/* harmony export */   getOptionValue: () => (/* binding */ getOptionValue),\n/* harmony export */   isOptionsValid: () => (/* binding */ isOptionsValid),\n/* harmony export */   setOptions: () => (/* binding */ setOptions)\n/* harmony export */ });\n﻿function getOptionName ( strOptionsName ) {\r\n    return strOptionsName.split( '-' ).map( ( char, index ) => index ? char.charAt( 0 ).toUpperCase() + char.slice( 1 ).toLowerCase() : char.toLowerCase() ).join( '' );\r\n}\r\n\r\nfunction getOptionValue ( strAttribute ) {\r\n    let value = Number( strAttribute );\r\n    if ( isNaN( value ) ) {\r\n        value = strAttribute;\r\n        if ( value.toLowerCase() === 'true' ) {\r\n            value = true;\r\n        }\r\n        else if ( value.toLowerCase() === 'false' ) {\r\n            value = false;\r\n        } else if(value.indexOf(',') > -1){\r\n            value = value.split( ',' ).map( ( str ) => str );\r\n        }\r\n    }\r\n    return value;\r\n}\r\n\r\nfunction isOptionsValid () {\r\n    if ( this.imageSlot !== null ) {\r\n        return this.imageSlot.querySelectorAll( 'img' ).length > 0;\r\n    }\r\n    return this.options.amount > 0 && this.options.folder !== '' && this.options.filename !== '';\r\n}\r\n\r\nfunction setOptions ( objOptions = {} ) {\r\n    this.options = Object.assign( {}, this.defaultOptions, objOptions );\r\n    this.getAttributeNames().forEach( ( attributeName ) => {\r\n        {\r\n            this.options[ getOptionName( attributeName ) ] = getOptionValue( this.getAttribute( attributeName ) );\r\n        }\r\n    } );\r\n    if ( this.imageSlot !== null ) {\r\n        this.options.amount = this.imageSlot.querySelectorAll( 'img' ).length;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://co-three-sixty/./src/helpers/options.js?");

/***/ }),

/***/ "./src/helpers/style.js":
/*!******************************!*\
  !*** ./src/helpers/style.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStyle: () => (/* binding */ createStyle)\n/* harmony export */ });\n﻿function createStyle(){\r\n    const styleSheet = document.createElement( 'style' );\r\n    styleSheet.textContent = `\r\n\t\t\t.co-three-sixty{\r\n\t\t\t\tposition:relative;\r\n\t\t\t\twidth:100%;\r\n\t\t\t\tbox-shadow: 0 0 3px 1px rgba(0,0,0,.25);\r\n\t\t\t}\r\n\t\t\t.co-three-sixty.is-interacting .co-three-sixty-icon{\r\n\t\t\t    display:none;\r\n\t\t\t\topacity:0;\r\n\t\t\t}\r\n\t\t\t.co-three-sixty-canvas{\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t}\r\n\t\t\t.co-three-sixty-icon{\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tbottom:5%;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tleft:0;\r\n\t\t\t\topacity:.5;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\ttransition: opacity .3s ease;\r\n\t\t\t}\r\n\r\n\t\t\t.co-three-sixty-toolbar{\r\n\t\t\t    display:flex;\r\n\t\t\t    width: 100%;\r\n\t\t\t    justify-content: start;\r\n\t\t\t    //background: #f1f1f1;\r\n\t\t\t}\r\n\t\t\t.co-three-sixty-toolbar-item{\r\n\t\t\t    padding: 5px;\r\n\t\t\t    //border-right: 1px solid #e1e1e1;\r\n\t\t\t    cursor: pointer;\r\n\t\t\t    color: #1e1e1e;\r\n\t\t\t    transition: all .3s ease;\r\n\t\t\t}\r\n\t\t\t.co-three-sixty-toolbar-item:hover{\r\n\t\t\t    color: #000;\r\n\t\t\t}\r\n\t\t\t.co-three-sixty-toolbar-item svg{\r\n\t\t\t    width: 25px;\r\n\t\t\t}\r\n\t\t`;\r\n    this.shadow.appendChild( styleSheet );\r\n}\r\n\r\n\n\n//# sourceURL=webpack://co-three-sixty/./src/helpers/style.js?");

/***/ }),

/***/ "./src/helpers/toolbar.js":
/*!********************************!*\
  !*** ./src/helpers/toolbar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToolbar: () => (/* binding */ createToolbar)\n/* harmony export */ });\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/helpers/icon.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ \"./src/helpers/images.js\");\n﻿\r\n\r\nfunction createToolbar () {\r\n    if ( this.options.tools.length ) {\r\n        const toolBarContainer = document.createElement('div');\r\n        toolBarContainer.setAttribute('class', 'co-three-sixty-toolbar');\r\n        this.options.tools.forEach((tool) =>{\r\n            const toolElement = document.createElement('div');\r\n            toolElement.setAttribute('class', `co-three-sixty-toolbar-item co-three-sixty-toolbar-item-${tool}`);\r\n            toolElement.innerHTML = (0,_icon__WEBPACK_IMPORTED_MODULE_0__.getToolIcon)(tool);\r\n            toolElement.addEventListener('click', toolEvent.bind(this, tool));\r\n            toolBarContainer.appendChild(toolElement);\r\n        });\r\n        this.container.appendChild(toolBarContainer);\r\n    }\r\n}\r\n\r\nfunction toolEvent (...args) {\r\n    const tool = args[0];\r\n    switch ( tool ) {\r\n        case 'spin':\r\n            this.spin.call( this );\r\n            break;\r\n        case 'zoom':\r\n            if(this.zoomLevel > 1){\r\n                this.panning.x = 0;\r\n                this.panning.y = 0;\r\n                this.zoom.call( this, 1 );\r\n            } else{\r\n                this.zoom.call( this, 3 );\r\n            }\r\n            \r\n            break;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://co-three-sixty/./src/helpers/toolbar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/debug */ \"./src/helpers/debug.js\");\n/* harmony import */ var _helpers_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/style */ \"./src/helpers/style.js\");\n/* harmony import */ var _helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/icon */ \"./src/helpers/icon.js\");\n/* harmony import */ var _helpers_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/toolbar */ \"./src/helpers/toolbar.js\");\n/* harmony import */ var _helpers_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/options */ \"./src/helpers/options.js\");\n/* harmony import */ var _helpers_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/images */ \"./src/helpers/images.js\");\n/* harmony import */ var _helpers_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/events */ \"./src/helpers/events.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass CoThreeSixty extends HTMLElement {\r\n    constructor () {\r\n        super();\r\n        /* Create shadow-root */\r\n        this.shadow = this.attachShadow( { mode: 'open' } );\r\n        /* Set global variables */\r\n        this.canvas        = document.createElement( 'canvas' );\r\n        this.context       = this.canvas.getContext( '2d' );\r\n        this.container     = document.createElement( 'div' );\r\n        this.state         = 'loading';\r\n        this.isDragging    = false;\r\n        this.prevX         = 0;\r\n        this.totalDistance = 0;\r\n        this.isMobile      = !!( 'ontouchstart' in window || navigator.msMaxTouchPoints );\r\n        this.zoomLevel     = 1;\r\n        this.panning       = {\r\n            x: 0,\r\n            y: 0\r\n        };\r\n        this.images        = [];\r\n        this.imageSlot     = this.querySelector( 'slot[name=\"imageList\"]' );\r\n        /* Create and set options */\r\n        this.defaultOptions = {\r\n            folder: '',\r\n            filename: '',\r\n            amount: 0,\r\n            imageList: [],\r\n            startIndex: 0,\r\n            spinSpeed: 100,\r\n            autoSpin: false,\r\n            debug: false,\r\n            leadingZeroPadding: 0,\r\n            initOnLoad: true,\r\n            width: 500,\r\n            height: 500,\r\n            tools: []\r\n        };\r\n        _helpers_options__WEBPACK_IMPORTED_MODULE_4__.setOptions.call( this );\r\n        /* Set container */\r\n        this.container.setAttribute( 'class', 'co-three-sixty' );\r\n        _helpers_events__WEBPACK_IMPORTED_MODULE_6__.setState.call( this, this.state );\r\n        /* Update rotation start index from options */\r\n        this.rotation = this.options.startIndex;\r\n        /* Setup canvas */\r\n        this.canvas.width  = this.options.width;\r\n        this.canvas.height = this.options.height;\r\n        this.canvas.setAttribute( 'class', 'co-three-sixty-canvas' );\r\n        /* Create style */\r\n        _helpers_style__WEBPACK_IMPORTED_MODULE_1__.createStyle.call( this );\r\n        /* Create icon */\r\n        _helpers_icon__WEBPACK_IMPORTED_MODULE_2__.create360Icon.call( this );\r\n        /* Create toolbar */\r\n        _helpers_toolbar__WEBPACK_IMPORTED_MODULE_3__.createToolbar.call( this );\r\n        /* Append element to shadow-dom */\r\n        this.container.appendChild( this.canvas );\r\n        this.shadow.appendChild( this.container );\r\n        if ( this.options.initOnLoad === true ) {\r\n            this.init();\r\n        }\r\n    }\r\n\r\n    init ( objOptions = null ) {\r\n        if ( objOptions !== null ) {\r\n            _helpers_options__WEBPACK_IMPORTED_MODULE_4__.setOptions.call( this, objOptions );\r\n        }\r\n        if ( _helpers_options__WEBPACK_IMPORTED_MODULE_4__.isOptionsValid.call( this ) === true ) {\r\n            const imagePaths = _helpers_images__WEBPACK_IMPORTED_MODULE_5__.mapImages.call( this );\r\n            _helpers_images__WEBPACK_IMPORTED_MODULE_5__.preloadImages.call( this, imagePaths ).then( () => {\r\n                _helpers_debug__WEBPACK_IMPORTED_MODULE_0__.log.call( this, 'Initialized', this.options );\r\n                _helpers_events__WEBPACK_IMPORTED_MODULE_6__.emitEvent.call( this, 'loaded' );\r\n                _helpers_images__WEBPACK_IMPORTED_MODULE_5__.drawImage.call( this );\r\n                if ( this.options.autoSpin === true ) {\r\n                    this.spin();\r\n                }\r\n                _helpers_events__WEBPACK_IMPORTED_MODULE_6__.bindEvents.call( this );\r\n            } )\r\n        }\r\n        else {\r\n            _helpers_debug__WEBPACK_IMPORTED_MODULE_0__.error.call( this, 'Options fail', this.options );\r\n        }\r\n    }\r\n\r\n    update ( objUpdatedOptions = {} ) {\r\n        _helpers_events__WEBPACK_IMPORTED_MODULE_6__.setState.call( this, 'loading' );\r\n        this.options   = Object.assign( {}, this.defaultOptions, objUpdatedOptions );\r\n        this.rotation  = this.options.startIndex;\r\n        this.imageSlot = null;\r\n        this.images    = [];\r\n        _helpers_events__WEBPACK_IMPORTED_MODULE_6__.emitEvent.call( this, 'updated' );\r\n        this.init();\r\n    }\r\n\r\n    spin () {\r\n        let hasCycled    = false;\r\n        const startIndex = this.rotation;\r\n        const interval   = setInterval( () => {\r\n            if ( hasCycled === false && this.rotation < this.options.amount ) {\r\n                this.rotation++;\r\n                _helpers_images__WEBPACK_IMPORTED_MODULE_5__.drawImage.call( this );\r\n            }\r\n            else {\r\n                if ( hasCycled === false ) {\r\n                    _helpers_debug__WEBPACK_IMPORTED_MODULE_0__.log.call( this, 'rotation limit reached, setting hasCycled to true' );\r\n                    this.rotation = this.options.startIndex;\r\n                    hasCycled     = true;\r\n                }\r\n                if ( this.rotation < startIndex ) {\r\n                    this.rotation++;\r\n                    _helpers_images__WEBPACK_IMPORTED_MODULE_5__.drawImage.call( this );\r\n                }\r\n                else {\r\n                    clearInterval( interval );\r\n                    this.rotation = startIndex;\r\n                }\r\n            }\r\n        }, this.options.spinSpeed );\r\n    }\r\n\r\n    zoom ( zoomLevel = 1 ) {\r\n        this.zoomLevel = zoomLevel;\r\n        _helpers_images__WEBPACK_IMPORTED_MODULE_5__.drawImage.call( this );\r\n    }\r\n\r\n    pan ( event ) {\r\n        _helpers_debug__WEBPACK_IMPORTED_MODULE_0__.warn.call( this, 'Not implemented yet' );\r\n    }\r\n}\r\n\r\ncustomElements.define( 'co-three-sixty', CoThreeSixty );\n\n//# sourceURL=webpack://co-three-sixty/./src/index.js?");

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