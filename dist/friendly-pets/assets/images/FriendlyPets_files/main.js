(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animal-adoption-detail/animal-adoption-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/animal-adoption-detail/animal-adoption-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  animal-adoption-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/animal-adoption-detail/animal-adoption-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/animal-adoption-detail/animal-adoption-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbC1hZG9wdGlvbi1kZXRhaWwvYW5pbWFsLWFkb3B0aW9uLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/animal-adoption-detail/animal-adoption-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/animal-adoption-detail/animal-adoption-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: AnimalAdoptionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalAdoptionDetailComponent", function() { return AnimalAdoptionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimalAdoptionDetailComponent = /** @class */ (function () {
    function AnimalAdoptionDetailComponent() {
    }
    AnimalAdoptionDetailComponent.prototype.ngOnInit = function () {
    };
    AnimalAdoptionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animal-adoption-detail',
            template: __webpack_require__(/*! ./animal-adoption-detail.component.html */ "./src/app/animal-adoption-detail/animal-adoption-detail.component.html"),
            styles: [__webpack_require__(/*! ./animal-adoption-detail.component.scss */ "./src/app/animal-adoption-detail/animal-adoption-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimalAdoptionDetailComponent);
    return AnimalAdoptionDetailComponent;
}());



/***/ }),

/***/ "./src/app/animals-adoption-list/animals-adoption-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/animals-adoption-list/animals-adoption-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"cardContainer inactive col col-md-3\">\n      <div class=\"card\">\n        <div class=\"side front\">\n          <div class=\"img img1\"></div>\n          <div class=\"info\">\n            <h2>Super S</h2>\n            <p>A stand-on with an exceptional compact stance. Great for tight spaces and trailering.</p>\n          </div>\n        </div>\n        <div class=\"side back\">\n          <div class=\"info\">\n            <h2>At a glance</h2>\n            <div class=\"reviews\">\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <defs><path d=\"M0 0h24v24H0V0z\" id=\"a\"/></defs><clipPath id=\"b\"><use overflow=\"visible\" xlink:href=\"#a\"/></clipPath><path clip-path=\"url(#b)\" d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"/>\n              </svg>\n              <p>23 Reviews</p>\n            </div>\n            <ul>\n              <li>Manage backyard gates with ease with the 36\" deck option</li>\n              <li>Your choice of deck sizes ranging from 36\", 48\", 52\" and 60\"</li>\n              <li>Updated hip bolstering offers superior operator comfort and positioning</li>\n            </ul>\n            <div class=\"btn\">\n              <h4>Learn More</h4>\n              <svg fill=\"#333\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z\"/><path d=\"M0-.25h24v24H0z\" fill=\"none\"/></svg>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"cardContainer inactive col col-md-3\">\n      <div class=\"card\">\n        <div class=\"side front\">\n          <div class=\"img img1\"></div>\n          <div class=\"info\">\n            <h2>Super S</h2>\n            <p>A stand-on with an exceptional compact stance. Great for tight spaces and trailering.</p>\n          </div>\n        </div>\n        <div class=\"side back\">\n          <div class=\"info\">\n            <h2>At a glance</h2>\n            <div class=\"reviews\">\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <defs><path d=\"M0 0h24v24H0V0z\" id=\"a\"/></defs><clipPath id=\"b\"><use overflow=\"visible\" xlink:href=\"#a\"/></clipPath><path clip-path=\"url(#b)\" d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"/>\n              </svg>\n              <p>23 Reviews</p>\n            </div>\n            <ul>\n              <li>Manage backyard gates with ease with the 36\" deck option</li>\n              <li>Your choice of deck sizes ranging from 36\", 48\", 52\" and 60\"</li>\n              <li>Updated hip bolstering offers superior operator comfort and positioning</li>\n            </ul>\n            <div class=\"btn\">\n              <h4>Learn More</h4>\n              <svg fill=\"#333\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z\"/><path d=\"M0-.25h24v24H0z\" fill=\"none\"/></svg>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"cardContainer inactive col col-md-3\">\n      <div class=\"card\">\n        <div class=\"side front\">\n          <div class=\"img img1\"></div>\n          <div class=\"info\">\n            <h2>Super S</h2>\n            <p>A stand-on with an exceptional compact stance. Great for tight spaces and trailering.</p>\n          </div>\n        </div>\n        <div class=\"side back\">\n          <div class=\"info\">\n            <h2>At a glance</h2>\n            <div class=\"reviews\">\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n              <svg fill=\"#FFC324\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <defs><path d=\"M0 0h24v24H0V0z\" id=\"a\"/></defs><clipPath id=\"b\"><use overflow=\"visible\" xlink:href=\"#a\"/></clipPath><path clip-path=\"url(#b)\" d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"/>\n              </svg>\n              <p>23 Reviews</p>\n            </div>\n            <ul>\n              <li>Manage backyard gates with ease with the 36\" deck option</li>\n              <li>Your choice of deck sizes ranging from 36\", 48\", 52\" and 60\"</li>\n              <li>Updated hip bolstering offers superior operator comfort and positioning</li>\n            </ul>\n            <div class=\"btn\">\n              <h4>Learn More</h4>\n              <svg fill=\"#333\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z\"/><path d=\"M0-.25h24v24H0z\" fill=\"none\"/></svg>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/animals-adoption-list/animals-adoption-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/animals-adoption-list/animals-adoption-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*, *:after, *:before {\n  box-sizing: border-box; }\n\nh2, h4, p, ul, li {\n  margin: 0;\n  padding: 0; }\n\nh2, h4 {\n  font-family: \"Oswald\", sans-serif;\n  text-transform: uppercase;\n  color: #333333; }\n\nh2 {\n  font-size: 27px;\n  font-weight: 500;\n  letter-spacing: -0.2px;\n  margin-bottom: 10px; }\n\np, li {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  color: #555;\n  line-height: 22px; }\n\nul, li {\n  text-decoration: none;\n  list-style: disc outside; }\n\nul {\n  padding-left: 20px; }\n\nsvg {\n  margin: 0px;\n  min-width: 24px;\n  min-height: 24px; }\n\nbody {\n  background-color: #dadce2;\n  background-image: linear-gradient(140deg, white, #dadce2);\n  margin: 0;\n  width: 100vw;\n  min-height: 450px;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.cardContainer {\n  position: relative;\n  width: 300px;\n  height: 400px;\n  min-width: 300px;\n  min-height: 400px;\n  margin: 4px;\n  -webkit-perspective: 1000px;\n  perspective: 1000px; }\n\n.active {\n  -webkit-transform: translateZ(0px) rotateY(180deg) !important;\n  transform: translateZ(0px) rotateY(180deg) !important; }\n\n.active:after {\n  display: none; }\n\n.card {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  -moz-backface-visibility: hidden;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(-100px);\n  transform: translateZ(-100px);\n  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.card:after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  box-shadow: 0 14px 50px -4px rgba(0, 0, 0, 0.15);\n  opacity: 0;\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1.4); }\n\n.card:hover {\n  -webkit-transform: translateZ(0px);\n  transform: translateZ(0px); }\n\n.card:hover:after {\n  opacity: 1; }\n\n.card .side {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  background-color: white; }\n\n.card .front {\n  z-index: 2; }\n\n.card .back {\n  -webkit-transform: rotateY(180deg);\n  transform: rotateY(180deg); }\n\n.card .info {\n  padding: 16px; }\n\n.front .img {\n  background-color: #dadce2;\n  background-position: center;\n  background-size: cover;\n  border-radius: 5px 5px 0 0;\n  width: 100%;\n  height: 250px; }\n\n.front .img1 {\n  background-image: url(http://i.imgur.com/1aE1nMA.jpg); }\n\n.front .img2 {\n  background-image: url(http://i.imgur.com/2p9VXAn.jpg); }\n\n.front .img3 {\n  background-image: url(http://i.imgur.com/I5ABT2v.jpg); }\n\n.back {\n  position: relative; }\n\n.back h2 {\n  margin-top: 6px;\n  margin-bottom: 18px; }\n\n.back .reviews {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n  cursor: pointer; }\n\n.back .reviews p {\n  color: #c4c4c4;\n  font-weight: 300;\n  margin: 1px 0 0 6px;\n  transition: 0.3s ease-in-out; }\n\n.back .reviews:hover p {\n  color: #555; }\n\n.back li {\n  line-height: 22px;\n  margin: 2px 0 6px 0; }\n\n.back .btn {\n  position: absolute;\n  bottom: 16px;\n  width: calc(100% - 32px);\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FFC324;\n  background-image: linear-gradient(-90deg, #FFB714, #FFE579);\n  border-radius: 5px;\n  cursor: pointer; }\n\n.back .btn:hover h4 {\n  -webkit-transform: translateX(0px);\n  transform: translateX(0px); }\n\n.back .btn:hover svg {\n  -webkit-transform: translateX(0px);\n  transform: translateX(0px);\n  opacity: 1; }\n\n.back .btn h4 {\n  -webkit-transform: translateX(12px);\n  transform: translateX(12px);\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out; }\n\n.back .btn svg {\n  margin: 1px 0 0 4px;\n  -webkit-transform: translateX(-8px);\n  transform: translateX(-8px);\n  opacity: 0;\n  transition: all 0.3s ease-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL2FuaW1hbHMtYWRvcHRpb24tbGlzdC9hbmltYWxzLWFkb3B0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseUJBQXlCO0VBQ3pCLHlEQUF5RDtFQUN6RCxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwyQkFBMkI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRzdCO0VBQ0UsNkRBQTZEO0VBQ3JELHFEQUFxRCxFQUFBOztBQUUvRDtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQzVCLDRCQUE0QjtFQUNwQyxxQ0FBcUM7RUFDN0IsNkJBQTZCO0VBQ3JDLHVEQUF1RCxFQUFBOztBQUV6RDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUNoRCxVQUFVO0VBQ1YseURBQXlELEVBQUE7O0FBRTNEO0VBQ0Usa0NBQWtDO0VBQzFCLDBCQUEwQixFQUFBOztBQUVwQztFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtDQUFrQztFQUMxQiwwQkFBMEIsRUFBQTs7QUFFcEM7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFFZjtFQUNFLHFEQUFxRCxFQUFBOztBQUV2RDtFQUNFLHFEQUFxRCxFQUFBOztBQUV2RDtFQUNFLHFEQUFxRCxFQUFBOztBQUd2RDtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsMkRBQTJEO0VBQzNELGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0NBQWtDO0VBQzFCLDBCQUEwQixFQUFBOztBQUVwQztFQUNFLGtDQUFrQztFQUMxQiwwQkFBMEI7RUFDbEMsVUFBVSxFQUFBOztBQUVaO0VBQ0UsbUNBQW1DO0VBQzNCLDJCQUEyQjtFQUNuQywyQ0FBMkM7RUFDM0MsbUNBQW1DO0VBQ25DLG9FQUFvRSxFQUFBOztBQUV0RTtFQUNFLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDM0IsMkJBQTJCO0VBQ25DLFVBQVU7RUFDViw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbHMtYWRvcHRpb24tbGlzdC9hbmltYWxzLWFkb3B0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLCAqOmFmdGVyLCAqOmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgyLCBoNCwgcCwgdWwsIGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMiwgaDQge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5wLCBsaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzU1NTtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbnVsLCBsaSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGlzdC1zdHlsZTogZGlzYyBvdXRzaWRlO1xufVxuXG51bCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuc3ZnIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1pbi13aWR0aDogMjRweDtcbiAgbWluLWhlaWdodDogMjRweDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZTI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHdoaXRlLCAjZGFkY2UyKTtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmRDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogNHB4O1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuLmFjdGl2ZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWSgxODBkZWcpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWSgxODBkZWcpICFpbXBvcnRhbnQ7XG59XG4uYWN0aXZlOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xufVxuLmNhcmQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMTRweCA1MHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxLjQpO1xufVxuLmNhcmQ6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xufVxuLmNhcmQ6aG92ZXI6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmNhcmQgLnNpZGUge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY2FyZCAuZnJvbnQge1xuICB6LWluZGV4OiAyO1xufVxuLmNhcmQgLmJhY2sge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmNhcmQgLmluZm8ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZnJvbnQgLmltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZTI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuLmZyb250IC5pbWcxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9pLmltZ3VyLmNvbS8xYUUxbk1BLmpwZyk7XG59XG4uZnJvbnQgLmltZzIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2kuaW1ndXIuY29tLzJwOVZYQW4uanBnKTtcbn1cbi5mcm9udCAuaW1nMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vaS5pbWd1ci5jb20vSTVBQlQydi5qcGcpO1xufVxuXG4uYmFjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5iYWNrIGgyIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuLmJhY2sgLnJldmlld3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmFjayAucmV2aWV3cyBwIHtcbiAgY29sb3I6ICNjNGM0YzQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbjogMXB4IDAgMCA2cHg7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYmFjayAucmV2aWV3czpob3ZlciBwIHtcbiAgY29sb3I6ICM1NTU7XG59XG4uYmFjayBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDJweCAwIDZweCAwO1xufVxuLmJhY2sgLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNnB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gIGhlaWdodDogNTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMjQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNGRkI3MTQsICNGRkU1NzkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5iYWNrIC5idG46aG92ZXIgaDQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xufVxuLmJhY2sgLmJ0bjpob3ZlciBzdmcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICBvcGFjaXR5OiAxO1xufVxuLmJhY2sgLmJ0biBoNCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEycHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMnB4KTtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xufVxuLmJhY2sgLmJ0biBzdmcge1xuICBtYXJnaW46IDFweCAwIDAgNHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLThweCk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/animals-adoption-list/animals-adoption-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/animals-adoption-list/animals-adoption-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: AnimalsAdoptionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalsAdoptionListComponent", function() { return AnimalsAdoptionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimalsAdoptionListComponent = /** @class */ (function () {
    function AnimalsAdoptionListComponent() {
    }
    AnimalsAdoptionListComponent.prototype.ngOnInit = function () {
        //Style:
        var cards = document.querySelectorAll(".card");
        function transition() {
            if (this.classList.contains("active")) {
                this.classList.remove("active");
            }
            else {
                this.classList.add("active");
            }
        }
        cards.forEach(function (card) { return card.addEventListener("click", transition); });
    };
    AnimalsAdoptionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animals-adoption-list',
            template: __webpack_require__(/*! ./animals-adoption-list.component.html */ "./src/app/animals-adoption-list/animals-adoption-list.component.html"),
            styles: [__webpack_require__(/*! ./animals-adoption-list.component.scss */ "./src/app/animals-adoption-list/animals-adoption-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimalsAdoptionListComponent);
    return AnimalsAdoptionListComponent;
}());



/***/ }),

/***/ "./src/app/animals-found-list/animals-found-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/animals-found-list/animals-found-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"py-5 text-center\" id=\"who\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\"> HOLA  </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h2 class=\"mb-4\">ANIMALES ENCONTRADOS</h2>\n        </div>\n      </div>\n      <div class=\"row\">\n<!--  COMIENZA PRIMER PREVIEW DE ANIMAL: DATA TARGET CLASE YELLOW PARA ABRIR EL DETALLE AL TOCAR  -->\n        <div class=\"col-md-4 px-4 mb-4 col-6 px-lg-5\">\n          <a data-toggle=\"modal\" data-target=\".yellow\" href=\"\">\n            <div class=\"card project\">\n              <img class=\"card-img rounded-circle\" src=\"https://is2-ssl.mzstatic.com/image/thumb/Purple111/v4/5f/14/93/5f1493d6-3521-bfd8-7ff0-3162d8bc29a1/source/256x256bb.jpg\" alt=\"Card image\">\n              <div class=\"card-body p-0\">\n                <p class=\"mt-3 mb-1\"><b>Yellow</b></p>\n                <p class=\"text-muted m-0\"><small>CEO</small></p>\n              </div>\n            </div>\n          </a>\n        </div>\n\n    <!--  COMIENZA SEGUNDO PREVIEW: DATA TARGET CLASE CYAN PARA ABRIR EL DETALLE AL TOCAR  -->\n\n        <div class=\"col-md-4 px-4 mb-4 col-6 px-lg-5\">\n          <a data-toggle=\"modal\" data-target=\".cyan\" href=\"\">\n            <div class=\"card project\">\n              <img class=\"card-img rounded-circle\" src=\"https://lh3.googleusercontent.com/-AkYp110fIFg/AAAAAAAAAAI/AAAAAAAADEo/_Peaqs91a6w/photo.jpg\" alt=\"Card image\">\n              <div class=\"card-body p-0\">\n                <p class=\"mt-3 mb-1\"><b>Cyan</b></p>\n                <p class=\"text-muted m-0\"><small>Managing Partner</small></p>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-4 px-4 mb-4 col-6 px-lg-5\">\n          <a data-toggle=\"modal\" data-target=\".red\" href=\"\">\n            <div class=\"card project\">\n              <img class=\"card-img rounded-circle\" src=\"http://www.pure-spirit.com/images/stories/Free_Photos/kandor-eating-grass-256.jpg\" alt=\"Card image\">\n              <div class=\"card-body p-0\">\n                <p class=\"mt-3 mb-1\"><b>Red</b></p>\n                <p class=\"text-muted m-0\"><small>VP</small></p>\n              </div>\n            </div>\n          </a>\n        </div>\n\n        <div class=\"col-md-4 px-4 mb-4 col-6 px-lg-5\">\n          <a data-toggle=\"modal\" data-target=\".purple\" href=\"\">\n            <div class=\"card project\">\n              <img class=\"card-img rounded-circle\" src=\"http://myhswm.org/images/sized/images/animals/IMG_2272-256x256.jpg\" alt=\"Card image\">\n              <div class=\"card-body p-0\">\n                <p class=\"mt-3 mb-1\"><b>Purple</b></p>\n                <p class=\"text-muted m-0\"><small>CFO</small></p>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-4 px-4 mb-4 col-6 px-lg-5\">\n          <a data-toggle=\"modal\" data-target=\".white\" href=\"\">\n            <div class=\"card project\">\n              <img class=\"card-img rounded-circle\" src=\"https://www.doghealth.com/images/dog_scratching_doghealth.jpg\" alt=\"Card image\">\n              <div class=\"card-body p-0\">\n                <p class=\"mt-3 mb-1\"><b>White</b></p>\n                <p class=\"text-muted m-0\"><small>Consultant</small></p>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-4 px-4 mb-4 col-6 px-lg-5\">\n          <a data-toggle=\"modal\" data-target=\".blue\" href=\"\">\n            <div class=\"card project\">\n              <img class=\"card-img rounded-circle\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaoNY4IySBs9l-C2Z6LJ9uk3S12muJfmu4Hm5SBLctLCVQQAX\" alt=\"Card image\">\n              <div class=\"card-body p-0\">\n                <p class=\"mt-3 mb-1\"><b>Blue</b></p>\n                <p class=\"text-muted m-0\"><small>Field Researcher</small></p>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-white bg-dark\" id=\"where\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"p-5 col-md-6\">\n          <h3><b>Smke</b></h3>\n          <p class=\"\">\n            <a href=\"#\" target=\"_blank\">Quai Gustave-Ador 35 <br>1207 - Geneve (CH)</a>\n          </p>\n          <p class=\"\">\n            <a href=\"#\">hello@smke.io</a>\n          </p>\n          <p class=\"mb-3\">\n            <a href=\"#\">+41 798 65 61 19&nbsp;</a>\n          </p>\n          <a href=\"#\" target=\"_blank\"><i class=\"fa d-inline fa-lg mr-3 text-white fa-linkedin\"></i></a>\n          <a href=\"#\" target=\"_blank\"><i class=\"fa fa-facebook d-inline fa-lg mr-3 text-white\"></i></a>\n        </div>\n        <div class=\"p-5 col-md-6\">\n          <h3>Get in touch</h3>\n          <form>\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control form-control-sm\" placeholder=\"Email\" required=\"required\" name=\"email\"> </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control form-control-sm\" id=\"inlineFormInput\" placeholder=\"Subject\" required=\"required\" name=\"subject\"> </div>\n            <div class=\"form-group\"><textarea class=\"form-control p-1 form-control-sm\" id=\"exampleTextarea\" rows=\"3\" placeholder=\"Your message\" name=\"message\"></textarea></div>\n            <button type=\"submit\" class=\"btn btn-outline-light btn-sm\">SUBMIT</button>\n          </form>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 mt-3\">\n          <p class=\"text-center text-muted\">© Copyright 2018 Pingendo - All rights reserved. </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<!--  COMIENZA DETALLE CLASE YELLOW  -->\n  <div class=\"modal fade yellow\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header bg-light\">\n          <h5 class=\"modal-title\"><b>Yellow</b> - CEO</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">×</span> </button>\n        </div>\n        <div class=\"modal-body bg-light\">\n          <div class=\"row\">\n            <div class=\"col-md-4 px-3\">\n              <img class=\"img-fluid d-block mx-auto rounded-circle\" src=\"https://media.tenor.com/images/f9859801610e116ab925ccb645fe95c5/tenor.png\"> </div>\n            <div class=\"col-md-8 p-2\">\n              <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.&nbsp; <br>\n                <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n              <a target=\"_blank\" href=\"#\"><i class=\"d-block  fa fa-lg fa-linkedin text-muted\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n<!--  COMIENZA DETALLE CLASE YELLOW  -->\n\n  <div class=\"modal fade cyan\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header bg-light\">\n          <h5 class=\"modal-title\"><b>Cyan</b> - Managing Partner</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">×</span> </button>\n        </div>\n        <div class=\"modal-body bg-light\">\n          <div class=\"row\">\n            <div class=\"col-md-4 px-3\">\n              <img class=\"img-fluid d-block mx-auto rounded-circle\" src=\"https://pbs.twimg.com/profile_images/653131141793255425/lDznYilP_400x400.jpg\"> </div>\n            <div class=\"col-md-8 p-2\">\n              <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.&nbsp; <br>\n                <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n              <a href=\"#\" target=\"_blank\"><i class=\"d-block  fa fa-lg fa-linkedin text-muted\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade red\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header bg-light\">\n          <h5 class=\"modal-title\"><b>Red</b> - Vice President</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">×</span> </button>\n        </div>\n        <div class=\"modal-body bg-light\">\n          <div class=\"row\">\n            <div class=\"col-md-4 px-3\">\n              <img class=\"img-fluid d-block mx-auto rounded-circle\" src=\"https://deadlysnark.files.wordpress.com/2014/04/7u-mup.png?w=687\"> </div>\n            <div class=\"col-md-8 p-2\">\n              <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.</p>\n              <a href=\"#\" target=\"_blank\"><i class=\"d-block  fa fa-lg fa-linkedin text-muted\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade purple\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header bg-light\">\n          <h5 class=\"modal-title\"><b>Purple</b> - CFO</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">×</span> </button>\n        </div>\n        <div class=\"modal-body bg-light\">\n          <div class=\"row\">\n            <div class=\"col-md-4 px-3\">\n              <img class=\"img-fluid d-block mx-auto rounded-circle\" src=\"https://i.kym-cdn.com/photos/images/newsfeed/000/288/662/859.png\"> </div>\n            <div class=\"col-md-8 p-2\">\n              <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.&nbsp; <br>\n                <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n              <a href=\"#\" target=\"_blank\"><i class=\"d-block  fa fa-lg fa-linkedin text-muted\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade white\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header bg-light\">\n          <h5 class=\"modal-title\"><b>White</b> - Consultant</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">×</span> </button>\n        </div>\n        <div class=\"modal-body bg-light\">\n          <div class=\"row\">\n            <div class=\"col-md-4 px-3\">\n              <img class=\"img-fluid d-block mx-auto rounded-circle\" src=\"http://lh4.googleusercontent.com/-6q8yMMkmPAo/AAAAAAAAAAI/AAAAAAAAAAA/uekZIkcBCE4/photo.jpg\"> </div>\n            <div class=\"col-md-8 p-2\">\n              <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.&nbsp; <br>\n                <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade blue\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header bg-light\">\n          <h5 class=\"modal-title\"><b>Blue</b> - Field Researcher</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">×</span> </button>\n        </div>\n        <div class=\"modal-body bg-light\">\n          <div class=\"row\">\n            <div class=\"col-md-4 px-3\">\n              <img class=\"img-fluid d-block mx-auto rounded-circle\" src=\"https://a.wattpad.com/useravatar/sirmememealot.256.394980.jpg\"> </div>\n            <div class=\"col-md-8 p-2\">\n              <p class=\"\">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.&nbsp; <br>\n                <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/animals-found-list/animals-found-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/animals-found-list/animals-found-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbHMtZm91bmQtbGlzdC9hbmltYWxzLWZvdW5kLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/animals-found-list/animals-found-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/animals-found-list/animals-found-list.component.ts ***!
  \********************************************************************/
/*! exports provided: AnimalsFoundListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalsFoundListComponent", function() { return AnimalsFoundListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimalsFoundListComponent = /** @class */ (function () {
    function AnimalsFoundListComponent() {
    }
    AnimalsFoundListComponent.prototype.ngOnInit = function () {
    };
    AnimalsFoundListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animals-found-list',
            template: __webpack_require__(/*! ./animals-found-list.component.html */ "./src/app/animals-found-list/animals-found-list.component.html"),
            styles: [__webpack_require__(/*! ./animals-found-list.component.scss */ "./src/app/animals-found-list/animals-found-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimalsFoundListComponent);
    return AnimalsFoundListComponent;
}());



/***/ }),

/***/ "./src/app/animals-lost-list/animals-lost-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/animals-lost-list/animals-lost-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  animals-lost-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/animals-lost-list/animals-lost-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/animals-lost-list/animals-lost-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbHMtbG9zdC1saXN0L2FuaW1hbHMtbG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/animals-lost-list/animals-lost-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/animals-lost-list/animals-lost-list.component.ts ***!
  \******************************************************************/
/*! exports provided: AnimalsLostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalsLostListComponent", function() { return AnimalsLostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimalsLostListComponent = /** @class */ (function () {
    function AnimalsLostListComponent() {
    }
    AnimalsLostListComponent.prototype.ngOnInit = function () {
    };
    AnimalsLostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animals-lost-list',
            template: __webpack_require__(/*! ./animals-lost-list.component.html */ "./src/app/animals-lost-list/animals-lost-list.component.html"),
            styles: [__webpack_require__(/*! ./animals-lost-list.component.scss */ "./src/app/animals-lost-list/animals-lost-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimalsLostListComponent);
    return AnimalsLostListComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'friendly-pets';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _owner_animal_list_owner_animal_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./owner-animal-list/owner-animal-list.component */ "./src/app/owner-animal-list/owner-animal-list.component.ts");
/* harmony import */ var _register_animal_register_animal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register-animal/register-animal.component */ "./src/app/register-animal/register-animal.component.ts");
/* harmony import */ var _register_animal_adoption_register_animal_adoption_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register-animal-adoption/register-animal-adoption.component */ "./src/app/register-animal-adoption/register-animal-adoption.component.ts");
/* harmony import */ var _register_animal_lost_register_animal_lost_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register-animal-lost/register-animal-lost.component */ "./src/app/register-animal-lost/register-animal-lost.component.ts");
/* harmony import */ var _register_animal_found_register_animal_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register-animal-found/register-animal-found.component */ "./src/app/register-animal-found/register-animal-found.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _place_comments_place_comments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./place-comments/place-comments.component */ "./src/app/place-comments/place-comments.component.ts");
/* harmony import */ var _place_details_place_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./place-details/place-details.component */ "./src/app/place-details/place-details.component.ts");
/* harmony import */ var _placeslist_placeslist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./placeslist/placeslist.component */ "./src/app/placeslist/placeslist.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _place_register_place_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./place-register/place-register.component */ "./src/app/place-register/place-register.component.ts");
/* harmony import */ var _animals_adoption_list_animals_adoption_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./animals-adoption-list/animals-adoption-list.component */ "./src/app/animals-adoption-list/animals-adoption-list.component.ts");
/* harmony import */ var _animals_found_list_animals_found_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./animals-found-list/animals-found-list.component */ "./src/app/animals-found-list/animals-found-list.component.ts");
/* harmony import */ var _animals_lost_list_animals_lost_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./animals-lost-list/animals-lost-list.component */ "./src/app/animals-lost-list/animals-lost-list.component.ts");
/* harmony import */ var _animal_adoption_detail_animal_adoption_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./animal-adoption-detail/animal-adoption-detail.component */ "./src/app/animal-adoption-detail/animal-adoption-detail.component.ts");
/* harmony import */ var _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./owner-detail/owner-detail.component */ "./src/app/owner-detail/owner-detail.component.ts");
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./terms-conditions/terms-conditions.component */ "./src/app/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");



























var appRoutes = [
    // OJO: creé un ejemplo para home pero todav. no tengo el componente home:
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: "my-animals", component: _owner_animal_list_owner_animal_list_component__WEBPACK_IMPORTED_MODULE_8__["OwnerAnimalListComponent"] },
    { path: "new-animal", component: _register_animal_register_animal_component__WEBPACK_IMPORTED_MODULE_9__["RegisterAnimalComponent"] },
    { path: "new-adoption", component: _register_animal_adoption_register_animal_adoption_component__WEBPACK_IMPORTED_MODULE_10__["RegisterAnimalAdoptionComponent"] },
    { path: "new-lost", component: _register_animal_lost_register_animal_lost_component__WEBPACK_IMPORTED_MODULE_11__["RegisterAnimalLostComponent"] },
    { path: "new-found", component: _register_animal_found_register_animal_found_component__WEBPACK_IMPORTED_MODULE_12__["RegisterAnimalFoundComponent"] },
    { path: "place-comments", component: _place_comments_place_comments_component__WEBPACK_IMPORTED_MODULE_14__["PlaceCommentsComponent"] },
    { path: "place-detail", component: _place_details_place_details_component__WEBPACK_IMPORTED_MODULE_15__["PlaceDetailsComponent"] },
    { path: "places-list", component: _placeslist_placeslist_component__WEBPACK_IMPORTED_MODULE_16__["PlaceslistComponent"] },
    { path: "map", component: _map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"] },
    { path: "new-place", component: _place_register_place_register_component__WEBPACK_IMPORTED_MODULE_18__["PlaceRegisterComponent"] },
    { path: "adoption-list", component: _animals_adoption_list_animals_adoption_list_component__WEBPACK_IMPORTED_MODULE_19__["AnimalsAdoptionListComponent"] },
    { path: "found-list", component: _animals_found_list_animals_found_list_component__WEBPACK_IMPORTED_MODULE_20__["AnimalsFoundListComponent"] },
    { path: "lost-list", component: _animals_lost_list_animals_lost_list_component__WEBPACK_IMPORTED_MODULE_21__["AnimalsLostListComponent"] },
    { path: "adoption-detail", component: _animal_adoption_detail_animal_adoption_detail_component__WEBPACK_IMPORTED_MODULE_22__["AnimalAdoptionDetailComponent"] },
    { path: "owner-detail", component: _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_23__["OwnerDetailComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _owner_animal_list_owner_animal_list_component__WEBPACK_IMPORTED_MODULE_8__["OwnerAnimalListComponent"],
                _register_animal_register_animal_component__WEBPACK_IMPORTED_MODULE_9__["RegisterAnimalComponent"],
                _register_animal_adoption_register_animal_adoption_component__WEBPACK_IMPORTED_MODULE_10__["RegisterAnimalAdoptionComponent"],
                _register_animal_lost_register_animal_lost_component__WEBPACK_IMPORTED_MODULE_11__["RegisterAnimalLostComponent"],
                _register_animal_found_register_animal_found_component__WEBPACK_IMPORTED_MODULE_12__["RegisterAnimalFoundComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_13__["ContactFormComponent"],
                _place_comments_place_comments_component__WEBPACK_IMPORTED_MODULE_14__["PlaceCommentsComponent"],
                _place_details_place_details_component__WEBPACK_IMPORTED_MODULE_15__["PlaceDetailsComponent"],
                _placeslist_placeslist_component__WEBPACK_IMPORTED_MODULE_16__["PlaceslistComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"],
                _place_register_place_register_component__WEBPACK_IMPORTED_MODULE_18__["PlaceRegisterComponent"],
                _animals_adoption_list_animals_adoption_list_component__WEBPACK_IMPORTED_MODULE_19__["AnimalsAdoptionListComponent"],
                _animals_found_list_animals_found_list_component__WEBPACK_IMPORTED_MODULE_20__["AnimalsFoundListComponent"],
                _animals_lost_list_animals_lost_list_component__WEBPACK_IMPORTED_MODULE_21__["AnimalsLostListComponent"],
                _animal_adoption_detail_animal_adoption_detail_component__WEBPACK_IMPORTED_MODULE_22__["AnimalAdoptionDetailComponent"],
                _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_23__["OwnerDetailComponent"], _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_24__["TermsConditionsComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"] // detalle de dueño, dentro un ContactFormComponent y un OwnerAnimalListComponent
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        contact form works!\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.scss */ "./src/app/contact-form/contact-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <body>\n    <header class=\"container\">\n      <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n        <a class=\"navbar-brand\" href=\"#\">Carousel</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Link</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n            </li>\n          </ul>\n          <form class=\"form-inline mt-2 mt-md-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n          </form>\n        </div>\n      </nav>\n</header>\n\n<main role=\"main\">\n\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#777\"/></svg>\n        <div class=\"container\">\n          <div class=\"carousel-caption text-left\">\n            <h1>Example headline.</h1>\n            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n            <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#777\"/></svg>\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>Another example headline.</h1>\n            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n            <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#777\"/></svg>\n        <div class=\"container\">\n          <div class=\"carousel-caption text-right\">\n            <h1>One more for good measure.</h1>\n            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n            <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n\n  <!-- Marketing messaging and featurettes\n  ================================================== -->\n  <!-- Wrap the rest of the page in another container to center all the content. -->\n\n  <div class=\"container marketing\">\n\n    <!-- Three columns of text below the carousel -->\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <svg class=\"bd-placeholder-img rounded-circle\" width=\"140\" height=\"140\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: 140x140\">\n          <title>Placeholder</title>\n          <rect width=\"100%\" height=\"100%\" fill=\"#777\"/>\n          <text x=\"50%\" y=\"50%\" fill=\"#777\" dy=\".3em\">140x140</text>\n        </svg>\n\n        <div class=\"col-md-4 px-4 mb-4 col-6 px-lg-5 mx-auto\">\n          <a data-toggle=\"modal\" data-target=\".yellow\" href=\"\">\n            <div class=\"mx-auto project rounded-circle image-cropper\">\n              <img class=\"mx-auto card-img img\" src=\"/assets/images/found2.jpg\" alt=\"Card image\">\n            </div>\n          </a>\n        </div>\n\n\n\n\n\n        <h2>Perdidos y encontrados</h2>\n        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-4\">\n        <svg class=\"bd-placeholder-img rounded-circle\" width=\"140\" height=\"140\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: 140x140\"><title>Placeholder</title><rect width=\"100%\" height=\"100%\" fill=\"#777\"/><text x=\"50%\" y=\"50%\" fill=\"#777\" dy=\".3em\">140x140</text></svg>\n        <h2>Adopta un amigo <3 </h2>\n        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-4\">\n        <svg class=\"bd-placeholder-img rounded-circle\" width=\"140\" height=\"140\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: 140x140\"><title>Placeholder</title><rect width=\"100%\" height=\"100%\" fill=\"#777\"/><text x=\"50%\" y=\"50%\" fill=\"#777\" dy=\".3em\">140x140</text></svg>\n        <h2>Voy con mi perro!</h2>\n        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n      </div><!-- /.col-lg-4 -->\n    </div><!-- /.row -->\n\n\n    <!-- START THE FEATURETTES -->\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7\">\n        <h2 class=\"featurette-heading\">First featurette heading. <span class=\"text-muted\">It’ll blow your mind.</span></h2>\n        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n      </div>\n      <div class=\"col-md-5\">\n        <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"500\" height=\"500\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: 500x500\"><title>Placeholder</title><rect width=\"100%\" height=\"100%\" fill=\"#eee\"/><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text></svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7 order-md-2\">\n        <h2 class=\"featurette-heading\">Oh yeah, it’s that good. <span class=\"text-muted\">See for yourself.</span></h2>\n        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n      </div>\n      <div class=\"col-md-5 order-md-1\">\n        <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"500\" height=\"500\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: 500x500\"><title>Placeholder</title><rect width=\"100%\" height=\"100%\" fill=\"#eee\"/><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text></svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <div class=\"row featurette\">\n      <div class=\"col-md-7\">\n        <h2 class=\"featurette-heading\">And lastly, this one. <span class=\"text-muted\">Checkmate.</span></h2>\n        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n      </div>\n      <div class=\"col-md-5\">\n        <svg class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\" width=\"500\" height=\"500\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: 500x500\"><title>Placeholder</title><rect width=\"100%\" height=\"100%\" fill=\"#eee\"/><text x=\"50%\" y=\"50%\" fill=\"#aaa\" dy=\".3em\">500x500</text></svg>\n      </div>\n    </div>\n\n    <hr class=\"featurette-divider\">\n\n    <!-- /END THE FEATURETTES -->\n\n  </div><!-- /.container -->\n\n\n  <!-- FOOTER -->\n  <footer class=\"container\">\n    <p class=\"float-right\"><a href=\"#\">Back to top</a></p>\n    <p>&copy; 2017-2019 Company, Inc. &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n  </footer>\n</main>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\nbody {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  color: #5a5a5a; }\n/* CUSTOMIZE THE CAROUSEL\n-------------------------------------------------- */\n/* Carousel base class */\n.carousel {\n  margin-bottom: 4rem; }\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n  bottom: 3rem;\n  z-index: 10; }\n/* Declare heights because of positioning of img element */\n.carousel-item {\n  height: 32rem;\n  background-color: #777; }\n.carousel-item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 32rem; }\n/* MARKETING CONTENT\n-------------------------------------------------- */\n/* Center align the text within the three columns below the carousel */\n.marketing .col-lg-4 {\n  margin-bottom: 1.5rem;\n  text-align: center; }\n.marketing h2 {\n  font-weight: 400; }\n.marketing .col-lg-4 p {\n  margin-right: .75rem;\n  margin-left: .75rem; }\n/* Featurettes\n------------------------- */\n.featurette-divider {\n  margin: 5rem 0;\n  /* Space out the Bootstrap <hr> more */ }\n/* Thin out the marketing headings */\n.featurette-heading {\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -.05rem; }\n/* RESPONSIVE CSS\n-------------------------------------------------- */\n@media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4; }\n  .featurette-heading {\n    font-size: 50px; } }\n@media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem; } }\n.image-cropper {\n  display: inline-block;\n  width: 200px;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%; }\nimg {\n  display: inline-block;\n  margin-left: auto;\n  height: 100%;\n  width: auto;\n  vertical-align: middle;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO29EQ0NvRDtBRENwRCxtREFBQTtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjLEVBQUE7QUFJaEI7b0RDRm9EO0FES3BELHdCQUFBO0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTtBQUVyQixpRUFBQTtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTtBQUdiLDBEQUFBO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7QUFFeEI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxlQUFlO0VBQ2YsYUFBYSxFQUFBO0FBSWY7b0RDTm9EO0FEU3BELHNFQUFBO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTtBQUlyQjsyQkNUMkI7QURZM0I7RUFDRSxjQUFjO0VBQUUsc0NBQUEsRUFBdUM7QUFHekQsb0NBQUE7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsdUJBQXVCLEVBQUE7QUFJekI7b0RDWm9EO0FEZXBEO0VBQ0UscUNBQUE7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSxlQUFlLEVBQUEsRUFDaEI7QUFHSDtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakI7QUFHSDtFQUNJLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7QUFJdEI7RUFDSSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLG9EQUFvRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR0xPQkFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIFBhZGRpbmcgYmVsb3cgdGhlIGZvb3RlciBhbmQgbGlnaHRlciBib2R5IHRleHQgKi9cblxuYm9keSB7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cblxuLyogQ1VTVE9NSVpFIFRIRSBDQVJPVVNFTFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogQ2Fyb3VzZWwgYmFzZSBjbGFzcyAqL1xuLmNhcm91c2VsIHtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cbi8qIFNpbmNlIHBvc2l0aW9uaW5nIHRoZSBpbWFnZSwgd2UgbmVlZCB0byBoZWxwIG91dCB0aGUgY2FwdGlvbiAqL1xuLmNhcm91c2VsLWNhcHRpb24ge1xuICBib3R0b206IDNyZW07XG4gIHotaW5kZXg6IDEwO1xufVxuXG4vKiBEZWNsYXJlIGhlaWdodHMgYmVjYXVzZSBvZiBwb3NpdGlvbmluZyBvZiBpbWcgZWxlbWVudCAqL1xuLmNhcm91c2VsLWl0ZW0ge1xuICBoZWlnaHQ6IDMycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xufVxuLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycmVtO1xufVxuXG5cbi8qIE1BUktFVElORyBDT05URU5UXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiBDZW50ZXIgYWxpZ24gdGhlIHRleHQgd2l0aGluIHRoZSB0aHJlZSBjb2x1bW5zIGJlbG93IHRoZSBjYXJvdXNlbCAqL1xuLm1hcmtldGluZyAuY29sLWxnLTQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXJrZXRpbmcgaDIge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm1hcmtldGluZyAuY29sLWxnLTQgcCB7XG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xuICBtYXJnaW4tbGVmdDogLjc1cmVtO1xufVxuXG5cbi8qIEZlYXR1cmV0dGVzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5mZWF0dXJldHRlLWRpdmlkZXIge1xuICBtYXJnaW46IDVyZW0gMDsgLyogU3BhY2Ugb3V0IHRoZSBCb290c3RyYXAgPGhyPiBtb3JlICovXG59XG5cbi8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cbi5mZWF0dXJldHRlLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07XG59XG5cblxuLyogUkVTUE9OU0lWRSBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXG4gIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cblxuICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgfVxufVxuXG4uaW1hZ2UtY3JvcHBlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBcbn1cblxuaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xufVxuIiwiLyogR0xPQkFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIFBhZGRpbmcgYmVsb3cgdGhlIGZvb3RlciBhbmQgbGlnaHRlciBib2R5IHRleHQgKi9cbmJvZHkge1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gIGNvbG9yOiAjNWE1YTVhOyB9XG5cbi8qIENVU1RPTUlaRSBUSEUgQ0FST1VTRUxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBDYXJvdXNlbCBiYXNlIGNsYXNzICovXG4uY2Fyb3VzZWwge1xuICBtYXJnaW4tYm90dG9tOiA0cmVtOyB9XG5cbi8qIFNpbmNlIHBvc2l0aW9uaW5nIHRoZSBpbWFnZSwgd2UgbmVlZCB0byBoZWxwIG91dCB0aGUgY2FwdGlvbiAqL1xuLmNhcm91c2VsLWNhcHRpb24ge1xuICBib3R0b206IDNyZW07XG4gIHotaW5kZXg6IDEwOyB9XG5cbi8qIERlY2xhcmUgaGVpZ2h0cyBiZWNhdXNlIG9mIHBvc2l0aW9uaW5nIG9mIGltZyBlbGVtZW50ICovXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIGhlaWdodDogMzJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7IH1cblxuLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycmVtOyB9XG5cbi8qIE1BUktFVElORyBDT05URU5UXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogQ2VudGVyIGFsaWduIHRoZSB0ZXh0IHdpdGhpbiB0aGUgdGhyZWUgY29sdW1ucyBiZWxvdyB0aGUgY2Fyb3VzZWwgKi9cbi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLm1hcmtldGluZyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cblxuLm1hcmtldGluZyAuY29sLWxnLTQgcCB7XG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xuICBtYXJnaW4tbGVmdDogLjc1cmVtOyB9XG5cbi8qIEZlYXR1cmV0dGVzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcbiAgbWFyZ2luOiA1cmVtIDA7XG4gIC8qIFNwYWNlIG91dCB0aGUgQm9vdHN0cmFwIDxocj4gbW9yZSAqLyB9XG5cbi8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cbi5mZWF0dXJldHRlLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cblxuLyogUkVTUE9OU0lWRSBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40OyB9XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNTBweDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDdyZW07IH0gfVxuXG4uaW1hZ2UtY3JvcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuXG5pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        /*
            let animalType:AnimalType = new AnimalType("perro");
        
            let animal1 = new Animal({name:"shiva", type: animalType});
        
            let animalAdoption1 = new AnimalAdoption( {name:"shiva", type: animalType} , "perros", "special care");
        
            alert(JSON.stringify(animalAdoption1));
        
        console.log(animalAdoption1);
        
        
            //animal1.name = "shiva";
            //animal1.setName("shiva");
            alert( JSON.stringify(animal1) );
            //{"name":"shiva","type":{"name":"perro"}}
            //alert(animal1.name);
        */
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"contenedor\" class=\"container-fluid\">\n  <div class=\"row no-gutter\">\n    <div class=\"d-none d-md-flex col-md-4 col-lg-6 bg-image\"></div>\n    <div class=\"col-md-8 col-lg-6\">\n      <div class=\"login d-flex align-items-center py-5\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9 col-lg-8 mx-auto\">\n              <h3 class=\"login-heading mb-4\">Welcome back! We've missed you! </h3>\n              <form>\n                <div class=\"form-label-group\">\n                  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n                  <label for=\"inputEmail\">Email </label>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                  <label for=\"inputPassword\">Contraseña</label>\n                </div>\n\n                <div class=\"custom-control custom-checkbox mb-3\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                  <label class=\"custom-control-label\" for=\"customCheck1\">Rcordar contrseña</label>\n                </div>\n                <button class=\"btn btn-lg btn-info btn-block btn-login text-uppercase font-weight-bold mb-2\" type=\"submit\">Log in</button>\n                <button class=\"btn btn-lg btn-secondary btn-block btn-login text-uppercase font-weight-bold mb-2\" type=\"submit\">Sign up</button>\n\n                <div class=\"text-center\">\n                  <a class=\"small\" href=\"#\">Olvidaste tu contraseña?</a></div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenedor {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: 0.75rem; }\n\na {\n  color: #17a2b8; }\n\n.form-control:focus {\n  border-color: #17a2b8;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #00beff; }\n\n.login,\n.image {\n  min-height: 100vh; }\n\n.bg-image {\n  background-image: url(\"/assets/images/hola.jpg\");\n  background-size: cover;\n  background-position: center; }\n\n.login-heading {\n  font-weight: 300; }\n\n.btn-login {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n  border-radius: 2rem; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group > input,\n.form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n  height: auto;\n  border-radius: 2rem; }\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out; }\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::placeholder {\n  color: transparent; }\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3); }\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQWtCO0VBQ2xCLDBCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQ0YsRUFBQTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpRUFBOEUsRUFBQTs7QUFHaEY7O0VBRUUsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZ0RBQWdEO0VBQ2hELHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCOztFQUVFLHNEQUFzRDtFQUN0RCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0NBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixvQ0FBQTtFQUNBLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0Usa0JBQWtCLEVBQUE7O0FBT3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBT3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsNEVBQTRFO0VBQzVFLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLDZDQUE2QztFQUM3QyxnREFBZ0Q7RUFDaEQsZUFBZTtFQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbmVkb3Ige1xuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xuICAtLWlucHV0LXBhZGRpbmcteTogMC43NXJlbTtcbn1cblxuYXtcbiAgY29sb3I6ICMxN2EyYjhcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzE3YTJiODtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMCwgMTkwLCAyNTUsIDEpO1xufVxuXG4ubG9naW4sXG4uaW1hZ2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJnLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9ob2xhLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJ0bi1sb2dpbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcteSkgdmFyKC0taW5wdXQtcGFkZGluZy14KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgY3Vyc29yOiB0ZXh0O1xuICAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSArIHZhcigtLWlucHV0LXBhZGRpbmcteSkgKiAoMiAvIDMpKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        map works!\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/owner-animal-list/owner-animal-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/owner-animal-list/owner-animal-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-sm\">\n\n          <div class=\"card\" *ngFor=\"let animal of animals\">  \n\n            <div class=\"photo\">\n              <img src=\"https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg\" width= \"100\">\n            </div>\n\n            <div class=\"description\">\n              <h2>Shiva</h2>\n              <h4>Breton</h4>\n              <p> Perro - macho -</p>\n              <button>seleccionar</button>\n            </div>\n\n          </div>\n\n\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/owner-animal-list/owner-animal-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/owner-animal-list/owner-animal-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 650px;\n  height: 375px;\n  background: white;\n  margin: 0 auto;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: all 0.3s; }\n  .card:hover {\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n  .card .photo {\n    padding: 30px;\n    width: 45%;\n    text-align: center;\n    float: left; }\n  .card .photo img {\n      max-height: 200px; }\n  .card .description {\n    padding: 30px;\n    float: left;\n    width: 55%;\n    border-left: 2px solid #efefef; }\n  .card .description h1 {\n      color: #515151;\n      font-weight: 300;\n      padding-top: 15px;\n      margin: 0;\n      font-size: 30px;\n      font-weight: 300; }\n  .card .description h2 {\n      color: #515151;\n      margin: 0;\n      text-transform: uppercase;\n      font-weight: 500; }\n  .card .description h4 {\n      margin: 0;\n      color: #727272;\n      text-transform: uppercase;\n      font-weight: 500;\n      font-size: 12px; }\n  .card .description p {\n      font-size: 12px;\n      line-height: 20px;\n      color: #727272;\n      padding: 20px 0;\n      margin: 0; }\n  .card .description button {\n      outline: 0;\n      border: 0;\n      background: none;\n      border: 1px solid #d9d9d9;\n      padding: 8px 0px;\n      margin-bottom: 30px;\n      color: #515151;\n      text-transform: uppercase;\n      width: 125px;\n      font-family: inherit;\n      margin-right: 5px;\n      transition: all 0.3s ease;\n      font-weight: 500; }\n  .card .description button:hover {\n        border: 1px solid #aedaa6;\n        color: #aedaa6;\n        cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL293bmVyLWFuaW1hbC1saXN0L293bmVyLWFuaW1hbC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDZFQUFzRTtFQUN0RSxvQkFBb0IsRUFBQTtFQVB0QjtJQVdJLDZFQUFzRSxFQUFBO0VBWDFFO0lBa0JJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTtFQXJCZjtNQXdCTSxpQkFBaUIsRUFBQTtFQXhCdkI7SUErQkssYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsOEJBQThCLEVBQUE7RUFsQ25DO01BcUNPLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLFNBQVM7TUFDVCxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUExQ3ZCO01BOENNLGNBQWM7TUFDZCxTQUFTO01BQ1QseUJBQXlCO01BQ3pCLGdCQUFnQixFQUFBO0VBakR0QjtNQXFETyxTQUFTO01BQ1QsY0FBYztNQUNkLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsZUFDRixFQUFBO0VBMURMO01BNkRPLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FBYztNQUNkLGVBQWU7TUFDZixTQUFTLEVBQUE7RUFqRWhCO01Bc0VPLFVBQVU7TUFDVixTQUFTO01BQ1QsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLG9CQUFvQjtNQUNwQixpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLGdCQUFnQixFQUFBO0VBbEZ2QjtRQXVGUyx5QkFBeUI7UUFDekIsY0FBYztRQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL293bmVyLWFuaW1hbC1saXN0L293bmVyLWFuaW1hbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5jYXJkIHtcblxuICAgIHdpZHRoOiA2NTBweDtcbiAgICBoZWlnaHQ6IDM3NXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsMC4xNiksMCAycHggMTBweCAwIHJnYmEoMCwwLDAsMC4xMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmhvdmVyIHtcblxuICAgICAgYm94LXNoYWRvdzogMCA4cHggMTdweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcblxuICAgIH1cblxuXG4gICAgLnBob3RvIHtcblxuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuXG4gICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICB3aWR0aDogNTUlO1xuICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2VmZWZlZjtcblxuICAgICAgIGgxIHtcbiAgICAgICAgIGNvbG9yOiAjNTE1MTUxO1xuICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICB9XG5cbiAgICAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAjNTE1MTUxO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgfVxuXG4gICAgICAgaDQge1xuICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgY29sb3I6ICM3MjcyNzI7XG4gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgIGZvbnQtc2l6ZTogMTJweFxuICAgICAgIH1cblxuICAgICAgIHAge1xuICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICBjb2xvcjogIzcyNzI3MjtcbiAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgIGJ1dHRvbiB7XG5cbiAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgY29sb3I6ICM1MTUxNTE7XG4gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgICAmOmhvdmVyIHtcblxuICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBkYXJrZW4od2hpdGUsIDIlKTtcbiAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FlZGFhNjtcbiAgICAgICAgICAgY29sb3I6ICNhZWRhYTY7XG4gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgfVxuXG4gICAgICAgfVxuXG4gICAgfVxuXG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/owner-animal-list/owner-animal-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/owner-animal-list/owner-animal-list.component.ts ***!
  \******************************************************************/
/*! exports provided: OwnerAnimalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerAnimalListComponent", function() { return OwnerAnimalListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OwnerAnimalListComponent = /** @class */ (function () {
    //ngFor no funciona sin esta variable.
    // animals: Animal[] = ;
    function OwnerAnimalListComponent( /*public _animalService: AnimalService*/) {
        //this.animals = _animalService.animals;
    }
    OwnerAnimalListComponent.prototype.ngOnInit = function () {
        // Buscar datos del servicio y dejarlos en el array
    };
    OwnerAnimalListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-animal-list',
            template: __webpack_require__(/*! ./owner-animal-list.component.html */ "./src/app/owner-animal-list/owner-animal-list.component.html"),
            styles: [__webpack_require__(/*! ./owner-animal-list.component.scss */ "./src/app/owner-animal-list/owner-animal-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OwnerAnimalListComponent);
    return OwnerAnimalListComponent;
}());



/***/ }),

/***/ "./src/app/owner-detail/owner-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/owner-detail/owner-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        owner-detail works!\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/owner-detail/owner-detail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/owner-detail/owner-detail.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL293bmVyLWRldGFpbC9vd25lci1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/owner-detail/owner-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/owner-detail/owner-detail.component.ts ***!
  \********************************************************/
/*! exports provided: OwnerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerDetailComponent", function() { return OwnerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OwnerDetailComponent = /** @class */ (function () {
    function OwnerDetailComponent() {
        //    this.usersList = [User];
    }
    OwnerDetailComponent.prototype.ngOnInit = function () {
        /*
        alert("funciona!")
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            this.users = JSON.parse(xhttp.responseText);
            console.log(this.users);
            for (let i=0; i < this.users.length; i++) {
              this.usersList.push(new User(this.users[i]));
            }
            console.log(this.usersList);
          }
        };
        xhttp.open("GET", "http://18.224.131.43:443/users", true);
        xhttp.send();
        */
    };
    OwnerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-detail',
            template: __webpack_require__(/*! ./owner-detail.component.html */ "./src/app/owner-detail/owner-detail.component.html"),
            styles: [__webpack_require__(/*! ./owner-detail.component.scss */ "./src/app/owner-detail/owner-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OwnerDetailComponent);
    return OwnerDetailComponent;
}());



/***/ }),

/***/ "./src/app/place-comments/place-comments.component.html":
/*!**************************************************************!*\
  !*** ./src/app/place-comments/place-comments.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        place-comments works!\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/place-comments/place-comments.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/place-comments/place-comments.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlLWNvbW1lbnRzL3BsYWNlLWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/place-comments/place-comments.component.ts":
/*!************************************************************!*\
  !*** ./src/app/place-comments/place-comments.component.ts ***!
  \************************************************************/
/*! exports provided: PlaceCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceCommentsComponent", function() { return PlaceCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlaceCommentsComponent = /** @class */ (function () {
    function PlaceCommentsComponent() {
    }
    PlaceCommentsComponent.prototype.ngOnInit = function () {
    };
    PlaceCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-place-comments',
            template: __webpack_require__(/*! ./place-comments.component.html */ "./src/app/place-comments/place-comments.component.html"),
            styles: [__webpack_require__(/*! ./place-comments.component.scss */ "./src/app/place-comments/place-comments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlaceCommentsComponent);
    return PlaceCommentsComponent;
}());



/***/ }),

/***/ "./src/app/place-details/place-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/place-details/place-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        place-details works!\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/place-details/place-details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/place-details/place-details.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlLWRldGFpbHMvcGxhY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/place-details/place-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/place-details/place-details.component.ts ***!
  \**********************************************************/
/*! exports provided: PlaceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailsComponent", function() { return PlaceDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlaceDetailsComponent = /** @class */ (function () {
    function PlaceDetailsComponent() {
    }
    PlaceDetailsComponent.prototype.ngOnInit = function () {
    };
    PlaceDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-place-details',
            template: __webpack_require__(/*! ./place-details.component.html */ "./src/app/place-details/place-details.component.html"),
            styles: [__webpack_require__(/*! ./place-details.component.scss */ "./src/app/place-details/place-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlaceDetailsComponent);
    return PlaceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/place-register/place-register.component.html":
/*!**************************************************************!*\
  !*** ./src/app/place-register/place-register.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        place-register works!\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/place-register/place-register.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/place-register/place-register.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlLXJlZ2lzdGVyL3BsYWNlLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/place-register/place-register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/place-register/place-register.component.ts ***!
  \************************************************************/
/*! exports provided: PlaceRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceRegisterComponent", function() { return PlaceRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlaceRegisterComponent = /** @class */ (function () {
    function PlaceRegisterComponent() {
    }
    PlaceRegisterComponent.prototype.ngOnInit = function () {
    };
    PlaceRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-place-register',
            template: __webpack_require__(/*! ./place-register.component.html */ "./src/app/place-register/place-register.component.html"),
            styles: [__webpack_require__(/*! ./place-register.component.scss */ "./src/app/place-register/place-register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlaceRegisterComponent);
    return PlaceRegisterComponent;
}());



/***/ }),

/***/ "./src/app/placeslist/placeslist.component.html":
/*!******************************************************!*\
  !*** ./src/app/placeslist/placeslist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        place-list works!\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/placeslist/placeslist.component.scss":
/*!******************************************************!*\
  !*** ./src/app/placeslist/placeslist.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlc2xpc3QvcGxhY2VzbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/placeslist/placeslist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/placeslist/placeslist.component.ts ***!
  \****************************************************/
/*! exports provided: PlaceslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceslistComponent", function() { return PlaceslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlaceslistComponent = /** @class */ (function () {
    function PlaceslistComponent() {
    }
    PlaceslistComponent.prototype.ngOnInit = function () {
    };
    PlaceslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-placeslist',
            template: __webpack_require__(/*! ./placeslist.component.html */ "./src/app/placeslist/placeslist.component.html"),
            styles: [__webpack_require__(/*! ./placeslist.component.scss */ "./src/app/placeslist/placeslist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlaceslistComponent);
    return PlaceslistComponent;
}());



/***/ }),

/***/ "./src/app/register-animal-adoption/register-animal-adoption.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/register-animal-adoption/register-animal-adoption.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        register-animal-adoption works!\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register-animal-adoption/register-animal-adoption.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/register-animal-adoption/register-animal-adoption.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWFuaW1hbC1hZG9wdGlvbi9yZWdpc3Rlci1hbmltYWwtYWRvcHRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/register-animal-adoption/register-animal-adoption.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/register-animal-adoption/register-animal-adoption.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegisterAnimalAdoptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAnimalAdoptionComponent", function() { return RegisterAnimalAdoptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterAnimalAdoptionComponent = /** @class */ (function () {
    function RegisterAnimalAdoptionComponent() {
    }
    RegisterAnimalAdoptionComponent.prototype.ngOnInit = function () {
    };
    RegisterAnimalAdoptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-animal-adoption',
            template: __webpack_require__(/*! ./register-animal-adoption.component.html */ "./src/app/register-animal-adoption/register-animal-adoption.component.html"),
            styles: [__webpack_require__(/*! ./register-animal-adoption.component.scss */ "./src/app/register-animal-adoption/register-animal-adoption.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterAnimalAdoptionComponent);
    return RegisterAnimalAdoptionComponent;
}());



/***/ }),

/***/ "./src/app/register-animal-found/register-animal-found.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/register-animal-found/register-animal-found.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        register-animal-found works!\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register-animal-found/register-animal-found.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/register-animal-found/register-animal-found.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWFuaW1hbC1mb3VuZC9yZWdpc3Rlci1hbmltYWwtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/register-animal-found/register-animal-found.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/register-animal-found/register-animal-found.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterAnimalFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAnimalFoundComponent", function() { return RegisterAnimalFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterAnimalFoundComponent = /** @class */ (function () {
    function RegisterAnimalFoundComponent() {
    }
    RegisterAnimalFoundComponent.prototype.ngOnInit = function () {
    };
    RegisterAnimalFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-animal-found',
            template: __webpack_require__(/*! ./register-animal-found.component.html */ "./src/app/register-animal-found/register-animal-found.component.html"),
            styles: [__webpack_require__(/*! ./register-animal-found.component.scss */ "./src/app/register-animal-found/register-animal-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterAnimalFoundComponent);
    return RegisterAnimalFoundComponent;
}());



/***/ }),

/***/ "./src/app/register-animal-lost/register-animal-lost.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/register-animal-lost/register-animal-lost.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        register-animal-lost works!\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register-animal-lost/register-animal-lost.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/register-animal-lost/register-animal-lost.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWFuaW1hbC1sb3N0L3JlZ2lzdGVyLWFuaW1hbC1sb3N0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register-animal-lost/register-animal-lost.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/register-animal-lost/register-animal-lost.component.ts ***!
  \************************************************************************/
/*! exports provided: RegisterAnimalLostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAnimalLostComponent", function() { return RegisterAnimalLostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterAnimalLostComponent = /** @class */ (function () {
    function RegisterAnimalLostComponent() {
    }
    RegisterAnimalLostComponent.prototype.ngOnInit = function () {
    };
    RegisterAnimalLostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-animal-lost',
            template: __webpack_require__(/*! ./register-animal-lost.component.html */ "./src/app/register-animal-lost/register-animal-lost.component.html"),
            styles: [__webpack_require__(/*! ./register-animal-lost.component.scss */ "./src/app/register-animal-lost/register-animal-lost.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterAnimalLostComponent);
    return RegisterAnimalLostComponent;
}());



/***/ }),

/***/ "./src/app/register-animal/register-animal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/register-animal/register-animal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container contenedor\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n<p>\n  Nombre: text\n\n  Raza: dropdown\n\n  fecha de nacimiento: -- calendar\n\n  tamaño: dropdown\n  peq menos de 10kg\n  med 10-20kg\n  gde 21-40kg\n  gigante mas de 40kg\n\n  castrado/esterilizada: checkbox\n\n  Vacunas al dia: checkbox\n\n  sociable con otros perros: checkbox\n\n  describe a tu perro brevemente:  textarea.\n\n  MACHO/HEMBRA   selecciona un boton\n\n  este perro es visible (toggle)\n\n  otras informaciones para el cuidador:\n  horario de comidas\n  ordenes a las que responde\n  horario de paseos\n  donde duerme el perros\n  puede subir al sofa?\n  está en celo?\n  se lleva bien con niños?\n  tira de la correa?\n  ladra?\n  escarba?\n  salta sobre la gente?\n  tiene microchip?\n  tiene placa identificativa?\n\n  Información sanitaria:\n  Toma alguna medicación? : text\n  tiene alguna alergia? : text\n\n  veterinario\n  seguro\n  telefono del veterinario\n  nombre del seguro\n\n\n\n</p>\n\n\n    </div>\n    <div class=\"col-sm-12 col-md-8\">\n      <p>\n\n        <form>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label for=\"name\">Nombre</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nombre\">\n    </div>\n\n    <div class=\"form-group\">\n      <select class=\"custom-select\" required>\n        <option value=\"\">Open this select menu</option>\n        <option value=\"1\">One</option>\n        <option value=\"2\">Two</option>\n        <option value=\"3\">Three</option>\n      </select>\n      <div class=\"invalid-feedback\">Example invalid custom select feedback</div>\n    </div>\n\n\n\n\n    <div class=\"form-group col-md-6\">\n      <label for=\"breed\">Raza</label>\n      <input type=\"dropdown\" class=\"form-control\" id=\"breed\" placeholder=\"Password\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputAddress\">Address</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputAddress2\">Address 2</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\">\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label for=\"inputCity\">City</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputCity\">\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"inputState\">State</label>\n      <select id=\"inputState\" class=\"form-control\">\n        <option selected>Choose...</option>\n        <option>...</option>\n      </select>\n    </div>\n    <div class=\"form-group col-md-2\">\n      <label for=\"inputZip\">Zip</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputZip\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n      <label class=\"form-check-label\" for=\"gridCheck\">\n        Check me out\n      </label>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n</form>\n\n    </div>\n    <div class=\"col-sm\">\n      One of three columns\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register-animal/register-animal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/register-animal/register-animal.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWFuaW1hbC9yZWdpc3Rlci1hbmltYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/register-animal/register-animal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/register-animal/register-animal.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterAnimalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAnimalComponent", function() { return RegisterAnimalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterAnimalComponent = /** @class */ (function () {
    function RegisterAnimalComponent() {
    }
    RegisterAnimalComponent.prototype.ngOnInit = function () {
    };
    RegisterAnimalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-animal',
            template: __webpack_require__(/*! ./register-animal.component.html */ "./src/app/register-animal/register-animal.component.html"),
            styles: [__webpack_require__(/*! ./register-animal.component.scss */ "./src/app/register-animal/register-animal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterAnimalComponent);
    return RegisterAnimalComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=contenedor class=\"container-fluid\">\n  <div class=\"row no-gutter\">\n    <div class=\"col-md-8 col-lg-6\">\n      <div class=\"login d-flex align-items-center py-5\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9 col-lg-8 mx-auto\">\n              <h3 class=\"login-heading mb-4\">Regístrate, te estamos esperando!</h3>\n              <form class=\"needs-validation\">\n                <div class=\"form-label-group\">\n                  <input type=\"text\" id=\"inputName\" class=\"form-control\" placeholder=\"..Nombre\" required autofocus minlength=\"3\" maxlength=\"20\">\n                  <label for=\"inputName\">Nombre</label>\n                </div>\n                <div class=\"form-label-group\">\n                  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\" ..Email address\" minlength=\"3\" maxlength=\"20\" required autofocus>\n                  <label for=\"inputEmail\">Email </label>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\" ..Password\" minlength=\"3\" maxlength=\"20\" pattern=\"^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$\" title=\"al menos 1 mayúscula, 1 minúscula, y un número\" required>\n                  <label for=\"inputPassword\">Contraseña</label>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <input type=\"password\" id=\"inputRepeatPassword\" class=\"form-control\" placeholder=\" ..Password\" minlength=\"3\" maxlength=\"20\" required>\n                  <label for=\"inputRepeatPassword\">Repetir contraseña</label>\n                </div>\n\n                <div class=\"custom-control custom-checkbox mb-3\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                  <label class=\"custom-control-label\" for=\"customCheck1\">Recordar contraseña</label>\n                </div>\n                <button (click)=\"saveNewUser()\" class=\"btn btn-lg btn-info btn-block btn-login text-uppercase font-weight-bold mb-2\" type=\"submit\">Sign up</button>\n                <button class=\"btn btn-lg btn-secondary btn-block btn-login text-uppercase font-weight-bold mb-2\">Log in</button>\n                <div class=\"text-center\">\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-none d-md-flex col-md-4 col-lg-6 bg-image\"></div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenedor {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: 0.75rem; }\n\na {\n  color: #17a2b8; }\n\n.form-control:focus {\n  border-color: #17a2b8;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #00beff; }\n\n.login,\n.image {\n  min-height: 100vh; }\n\n.bg-image {\n  background-image: url(\"/assets/images/group-hug2.png\");\n  background-size: cover;\n  background-position: center; }\n\n.login-heading {\n  font-weight: 300; }\n\n.btn-login {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n  border-radius: 2rem; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group > input,\n.form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n  height: auto;\n  border-radius: 2rem; }\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out; }\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::placeholder {\n  color: transparent; }\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3); }\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBa0I7RUFDbEIsMEJBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FDRixFQUFBOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlFQUE4RSxFQUFBOztBQUdoRjs7RUFFRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxzREFBc0Q7RUFDdEQsc0JBQXNCO0VBRXRCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7O0VBRUUsc0RBQXNEO0VBQ3RELFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQ0FBQTtFQUNBLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG9DQUFBO0VBQ0EsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQiwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxrQkFBa0IsRUFBQTs7QUFPcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFPcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSw0RUFBNEU7RUFDNUUsZ0RBQWdELEVBQUE7O0FBR2xEO0VBQ0UsNkNBQTZDO0VBQzdDLGdEQUFnRDtFQUNoRCxlQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW5lZG9yIHtcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IDAuNzVyZW07XG59XG5cbmF7XG4gIGNvbG9yOiAjMTdhMmI4XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMxN2EyYjg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDAsIDE5MCwgMjU1LCAxKTtcbn1cblxuLmxvZ2luLFxuLmltYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5iZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZ3JvdXAtaHVnMi5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJ0bi1sb2dpbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcteSkgdmFyKC0taW5wdXQtcGFkZGluZy14KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgY3Vyc29yOiB0ZXh0O1xuICAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSArIHZhcigtLWlucHV0LXBhZGRpbmcteSkgKiAoMiAvIDMpKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
        console.log(jquery__WEBPACK_IMPORTED_MODULE_2__('div'));
    };
    SignupComponent.prototype.saveNewUser = function () {
        var name = jquery__WEBPACK_IMPORTED_MODULE_2__('#inputName').val();
        var email = jquery__WEBPACK_IMPORTED_MODULE_2__('#inputEmail').val();
        var password = jquery__WEBPACK_IMPORTED_MODULE_2__('#inputPassword').val();
        var repeatPassword = jquery__WEBPACK_IMPORTED_MODULE_2__('#inputRepeatPassword').val();
        var data = { "name": name, "email": email, "password": password, "address_id": 1 };
        if (password != repeatPassword) {
            alert("Passwords Don't Match");
            return false;
        }
        else if (password === repeatPassword) {
            console.log("passwords match!");
        }
        ;
        var url = "http://18.224.131.43:443/user";
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(repeatPassword);
        console.log(data);
        jquery__WEBPACK_IMPORTED_MODULE_2__["post"](url, data, function (response) {
            console.log(response);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.component.html":
/*!******************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  FriendlyPets se reserva el derecho de modificar, en cualquier momento, la presentación y configuración de esta página, así como las Condiciones Generales de uso de la misma.\n\n  FriendlyPets y su logo, son propiedad de FriendlyPets no pudiéndose usar los mismos para fines comerciales u otros fines.\n\n  FriendlyPets no se responsabiliza por el uso indebido o abusivo del contenido de su base de datos y se reserva el derecho de suprimir aquellos contenidos que resulten no veraces, inexactos o no cumplan con los requisitos establecidos (no están autorizadas publicaciones de venta de animales, canjes, etc)\n\n  FriendlyPets sólo pone a disposición de los Usuarios un espacio virtual que les permite a los usuarios ponerse en comunicación mediante Internet o telefonicamente .\n\n  FriendlyPets no interviene ni tiene posesión de las mascotas publicadas por los usuarios , por ello no será responsable respecto de la existencia o legitimidad de las publicaciones de los Usuarios .\n\n  Cada Usuario conoce y acepta ser el exclusivo responsable por las publicaciones que realiza.\n\n  Debido a que FriendlyPets no tiene ninguna participación durante todo el tiempo en que el aviso se publica , ni en el posterior acuerdo entre las partes , no será responsable por el efectivo cumplimiento de las obligaciones asumidas por los Usuarios . El Usuario conoce y acepta que al realizar acuerdos con otros Usuarios o terceros lo hace bajo su propio riesgo.\n\n  En ningún caso FriendlyPets será responsable por cualquier daño y/o perjuicio que haya podido sufrir el Usuario, debido a los acuerdos realizadas o no realizadas entre usuarios respecto a las mascotas publicados a través de FriendlyPets</p>\n"

/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.component.ts ***!
  \****************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent() {
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__(/*! ./terms-conditions.component.html */ "./src/app/terms-conditions/terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-conditions.component.scss */ "./src/app/terms-conditions/terms-conditions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/apple/Desktop/workspace/Proyectos/friendly-pets-project/front-end/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/apple/Desktop/workspace/Proyectos/friendly-pets-project/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map