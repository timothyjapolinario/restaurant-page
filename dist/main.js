/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComponent": () => (/* binding */ addComponent)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");




const addComponent = (contentBody)=>{
    //Parent Header
    const header = document.createElement('div')
    header.classList.add(('header'))

    //Contents
    addPageLogo(header)
    addMenuOptions(header)

    //Adding header to the wrapper
    contentBody.appendChild(header)

}

const addPageLogo = (header) =>{
    const logoAndName = document.createElement('div')
    logoAndName.classList.add('logo-name')
    const name = document.createElement('span')
    name.innerText = "Third-Round Knockout"
    name.classList.add("page-name")
    const myLogo = new Image()
    myLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__
    myLogo.id = "logo"
    logoAndName.appendChild(myLogo)
    logoAndName.appendChild(name)


    header.appendChild(logoAndName)
}


const addMenuOptions = (header)=>{
    const options = document.createElement('div')
    options.classList.add('option-list')

    const menu = document.createElement('div')
    menu.classList.add('header-option')
    menu.innerText = "Menu"
    menu.addEventListener('click',()=>{
        clearSelectedClass(options)
        addSelectedClass(menu)
    })

    const about = document.createElement('div')
    about.classList.add('header-option')
    about.classList.add('selected')
    about.innerText = "About"
    about.addEventListener('click',()=>{
        clearSelectedClass(options)
        addSelectedClass(about)
    })

    const contact = document.createElement('div')
    contact.classList.add('header-option')
    contact.innerText = "Contact"
    contact.addEventListener('click',()=>{
        clearSelectedClass(options)
        addSelectedClass(contact)
    })
    
    options.appendChild(menu)
    options.appendChild(about)
    options.appendChild(contact)
    header.appendChild(options)
}

const addSelectedClass = (option) =>{
    option.classList.add('selected')
}
const clearSelectedClass = (options)=>{
    options.childNodes.forEach(element => {
        element.classList.remove('selected')
    });
}


/***/ }),

/***/ "./src/modules/main-content.js":
/*!*************************************!*\
  !*** ./src/modules/main-content.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComponent": () => (/* binding */ addComponent)
/* harmony export */ });
/* harmony import */ var _images_third_round_knockout_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/third-round-knockout.png */ "./src/images/third-round-knockout.png");

const addComponent = (contentBody) =>{
    
    const mainContent = document.createElement('div')
    mainContent.classList.add('main-content')


    loadAbout(mainContent)
    contentBody.appendChild(mainContent)
}

const loadAbout = (mainContent) =>{
    const aboutContent = document.createElement('div')
    aboutContent.classList.add('about-content')

    const restaurantImage = new Image()
    restaurantImage.src = _images_third_round_knockout_png__WEBPACK_IMPORTED_MODULE_0__
    restaurantImage.id = 'restaurant-image'

    const restaurantDescription = document.createElement('div')
    restaurantDescription.classList.add('restaurant-description')
    restaurantDescription.appendChild(createParagraph('Offering the heaviest and tastiest food in Liyue!'))
    restaurantDescription.appendChild(createParagraph('Traveler, Paimon, Zhongli ate here! YES THE LEGENDARY CHARACTERS'))
    restaurantDescription.appendChild(createParagraph("Won't guarantee anyone to survive after three rounds"))
    aboutContent.appendChild(restaurantImage)
    aboutContent.appendChild(restaurantDescription)

    mainContent.appendChild(aboutContent)
}
 
const createParagraph = (text) =>{
    let paragraph = document.createElement('p')
    paragraph.innerText = text
    return paragraph
}



/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c0f9892aae7835dede5.png";

/***/ }),

/***/ "./src/images/third-round-knockout.png":
/*!*********************************************!*\
  !*** ./src/images/third-round-knockout.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d875e1294e948e6b8361.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _modules_main_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main-content.js */ "./src/modules/main-content.js");


const content = document.querySelector('#content')

;(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_0__.addComponent)(content)
;(0,_modules_main_content_js__WEBPACK_IMPORTED_MODULE_1__.addComponent)(content)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7Ozs7QUFJckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQUk7QUFDckI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDZEQUFtQjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZmlFO0FBQ1k7QUFDN0U7O0FBRUEsaUVBQVk7QUFDWix1RUFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWFpbi1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28ucG5nJ1xuXG5cblxuY29uc3QgYWRkQ29tcG9uZW50ID0gKGNvbnRlbnRCb2R5KT0+e1xuICAgIC8vUGFyZW50IEhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoKCdoZWFkZXInKSlcblxuICAgIC8vQ29udGVudHNcbiAgICBhZGRQYWdlTG9nbyhoZWFkZXIpXG4gICAgYWRkTWVudU9wdGlvbnMoaGVhZGVyKVxuXG4gICAgLy9BZGRpbmcgaGVhZGVyIHRvIHRoZSB3cmFwcGVyXG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG59XG5cbmNvbnN0IGFkZFBhZ2VMb2dvID0gKGhlYWRlcikgPT57XG4gICAgY29uc3QgbG9nb0FuZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxvZ29BbmROYW1lLmNsYXNzTGlzdC5hZGQoJ2xvZ28tbmFtZScpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG5hbWUuaW5uZXJUZXh0ID0gXCJUaGlyZC1Sb3VuZCBLbm9ja291dFwiXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwicGFnZS1uYW1lXCIpXG4gICAgY29uc3QgbXlMb2dvID0gbmV3IEltYWdlKClcbiAgICBteUxvZ28uc3JjID0gTG9nb1xuICAgIG15TG9nby5pZCA9IFwibG9nb1wiXG4gICAgbG9nb0FuZE5hbWUuYXBwZW5kQ2hpbGQobXlMb2dvKVxuICAgIGxvZ29BbmROYW1lLmFwcGVuZENoaWxkKG5hbWUpXG5cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQW5kTmFtZSlcbn1cblxuXG5jb25zdCBhZGRNZW51T3B0aW9ucyA9IChoZWFkZXIpPT57XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdvcHRpb24tbGlzdCcpXG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1vcHRpb24nKVxuICAgIG1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjbGVhclNlbGVjdGVkQ2xhc3Mob3B0aW9ucylcbiAgICAgICAgYWRkU2VsZWN0ZWRDbGFzcyhtZW51KVxuICAgIH0pXG5cbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW9wdGlvbicpXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgIGFib3V0LmlubmVyVGV4dCA9IFwiQWJvdXRcIlxuICAgIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjbGVhclNlbGVjdGVkQ2xhc3Mob3B0aW9ucylcbiAgICAgICAgYWRkU2VsZWN0ZWRDbGFzcyhhYm91dClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItb3B0aW9uJylcbiAgICBjb250YWN0LmlubmVyVGV4dCA9IFwiQ29udGFjdFwiXG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY2xlYXJTZWxlY3RlZENsYXNzKG9wdGlvbnMpXG4gICAgICAgIGFkZFNlbGVjdGVkQ2xhc3MoY29udGFjdClcbiAgICB9KVxuICAgIFxuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQobWVudSlcbiAgICBvcHRpb25zLmFwcGVuZENoaWxkKGFib3V0KVxuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQoY29udGFjdClcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQob3B0aW9ucylcbn1cblxuY29uc3QgYWRkU2VsZWN0ZWRDbGFzcyA9IChvcHRpb24pID0+e1xuICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG59XG5jb25zdCBjbGVhclNlbGVjdGVkQ2xhc3MgPSAob3B0aW9ucyk9PntcbiAgICBvcHRpb25zLmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgfSk7XG59XG5leHBvcnR7XG4gICAgYWRkQ29tcG9uZW50XG59IiwiaW1wb3J0IHJlc3RhdXJhbnRJbWFnZVBhdGggZnJvbSAnLi4vaW1hZ2VzL3RoaXJkLXJvdW5kLWtub2Nrb3V0LnBuZydcbmNvbnN0IGFkZENvbXBvbmVudCA9IChjb250ZW50Qm9keSkgPT57XG4gICAgXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpXG5cblxuICAgIGxvYWRBYm91dChtYWluQ29udGVudClcbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChtYWluQ29udGVudClcbn1cblxuY29uc3QgbG9hZEFib3V0ID0gKG1haW5Db250ZW50KSA9PntcbiAgICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250ZW50JylcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRJbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgcmVzdGF1cmFudEltYWdlLnNyYyA9IHJlc3RhdXJhbnRJbWFnZVBhdGhcbiAgICByZXN0YXVyYW50SW1hZ2UuaWQgPSAncmVzdGF1cmFudC1pbWFnZSdcblxuICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24nKVxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ09mZmVyaW5nIHRoZSBoZWF2aWVzdCBhbmQgdGFzdGllc3QgZm9vZCBpbiBMaXl1ZSEnKSlcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdUcmF2ZWxlciwgUGFpbW9uLCBaaG9uZ2xpIGF0ZSBoZXJlISBZRVMgVEhFIExFR0VOREFSWSBDSEFSQUNURVJTJykpXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIldvbid0IGd1YXJhbnRlZSBhbnlvbmUgdG8gc3Vydml2ZSBhZnRlciB0aHJlZSByb3VuZHNcIikpXG4gICAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWFnZSlcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2NyaXB0aW9uKVxuXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KVxufVxuIFxuY29uc3QgY3JlYXRlUGFyYWdyYXBoID0gKHRleHQpID0+e1xuICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gdGV4dFxuICAgIHJldHVybiBwYXJhZ3JhcGhcbn1cblxuZXhwb3J0e1xuICAgIGFkZENvbXBvbmVudFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7YWRkQ29tcG9uZW50IGFzIHJlbmRlckhlYWRlcn0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlci5qcyc7XG5pbXBvcnQge2FkZENvbXBvbmVudCBhcyAgcmVuZGVyTWFpbkNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy9tYWluLWNvbnRlbnQuanMnO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxucmVuZGVySGVhZGVyKGNvbnRlbnQpXG5yZW5kZXJNYWluQ29udGVudChjb250ZW50KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9