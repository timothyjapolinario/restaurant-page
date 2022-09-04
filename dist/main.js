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
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ "./src/modules/pubsub.js");


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
        _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.emit('headerOptionClicked', "menu")
    })

    const about = document.createElement('div')
    about.classList.add('header-option')
    about.classList.add('selected')
    about.innerText = "About"
    about.addEventListener('click',()=>{
        clearSelectedClass(options)
        addSelectedClass(about)
        _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.emit('headerOptionClicked', "about")
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



const mainContent = document.createElement('div')
mainContent.classList.add('main-content')
const addComponent = (contentBody, contentToLoad) =>{
    removeContent()
    if(contentToLoad == "about"){
        loadAbout(mainContent)
    }else if(contentToLoad = "menu"){
        loadMenu(mainContent)
    }
    contentBody.appendChild(mainContent)
}

const removeContent = ()=>{
    while(mainContent.firstChild){
        mainContent.firstChild.remove()
    }
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

/***/ "./src/modules/pubsub.js":
/*!*******************************!*\
  !*** ./src/modules/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* binding */ addEvent),
/* harmony export */   "emit": () => (/* binding */ emit),
/* harmony export */   "events": () => (/* binding */ events),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "on": () => (/* binding */ on)
/* harmony export */ });

const events = {}
const on = (eventName, fn) => {
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
}
const off = (eventName, fn) =>  {
    if (events[eventName]) {
      for (var i = 0; i < events[eventName].length; i++) {
        if (events[eventName][i] === fn) {
          events[eventName].splice(i, 1);
          break;
        }
      };
    }
}
const emit = (eventName, data) => {
    if (events[eventName]) {
      events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
}
const addEvent = (value) => {
    events[value] = 0
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
/* harmony import */ var _modules_pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pubsub.js */ "./src/modules/pubsub.js");



const content = document.querySelector('#content')

;(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_0__.addComponent)(content)
;(0,_modules_main_content_js__WEBPACK_IMPORTED_MODULE_1__.addComponent)(content, 'about')
_modules_pubsub_js__WEBPACK_IMPORTED_MODULE_2__.on("headerOptionClicked", (data)=>{
    console.log('clicked')
    ;(0,_modules_main_content_js__WEBPACK_IMPORTED_MODULE_1__.addComponent)(content, data)
})





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpRTtBQUNZO0FBQ2hDO0FBQzdDOztBQUVBLGlFQUFZO0FBQ1osdUVBQWlCO0FBQ2pCLGtEQUFTO0FBQ1Q7QUFDQSxJQUFJLHVFQUFpQjtBQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9tZW51LWl0ZW1zLyBzeW5jIC5wbmckIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9pbWFnZS1wYXRoLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tYWluLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcHVic3ViLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL0l0ZW1fQmFtYm9vX1Nob290X1NvdXAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUtaXRlbXMvSXRlbV9CYW1ib29fU2hvb3RfU291cC5wbmdcIixcblx0XCIuL0l0ZW1fQ2hpbGktTWluY2VfQ29ybmJyZWFkX0J1bnMucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUtaXRlbXMvSXRlbV9DaGlsaS1NaW5jZV9Db3JuYnJlYWRfQnVucy5wbmdcIixcblx0XCIuL0l0ZW1fQ29tZV9hbmRfR2V0X0l0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51LWl0ZW1zL0l0ZW1fQ29tZV9hbmRfR2V0X0l0LnBuZ1wiLFxuXHRcIi4vSXRlbV9KdWV5dW5fR3VvYmEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUtaXRlbXMvSXRlbV9KdWV5dW5fR3VvYmEucG5nXCIsXG5cdFwiLi9JdGVtX01vcmFfTWVhdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS1pdGVtcy9JdGVtX01vcmFfTWVhdC5wbmdcIixcblx0XCIuL0l0ZW1fUmljZV9CdW5zLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51LWl0ZW1zL0l0ZW1fUmljZV9CdW5zLnBuZ1wiLFxuXHRcIi4vSXRlbV9SaWNlX1B1ZGRpbmcucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUtaXRlbXMvSXRlbV9SaWNlX1B1ZGRpbmcucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9tZW51LWl0ZW1zIHN5bmMgcmVjdXJzaXZlIC5wbmckXCI7IiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0ICogYXMgUHViU3ViIGZyb20gJy4vcHVic3ViLmpzJ1xuY29uc3QgYWRkQ29tcG9uZW50ID0gKGNvbnRlbnRCb2R5KT0+e1xuICAgIC8vUGFyZW50IEhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoKCdoZWFkZXInKSlcbiAgICAvL0NvbnRlbnRzXG4gICAgYWRkUGFnZUxvZ28oaGVhZGVyKVxuICAgIGFkZE1lbnVPcHRpb25zKGhlYWRlcilcbiAgICAvL0FkZGluZyBoZWFkZXIgdG8gdGhlIHdyYXBwZXJcbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG5cblxufVxuXG5jb25zdCBhZGRQYWdlTG9nbyA9IChoZWFkZXIpID0+e1xuICAgIGNvbnN0IGxvZ29BbmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsb2dvQW5kTmFtZS5jbGFzc0xpc3QuYWRkKCdsb2dvLW5hbWUnKVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBuYW1lLmlubmVyVGV4dCA9IFwiVGhpcmQtUm91bmQgS25vY2tvdXRcIlxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInBhZ2UtbmFtZVwiKVxuICAgIGNvbnN0IG15TG9nbyA9IG5ldyBJbWFnZSgpXG4gICAgbXlMb2dvLnNyYyA9IExvZ29cbiAgICBteUxvZ28uaWQgPSBcImxvZ29cIlxuICAgIGxvZ29BbmROYW1lLmFwcGVuZENoaWxkKG15TG9nbylcbiAgICBsb2dvQW5kTmFtZS5hcHBlbmRDaGlsZChuYW1lKVxuXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0FuZE5hbWUpXG59XG5cblxuY29uc3QgYWRkTWVudU9wdGlvbnMgPSAoaGVhZGVyKT0+e1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnb3B0aW9uLWxpc3QnKVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItb3B0aW9uJylcbiAgICBtZW51LmlubmVyVGV4dCA9IFwiTWVudVwiXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY2xlYXJTZWxlY3RlZENsYXNzKG9wdGlvbnMpXG4gICAgICAgIGFkZFNlbGVjdGVkQ2xhc3MobWVudSlcbiAgICAgICAgUHViU3ViLmVtaXQoJ2hlYWRlck9wdGlvbkNsaWNrZWQnLCBcIm1lbnVcIilcbiAgICB9KVxuXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1vcHRpb24nKVxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICBhYm91dC5pbm5lclRleHQgPSBcIkFib3V0XCJcbiAgICBhYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY2xlYXJTZWxlY3RlZENsYXNzKG9wdGlvbnMpXG4gICAgICAgIGFkZFNlbGVjdGVkQ2xhc3MoYWJvdXQpXG4gICAgICAgIFB1YlN1Yi5lbWl0KCdoZWFkZXJPcHRpb25DbGlja2VkJywgXCJhYm91dFwiKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1vcHRpb24nKVxuICAgIGNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YWN0XCJcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjbGVhclNlbGVjdGVkQ2xhc3Mob3B0aW9ucylcbiAgICAgICAgYWRkU2VsZWN0ZWRDbGFzcyhjb250YWN0KVxuICAgIH0pXG4gICAgXG4gICAgb3B0aW9ucy5hcHBlbmRDaGlsZChtZW51KVxuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQoYWJvdXQpXG4gICAgb3B0aW9ucy5hcHBlbmRDaGlsZChjb250YWN0KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChvcHRpb25zKVxufVxuXG5cbmNvbnN0IGFkZFNlbGVjdGVkQ2xhc3MgPSAob3B0aW9uKSA9PntcbiAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxufVxuY29uc3QgY2xlYXJTZWxlY3RlZENsYXNzID0gKG9wdGlvbnMpPT57XG4gICAgb3B0aW9ucy5jaGlsZE5vZGVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgIH0pO1xufVxuZXhwb3J0e1xuICAgIGFkZENvbXBvbmVudFxufSIsImNvbnN0IGdldEltYWdlc1BhdGggPSAoKSA9PntcbiAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvbWVudS1pdGVtcycsIHRydWUsIC8ucG5nJC8pO1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIGNvbnRleHQua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgbWVudUl0ZW0gPSBrZXkuc3BsaXQoJy4vJykucG9wKCkgLy8gcmVtb3ZlIHRoZSBmaXJzdCAyIGNoYXJhY3RlcnNcbiAgICAgICAgLnN1YnN0cmluZygwLCBrZXkubGVuZ3RoIC0gNik7IC8vIHJlbW92ZSB0aGUgZmlsZSBleHRlbnNpb25cbiAgICAgIG9ialttZW51SXRlbV0gPSBjb250ZXh0KGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialxufVxuXG5leHBvcnR7XG4gIGdldEltYWdlc1BhdGhcbn0iLCJpbXBvcnQgcmVzdGF1cmFudEltYWdlUGF0aCBmcm9tICcuLi9pbWFnZXMvdGhpcmQtcm91bmQta25vY2tvdXQucG5nJ1xuaW1wb3J0IHtnZXRJbWFnZXNQYXRofSBmcm9tICcuL2ltYWdlLXBhdGgtbG9hZGVyLmpzJ1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5tYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKVxuY29uc3QgYWRkQ29tcG9uZW50ID0gKGNvbnRlbnRCb2R5LCBjb250ZW50VG9Mb2FkKSA9PntcbiAgICByZW1vdmVDb250ZW50KClcbiAgICBpZihjb250ZW50VG9Mb2FkID09IFwiYWJvdXRcIil7XG4gICAgICAgIGxvYWRBYm91dChtYWluQ29udGVudClcbiAgICB9ZWxzZSBpZihjb250ZW50VG9Mb2FkID0gXCJtZW51XCIpe1xuICAgICAgICBsb2FkTWVudShtYWluQ29udGVudClcbiAgICB9XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpXG59XG5cbmNvbnN0IHJlbW92ZUNvbnRlbnQgPSAoKT0+e1xuICAgIHdoaWxlKG1haW5Db250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICBtYWluQ29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfVxufVxuIFxuY29uc3QgbG9hZEFib3V0ID0gKG1haW5Db250ZW50KSA9PntcbiAgICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250ZW50JylcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRJbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgcmVzdGF1cmFudEltYWdlLnNyYyA9IHJlc3RhdXJhbnRJbWFnZVBhdGhcbiAgICByZXN0YXVyYW50SW1hZ2UuaWQgPSAncmVzdGF1cmFudC1pbWFnZSdcblxuICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24nKVxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ09mZmVyaW5nIHRoZSBoZWF2aWVzdCBhbmQgdGFzdGllc3QgZm9vZCBpbiBMaXl1ZSEnKSlcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdUcmF2ZWxlciwgUGFpbW9uLCBaaG9uZ2xpIGF0ZSBoZXJlISBZRVMgVEhFIExFR0VOREFSWSBDSEFSQUNURVJTJykpXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIldvbid0IGd1YXJhbnRlZSBhbnlvbmUgdG8gc3Vydml2ZSBhZnRlciB0aHJlZSByb3VuZHNcIikpXG4gICAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWFnZSlcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2NyaXB0aW9uKVxuXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KVxufVxuIFxuY29uc3QgY3JlYXRlUGFyYWdyYXBoID0gKHRleHQpID0+e1xuICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gdGV4dFxuICAgIHJldHVybiBwYXJhZ3JhcGhcbn1cbmNvbnN0IGxvYWRNZW51ID0gKG1haW5Db250ZW50KSA9PiB7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGVudCcpXG5cblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGdlbmVyYXRlTWVudUl0ZW1zKClcbiAgICBjb25zb2xlLmxvZyhtZW51SXRlbXMpXG4gICAgbWVudUl0ZW1zLmZvckVhY2goKG1lbnVJdGVtKT0+e1xuICAgICAgICBjcmVhdGVNZW51SXRlbShtZW51SXRlbSwgbWVudUNvbnRlbnQpXG4gICAgfSlcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudClcbiAgICBcbn1cblxuY29uc3QgZ2VuZXJhdGVNZW51SXRlbXMgPSgpPT57XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPVtdXG4gICAgY29uc3QgaW1hZ2VQYXRocyA9IGdldEltYWdlc1BhdGgoKVxuICAgIGxldCBuZXdJZCA9IDBcbiAgICBmb3IoY29uc3QgaW1hZ2VOYW1lIGluIGltYWdlUGF0aHMpe1xuICAgICAgICBtZW51SXRlbXMucHVzaCh7XG4gICAgICAgICAgICBpZDogbmV3SWQsXG4gICAgICAgICAgICBpdGVtTmFtZTogZml4SXRlbU5hbWUoaW1hZ2VOYW1lKSxcbiAgICAgICAgICAgIGl0ZW1QcmljZTogcmFuZG9tUHJpY2UoKSxcbiAgICAgICAgICAgIGltYWdlUGF0aDogaW1hZ2VQYXRoc1tpbWFnZU5hbWVdXG4gICAgICAgIH0pXG4gICAgICAgIG5ld0lkICs9IDFcbiAgICB9XG4gICAgcmV0dXJuIG1lbnVJdGVtc1xufVxuXG5jb25zdCByYW5kb21QcmljZSA9ICgpID0+e1xuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKDk5OTkgLSAxMDAwKSArIDEwMDApKTtcbn1cblxuY29uc3QgZml4SXRlbU5hbWU9IChpdGVtTmFtZSkgPT57XG4gICAgbGV0IG5ld0l0ZW1OYW1lID0gaXRlbU5hbWUucmVwbGFjZUFsbCgnSXRlbV8nLCAnJylcbiAgICBuZXdJdGVtTmFtZSA9IG5ld0l0ZW1OYW1lLnJlcGxhY2VBbGwoJ18nLCAnICcpXG4gICAgcmV0dXJuIG5ld0l0ZW1OYW1lXG59XG5cblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAoaXRlbU9iaiwgY29udGVudCkgPT57XG4gICAgbGV0IG1lbnVJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKClcbiAgICBpbWFnZS5zcmMgPSBpdGVtT2JqLmltYWdlUGF0aFxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1pbWFnZScpXG4gICAgXG4gICAgbGV0IGl0ZW1JbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaXRlbUluZm9ybWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW5mb3JtYXRpb24nKVxuICAgIGxldCBpdGVtTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpdGVtTmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gaXRlbU9iai5pdGVtTmFtZVxuICAgIGl0ZW1JbmZvcm1hdGlvbi5hcHBlbmRDaGlsZChpdGVtTmFtZUVsZW1lbnQpXG4gICAgbGV0IGl0ZW1QcmljZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpdGVtUHJpY2VFbGVtZW50LmlubmVyVGV4dD0gaXRlbU9iai5pdGVtUHJpY2VcbiAgICBpdGVtSW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQoaXRlbVByaWNlRWxlbWVudClcblxuICAgIG1lbnVJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICBtZW51SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbUluZm9ybWF0aW9uKVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbUVsZW1lbnQpXG59XG5leHBvcnR7XG4gICAgYWRkQ29tcG9uZW50XG59IiwiXG5jb25zdCBldmVudHMgPSB7fVxuY29uc3Qgb24gPSAoZXZlbnROYW1lLCBmbikgPT4ge1xuICAgIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG59XG5jb25zdCBvZmYgPSAoZXZlbnROYW1lLCBmbikgPT4gIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG59XG5jb25zdCBlbWl0ID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbihmbikge1xuICAgICAgICBmbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IGFkZEV2ZW50ID0gKHZhbHVlKSA9PiB7XG4gICAgZXZlbnRzW3ZhbHVlXSA9IDBcbn1cblxuZXhwb3J0e1xuICAgIGV2ZW50cyxcbiAgICBhZGRFdmVudCxcbiAgICBvbixcbiAgICBvZmYsXG4gICAgZW1pdFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7YWRkQ29tcG9uZW50IGFzIHJlbmRlckhlYWRlcn0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlci5qcyc7XG5pbXBvcnQge2FkZENvbXBvbmVudCBhcyAgcmVuZGVyTWFpbkNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy9tYWluLWNvbnRlbnQuanMnO1xuaW1wb3J0ICogYXMgUHViU3ViIGZyb20gJy4vbW9kdWxlcy9wdWJzdWIuanMnXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG5yZW5kZXJIZWFkZXIoY29udGVudClcbnJlbmRlck1haW5Db250ZW50KGNvbnRlbnQsICdhYm91dCcpXG5QdWJTdWIub24oXCJoZWFkZXJPcHRpb25DbGlja2VkXCIsIChkYXRhKT0+e1xuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICByZW5kZXJNYWluQ29udGVudChjb250ZW50LCBkYXRhKVxufSlcblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9