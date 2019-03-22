(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _owner_animal_list_owner_animal_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./owner-animal-list/owner-animal-list.component */ "./src/app/owner-animal-list/owner-animal-list.component.ts");
/* harmony import */ var _register_animal_register_animal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register-animal/register-animal.component */ "./src/app/register-animal/register-animal.component.ts");
/* harmony import */ var _register_animal_adoption_register_animal_adoption_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register-animal-adoption/register-animal-adoption.component */ "./src/app/register-animal-adoption/register-animal-adoption.component.ts");
/* harmony import */ var _register_animal_lost_register_animal_lost_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register-animal-lost/register-animal-lost.component */ "./src/app/register-animal-lost/register-animal-lost.component.ts");
/* harmony import */ var _register_animal_found_register_animal_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register-animal-found/register-animal-found.component */ "./src/app/register-animal-found/register-animal-found.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _place_comments_place_comments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./place-comments/place-comments.component */ "./src/app/place-comments/place-comments.component.ts");
/* harmony import */ var _place_details_place_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./place-details/place-details.component */ "./src/app/place-details/place-details.component.ts");
/* harmony import */ var _placeslist_placeslist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./placeslist/placeslist.component */ "./src/app/placeslist/placeslist.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _place_register_place_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./place-register/place-register.component */ "./src/app/place-register/place-register.component.ts");
/* harmony import */ var _animals_adoption_list_animals_adoption_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./animals-adoption-list/animals-adoption-list.component */ "./src/app/animals-adoption-list/animals-adoption-list.component.ts");
/* harmony import */ var _animals_found_list_animals_found_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./animals-found-list/animals-found-list.component */ "./src/app/animals-found-list/animals-found-list.component.ts");
/* harmony import */ var _animals_lost_list_animals_lost_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./animals-lost-list/animals-lost-list.component */ "./src/app/animals-lost-list/animals-lost-list.component.ts");
/* harmony import */ var _animal_adoption_detail_animal_adoption_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./animal-adoption-detail/animal-adoption-detail.component */ "./src/app/animal-adoption-detail/animal-adoption-detail.component.ts");
/* harmony import */ var _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./owner-detail/owner-detail.component */ "./src/app/owner-detail/owner-detail.component.ts");
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./terms-conditions/terms-conditions.component */ "./src/app/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");































var appRoutes = [
    //, canActivate: [AuthGuard]
    // OJO: creé un ejemplo para home pero todav. no tengo el componente home:
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    //{path: "my-animals", component: OwnerAnimalListComponent},
    //{path: "new-animal", component: RegisterAnimalComponent},
    //{path: "new-adoption", component: RegisterAnimalAdoptionComponent},
    //{path: "new-lost", component: RegisterAnimalLostComponent},
    //{path: "new-found", component: RegisterAnimalFoundComponent},
    //{path: "place-comments", component: PlaceCommentsComponent},
    //{path: "place-detail", component: PlaceDetailsComponent},
    { path: "places-list", component: _placeslist_placeslist_component__WEBPACK_IMPORTED_MODULE_17__["PlaceslistComponent"] },
    //{path: "map", component: MapComponent},
    //{path: "new-place", component: PlaceRegisterComponent},
    //{path: "adoption-list", component: AnimalsAdoptionListComponent},
    //{path: "found-list", component: AnimalsFoundListComponent},
    //{path: "lost-list", component: AnimalsLostListComponent},
    //{path: "adoption-detail", component: AnimalAdoptionDetailComponent},
    { path: "myprofile", component: _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_24__["OwnerDetailComponent"] },
    { path: "profile/:user_id", component: _user_user_component__WEBPACK_IMPORTED_MODULE_29__["UserComponent"] },
    { path: "edit-profile", component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_30__["EditProfileComponent"] },
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "**", component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] }
    //Las siguientes deben ser las ultimas y en este orden:
    //a continuación el componente que veré si no hay extension de la url:
    //{path: "", component: HomeComponent},
    //a continuación debería estar el componente de error 404:
    //{path: "**", component: HomeComponent},
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _owner_animal_list_owner_animal_list_component__WEBPACK_IMPORTED_MODULE_9__["OwnerAnimalListComponent"],
                _register_animal_register_animal_component__WEBPACK_IMPORTED_MODULE_10__["RegisterAnimalComponent"],
                _register_animal_adoption_register_animal_adoption_component__WEBPACK_IMPORTED_MODULE_11__["RegisterAnimalAdoptionComponent"],
                _register_animal_lost_register_animal_lost_component__WEBPACK_IMPORTED_MODULE_12__["RegisterAnimalLostComponent"],
                _register_animal_found_register_animal_found_component__WEBPACK_IMPORTED_MODULE_13__["RegisterAnimalFoundComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_14__["ContactFormComponent"],
                _place_comments_place_comments_component__WEBPACK_IMPORTED_MODULE_15__["PlaceCommentsComponent"],
                _place_details_place_details_component__WEBPACK_IMPORTED_MODULE_16__["PlaceDetailsComponent"],
                _placeslist_placeslist_component__WEBPACK_IMPORTED_MODULE_17__["PlaceslistComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_18__["MapComponent"],
                _place_register_place_register_component__WEBPACK_IMPORTED_MODULE_19__["PlaceRegisterComponent"],
                _animals_adoption_list_animals_adoption_list_component__WEBPACK_IMPORTED_MODULE_20__["AnimalsAdoptionListComponent"],
                _animals_found_list_animals_found_list_component__WEBPACK_IMPORTED_MODULE_21__["AnimalsFoundListComponent"],
                _animals_lost_list_animals_lost_list_component__WEBPACK_IMPORTED_MODULE_22__["AnimalsLostListComponent"],
                _animal_adoption_detail_animal_adoption_detail_component__WEBPACK_IMPORTED_MODULE_23__["AnimalAdoptionDetailComponent"],
                _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_24__["OwnerDetailComponent"],
                _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_25__["TermsConditionsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_29__["UserComponent"],
                _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_30__["EditProfileComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDvle76TmtgTUCv4xVJqkfPliRmfq_LqYQ'
                })
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

/***/ "./src/app/edit-profile/edit-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contenedor\" class=\"container-fluid\">\n  <h2 class=\"text-center text-info mt-2\">Editar perfil</h2>\n  \t<hr>\n\t<div class=\"row\">\n      <!-- left column -->\n      <div class=\"col-md-3\">\n        <div class=\"text-center\">\n          <img src=\"//placehold.it/100\" class=\"avatar img-circle\" alt=\"avatar\">\n          <h6>Cambiar foto de perfil</h6>\n\n          <input type=\"file\" class=\"form-control \">\n        </div>\n      </div>\n\n      <!-- edit form column -->\n      <div class=\"col-md-9 personal-info\">\n\n        <h3 class=\"text-left text-secondary\">Información personal</h3>\n\n        <form class=\"form-horizontal\" role=\"form\">\n          <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Nombre</label>\n            <div class=\"col-lg-8\">\n              <input id=\"inputName\" class=\"form-control\" type=\"text\" value=\"\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-lg-3 control-label\">Email:</label>\n            <div class=\"col-lg-8\">\n              <input id=\"inputEmail\"class=\"form-control\" type=\"email\" value=\"\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Cambiar contraseña:</label>\n            <div class=\"col-md-8\">\n              <input id=\"inputPassword\"class=\"form-control\" type=\"password\" value=\"\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label id=\"inputRepeatPassword\" class=\"col-md-3 control-label\">Confirmar nueva contrasesña:</label>\n            <div class=\"col-md-8\">\n              <input class=\"form-control\" type=\"password\" value=\"\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Dirección</label>\n            <div class=\"col-md-8\">\n              <input id=\"inputStreet\" class=\"form-control\" type=\"text\" value=\"\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Ciudad</label>\n            <div class=\"col-md-8\">\n              <input id=\"inputCity\" class=\"form-control\" type=\"text\" value=\"\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\">Código postal</label>\n            <div class=\"col-md-8\">\n              <input id=\"inputPostalCode\" class=\"form-control\" type=\"text\" value=\"\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-md-3 control-label\"></label>\n            <div class=\"col-md-8\">\n              <input (click)=\"newData()\" type=\"button\" class=\"btn btn-info\" value=\"Guardar cambios\">\n              <span></span>\n              <input type=\"reset\" class=\"btn btn-default\" value=\"Cancel\">\n            </div>\n          </div>\n        </form>\n\n<hr>\n    <h3 class=\"text-left text-secondary\">Añadir mascotas</h3>\n<hr>\n\n\n\n<form class=\"form-horizontal\" role=\"form\">\n\n\n    <div class=\"form-group\">\n      <label class=\"col-lg-3 control-label\">Especie</label>\n      <div class=\"col-lg-8\">\n        <select id=\"inputType\">\n          <option value=\"1\">Perro</option>\n          <option value=\"2\">Gato</option>\n        </select>\n      </div>\n    </div>\n\n\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-3 control-label\">Nombre</label>\n    <div class=\"col-lg-8\">\n      <input id=\"inputPetName\" class=\"form-control\" type=\"text\" value=\"\">\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-3 control-label\">Fecha de nacimiento</label>\n    <div class=\"col-lg-8\">\n      <input id=\"inputBirthDate\" class=\"form-control\" type=\"date\" value=\"\">\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-3 control-label\">Género</label>\n    <div class=\"col-lg-8\">\n      <select id=\"inputGender\">\n        <option value=\"F\">Hembra</option>\n        <option value=\"M\">Macho</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-3 control-label\">Tamaño</label>\n    <div class=\"col-lg-8\">\n      <select id=\"inputSize\">\n        <option value=\"small\">Pequeño</option>\n        <option value=\"medium\">Mediano</option>\n        <option value=\"large\">Grande</option>\n        <option value=\"xl\">Gigante</option>\n      </select>\n    </div>\n  </div>\n\n\n\n\n\n  <div class=\"form-group\">\n    <label class=\"col-lg-3 control-label\">Descripción</label>\n    <div class=\"col-lg-8\">\n      <input id=\"inputPetDescription\"class=\"form-control\" type=\"email\" value=\"\">\n    </div>\n  </div>\n\n\n  <div class=\"form-group\">\n    <label class=\"col-md-3 control-label\"></label>\n    <div class=\"col-md-8\">\n      <input (click)=\"newAnimal()\" type=\"button\" class=\"btn btn-info\" value=\"Save Changes\">\n      <span></span>\n      <input type=\"reset\" class=\"btn btn-default\" value=\"Cancel\">\n    </div>\n  </div>\n</form>\n\n\n\n\n\n\n\n      </div>\n  </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenedor {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: 0.75rem; }\n\na {\n  color: #17a2b8; }\n\n.form-control:focus {\n  border-color: #17a2b8;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #00beff; }\n\n.bg-image {\n  background-image: url(\"/assets/images/group-hug2.png\");\n  background-size: cover;\n  background-position: top;\n  min-height: 150px; }\n\n.login-heading {\n  font-weight: 300; }\n\n.btn-login {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n  border-radius: 2rem; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group > input,\n.form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n  height: auto;\n  border-radius: 2rem; }\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out; }\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::placeholder {\n  color: transparent; }\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3); }\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777; }\n\n.myprofile {\n  max-width: 40%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBa0I7RUFDbEIsMEJBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FDRixFQUFBOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlFQUE4RSxFQUFBOztBQVFoRjtFQUNFLHNEQUFzRDtFQUN0RCxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7O0VBRUUsc0RBQXNEO0VBQ3RELFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQ0FBQTtFQUNBLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG9DQUFBO0VBQ0EsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQiwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxrQkFBa0IsRUFBQTs7QUFPcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFPcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSw0RUFBNEU7RUFDNUUsZ0RBQWdELEVBQUE7O0FBR2xEO0VBQ0UsNkNBQTZDO0VBQzdDLGdEQUFnRDtFQUNoRCxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUliO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW5lZG9yIHtcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IDAuNzVyZW07XG59XG5cbmF7XG4gIGNvbG9yOiAjMTdhMmI4XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMxN2EyYjg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDAsIDE5MCwgMjU1LCAxKTtcbn1cblxuLmxvZ2luLFxuLmltYWdlIHtcbi8vIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2dyb3VwLWh1ZzIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgbWluLWhlaWdodDogMTUwcHg7IC8vZXN0byBsbyBhZ3JlZ3VlIHlvIHBhcmEgcSBlbiBtb3ZpbCBzZSB2ZWFcbn1cblxuLmxvZ2luLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYnRuLWxvZ2luIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cD5pbnB1dCxcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBjdXJzb3I6IHRleHQ7XG4gIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICsgdmFyKC0taW5wdXQtcGFkZGluZy15KSAqICgyIC8gMykpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cblxuLm15cHJvZmlsZXtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent() {
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent.prototype.newData = function () {
        //get owner id:
        var isLogged = localStorage.getItem("userlogged");
        var splitId = isLogged.split("/");
        var user_id = splitId[0];
        this.userId = user_id;
        //data from form:
        //user:
        var name = $('#inputName').val();
        var email = $('#inputEmail').val();
        var password = $('#inputPassword').val();
        var repeatPassword = $('#inputRepeatPassword').val();
        //address:
        var street = $('#inputStreet').val();
        var city = $('#inputCity').val();
        var postalcode = $('#inputPostalCode').val();
        //data to update:
        var dataUser = [];
        var dataAddress = [];
        //**********************************************************
        //UPDATE PERSONAL DETAILS
        //**********************************************************
        //UPDATE USER NAME:
        if (name != "") {
            this.newName = name;
            dataUser.push({ "key": "name", "value": this.newName });
        }
        //UPDATE USER EMAIL
        if (email != "") {
            this.newEmail = email;
            dataUser.push({ "key": "email", "value": this.newEmail });
        }
        //UPDATE USER PASSWORD:
        if (password != "" && password != repeatPassword) {
            alert("Passwords Don't Match");
            return false;
        }
        else if (password != "" && password === repeatPassword) {
            alert("passwords match!");
            this.newPass = password;
            dataUser.push({ "key": "password", "value": this.newPass });
        }
        ;
        updateUserDetails(user_id, dataUser);
        //**********************************************************
        //SET DATA TO UPDATE IN ADDRESS
        //**********************************************************
        //UPDATE USER STREET
        if (street != "") {
            this.newStreet = street;
            dataAddress.push({ "key": "address", "value": this.newStreet });
        }
        //UPDATE CITY ID: FOR NOW WE ONLY HAVE Barcelona = 1, so:
        if (city != "") {
            if (city == "Barcelona")
                this.newCityId = 1;
            dataAddress.push({ "key": "city_id", "value": this.newCityId });
        }
        //UPDATE POSTAL CODE
        if (postalcode != "") {
            this.newPostalCode = postalcode;
            console.log(this.newPostalCode);
            dataAddress.push({ "key": "postal_code", "value": this.newPostalCode });
        }
        updateAddress(user_id, dataAddress);
    }; //newData()
    //**********************************************************
    //ADD ANIMAL:
    //**********************************************************
    EditProfileComponent.prototype.newAnimal = function () {
        //get owner id:
        var isLogged = localStorage.getItem("userlogged");
        var splitId = isLogged.split("/");
        var user_id = splitId[0];
        //this.userId = user_id;
        //data from form:
        //mascota:
        var petName = $('#inputPetName').val();
        var url = "http://18.224.131.43:443/animal";
        var animal_type_id = $('#inputType').val();
        var birthDate = $('#inputBirthDate').val();
        var gender = $('#inputGender').val();
        var size = $('#inputSize').val();
        var petDescription = $('#inputPetDescription').val();
        //TODO: input para subir fotos
        var picture = "www.url.com";
        var dataPet = {
            "owner_user_id": user_id,
            "name": petName,
            "animal_type_id": animal_type_id,
            "birthdate": birthDate,
            "gender": gender,
            "size": size,
            "picture": picture,
            "description": petDescription
        };
        console.log(dataPet);
        if (petName != "" && petDescription != "") {
            $.post(url, dataPet, function (response) {
                console.log(response);
                alert("se ha guardado una nueva mascota");
            }); //post animal
        }
    }; // newAnimal()
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/edit-profile/edit-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditProfileComponent);
    return EditProfileComponent;
}()); //END CLASS

//**********************************************************
//DEFINED FUNCTIONS:
//**********************************************************
//define UPDATE PERSONAL DETAILS function
function updateUserDetails(user_id, dataUser) {
    var url = "http://18.224.131.43:443/user/" + user_id;
    return $.ajax({
        url: url,
        type: 'PUT',
        success: function (response) { console.log("sucess response updateUserDetails: " + response); },
        data: JSON.stringify(dataUser),
        contentType: "application/json"
    });
} //end API call
//define UPDATE ADDRESS DETAILS function:
function updateAddress(user_id, dataAddress) {
    var url = "http://18.224.131.43:443/user_address/" + user_id;
    //console.log("user_id en updateAddress(): "+user_id)
    //console.log("dataAddress en updateAddress(): "+dataAddress)
    return $.ajax({
        url: url,
        type: 'PUT',
        success: function (response) { console.log("success response en updateAddress" + response); },
        data: JSON.stringify(dataAddress),
        contentType: "application/json"
    });
} //end API call


/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container\">\n  <p class=\"float-right\"><a href=\"#\">Back to top</a></p>\n  <p>&copy; 2017-2019 Company, Inc. &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcbiAgY29sb3I6Z3JheTtcbn1cbiJdfQ== */"

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

module.exports = "<header class=\"container\">\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-light border-bottom border-dark\">\n    <button class=\"btn btn-outline-dark\" (click)=\"_auth.goToHome()\" type=\"button\" name=\"button\"><i class=\"fas fa-home\"></i></button>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n\n   <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n       <ul class=\"navbar-nav mr-auto\">\n\n\n      </ul>\n\n\n      <button *ngIf=\"!_auth.isLogged()\" (click)=\"_auth.goToLogin()\" type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fas fa-sign-in-alt\"></i>\n        Log in\n       </button>\n\n      <div *ngIf=\"_auth.isLogged()\" class=\"btn-group\">\n         <button (click)=\"_auth.goToMyProfile()\" class=\"dropdown-item\" type=\"button\">\n           <i class=\"fas fa-user\"></i>\n           Mi Perfil\n         </button>\n\n         <button (click)=\"_auth.goToPlacesList()\" class=\"dropdown-item\" type=\"button\">\n            <i class=\"fas fa-heart\"></i>\n           Mis sitios favoritos\n         </button>\n<!--\n           <button class=\"dropdown-item\" type=\"button\">\n             <i class=\"fas fa-users\"></i>\n             Amigos\n           </button>\n-->\n\n         <button (click)=\"_auth.logOut()\" class=\"dropdown-item\" type=\"button\">\n           Log out\n           <i class=\"fas fa-sign-out-alt\"></i>\n         </button>\n\n      </div>\n\n    </div>\n  </nav>\n\n\n\n\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n  height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcbiAgaGVpZ2h0OiAzMHB4O1xufVxuIl19 */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<div class=\"\">\n  <app-header></app-header>\n</div>\n\n  <body>\n<main role=\"main\">\n\n  <div id=\"myCarousel\" class=\"carousel slide d-none d-md-flex\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n\n        <img src=\"https://cdn.vox-cdn.com/thumbor/1YCzKjO9KNBI1p-4Lq2ZnxvEaJc=/0x0:2000x1333/1200x900/filters:focal(840x506:1160x826)/cdn.vox-cdn.com/uploads/chorus_image/image/60053469/dog_friendly_header_nellcote.0.0.0.0.jpg\" class=\"d-block MyCarrouselImg\"  alt=\"...\">\n  <!--      <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#777\"/></svg>\n-->        <div class=\"container\">\n\n          <div class=\"carousel-caption text-center\" role=\"alert \">\n            <h1 class=\"\">Dog-Friendly</h1>\n            <p>Busca y recomienda sitios donde podemos\n              ir con nuestros perros, siempre que sean \"friendly-dogs\" y se\n              cumplan ciertas reglas de convivencia.</p>\n            <p><a (click)=\"_auth.goToPlacesList()\" class=\"btn btn-lg btn-info\"  role=\"button\">Queremos pasear</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://assets.change.org/photos/5/lr/lf/MXLRlFTsCLOUrJt-1600x900-noPad.jpg\" class=\"d-block MyCarrouselImg\"  alt=\"...\">\n              <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>Adpta uno sin hogar</h1>\n            <p>Protectoras y particulares, todos pueden publicar animales\n              para adopción</p>\n            <p><a (click)=\"_auth.goToPlacesList()\" class=\"btn btn-lg btn-info\" role=\"button\">Salva una vida</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://peopledotcom.files.wordpress.com/2019/02/dog-love.jpg\" class=\"d-block MyCarrouselImg\"  alt=\"...\">\n\n        <div class=\"container\">\n          <div class=\"carousel-caption text-center\">\n            <h1>Hacer que suceda</h1>\n            <p>Si ves un animal asustado en la calle,\n            intenta ganar su confianza y reténlo. Ayúdales a reencontrarse!</p>\n            <p><a (click)=\"_auth.goToPlacesList()\" class=\"btn btn-lg btn-info\" role=\"button\">Mascotas perdidas</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n\n  <!-- Marketing messaging and featurettes\n  ================================================== -->\n  <!-- Wrap the rest of the page in another container to center all the content. -->\n\n  <div class=\"container marketing\">\n\n    <!-- Three columns of text below the carousel -->\n    <div class=\"row  mt-4 mt-lg-4\">\n      <div class=\"col-lg-4\">\n\n<!--image lost and found-->\n        <div class=\"col-md-4 px-4 mb-4 col-6 px-lg-5 mx-auto\">\n          <a data-toggle=\"modal\" data-target=\".yellow\" href=\"\">\n            <div class=\"project rounded-circle image-cropper py-3\">\n              <img class=\"card-img\" src=\"/assets/images/found2.jpg\" alt=\"Card image\">\n            </div>\n          </a>\n        </div>\n\n        <h2>Perdidos y encontrados</h2>\n        <p>¿Has perdido a tu mascota?\n          ¿Has encontrado una mascota y quieres\n          encontrar a su dueño?\n          Lo más urgente: haz un anuncio y\n        publica su foto, fecha de perdido/encontrado\n      y la dirección. Luego mira en nuestra lista los\n      animales anunciados por tu zona, esperamos que\n      se encuentren pronto! no olvides enviarnos la foto\n      de ese reencuentro!</p>\n        <p><a class=\"btn btn-outline-info\" href=\"#\" role=\"button\">Perdí mi mascota &raquo;</a></p>\n        <p><a class=\"btn btn-outline-info\" href=\"#\" role=\"button\">Encontré una mascota &raquo;</a></p>\n\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-4\">\n<!--image adopt -dont shop-->\n        <div class=\"col-md-4 px-4 mb-4 col-6 px-lg-5 mx-auto\">\n          <a data-toggle=\"modal\" data-target=\".yellow\" href=\"\">\n            <div class=\"project rounded-circle image-cropper\">\n              <img class=\"card-img \" src=\"/assets/images/adopta2.jpg\" alt=\"Card image\">\n            </div>\n          </a>\n        </div>\n        <h2>Adopta un amigo <3 </h2>\n        <p>Cientos de miles de animales domésticos\n          viven en jaulas y en las calles esperando ser adoptados,\n           muchos mueren sin haber conocido el calor de un hogar, si estás pensando\n         que quieres un amigo fiel, piensa en adoptar uno sin hogar, no te arrepentirás,\n          salva una vida, adopta, no compres! <br>\n        Si tienes un animalito para dar en adopción, puedes publicarlo gratuitamente.</p>\n        <p><a class=\"btn btn-outline-info\" href=\"#\" role=\"button\">Quiero adoptar &raquo;</a></p>\n        <p><a class=\"btn btn-outline-info\" href=\"#\" role=\"button\">Doy en adopción &raquo;</a></p>\n\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-4\">\n<!--image dogfriendly-->\n        <div class=\"col-md-4 px-4 mb-4 col-6 px-lg-5 mx-auto\">\n          <a data-toggle=\"modal\" data-target=\".yellow\" href=\"\">\n            <div class=\"project rounded-circle image-cropper\">\n              <img class=\"card-img \" src=\"/assets/images/dogfriendly1.jpg\" alt=\"Card image\">\n            </div>\n          </a>\n        </div>\n        <h2>Voy con mi perro!</h2>\n        <p> Sólo quienes tenemos mascotas sabemos lo que es\n          estar deseando llegar a casa para pasar el\n          tiempo que nos queda del día juntos!\n          Porque queremos poder atender a nuestras mascotas\n          y no sacrificar vida social\n          o porque queremos llevarlos a todos lados...\n          Aquí encontrarás todo tipo de sitios donde\n          las mascotas -siempre que sean amistosas, educadas,\n          inofensivas, etc- son bienvenidas!\n          </p>\n          <p><a class=\"btn btn-outline-info\" href=\"#\" role=\"button\">A dónde vamos? &raquo;</a></p>\n          <p><a class=\"btn btn-outline-info\" href=\"#\" role=\"button\">Admito mascotas &raquo;</a></p>\n\n      </div><!-- /.col-lg-4 -->\n    </div><!-- /.row -->\n\n\n\n  </div><!-- /.container -->\n\n\n  <!-- FOOTER -->\n<app-footer></app-footer>\n</main>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\nbody {\n  padding-top: 3rem;\n  padding-bottom: 0;\n  color: #5a5a5a; }\nfooter a {\n  color: black; }\nh2 {\n  color: #17a2b8; }\n/* CUSTOMIZE THE CAROUSEL\n-------------------------------------------------- */\n/* Carousel base class */\n.carousel {\n  margin-bottom: 4rem; }\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n  bottom: 3rem;\n  z-index: 10;\n  padding: 5px;\n  background: rgba(1, 1, 1, 0.5); }\n/* Declare heights because of positioning of img element */\n.carousel-item {\n  height: 30rem;\n  background-color: #000; }\n.carousel-item > img {\n  display: inline-block;\n  margin-left: auto;\n  height: auto;\n  width: auto;\n  vertical-align: middle;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n  padding: 0; }\n/* MARKETING CONTENT\n-------------------------------------------------- */\n/* Center align the text within the three columns below the carousel */\n.marketing .col-lg-4 {\n  margin-bottom: 1.5rem;\n  text-align: center; }\n.marketing h2 {\n  font-weight: 400; }\n.marketing .col-lg-4 p {\n  margin-right: .75rem;\n  margin-left: .75rem; }\n/* Featurettes\n------------------------- */\n.featurette-divider {\n  margin: 5rem 0;\n  /* Space out the Bootstrap <hr> more */ }\n/* Thin out the marketing headings */\n.featurette-heading {\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -.05rem; }\n/* RESPONSIVE CSS\n-------------------------------------------------- */\n@media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4; }\n  .featurette-heading {\n    font-size: 50px; } }\n@media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem; } }\n.image-cropper {\n  display: inline-block;\n  width: 200px;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(0) translateX(-50%); }\n.card-img {\n  display: inline-block;\n  margin-left: auto;\n  height: 100%;\n  width: auto;\n  vertical-align: middle;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%); }\n/*\n.MyCarrouselImg{\n  display: inline-block;\n  margin-left: auto;\n  //height: auto;\n  //width: 100%;\n  min-height: 130%;\n  min-width: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO29EQ0NvRDtBRENwRCxtREFBQTtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7QUFHaEI7RUFFRSxZQUFXLEVBQUE7QUFJYjtFQUNFLGNBQWEsRUFBQTtBQUdmO29EQ0xvRDtBRFFwRCx3QkFBQTtBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7QUFFckIsaUVBQUE7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QixFQUFBO0FBR2hDLDBEQUFBO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7QUFFeEI7RUFPQSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLG9EQUFvRDtFQUNwRCxVQUFVLEVBQUE7QUFJVjtvRENmb0Q7QURrQnBELHNFQUFBO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTtBQUlyQjsyQkNsQjJCO0FEcUIzQjtFQUNFLGNBQWM7RUFBRSxzQ0FBQSxFQUF1QztBQUd6RCxvQ0FBQTtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUIsRUFBQTtBQUl6QjtvRENyQm9EO0FEd0JwRDtFQUNFLHFDQUFBO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCO0FBR0g7RUFDRTtJQUNFLGdCQUFnQixFQUFBLEVBQ2pCO0FBR0g7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGlEQUFpRCxFQUFBO0FBR3JEO0VBQ0kscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixvREFBb0QsRUFBQTtBQUd4RDs7Ozs7Ozs7Ozs7Q0NwQkMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHTE9CQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogUGFkZGluZyBiZWxvdyB0aGUgZm9vdGVyIGFuZCBsaWdodGVyIGJvZHkgdGV4dCAqL1xuXG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBjb2xvcjogIzVhNWE1YTtcbn1cblxuZm9vdGVye1xuICBhe1xuICBjb2xvcjpibGFjaztcbn1cbn1cblxuaDJ7XG4gIGNvbG9yOiMxN2EyYjg7XG59XG5cbi8qIENVU1RPTUlaRSBUSEUgQ0FST1VTRUxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIENhcm91c2VsIGJhc2UgY2xhc3MgKi9cbi5jYXJvdXNlbCB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG4vKiBTaW5jZSBwb3NpdGlvbmluZyB0aGUgaW1hZ2UsIHdlIG5lZWQgdG8gaGVscCBvdXQgdGhlIGNhcHRpb24gKi9cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgYm90dG9tOiAzcmVtO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuNSk7XG59XG5cbi8qIERlY2xhcmUgaGVpZ2h0cyBiZWNhdXNlIG9mIHBvc2l0aW9uaW5nIG9mIGltZyBlbGVtZW50ICovXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIGhlaWdodDogMzByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4uY2Fyb3VzZWwtaXRlbSA+IGltZyB7XG4vLyAgcG9zaXRpb246cmVsYXRpdmU7XG4vLyAgdG9wOiAwO1xuLy8gIGxlZnQ6IDA7XG4vLyAgbWluLXdpZHRoOiAxMDAlO1xuLy8gIGhlaWdodDogMzJyZW07XG5cbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbm1hcmdpbi1sZWZ0OiBhdXRvO1xuaGVpZ2h0OiBhdXRvO1xud2lkdGg6IGF1dG87XG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xucG9zaXRpb246IGFic29sdXRlO1xubGVmdDogNTAlO1xudG9wOiA1MCU7XG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xucGFkZGluZzogMDtcbn1cblxuXG4vKiBNQVJLRVRJTkcgQ09OVEVOVFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogQ2VudGVyIGFsaWduIHRoZSB0ZXh0IHdpdGhpbiB0aGUgdGhyZWUgY29sdW1ucyBiZWxvdyB0aGUgY2Fyb3VzZWwgKi9cbi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFya2V0aW5nIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5tYXJrZXRpbmcgLmNvbC1sZy00IHAge1xuICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcbiAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcbn1cblxuXG4vKiBGZWF0dXJldHRlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcbiAgbWFyZ2luOiA1cmVtIDA7IC8qIFNwYWNlIG91dCB0aGUgQm9vdHN0cmFwIDxocj4gbW9yZSAqL1xufVxuXG4vKiBUaGluIG91dCB0aGUgbWFya2V0aW5nIGhlYWRpbmdzICovXG4uZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xufVxuXG5cbi8qIFJFU1BPTlNJVkUgQ1NTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG5cbiAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDdyZW07XG4gIH1cbn1cblxuLmltYWdlLWNyb3BwZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5jYXJkLWltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLypcbi5NeUNhcnJvdXNlbEltZ3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgLy9oZWlnaHQ6IGF1dG87XG4gIC8vd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEzMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuKi9cbiIsIi8qIEdMT0JBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBQYWRkaW5nIGJlbG93IHRoZSBmb290ZXIgYW5kIGxpZ2h0ZXIgYm9keSB0ZXh0ICovXG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBjb2xvcjogIzVhNWE1YTsgfVxuXG5mb290ZXIgYSB7XG4gIGNvbG9yOiBibGFjazsgfVxuXG5oMiB7XG4gIGNvbG9yOiAjMTdhMmI4OyB9XG5cbi8qIENVU1RPTUlaRSBUSEUgQ0FST1VTRUxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBDYXJvdXNlbCBiYXNlIGNsYXNzICovXG4uY2Fyb3VzZWwge1xuICBtYXJnaW4tYm90dG9tOiA0cmVtOyB9XG5cbi8qIFNpbmNlIHBvc2l0aW9uaW5nIHRoZSBpbWFnZSwgd2UgbmVlZCB0byBoZWxwIG91dCB0aGUgY2FwdGlvbiAqL1xuLmNhcm91c2VsLWNhcHRpb24ge1xuICBib3R0b206IDNyZW07XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMSwgMSwgMSwgMC41KTsgfVxuXG4vKiBEZWNsYXJlIGhlaWdodHMgYmVjYXVzZSBvZiBwb3NpdGlvbmluZyBvZiBpbWcgZWxlbWVudCAqL1xuLmNhcm91c2VsLWl0ZW0ge1xuICBoZWlnaHQ6IDMwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XG5cbi5jYXJvdXNlbC1pdGVtID4gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xuICBwYWRkaW5nOiAwOyB9XG5cbi8qIE1BUktFVElORyBDT05URU5UXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogQ2VudGVyIGFsaWduIHRoZSB0ZXh0IHdpdGhpbiB0aGUgdGhyZWUgY29sdW1ucyBiZWxvdyB0aGUgY2Fyb3VzZWwgKi9cbi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLm1hcmtldGluZyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cblxuLm1hcmtldGluZyAuY29sLWxnLTQgcCB7XG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xuICBtYXJnaW4tbGVmdDogLjc1cmVtOyB9XG5cbi8qIEZlYXR1cmV0dGVzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcbiAgbWFyZ2luOiA1cmVtIDA7XG4gIC8qIFNwYWNlIG91dCB0aGUgQm9vdHN0cmFwIDxocj4gbW9yZSAqLyB9XG5cbi8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cbi5mZWF0dXJldHRlLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cblxuLyogUkVTUE9OU0lWRSBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40OyB9XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNTBweDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDdyZW07IH0gfVxuXG4uaW1hZ2UtY3JvcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKTsgfVxuXG4uY2FyZC1pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7IH1cblxuLypcbi5NeUNhcnJvdXNlbEltZ3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgLy9oZWlnaHQ6IGF1dG87XG4gIC8vd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEzMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuKi9cbiJdfQ== */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<div id=\"contenedor\" class=\"container-fluid\">\n  <div id=\"row100vh\" class=\"row no-gutter min-vh-100\">\n    <div class=\"col-sm-12 col-md-12 col-lg-6 bg-image\"></div>\n    <div id=\"allignSelfCenter\" class=\"align-self-center col-sm-12 col-md-12 col-lg-6 \">\n      <div class=\"login d-flex align-items-center py-sm-0 py-md-2 py-xl-5\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9 col-lg-8 mx-auto\">\n              <h4 class=\"login-heading mb-4 text-center\">Nos alegra verte de nuevo! </h4>\n              <form>\n                <div class=\"form-label-group\">\n                  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n                  <label for=\"inputEmail\">Email </label>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                  <label for=\"inputPassword\">Contraseña</label>\n                </div>\n\n                <div class=\"custom-control custom-checkbox mb-3\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                </div>\n              </form>\n              <button (click)=\"logInForm()\" class=\"btn btn-lg btn-info btn-block btn-login text-uppercase font-weight-bold mb-2\" type=\"submit\">Entrar</button>\n              <button (click)=\"_auth.goToSignup()\" class=\"btn btn-lg btn-secondary btn-block btn-login text-uppercase font-weight-bold mb-2\" type=\"submit\">Quiero unirme</button>\n              <div class=\"text-center\">\n                <a class=\"small\" href=\"#\">Olvidaste tu contraseña?</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenedor {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: 0.75rem; }\n\na {\n  color: #17a2b8; }\n\n.form-control:focus {\n  border-color: #17a2b8;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #00beff; }\n\n.bg-image {\n  background-image: url(\"/assets/images/hola.jpg\");\n  background-size: cover;\n  background-position: center;\n  min-height: 200px; }\n\n.login-heading {\n  font-weight: 300; }\n\n.btn-login {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n  border-radius: 2rem; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group > input,\n.form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n  height: auto;\n  border-radius: 2rem; }\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out; }\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::placeholder {\n  color: transparent; }\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3); }\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQWtCO0VBQ2xCLDBCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQ0YsRUFBQTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpRUFBOEUsRUFBQTs7QUFRaEY7RUFDRSxnREFBZ0Q7RUFDaEQsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCOztFQUVFLHNEQUFzRDtFQUN0RCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0NBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixvQ0FBQTtFQUNBLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0Usa0JBQWtCLEVBQUE7O0FBT3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBT3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsNEVBQTRFO0VBQzVFLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLDZDQUE2QztFQUM3QyxnREFBZ0Q7RUFDaEQsZUFBZTtFQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbmVkb3Ige1xuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xuICAtLWlucHV0LXBhZGRpbmcteTogMC43NXJlbTtcbn1cblxuYXtcbiAgY29sb3I6ICMxN2EyYjhcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzE3YTJiODtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMCwgMTkwLCAyNTUsIDEpO1xufVxuXG4ubG9naW4sXG4uaW1hZ2Uge1xuLy8gbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5iZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaG9sYS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyMDBweDsgLy9lc3RvIGxvIGFncmVndWUgeW8gcGFyYSBxIGVuIG1vdmlsXG59XG5cbi5sb2dpbi1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJ0bi1sb2dpbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcteSkgdmFyKC0taW5wdXQtcGFkZGluZy14KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgY3Vyc29yOiB0ZXh0O1xuICAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSArIHZhcigtLWlucHV0LXBhZGRpbmcteSkgKiAoMiAvIDMpKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuIl19 */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logInForm = function () {
        var email = $('#inputEmail').val();
        var password = $('#inputPassword').val();
        this._auth.login(email, password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<!--Profile plantilla-->\n<!--https://codepen.io/jasondavis/pen/vyMJPp?editors=1111-->\n\n<app-header>\n\n</app-header>\n\n<div class=\"container contenedor\">\n<div class=\"main-row-container \">\n  <h4 class=\"text-info text-center profile-activity py-2 \">\n    <span class=\"middle\">{{ _user.userName }}</span>\n    <br>\n  </h4>\n  <div class=\"row\">\n    <div id=\"user-profile-2\" class=\"user-profile\">\n        <div class=\"tabbable\">\n          <div class=\"tab-content no-border padding-24 py-2\">\n            <div id=\"home\" class=\"tab-pane in active\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-3 center\">\n                  <span class=\"profile-picture\">\n                    <img class=\"editable mw-100 img-responsive\" alt=\"Avatar\" id=\"avatar2\" src=\"https://barkpost.com/wp-content/uploads/2015/07/dog-kisses.png\">\n                  </span>\n\n\n                  <div class=\"space space-4 my-2\"></div>\n\n                  <button (click)=\"_auth.goToEditProfile()\" class=\"btn btn-sm btn-block btn-info\" type=\"button\" name=\"button\">\n                      Editar perfil\n                  </button>\n\n                </div><!-- /.col -->\n\n                <div class=\"col-xs-12 col-sm-9\">\n                  <div class=\"profile-user-info\">\n\n\n                    <div class=\"profile-info-row\">\n                      <div class=\"profile-info-name\"> Location </div>\n\n                      <div class=\"profile-info-value pt-6 pr-0 pb-0 pl-6 \">\n                        <i class=\"fa fa-map-marker light-orange bigger-110\"></i>\n                        <span class=\"ml-2\">{{_user.userCity}}</span>\n                        <span>España</span>\n                      </div>\n                    </div>\n\n                    <div class=\"profile-info-row\">\n                      <div class=\"profile-info-name\"> Joined </div>\n\n                      <div class=\"profile-info-value\">\n                        <span>{{_user.userJoinedDay}}/{{_user.userJoinedMonth}}/{{_user.userJoinedYear}}</span>\n                      </div>\n                    </div>\n\n\n                  </div>\n\n                  <div class=\"hr hr-8 dotted\"></div>\n\n                </div><!-- /.col -->\n              </div><!-- /.row -->\n\n              <div class=\"space-20\"></div>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-12 text-info text-center profile-activity\">\n      <h4>Mis mascotas</h4>\n  </div>\n</div>\n<div class=\"profile-feed row my-2 myPets\">\n\n  <div class=\" col-sm-12\" *ngFor=\"let pet of _user.userPets\">\n    <div class=\"profile-activity \">\n      <div>\n        <img class=\"pull-left\" alt=\"My pet avatar\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZoZvX-HlrkrrO4jgqWxmFiqIjd6brFXK1UhqdHPkhs7kaWf3\">\n        <a class=\"user mr-2 text-danger\" href=\"#\"> {{pet.name}} </a>\n          {{pet.description}}\n        <a class=\"text-info\" href=\"#\">ver más</a>\n      </div>\n    </div>\n  </div><!-- /.col -->\n\n\n\n</div><!-- /.row -->\n\n<div class=\"row\">\n  <div class=\"\">\n\n  </div>\n</div>\n\n<div class=\"social-row row\">\n<div class=\"col social-col \">\n  <a href=\"#\"><img src=\"/assets/icons/facebook-50.png\" alt=\"\"></a>\n</div>\n<div class=\"col social-col \">\n  <a href=\"#\"><img src=\"/assets/icons/instagram-50.png\" alt=\"\"></a>\n</div>\n<div class=\"col social-col \">\n  <a href=\"#\"><img src=\"/assets/icons/twitter-50.png\" alt=\"\"></a>\n</div>\n</div>\n\n\n\n\n            </div><!-- /#home -->\n\n\n\n\n          </div>\n        </div><!--tabbable-->\n\n      </div> <!--user-profile-2-->\n  </div> <!--Main row-->\n</div>\n</div>\n\n<app-footer>\n</app-footer>\n"

/***/ }),

/***/ "./src/app/owner-detail/owner-detail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/owner-detail/owner-detail.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin-top: 20px; }\n\n.align-center, .center {\n  text-align: center !important; }\n\n.profile-user-info {\n  display: table;\n  width: 98%;\n  width: calc(100% - 24px);\n  margin: 0 auto; }\n\n.profile-info-row {\n  display: table-row; }\n\n.profile-info-name,\n.profile-info-value {\n  display: table-cell;\n  border-top: 1px dotted #D5E4F1; }\n\n.profile-info-name {\n  text-align: right;\n  padding: 6px 10px 6px 4px;\n  font-weight: 400;\n  color: #667E99;\n  background-color: transparent;\n  width: 110px;\n  vertical-align: middle; }\n\n.profile-info-value {\n  padding: 6px 4px 6px 6px; }\n\n.profile-info-value > span + span:before {\n  display: inline;\n  content: \",\";\n  margin-left: 1px;\n  margin-right: 3px;\n  color: #666;\n  border-bottom: 1px solid #FFF; }\n\n.profile-info-value > span + span.editable-container:before {\n  display: none; }\n\n.profile-info-row:first-child .profile-info-name,\n.profile-info-row:first-child .profile-info-value {\n  border-top: none; }\n\n.profile-user-info-striped {\n  border: 1px solid #DCEBF7; }\n\n.profile-user-info-striped .profile-info-name {\n  color: #336199;\n  background-color: #EDF3F4;\n  border-top: 1px solid #F7FBFF; }\n\n.profile-user-info-striped .profile-info-value {\n  border-top: 1px dotted #DCEBF7;\n  padding-left: 12px; }\n\n.profile-picture {\n  border: 1px solid #CCC;\n  background-color: #FFF;\n  padding: 4px;\n  display: inline-block;\n  max-width: 100%;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15); }\n\n.dd-empty,\n.dd-handle,\n.dd-placeholder,\n.dd2-content {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box; }\n\n.profile-activity {\n  padding: 10px 4px;\n  border-bottom: 1px dotted #D0D8E0;\n  position: relative;\n  border-left: 1px dotted #FFF;\n  border-right: 1px dotted #FFF; }\n\n.profile-activity:first-child {\n  border-top: 1px dotted transparent; }\n\n.profile-activity:first-child:hover {\n  border-top-color: #D0D8E0; }\n\n.profile-activity:hover {\n  background-color: #F4F9FD;\n  border-left: 1px dotted #D0D8E0;\n  border-right: 1px dotted #D0D8E0; }\n\n.profile-activity img {\n  border: 2px solid #C9D6E5;\n  border-radius: 100%;\n  max-width: 40px;\n  margin-right: 10px;\n  margin-left: 0;\n  box-shadow: none; }\n\n.profile-activity .thumbicon {\n  background-color: #74ABD7;\n  display: inline-block;\n  border-radius: 100%;\n  width: 38px;\n  height: 38px;\n  color: #FFF;\n  font-size: 18px;\n  text-align: center;\n  line-height: 38px;\n  margin-right: 10px;\n  margin-left: 0;\n  text-shadow: none !important; }\n\n.profile-activity .time {\n  display: block;\n  margin-top: 4px;\n  color: #777; }\n\n.profile-activity a.user {\n  font-weight: 700;\n  color: #9585BF; }\n\n.profile-activity .tools {\n  position: absolute;\n  right: 12px;\n  bottom: 8px;\n  display: none; }\n\n.profile-activity:hover .tools {\n  display: block; }\n\n.user-profile .ace-thumbnails li {\n  border: 1px solid #CCC;\n  padding: 3px;\n  margin: 6px; }\n\n.user-profile .ace-thumbnails li .tools {\n  left: 3px;\n  right: 3px; }\n\n.user-profile .ace-thumbnails li:hover .tools {\n  bottom: 3px; }\n\n.user-title-label:hover {\n  text-decoration: none; }\n\n.user-title-label + .dropdown-menu {\n  margin-left: -12px; }\n\n.profile-contact-links {\n  padding: 4px 2px 5px;\n  border: 1px solid #E0E2E5;\n  background-color: #F8FAFC; }\n\n.btn-link:hover .ace-icon {\n  text-decoration: none !important; }\n\n.profile-social-links > a:hover > .ace-icon,\n.profile-users .memberdiv .name a:hover .ace-icon,\n.profile-users .memberdiv .tools > a:hover {\n  text-decoration: none; }\n\n.profile-social-links > a {\n  text-decoration: none;\n  margin: 0 1px; }\n\n.profile-skills .progress {\n  height: 26px;\n  margin-bottom: 2px;\n  background-color: transparent; }\n\n.profile-skills .progress .progress-bar {\n  line-height: 26px;\n  font-size: 13px;\n  font-weight: 700;\n  font-family: \"Open Sans\";\n  padding: 0 8px; }\n\n.profile-users .user {\n  display: block;\n  position: static;\n  text-align: center;\n  width: auto; }\n\n.profile-users .user img {\n  padding: 2px;\n  border-radius: 100%;\n  border: 1px solid #AAA;\n  max-width: none;\n  width: 64px;\n  transition: all .1s; }\n\n.profile-users .user img:hover {\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.33); }\n\n.profile-users .memberdiv {\n  background-color: #FFF;\n  width: 100px;\n  box-sizing: border-box;\n  border: none;\n  text-align: center;\n  margin: 0 8px 24px; }\n\n.profile-users .memberdiv .body {\n  display: inline-block;\n  margin: 8px 0 0; }\n\n.profile-users .memberdiv .popover {\n  visibility: hidden;\n  min-width: 0;\n  max-height: 0;\n  max-width: 0;\n  margin-left: 0;\n  margin-right: 0;\n  top: -5%;\n  left: auto;\n  right: auto;\n  opacity: 0;\n  display: none;\n  position: absolute;\n  transition: opacity .2s linear 0s, visibility 0s linear .2s, max-height 0s linear .2s, max-width 0s linear .2s, min-width 0s linear .2s; }\n\n.profile-users .memberdiv .popover.right {\n  left: 100%;\n  right: auto;\n  display: block; }\n\n.profile-users .memberdiv .popover.left {\n  left: auto;\n  right: 100%;\n  display: block; }\n\n.profile-users .memberdiv > :first-child:hover .popover {\n  visibility: visible;\n  opacity: 1;\n  z-index: 1060;\n  max-height: 250px;\n  max-width: 250px;\n  min-width: 150px;\n  transition-delay: 0s; }\n\n.profile-users .memberdiv .tools {\n  position: static;\n  display: block;\n  width: 100%;\n  margin-top: 2px; }\n\n.profile-users .memberdiv .tools > a {\n  margin: 0 2px; }\n\n.user-status {\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  background-color: #FFF;\n  border: 3px solid #AAA;\n  border-radius: 100%;\n  vertical-align: middle;\n  margin-right: 1px; }\n\n.user-status.status-online {\n  border-color: #8AC16C; }\n\n.user-status.status-busy {\n  border-color: #E07F69; }\n\n.user-status.status-idle {\n  border-color: #FFB752; }\n\n.tab-content.profile-edit-tab-content {\n  border: 1px solid #DDD;\n  padding: 8px 32px 32px;\n  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.2);\n  background-color: #FFF; }\n\n@media only screen and (max-width: 480px) {\n  .profile-info-name {\n    width: 80px; }\n  .profile-user-info-striped .profile-info-name {\n    float: none;\n    width: auto;\n    text-align: left;\n    padding: 6px 4px 6px 10px;\n    display: block; }\n  .profile-user-info-striped .profile-info-value {\n    margin-left: 10px;\n    display: block; }\n  .user-profile .memberdiv {\n    width: 50%;\n    margin-left: 0;\n    margin-right: 0; } }\n\n.itemdiv {\n  padding-right: 3px;\n  min-height: 66px; }\n\n.itemdiv > .user {\n  display: inline-block;\n  width: 42px;\n  position: absolute;\n  left: 0; }\n\n.itemdiv > .user > .img,\n.itemdiv > .user > img {\n  border-radius: 100%;\n  border: 2px solid #5293C4;\n  max-width: 40px;\n  position: relative; }\n\n.itemdiv > .user > .img {\n  padding: 2px; }\n\n.itemdiv > .body {\n  width: auto;\n  margin-left: 50px;\n  margin-right: 12px;\n  position: relative; }\n\n.itemdiv > .body > .time {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #666;\n  position: absolute;\n  right: 9px;\n  top: 0; }\n\n.itemdiv > .body > .time .ace-icon {\n  font-size: 14px;\n  font-weight: 400; }\n\n.itemdiv > .body > .name {\n  display: block;\n  color: #999; }\n\n.itemdiv > .body > .name > b {\n  color: #777; }\n\n.itemdiv > .body > .text {\n  display: block;\n  position: relative;\n  margin-top: 2px;\n  padding-bottom: 19px;\n  padding-left: 7px;\n  font-size: 13px; }\n\n.itemdiv.dialogdiv:before,\n.itemdiv.dialogdiv > .body:before,\n.itemdiv > .body > .text:after {\n  content: \"\";\n  position: absolute; }\n\n.itemdiv > .body > .text:after {\n  display: block;\n  height: 1px;\n  font-size: 0;\n  overflow: hidden;\n  left: 16px;\n  right: -12px;\n  margin-top: 9px;\n  border-top: 1px solid #E4ECF3; }\n\n.itemdiv > .body > .text > .ace-icon:first-child {\n  color: #DCE3ED;\n  margin-right: 4px; }\n\n.itemdiv:last-child > .body > .text {\n  border-bottom-width: 0; }\n\n.itemdiv:last-child > .body > .text:after {\n  display: none; }\n\n.itemdiv.dialogdiv {\n  padding-bottom: 14px; }\n\n.itemdiv.dialogdiv:before {\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 19px;\n  width: 3px;\n  max-width: 3px;\n  background-color: #E1E6ED;\n  border: 1px solid #D7DBDD;\n  border-width: 0 1px; }\n\n.itemdiv.dialogdiv:last-child {\n  padding-bottom: 0; }\n\n.itemdiv.dialogdiv:last-child:before {\n  display: none; }\n\n.itemdiv.dialogdiv > .user > img {\n  border-color: #C9D6E5; }\n\n.itemdiv.dialogdiv > .body {\n  border: 1px solid #DDE4ED;\n  padding: 5px 8px 8px;\n  border-left-width: 2px;\n  margin-right: 1px; }\n\n.itemdiv.dialogdiv > .body:before {\n  display: block;\n  left: -7px;\n  top: 11px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #DDE4ED;\n  border-width: 2px 0 0 2px;\n  background-color: #FFF;\n  box-sizing: content-box;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\n.itemdiv.dialogdiv > .body > .time {\n  position: static;\n  float: right; }\n\n.itemdiv.dialogdiv > .body > .text {\n  padding-left: 0;\n  padding-bottom: 0; }\n\n.itemdiv.dialogdiv > .body > .text:after {\n  display: none; }\n\n.itemdiv.dialogdiv .tooltip-inner {\n  word-break: break-all; }\n\n.itemdiv.memberdiv {\n  width: 175px;\n  padding: 2px;\n  margin: 3px 0;\n  float: left;\n  border-bottom: 1px solid #E8E8E8; }\n\n@media (min-width: 992px) {\n  .itemdiv.memberdiv {\n    max-width: 50%; } }\n\n@media (max-width: 991px) {\n  .itemdiv.memberdiv {\n    min-width: 33.333%; } }\n\n.itemdiv.memberdiv > .user > img {\n  border-color: #DCE3ED; }\n\n.itemdiv.memberdiv > .body > .time {\n  position: static; }\n\n.itemdiv.memberdiv > .body > .name {\n  line-height: 18px;\n  height: 18px;\n  margin-bottom: 0; }\n\n.itemdiv.memberdiv > .body > .name > a {\n  display: inline-block;\n  max-width: 100px;\n  max-height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all; }\n\n.itemdiv .tools {\n  position: absolute;\n  right: 5px;\n  bottom: 10px;\n  display: none; }\n\n.item-list > li > .checkbox,\n.item-list > li > label.inline,\n.itemdiv:hover .tools {\n  display: inline-block; }\n\n.itemdiv .tools .btn {\n  border-radius: 36px;\n  margin: 1px 0; }\n\n.itemdiv .body .tools {\n  bottom: 4px; }\n\n.itemdiv.commentdiv .tools {\n  right: 9px; }\n\n.item-list {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.item-list > li {\n  padding: 9px;\n  background-color: #FFF;\n  margin-top: -1px;\n  position: relative; }\n\n.item-list > li.selected {\n  color: #8090A0;\n  background-color: #F4F9FC; }\n\n.item-list > li.selected .lbl,\n.item-list > li.selected label {\n  text-decoration: line-through;\n  color: #8090A0; }\n\n.item-list > li label {\n  font-size: 13px; }\n\n.item-list > li .percentage {\n  font-size: 11px;\n  font-weight: 700;\n  color: #777; }\n\n.ace-thumbnails > li,\n.ace-thumbnails > li > :first-child {\n  display: block;\n  position: relative; }\n\n.ace-thumbnails {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.ace-thumbnails > li {\n  float: left;\n  overflow: hidden;\n  margin: 2px;\n  border: 2px solid #333; }\n\n.ace-thumbnails > li > :first-child:focus {\n  outline: 0; }\n\n.ace-thumbnails > li .tags {\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  overflow: visible;\n  direction: rtl;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  background-color: transparent;\n  border-width: 0;\n  vertical-align: inherit; }\n\n.ace-thumbnails > li .tags > .label-holder {\n  opacity: .92;\n  filter: alpha(opacity=92);\n  display: table;\n  margin: 1px 0 0;\n  direction: ltr;\n  text-align: left; }\n\n.ace-thumbnails > li > .tools,\n.ace-thumbnails > li > :first-child > .text {\n  position: absolute;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.55); }\n\n.ace-thumbnails > li .tags > .label-holder:hover {\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.ace-thumbnails > li > .tools {\n  top: 0;\n  bottom: 0;\n  left: -30px;\n  width: 24px;\n  vertical-align: middle;\n  transition: all .2s ease; }\n\n.ace-thumbnails > li > .tools.tools-right {\n  left: auto;\n  right: -30px; }\n\n.ace-thumbnails > li > .tools.tools-bottom {\n  width: auto;\n  height: 28px;\n  left: 0;\n  right: 0;\n  top: auto;\n  bottom: -30px; }\n\n.ace-thumbnails > li > .tools.tools-top {\n  width: auto;\n  height: 28px;\n  left: 0;\n  right: 0;\n  top: -30px;\n  bottom: auto; }\n\n.ace-thumbnails > li:hover > .tools {\n  left: 0;\n  right: 0; }\n\n.ace-thumbnails > li:hover > .tools.tools-bottom {\n  top: auto;\n  bottom: 0; }\n\n.ace-thumbnails > li:hover > .tools.tools-top {\n  bottom: auto;\n  top: 0; }\n\n.ace-thumbnails > li:hover > .tools.tools-right {\n  left: auto;\n  right: 0; }\n\n.ace-thumbnails > li > .in.tools {\n  left: 0;\n  right: 0; }\n\n.ace-thumbnails > li > .in.tools.tools-bottom {\n  top: auto;\n  bottom: 0; }\n\n.ace-thumbnails > li > .in.tools.tools-top {\n  bottom: auto;\n  top: 0; }\n\n.ace-thumbnails > li > .in.tools.tools-right {\n  left: auto;\n  right: 0; }\n\n.ace-thumbnails > li > .tools > a,\n.ace-thumbnails > li > :first-child .inner a {\n  display: inline-block;\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 400;\n  padding: 0 4px; }\n\n.ace-thumbnails > li > .tools > a:hover,\n.ace-thumbnails > li > :first-child .inner a:hover {\n  text-decoration: none;\n  color: #C9E2EA; }\n\n.ace-thumbnails > li .tools.tools-bottom > a,\n.ace-thumbnails > li .tools.tools-top > a {\n  display: inline-block; }\n\n.ace-thumbnails > li > :first-child > .text {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  color: #FFF;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  transition: all .2s ease; }\n\n.dialogs,\n.itemdiv {\n  position: relative; }\n\n.ace-thumbnails > li > :first-child > .text:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: 0; }\n\n.ace-thumbnails > li > :first-child > .text > .inner {\n  padding: 4px 0;\n  margin: 0;\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 90%; }\n\n.ace-thumbnails > li:hover > :first-child > .text {\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n@media only screen and (max-width: 480px) {\n  .ace-thumbnails {\n    text-align: center; }\n  .ace-thumbnails > li {\n    float: none;\n    display: inline-block; } }\n\n.tab-content {\n  border: 1px solid #C5D0DC;\n  padding: 16px 12px;\n  position: relative; }\n\n.tab-content.no-padding {\n  padding: 0; }\n\n.tab-content.no-border {\n  border: none;\n  padding: 12px; }\n\n.tab-content.padding-32 {\n  padding: 32px 24px; }\n\n.tab-content.no-border.padding-32 {\n  padding: 32px; }\n\n.tab-content.padding-30 {\n  padding: 30px 23px; }\n\n.tab-content.no-border.padding-30 {\n  padding: 30px; }\n\n.tab-content.padding-28 {\n  padding: 28px 21px; }\n\n.tab-content.no-border.padding-28 {\n  padding: 28px; }\n\n.tab-content.padding-26 {\n  padding: 26px 20px; }\n\n.tab-content.no-border.padding-26 {\n  padding: 26px; }\n\n.tab-content.padding-24 {\n  padding: 24px 18px; }\n\n.tab-content.no-border.padding-24 {\n  padding: 24px; }\n\n.tab-content.padding-22 {\n  padding: 22px 17px; }\n\n.tab-content.no-border.padding-22 {\n  padding: 22px; }\n\n.tab-content.padding-20 {\n  padding: 20px 15px; }\n\n.tab-content.no-border.padding-20 {\n  padding: 20px; }\n\n.tab-content.padding-18 {\n  padding: 18px 14px; }\n\n.tab-content.no-border.padding-18 {\n  padding: 18px; }\n\n.tab-content.padding-16 {\n  padding: 16px 12px; }\n\n.tab-content.no-border.padding-16 {\n  padding: 16px; }\n\n.tab-content.padding-14 {\n  padding: 14px 11px; }\n\n.tab-content.no-border.padding-14 {\n  padding: 14px; }\n\n.tab-content.padding-12 {\n  padding: 12px 9px; }\n\n.tab-content.no-border.padding-12 {\n  padding: 12px; }\n\n.tab-content.padding-10 {\n  padding: 10px 8px; }\n\n.tab-content.no-border.padding-10 {\n  padding: 10px; }\n\n.tab-content.padding-8 {\n  padding: 8px 6px; }\n\n.tab-content.no-border.padding-8 {\n  padding: 8px; }\n\n.tab-content.padding-6 {\n  padding: 6px 5px; }\n\n.tab-content.no-border.padding-6 {\n  padding: 6px; }\n\n.tab-content.padding-4 {\n  padding: 4px 3px; }\n\n.tab-content.no-border.padding-4 {\n  padding: 4px; }\n\n.tab-content.no-border.padding-2,\n.tab-content.padding-2 {\n  padding: 2px; }\n\n.tab-content.no-border.padding-0,\n.tab-content.padding-0 {\n  padding: 0; }\n\n.nav.nav-tabs.padding-28 {\n  padding-left: 28px; }\n\n.tabs-left > .nav.nav-tabs.padding-28,\n.tabs-right > .nav.nav-tabs.padding-28 {\n  padding-left: 0;\n  padding-top: 28px; }\n\n.nav.nav-tabs.padding-26 {\n  padding-left: 26px; }\n\n.tabs-left > .nav.nav-tabs.padding-26,\n.tabs-right > .nav.nav-tabs.padding-26 {\n  padding-left: 0;\n  padding-top: 26px; }\n\n.nav.nav-tabs.padding-24 {\n  padding-left: 24px; }\n\n.tabs-left > .nav.nav-tabs.padding-24,\n.tabs-right > .nav.nav-tabs.padding-24 {\n  padding-left: 0;\n  padding-top: 24px; }\n\n.nav.nav-tabs.padding-22 {\n  padding-left: 22px; }\n\n.tabs-left > .nav.nav-tabs.padding-22,\n.tabs-right > .nav.nav-tabs.padding-22 {\n  padding-left: 0;\n  padding-top: 22px; }\n\n.nav.nav-tabs.padding-20 {\n  padding-left: 20px; }\n\n.tabs-left > .nav.nav-tabs.padding-20,\n.tabs-right > .nav.nav-tabs.padding-20 {\n  padding-left: 0;\n  padding-top: 20px; }\n\n.nav.nav-tabs.padding-18 {\n  padding-left: 18px; }\n\n.tabs-left > .nav.nav-tabs.padding-18,\n.tabs-right > .nav.nav-tabs.padding-18 {\n  padding-left: 0;\n  padding-top: 18px; }\n\n.nav.nav-tabs.padding-16 {\n  padding-left: 16px; }\n\n.tabs-left > .nav.nav-tabs.padding-16,\n.tabs-right > .nav.nav-tabs.padding-16 {\n  padding-left: 0;\n  padding-top: 16px; }\n\n.nav.nav-tabs.padding-14 {\n  padding-left: 14px; }\n\n.tabs-left > .nav.nav-tabs.padding-14,\n.tabs-right > .nav.nav-tabs.padding-14 {\n  padding-left: 0;\n  padding-top: 14px; }\n\n.nav.nav-tabs.padding-12 {\n  padding-left: 12px; }\n\n.tabs-left > .nav.nav-tabs.padding-12,\n.tabs-right > .nav.nav-tabs.padding-12 {\n  padding-left: 0;\n  padding-top: 12px; }\n\n.nav.nav-tabs.padding-10 {\n  padding-left: 10px; }\n\n.tabs-left > .nav.nav-tabs.padding-10,\n.tabs-right > .nav.nav-tabs.padding-10 {\n  padding-left: 0;\n  padding-top: 10px; }\n\n.nav.nav-tabs.padding-8 {\n  padding-left: 8px; }\n\n.tabs-left > .nav.nav-tabs.padding-8,\n.tabs-right > .nav.nav-tabs.padding-8 {\n  padding-left: 0;\n  padding-top: 8px; }\n\n.nav.nav-tabs.padding-6 {\n  padding-left: 6px; }\n\n.tabs-left > .nav.nav-tabs.padding-6,\n.tabs-right > .nav.nav-tabs.padding-6 {\n  padding-left: 0;\n  padding-top: 6px; }\n\n.nav.nav-tabs.padding-4 {\n  padding-left: 4px; }\n\n.tabs-left > .nav.nav-tabs.padding-4,\n.tabs-right > .nav.nav-tabs.padding-4 {\n  padding-left: 0;\n  padding-top: 4px; }\n\n.nav.nav-tabs.padding-2 {\n  padding-left: 2px; }\n\n.tabs-left > .nav.nav-tabs.padding-2,\n.tabs-right > .nav.nav-tabs.padding-2 {\n  padding-left: 0;\n  padding-top: 2px; }\n\n.nav-tabs {\n  border-color: #C5D0DC;\n  margin-bottom: 0 !important;\n  position: relative;\n  top: 1px; }\n\n.nav-tabs > li > a {\n  padding: 7px 12px 8px; }\n\n.nav-tabs > li > a,\n.nav-tabs > li > a:focus {\n  border-radius: 0 !important;\n  border-color: #C5D0DC;\n  background-color: #F9F9F9;\n  color: #999;\n  margin-right: -1px;\n  line-height: 18px;\n  position: relative; }\n\n.nav-tabs > li > a:hover {\n  background-color: #FFF;\n  color: #4C8FBD;\n  border-color: #C5D0DC; }\n\n.nav-tabs > li > a:active,\n.nav-tabs > li > a:focus {\n  outline: 0 !important; }\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #576373;\n  border-color: #C5D0DC #C5D0DC transparent;\n  border-top: 2px solid #4C8FBD;\n  background-color: #FFF;\n  z-index: 1;\n  line-height: 18px;\n  margin-top: -1px;\n  box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, 0.15); }\n\n.tabs-below > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  margin-top: -1px;\n  border-color: #C5D0DC;\n  border-bottom-width: 0; }\n\n.tabs-below > .nav-tabs > li > a,\n.tabs-below > .nav-tabs > li > a:focus,\n.tabs-below > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC; }\n\n.tabs-below > .nav-tabs > li.active > a,\n.tabs-below > .nav-tabs > li.active > a:focus,\n.tabs-below > .nav-tabs > li.active > a:hover {\n  border-color: transparent #C5D0DC #C5D0DC;\n  border-top-width: 1px;\n  border-bottom: 2px solid #4C8FBD;\n  margin-top: 0;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15); }\n\n.tabs-left > .nav-tabs > li > a,\n.tabs-right > .nav-tabs > li > a {\n  min-width: 60px; }\n\n.tabs-left > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  border-color: #C5D0DC;\n  float: left; }\n\n.tabs-left > .nav-tabs > li {\n  float: none !important; }\n\n.tabs-left > .nav-tabs > li > a,\n.tabs-left > .nav-tabs > li > a:focus,\n.tabs-left > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC;\n  margin: 0 -1px 0 0; }\n\n.tabs-left > .nav-tabs > li.active > a,\n.tabs-left > .nav-tabs > li.active > a:focus,\n.tabs-left > .nav-tabs > li.active > a:hover {\n  border-color: #C5D0DC transparent #C5D0DC #C5D0DC;\n  border-top-width: 1px;\n  border-left: 2px solid #4C8FBD;\n  margin: 0 -1px;\n  box-shadow: -2px 0 3px 0 rgba(0, 0, 0, 0.15) !important; }\n\n.tabs-right > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  border-color: #C5D0DC;\n  float: right; }\n\n.tabs-right > .nav-tabs > li {\n  float: none !important; }\n\n.tabs-right > .nav-tabs > li > a,\n.tabs-right > .nav-tabs > li > a:focus,\n.tabs-right > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC;\n  margin: 0 -1px; }\n\n.tabs-right > .nav-tabs > li.active > a,\n.tabs-right > .nav-tabs > li.active > a:focus,\n.tabs-right > .nav-tabs > li.active > a:hover {\n  border-color: #C5D0DC #C5D0DC #C5D0DC transparent;\n  border-top-width: 1px;\n  border-right: 2px solid #4C8FBD;\n  margin: 0 -2px 0 -1px;\n  box-shadow: 2px 0 3px 0 rgba(0, 0, 0, 0.15); }\n\n.nav-tabs > li > a .badge {\n  padding: 1px 5px;\n  line-height: 15px;\n  opacity: .75;\n  vertical-align: initial; }\n\n.nav-tabs > li > a .ace-icon {\n  opacity: .75; }\n\n.nav-tabs > li.active > a .ace-icon,\n.nav-tabs > li.active > a .badge {\n  opacity: 1; }\n\n.nav-tabs li .ace-icon {\n  width: 1.25em;\n  display: inline-block;\n  text-align: center; }\n\n.nav-tabs > li.open .dropdown-toggle {\n  background-color: #4F99C6;\n  border-color: #4F99C6;\n  color: #FFF; }\n\n.nav-tabs > li.open .dropdown-toggle > .ace-icon {\n  color: #FFF !important; }\n\n.tabs-left .tab-content,\n.tabs-right .tab-content {\n  overflow: auto; }\n\n.dark {\n  color: #333 !important; }\n\n.white {\n  color: #FFF !important; }\n\n.red {\n  color: #DD5A43 !important; }\n\n.red2 {\n  color: #E08374 !important; }\n\n.light-red {\n  color: #F77 !important; }\n\n.blue {\n  color: #17a2b8 !important; }\n\n.light-blue {\n  color: #93CBF9 !important; }\n\n.green {\n  color: #69AA46 !important; }\n\n.light-green {\n  color: #B0D877 !important; }\n\n.orange {\n  color: #FF892A !important; }\n\n.orange2 {\n  color: #FEB902 !important; }\n\n.light-orange {\n  color: #FCAC6F !important; }\n\n.purple {\n  color: #A069C3 !important; }\n\n.pink {\n  color: #C6699F !important; }\n\n.pink2 {\n  color: #D6487E !important; }\n\n.brown {\n  color: brown !important; }\n\n.grey {\n  color: #777 !important; }\n\n.main-row-container {\n  border: 1px solid #CCC;\n  background-color: #FFF;\n  padding: 10px 50px 10px 50px;\n  display: inline-block;\n  max-width: 100%;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);\n  margin-top: 80px; }\n\n.myPets {\n  height: 220px;\n  overflow: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL293bmVyLWRldGFpbC9vd25lci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBSyxnQkFBZSxFQUFBOztBQUVwQjtFQUNJLDZCQUE0QixFQUFBOztBQUloQztFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLGNBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUNKLEVBQUE7O0FBRUE7O0VBRUksbUJBQW1CO0VBQ25CLDhCQUNKLEVBQUE7O0FBRUE7RUFDSSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixzQkFDSixFQUFBOztBQUVBO0VBQ0ksd0JBQ0osRUFBQTs7QUFFQTtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNkJBQ0osRUFBQTs7QUFFQTtFQUNJLGFBQ0osRUFBQTs7QUFFQTs7RUFFSSxnQkFDSixFQUFBOztBQUVBO0VBQ0kseUJBQ0osRUFBQTs7QUFFQTtFQUNJLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsNkJBQ0osRUFBQTs7QUFFQTtFQUNJLDhCQUE4QjtFQUM5QixrQkFDSixFQUFBOztBQUVBO0VBQ0ksc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFHZixzQkFBc0I7RUFDdEIsMkNBQTBDLEVBQUE7O0FBRzlDOzs7O0VBSUksOEJBQThCO0VBQzlCLDJCQUNKLEVBQUE7O0FBRUE7RUFDSSxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNkJBQ0osRUFBQTs7QUFFQTtFQUNJLGtDQUNKLEVBQUE7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RUFDSSxhQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFDSixFQUFBOztBQUVBO0VBQ0ksYUFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQ0osRUFBQTs7QUFFQTtFQUNJLGFBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxhQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFDSixFQUFBOztBQUVBO0VBQ0ksYUFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQ0osRUFBQTs7QUFFQTtFQUNJLGFBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxhQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFDSixFQUFBOztBQUVBO0VBQ0ksYUFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQ0osRUFBQTs7QUFFQTtFQUNJLGFBQ0osRUFBQTs7QUFFQTtFQUNJLGlCQUNKLEVBQUE7O0FBRUE7RUFDSSxhQUNKLEVBQUE7O0FBRUE7RUFDSSxpQkFDSixFQUFBOztBQUVBO0VBQ0ksYUFDSixFQUFBOztBQUVBO0VBQ0ksZ0JBQ0osRUFBQTs7QUFFQTtFQUNJLFlBQ0osRUFBQTs7QUFFQTtFQUNJLGdCQUNKLEVBQUE7O0FBRUE7RUFDSSxZQUNKLEVBQUE7O0FBRUE7RUFDSSxnQkFDSixFQUFBOztBQUVBO0VBQ0ksWUFDSixFQUFBOztBQUVBOztFQUVJLFlBQ0osRUFBQTs7QUFFQTs7RUFFSSxVQUNKLEVBQUE7O0FBR0E7RUFDSSxrQkFDSixFQUFBOztBQUVBOztFQUVJLGVBQWU7RUFDZixpQkFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQ0osRUFBQTs7QUFFQTs7RUFFSSxlQUFlO0VBQ2YsaUJBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUNKLEVBQUE7O0FBRUE7O0VBRUksZUFBZTtFQUNmLGlCQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFDSixFQUFBOztBQUVBOztFQUVJLGVBQWU7RUFDZixpQkFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQ0osRUFBQTs7QUFFQTs7RUFFSSxlQUFlO0VBQ2YsaUJBQ0osRUFBQTs7QUFFQTtF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QkFBd0IsRUFBQTs7QUFJNUI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx1QkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxzQkFBcUIsRUFBQTs7QUFLekI7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZUFBZTtFQUdmLHNCQUFzQjtFQUN0QiwyQ0FBMEM7RUFDMUMsZ0JBQWdCLEVBQUE7O0FBT2xCO0VBQ0UsYUFBYTtFQUNiLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vd25lci1kZXRhaWwvb3duZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5e21hcmdpbi10b3A6MjBweDt9XG5cbi5hbGlnbi1jZW50ZXIsIC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cblxuLnByb2ZpbGUtdXNlci1pbmZvIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogOTglO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcbiAgICBtYXJnaW46IDAgYXV0b1xufVxuXG4ucHJvZmlsZS1pbmZvLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93XG59XG5cbi5wcm9maWxlLWluZm8tbmFtZSxcbi5wcm9maWxlLWluZm8tdmFsdWUge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjRDVFNEYxXG59XG5cbi5wcm9maWxlLWluZm8tbmFtZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogNnB4IDEwcHggNnB4IDRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNjY3RTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG59XG5cbi5wcm9maWxlLWluZm8tdmFsdWUge1xuICAgIHBhZGRpbmc6IDZweCA0cHggNnB4IDZweFxufVxuXG4ucHJvZmlsZS1pbmZvLXZhbHVlPnNwYW4rc3BhbjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBjb250ZW50OiBcIixcIjtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGXG59XG5cbi5wcm9maWxlLWluZm8tdmFsdWU+c3BhbitzcGFuLmVkaXRhYmxlLWNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnByb2ZpbGUtaW5mby1yb3c6Zmlyc3QtY2hpbGQgLnByb2ZpbGUtaW5mby1uYW1lLFxuLnByb2ZpbGUtaW5mby1yb3c6Zmlyc3QtY2hpbGQgLnByb2ZpbGUtaW5mby12YWx1ZSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZVxufVxuXG4ucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RDRUJGN1xufVxuXG4ucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCAucHJvZmlsZS1pbmZvLW5hbWUge1xuICAgIGNvbG9yOiAjMzM2MTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREYzRjQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGN0ZCRkZcbn1cblxuLnByb2ZpbGUtdXNlci1pbmZvLXN0cmlwZWQgLnByb2ZpbGUtaW5mby12YWx1ZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjRENFQkY3O1xuICAgIHBhZGRpbmctbGVmdDogMTJweFxufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjE1KVxufVxuXG4uZGQtZW1wdHksXG4uZGQtaGFuZGxlLFxuLmRkLXBsYWNlaG9sZGVyLFxuLmRkMi1jb250ZW50IHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94XG59XG5cbi5wcm9maWxlLWFjdGl2aXR5IHtcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNEMEQ4RTA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkICNGRkY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkICNGRkZcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgdHJhbnNwYXJlbnRcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6Zmlyc3QtY2hpbGQ6aG92ZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNEMEQ4RTBcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY5RkQ7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgI0QwRDhFMDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkb3R0ZWQgI0QwRDhFMFxufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSBpbWcge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOUQ2RTU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuICAgIG1heC13aWR0aDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZVxufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSAudGh1bWJpY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzRBQkQ3O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSFpbXBvcnRhbnRcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHkgLnRpbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBjb2xvcjogIzc3N1xufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSBhLnVzZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICM5NTg1QkZcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHkgLnRvb2xzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEycHg7XG4gICAgYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4ucHJvZmlsZS1hY3Rpdml0eTpob3ZlciAudG9vbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrXG59XG5cbi51c2VyLXByb2ZpbGUgLmFjZS10aHVtYm5haWxzIGxpIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46IDZweFxufVxuXG4udXNlci1wcm9maWxlIC5hY2UtdGh1bWJuYWlscyBsaSAudG9vbHMge1xuICAgIGxlZnQ6IDNweDtcbiAgICByaWdodDogM3B4XG59XG5cbi51c2VyLXByb2ZpbGUgLmFjZS10aHVtYm5haWxzIGxpOmhvdmVyIC50b29scyB7XG4gICAgYm90dG9tOiAzcHhcbn1cblxuLnVzZXItdGl0bGUtbGFiZWw6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxufVxuXG4udXNlci10aXRsZS1sYWJlbCsuZHJvcGRvd24tbWVudSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4XG59XG5cbi5wcm9maWxlLWNvbnRhY3QtbGlua3Mge1xuICAgIHBhZGRpbmc6IDRweCAycHggNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUyRTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkFGQ1xufVxuXG4uYnRuLWxpbms6aG92ZXIgLmFjZS1pY29uIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50XG59XG5cbi5wcm9maWxlLXNvY2lhbC1saW5rcz5hOmhvdmVyPi5hY2UtaWNvbixcbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLm5hbWUgYTpob3ZlciAuYWNlLWljb24sXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC50b29scz5hOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbn1cblxuLnByb2ZpbGUtc29jaWFsLWxpbmtzPmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW46IDAgMXB4XG59XG5cbi5wcm9maWxlLXNraWxscyAucHJvZ3Jlc3Mge1xuICAgIGhlaWdodDogMjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbn1cblxuLnByb2ZpbGUtc2tpbGxzIC5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBwYWRkaW5nOiAwIDhweFxufVxuXG4ucHJvZmlsZS11c2VycyAudXNlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG9cbn1cblxuLnByb2ZpbGUtdXNlcnMgLnVzZXIgaW1nIHtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQUFBO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB3aWR0aDogNjRweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMXM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4xcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzXG59XG5cbi5wcm9maWxlLXVzZXJzIC51c2VyIGltZzpob3ZlciB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zMyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMzMpXG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCA4cHggMjRweFxufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5ib2R5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA4cHggMCAwXG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnBvcG92ZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgbWF4LWhlaWdodDogMDtcbiAgICBtYXgtd2lkdGg6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHRvcDogLTUlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGxpbmVhciAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjJzLCBtYXgtaGVpZ2h0IDBzIGxpbmVhciAuMnMsIG1heC13aWR0aCAwcyBsaW5lYXIgLjJzLCBtaW4td2lkdGggMHMgbGluZWFyIC4ycztcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBsaW5lYXIgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIC4ycywgbWF4LWhlaWdodCAwcyBsaW5lYXIgLjJzLCBtYXgtd2lkdGggMHMgbGluZWFyIC4ycywgbWluLXdpZHRoIDBzIGxpbmVhciAuMnM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgbGluZWFyIDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAuMnMsIG1heC1oZWlnaHQgMHMgbGluZWFyIC4ycywgbWF4LXdpZHRoIDBzIGxpbmVhciAuMnMsIG1pbi13aWR0aCAwcyBsaW5lYXIgLjJzXG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnBvcG92ZXIucmlnaHQge1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2tcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAucG9wb3Zlci5sZWZ0IHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrXG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXY+OmZpcnN0LWNoaWxkOmhvdmVyIC5wb3BvdmVyIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogMTA2MDtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIC1vLXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzXG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnRvb2xzIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDJweFxufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC50b29scz5hIHtcbiAgICBtYXJnaW46IDAgMnB4XG59XG5cbi51c2VyLXN0YXR1cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNBQUE7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMXB4XG59XG5cbi51c2VyLXN0YXR1cy5zdGF0dXMtb25saW5lIHtcbiAgICBib3JkZXItY29sb3I6ICM4QUMxNkNcbn1cblxuLnVzZXItc3RhdHVzLnN0YXR1cy1idXN5IHtcbiAgICBib3JkZXItY29sb3I6ICNFMDdGNjlcbn1cblxuLnVzZXItc3RhdHVzLnN0YXR1cy1pZGxlIHtcbiAgICBib3JkZXItY29sb3I6ICNGRkI3NTJcbn1cblxuLnRhYi1jb250ZW50LnByb2ZpbGUtZWRpdC10YWItY29udGVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgICBwYWRkaW5nOiA4cHggMzJweCAzMnB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRlxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcbiAgICAucHJvZmlsZS1pbmZvLW5hbWUge1xuICAgICAgICB3aWR0aDogODBweFxuICAgIH1cbiAgICAucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCAucHJvZmlsZS1pbmZvLW5hbWUge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDZweCA0cHggNnB4IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgfVxuICAgIC5wcm9maWxlLXVzZXItaW5mby1zdHJpcGVkIC5wcm9maWxlLWluZm8tdmFsdWUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICB9XG4gICAgLnVzZXItcHJvZmlsZSAubWVtYmVyZGl2IHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMFxuICAgIH1cbn1cblxuXG5cbi5pdGVtZGl2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgbWluLWhlaWdodDogNjZweFxufVxuXG4uaXRlbWRpdj4udXNlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwXG59XG5cbi5pdGVtZGl2Pi51c2VyPi5pbWcsXG4uaXRlbWRpdj4udXNlcj5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzUyOTNDNDtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5pdGVtZGl2Pi51c2VyPi5pbWcge1xuICAgIHBhZGRpbmc6IDJweFxufVxuXG4uaXRlbWRpdj4uYm9keSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uaXRlbWRpdj4uYm9keT4udGltZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA5cHg7XG4gICAgdG9wOiAwXG59XG5cbi5pdGVtZGl2Pi5ib2R5Pi50aW1lIC5hY2UtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxuLml0ZW1kaXY+LmJvZHk+Lm5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjOTk5XG59XG5cbi5pdGVtZGl2Pi5ib2R5Pi5uYW1lPmIge1xuICAgIGNvbG9yOiAjNzc3XG59XG5cbi5pdGVtZGl2Pi5ib2R5Pi50ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxOXB4O1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTNweFxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY6YmVmb3JlLFxuLml0ZW1kaXYuZGlhbG9nZGl2Pi5ib2R5OmJlZm9yZSxcbi5pdGVtZGl2Pi5ib2R5Pi50ZXh0OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxufVxuXG4uaXRlbWRpdj4uYm9keT4udGV4dDphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbGVmdDogMTZweDtcbiAgICByaWdodDogLTEycHg7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTRFQ0YzXG59XG5cbi5pdGVtZGl2Pi5ib2R5Pi50ZXh0Pi5hY2UtaWNvbjpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3I6ICNEQ0UzRUQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHhcbn1cblxuLml0ZW1kaXY6bGFzdC1jaGlsZD4uYm9keT4udGV4dCB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMFxufVxuXG4uaXRlbWRpdjpsYXN0LWNoaWxkPi5ib2R5Pi50ZXh0OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdiB7XG4gICAgcGFkZGluZy1ib3R0b206IDE0cHhcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2OmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAxOXB4O1xuICAgIHdpZHRoOiAzcHg7XG4gICAgbWF4LXdpZHRoOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTZFRDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDdEQkREO1xuICAgIGJvcmRlci13aWR0aDogMCAxcHhcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2Omxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwXG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdjpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY+LnVzZXI+aW1nIHtcbiAgICBib3JkZXItY29sb3I6ICNDOUQ2RTVcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2Pi5ib2R5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRERFNEVEO1xuICAgIHBhZGRpbmc6IDVweCA4cHggOHB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHhcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2Pi5ib2R5OmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGVmdDogLTdweDtcbiAgICB0b3A6IDExcHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRERFNEVEO1xuICAgIGJvcmRlci13aWR0aDogMnB4IDAgMCAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKVxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY+LmJvZHk+LnRpbWUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgZmxvYXQ6IHJpZ2h0XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keT4udGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwXG59XG5cbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keT4udGV4dDphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXYgLnRvb2x0aXAtaW5uZXIge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbFxufVxuXG4uaXRlbWRpdi5tZW1iZXJkaXYge1xuICAgIHdpZHRoOiAxNzVweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWFyZ2luOiAzcHggMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFOFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xuICAgIC5pdGVtZGl2Lm1lbWJlcmRpdiB7XG4gICAgICAgIG1heC13aWR0aDogNTAlXG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo5OTFweCkge1xuICAgIC5pdGVtZGl2Lm1lbWJlcmRpdiB7XG4gICAgICAgIG1pbi13aWR0aDogMzMuMzMzJVxuICAgIH1cbn1cblxuLml0ZW1kaXYubWVtYmVyZGl2Pi51c2VyPmltZyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjRENFM0VEXG59XG5cbi5pdGVtZGl2Lm1lbWJlcmRpdj4uYm9keT4udGltZSB7XG4gICAgcG9zaXRpb246IHN0YXRpY1xufVxuXG4uaXRlbWRpdi5tZW1iZXJkaXY+LmJvZHk+Lm5hbWUge1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwXG59XG5cbi5pdGVtZGl2Lm1lbWJlcmRpdj4uYm9keT4ubmFtZT5hIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsXG59XG5cbi5pdGVtZGl2IC50b29scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLml0ZW0tbGlzdD5saT4uY2hlY2tib3gsXG4uaXRlbS1saXN0PmxpPmxhYmVsLmlubGluZSxcbi5pdGVtZGl2OmhvdmVyIC50b29scyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5pdGVtZGl2IC50b29scyAuYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICAgIG1hcmdpbjogMXB4IDBcbn1cblxuLml0ZW1kaXYgLmJvZHkgLnRvb2xzIHtcbiAgICBib3R0b206IDRweFxufVxuXG4uaXRlbWRpdi5jb21tZW50ZGl2IC50b29scyB7XG4gICAgcmlnaHQ6IDlweFxufVxuXG4uaXRlbS1saXN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lXG59XG5cbi5pdGVtLWxpc3Q+bGkge1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5pdGVtLWxpc3Q+bGkuc2VsZWN0ZWQge1xuICAgIGNvbG9yOiAjODA5MEEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY5RkNcbn1cblxuLml0ZW0tbGlzdD5saS5zZWxlY3RlZCAubGJsLFxuLml0ZW0tbGlzdD5saS5zZWxlY3RlZCBsYWJlbCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6ICM4MDkwQTBcbn1cblxuLml0ZW0tbGlzdD5saSBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4XG59XG5cbi5pdGVtLWxpc3Q+bGkgLnBlcmNlbnRhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjNzc3XG59XG5cblxuLmFjZS10aHVtYm5haWxzPmxpLFxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5hY2UtdGh1bWJuYWlscyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAycHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzM1xufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saSAudGFncyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgZGlyZWN0aW9uOiBydGw7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRhZ3M+LmxhYmVsLWhvbGRlciB7XG4gICAgb3BhY2l0eTogLjkyO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT05Mik7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWFyZ2luOiAxcHggMCAwO1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIHRleHQtYWxpZ246IGxlZnRcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scyxcbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQ+LnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNTUpXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saSAudGFncz4ubGFiZWwtaG9sZGVyOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHMge1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTMwcHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHMudG9vbHMtcmlnaHQge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IC0zMHB4XG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHMudG9vbHMtYm90dG9tIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAtMzBweFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzLnRvb2xzLXRvcCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAtMzBweDtcbiAgICBib3R0b206IGF1dG9cbn1cblxuLmFjZS10aHVtYm5haWxzPmxpOmhvdmVyPi50b29scyB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk6aG92ZXI+LnRvb2xzLnRvb2xzLWJvdHRvbSB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk6aG92ZXI+LnRvb2xzLnRvb2xzLXRvcCB7XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIHRvcDogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk6aG92ZXI+LnRvb2xzLnRvb2xzLXJpZ2h0IHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4uaW4udG9vbHMge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi5pbi50b29scy50b29scy1ib3R0b20ge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi5pbi50b29scy50b29scy10b3Age1xuICAgIGJvdHRvbTogYXV0bztcbiAgICB0b3A6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi5pbi50b29scy50b29scy1yaWdodCB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzPmEsXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkIC5pbm5lciBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMCA0cHhcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scz5hOmhvdmVyLFxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZCAuaW5uZXIgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjQzlFMkVBXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saSAudG9vbHMudG9vbHMtYm90dG9tPmEsXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRvb2xzLnRvb2xzLXRvcD5hIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZD4udGV4dCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Vcbn1cblxuLmRpYWxvZ3MsXG4uaXRlbWRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQ+LnRleHQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQ+LnRleHQ+LmlubmVyIHtcbiAgICBwYWRkaW5nOiA0cHggMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWF4LXdpZHRoOiA5MCVcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpOmhvdmVyPjpmaXJzdC1jaGlsZD4udGV4dCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcbiAgICAuYWNlLXRodW1ibmFpbHMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG4gICAgLmFjZS10aHVtYm5haWxzPmxpIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIH1cbn1cblxuXG4udGFiLWNvbnRlbnQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDNUQwREM7XG4gICAgcGFkZGluZzogMTZweCAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4udGFiLWNvbnRlbnQubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTJweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0zMiB7XG4gICAgcGFkZGluZzogMzJweCAyNHB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0zMiB7XG4gICAgcGFkZGluZzogMzJweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0zMCB7XG4gICAgcGFkZGluZzogMzBweCAyM3B4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0zMCB7XG4gICAgcGFkZGluZzogMzBweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0yOCB7XG4gICAgcGFkZGluZzogMjhweCAyMXB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0yOCB7XG4gICAgcGFkZGluZzogMjhweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0yNiB7XG4gICAgcGFkZGluZzogMjZweCAyMHB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0yNiB7XG4gICAgcGFkZGluZzogMjZweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0yNCB7XG4gICAgcGFkZGluZzogMjRweCAxOHB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0yNCB7XG4gICAgcGFkZGluZzogMjRweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0yMiB7XG4gICAgcGFkZGluZzogMjJweCAxN3B4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0yMiB7XG4gICAgcGFkZGluZzogMjJweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0yMCB7XG4gICAgcGFkZGluZzogMjBweCAxNXB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0yMCB7XG4gICAgcGFkZGluZzogMjBweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0xOCB7XG4gICAgcGFkZGluZzogMThweCAxNHB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0xOCB7XG4gICAgcGFkZGluZzogMThweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0xNiB7XG4gICAgcGFkZGluZzogMTZweCAxMnB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0xNiB7XG4gICAgcGFkZGluZzogMTZweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0xNCB7XG4gICAgcGFkZGluZzogMTRweCAxMXB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0xNCB7XG4gICAgcGFkZGluZzogMTRweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy0xMiB7XG4gICAgcGFkZGluZzogMTJweCA5cHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTEyIHtcbiAgICBwYWRkaW5nOiAxMnB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTEwIHtcbiAgICBwYWRkaW5nOiAxMHB4IDhweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMTAge1xuICAgIHBhZGRpbmc6IDEwcHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctOCB7XG4gICAgcGFkZGluZzogOHB4IDZweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctOCB7XG4gICAgcGFkZGluZzogOHB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTYge1xuICAgIHBhZGRpbmc6IDZweCA1cHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTYge1xuICAgIHBhZGRpbmc6IDZweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy00IHtcbiAgICBwYWRkaW5nOiA0cHggM3B4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy00IHtcbiAgICBwYWRkaW5nOiA0cHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTIsXG4udGFiLWNvbnRlbnQucGFkZGluZy0yIHtcbiAgICBwYWRkaW5nOiAycHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTAsXG4udGFiLWNvbnRlbnQucGFkZGluZy0wIHtcbiAgICBwYWRkaW5nOiAwXG59XG5cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTI4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjgsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjgge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMjhweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjYge1xuICAgIHBhZGRpbmctbGVmdDogMjZweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yNixcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAyNnB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0yNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTI0LFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTI0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDI0cHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTIyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIycHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjIsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjIge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMjJweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjAge1xuICAgIHBhZGRpbmctbGVmdDogMjBweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yMCxcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0xOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTE4LFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTE4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDE4cHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTE2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTYsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTYge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMTZweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTQge1xuICAgIHBhZGRpbmctbGVmdDogMTRweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xNCxcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAxNHB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0xMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTEyLFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTEyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDEycHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTAsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTAge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctOCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctOCxcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy04IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDhweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctNiB7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctNixcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy02IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDZweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctNCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctNCxcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDRweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAycHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMixcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDJweFxufVxuXG4ubmF2LXRhYnMge1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHhcbn1cblxuLm5hdi10YWJzPmxpPmEge1xuICAgIHBhZGRpbmc6IDdweCAxMnB4IDhweFxufVxuXG4ubmF2LXRhYnM+bGk+YSxcbi5uYXYtdGFicz5saT5hOmZvY3VzIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5uYXYtdGFicz5saT5hOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGNvbG9yOiAjNEM4RkJEO1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQ1xufVxuXG4ubmF2LXRhYnM+bGk+YTphY3RpdmUsXG4ubmF2LXRhYnM+bGk+YTpmb2N1cyB7XG4gICAgb3V0bGluZTogMCFpbXBvcnRhbnRcbn1cblxuLm5hdi10YWJzPmxpLmFjdGl2ZT5hLFxuLm5hdi10YWJzPmxpLmFjdGl2ZT5hOmZvY3VzLFxuLm5hdi10YWJzPmxpLmFjdGl2ZT5hOmhvdmVyIHtcbiAgICBjb2xvcjogIzU3NjM3MztcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREMgI0M1RDBEQyB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzRDOEZCRDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBib3gtc2hhZG93OiAwIC0ycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTUpXG59XG5cbi50YWJzLWJlbG93Pi5uYXYtdGFicyB7XG4gICAgdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREM7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMFxufVxuXG4udGFicy1iZWxvdz4ubmF2LXRhYnM+bGk+YSxcbi50YWJzLWJlbG93Pi5uYXYtdGFicz5saT5hOmZvY3VzLFxuLnRhYnMtYmVsb3c+Lm5hdi10YWJzPmxpPmE6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQ1xufVxuXG4udGFicy1iZWxvdz4ubmF2LXRhYnM+bGkuYWN0aXZlPmEsXG4udGFicy1iZWxvdz4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMsXG4udGFicy1iZWxvdz4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI0M1RDBEQyAjQzVEMERDO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzRDOEZCRDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgLjE1KVxufVxuXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saT5hLFxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzPmxpPmEge1xuICAgIG1pbi13aWR0aDogNjBweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYtdGFicyB7XG4gICAgdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICAgIGZsb2F0OiBsZWZ0XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi10YWJzPmxpIHtcbiAgICBmbG9hdDogbm9uZSFpbXBvcnRhbnRcbn1cblxuLnRhYnMtbGVmdD4ubmF2LXRhYnM+bGk+YSxcbi50YWJzLWxlZnQ+Lm5hdi10YWJzPmxpPmE6Zm9jdXMsXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saT5hOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREM7XG4gICAgbWFyZ2luOiAwIC0xcHggMCAwXG59XG5cbi50YWJzLWxlZnQ+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hLFxuLnRhYnMtbGVmdD4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMsXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saS5hY3RpdmU+YTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDIHRyYW5zcGFyZW50ICNDNUQwREMgI0M1RDBEQztcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNEM4RkJEO1xuICAgIG1hcmdpbjogMCAtMXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTJweCAwIDNweCAwIHJnYmEoMCwgMCwgMCwgLjE1KSFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogLTJweCAwIDNweCAwIHJnYmEoMCwgMCwgMCwgLjE1KSFpbXBvcnRhbnRcbn1cblxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzIHtcbiAgICB0b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREM7XG4gICAgZmxvYXQ6IHJpZ2h0XG59XG5cbi50YWJzLXJpZ2h0Pi5uYXYtdGFicz5saSB7XG4gICAgZmxvYXQ6IG5vbmUhaW1wb3J0YW50XG59XG5cbi50YWJzLXJpZ2h0Pi5uYXYtdGFicz5saT5hLFxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzPmxpPmE6Zm9jdXMsXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGk+YTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICAgIG1hcmdpbjogMCAtMXB4XG59XG5cbi50YWJzLXJpZ2h0Pi5uYXYtdGFicz5saS5hY3RpdmU+YSxcbi50YWJzLXJpZ2h0Pi5uYXYtdGFicz5saS5hY3RpdmU+YTpmb2N1cyxcbi50YWJzLXJpZ2h0Pi5uYXYtdGFicz5saS5hY3RpdmU+YTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDICNDNUQwREMgI0M1RDBEQyB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzRDOEZCRDtcbiAgICBtYXJnaW46IDAgLTJweCAwIC0xcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTUpXG59XG5cbi5uYXYtdGFicz5saT5hIC5iYWRnZSB7XG4gICAgcGFkZGluZzogMXB4IDVweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBvcGFjaXR5OiAuNzU7XG4gICAgdmVydGljYWwtYWxpZ246IGluaXRpYWxcbn1cblxuLm5hdi10YWJzPmxpPmEgLmFjZS1pY29uIHtcbiAgICBvcGFjaXR5OiAuNzVcbn1cblxuLm5hdi10YWJzPmxpLmFjdGl2ZT5hIC5hY2UtaWNvbixcbi5uYXYtdGFicz5saS5hY3RpdmU+YSAuYmFkZ2Uge1xuICAgIG9wYWNpdHk6IDFcbn1cblxuLm5hdi10YWJzIGxpIC5hY2UtaWNvbiB7XG4gICAgd2lkdGg6IDEuMjVlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5uYXYtdGFicz5saS5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Rjk5QzY7XG4gICAgYm9yZGVyLWNvbG9yOiAjNEY5OUM2O1xuICAgIGNvbG9yOiAjRkZGXG59XG5cbi5uYXYtdGFicz5saS5vcGVuIC5kcm9wZG93bi10b2dnbGU+LmFjZS1pY29uIHtcbiAgICBjb2xvcjogI0ZGRiFpbXBvcnRhbnRcbn1cblxuLnRhYnMtbGVmdCAudGFiLWNvbnRlbnQsXG4udGFicy1yaWdodCAudGFiLWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBhdXRvXG59XG5cbi5kYXJrIHtcbiAgICBjb2xvcjogIzMzMyFpbXBvcnRhbnRcbn1cblxuLndoaXRlIHtcbiAgICBjb2xvcjogI0ZGRiFpbXBvcnRhbnRcbn1cblxuLnJlZCB7XG4gICAgY29sb3I6ICNERDVBNDMhaW1wb3J0YW50XG59XG5cbi5yZWQyIHtcbiAgICBjb2xvcjogI0UwODM3NCFpbXBvcnRhbnRcbn1cblxuLmxpZ2h0LXJlZCB7XG4gICAgY29sb3I6ICNGNzchaW1wb3J0YW50XG59XG5cbi5ibHVlIHtcbiAgICBjb2xvcjogIzE3YTJiOCFpbXBvcnRhbnRcbn1cblxuXG4ubGlnaHQtYmx1ZSB7XG4gICAgY29sb3I6ICM5M0NCRjkhaW1wb3J0YW50XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6ICM2OUFBNDYhaW1wb3J0YW50XG59XG5cbi5saWdodC1ncmVlbiB7XG4gICAgY29sb3I6ICNCMEQ4NzchaW1wb3J0YW50XG59XG5cbi5vcmFuZ2Uge1xuICAgIGNvbG9yOiAjRkY4OTJBIWltcG9ydGFudFxufVxuXG4ub3JhbmdlMiB7XG4gICAgY29sb3I6ICNGRUI5MDIhaW1wb3J0YW50XG59XG5cbi5saWdodC1vcmFuZ2Uge1xuICAgIGNvbG9yOiAjRkNBQzZGIWltcG9ydGFudFxufVxuXG4ucHVycGxlIHtcbiAgICBjb2xvcjogI0EwNjlDMyFpbXBvcnRhbnRcbn1cblxuLnBpbmsge1xuICAgIGNvbG9yOiAjQzY2OTlGIWltcG9ydGFudFxufVxuXG4ucGluazIge1xuICAgIGNvbG9yOiAjRDY0ODdFIWltcG9ydGFudFxufVxuXG4uYnJvd24ge1xuICAgIGNvbG9yOiBicm93biFpbXBvcnRhbnRcbn1cblxuLmdyZXkge1xuICAgIGNvbG9yOiAjNzc3IWltcG9ydGFudFxufVxuXG5cblxuLm1haW4tcm93LWNvbnRhaW5lcntcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogMTBweCA1MHB4IDEwcHggNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi5zb2NpYWwtcm93e1xuICAvL2Rpc3BsYXk6IGZsZXg7XG59XG5cbi5teVBldHN7XG4gIGhlaWdodDogMjIwcHg7XG4gIG92ZXJmbG93OnNjcm9sbDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





var OwnerDetailComponent = /** @class */ (function () {
    function OwnerDetailComponent(_auth, _user, _router) {
        this._auth = _auth;
        this._user = _user;
        this._router = _router;
    }
    OwnerDetailComponent.prototype.ngOnInit = function () {
        var isLogged = localStorage.getItem("userlogged");
        var splitId = isLogged.split("/");
        var id = splitId[0];
        this._user.getUserDetails(id);
    }; //OnInit
    OwnerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-detail',
            template: __webpack_require__(/*! ./owner-detail.component.html */ "./src/app/owner-detail/owner-detail.component.html"),
            styles: [__webpack_require__(/*! ./owner-detail.component.scss */ "./src/app/owner-detail/owner-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<app-header></app-header>\n\n<div id=\"contenedor\" class=\"container-fluid\">\n  <div id=\"row100vh\" class=\" row no-gutter\">\n\n<!--Mapa-->\n    <div class=\"col-sm-12 col-md-12 col-lg-8 bg-image\">\n        <agm-map\n          [zoom]=\"12\"\n          [latitude]=\"myPosition.lat\"\n          [longitude]=\"myPosition.lng\"\n          (mapClick)=\"handleClick($event)\"\n        >\n          <agm-marker\n            *ngFor=\"let marker of markers\"\n            [latitude]=\"marker.latitude\"\n            [longitude]=\"marker.longitude\"\n            [label]=\"{\n              color:'red',\n              fontFamily: '',\n              fontSize: '14px',\n              fontWeight: 'bold',\n              text: marker.name\n            }\"\n            [iconUrl]=\"{\n              url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIj48Zz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDAgNjAwKSBzY2FsZSgwLjY5IDAuNjkpIHJvdGF0ZSgwKSB0cmFuc2xhdGUoLTYwMCAtNjAwKSIgc3R5bGU9ImZpbGw6I0IzMDA4MyI+PHN2ZyBmaWxsPSIjQjMwMDgzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+UGV0SWNvbnM8L3RpdGxlPjxnPjxwYXRoIGQ9Ik01Ni40Myw3OS43MmwtMy41MS0xLjEzQTEwMi44NiwxMDIuODYsMCwwLDAsMzYsNzQuMjVhMTMuNTcsMTMuNTcsMCwwLDEtNS40OC0yLjIsOS4xMyw5LjEzLDAsMCwxLTQuMzgtOC4yMWMuMDctMy44MSwyLjQ5LTguMTMsNy05LjIyczguMTEtMy42OSwxMS40Mi02Ljc5YTE1LjQyLDE1LjQyLDAsMCwxLDQtMyw2LjI3LDYuMjcsMCwwLDEsNy4wOSwxQTEyLjkyLDEyLjkyLDAsMCwxLDU4LjQzLDUwYy44NywyLjEzLDEuNzQsNC4yNywyLjYzLDYuNGE0NC42OSw0NC42OSwwLDAsMCw1LDguNDEsMTEuMTMsMTEuMTMsMCwwLDEsMiw3LjQ2QTgsOCwwLDAsMSw2MSw3OS42NmExNS4xNiwxNS4xNiwwLDAsMS0yLjEzLjE2QzU4LjE0LDc5LjgzLDU3LjQzLDc5Ljc3LDU2LjQzLDc5LjcyWiI+PC9wYXRoPjwvZz48ZWxsaXBzZSBjeD0iNDUuOTUiIGN5PSIzMC44NCIgcng9IjEwLjY4IiByeT0iNy43MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuOTggNzQuNTMpIHJvdGF0ZSgtODYpIj48L2VsbGlwc2U+PGVsbGlwc2UgY3g9IjI5LjMyIiBjeT0iNDMuMTkiIHJ4PSI3LjExIiByeT0iOS44MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMzIgMC45Mykgcm90YXRlKC0xLjc3KSI+PC9lbGxpcHNlPjxlbGxpcHNlIGN4PSI2Ni4yMyIgY3k9IjM1LjcyIiByeD0iMTAuNjgiIHJ5PSI3LjczIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjA3IDc5LjU1KSByb3RhdGUoLTYzLjk3KSI+PC9lbGxpcHNlPjxlbGxpcHNlIGN4PSI3NC40OCIgY3k9IjU0LjcxIiByeD0iOS44MiIgcnk9IjcuMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMS4yMiA4OS4zMikgcm90YXRlKC01OC4yOSkiPjwvZWxsaXBzZT48L3N2Zz48L2c+PC9nPjwvc3ZnPg==',\n              scaledSize: {width: 100, height: 100},\n              labelOrigin: {x:50, y:10}\n            }\"\n          >\n            <agm-info-window\n              [isOpen]=\"false\"\n              [disableAutoPan]=\"false\"\n              [maxWidth]=\"100\"\n            >\n              <p>{{marker.name}}</p>\n              <p>{{marker.description}}</p>\n              <button>Modificar</button>\n              <button>Borrar</button>\n            </agm-info-window>\n          </agm-marker>\n        </agm-map>\n    </div>\n\n    <div [ngClass]=\"isMobile ? 'mob-container' : 'desk-container'\" id=\"allignSelfCenter\" class=\"align-self-center col-sm-12 col-md-12 col-lg-4 \">\n      <div class=\"login d-flex align-items-center py-sm-0 py-md-2 py-xl-5\">\n        <div class=\"container\">\n\n          <div class=\"row\">\n            <div class=\"col-md-9 col-lg-12 mx-auto\">\n              <h4 class=\"login-heading  my-4 text-info text-center\"> FriendlyDogs bienvenidos </h4>\n\n              <div class=\"profile-feed row my-2 myPlaces\">\n                <div class=\" col-sm-12\" *ngFor=\"let marker of markers\">\n                  <div class=\"profile-activity border my-2 border-info\">\n\n                    <div class=\"row my-2  d-flex justify-content-center\">\n                      <div class=\"col col-4 col-xs-6\">\n                        <img class=\"pull-left placeImg\" alt=\"My pet avatar\" src=\"http://mysmalldog.com/wp-content/uploads/2017/02/The-Brew-Project-Dog-Friendly-Restaurants-in-San-Diego-1024x768.jpg\">\n                      </div>\n                      <div class=\"col col-8 col-xs-6\">\n                        <a class=\"user mr-2 text-danger\" href=\"#\">{{marker.name}}</a>\n                        <p>{{marker.description}}</p>\n                        <a class=\"text-info\" href=\"#\">ver más</a>\n                      </div>\n                    </div>\n\n                  </div>\n                </div><!-- /.col -->\n              </div><!-- /.row -->\n\n\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n\n</div>\n\n\n<!-- MODAL -->\n<div id=\"addPlaceModal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Modal title</h5>\n        <button (click)=\"closeModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Nombre</label>\n          <div class=\"col-md-12\">\n            <input id=\"inputName\" class=\"form-control\" type=\"text\" value=\"\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Descripcion</label>\n          <div class=\"col-md-12\">\n            <input id=\"inputDescription\" class=\"form-control\" type=\"text\" value=\"\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"addPlace()\" type=\"button\" class=\"btn btn-primary\">Save changes</button>\n        <button (click)=\"closeModal()\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--Modal background black -->\n<div id=\"background-modal\" style=\"display:none\" class=\"modal-backdrop fade show\"></div>\n"

/***/ }),

/***/ "./src/app/placeslist/placeslist.component.scss":
/*!******************************************************!*\
  !*** ./src/app/placeslist/placeslist.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nagm-map {\n  height: 100%;\n  width: 100%; }\n.bg-image {\n  background-size: cover;\n  background-position: center;\n  min-height: 200px; }\n.placeImg {\n  border: 2px solid #C9D6E5;\n  max-width: 100%;\n  margin-right: 10px;\n  margin-left: 0;\n  box-shadow: none; }\n.myPlaces {\n  overflow: scroll; }\n#contenedor {\n  margin-top: 70px; }\n#row100vh {\n  height: calc(100vh - 70px); }\n.mob-container {\n  max-height: 50%;\n  overflow-y: scroll; }\n.desk-container {\n  max-height: 100%; }\n#allignSelfCenter {\n  overflow-y: scroll; }\n.imagen- {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…QuODM3LDUzLjYwOXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz48L2c+PC9nPjwvc3ZnPg==); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzbGlzdC9wbGFjZXNsaXN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FwcGxlL0Rlc2t0b3Avd29ya3NwYWNlL1Byb3llY3Rvcy9mcmllbmRseS1wZXRzLXByb2plY3QvZnJvbnQtZW5kL3NyYy9hcHAvcGxhY2VzbGlzdC9wbGFjZXNsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNNLFlBQVk7RUFDWixXQUFXLEVBQUE7QUFHYjtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsaUJBQWlCLEVBQUE7QUFJbkI7RUFDSSx5QkFBeUI7RUFFekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQ0osRUFBQTtBQUVBO0VBRUUsZ0JBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsMEJBQTBCLEVBQUE7QUFHNUI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0IsRUFBQTtBQUd0QjtFQUNFLGtCQUFrQixFQUFBO0FBSXBCO0VBQ0UsNktBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGxhY2VzbGlzdC9wbGFjZXNsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuYWdtLW1hcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmJnLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyMDBweDsgfVxuXG4ucGxhY2VJbWcge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQzlENkU1O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLm15UGxhY2VzIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxuXG4jY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7IH1cblxuI3JvdzEwMHZoIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7IH1cblxuLm1vYi1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxuXG4uZGVzay1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAxMDAlOyB9XG5cbiNhbGxpZ25TZWxmQ2VudGVyIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XG5cbi5pbWFnZW4tIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZOKAplF1T0RNM0xEVXpMall3T1hvaVBqd3ZjR0YwYUQ0OEwyYytQQzluUGp3dlp6NDhMM04yWno0OEwyYytQQzluUGp3dmMzWm5QZz09KTsgfVxuIiwiYWdtLW1hcCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuYmctaW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4OyAvL2VzdG8gbG8gYWdyZWd1ZSB5byBwYXJhIHEgZW4gbW92aWxcbiAgICB9XG5cblxuICAgIC5wbGFjZUltZyB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOUQ2RTU7XG4gICAgICAgIC8vYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lXG4gICAgfVxuXG4gICAgLm15UGxhY2Vze1xuICAgIC8vICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgb3ZlcmZsb3c6c2Nyb2xsO1xuICAgIH1cblxuICAgICNjb250ZW5lZG9ye1xuICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICB9XG5cbiAgICAjcm93MTAwdmh7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICB9XG5cbiAgICAubW9iLWNvbnRhaW5lcntcbiAgICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG5cbiAgICAuZGVzay1jb250YWluZXJ7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuI2FsbGlnblNlbGZDZW50ZXJ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuXG4uaW1hZ2VuLXtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZOKAplF1T0RNM0xEVXpMall3T1hvaVBqd3ZjR0YwYUQ0OEwyYytQQzluUGp3dlp6NDhMM04yWno0OEwyYytQQzluUGp3dmMzWm5QZz09XG4pXG5cbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PlaceslistComponent = /** @class */ (function () {
    function PlaceslistComponent(_router) {
        this._router = _router;
        this.myPosition = {
            "lat": 41.385063,
            "lng": 2.173404
        };
        this.markers = [];
        this.isMobile = false;
    }
    PlaceslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.detectIfMobile();
        window.onresize = function () { _this.detectIfMobile(); };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.myPosition['lat'] = position.coords.latitude;
                _this.myPosition['lng'] = position.coords.longitude;
            }, function (error) {
                console.log("Error: ", error);
            });
        }
        this.getPlaces();
    };
    PlaceslistComponent.prototype.getPlaces = function () {
        var _this = this;
        var urlPlaces = "http://18.224.131.43:443/places";
        $.get(urlPlaces, function (response) {
            _this.markers = response;
        });
    };
    PlaceslistComponent.prototype.showModal = function () {
        $('#addPlaceModal').show();
        $('#background-modal').show();
    };
    PlaceslistComponent.prototype.closeModal = function () {
        $('#addPlaceModal').hide();
        $('#background-modal').hide();
    };
    PlaceslistComponent.prototype.handleClick = function ($event) {
        console.log("cualquier cosa");
        //setea las coordenadas del nuevo lugar
        this.newPlacelat = $event.coords.lat;
        this.newPlacelong = $event.coords.lng;
        //abre el modal
        this.showModal();
    };
    PlaceslistComponent.prototype.addPlace = function () {
        var _this = this;
        var url = "http://18.224.131.43:443/place";
        var latitude = this.newPlacelat;
        var longitude = this.newPlacelong;
        var inputName = $('#inputName').val();
        var inputDescription = $('#inputDescription').val();
        var dataPlace = {
            'latitude': latitude,
            'longitude': longitude,
            "address_id": 1,
            "picture": "url2",
            "name": inputName,
            "description": inputDescription
        };
        $.post(url, dataPlace, function (response) {
            console.log(response);
            alert("se ha guardado un nuevo lugar");
            _this.closeModal();
            _this.getPlaces();
        }); //post place
    };
    PlaceslistComponent.prototype.detectIfMobile = function () {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
        console.log('I am ' + this.isMobile);
    };
    PlaceslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-placeslist',
            template: __webpack_require__(/*! ./placeslist.component.html */ "./src/app/placeslist/placeslist.component.html"),
            styles: [__webpack_require__(/*! ./placeslist.component.scss */ "./src/app/placeslist/placeslist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthService = /** @class */ (function () {
    function AuthService(_myRoute) {
        this._myRoute = _myRoute;
    }
    AuthService.prototype.isLogged = function () {
        var isLogged = localStorage.getItem("userlogged");
        //  console.log(isLogged);
        if (isLogged != null) {
            //      console.log("loggedIn = true")
            return true;
        }
        else if (isLogged == null) {
            //    console.log("loggedIn = false")
            return false;
        }
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var data = { "email": email, "password": password };
        var url = "http://18.224.131.43:443/userlogin";
        console.log(data);
        $.post(url, data, function (response) {
            var id = response[0]["id"];
            var password = response[0]["password"];
            var user = id + "/" + password;
            if (response == "wrongEmail") {
                return alert("email incorrecto");
            }
            else if (response == "wrongPass") {
                return alert("Contraseña incorrecta");
            }
            else if (password != undefined) {
                localStorage.setItem("userlogged", user);
                _this._myRoute.navigate(["home"]); //<-- redirigir a otra página
            }
        });
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem("userlogged");
        this._myRoute.navigate(["login"]); //<-- redirigir a otra página
    };
    AuthService.prototype.goToLogin = function () {
        this._myRoute.navigate(["login"]); //<-- redirigir a otra página
    };
    AuthService.prototype.goToSignup = function () {
        this._myRoute.navigate(["signup"]); //<-- redirigir a otra página
    };
    AuthService.prototype.goToHome = function () {
        this._myRoute.navigate(["home"]); //<-- redirigir a otra página
    };
    AuthService.prototype.goToMyProfile = function () {
        this._myRoute.navigate(["myprofile"]); //<-- redirigir a otra página
    };
    AuthService.prototype.goToPlacesList = function () {
        this._myRoute.navigate(["places-list"]); //<-- redirigir a otra página
    };
    AuthService.prototype.goToEditProfile = function () {
        this._myRoute.navigate(["edit-profile"]); //<-- redirigir a otra página
    };
    AuthService.prototype.registerUser = function (name, email, password) {
        var _this = this;
        var data = { "name": name, "email": email, "password": password, "address_id": 1 };
        var url = "http://18.224.131.43:443/user";
        console.log("registrando usuario");
        console.log(name, email, password);
        $.post(url, data, function (response) {
            console.log(response);
            alert("se ha guardado un nuevo usuario");
            console.log(email, password);
            _this.login(email, password);
        }); //post user
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getUserDetails = function (id) {
        var _this = this;
        var urlUser = "http://18.224.131.43:443/user/" + id;
        $.get(urlUser, function (response) {
            _this.userName = response[0].name;
            _this.userAddressId = response[0].address_id;
            _this.userEmail = response[0].email;
            console.log(_this.userEmail);
            //get date:
            var creation_date = response[0].creation_date;
            var myDate = new Date(creation_date);
            _this.userJoinedDay = myDate.getDate();
            _this.userJoinedMonth = myDate.getMonth() + 1;
            _this.userJoinedYear = myDate.getFullYear();
            var urlAddress = "http://18.224.131.43:443/address/" + _this.userAddressId;
            $.get(urlAddress, function (response) {
                var city_id = response[0].city_id;
                var urlCity = "http://18.224.131.43:443/city/" + city_id;
                $.get(urlCity, function (response) {
                    _this.userCity = response[0].name;
                }); //$.get(urlCity)
            }); //$.get (urlAddress)
        }); //$.get(urlUser)
        var urlMyPets = "http://18.224.131.43:443/animals/" + id;
        $.get(urlMyPets, function (response) {
            console.log(response);
            _this.userPets = response;
            console.log();
            console.log();
        }); //$.get(urlMyPets)
    }; //getUserDetails(id)
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contenedor\" class=\"container-fluid\">\n  <div id=\"row100vh\" class=\"row no-gutter min-vh-100\">\n    <div class=\"col-sm-12 col-md-12 col-lg-6 bg-image\"></div>\n    <div id=\"allignSelfCenter\" class=\"align-self-center col-sm-12 col-md-12 col-lg-6 \">\n      <div class=\"login d-flex align-items-center py-sm-0 py-md-2 py-xl-5\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9 col-lg-8 mx-auto\">\n              <h4 class=\"login-heading mb-4 text-center\">Únete a nuestra manada!</h4>\n\n              <form class=\"needs-validation\">\n\n                <div class=\"form-label-group col-6 col-sm-6 col-md-6 col-lg-12\">\n                  <input type=\"text\" id=\"inputName\" class=\"form-control\" placeholder=\"..Nombre\" required autofocus minlength=\"3\" maxlength=\"20\">\n                  <label for=\"inputName\">Nombre</label>\n                </div>\n\n\n                <div class=\"form-label-group col-6 col-sm-6 col-md-6 col-lg-12\">\n                  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\" ..Email address\" minlength=\"3\" maxlength=\"20\" required autofocus>\n                  <label for=\"inputEmail\">Email </label>\n                </div>\n\n<div class=\"form-row\">\n\n\n\n                <div class=\"form-label-group col-6 col-sm-6 col-md-6 col-lg-12 \">\n                  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\" ..Password\" minlength=\"3\" maxlength=\"20\" pattern=\"^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$\" title=\"al menos 1 mayúscula, 1 minúscula, y un número\" required>\n                  <label for=\"inputPassword\">Contraseña</label>\n                </div>\n\n                <div class=\"form-label-group col-6 col-sm-6 col-md-6 col-lg-12 \">\n                  <input type=\"password\" id=\"inputRepeatPassword\" class=\"form-control\" placeholder=\" ..Password\" minlength=\"3\" maxlength=\"20\" required>\n                  <label for=\"inputRepeatPassword\">Repetir</label>\n                </div>\n\n  </div>\n\n                <div class=\"custom-control custom-checkbox mb-3\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                  <label class=\"custom-control-label\" for=\"customCheck1\">Recordar contraseña</label>\n                </div>\n\n\n\n              </form>\n              <button (click)=\"saveNewUser()\" class=\"btn btn-lg btn-info btn-block btn-login text-uppercase font-weight-bold mb-2\" type=\"submit\">Unirme al grupo</button>\n\n              <button (click)=\"_auth.goToLogin()\" class=\"btn btn-lg btn-secondary btn-block btn-login text-uppercase font-weight-bold mb-2\">ya soy parte</button>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenedor {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: 0.75rem; }\n\na {\n  color: #17a2b8; }\n\n.form-control:focus {\n  border-color: #17a2b8;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #00beff; }\n\n.bg-image {\n  background-image: url(\"/assets/images/group-hug2.png\");\n  background-size: cover;\n  background-position: top;\n  min-height: 150px; }\n\n.login-heading {\n  font-weight: 300; }\n\n.btn-login {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n  border-radius: 2rem; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group > input,\n.form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n  height: auto;\n  border-radius: 2rem; }\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out; }\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::placeholder {\n  color: transparent; }\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3); }\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBa0I7RUFDbEIsMEJBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FDRixFQUFBOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlFQUE4RSxFQUFBOztBQVFoRjtFQUNFLHNEQUFzRDtFQUN0RCxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7O0VBRUUsc0RBQXNEO0VBQ3RELFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQ0FBQTtFQUNBLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG9DQUFBO0VBQ0EsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQiwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxrQkFBa0IsRUFBQTs7QUFPcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFPcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSw0RUFBNEU7RUFDNUUsZ0RBQWdELEVBQUE7O0FBR2xEO0VBQ0UsNkNBQTZDO0VBQzdDLGdEQUFnRDtFQUNoRCxlQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW5lZG9yIHtcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IDAuNzVyZW07XG59XG5cbmF7XG4gIGNvbG9yOiAjMTdhMmI4XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMxN2EyYjg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDAsIDE5MCwgMjU1LCAxKTtcbn1cblxuLmxvZ2luLFxuLmltYWdlIHtcbi8vIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2dyb3VwLWh1ZzIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgbWluLWhlaWdodDogMTUwcHg7IC8vZXN0byBsbyBhZ3JlZ3VlIHlvIHBhcmEgcSBlbiBtb3ZpbFxufVxuXG4ubG9naW4taGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5idG4tbG9naW4ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwPmlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGN1cnNvcjogdGV4dDtcbiAgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil+bGFiZWwge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cbiJdfQ== */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    SignupComponent.prototype.ngOnInit = function () {
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
            alert("passwords match!");
            this._auth.registerUser(name, email, password);
        }
        ; //else if passwords match
    }; //saveNewUser()
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}()); //SignupComponent



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

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Profile plantilla-->\n<!--https://codepen.io/jasondavis/pen/vyMJPp?editors=1111-->\n\n<app-header>\n\n</app-header>\n\n<div class=\"container contenedor\">\n<div class=\"main-row-container \">\n  <h4 class=\"text-info text-center profile-activity py-2 \">\n    <span class=\"middle\">{{ _user.userName }}</span>\n    <br>\n  </h4>\n  <div class=\"row\">\n    <div id=\"user-profile-2\" class=\"user-profile\">\n        <div class=\"tabbable\">\n          <div class=\"tab-content no-border padding-24 py-2\">\n            <div id=\"home\" class=\"tab-pane in active\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-3 center\">\n                  <span class=\"profile-picture\">\n                    <img class=\"editable mw-100 img-responsive\" alt=\"Avatar\" id=\"avatar2\" src=\"https://barkpost.com/wp-content/uploads/2015/07/dog-kisses.png\">\n                  </span>\n\n\n                  <div class=\"space space-4 my-2\"></div>\n                  <a href=\"mailto:{{_user.userEmail}}\" class=\"btn btn-sm btn-block btn-info\">\n                    <i class=\"ace-icon fa fa-envelope-o bigger-110\"></i>\n                    <span class=\"bigger-110\">Enviar mensaje</span>\n                  </a>\n                </div><!-- /.col -->\n\n                <div class=\"col-xs-12 col-sm-9\">\n                  <div class=\"profile-user-info\">\n\n\n                    <div class=\"profile-info-row\">\n                      <div class=\"profile-info-name\"> Location </div>\n\n                      <div class=\"profile-info-value pt-6 pr-0 pb-0 pl-6 \">\n                        <i class=\"fa fa-map-marker light-orange bigger-110\"></i>\n                        <span class=\"ml-2\">{{_user.userCity}}</span>\n                        <span>España</span>\n                      </div>\n                    </div>\n\n                    <div class=\"profile-info-row\">\n                      <div class=\"profile-info-name\"> Joined </div>\n\n                      <div class=\"profile-info-value\">\n                        <span>{{_user.userJoinedDay}}/{{_user.userJoinedMonth}}/{{_user.userJoinedYear}}</span>\n                      </div>\n                    </div>\n\n\n                  </div>\n\n                  <div class=\"hr hr-8 dotted\"></div>\n\n                </div><!-- /.col -->\n              </div><!-- /.row -->\n\n              <div class=\"space-20\"></div>\n\n              <div class=\"row\">\n                <div class=\"col-sm-12 text-info text-center profile-activity\">\n                    <h4>Mis mascotas</h4>\n                </div>\n              </div>\n\n<div class=\"profile-feed row my-2 myPets\">\n\n  <div class=\" col-sm-12\" *ngFor=\"let pet of _user.userPets\">\n    <div class=\"profile-activity \">\n      <div>\n        <img class=\"pull-left\" alt=\"My pet avatar\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZoZvX-HlrkrrO4jgqWxmFiqIjd6brFXK1UhqdHPkhs7kaWf3\">\n        <a class=\"user mr-2 text-danger\" href=\"#\"> {{pet.name}} </a>\n          {{pet.description}}\n        <a class=\"text-info\" href=\"#\">ver más</a>\n      </div>\n    </div>\n  </div><!-- /.col -->\n\n\n\n</div><!-- /.row -->\n\n<div class=\"row\">\n  <div class=\"\">\n\n  </div>\n</div>\n\n<div class=\"social-row row\">\n<div class=\"col social-col \">\n  <a href=\"#\"><img src=\"/assets/icons/facebook-50.png\" alt=\"\"></a>\n</div>\n<div class=\"col social-col \">\n  <a href=\"#\"><img src=\"/assets/icons/instagram-50.png\" alt=\"\"></a>\n</div>\n<div class=\"col social-col \">\n  <a href=\"#\"><img src=\"/assets/icons/twitter-50.png\" alt=\"\"></a>\n</div>\n</div>\n\n\n\n\n            </div><!-- /#home -->\n\n\n\n\n          </div>\n        </div><!--tabbable-->\n\n      </div> <!--user-profile-2-->\n  </div> <!--Main row-->\n</div>\n</div>\n\n<app-footer>\n</app-footer>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin-top: 20px; }\n\n.align-center, .center {\n  text-align: center !important; }\n\n.profile-user-info {\n  display: table;\n  width: 98%;\n  width: calc(100% - 24px);\n  margin: 0 auto; }\n\n.profile-info-row {\n  display: table-row; }\n\n.profile-info-name,\n.profile-info-value {\n  display: table-cell;\n  border-top: 1px dotted #D5E4F1; }\n\n.profile-info-name {\n  text-align: right;\n  padding: 6px 10px 6px 4px;\n  font-weight: 400;\n  color: #667E99;\n  background-color: transparent;\n  width: 110px;\n  vertical-align: middle; }\n\n.profile-info-value {\n  padding: 6px 4px 6px 6px; }\n\n.profile-info-value > span + span:before {\n  display: inline;\n  content: \",\";\n  margin-left: 1px;\n  margin-right: 3px;\n  color: #666;\n  border-bottom: 1px solid #FFF; }\n\n.profile-info-value > span + span.editable-container:before {\n  display: none; }\n\n.profile-info-row:first-child .profile-info-name,\n.profile-info-row:first-child .profile-info-value {\n  border-top: none; }\n\n.profile-user-info-striped {\n  border: 1px solid #DCEBF7; }\n\n.profile-user-info-striped .profile-info-name {\n  color: #336199;\n  background-color: #EDF3F4;\n  border-top: 1px solid #F7FBFF; }\n\n.profile-user-info-striped .profile-info-value {\n  border-top: 1px dotted #DCEBF7;\n  padding-left: 12px; }\n\n.profile-picture {\n  border: 1px solid #CCC;\n  background-color: #FFF;\n  padding: 4px;\n  display: inline-block;\n  max-width: 100%;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15); }\n\n.dd-empty,\n.dd-handle,\n.dd-placeholder,\n.dd2-content {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box; }\n\n.profile-activity {\n  padding: 10px 4px;\n  border-bottom: 1px dotted #D0D8E0;\n  position: relative;\n  border-left: 1px dotted #FFF;\n  border-right: 1px dotted #FFF; }\n\n.profile-activity:first-child {\n  border-top: 1px dotted transparent; }\n\n.profile-activity:first-child:hover {\n  border-top-color: #D0D8E0; }\n\n.profile-activity:hover {\n  background-color: #F4F9FD;\n  border-left: 1px dotted #D0D8E0;\n  border-right: 1px dotted #D0D8E0; }\n\n.profile-activity img {\n  border: 2px solid #C9D6E5;\n  border-radius: 100%;\n  max-width: 40px;\n  margin-right: 10px;\n  margin-left: 0;\n  box-shadow: none; }\n\n.profile-activity .thumbicon {\n  background-color: #74ABD7;\n  display: inline-block;\n  border-radius: 100%;\n  width: 38px;\n  height: 38px;\n  color: #FFF;\n  font-size: 18px;\n  text-align: center;\n  line-height: 38px;\n  margin-right: 10px;\n  margin-left: 0;\n  text-shadow: none !important; }\n\n.profile-activity .time {\n  display: block;\n  margin-top: 4px;\n  color: #777; }\n\n.profile-activity a.user {\n  font-weight: 700;\n  color: #9585BF; }\n\n.profile-activity .tools {\n  position: absolute;\n  right: 12px;\n  bottom: 8px;\n  display: none; }\n\n.profile-activity:hover .tools {\n  display: block; }\n\n.user-profile .ace-thumbnails li {\n  border: 1px solid #CCC;\n  padding: 3px;\n  margin: 6px; }\n\n.user-profile .ace-thumbnails li .tools {\n  left: 3px;\n  right: 3px; }\n\n.user-profile .ace-thumbnails li:hover .tools {\n  bottom: 3px; }\n\n.user-title-label:hover {\n  text-decoration: none; }\n\n.user-title-label + .dropdown-menu {\n  margin-left: -12px; }\n\n.profile-contact-links {\n  padding: 4px 2px 5px;\n  border: 1px solid #E0E2E5;\n  background-color: #F8FAFC; }\n\n.btn-link:hover .ace-icon {\n  text-decoration: none !important; }\n\n.profile-social-links > a:hover > .ace-icon,\n.profile-users .memberdiv .name a:hover .ace-icon,\n.profile-users .memberdiv .tools > a:hover {\n  text-decoration: none; }\n\n.profile-social-links > a {\n  text-decoration: none;\n  margin: 0 1px; }\n\n.profile-skills .progress {\n  height: 26px;\n  margin-bottom: 2px;\n  background-color: transparent; }\n\n.profile-skills .progress .progress-bar {\n  line-height: 26px;\n  font-size: 13px;\n  font-weight: 700;\n  font-family: \"Open Sans\";\n  padding: 0 8px; }\n\n.profile-users .user {\n  display: block;\n  position: static;\n  text-align: center;\n  width: auto; }\n\n.profile-users .user img {\n  padding: 2px;\n  border-radius: 100%;\n  border: 1px solid #AAA;\n  max-width: none;\n  width: 64px;\n  transition: all .1s; }\n\n.profile-users .user img:hover {\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.33); }\n\n.profile-users .memberdiv {\n  background-color: #FFF;\n  width: 100px;\n  box-sizing: border-box;\n  border: none;\n  text-align: center;\n  margin: 0 8px 24px; }\n\n.profile-users .memberdiv .body {\n  display: inline-block;\n  margin: 8px 0 0; }\n\n.profile-users .memberdiv .popover {\n  visibility: hidden;\n  min-width: 0;\n  max-height: 0;\n  max-width: 0;\n  margin-left: 0;\n  margin-right: 0;\n  top: -5%;\n  left: auto;\n  right: auto;\n  opacity: 0;\n  display: none;\n  position: absolute;\n  transition: opacity .2s linear 0s, visibility 0s linear .2s, max-height 0s linear .2s, max-width 0s linear .2s, min-width 0s linear .2s; }\n\n.profile-users .memberdiv .popover.right {\n  left: 100%;\n  right: auto;\n  display: block; }\n\n.profile-users .memberdiv .popover.left {\n  left: auto;\n  right: 100%;\n  display: block; }\n\n.profile-users .memberdiv > :first-child:hover .popover {\n  visibility: visible;\n  opacity: 1;\n  z-index: 1060;\n  max-height: 250px;\n  max-width: 250px;\n  min-width: 150px;\n  transition-delay: 0s; }\n\n.profile-users .memberdiv .tools {\n  position: static;\n  display: block;\n  width: 100%;\n  margin-top: 2px; }\n\n.profile-users .memberdiv .tools > a {\n  margin: 0 2px; }\n\n.user-status {\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  background-color: #FFF;\n  border: 3px solid #AAA;\n  border-radius: 100%;\n  vertical-align: middle;\n  margin-right: 1px; }\n\n.user-status.status-online {\n  border-color: #8AC16C; }\n\n.user-status.status-busy {\n  border-color: #E07F69; }\n\n.user-status.status-idle {\n  border-color: #FFB752; }\n\n.tab-content.profile-edit-tab-content {\n  border: 1px solid #DDD;\n  padding: 8px 32px 32px;\n  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.2);\n  background-color: #FFF; }\n\n@media only screen and (max-width: 480px) {\n  .profile-info-name {\n    width: 80px; }\n  .profile-user-info-striped .profile-info-name {\n    float: none;\n    width: auto;\n    text-align: left;\n    padding: 6px 4px 6px 10px;\n    display: block; }\n  .profile-user-info-striped .profile-info-value {\n    margin-left: 10px;\n    display: block; }\n  .user-profile .memberdiv {\n    width: 50%;\n    margin-left: 0;\n    margin-right: 0; } }\n\n.itemdiv {\n  padding-right: 3px;\n  min-height: 66px; }\n\n.itemdiv > .user {\n  display: inline-block;\n  width: 42px;\n  position: absolute;\n  left: 0; }\n\n.itemdiv > .user > .img,\n.itemdiv > .user > img {\n  border-radius: 100%;\n  border: 2px solid #5293C4;\n  max-width: 40px;\n  position: relative; }\n\n.itemdiv > .user > .img {\n  padding: 2px; }\n\n.itemdiv > .body {\n  width: auto;\n  margin-left: 50px;\n  margin-right: 12px;\n  position: relative; }\n\n.itemdiv > .body > .time {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #666;\n  position: absolute;\n  right: 9px;\n  top: 0; }\n\n.itemdiv > .body > .time .ace-icon {\n  font-size: 14px;\n  font-weight: 400; }\n\n.itemdiv > .body > .name {\n  display: block;\n  color: #999; }\n\n.itemdiv > .body > .name > b {\n  color: #777; }\n\n.itemdiv > .body > .text {\n  display: block;\n  position: relative;\n  margin-top: 2px;\n  padding-bottom: 19px;\n  padding-left: 7px;\n  font-size: 13px; }\n\n.itemdiv.dialogdiv:before,\n.itemdiv.dialogdiv > .body:before,\n.itemdiv > .body > .text:after {\n  content: \"\";\n  position: absolute; }\n\n.itemdiv > .body > .text:after {\n  display: block;\n  height: 1px;\n  font-size: 0;\n  overflow: hidden;\n  left: 16px;\n  right: -12px;\n  margin-top: 9px;\n  border-top: 1px solid #E4ECF3; }\n\n.itemdiv > .body > .text > .ace-icon:first-child {\n  color: #DCE3ED;\n  margin-right: 4px; }\n\n.itemdiv:last-child > .body > .text {\n  border-bottom-width: 0; }\n\n.itemdiv:last-child > .body > .text:after {\n  display: none; }\n\n.itemdiv.dialogdiv {\n  padding-bottom: 14px; }\n\n.itemdiv.dialogdiv:before {\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 19px;\n  width: 3px;\n  max-width: 3px;\n  background-color: #E1E6ED;\n  border: 1px solid #D7DBDD;\n  border-width: 0 1px; }\n\n.itemdiv.dialogdiv:last-child {\n  padding-bottom: 0; }\n\n.itemdiv.dialogdiv:last-child:before {\n  display: none; }\n\n.itemdiv.dialogdiv > .user > img {\n  border-color: #C9D6E5; }\n\n.itemdiv.dialogdiv > .body {\n  border: 1px solid #DDE4ED;\n  padding: 5px 8px 8px;\n  border-left-width: 2px;\n  margin-right: 1px; }\n\n.itemdiv.dialogdiv > .body:before {\n  display: block;\n  left: -7px;\n  top: 11px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #DDE4ED;\n  border-width: 2px 0 0 2px;\n  background-color: #FFF;\n  box-sizing: content-box;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\n.itemdiv.dialogdiv > .body > .time {\n  position: static;\n  float: right; }\n\n.itemdiv.dialogdiv > .body > .text {\n  padding-left: 0;\n  padding-bottom: 0; }\n\n.itemdiv.dialogdiv > .body > .text:after {\n  display: none; }\n\n.itemdiv.dialogdiv .tooltip-inner {\n  word-break: break-all; }\n\n.itemdiv.memberdiv {\n  width: 175px;\n  padding: 2px;\n  margin: 3px 0;\n  float: left;\n  border-bottom: 1px solid #E8E8E8; }\n\n@media (min-width: 992px) {\n  .itemdiv.memberdiv {\n    max-width: 50%; } }\n\n@media (max-width: 991px) {\n  .itemdiv.memberdiv {\n    min-width: 33.333%; } }\n\n.itemdiv.memberdiv > .user > img {\n  border-color: #DCE3ED; }\n\n.itemdiv.memberdiv > .body > .time {\n  position: static; }\n\n.itemdiv.memberdiv > .body > .name {\n  line-height: 18px;\n  height: 18px;\n  margin-bottom: 0; }\n\n.itemdiv.memberdiv > .body > .name > a {\n  display: inline-block;\n  max-width: 100px;\n  max-height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all; }\n\n.itemdiv .tools {\n  position: absolute;\n  right: 5px;\n  bottom: 10px;\n  display: none; }\n\n.item-list > li > .checkbox,\n.item-list > li > label.inline,\n.itemdiv:hover .tools {\n  display: inline-block; }\n\n.itemdiv .tools .btn {\n  border-radius: 36px;\n  margin: 1px 0; }\n\n.itemdiv .body .tools {\n  bottom: 4px; }\n\n.itemdiv.commentdiv .tools {\n  right: 9px; }\n\n.item-list {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.item-list > li {\n  padding: 9px;\n  background-color: #FFF;\n  margin-top: -1px;\n  position: relative; }\n\n.item-list > li.selected {\n  color: #8090A0;\n  background-color: #F4F9FC; }\n\n.item-list > li.selected .lbl,\n.item-list > li.selected label {\n  text-decoration: line-through;\n  color: #8090A0; }\n\n.item-list > li label {\n  font-size: 13px; }\n\n.item-list > li .percentage {\n  font-size: 11px;\n  font-weight: 700;\n  color: #777; }\n\n.ace-thumbnails > li,\n.ace-thumbnails > li > :first-child {\n  display: block;\n  position: relative; }\n\n.ace-thumbnails {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.ace-thumbnails > li {\n  float: left;\n  overflow: hidden;\n  margin: 2px;\n  border: 2px solid #333; }\n\n.ace-thumbnails > li > :first-child:focus {\n  outline: 0; }\n\n.ace-thumbnails > li .tags {\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  overflow: visible;\n  direction: rtl;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  background-color: transparent;\n  border-width: 0;\n  vertical-align: inherit; }\n\n.ace-thumbnails > li .tags > .label-holder {\n  opacity: .92;\n  filter: alpha(opacity=92);\n  display: table;\n  margin: 1px 0 0;\n  direction: ltr;\n  text-align: left; }\n\n.ace-thumbnails > li > .tools,\n.ace-thumbnails > li > :first-child > .text {\n  position: absolute;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.55); }\n\n.ace-thumbnails > li .tags > .label-holder:hover {\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.ace-thumbnails > li > .tools {\n  top: 0;\n  bottom: 0;\n  left: -30px;\n  width: 24px;\n  vertical-align: middle;\n  transition: all .2s ease; }\n\n.ace-thumbnails > li > .tools.tools-right {\n  left: auto;\n  right: -30px; }\n\n.ace-thumbnails > li > .tools.tools-bottom {\n  width: auto;\n  height: 28px;\n  left: 0;\n  right: 0;\n  top: auto;\n  bottom: -30px; }\n\n.ace-thumbnails > li > .tools.tools-top {\n  width: auto;\n  height: 28px;\n  left: 0;\n  right: 0;\n  top: -30px;\n  bottom: auto; }\n\n.ace-thumbnails > li:hover > .tools {\n  left: 0;\n  right: 0; }\n\n.ace-thumbnails > li:hover > .tools.tools-bottom {\n  top: auto;\n  bottom: 0; }\n\n.ace-thumbnails > li:hover > .tools.tools-top {\n  bottom: auto;\n  top: 0; }\n\n.ace-thumbnails > li:hover > .tools.tools-right {\n  left: auto;\n  right: 0; }\n\n.ace-thumbnails > li > .in.tools {\n  left: 0;\n  right: 0; }\n\n.ace-thumbnails > li > .in.tools.tools-bottom {\n  top: auto;\n  bottom: 0; }\n\n.ace-thumbnails > li > .in.tools.tools-top {\n  bottom: auto;\n  top: 0; }\n\n.ace-thumbnails > li > .in.tools.tools-right {\n  left: auto;\n  right: 0; }\n\n.ace-thumbnails > li > .tools > a,\n.ace-thumbnails > li > :first-child .inner a {\n  display: inline-block;\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 400;\n  padding: 0 4px; }\n\n.ace-thumbnails > li > .tools > a:hover,\n.ace-thumbnails > li > :first-child .inner a:hover {\n  text-decoration: none;\n  color: #C9E2EA; }\n\n.ace-thumbnails > li .tools.tools-bottom > a,\n.ace-thumbnails > li .tools.tools-top > a {\n  display: inline-block; }\n\n.ace-thumbnails > li > :first-child > .text {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  color: #FFF;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  transition: all .2s ease; }\n\n.dialogs,\n.itemdiv {\n  position: relative; }\n\n.ace-thumbnails > li > :first-child > .text:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: 0; }\n\n.ace-thumbnails > li > :first-child > .text > .inner {\n  padding: 4px 0;\n  margin: 0;\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 90%; }\n\n.ace-thumbnails > li:hover > :first-child > .text {\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n@media only screen and (max-width: 480px) {\n  .ace-thumbnails {\n    text-align: center; }\n  .ace-thumbnails > li {\n    float: none;\n    display: inline-block; } }\n\n.tab-content {\n  border: 1px solid #C5D0DC;\n  padding: 16px 12px;\n  position: relative; }\n\n.tab-content.no-padding {\n  padding: 0; }\n\n.tab-content.no-border {\n  border: none;\n  padding: 12px; }\n\n.tab-content.padding-32 {\n  padding: 32px 24px; }\n\n.tab-content.no-border.padding-32 {\n  padding: 32px; }\n\n.tab-content.padding-30 {\n  padding: 30px 23px; }\n\n.tab-content.no-border.padding-30 {\n  padding: 30px; }\n\n.tab-content.padding-28 {\n  padding: 28px 21px; }\n\n.tab-content.no-border.padding-28 {\n  padding: 28px; }\n\n.tab-content.padding-26 {\n  padding: 26px 20px; }\n\n.tab-content.no-border.padding-26 {\n  padding: 26px; }\n\n.tab-content.padding-24 {\n  padding: 24px 18px; }\n\n.tab-content.no-border.padding-24 {\n  padding: 24px; }\n\n.tab-content.padding-22 {\n  padding: 22px 17px; }\n\n.tab-content.no-border.padding-22 {\n  padding: 22px; }\n\n.tab-content.padding-20 {\n  padding: 20px 15px; }\n\n.tab-content.no-border.padding-20 {\n  padding: 20px; }\n\n.tab-content.padding-18 {\n  padding: 18px 14px; }\n\n.tab-content.no-border.padding-18 {\n  padding: 18px; }\n\n.tab-content.padding-16 {\n  padding: 16px 12px; }\n\n.tab-content.no-border.padding-16 {\n  padding: 16px; }\n\n.tab-content.padding-14 {\n  padding: 14px 11px; }\n\n.tab-content.no-border.padding-14 {\n  padding: 14px; }\n\n.tab-content.padding-12 {\n  padding: 12px 9px; }\n\n.tab-content.no-border.padding-12 {\n  padding: 12px; }\n\n.tab-content.padding-10 {\n  padding: 10px 8px; }\n\n.tab-content.no-border.padding-10 {\n  padding: 10px; }\n\n.tab-content.padding-8 {\n  padding: 8px 6px; }\n\n.tab-content.no-border.padding-8 {\n  padding: 8px; }\n\n.tab-content.padding-6 {\n  padding: 6px 5px; }\n\n.tab-content.no-border.padding-6 {\n  padding: 6px; }\n\n.tab-content.padding-4 {\n  padding: 4px 3px; }\n\n.tab-content.no-border.padding-4 {\n  padding: 4px; }\n\n.tab-content.no-border.padding-2,\n.tab-content.padding-2 {\n  padding: 2px; }\n\n.tab-content.no-border.padding-0,\n.tab-content.padding-0 {\n  padding: 0; }\n\n.nav.nav-tabs.padding-28 {\n  padding-left: 28px; }\n\n.tabs-left > .nav.nav-tabs.padding-28,\n.tabs-right > .nav.nav-tabs.padding-28 {\n  padding-left: 0;\n  padding-top: 28px; }\n\n.nav.nav-tabs.padding-26 {\n  padding-left: 26px; }\n\n.tabs-left > .nav.nav-tabs.padding-26,\n.tabs-right > .nav.nav-tabs.padding-26 {\n  padding-left: 0;\n  padding-top: 26px; }\n\n.nav.nav-tabs.padding-24 {\n  padding-left: 24px; }\n\n.tabs-left > .nav.nav-tabs.padding-24,\n.tabs-right > .nav.nav-tabs.padding-24 {\n  padding-left: 0;\n  padding-top: 24px; }\n\n.nav.nav-tabs.padding-22 {\n  padding-left: 22px; }\n\n.tabs-left > .nav.nav-tabs.padding-22,\n.tabs-right > .nav.nav-tabs.padding-22 {\n  padding-left: 0;\n  padding-top: 22px; }\n\n.nav.nav-tabs.padding-20 {\n  padding-left: 20px; }\n\n.tabs-left > .nav.nav-tabs.padding-20,\n.tabs-right > .nav.nav-tabs.padding-20 {\n  padding-left: 0;\n  padding-top: 20px; }\n\n.nav.nav-tabs.padding-18 {\n  padding-left: 18px; }\n\n.tabs-left > .nav.nav-tabs.padding-18,\n.tabs-right > .nav.nav-tabs.padding-18 {\n  padding-left: 0;\n  padding-top: 18px; }\n\n.nav.nav-tabs.padding-16 {\n  padding-left: 16px; }\n\n.tabs-left > .nav.nav-tabs.padding-16,\n.tabs-right > .nav.nav-tabs.padding-16 {\n  padding-left: 0;\n  padding-top: 16px; }\n\n.nav.nav-tabs.padding-14 {\n  padding-left: 14px; }\n\n.tabs-left > .nav.nav-tabs.padding-14,\n.tabs-right > .nav.nav-tabs.padding-14 {\n  padding-left: 0;\n  padding-top: 14px; }\n\n.nav.nav-tabs.padding-12 {\n  padding-left: 12px; }\n\n.tabs-left > .nav.nav-tabs.padding-12,\n.tabs-right > .nav.nav-tabs.padding-12 {\n  padding-left: 0;\n  padding-top: 12px; }\n\n.nav.nav-tabs.padding-10 {\n  padding-left: 10px; }\n\n.tabs-left > .nav.nav-tabs.padding-10,\n.tabs-right > .nav.nav-tabs.padding-10 {\n  padding-left: 0;\n  padding-top: 10px; }\n\n.nav.nav-tabs.padding-8 {\n  padding-left: 8px; }\n\n.tabs-left > .nav.nav-tabs.padding-8,\n.tabs-right > .nav.nav-tabs.padding-8 {\n  padding-left: 0;\n  padding-top: 8px; }\n\n.nav.nav-tabs.padding-6 {\n  padding-left: 6px; }\n\n.tabs-left > .nav.nav-tabs.padding-6,\n.tabs-right > .nav.nav-tabs.padding-6 {\n  padding-left: 0;\n  padding-top: 6px; }\n\n.nav.nav-tabs.padding-4 {\n  padding-left: 4px; }\n\n.tabs-left > .nav.nav-tabs.padding-4,\n.tabs-right > .nav.nav-tabs.padding-4 {\n  padding-left: 0;\n  padding-top: 4px; }\n\n.nav.nav-tabs.padding-2 {\n  padding-left: 2px; }\n\n.tabs-left > .nav.nav-tabs.padding-2,\n.tabs-right > .nav.nav-tabs.padding-2 {\n  padding-left: 0;\n  padding-top: 2px; }\n\n.nav-tabs {\n  border-color: #C5D0DC;\n  margin-bottom: 0 !important;\n  position: relative;\n  top: 1px; }\n\n.nav-tabs > li > a {\n  padding: 7px 12px 8px; }\n\n.nav-tabs > li > a,\n.nav-tabs > li > a:focus {\n  border-radius: 0 !important;\n  border-color: #C5D0DC;\n  background-color: #F9F9F9;\n  color: #999;\n  margin-right: -1px;\n  line-height: 18px;\n  position: relative; }\n\n.nav-tabs > li > a:hover {\n  background-color: #FFF;\n  color: #4C8FBD;\n  border-color: #C5D0DC; }\n\n.nav-tabs > li > a:active,\n.nav-tabs > li > a:focus {\n  outline: 0 !important; }\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #576373;\n  border-color: #C5D0DC #C5D0DC transparent;\n  border-top: 2px solid #4C8FBD;\n  background-color: #FFF;\n  z-index: 1;\n  line-height: 18px;\n  margin-top: -1px;\n  box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, 0.15); }\n\n.tabs-below > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  margin-top: -1px;\n  border-color: #C5D0DC;\n  border-bottom-width: 0; }\n\n.tabs-below > .nav-tabs > li > a,\n.tabs-below > .nav-tabs > li > a:focus,\n.tabs-below > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC; }\n\n.tabs-below > .nav-tabs > li.active > a,\n.tabs-below > .nav-tabs > li.active > a:focus,\n.tabs-below > .nav-tabs > li.active > a:hover {\n  border-color: transparent #C5D0DC #C5D0DC;\n  border-top-width: 1px;\n  border-bottom: 2px solid #4C8FBD;\n  margin-top: 0;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15); }\n\n.tabs-left > .nav-tabs > li > a,\n.tabs-right > .nav-tabs > li > a {\n  min-width: 60px; }\n\n.tabs-left > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  border-color: #C5D0DC;\n  float: left; }\n\n.tabs-left > .nav-tabs > li {\n  float: none !important; }\n\n.tabs-left > .nav-tabs > li > a,\n.tabs-left > .nav-tabs > li > a:focus,\n.tabs-left > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC;\n  margin: 0 -1px 0 0; }\n\n.tabs-left > .nav-tabs > li.active > a,\n.tabs-left > .nav-tabs > li.active > a:focus,\n.tabs-left > .nav-tabs > li.active > a:hover {\n  border-color: #C5D0DC transparent #C5D0DC #C5D0DC;\n  border-top-width: 1px;\n  border-left: 2px solid #4C8FBD;\n  margin: 0 -1px;\n  box-shadow: -2px 0 3px 0 rgba(0, 0, 0, 0.15) !important; }\n\n.tabs-right > .nav-tabs {\n  top: auto;\n  margin-bottom: 0;\n  border-color: #C5D0DC;\n  float: right; }\n\n.tabs-right > .nav-tabs > li {\n  float: none !important; }\n\n.tabs-right > .nav-tabs > li > a,\n.tabs-right > .nav-tabs > li > a:focus,\n.tabs-right > .nav-tabs > li > a:hover {\n  border-color: #C5D0DC;\n  margin: 0 -1px; }\n\n.tabs-right > .nav-tabs > li.active > a,\n.tabs-right > .nav-tabs > li.active > a:focus,\n.tabs-right > .nav-tabs > li.active > a:hover {\n  border-color: #C5D0DC #C5D0DC #C5D0DC transparent;\n  border-top-width: 1px;\n  border-right: 2px solid #4C8FBD;\n  margin: 0 -2px 0 -1px;\n  box-shadow: 2px 0 3px 0 rgba(0, 0, 0, 0.15); }\n\n.nav-tabs > li > a .badge {\n  padding: 1px 5px;\n  line-height: 15px;\n  opacity: .75;\n  vertical-align: initial; }\n\n.nav-tabs > li > a .ace-icon {\n  opacity: .75; }\n\n.nav-tabs > li.active > a .ace-icon,\n.nav-tabs > li.active > a .badge {\n  opacity: 1; }\n\n.nav-tabs li .ace-icon {\n  width: 1.25em;\n  display: inline-block;\n  text-align: center; }\n\n.nav-tabs > li.open .dropdown-toggle {\n  background-color: #4F99C6;\n  border-color: #4F99C6;\n  color: #FFF; }\n\n.nav-tabs > li.open .dropdown-toggle > .ace-icon {\n  color: #FFF !important; }\n\n.tabs-left .tab-content,\n.tabs-right .tab-content {\n  overflow: auto; }\n\n.dark {\n  color: #333 !important; }\n\n.white {\n  color: #FFF !important; }\n\n.red {\n  color: #DD5A43 !important; }\n\n.red2 {\n  color: #E08374 !important; }\n\n.light-red {\n  color: #F77 !important; }\n\n.blue {\n  color: #17a2b8 !important; }\n\n.light-blue {\n  color: #93CBF9 !important; }\n\n.green {\n  color: #69AA46 !important; }\n\n.light-green {\n  color: #B0D877 !important; }\n\n.orange {\n  color: #FF892A !important; }\n\n.orange2 {\n  color: #FEB902 !important; }\n\n.light-orange {\n  color: #FCAC6F !important; }\n\n.purple {\n  color: #A069C3 !important; }\n\n.pink {\n  color: #C6699F !important; }\n\n.pink2 {\n  color: #D6487E !important; }\n\n.brown {\n  color: brown !important; }\n\n.grey {\n  color: #777 !important; }\n\n.main-row-container {\n  border: 1px solid #CCC;\n  background-color: #FFF;\n  padding: 10px 50px 10px 50px;\n  display: inline-block;\n  max-width: 100%;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);\n  margin-top: 80px; }\n\n.myPets {\n  height: 220px;\n  overflow: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3dvcmtzcGFjZS9Qcm95ZWN0b3MvZnJpZW5kbHktcGV0cy1wcm9qZWN0L2Zyb250LWVuZC9zcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFLLGdCQUFlLEVBQUE7O0FBRXBCO0VBQ0ksNkJBQTRCLEVBQUE7O0FBSWhDO0VBQ0ksY0FBYztFQUNkLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsY0FDSixFQUFBOztBQUVBO0VBQ0ksa0JBQ0osRUFBQTs7QUFFQTs7RUFFSSxtQkFBbUI7RUFDbkIsOEJBQ0osRUFBQTs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHNCQUNKLEVBQUE7O0FBRUE7RUFDSSx3QkFDSixFQUFBOztBQUVBO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFDSixFQUFBOztBQUVBO0VBQ0ksYUFDSixFQUFBOztBQUVBOztFQUVJLGdCQUNKLEVBQUE7O0FBRUE7RUFDSSx5QkFDSixFQUFBOztBQUVBO0VBQ0ksY0FBYztFQUNkLHlCQUF5QjtFQUN6Qiw2QkFDSixFQUFBOztBQUVBO0VBQ0ksOEJBQThCO0VBQzlCLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUdmLHNCQUFzQjtFQUN0QiwyQ0FBMEMsRUFBQTs7QUFHOUM7Ozs7RUFJSSw4QkFBOEI7RUFDOUIsMkJBQ0osRUFBQTs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2QkFDSixFQUFBOztBQUVBO0VBQ0ksa0NBQ0osRUFBQTs7QUFFQTtFQUNJLHlCQUNK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QUFFQTtFQUNJLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxhQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFDSixFQUFBOztBQUVBO0VBQ0ksYUFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQ0osRUFBQTs7QUFFQTtFQUNJLGFBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxhQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFDSixFQUFBOztBQUVBO0VBQ0ksYUFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQ0osRUFBQTs7QUFFQTtFQUNJLGFBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxhQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFDSixFQUFBOztBQUVBO0VBQ0ksYUFDSixFQUFBOztBQUVBO0VBQ0ksaUJBQ0osRUFBQTs7QUFFQTtFQUNJLGFBQ0osRUFBQTs7QUFFQTtFQUNJLGlCQUNKLEVBQUE7O0FBRUE7RUFDSSxhQUNKLEVBQUE7O0FBRUE7RUFDSSxnQkFDSixFQUFBOztBQUVBO0VBQ0ksWUFDSixFQUFBOztBQUVBO0VBQ0ksZ0JBQ0osRUFBQTs7QUFFQTtFQUNJLFlBQ0osRUFBQTs7QUFFQTtFQUNJLGdCQUNKLEVBQUE7O0FBRUE7RUFDSSxZQUNKLEVBQUE7O0FBRUE7O0VBRUksWUFDSixFQUFBOztBQUVBOztFQUVJLFVBQ0osRUFBQTs7QUFHQTtFQUNJLGtCQUNKLEVBQUE7O0FBRUE7O0VBRUksZUFBZTtFQUNmLGlCQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFDSixFQUFBOztBQUVBOztFQUVJLGVBQWU7RUFDZixpQkFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQ0osRUFBQTs7QUFFQTs7RUFFSSxlQUFlO0VBQ2YsaUJBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUNKLEVBQUE7O0FBRUE7O0VBRUksZUFBZTtFQUNmLGlCQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFDSixFQUFBOztBQUVBOztFQUVJLGVBQWU7RUFDZixpQkFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQ0osRUFBQTs7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QjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLHVCQUFzQixFQUFBOztBQUcxQjtFQUNJLHNCQUFxQixFQUFBOztBQUt6QjtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBR2Ysc0JBQXNCO0VBQ3RCLDJDQUEwQztFQUMxQyxnQkFBZ0IsRUFBQTs7QUFPbEI7RUFDRSxhQUFhO0VBQ2IsZ0JBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keXttYXJnaW4tdG9wOjIwcHg7fVxuXG4uYWxpZ24tY2VudGVyLCAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG5cbi5wcm9maWxlLXVzZXItaW5mbyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDk4JTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjRweCk7XG4gICAgbWFyZ2luOiAwIGF1dG9cbn1cblxuLnByb2ZpbGUtaW5mby1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvd1xufVxuXG4ucHJvZmlsZS1pbmZvLW5hbWUsXG4ucHJvZmlsZS1pbmZvLXZhbHVlIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI0Q1RTRGMVxufVxuXG4ucHJvZmlsZS1pbmZvLW5hbWUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4IDZweCA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzY2N0U5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxufVxuXG4ucHJvZmlsZS1pbmZvLXZhbHVlIHtcbiAgICBwYWRkaW5nOiA2cHggNHB4IDZweCA2cHhcbn1cblxuLnByb2ZpbGUtaW5mby12YWx1ZT5zcGFuK3NwYW46YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY29udGVudDogXCIsXCI7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRlxufVxuXG4ucHJvZmlsZS1pbmZvLXZhbHVlPnNwYW4rc3Bhbi5lZGl0YWJsZS1jb250YWluZXI6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5wcm9maWxlLWluZm8tcm93OmZpcnN0LWNoaWxkIC5wcm9maWxlLWluZm8tbmFtZSxcbi5wcm9maWxlLWluZm8tcm93OmZpcnN0LWNoaWxkIC5wcm9maWxlLWluZm8tdmFsdWUge1xuICAgIGJvcmRlci10b3A6IG5vbmVcbn1cblxuLnByb2ZpbGUtdXNlci1pbmZvLXN0cmlwZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0VCRjdcbn1cblxuLnByb2ZpbGUtdXNlci1pbmZvLXN0cmlwZWQgLnByb2ZpbGUtaW5mby1uYW1lIHtcbiAgICBjb2xvcjogIzMzNjE5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURGM0Y0O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRjdGQkZGXG59XG5cbi5wcm9maWxlLXVzZXItaW5mby1zdHJpcGVkIC5wcm9maWxlLWluZm8tdmFsdWUge1xuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI0RDRUJGNztcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHhcbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4xNSlcbn1cblxuLmRkLWVtcHR5LFxuLmRkLWhhbmRsZSxcbi5kZC1wbGFjZWhvbGRlcixcbi5kZDItY29udGVudCB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveFxufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSB7XG4gICAgcGFkZGluZzogMTBweCA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjRDBEOEUwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCAjRkZGO1xuICAgIGJvcmRlci1yaWdodDogMXB4IGRvdHRlZCAjRkZGXG59XG5cbi5wcm9maWxlLWFjdGl2aXR5OmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkIHRyYW5zcGFyZW50XG59XG5cbi5wcm9maWxlLWFjdGl2aXR5OmZpcnN0LWNoaWxkOmhvdmVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjRDBEOEUwXG59XG5cbi5wcm9maWxlLWFjdGl2aXR5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGOUZEO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkICNEMEQ4RTA7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkICNEMEQ4RTBcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHkgaW1nIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzlENkU1O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBib3gtc2hhZG93OiBub25lXG59XG5cbi5wcm9maWxlLWFjdGl2aXR5IC50aHVtYmljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NEFCRDc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lIWltcG9ydGFudFxufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSAudGltZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIGNvbG9yOiAjNzc3XG59XG5cbi5wcm9maWxlLWFjdGl2aXR5IGEudXNlciB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzk1ODVCRlxufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSAudG9vbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTJweDtcbiAgICBib3R0b206IDhweDtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5wcm9maWxlLWFjdGl2aXR5OmhvdmVyIC50b29scyB7XG4gICAgZGlzcGxheTogYmxvY2tcbn1cblxuLnVzZXItcHJvZmlsZSAuYWNlLXRodW1ibmFpbHMgbGkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbjogNnB4XG59XG5cbi51c2VyLXByb2ZpbGUgLmFjZS10aHVtYm5haWxzIGxpIC50b29scyB7XG4gICAgbGVmdDogM3B4O1xuICAgIHJpZ2h0OiAzcHhcbn1cblxuLnVzZXItcHJvZmlsZSAuYWNlLXRodW1ibmFpbHMgbGk6aG92ZXIgLnRvb2xzIHtcbiAgICBib3R0b206IDNweFxufVxuXG4udXNlci10aXRsZS1sYWJlbDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG59XG5cbi51c2VyLXRpdGxlLWxhYmVsKy5kcm9wZG93bi1tZW51IHtcbiAgICBtYXJnaW4tbGVmdDogLTEycHhcbn1cblxuLnByb2ZpbGUtY29udGFjdC1saW5rcyB7XG4gICAgcGFkZGluZzogNHB4IDJweCA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTJFNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGQUZDXG59XG5cbi5idG4tbGluazpob3ZlciAuYWNlLWljb24ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnRcbn1cblxuLnByb2ZpbGUtc29jaWFsLWxpbmtzPmE6aG92ZXI+LmFjZS1pY29uLFxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAubmFtZSBhOmhvdmVyIC5hY2UtaWNvbixcbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnRvb2xzPmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxufVxuXG4ucHJvZmlsZS1zb2NpYWwtbGlua3M+YSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMCAxcHhcbn1cblxuLnByb2ZpbGUtc2tpbGxzIC5wcm9ncmVzcyB7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxufVxuXG4ucHJvZmlsZS1za2lsbHMgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIHBhZGRpbmc6IDAgOHB4XG59XG5cbi5wcm9maWxlLXVzZXJzIC51c2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogYXV0b1xufVxuXG4ucHJvZmlsZS11c2VycyAudXNlciBpbWcge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBQUE7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjFzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXNcbn1cblxuLnByb2ZpbGUtdXNlcnMgLnVzZXIgaW1nOmhvdmVyIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMzKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zMylcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDhweCAyNHB4XG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLmJvZHkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDhweCAwIDBcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAucG9wb3ZlciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogMDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgdG9wOiAtNSU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgbGluZWFyIDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAuMnMsIG1heC1oZWlnaHQgMHMgbGluZWFyIC4ycywgbWF4LXdpZHRoIDBzIGxpbmVhciAuMnMsIG1pbi13aWR0aCAwcyBsaW5lYXIgLjJzO1xuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGxpbmVhciAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjJzLCBtYXgtaGVpZ2h0IDBzIGxpbmVhciAuMnMsIG1heC13aWR0aCAwcyBsaW5lYXIgLjJzLCBtaW4td2lkdGggMHMgbGluZWFyIC4ycztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBsaW5lYXIgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIC4ycywgbWF4LWhlaWdodCAwcyBsaW5lYXIgLjJzLCBtYXgtd2lkdGggMHMgbGluZWFyIC4ycywgbWluLXdpZHRoIDBzIGxpbmVhciAuMnNcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAucG9wb3Zlci5yaWdodCB7XG4gICAgbGVmdDogMTAwJTtcbiAgICByaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5wb3BvdmVyLmxlZnQge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2tcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdj46Zmlyc3QtY2hpbGQ6aG92ZXIgLnBvcG92ZXIge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiAxMDYwO1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgLW8tdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHNcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAudG9vbHMge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMnB4XG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnRvb2xzPmEge1xuICAgIG1hcmdpbjogMCAycHhcbn1cblxuLnVzZXItc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDExcHg7XG4gICAgaGVpZ2h0OiAxMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI0FBQTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHhcbn1cblxuLnVzZXItc3RhdHVzLnN0YXR1cy1vbmxpbmUge1xuICAgIGJvcmRlci1jb2xvcjogIzhBQzE2Q1xufVxuXG4udXNlci1zdGF0dXMuc3RhdHVzLWJ1c3kge1xuICAgIGJvcmRlci1jb2xvcjogI0UwN0Y2OVxufVxuXG4udXNlci1zdGF0dXMuc3RhdHVzLWlkbGUge1xuICAgIGJvcmRlci1jb2xvcjogI0ZGQjc1MlxufVxuXG4udGFiLWNvbnRlbnQucHJvZmlsZS1lZGl0LXRhYi1jb250ZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICAgIHBhZGRpbmc6IDhweCAzMnB4IDMycHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCkge1xuICAgIC5wcm9maWxlLWluZm8tbmFtZSB7XG4gICAgICAgIHdpZHRoOiA4MHB4XG4gICAgfVxuICAgIC5wcm9maWxlLXVzZXItaW5mby1zdHJpcGVkIC5wcm9maWxlLWluZm8tbmFtZSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNnB4IDRweCA2cHggMTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICB9XG4gICAgLnByb2ZpbGUtdXNlci1pbmZvLXN0cmlwZWQgLnByb2ZpbGUtaW5mby12YWx1ZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgIH1cbiAgICAudXNlci1wcm9maWxlIC5tZW1iZXJkaXYge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXG4gICAgfVxufVxuXG5cblxuLml0ZW1kaXYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICBtaW4taGVpZ2h0OiA2NnB4XG59XG5cbi5pdGVtZGl2Pi51c2VyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBcbn1cblxuLml0ZW1kaXY+LnVzZXI+LmltZyxcbi5pdGVtZGl2Pi51c2VyPmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTI5M0M0O1xuICAgIG1heC13aWR0aDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLml0ZW1kaXY+LnVzZXI+LmltZyB7XG4gICAgcGFkZGluZzogMnB4XG59XG5cbi5pdGVtZGl2Pi5ib2R5IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5pdGVtZGl2Pi5ib2R5Pi50aW1lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDlweDtcbiAgICB0b3A6IDBcbn1cblxuLml0ZW1kaXY+LmJvZHk+LnRpbWUgLmFjZS1pY29uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG4uaXRlbWRpdj4uYm9keT4ubmFtZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM5OTlcbn1cblxuLml0ZW1kaXY+LmJvZHk+Lm5hbWU+YiB7XG4gICAgY29sb3I6ICM3Nzdcbn1cblxuLml0ZW1kaXY+LmJvZHk+LnRleHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE5cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgZm9udC1zaXplOiAxM3B4XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdjpiZWZvcmUsXG4uaXRlbWRpdi5kaWFsb2dkaXY+LmJvZHk6YmVmb3JlLFxuLml0ZW1kaXY+LmJvZHk+LnRleHQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlXG59XG5cbi5pdGVtZGl2Pi5ib2R5Pi50ZXh0OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBmb250LXNpemU6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBsZWZ0OiAxNnB4O1xuICAgIHJpZ2h0OiAtMTJweDtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNEVDRjNcbn1cblxuLml0ZW1kaXY+LmJvZHk+LnRleHQ+LmFjZS1pY29uOmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvcjogI0RDRTNFRDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweFxufVxuXG4uaXRlbWRpdjpsYXN0LWNoaWxkPi5ib2R5Pi50ZXh0IHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwXG59XG5cbi5pdGVtZGl2Omxhc3QtY2hpbGQ+LmJvZHk+LnRleHQ6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweFxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDE5cHg7XG4gICAgd2lkdGg6IDNweDtcbiAgICBtYXgtd2lkdGg6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFNkVEO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEN0RCREQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDFweFxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDBcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2Omxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5pdGVtZGl2LmRpYWxvZ2Rpdj4udXNlcj5pbWcge1xuICAgIGJvcmRlci1jb2xvcjogI0M5RDZFNVxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY+LmJvZHkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREU0RUQ7XG4gICAgcGFkZGluZzogNXB4IDhweCA4cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFweFxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY+LmJvZHk6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAtN3B4O1xuICAgIHRvcDogMTFweDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNEREU0RUQ7XG4gICAgYm9yZGVyLXdpZHRoOiAycHggMCAwIDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpXG59XG5cbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keT4udGltZSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBmbG9hdDogcmlnaHRcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2Pi5ib2R5Pi50ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDBcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2Pi5ib2R5Pi50ZXh0OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdiAudG9vbHRpcC1pbm5lciB7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsXG59XG5cbi5pdGVtZGl2Lm1lbWJlcmRpdiB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXJnaW46IDNweCAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEU4XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSB7XG4gICAgLml0ZW1kaXYubWVtYmVyZGl2IHtcbiAgICAgICAgbWF4LXdpZHRoOiA1MCVcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgLml0ZW1kaXYubWVtYmVyZGl2IHtcbiAgICAgICAgbWluLXdpZHRoOiAzMy4zMzMlXG4gICAgfVxufVxuXG4uaXRlbWRpdi5tZW1iZXJkaXY+LnVzZXI+aW1nIHtcbiAgICBib3JkZXItY29sb3I6ICNEQ0UzRURcbn1cblxuLml0ZW1kaXYubWVtYmVyZGl2Pi5ib2R5Pi50aW1lIHtcbiAgICBwb3NpdGlvbjogc3RhdGljXG59XG5cbi5pdGVtZGl2Lm1lbWJlcmRpdj4uYm9keT4ubmFtZSB7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBcbn1cblxuLml0ZW1kaXYubWVtYmVyZGl2Pi5ib2R5Pi5uYW1lPmEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDE4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGxcbn1cblxuLml0ZW1kaXYgLnRvb2xzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4uaXRlbS1saXN0PmxpPi5jaGVja2JveCxcbi5pdGVtLWxpc3Q+bGk+bGFiZWwuaW5saW5lLFxuLml0ZW1kaXY6aG92ZXIgLnRvb2xzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLml0ZW1kaXYgLnRvb2xzIC5idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gICAgbWFyZ2luOiAxcHggMFxufVxuXG4uaXRlbWRpdiAuYm9keSAudG9vbHMge1xuICAgIGJvdHRvbTogNHB4XG59XG5cbi5pdGVtZGl2LmNvbW1lbnRkaXYgLnRvb2xzIHtcbiAgICByaWdodDogOXB4XG59XG5cbi5pdGVtLWxpc3Qge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmVcbn1cblxuLml0ZW0tbGlzdD5saSB7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLml0ZW0tbGlzdD5saS5zZWxlY3RlZCB7XG4gICAgY29sb3I6ICM4MDkwQTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjlGQ1xufVxuXG4uaXRlbS1saXN0PmxpLnNlbGVjdGVkIC5sYmwsXG4uaXRlbS1saXN0PmxpLnNlbGVjdGVkIGxhYmVsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogIzgwOTBBMFxufVxuXG4uaXRlbS1saXN0PmxpIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEzcHhcbn1cblxuLml0ZW0tbGlzdD5saSAucGVyY2VudGFnZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICM3Nzdcbn1cblxuXG4uYWNlLXRodW1ibmFpbHM+bGksXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLmFjZS10aHVtYm5haWxzIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpIC50YWdzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0XG59XG5cbi5hY2UtdGh1bWJuYWlscz5saSAudGFncz4ubGFiZWwtaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAuOTI7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkyKTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDFweCAwIDA7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgdGV4dC1hbGlnbjogbGVmdFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzLFxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZD4udGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NSlcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpIC50YWdzPi5sYWJlbC1ob2xkZXI6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMClcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scyB7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAtMzBweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Vcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scy50b29scy1yaWdodCB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogLTMwcHhcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scy50b29scy1ib3R0b20ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IC0zMHB4XG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHMudG9vbHMtdG9wIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGJvdHRvbTogYXV0b1xufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk6aG92ZXI+LnRvb2xzIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saTpob3Zlcj4udG9vbHMudG9vbHMtYm90dG9tIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saTpob3Zlcj4udG9vbHMudG9vbHMtdG9wIHtcbiAgICBib3R0b206IGF1dG87XG4gICAgdG9wOiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saTpob3Zlcj4udG9vbHMudG9vbHMtcmlnaHQge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi5pbi50b29scyB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LmluLnRvb2xzLnRvb2xzLWJvdHRvbSB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LmluLnRvb2xzLnRvb2xzLXRvcCB7XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIHRvcDogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LmluLnRvb2xzLnRvb2xzLXJpZ2h0IHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHM+YSxcbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQgLmlubmVyIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBwYWRkaW5nOiAwIDRweFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzPmE6aG92ZXIsXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkIC5pbm5lciBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNDOUUyRUFcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpIC50b29scy50b29scy1ib3R0b20+YSxcbi5hY2UtdGh1bWJuYWlscz5saSAudG9vbHMudG9vbHMtdG9wPmEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkPi50ZXh0IHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZVxufVxuXG4uZGlhbG9ncyxcbi5pdGVtZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZD4udGV4dDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZD4udGV4dD4uaW5uZXIge1xuICAgIHBhZGRpbmc6IDRweCAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXgtd2lkdGg6IDkwJVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk6aG92ZXI+OmZpcnN0LWNoaWxkPi50ZXh0IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCkge1xuICAgIC5hY2UtdGh1bWJuYWlscyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cbiAgICAuYWNlLXRodW1ibmFpbHM+bGkge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgfVxufVxuXG5cbi50YWItY29udGVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M1RDBEQztcbiAgICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi50YWItY29udGVudC5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwXG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMnB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTMyIHtcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTMyIHtcbiAgICBwYWRkaW5nOiAzMnB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTMwIHtcbiAgICBwYWRkaW5nOiAzMHB4IDIzcHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTMwIHtcbiAgICBwYWRkaW5nOiAzMHB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTI4IHtcbiAgICBwYWRkaW5nOiAyOHB4IDIxcHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTI4IHtcbiAgICBwYWRkaW5nOiAyOHB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTI2IHtcbiAgICBwYWRkaW5nOiAyNnB4IDIwcHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTI2IHtcbiAgICBwYWRkaW5nOiAyNnB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTI0IHtcbiAgICBwYWRkaW5nOiAyNHB4IDE4cHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTI0IHtcbiAgICBwYWRkaW5nOiAyNHB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTIyIHtcbiAgICBwYWRkaW5nOiAyMnB4IDE3cHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTIyIHtcbiAgICBwYWRkaW5nOiAyMnB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTIwIHtcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTIwIHtcbiAgICBwYWRkaW5nOiAyMHB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTE4IHtcbiAgICBwYWRkaW5nOiAxOHB4IDE0cHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTE4IHtcbiAgICBwYWRkaW5nOiAxOHB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTE2IHtcbiAgICBwYWRkaW5nOiAxNnB4IDEycHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTE2IHtcbiAgICBwYWRkaW5nOiAxNnB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTE0IHtcbiAgICBwYWRkaW5nOiAxNHB4IDExcHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTE0IHtcbiAgICBwYWRkaW5nOiAxNHB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTEyIHtcbiAgICBwYWRkaW5nOiAxMnB4IDlweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMTIge1xuICAgIHBhZGRpbmc6IDEycHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctMTAge1xuICAgIHBhZGRpbmc6IDEwcHggOHB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy0xMCB7XG4gICAgcGFkZGluZzogMTBweFxufVxuXG4udGFiLWNvbnRlbnQucGFkZGluZy04IHtcbiAgICBwYWRkaW5nOiA4cHggNnB4XG59XG5cbi50YWItY29udGVudC5uby1ib3JkZXIucGFkZGluZy04IHtcbiAgICBwYWRkaW5nOiA4cHhcbn1cblxuLnRhYi1jb250ZW50LnBhZGRpbmctNiB7XG4gICAgcGFkZGluZzogNnB4IDVweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctNiB7XG4gICAgcGFkZGluZzogNnB4XG59XG5cbi50YWItY29udGVudC5wYWRkaW5nLTQge1xuICAgIHBhZGRpbmc6IDRweCAzcHhcbn1cblxuLnRhYi1jb250ZW50Lm5vLWJvcmRlci5wYWRkaW5nLTQge1xuICAgIHBhZGRpbmc6IDRweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMixcbi50YWItY29udGVudC5wYWRkaW5nLTIge1xuICAgIHBhZGRpbmc6IDJweFxufVxuXG4udGFiLWNvbnRlbnQubm8tYm9yZGVyLnBhZGRpbmctMCxcbi50YWItY29udGVudC5wYWRkaW5nLTAge1xuICAgIHBhZGRpbmc6IDBcbn1cblxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjgge1xuICAgIHBhZGRpbmctbGVmdDogMjhweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yOCxcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAyOHB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0yNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTI2LFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTI2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDI2cHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTI0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjQsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMjRweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMjIge1xuICAgIHBhZGRpbmctbGVmdDogMjJweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yMixcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAyMnB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0yMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTIwLFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTIwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDIwcHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTE4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTgsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTgge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMThweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTYge1xuICAgIHBhZGRpbmctbGVmdDogMTZweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xNixcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0xNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTE0LFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTE0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDE0cHhcbn1cblxuLm5hdi5uYXYtdGFicy5wYWRkaW5nLTEyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHhcbn1cblxuLnRhYnMtbGVmdD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTIsXG4udGFicy1yaWdodD4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTIge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMTJweFxufVxuXG4ubmF2Lm5hdi10YWJzLnBhZGRpbmctMTAge1xuICAgIHBhZGRpbmctbGVmdDogMTBweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xMCxcbi50YWJzLXJpZ2h0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy04IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy04LFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTgge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogOHB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy02IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy02LFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTYge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogNnB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy00LFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogNHB4XG59XG5cbi5uYXYubmF2LXRhYnMucGFkZGluZy0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweFxufVxuXG4udGFicy1sZWZ0Pi5uYXYubmF2LXRhYnMucGFkZGluZy0yLFxuLnRhYnMtcmlnaHQ+Lm5hdi5uYXYtdGFicy5wYWRkaW5nLTIge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMnB4XG59XG5cbi5uYXYtdGFicyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDO1xuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweFxufVxuXG4ubmF2LXRhYnM+bGk+YSB7XG4gICAgcGFkZGluZzogN3B4IDEycHggOHB4XG59XG5cbi5uYXYtdGFicz5saT5hLFxuLm5hdi10YWJzPmxpPmE6Zm9jdXMge1xuICAgIGJvcmRlci1yYWRpdXM6IDAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLm5hdi10YWJzPmxpPmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgY29sb3I6ICM0QzhGQkQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDXG59XG5cbi5uYXYtdGFicz5saT5hOmFjdGl2ZSxcbi5uYXYtdGFicz5saT5hOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwIWltcG9ydGFudFxufVxuXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmEsXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMsXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6aG92ZXIge1xuICAgIGNvbG9yOiAjNTc2MzczO1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQyAjQzVEMERDIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNEM4RkJEO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgei1pbmRleDogMTtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGJveC1zaGFkb3c6IDAgLTJweCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xNSlcbn1cblxuLnRhYnMtYmVsb3c+Lm5hdi10YWJzIHtcbiAgICB0b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwXG59XG5cbi50YWJzLWJlbG93Pi5uYXYtdGFicz5saT5hLFxuLnRhYnMtYmVsb3c+Lm5hdi10YWJzPmxpPmE6Zm9jdXMsXG4udGFicy1iZWxvdz4ubmF2LXRhYnM+bGk+YTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzVEMERDXG59XG5cbi50YWJzLWJlbG93Pi5uYXYtdGFicz5saS5hY3RpdmU+YSxcbi50YWJzLWJlbG93Pi5uYXYtdGFicz5saS5hY3RpdmU+YTpmb2N1cyxcbi50YWJzLWJlbG93Pi5uYXYtdGFicz5saS5hY3RpdmU+YTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjQzVEMERDICNDNUQwREM7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNEM4RkJEO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTUpXG59XG5cbi50YWJzLWxlZnQ+Lm5hdi10YWJzPmxpPmEsXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGk+YSB7XG4gICAgbWluLXdpZHRoOiA2MHB4XG59XG5cbi50YWJzLWxlZnQ+Lm5hdi10YWJzIHtcbiAgICB0b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREM7XG4gICAgZmxvYXQ6IGxlZnRcbn1cblxuLnRhYnMtbGVmdD4ubmF2LXRhYnM+bGkge1xuICAgIGZsb2F0OiBub25lIWltcG9ydGFudFxufVxuXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saT5hLFxuLnRhYnMtbGVmdD4ubmF2LXRhYnM+bGk+YTpmb2N1cyxcbi50YWJzLWxlZnQ+Lm5hdi10YWJzPmxpPmE6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcbiAgICBtYXJnaW46IDAgLTFweCAwIDBcbn1cblxuLnRhYnMtbGVmdD4ubmF2LXRhYnM+bGkuYWN0aXZlPmEsXG4udGFicy1sZWZ0Pi5uYXYtdGFicz5saS5hY3RpdmU+YTpmb2N1cyxcbi50YWJzLWxlZnQ+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREMgdHJhbnNwYXJlbnQgI0M1RDBEQyAjQzVEMERDO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0QzhGQkQ7XG4gICAgbWFyZ2luOiAwIC0xcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMnB4IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTUpIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAtMnB4IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTUpIWltcG9ydGFudFxufVxuXG4udGFicy1yaWdodD4ubmF2LXRhYnMge1xuICAgIHRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJvcmRlci1jb2xvcjogI0M1RDBEQztcbiAgICBmbG9hdDogcmlnaHRcbn1cblxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzPmxpIHtcbiAgICBmbG9hdDogbm9uZSFpbXBvcnRhbnRcbn1cblxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzPmxpPmEsXG4udGFicy1yaWdodD4ubmF2LXRhYnM+bGk+YTpmb2N1cyxcbi50YWJzLXJpZ2h0Pi5uYXYtdGFicz5saT5hOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREM7XG4gICAgbWFyZ2luOiAwIC0xcHhcbn1cblxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hLFxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hOmZvY3VzLFxuLnRhYnMtcmlnaHQ+Lm5hdi10YWJzPmxpLmFjdGl2ZT5hOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICNDNUQwREMgI0M1RDBEQyAjQzVEMERDIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNEM4RkJEO1xuICAgIG1hcmdpbjogMCAtMnB4IDAgLTFweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAwIDNweCAwIHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgICBib3gtc2hhZG93OiAycHggMCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xNSlcbn1cblxuLm5hdi10YWJzPmxpPmEgLmJhZGdlIHtcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIG9wYWNpdHk6IC43NTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbFxufVxuXG4ubmF2LXRhYnM+bGk+YSAuYWNlLWljb24ge1xuICAgIG9wYWNpdHk6IC43NVxufVxuXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmEgLmFjZS1pY29uLFxuLm5hdi10YWJzPmxpLmFjdGl2ZT5hIC5iYWRnZSB7XG4gICAgb3BhY2l0eTogMVxufVxuXG4ubmF2LXRhYnMgbGkgLmFjZS1pY29uIHtcbiAgICB3aWR0aDogMS4yNWVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLm5hdi10YWJzPmxpLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGOTlDNjtcbiAgICBib3JkZXItY29sb3I6ICM0Rjk5QzY7XG4gICAgY29sb3I6ICNGRkZcbn1cblxuLm5hdi10YWJzPmxpLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZT4uYWNlLWljb24ge1xuICAgIGNvbG9yOiAjRkZGIWltcG9ydGFudFxufVxuXG4udGFicy1sZWZ0IC50YWItY29udGVudCxcbi50YWJzLXJpZ2h0IC50YWItY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGF1dG9cbn1cblxuLmRhcmsge1xuICAgIGNvbG9yOiAjMzMzIWltcG9ydGFudFxufVxuXG4ud2hpdGUge1xuICAgIGNvbG9yOiAjRkZGIWltcG9ydGFudFxufVxuXG4ucmVkIHtcbiAgICBjb2xvcjogI0RENUE0MyFpbXBvcnRhbnRcbn1cblxuLnJlZDIge1xuICAgIGNvbG9yOiAjRTA4Mzc0IWltcG9ydGFudFxufVxuXG4ubGlnaHQtcmVkIHtcbiAgICBjb2xvcjogI0Y3NyFpbXBvcnRhbnRcbn1cblxuLmJsdWUge1xuICAgIGNvbG9yOiAjMTdhMmI4IWltcG9ydGFudFxufVxuXG5cbi5saWdodC1ibHVlIHtcbiAgICBjb2xvcjogIzkzQ0JGOSFpbXBvcnRhbnRcbn1cblxuLmdyZWVuIHtcbiAgICBjb2xvcjogIzY5QUE0NiFpbXBvcnRhbnRcbn1cblxuLmxpZ2h0LWdyZWVuIHtcbiAgICBjb2xvcjogI0IwRDg3NyFpbXBvcnRhbnRcbn1cblxuLm9yYW5nZSB7XG4gICAgY29sb3I6ICNGRjg5MkEhaW1wb3J0YW50XG59XG5cbi5vcmFuZ2UyIHtcbiAgICBjb2xvcjogI0ZFQjkwMiFpbXBvcnRhbnRcbn1cblxuLmxpZ2h0LW9yYW5nZSB7XG4gICAgY29sb3I6ICNGQ0FDNkYhaW1wb3J0YW50XG59XG5cbi5wdXJwbGUge1xuICAgIGNvbG9yOiAjQTA2OUMzIWltcG9ydGFudFxufVxuXG4ucGluayB7XG4gICAgY29sb3I6ICNDNjY5OUYhaW1wb3J0YW50XG59XG5cbi5waW5rMiB7XG4gICAgY29sb3I6ICNENjQ4N0UhaW1wb3J0YW50XG59XG5cbi5icm93biB7XG4gICAgY29sb3I6IGJyb3duIWltcG9ydGFudFxufVxuXG4uZ3JleSB7XG4gICAgY29sb3I6ICM3NzchaW1wb3J0YW50XG59XG5cblxuXG4ubWFpbi1yb3ctY29udGFpbmVye1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweCA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLnNvY2lhbC1yb3d7XG4gIC8vZGlzcGxheTogZmxleDtcbn1cblxuLm15UGV0c3tcbiAgaGVpZ2h0OiAyMjBweDtcbiAgb3ZlcmZsb3c6c2Nyb2xsO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserComponent = /** @class */ (function () {
    function UserComponent(_user, _router, _actRoute) {
        this._user = _user;
        this._router = _router;
        this._actRoute = _actRoute;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._actRoute.paramMap.subscribe(function (params) {
            var id = params.get("user_id");
            console.log(id);
            _this._user.getUserDetails(id);
        });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
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
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/Desktop/workspace/Proyectos/friendly-pets-project/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map