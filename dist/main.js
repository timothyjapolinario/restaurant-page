/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/menu-items sync recursive .png$":
/*!*******************************************!*\
  !*** ./src/images/menu-items/ sync .png$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Item_Bamboo_Shoot_Soup.png": "./src/images/menu-items/Item_Bamboo_Shoot_Soup.png",
	"./Item_Chili-Mince_Cornbread_Buns.png": "./src/images/menu-items/Item_Chili-Mince_Cornbread_Buns.png",
	"./Item_Come_and_Get_It.png": "./src/images/menu-items/Item_Come_and_Get_It.png",
	"./Item_Jueyun_Guoba.png": "./src/images/menu-items/Item_Jueyun_Guoba.png",
	"./Item_Mora_Meat.png": "./src/images/menu-items/Item_Mora_Meat.png",
	"./Item_Rice_Buns.png": "./src/images/menu-items/Item_Rice_Buns.png",
	"./Item_Rice_Pudding.png": "./src/images/menu-items/Item_Rice_Pudding.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/menu-items sync recursive .png$";

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/modules/image-path-loader.js":
/*!******************************************!*\
  !*** ./src/modules/image-path-loader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImagesPath": () => (/* binding */ getImagesPath)
/* harmony export */ });
const getImagesPath = () =>{
    const context = __webpack_require__("./src/images/menu-items sync recursive .png$");
    const obj = {};
    context.keys().forEach((key) => {
      const menuItem = key.split('./').pop() // remove the first 2 characters
        .substring(0, key.length - 6); // remove the file extension
      obj[menuItem] = context(key);
    });
    return obj
}



/***/ }),

/***/ "./src/modules/main-content.js":
/*!*************************************!*\
  !*** ./src/modules/main-content.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComponent": () => (/* binding */ addComponent)
/* harmony export */ });
/* harmony import */ var _images_third_round_knockout_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/third-round-knockout.png */ "./src/images/third-round-knockout.png");
/* harmony import */ var _image_path_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-path-loader.js */ "./src/modules/image-path-loader.js");




const addComponent = (contentBody) =>{
    
    const mainContent = document.createElement('div')
    mainContent.classList.add('main-content')


    //loadAbout(mainContent)
    loadMenu(mainContent)
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
const loadMenu = (mainContent) => {
    const menuContent = document.createElement('div')
    menuContent.classList.add('menu-content')


    const menuItems = generateMenuItems()
    console.log(menuItems)
    menuItems.forEach((menuItem)=>{
        createMenuItem(menuItem, menuContent)
    })
    mainContent.appendChild(menuContent)
    
}

const generateMenuItems =()=>{
    const menuItems =[]
    const imagePaths = (0,_image_path_loader_js__WEBPACK_IMPORTED_MODULE_1__.getImagesPath)()
    let newId = 0
    for(const imageName in imagePaths){
        menuItems.push({
            id: newId,
            itemName: fixItemName(imageName),
            itemPrice: randomPrice(),
            imagePath: imagePaths[imageName]
        })
        newId += 1
    }
    return menuItems
}

const randomPrice = () =>{
    return Math.floor((Math.random() * (9999 - 1000) + 1000));
}

const fixItemName= (itemName) =>{
    let newItemName = itemName.replaceAll('Item_', '')
    newItemName = newItemName.replaceAll('_', ' ')
    return newItemName
}


const createMenuItem = (itemObj, content) =>{
    let menuItemElement = document.createElement('div')
    menuItemElement.classList.add('menu-item')
    let image = new Image()
    image.src = itemObj.imagePath
    image.classList.add('menu-item-image')
    
    let itemInformation = document.createElement('div')
    itemInformation.classList.add('item-information')
    let itemNameElement = document.createElement('p')
    itemNameElement.innerText = itemObj.itemName
    itemInformation.appendChild(itemNameElement)
    let itemPriceElement = document.createElement('p')
    itemPriceElement.innerText= itemObj.itemPrice
    itemInformation.appendChild(itemPriceElement)

    menuItemElement.appendChild(image)
    menuItemElement.appendChild(itemInformation)

    content.appendChild(menuItemElement)
}


/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c0f9892aae7835dede5.png";

/***/ }),

/***/ "./src/images/menu-items/Item_Bamboo_Shoot_Soup.png":
/*!**********************************************************!*\
  !*** ./src/images/menu-items/Item_Bamboo_Shoot_Soup.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e350159556e86730fca7.png";

/***/ }),

/***/ "./src/images/menu-items/Item_Chili-Mince_Cornbread_Buns.png":
/*!*******************************************************************!*\
  !*** ./src/images/menu-items/Item_Chili-Mince_Cornbread_Buns.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "58c956160e17525defd4.png";

/***/ }),

/***/ "./src/images/menu-items/Item_Come_and_Get_It.png":
/*!********************************************************!*\
  !*** ./src/images/menu-items/Item_Come_and_Get_It.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e3c0c759747676acac95.png";

/***/ }),

/***/ "./src/images/menu-items/Item_Jueyun_Guoba.png":
/*!*****************************************************!*\
  !*** ./src/images/menu-items/Item_Jueyun_Guoba.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7af958ef8c4e94be3547.png";

/***/ }),

/***/ "./src/images/menu-items/Item_Mora_Meat.png":
/*!**************************************************!*\
  !*** ./src/images/menu-items/Item_Mora_Meat.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b3d88291f03f4c61d8a9.png";

/***/ }),

/***/ "./src/images/menu-items/Item_Rice_Buns.png":
/*!**************************************************!*\
  !*** ./src/images/menu-items/Item_Rice_Buns.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c426c345973f0869a62.png";

/***/ }),

/***/ "./src/images/menu-items/Item_Rice_Pudding.png":
/*!*****************************************************!*\
  !*** ./src/images/menu-items/Item_Rice_Pudding.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c9042e928f1f217b7320.png";

/***/ }),

/***/ "./src/images/third-round-knockout.png":
/*!*********************************************!*\
  !*** ./src/images/third-round-knockout.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVCcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBSTtBQUNyQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBLG9CQUFvQixtRUFBc0Q7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUb0U7QUFDaEI7OztBQUdwRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDZEQUFtQjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixvRUFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmaUU7QUFDWTtBQUM3RTs7QUFFQSxpRUFBWTtBQUNaLHVFQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvbWVudS1pdGVtcy8gc3luYyAucG5nJCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaW1hZ2UtcGF0aC1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWFpbi1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL0l0ZW1fQmFtYm9vX1Nob290X1NvdXAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUtaXRlbXMvSXRlbV9CYW1ib29fU2hvb3RfU291cC5wbmdcIixcblx0XCIuL0l0ZW1fQ2hpbGktTWluY2VfQ29ybmJyZWFkX0J1bnMucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUtaXRlbXMvSXRlbV9DaGlsaS1NaW5jZV9Db3JuYnJlYWRfQnVucy5wbmdcIixcblx0XCIuL0l0ZW1fQ29tZV9hbmRfR2V0X0l0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51LWl0ZW1zL0l0ZW1fQ29tZV9hbmRfR2V0X0l0LnBuZ1wiLFxuXHRcIi4vSXRlbV9KdWV5dW5fR3VvYmEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUtaXRlbXMvSXRlbV9KdWV5dW5fR3VvYmEucG5nXCIsXG5cdFwiLi9JdGVtX01vcmFfTWVhdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS1pdGVtcy9JdGVtX01vcmFfTWVhdC5wbmdcIixcblx0XCIuL0l0ZW1fUmljZV9CdW5zLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51LWl0ZW1zL0l0ZW1fUmljZV9CdW5zLnBuZ1wiLFxuXHRcIi4vSXRlbV9SaWNlX1B1ZGRpbmcucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUtaXRlbXMvSXRlbV9SaWNlX1B1ZGRpbmcucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9tZW51LWl0ZW1zIHN5bmMgcmVjdXJzaXZlIC5wbmckXCI7IiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28ucG5nJ1xuY29uc3QgYWRkQ29tcG9uZW50ID0gKGNvbnRlbnRCb2R5KT0+e1xuICAgIC8vUGFyZW50IEhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoKCdoZWFkZXInKSlcbiAgICAvL0NvbnRlbnRzXG4gICAgYWRkUGFnZUxvZ28oaGVhZGVyKVxuICAgIGFkZE1lbnVPcHRpb25zKGhlYWRlcilcbiAgICAvL0FkZGluZyBoZWFkZXIgdG8gdGhlIHdyYXBwZXJcbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG5cblxufVxuXG5jb25zdCBhZGRQYWdlTG9nbyA9IChoZWFkZXIpID0+e1xuICAgIGNvbnN0IGxvZ29BbmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsb2dvQW5kTmFtZS5jbGFzc0xpc3QuYWRkKCdsb2dvLW5hbWUnKVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBuYW1lLmlubmVyVGV4dCA9IFwiVGhpcmQtUm91bmQgS25vY2tvdXRcIlxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInBhZ2UtbmFtZVwiKVxuICAgIGNvbnN0IG15TG9nbyA9IG5ldyBJbWFnZSgpXG4gICAgbXlMb2dvLnNyYyA9IExvZ29cbiAgICBteUxvZ28uaWQgPSBcImxvZ29cIlxuICAgIGxvZ29BbmROYW1lLmFwcGVuZENoaWxkKG15TG9nbylcbiAgICBsb2dvQW5kTmFtZS5hcHBlbmRDaGlsZChuYW1lKVxuXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0FuZE5hbWUpXG59XG5cblxuY29uc3QgYWRkTWVudU9wdGlvbnMgPSAoaGVhZGVyKT0+e1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnb3B0aW9uLWxpc3QnKVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItb3B0aW9uJylcbiAgICBtZW51LmlubmVyVGV4dCA9IFwiTWVudVwiXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY2xlYXJTZWxlY3RlZENsYXNzKG9wdGlvbnMpXG4gICAgICAgIGFkZFNlbGVjdGVkQ2xhc3MobWVudSlcbiAgICB9KVxuXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1vcHRpb24nKVxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICBhYm91dC5pbm5lclRleHQgPSBcIkFib3V0XCJcbiAgICBhYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY2xlYXJTZWxlY3RlZENsYXNzKG9wdGlvbnMpXG4gICAgICAgIGFkZFNlbGVjdGVkQ2xhc3MoYWJvdXQpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW9wdGlvbicpXG4gICAgY29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIlxuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNsZWFyU2VsZWN0ZWRDbGFzcyhvcHRpb25zKVxuICAgICAgICBhZGRTZWxlY3RlZENsYXNzKGNvbnRhY3QpXG4gICAgfSlcbiAgICBcbiAgICBvcHRpb25zLmFwcGVuZENoaWxkKG1lbnUpXG4gICAgb3B0aW9ucy5hcHBlbmRDaGlsZChhYm91dClcbiAgICBvcHRpb25zLmFwcGVuZENoaWxkKGNvbnRhY3QpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG9wdGlvbnMpXG59XG5cbmNvbnN0IGFkZFNlbGVjdGVkQ2xhc3MgPSAob3B0aW9uKSA9PntcbiAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxufVxuY29uc3QgY2xlYXJTZWxlY3RlZENsYXNzID0gKG9wdGlvbnMpPT57XG4gICAgb3B0aW9ucy5jaGlsZE5vZGVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgIH0pO1xufVxuZXhwb3J0e1xuICAgIGFkZENvbXBvbmVudFxufSIsImNvbnN0IGdldEltYWdlc1BhdGggPSAoKSA9PntcbiAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvbWVudS1pdGVtcycsIHRydWUsIC8ucG5nJC8pO1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIGNvbnRleHQua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgbWVudUl0ZW0gPSBrZXkuc3BsaXQoJy4vJykucG9wKCkgLy8gcmVtb3ZlIHRoZSBmaXJzdCAyIGNoYXJhY3RlcnNcbiAgICAgICAgLnN1YnN0cmluZygwLCBrZXkubGVuZ3RoIC0gNik7IC8vIHJlbW92ZSB0aGUgZmlsZSBleHRlbnNpb25cbiAgICAgIG9ialttZW51SXRlbV0gPSBjb250ZXh0KGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialxufVxuXG5leHBvcnR7XG4gIGdldEltYWdlc1BhdGhcbn0iLCJpbXBvcnQgcmVzdGF1cmFudEltYWdlUGF0aCBmcm9tICcuLi9pbWFnZXMvdGhpcmQtcm91bmQta25vY2tvdXQucG5nJ1xuaW1wb3J0IHtnZXRJbWFnZXNQYXRofSBmcm9tICcuL2ltYWdlLXBhdGgtbG9hZGVyLmpzJ1xuXG5cbmNvbnN0IGFkZENvbXBvbmVudCA9IChjb250ZW50Qm9keSkgPT57XG4gICAgXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpXG5cblxuICAgIC8vbG9hZEFib3V0KG1haW5Db250ZW50KVxuICAgIGxvYWRNZW51KG1haW5Db250ZW50KVxuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KVxufVxuXG5jb25zdCBsb2FkQWJvdXQgPSAobWFpbkNvbnRlbnQpID0+e1xuICAgIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRlbnQnKVxuXG4gICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gbmV3IEltYWdlKClcbiAgICByZXN0YXVyYW50SW1hZ2Uuc3JjID0gcmVzdGF1cmFudEltYWdlUGF0aFxuICAgIHJlc3RhdXJhbnRJbWFnZS5pZCA9ICdyZXN0YXVyYW50LWltYWdlJ1xuXG4gICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1kZXNjcmlwdGlvbicpXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnT2ZmZXJpbmcgdGhlIGhlYXZpZXN0IGFuZCB0YXN0aWVzdCBmb29kIGluIExpeXVlIScpKVxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ1RyYXZlbGVyLCBQYWltb24sIFpob25nbGkgYXRlIGhlcmUhIFlFUyBUSEUgTEVHRU5EQVJZIENIQVJBQ1RFUlMnKSlcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiV29uJ3QgZ3VhcmFudGVlIGFueW9uZSB0byBzdXJ2aXZlIGFmdGVyIHRocmVlIHJvdW5kc1wiKSlcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltYWdlKVxuICAgIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb24pXG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQpXG59XG4gXG5jb25zdCBjcmVhdGVQYXJhZ3JhcGggPSAodGV4dCkgPT57XG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmFncmFwaC5pbm5lclRleHQgPSB0ZXh0XG4gICAgcmV0dXJuIHBhcmFncmFwaFxufVxuY29uc3QgbG9hZE1lbnUgPSAobWFpbkNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50JylcblxuXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZ2VuZXJhdGVNZW51SXRlbXMoKVxuICAgIGNvbnNvbGUubG9nKG1lbnVJdGVtcylcbiAgICBtZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pPT57XG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKG1lbnVJdGVtLCBtZW51Q29udGVudClcbiAgICB9KVxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KVxuICAgIFxufVxuXG5jb25zdCBnZW5lcmF0ZU1lbnVJdGVtcyA9KCk9PntcbiAgICBjb25zdCBtZW51SXRlbXMgPVtdXG4gICAgY29uc3QgaW1hZ2VQYXRocyA9IGdldEltYWdlc1BhdGgoKVxuICAgIGxldCBuZXdJZCA9IDBcbiAgICBmb3IoY29uc3QgaW1hZ2VOYW1lIGluIGltYWdlUGF0aHMpe1xuICAgICAgICBtZW51SXRlbXMucHVzaCh7XG4gICAgICAgICAgICBpZDogbmV3SWQsXG4gICAgICAgICAgICBpdGVtTmFtZTogZml4SXRlbU5hbWUoaW1hZ2VOYW1lKSxcbiAgICAgICAgICAgIGl0ZW1QcmljZTogcmFuZG9tUHJpY2UoKSxcbiAgICAgICAgICAgIGltYWdlUGF0aDogaW1hZ2VQYXRoc1tpbWFnZU5hbWVdXG4gICAgICAgIH0pXG4gICAgICAgIG5ld0lkICs9IDFcbiAgICB9XG4gICAgcmV0dXJuIG1lbnVJdGVtc1xufVxuXG5jb25zdCByYW5kb21QcmljZSA9ICgpID0+e1xuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKDk5OTkgLSAxMDAwKSArIDEwMDApKTtcbn1cblxuY29uc3QgZml4SXRlbU5hbWU9IChpdGVtTmFtZSkgPT57XG4gICAgbGV0IG5ld0l0ZW1OYW1lID0gaXRlbU5hbWUucmVwbGFjZUFsbCgnSXRlbV8nLCAnJylcbiAgICBuZXdJdGVtTmFtZSA9IG5ld0l0ZW1OYW1lLnJlcGxhY2VBbGwoJ18nLCAnICcpXG4gICAgcmV0dXJuIG5ld0l0ZW1OYW1lXG59XG5cblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAoaXRlbU9iaiwgY29udGVudCkgPT57XG4gICAgbGV0IG1lbnVJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKClcbiAgICBpbWFnZS5zcmMgPSBpdGVtT2JqLmltYWdlUGF0aFxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1pbWFnZScpXG4gICAgXG4gICAgbGV0IGl0ZW1JbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaXRlbUluZm9ybWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW5mb3JtYXRpb24nKVxuICAgIGxldCBpdGVtTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpdGVtTmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gaXRlbU9iai5pdGVtTmFtZVxuICAgIGl0ZW1JbmZvcm1hdGlvbi5hcHBlbmRDaGlsZChpdGVtTmFtZUVsZW1lbnQpXG4gICAgbGV0IGl0ZW1QcmljZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpdGVtUHJpY2VFbGVtZW50LmlubmVyVGV4dD0gaXRlbU9iai5pdGVtUHJpY2VcbiAgICBpdGVtSW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQoaXRlbVByaWNlRWxlbWVudClcblxuICAgIG1lbnVJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICBtZW51SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbUluZm9ybWF0aW9uKVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbUVsZW1lbnQpXG59XG5leHBvcnR7XG4gICAgYWRkQ29tcG9uZW50XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHthZGRDb21wb25lbnQgYXMgcmVuZGVySGVhZGVyfSBmcm9tICcuL21vZHVsZXMvaGVhZGVyLmpzJztcbmltcG9ydCB7YWRkQ29tcG9uZW50IGFzICByZW5kZXJNYWluQ29udGVudH0gZnJvbSAnLi9tb2R1bGVzL21haW4tY29udGVudC5qcyc7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG5yZW5kZXJIZWFkZXIoY29udGVudClcbnJlbmRlck1haW5Db250ZW50KGNvbnRlbnQpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=