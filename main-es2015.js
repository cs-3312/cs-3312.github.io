(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main content container -->\n<div class='jumbotron'>\n  <div class='container'>\n      <div class='row'>\n          <div class='col-sm-8 offset-sm-2'>\n              <router-outlet></router-outlet>\n          </div>\n      </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-learn/alphabet-learn.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-learn/alphabet-learn.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n\t        <button mat-icon-button class='back-button' id='back' (click)='prev($event)' style=\"z-index: 99; cursor: pointer\"></button>\n        \t<button mat-icon-button class='after-button' id='forward' (click)='next($event)' style=\"z-index: 99; cursor: pointer\"></button>\n        \t<div class='letter' [ngClass]=\"{'animateLetter': letterAnimate}\" (click)='playAudio()'>{{letter.letter}}</div>\n        </div>\n    </div>\n\n\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='playAudio()'></button>\n        <button mat-icon-button class='icon bottom' id='quiz' routerLink='/alphabet-quiz'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-quiz/alphabet-quiz.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-quiz/alphabet-quiz.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <div class='letter' [ngClass]=\"{'animateLetter1': letterAnimate1}\" (click)='check(ex1)'>{{ex1.letter}}\n                </div>\n                <div class='letter3' [ngClass]=\"{'animateLetter3': letterAnimate3}\" (click)='check(ex3)'>{{ex3.letter}}\n                </div>\n            </div>\n        </div>\n\n        <div class='column'>\n            <div class='letter2' [ngClass]=\"{'animateLetter2': letterAnimate2}\" (click)='check(ex2)'>{{ex2.letter}}\n            </div>\n            <div class='letter4' [ngClass]=\"{'animateLetter4': letterAnimate4}\" (click)='check(ex4)'>{{ex4.letter}}\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='playAudio()'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink=\"/coins\"></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coins/coins.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coins/coins.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <img src=\"/assets/img/rewards/armored-car.png\" *ngFor=\"let i of numberToIterable(cars)\"\n                     style=\"height: 20vh\"/>\n            </div>\n            <div class='row'>\n                <img src=\"/assets/img/rewards/money_bag_new.png\" *ngFor=\"let i of numberToIterable(bags)\"\n                     style=\"height: 15vh\"/>\n            </div>\n            <div class='row'>\n                <img src=\"/assets/img/rewards/stack_of_coins_5.png\" *ngFor=\"let i of numberToIterable(stacks)\"\n                     style=\"height: 11vh\"/>\n            </div>\n            <div class='row'>\n                <img src=\"/assets/img/rewards/coin_gold_new.png\" *ngFor=\"let i of numberToIterable(golds)\"\n                     style=\"height: 5vh\"/>\n            </div>\n            <div class='row'>\n                <img src=\"/assets/img/rewards/silver_coin_new.png\" *ngFor=\"let i of numberToIterable(silvers)\"\n                     style=\"height: 5vh\"/>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grade-levels/grade-levels.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grade-levels/grade-levels.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='grade_level' id='pre_k' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list': 'kindergarten'}\"></button>\n                <button mat-icon-button class='grade_level' id='kindergarten' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'kindergarten'}\"></button>\n\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='no-click' id='first' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'phoneme'}\"></button>\n                <button mat-icon-button class='no-click' id='second' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'phoneme'}\"></button>\n                <button mat-icon-button class='no-click' id='third' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'phoneme'}\"></button>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' routerLink='/'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <button mat-icon-button class='phonics_logo' id='phonics' (mouseenter)='playAudio($event)' routerLink='/phoneme-categories'></button>\n            <button mat-icon-button class='alphabet_logo' id='alphabet' (mouseenter)='playAudio($event)' [routerLink]=\"['list-select']\" [queryParams]=\"{'list' : 'alphabet'}\"></button>\n        </div>\n        <div class='row'>\n            <div class='column second'>\n                <button mat-icon-button class='grade_level' id='grade' (mouseenter)='playAudio($event)' routerLink='/grade-levels'></button>\n                <!-- <button mat-icon-button class='secret_stuff' id='secret' (mouseenter)='playAudio($event)'></button> -->\n            </div>\n        </div>\n    </div>\n    <div id='side-menu'></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-select/list-select.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-select/list-select.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class=\"cardList\">\n                <app-card class=\"cardListItem {{ setClass(item) }}\" id='{{ setID(item) }}' (click)='select(item)' *ngFor=\"let item of data\" >\n                    <p>{{ getDisplay(item)}} </p>\n                    <img src='{{ getImage(item) }}' class='word-image'>\n                </app-card>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='playAudio()'></button>\n        <button mat-icon-button class='icon bottom' id='quiz' (click)='quiz(item)'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-categories/phoneme-categories.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-categories/phoneme-categories.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='consonants' (mouseenter)='playAudio($event)' [routerLink]=\"['/list-select']\" [queryParams]=\"{'list': 'consonants'}\"></button>\n                <button mat-icon-button class='category_button' id='vowel_consonant_blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'vowelConsonants'}\"></button>\n                <button mat-icon-button class='category_button' id='vowels' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'vowels'}\"></button>\n            </div>\n            <div class='row'>\n                <button mat-icon-button class='category_button' id='consonant_blends' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'consonantBlends'}\"></button>\n                <button mat-icon-button class='category_button' id='all' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'phoneme'}\"></button>\n                <button mat-icon-button class='category_button' id='vowel_pairs' (mouseenter)='playAudio($event)' [routerLink]='[\"/list-select\"]' [queryParams]=\"{'list': 'vowelPairs'}\"></button>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' routerLink='/'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-learn/phoneme-learn.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-learn/phoneme-learn.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <button mat-icon-button class='back-button' id='back' (click)='prev($event)' style=\"z-index: 99; cursor: pointer\"></button>\n        <button mat-icon-button class='after-button' id='forward' (click)='next($event)' style=\"z-index: 99; cursor: pointer\"></button>\n\t \t<div class='letter' [ngClass]=\"{'animate-one': oneAnimate, 'animate-two': twoAnimate, 'animate-three': threeAnimate}\" (click)='playAudioA()'>{{phoneme.display}}</div>\n    \t<div class='row'>\n\t    \t<div class='column' [ngClass]=\"{'animate': ex1Animate}\">\n\t\t\t\t<img src={{img1}} class='word-image one' (click)='playEx1Audio()'>\n\t\t\t\t<br>\n\t\t\t\t<div class='column text' (click)='playEx1Audio()' [innerHtml]='word1'></div>\n\t\t\t</div>\n\n\t\t\t<div class='column' [ngClass]=\"{'animate': ex2Animate}\">\n\t\t\t\t<img src={{img2}} class='word-image two' (click)='playEx2Audio()'>\n\t\t\t\t<br>\n\t\t\t\t<div class='column text' (click)='playEx2Audio()' [innerHtml]='word2'></div>\n\t\t\t</div>\n\n\t\t\t<div class='column' [ngClass]=\"{'animate': ex3Animate}\">\n\t\t\t\t<img src={{img3}} class='word-image' (click)='playEx3Audio()'>\n\t\t\t\t<br>\n\t\t\t\t<div class='column text' (click)='playEx3Audio()' [innerHtml]='word3'></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)=\"playAudio()\"></button>\n        <button mat-icon-button class='icon bottom' id='quiz' (click)=\"showQuiz()\"></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-quiz/phoneme-quiz.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-quiz/phoneme-quiz.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='row'>\n            <div class='column puzzle-pane'>\n                <div class='letter' [ngClass]=\"{'animate': phonemeAnimate}\" (click)='playPhonemeAudio()'>{{phoneme.display}}</div>\n                <div class='puzzle'>\n                    <img *ngFor='let image of puzzlePieceImages; let i = index' class='puzzle-image' src={{image}} [ngClass]=\"{'visible':phoneme.puzzlePiecesEarned > i, 'animate-puzzle': puzzleAnimate && phoneme.puzzlePiecesEarned <= i + piecesToAnimate, 'animate-default': !puzzleAnimate}\"><br>\n                </div>\n            </div>\n            <div class='column answer-pane'>\n                <div class='row'>\n                    <div [ngClass]=\"{'animate': ex1Animate}\">\n        \t\t\t\t<img src={{img1}} class='word-image word-image-top' (click)='onClick1()'>\n        \t\t\t\t<br>\n        \t\t\t</div>\n                </div>\n\n    \t\t\t<div class='column' [ngClass]=\"{'animate': ex2Animate}\">\n    \t\t\t\t<img src={{img2}} class='word-image word-image-bottom' (click)='onClick2()'>\n    \t\t\t\t<br>\n                </div>\n\n    \t\t\t<div class='column' [ngClass]=\"{'animate': ex3Animate}\">\n    \t\t\t\t<img src={{img3}} class='word-image word-image-bottom' (click)='onClick3()'>\n    \t\t\t\t<br>\n    \t\t\t</div>\n    \t\t</div>\n        </div>\n\t</div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)=\"playAudio()\"></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzle/puzzle.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzle/puzzle.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <img src={{img}} id='puzzle-image'>\n        <div id='rhyme' [innerHtml]='text'></div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='playAudio()'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle' routerLink='/puzzles'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzles/puzzles.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzles/puzzles.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <div class=\"cardList\">\n                <app-card class=\"cardListItem\" id=\"{{ setID(item) }}\" (click)='select(item)' *ngFor=\"let item of data\">\n                    <p>{{ getDisplay(item) }}</p>\n                </app-card>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' (click)='goBack()'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='bank' routerLink='/coins'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n    width: 1980px;\n    height: 1030px;\n    background-color: #6EC7D4;\n    margin: auto;\n}\n\n#side-menu {\n    width: 185px;\n    height: 1030px;\n    background-color: #C4E8E6;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTk4MHB4O1xuICAgIGhlaWdodDogMTAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RUM3RDQ7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4jc2lkZS1tZW51IHtcbiAgICB3aWR0aDogMTg1cHg7XG4gICAgaGVpZ2h0OiAxMDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M0RThFNjtcbn1cbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'brainy-phonics-web';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home */ "./src/app/pages/home/index.ts");
/* harmony import */ var _pages_phoneme_categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/phoneme-categories */ "./src/app/pages/phoneme-categories/index.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _pages_phoneme_learn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/phoneme-learn */ "./src/app/pages/phoneme-learn/index.ts");
/* harmony import */ var _pages_phoneme_quiz__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/phoneme-quiz */ "./src/app/pages/phoneme-quiz/index.ts");
/* harmony import */ var _pages_alphabet_learn_alphabet_learn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/alphabet-learn/alphabet-learn.component */ "./src/app/pages/alphabet-learn/alphabet-learn.component.ts");
/* harmony import */ var _pages_alphabet_quiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/alphabet-quiz */ "./src/app/pages/alphabet-quiz/index.ts");
/* harmony import */ var _pages_list_select_list_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/list-select/list-select.component */ "./src/app/pages/list-select/list-select.component.ts");
/* harmony import */ var _pages_grade_levels__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/grade-levels */ "./src/app/pages/grade-levels/index.ts");
/* harmony import */ var _pages_coins_coins_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/coins/coins.component */ "./src/app/pages/coins/coins.component.ts");
/* harmony import */ var _pages_puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/puzzles/puzzles.component */ "./src/app/pages/puzzles/puzzles.component.ts");
/* harmony import */ var _pages_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/puzzle/puzzle.component */ "./src/app/pages/puzzle/puzzle.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _pages_home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _pages_phoneme_categories__WEBPACK_IMPORTED_MODULE_9__["PhonemeCategoriesComponent"],
            _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
            _pages_phoneme_learn__WEBPACK_IMPORTED_MODULE_11__["PhonemeLearnComponent"],
            _pages_phoneme_quiz__WEBPACK_IMPORTED_MODULE_12__["PhonemeQuizComponent"],
            _pages_alphabet_learn_alphabet_learn_component__WEBPACK_IMPORTED_MODULE_13__["AlphabetLearnComponent"],
            _pages_alphabet_quiz__WEBPACK_IMPORTED_MODULE_14__["AlphabetQuizComponent"],
            _pages_list_select_list_select_component__WEBPACK_IMPORTED_MODULE_15__["ListSelectComponent"],
            _pages_grade_levels__WEBPACK_IMPORTED_MODULE_16__["GradeLevelsComponent"],
            _pages_coins_coins_component__WEBPACK_IMPORTED_MODULE_17__["CoinsComponent"],
            _pages_puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_18__["PuzzlesComponent"],
            _pages_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_19__["PuzzleComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["appRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["StorageServiceModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ "./src/app/pages/home/index.ts");
/* harmony import */ var _pages_phoneme_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/phoneme-categories */ "./src/app/pages/phoneme-categories/index.ts");
/* harmony import */ var _pages_alphabet_learn_alphabet_learn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/alphabet-learn/alphabet-learn.component */ "./src/app/pages/alphabet-learn/alphabet-learn.component.ts");
/* harmony import */ var _pages_alphabet_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/alphabet-quiz */ "./src/app/pages/alphabet-quiz/index.ts");
/* harmony import */ var _pages_phoneme_learn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/phoneme-learn */ "./src/app/pages/phoneme-learn/index.ts");
/* harmony import */ var _pages_phoneme_quiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/phoneme-quiz */ "./src/app/pages/phoneme-quiz/index.ts");
/* harmony import */ var _pages_list_select_list_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/list-select/list-select.component */ "./src/app/pages/list-select/list-select.component.ts");
/* harmony import */ var _pages_grade_levels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/grade-levels */ "./src/app/pages/grade-levels/index.ts");
/* harmony import */ var _pages_coins_coins_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/coins/coins.component */ "./src/app/pages/coins/coins.component.ts");
/* harmony import */ var _pages_puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/puzzles/puzzles.component */ "./src/app/pages/puzzles/puzzles.component.ts");
/* harmony import */ var _pages_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/puzzle/puzzle.component */ "./src/app/pages/puzzle/puzzle.component.ts");













const routes = [
    { path: '', component: _pages_home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'phoneme-categories', component: _pages_phoneme_categories__WEBPACK_IMPORTED_MODULE_3__["PhonemeCategoriesComponent"] },
    { path: 'alphabet-learn', component: _pages_alphabet_learn_alphabet_learn_component__WEBPACK_IMPORTED_MODULE_4__["AlphabetLearnComponent"] },
    { path: 'alphabet-quiz', component: _pages_alphabet_quiz__WEBPACK_IMPORTED_MODULE_5__["AlphabetQuizComponent"] },
    { path: 'list-select', component: _pages_list_select_list_select_component__WEBPACK_IMPORTED_MODULE_8__["ListSelectComponent"] },
    { path: 'phoneme-learn', component: _pages_phoneme_learn__WEBPACK_IMPORTED_MODULE_6__["PhonemeLearnComponent"] },
    { path: 'phoneme-quiz', component: _pages_phoneme_quiz__WEBPACK_IMPORTED_MODULE_7__["PhonemeQuizComponent"] },
    { path: 'grade-levels', component: _pages_grade_levels__WEBPACK_IMPORTED_MODULE_9__["GradeLevelsComponent"] },
    { path: 'coins', component: _pages_coins_coins_component__WEBPACK_IMPORTED_MODULE_10__["CoinsComponent"] },
    { path: 'puzzles', component: _pages_puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_11__["PuzzlesComponent"] },
    { path: 'puzzle', component: _pages_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_12__["PuzzleComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: '<div class="app-card"><ng-content></ng-content></div>',
    })
], CardComponent);



/***/ }),

/***/ "./src/app/pages/alphabet-learn/alphabet-learn.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/alphabet-learn/alphabet-learn.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\r\n  background-color: #FFFFFF !important;\r\n}\r\n\r\n#main-body {\r\n  width: 169.7vh;\r\n  height: 0vh;\r\n  padding-left: 22vh;\r\n  position: relative;\r\n}\r\n\r\n#column {\r\n    width: 42vh;\r\n}\r\n\r\n.back-button {\r\n    width: 9.5vh;\r\n    height: 9.5vh;\r\n    display: block;\r\n    position: absolute;\r\n    margin-left: 10vh;\r\n    margin-bottom: 3.5vh;\r\n    border: none;\r\n    margin-top: 45vh;\r\n}\r\n\r\n.after-button {\r\n    width: 9.5vh;\r\n    height: 9.5vh;\r\n    display: block;\r\n    position: absolute;\r\n    margin-left: 103vh;\r\n    margin-bottom: 3.5vh;\r\n    border: none;\r\n    margin-top: 45vh;\r\n}\r\n\r\n.letter {\r\n  font-size: 19.4vh;\r\n  padding-top: -10vh;\r\n  margin-left: 44vh;\r\n  padding-top: 30vh;\r\n  cursor: pointer;\r\n  transition: all .5s;\r\n  transform: scale(1) translate(5.5vh, 3vh);\r\n}\r\n\r\n.animateLetter {\r\n  transition: all .5s;\r\n  transform: translate(12vh, 3vh) scale(1.12) !important;\r\n}\r\n\r\n/* Buttons */\r\n\r\n#forward {\r\n    background: url('forward.png') no-repeat scroll 0 0 transparent;\r\n    background-size: 9.5vh 9.5vh;\r\n}\r\n\r\n.bottom {\r\n  transform: translateY(13vh);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxwaGFiZXQtbGVhcm4vYWxwaGFiZXQtbGVhcm4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNEQUFzRDtBQUN4RDs7QUFHQSxZQUFZOztBQUNaO0lBQ0ksK0RBQTJGO0lBQzNGLDRCQUE0QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FscGhhYmV0LWxlYXJuL2FscGhhYmV0LWxlYXJuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbWFpbi1ib2R5IHtcclxuICB3aWR0aDogMTY5Ljd2aDtcclxuICBoZWlnaHQ6IDB2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDIydmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jY29sdW1uIHtcclxuICAgIHdpZHRoOiA0MnZoO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24ge1xyXG4gICAgd2lkdGg6IDkuNXZoO1xyXG4gICAgaGVpZ2h0OiA5LjV2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzLjV2aDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDQ1dmg7XHJcbn1cclxuXHJcbi5hZnRlci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDkuNXZoO1xyXG4gICAgaGVpZ2h0OiA5LjV2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwM3ZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMy41dmg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXZoO1xyXG59XHJcblxyXG4ubGV0dGVyIHtcclxuICBmb250LXNpemU6IDE5LjR2aDtcclxuICBwYWRkaW5nLXRvcDogLTEwdmg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ0dmg7XHJcbiAgcGFkZGluZy10b3A6IDMwdmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoNS41dmgsIDN2aCk7XHJcbn1cclxuXHJcbi5hbmltYXRlTGV0dGVyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEydmgsIDN2aCkgc2NhbGUoMS4xMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIEJ1dHRvbnMgKi9cclxuI2ZvcndhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvZm9yd2FyZC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3ZoKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/alphabet-learn/alphabet-learn.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/alphabet-learn/alphabet-learn.component.ts ***!
  \******************************************************************/
/*! exports provided: AlphabetLearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphabetLearnComponent", function() { return AlphabetLearnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let AlphabetLearnComponent = class AlphabetLearnComponent {
    constructor(transferService, router, location) {
        this.transferService = transferService;
        this.router = router;
        this.location = location;
        this.letter = this.transferService.getData();
        if (!this.letter) {
            this.router.navigateByUrl('/alphabet-list-all');
        }
        //audio
        this.letterAnimate = false;
        this.letterPlayAudio = true;
    }
    ngOnInit() {
        this.letterAudio = new Audio();
        this.letterAudio.src = `/assets/audio/letters/${this.letter.audio}`;
        this.letterAudio.load();
        this.letterAudio.onended = () => {
            this.letterAnimate = false;
        };
        this.playAudio();
    }
    ngOnDestroy() {
        this.letterAudio.pause();
        this.letterAudio = null;
    }
    playAudio() {
        this.letterAnimate = true;
        this.letterAudio.onended = () => {
            this.letterAnimate = false;
            this.letterAudio.onended = () => {
                this.letterAnimate = false;
            };
        };
        this.letterAudio.play();
    }
    goBack() {
        this.location.back();
    }
    prev(event) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value) => {
            return value.letter === this.letter.letter;
        });
        if (currentIndex === 0) {
            return;
        }
        this.letter = this.transferService.getList()[currentIndex - 1];
        this.letterAnimate = false;
        this.letterPlayAudio = true;
        this.ngOnInit();
    }
    next(event) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value) => {
            return value.letter === this.letter.letter;
        });
        if (currentIndex === this.transferService.getList().length - 1) {
            return;
        }
        this.letter = this.transferService.getList()[currentIndex + 1];
        this.letterAnimate = false;
        this.letterPlayAudio = true;
        this.ngOnInit();
    }
};
AlphabetLearnComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_3__["TransferLetterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
AlphabetLearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alphabet-learn',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alphabet-learn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-learn/alphabet-learn.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alphabet-learn.component.css */ "./src/app/pages/alphabet-learn/alphabet-learn.component.css")).default]
    })
], AlphabetLearnComponent);



/***/ }),

/***/ "./src/app/pages/alphabet-quiz/alphabet-quiz.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/alphabet-quiz/alphabet-quiz.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n  background-color: #FFFFFF !important;\n}\n\n#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 22vh;\n  position: relative;\n}\n\n#column {\n    width: 42vh;\n}\n\n.column {\n    padding-left: 250px;\n    padding-top:150px;\n    float: left;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.letter, \n.letter2, \n.letter3, \n.letter4 {\n    font-size: 19.4vh;\n    cursor: pointer;\n}\n\n.animateLetter1,\n.animateLetter3 {\n  transition: all 0.5s linear;\n  transform: translate(22vh, 10vh) scale(1.12) !important;\n}\n\n.animateLetter2,\n.animateLetter4 {\n  transition: all 0.5s linear;\n  transform: translate(-22vh, 10vh) scale(1.12) !important;\n}\n\n/* Buttons */\n\n#forward {\n    background: url('forward.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n}\n\n.bottom {\n  transform: translateY(13vh);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxwaGFiZXQtcXVpei9hbHBoYWJldC1xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7Ozs7SUFJSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsdURBQXVEO0FBQ3pEOztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQix3REFBd0Q7QUFDMUQ7O0FBRUEsWUFBWTs7QUFDWjtJQUNJLCtEQUEyRjtJQUMzRiw0QkFBNEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hbHBoYWJldC1xdWl6L2FscGhhYmV0LXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuXG4jbWFpbi1ib2R5IHtcbiAgd2lkdGg6IDE2OS43dmg7XG4gIGhlaWdodDogMHZoO1xuICBwYWRkaW5nLWxlZnQ6IDIydmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbHVtbiB7XG4gICAgd2lkdGg6IDQydmg7XG59XG5cbi5jb2x1bW4ge1xuICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XG4gICAgcGFkZGluZy10b3A6MTUwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmxldHRlciwgXG4ubGV0dGVyMiwgXG4ubGV0dGVyMywgXG4ubGV0dGVyNCB7XG4gICAgZm9udC1zaXplOiAxOS40dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYW5pbWF0ZUxldHRlcjEsXG4uYW5pbWF0ZUxldHRlcjMge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIydmgsIDEwdmgpIHNjYWxlKDEuMTIpICFpbXBvcnRhbnQ7XG59XG5cbi5hbmltYXRlTGV0dGVyMixcbi5hbmltYXRlTGV0dGVyNCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIydmgsIDEwdmgpIHNjYWxlKDEuMTIpICFpbXBvcnRhbnQ7XG59XG5cbi8qIEJ1dHRvbnMgKi9cbiNmb3J3YXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9mb3J3YXJkLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XG59XG5cbi5ib3R0b20ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTN2aCk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/alphabet-quiz/alphabet-quiz.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/alphabet-quiz/alphabet-quiz.component.ts ***!
  \****************************************************************/
/*! exports provided: AlphabetQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphabetQuizComponent", function() { return AlphabetQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _services_alphabet_letters_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/alphabet-letters.service */ "./src/app/services/alphabet-letters.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _types_alphabet_letter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../types/alphabet-letter */ "./src/app/types/alphabet-letter.ts");










let AlphabetQuizComponent = class AlphabetQuizComponent {
    constructor(transferService, userDataService, letterProgressService, alphabetLettersService, router, location, activatedRoute) {
        this.transferService = transferService;
        this.userDataService = userDataService;
        this.letterProgressService = letterProgressService;
        this.alphabetLettersService = alphabetLettersService;
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.empty = new _types_alphabet_letter__WEBPACK_IMPORTED_MODULE_9__["AlphabetLetter"](' ', '/assets/audio/buttons/incorrect.mp3', 0);
        this.quizAll = this.activatedRoute.snapshot.queryParamMap.get('quizAll');
        this.letterList = this.alphabetLettersService.dataImport();
        if (this.quizAll === 'true') {
            var key = Math.floor(Math.random() * 25);
            this.key = key;
            this.letter = this.letterList[key];
        }
        else {
            this.letter = this.transferService.getData();
        }
        if (!this.letter) {
            this.router.navigateByUrl('/alphabet-list-all');
        }
        // animation
        this.letterAnimate1 = false;
        this.letterAnimate2 = false;
        this.letterAnimate3 = false;
        this.letterAnimate4 = false;
        // audio
        this.letterPlayAudio = true;
    }
    ;
    ngOnInit() {
        //sound for correct answer choice
        this.correctSound = new Audio();
        this.correctSound.src = `/assets/audio/buttons/correct.mp3`;
        this.letterAudio = new Audio();
        this.letterAudio.src = `/assets/audio/letters/${this.letter.audio}`;
        this.letterAudio.load();
        this.letterAudio.onended = () => {
            this.letterAnimate1 = false;
            this.letterAnimate2 = false;
            this.letterAnimate3 = false;
            this.letterAnimate4 = false;
        };
        this.playAudio();
        this.isFirstAttempt = true;
        this.hasGuessed = false;
        //randomized randomExamples
        this.loadNew();
    }
    ngOnDestroy() {
        this.letterAudio.pause();
        this.letterAudio = null;
    }
    check(selected) {
        if (selected === this.letter) {
            this.correctAnswer(selected);
        }
        else {
            this.incorrectAnswer();
        }
    }
    correctAnswer(correct) {
        if (correct == this.ex1) {
            this.letterAnimate1 = true;
            this.ex2 = this.empty;
            this.ex3 = this.empty;
            this.ex4 = this.empty;
        }
        else if (correct == this.ex2) {
            this.letterAnimate2 = true;
            this.ex1 = this.empty;
            this.ex3 = this.empty;
            this.ex4 = this.empty;
        }
        else if (correct == this.ex3) {
            this.letterAnimate3 = true;
            this.ex2 = this.empty;
            this.ex1 = this.empty;
            this.ex4 = this.empty;
        }
        else {
            this.letterAnimate4 = true;
            this.ex2 = this.empty;
            this.ex3 = this.empty;
            this.ex1 = this.empty;
        }
        this.letterAudio.onended = () => {
            this.letterAnimate1 = false;
            this.letterAnimate2 = false;
            this.letterAnimate3 = false;
            this.letterAnimate4 = false;
            this.letterAudio.onended = () => {
                this.letterAnimate1 = false;
                this.letterAnimate2 = false;
                this.letterAnimate3 = false;
                this.letterAnimate4 = false;
            };
        };
        // Choose new random alphabet
        if (this.quizAll) {
            var key = Math.floor(Math.random() * 25);
            this.key = key;
            this.letter = this.letterList[key];
            this.letterAudio.src = `/assets/audio/letters/${this.letter.audio}`;
        }
        Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(200).then(() => {
            this.correctSound.play();
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(800).then(() => {
                this.playAudio();
            });
            this.loadNew();
        });
        if (this.isFirstAttempt) {
            this.userDataService.addCoins(2);
            //add stars to progress if select correct letter on first attempt
            this.letterProgressService.saveStarsToKey("letter" + this.letter.letter + "gold", 1);
            if (this.letterProgressService.getSilverStarsFromKey("letter" + this.letter.letter) > 0) {
                this.letterProgressService.saveStarsToKey("letter" + this.letter.letter + "silv", -1);
            }
        }
        else {
            this.userDataService.addCoins(1);
        }
    }
    incorrectAnswer() {
        if (!this.hasGuessed) {
            this.hasGuessed = true;
            this.isFirstAttempt = false;
            const goldStarNum = this.letterProgressService.getGoldStarsFromKey("letter" + this.letter.letter);
            if (goldStarNum > 0 && goldStarNum < 5) {
                this.letterProgressService.saveStarsToKey("letter" + this.letter.letter + "gold", -1);
                this.letterProgressService.saveStarsToKey("letter" + this.letter.letter + "silv", 1);
            }
        }
    }
    loadNew() {
        var randomExamples = this.pickRandom(this.letter);
        randomExamples.push(this.letter);
        randomExamples.sort(() => Math.random() - 0.5);
        this.ex1 = randomExamples[0];
        this.ex2 = randomExamples[1];
        this.ex3 = randomExamples[2];
        this.ex4 = randomExamples[3];
        // delay(500).then(() => {
        //     this.playAudio();
        // });
        this.isFirstAttempt = true;
    }
    pickRandom(current) {
        var copiedList = [...this.letterList];
        // remove selected alphabet from list
        const index = copiedList.indexOf(current);
        if (index !== -1) {
            copiedList.splice(index, 1);
        }
        // create list of 3 unique randomized examples
        var n = 3;
        var result = new Array(n), len = copiedList.length, taken = new Array(len);
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = copiedList[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    playAudio() {
        this.letterAudio.play();
    }
    goBack() {
        this.location.back();
    }
};
AlphabetQuizComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_4__["TransferLetterService"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"] },
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_5__["ProgressService"] },
    { type: _services_alphabet_letters_service__WEBPACK_IMPORTED_MODULE_7__["AlphabetLettersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AlphabetQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alphabet-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alphabet-quiz/alphabet-quiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alphabet-quiz.component.css */ "./src/app/pages/alphabet-quiz/alphabet-quiz.component.css")).default]
    })
], AlphabetQuizComponent);



/***/ }),

/***/ "./src/app/pages/alphabet-quiz/index.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/alphabet-quiz/index.ts ***!
  \**********************************************/
/*! exports provided: AlphabetQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alphabet_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alphabet-quiz.component */ "./src/app/pages/alphabet-quiz/alphabet-quiz.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlphabetQuizComponent", function() { return _alphabet_quiz_component__WEBPACK_IMPORTED_MODULE_1__["AlphabetQuizComponent"]; });





/***/ }),

/***/ "./src/app/pages/coins/coins.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/coins/coins.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n    background-color: #FFFFFF !important;\n}\n\n#side-menu {\n    background-color: #6EC7D4 !important;\n}\n\n#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n}\n\n.column {\n    float: left;\n    text-align: right;\n    width: 100%;\n    height: 92.5vh;\n    transform: translateX(-21vh);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: column;\n}\n\n.row > img{\n    padding: 2vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29pbnMvY29pbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvaW5zL2NvaW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuXG4jc2lkZS1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDN0Q0ICFpbXBvcnRhbnQ7XG59XG5cbiNtYWluLWJvZHkge1xuICAgIHdpZHRoOiAxNjkuN3ZoO1xuICAgIGhlaWdodDogMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTIuNXZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjF2aCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4ucm93ID4gaW1ne1xuICAgIHBhZGRpbmc6IDJ2aDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/coins/coins.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/coins/coins.component.ts ***!
  \************************************************/
/*! exports provided: CoinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinsComponent", function() { return CoinsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let CoinsComponent = class CoinsComponent {
    constructor(userDataService, location) {
        this.userDataService = userDataService;
        this.location = location;
        this.coins = userDataService.getCoins();
        this.cars = Math.floor(this.coins / 250);
        this.bags = Math.floor((this.coins % 250) / 50);
        this.stacks = Math.floor((this.coins % 50) / 10);
        this.golds = Math.floor((this.coins % 10) / 2);
        this.silvers = Math.floor(this.coins % 2);
    }
    numberToIterable(num) {
        return Array(num).fill('');
    }
    goBack() {
        this.location.back();
    }
};
CoinsComponent.ctorParameters = () => [
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
CoinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coins',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coins.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coins/coins.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coins.component.css */ "./src/app/pages/coins/coins.component.css")).default]
    })
], CoinsComponent);



/***/ }),

/***/ "./src/app/pages/grade-levels/grade-levels.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/grade-levels/grade-levels.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 40vh;\n    position: relative;\n  }\n\n  #background {\n      background-color: #FFFFFF !important;\n      background: url('grade_levels.png') no-repeat scroll transparent;\n      background-size: 167.8vh;\n      background-position: right;\n  }\n\n  /* Phonics Categories */\n\n  #pre_k {\n      background: url('pre_k.png') no-repeat scroll transparent;\n      background-size: 40vh 23vh;\n      cursor: pointer;\n  }\n\n  #kindergarten {\n      background: url('kindergarten.png') no-repeat scroll transparent;\n      margin-left: -12vh;\n      background-size: 64vh 24vh;\n      cursor: pointer;\n  }\n\n  #first {\n    background: url('1st.png') no-repeat scroll transparent;\n    background-position: center;\n    margin-left: -20vh;\n    transform: translateY(-2vh);\n    background-size: 31.3vh;\n    cursor: pointer;\n  }\n\n  #second {\n      background: url('2nd.png') no-repeat scroll transparent;\n      transform: translateY(21vh);\n      background-size: 28.8vh;\n      cursor: pointer;\n  }\n\n  #third {\n      background: url('3rd.png') no-repeat scroll transparent;\n      margin-left: -17vh;\n      background-size: 30.9vh;\n      cursor: pointer;\n  }\n\n  .grade_level {\n      width: 64vh;\n      height: 24vh;\n      margin-top: 5vh;\n      border: none;\n      margin-left: auto;\n  }\n\n  /* Clear floats after the columns */\n\n  .column:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n\n  .no-click {\n    width: 64vh;\n    height: 24vh;\n    margin-top: 5vh;\n    border: none;\n    margin-left: auto;\n    pointer-events: none;\n    opacity: 0.3;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JhZGUtbGV2ZWxzL2dyYWRlLWxldmVscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksb0NBQW9DO01BQ3BDLGdFQUFnRztNQUNoRyx3QkFBd0I7TUFDeEIsMEJBQTBCO0VBQzlCOztFQUVBLHVCQUF1Qjs7RUFDdkI7TUFDSSx5REFBcUY7TUFDckYsMEJBQTBCO01BQzFCLGVBQWU7RUFDbkI7O0VBQ0E7TUFDSSxnRUFBNEY7TUFDNUYsa0JBQWtCO01BQ2xCLDBCQUEwQjtNQUMxQixlQUFlO0VBQ25COztFQUNBO0lBQ0UsdURBQW1GO0lBQ25GLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUNBO01BQ0ksdURBQW1GO01BQ25GLDJCQUEyQjtNQUMzQix1QkFBdUI7TUFDdkIsZUFBZTtFQUNuQjs7RUFDQTtNQUNJLHVEQUFtRjtNQUNuRixrQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7TUFDZixZQUFZO01BQ1osaUJBQWlCO0VBQ3JCOztFQUVBLG1DQUFtQzs7RUFDbkM7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncmFkZS1sZXZlbHMvZ3JhZGUtbGV2ZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgICB3aWR0aDogMTY5Ljd2aDtcbiAgICBoZWlnaHQ6IDB2aDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgI2JhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRzL2dyYWRlX2xldmVscy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxNjcuOHZoO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIH1cblxuICAvKiBQaG9uaWNzIENhdGVnb3JpZXMgKi9cbiAgI3ByZV9rIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3ByZV9rLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwdmggMjN2aDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAja2luZGVyZ2FydGVuIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2tpbmRlcmdhcnRlbi5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xMnZoO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA2NHZoIDI0dmg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgI2ZpcnN0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy8xc3QucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnZoKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMxLjN2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgI3NlY29uZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy8ybmQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMXZoKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMjguOHZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICN0aGlyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy8zcmQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTd2aDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAuOXZoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmdyYWRlX2xldmVsIHtcbiAgICAgIHdpZHRoOiA2NHZoO1xuICAgICAgaGVpZ2h0OiAyNHZoO1xuICAgICAgbWFyZ2luLXRvcDogNXZoO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbiAgLmNvbHVtbjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuXG4gIC5uby1jbGljayB7XG4gICAgd2lkdGg6IDY0dmg7XG4gICAgaGVpZ2h0OiAyNHZoO1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4zO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/grade-levels/grade-levels.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/grade-levels/grade-levels.component.ts ***!
  \**************************************************************/
/*! exports provided: GradeLevelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeLevelsComponent", function() { return GradeLevelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GradeLevelsComponent = class GradeLevelsComponent {
    playAudio(event) {
        this.grade = new Audio();
        this.grade.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        if (this.grade.src !== undefined) {
            this.grade.load();
            this.grade.play();
        }
    }
};
GradeLevelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grade-levels.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grade-levels/grade-levels.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grade-levels.component.css */ "./src/app/pages/grade-levels/grade-levels.component.css")).default]
    })
], GradeLevelsComponent);



/***/ }),

/***/ "./src/app/pages/grade-levels/index.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/grade-levels/index.ts ***!
  \*********************************************/
/*! exports provided: GradeLevelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grade_levels_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grade-levels.component */ "./src/app/pages/grade-levels/grade-levels.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GradeLevelsComponent", function() { return _grade_levels_component__WEBPACK_IMPORTED_MODULE_1__["GradeLevelsComponent"]; });





/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n    background-color: #FFFFFF !important;\n}\n\n#side-menu {\n    background: url('home-side-bar.png') no-repeat scroll 0 0 transparent;\n    background-size: 17.3vh 97vh;\n}\n\n#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 30vh;\n  position: relative;\n}\n\n#phonics {\n    background: url('Phonics_logo.png') no-repeat scroll 0 0 transparent;\n    margin-left: 4vh;\n    background-size: 45vh 45vh;\n}\n\n#alphabet {\n    background: url('alphabet_letters.png') no-repeat scroll 0 0 transparent;\n    background-size: 54vh 39vh;\n}\n\n#grade {\n  background: url('grade_level.png') no-repeat scroll 0 0 transparent;\n  margin-left: 2.5vh;\n  background-size: 39vh 40vh;\n}\n\n#secret {\n  background: url('secret_stuff.png') no-repeat scroll 0 0 transparent;\n  background-size: 45vh 35vh;\n}\n\n.phonics_logo {\n    width: 45vh;\n    height: 45vh;\n    display: block;\n    cursor: pointer;\n    border: none;\n}\n\n.alphabet_logo {\n    width: 54vh;\n    height: 39vh;\n    display: block;\n    cursor: pointer; \n    border: none;\n    margin-top: 9vh;\n}\n\n.grade_level {\n  width: 39vh;\n  height: 41vh;\n  display: block;\n  cursor: pointer;\n  border: none;\n}\n\n.secret_stuff {\n  width: 45vh;\n  height: 35vh;\n  display: block;\n  cursor: pointer; \n  border: none;\n  margin-top: 10vh;\n}\n\n.column {\n  float: left;\n  width: 50%;\n}\n\n.second {\n  margin-top: 5vh;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxRUFBeUY7SUFDekYsNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksb0VBQWdHO0lBQ2hHLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSx3RUFBb0c7SUFDcEcsMEJBQTBCO0FBQzlCOztBQUNBO0VBQ0UsbUVBQStGO0VBQy9GLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxvRUFBZ0c7RUFDaEcsMEJBQTBCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG59XG5cbiNzaWRlLW1lbnUge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lLXNpZGUtYmFyLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTcuM3ZoIDk3dmg7XG59XG5cbiNtYWluLWJvZHkge1xuICB3aWR0aDogMTY5Ljd2aDtcbiAgaGVpZ2h0OiAwdmg7XG4gIHBhZGRpbmctbGVmdDogMzB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcGhvbmljcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbnMvUGhvbmljc19sb2dvLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1sZWZ0OiA0dmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0NXZoIDQ1dmg7XG59XG4jYWxwaGFiZXQge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2FscGhhYmV0X2xldHRlcnMucG5nJykgbm8tcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1NHZoIDM5dmg7XG59XG4jZ3JhZGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9ncmFkZV9sZXZlbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IDIuNXZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IDM5dmggNDB2aDtcbn1cbiNzZWNyZXQge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9zZWNyZXRfc3R1ZmYucG5nJykgbm8tcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDV2aCAzNXZoO1xufVxuXG4ucGhvbmljc19sb2dvIHtcbiAgICB3aWR0aDogNDV2aDtcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5hbHBoYWJldF9sb2dvIHtcbiAgICB3aWR0aDogNTR2aDtcbiAgICBoZWlnaHQ6IDM5dmg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogOXZoO1xufVxuLmdyYWRlX2xldmVsIHtcbiAgd2lkdGg6IDM5dmg7XG4gIGhlaWdodDogNDF2aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuLnNlY3JldF9zdHVmZiB7XG4gIHdpZHRoOiA0NXZoO1xuICBoZWlnaHQ6IDM1dmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7IFxuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWNvbmQge1xuICBtYXJnaW4tdG9wOiA1dmg7XG59XG5cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
    }
    playAudio(event) {
        if (event.target.id == 'phonics') {
            this.phonics = new Audio();
            this.phonics.src = '/assets/audio/buttons/phonics.mp3';
            this.phonics.load();
            this.phonics.play();
        }
        else if (event.target.id == 'alphabet') {
            this.phonics = new Audio();
            this.phonics.src = '/assets/audio/buttons/alphabet_letters.mp3';
            this.phonics.load();
            this.phonics.play();
        }
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/index.ts":
/*!*************************************!*\
  !*** ./src/app/pages/home/index.ts ***!
  \*************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });





/***/ }),

/***/ "./src/app/pages/list-select/list-select.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/list-select/list-select.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 22vh;\n    position: relative;\n}\n\n#column {\n    width: 42vh;\n}\n\n.phoneme_button {\n    background: url('ape.png') no-repeat scroll;\n    background-position: 73% 50%;\n    background-size: 21vh 26vh;\n}\n\n.cardList {\n    display: flex;\n    height: 97vh;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    overflow: scroll;\n}\n\n/* Column Gap */\n\n.cardList > * {\n    box-sizing: border-box;\n}\n\n/* Item sizing */\n\n.cardListItem {\n    flex: 0 1 calc(33.3% - 6.5vh);\n    height: 38vh;\n    margin-top: 5vh;\n    margin-right: 32px;\n    border-radius: 2.8vh;\n    cursor: pointer;\n    background-color: #FFFFFF;\n    font-size: 12vh;\n    border-bottom: 3vh solid #DEDEDE;\n    overflow: hidden;\n}\n\np {\n    margin: 9vh 0vh 0vh 9vh;\n}\n\n.hide {\n    display: none;\n}\n\n.alphabet-list-bottom {\n    transform: translateY(13vh);\n}\n\n/* Phoneme label colors */\n\n.green {\n    color: #73EC12;\n}\n\n.purple {\n    color: #EB5AD1;\n}\n\n.orange {\n    color: #EB5AD1;\n}\n\n.word-image {\n    width: 50%;\n    transform: translate(22vh, -20vh);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC1zZWxlY3QvbGlzdC1zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJDQUEyRTtJQUMzRSw0QkFBNEI7SUFDNUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7O0FBRUEsZUFBZTs7QUFDZjtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3Qtc2VsZWN0L2xpc3Qtc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgICB3aWR0aDogMTY5Ljd2aDtcbiAgICBoZWlnaHQ6IDB2aDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIydmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jY29sdW1uIHtcbiAgICB3aWR0aDogNDJ2aDtcbn1cblxuLnBob25lbWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvc2lnaHQtd29yZHMvYXBlLnBuZycpIG5vLXJlcGVhdCBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNzMlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIxdmggMjZ2aDtcbn1cblxuLmNhcmRMaXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogOTd2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLyogQ29sdW1uIEdhcCAqL1xuLmNhcmRMaXN0ID4gKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogSXRlbSBzaXppbmcgKi9cbi5jYXJkTGlzdEl0ZW0ge1xuICAgIGZsZXg6IDAgMSBjYWxjKDMzLjMlIC0gNi41dmgpO1xuICAgIGhlaWdodDogMzh2aDtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIuOHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTJ2aDtcbiAgICBib3JkZXItYm90dG9tOiAzdmggc29saWQgI0RFREVERTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDl2aCAwdmggMHZoIDl2aDtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbHBoYWJldC1saXN0LWJvdHRvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEzdmgpO1xufVxuXG4vKiBQaG9uZW1lIGxhYmVsIGNvbG9ycyAqL1xuLmdyZWVuIHtcbiAgICBjb2xvcjogIzczRUMxMjtcbn1cbi5wdXJwbGUge1xuICAgIGNvbG9yOiAjRUI1QUQxO1xufVxuLm9yYW5nZSB7XG4gICAgY29sb3I6ICNFQjVBRDE7XG59XG5cbi53b3JkLWltYWdlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIydmgsIC0yMHZoKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/list-select/list-select.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/list-select/list-select.component.ts ***!
  \************************************************************/
/*! exports provided: ListSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSelectComponent", function() { return ListSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _services_alphabet_letters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alphabet-letters.service */ "./src/app/services/alphabet-letters.service.ts");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _services_phonemes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/phonemes.service */ "./src/app/services/phonemes.service.ts");
/* harmony import */ var _services_vowels_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vowels.service */ "./src/app/services/vowels.service.ts");
/* harmony import */ var _services_consonantBlends_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/consonantBlends.service */ "./src/app/services/consonantBlends.service.ts");
/* harmony import */ var _services_consonants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/consonants.service */ "./src/app/services/consonants.service.ts");
/* harmony import */ var _services_vowelConsonantBlends_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/vowelConsonantBlends.service */ "./src/app/services/vowelConsonantBlends.service.ts");
/* harmony import */ var _services_vowelPairs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/vowelPairs.service */ "./src/app/services/vowelPairs.service.ts");
/* harmony import */ var _services_kindergarten_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/kindergarten.service */ "./src/app/services/kindergarten.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");














let ListSelectComponent = class ListSelectComponent {
    constructor(transferLetterService, alphabetLettersService, progressService, phonemesService, vowelsService, consonantBlendsService, consonantsService, vowelConsonantBlendsService, vowelPairsService, kindergartenService, router, activatedRoute, location) {
        this.transferLetterService = transferLetterService;
        this.alphabetLettersService = alphabetLettersService;
        this.progressService = progressService;
        this.phonemesService = phonemesService;
        this.vowelsService = vowelsService;
        this.consonantBlendsService = consonantBlendsService;
        this.consonantsService = consonantsService;
        this.vowelConsonantBlendsService = vowelConsonantBlendsService;
        this.vowelPairsService = vowelPairsService;
        this.kindergartenService = kindergartenService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        let list = this.activatedRoute.snapshot.queryParamMap.get('list');
        this.list = list;
        if (!list || list === '') {
            this.router.navigate(['']);
        }
        else if (list === 'phoneme') {
            this.data = this.phonemesService.dataLoad();
        }
        else if (list === 'alphabet') {
            this.data = this.alphabetLettersService.dataImport();
        }
        else if (list === 'vowels') {
            this.data = this.vowelsService.dataLoad();
        }
        else if (list === 'consonantBlends') {
            this.data = this.consonantBlendsService.dataLoad();
        }
        else if (list === 'consonants') {
            this.data = this.consonantsService.dataLoad();
        }
        else if (list === 'vowelConsonants') {
            this.data = this.vowelConsonantBlendsService.dataLoad();
        }
        else if (list === 'vowelPairs') {
            this.data = this.vowelPairsService.dataLoad();
        }
        else if (list === 'kindergarten') {
            this.data = this.kindergartenService.dataLoad();
        }
        this.transferLetterService.setList(this.data);
        this.instruction = new Audio();
        if (this.list === 'alphabet') {
            this.instruction.src = '/assets/audio/00_Button_Audio_Win_A_Green_Ball_(Alphabet_Letters).mp3';
        }
        else {
            this.instruction.src = '/assets/audio/00_Button_Audio_Complete_a_whole_puzzle_(Phonics_only).mp3';
        }
        this.instruction.load();
        this.dataProgress = [];
        this.cardItemCount = 0;
    }
    ngOnInit() {
        if (this.list === 'alphabet') {
            if (!this.progressService.getReceivedInstructions('hasReceivedAlphabetInstruction')) {
                this.playAudio();
                this.progressService.setReceivedInstructions('hasReceivedAlphabetInstruction', true);
            }
        }
        else {
            if (!this.progressService.getReceivedInstructions('hasReceivedPhonemeInstruction')) {
                this.playAudio();
                this.progressService.setReceivedInstructions('hasReceivedPhonemeInstruction', true);
            }
        }
        if (this.activatedRoute.snapshot.queryParamMap.get('list') == 'alphabet') {
            document.getElementById('puzzle').classList.add('hide');
            for (var i = 0; i < Object.keys(document.getElementsByClassName('bottom')).length - 1; i++) {
                document.getElementsByClassName('bottom')[i].classList.add('alphabet-list-bottom');
            }
        }
    }
    ngAfterViewInit() {
        if (this.list === 'alphabet') {
            for (var i = 0; i < document.getElementsByClassName('app-card').length; i++) {
                var temp = document.getElementsByClassName('app-card')[i];
                temp.style.marginLeft = '7vh';
            }
        }
        else {
            if (this.list === 'phoneme' || this.list === 'vowelConsonants') {
                var igh = document.getElementById('I-IGH').firstChild.lastChild;
                igh.style.transform = 'translate(25vh, -20vh)';
            }
            if (this.list === 'phoneme' || this.list === 'vowelPairs') {
                var aw = document.getElementById('A-AW').firstChild.lastChild;
                var ow = document.getElementById('O-ohw').firstChild.lastChild;
                aw.style.transform = 'translate(24vh, -20vh)';
                ow.style.transform = 'translate(24vh, -20vh)';
            }
        }
    }
    ngOnDestroy() {
        this.instruction.pause();
        this.instruction = null;
    }
    getDisplay(item) {
        var icon = document.getElementById('puzzle');
        if (item != null) {
            this.showProgress(item);
            if (this.list === 'alphabet') {
                return item.letter;
            }
            else {
                return item.display;
            }
        }
    }
    showProgress(item) {
        let numGoldStars;
        let numSilverStars;
        let elem = document.getElementsByClassName("cardListItem")[this.cardItemCount];
        let queryStatement;
        if (item != null) {
            if (!this.dataProgress.includes(item)) {
                this.cardItemCount++;
                if (this.list === 'alphabet') {
                    queryStatement = "letter" + item.letter;
                    numGoldStars = this.progressService.getGoldStarsFromKey(queryStatement);
                    numSilverStars = this.progressService.getSilverStarsFromKey(queryStatement);
                }
                else {
                    queryStatement = "phoneme" + item.id;
                    numGoldStars = this.progressService.getGoldStarsFromKey(queryStatement);
                    numSilverStars = this.progressService.getSilverStarsFromKey(queryStatement);
                }
                if (numGoldStars + numSilverStars > 0) {
                    this.dataProgress.push(item);
                }
                if (numGoldStars >= 5 && this.list == "alphabet") {
                    this.progressService.setCheckMark(queryStatement, true);
                }
                for (let i = 0; i < numGoldStars; i++) {
                    let img = document.createElement('img');
                    if (this.list === 'alphabet') {
                        img.style.transform = 'translateY(-21vh)';
                    }
                    else {
                        img.style.transform = 'translateY(-33vh)';
                    }
                    img.setAttribute("src", '/assets/img/progress/Gold-Star-Blank.png');
                    img.setAttribute("width", '25px');
                    img.setAttribute("height", '25px');
                    img.style.marginLeft = '2vh';
                    elem.appendChild(img);
                }
                for (let i = 0; i < numSilverStars; i++) {
                    let img = document.createElement('img');
                    if (this.list === 'alphabet') {
                        img.style.transform = 'translateY(-21vh)';
                    }
                    else {
                        img.style.transform = 'translateY(-33vh)';
                    }
                    img.setAttribute("src", '/assets/img/progress/Silver-Star-Blank.png');
                    img.setAttribute("width", '25px');
                    img.setAttribute("height", '25px');
                    img.style.marginLeft = '2vh';
                    elem.appendChild(img);
                }
                // show checkmark: if letters (5 stars have been earned), if phonemes (puzzle has been finished)
                if (this.progressService.getCheckMark(queryStatement)) {
                    let img = document.createElement('img');
                    if (this.list === 'alphabet') {
                        img.style.transform = 'translateY(-22vh)';
                    }
                    else {
                        img.style.transform = 'translateY(-33vh)';
                    }
                    img.setAttribute("src", '/assets/img/progress/check_mark.png');
                    img.setAttribute("width", '46px');
                    img.setAttribute("height", '46px');
                    img.style.marginLeft = '13vh';
                    elem.appendChild(img);
                }
            }
        }
    }
    select(item) {
        this.transferLetterService.setData(item);
        if (this.list == 'alphabet') {
            this.router.navigate(['alphabet-learn']);
        }
        else {
            this.router.navigate(['phoneme-learn']);
        }
    }
    playAudio() {
        this.instruction.pause();
        this.instruction.currentTime = 0;
        this.instruction.play();
    }
    goBack() {
        this.location.back();
    }
    setClass(item) {
        if (this.list === 'vowels') {
            return item.color.vowel;
        }
        else if (this.list === 'kindergarten') {
            return item.color.K;
        }
        else if (this.list !== 'alphabet') {
            return item.color.all;
        }
    }
    setID(item) {
        return item.id;
    }
    getImage(item) {
        if (this.list === 'alphabet') {
            return;
        }
        else {
            return item.word1.image;
        }
    }
    quiz(item) {
        this.transferLetterService.setData(item);
        if (this.list == 'alphabet') {
            this.router.navigate(['alphabet-quiz'], { queryParams: { quizAll: true } });
        }
        else {
            this.router.navigate(['phoneme-quiz'], { queryParams: { list: this.list, quizAll: true } });
        }
    }
};
ListSelectComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_2__["TransferLetterService"] },
    { type: _services_alphabet_letters_service__WEBPACK_IMPORTED_MODULE_3__["AlphabetLettersService"] },
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_4__["ProgressService"] },
    { type: _services_phonemes_service__WEBPACK_IMPORTED_MODULE_5__["PhonemesService"] },
    { type: _services_vowels_service__WEBPACK_IMPORTED_MODULE_6__["VowelsService"] },
    { type: _services_consonantBlends_service__WEBPACK_IMPORTED_MODULE_7__["ConsonantBlendsService"] },
    { type: _services_consonants_service__WEBPACK_IMPORTED_MODULE_8__["ConsonantsService"] },
    { type: _services_vowelConsonantBlends_service__WEBPACK_IMPORTED_MODULE_9__["VowelConsonantBlendsService"] },
    { type: _services_vowelPairs_service__WEBPACK_IMPORTED_MODULE_10__["VowelPairsService"] },
    { type: _services_kindergarten_service__WEBPACK_IMPORTED_MODULE_11__["KindergartenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] }
];
ListSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-select/list-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-select.component.css */ "./src/app/pages/list-select/list-select.component.css")).default]
    })
], ListSelectComponent);



/***/ }),

/***/ "./src/app/pages/phoneme-categories/index.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/phoneme-categories/index.ts ***!
  \***************************************************/
/*! exports provided: PhonemeCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _phoneme_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phoneme-categories.component */ "./src/app/pages/phoneme-categories/phoneme-categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhonemeCategoriesComponent", function() { return _phoneme_categories_component__WEBPACK_IMPORTED_MODULE_1__["PhonemeCategoriesComponent"]; });





/***/ }),

/***/ "./src/app/pages/phoneme-categories/phoneme-categories.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/phoneme-categories/phoneme-categories.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n#background {\n    background-color: #FFFFFF !important;\n    background: url('phoneme_categories.png') no-repeat scroll transparent;\n    background-position: right;\n    background-size: 170.1vh;\n}\n\n/* Phonics Categories */\n\n#consonants {\n    background: url('consonants.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 38.5vh;\n    cursor: pointer;\n}\n\n#consonant_blends {\n    background: url('consonant_blends.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 36.6vh;\n    cursor: pointer;\n}\n\n#vowel_consonant_blends {\n    background: url('vowel_consonant_blends.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 39.3vh;\n    cursor: pointer;\n}\n\n#vowels {\n    background: url('vowels.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 31.9vh;\n    cursor: pointer;\n}\n\n#vowel_pairs {\n    background: url('vowel_pairs.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 28.4vh;\n    cursor: pointer;\n}\n\n#all {\n    background: url('all.png') no-repeat scroll transparent;\n    background-position: center;\n    background-size: 30.3vh;\n    cursor: pointer;\n}\n\n.category_button {\n    width: 39vh;\n    height: 29vh;\n    margin: 5vh 2vh 0vh 0vh;\n    border: none;\n    margin-left: auto;\n}\n\n.row {\n  float: left;\n  margin-left: 3vh;\n}\n\n.column {\n    padding-top: 2.5vh;\n}\n\n/* Clear floats after the columns */\n\n.column:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGhvbmVtZS1jYXRlZ29yaWVzL3Bob25lbWUtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHNFQUFzRztJQUN0RywwQkFBMEI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDSSw4REFBMEY7SUFDMUYsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUNBO0lBQ0ksb0VBQWdHO0lBQ2hHLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLDBFQUFzRztJQUN0RywyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSwwREFBc0Y7SUFDdEYsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUNBO0lBQ0ksK0RBQTJGO0lBQzNGLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHVEQUFtRjtJQUNuRiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9waG9uZW1lLWNhdGVnb3JpZXMvcGhvbmVtZS1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgd2lkdGg6IDE2OS43dmg7XG4gIGhlaWdodDogMHZoO1xuICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvcGhvbmVtZV9jYXRlZ29yaWVzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNzAuMXZoO1xufVxuXG4vKiBQaG9uaWNzIENhdGVnb3JpZXMgKi9cbiNjb25zb25hbnRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9jb25zb25hbnRzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzguNXZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb25zb25hbnRfYmxlbmRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9jb25zb25hbnRfYmxlbmRzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzYuNnZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN2b3dlbF9jb25zb25hbnRfYmxlbmRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy92b3dlbF9jb25zb25hbnRfYmxlbmRzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzkuM3ZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN2b3dlbHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3Zvd2Vscy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMxLjl2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jdm93ZWxfcGFpcnMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL3Zvd2VsX3BhaXJzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjguNHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNhbGwge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b25zL2FsbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwLjN2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXRlZ29yeV9idXR0b24ge1xuICAgIHdpZHRoOiAzOXZoO1xuICAgIGhlaWdodDogMjl2aDtcbiAgICBtYXJnaW46IDV2aCAydmggMHZoIDB2aDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5yb3cge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDN2aDtcbn1cblxuLmNvbHVtbiB7XG4gICAgcGFkZGluZy10b3A6IDIuNXZoO1xufVxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4uY29sdW1uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/phoneme-categories/phoneme-categories.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/phoneme-categories/phoneme-categories.component.ts ***!
  \**************************************************************************/
/*! exports provided: PhonemeCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeCategoriesComponent", function() { return PhonemeCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhonemeCategoriesComponent = class PhonemeCategoriesComponent {
    playAudio(event) {
        this.category = new Audio();
        this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        if (this.category.src !== undefined) {
            this.category.load();
            this.category.play();
        }
    }
};
PhonemeCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-categories/phoneme-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-categories.component.css */ "./src/app/pages/phoneme-categories/phoneme-categories.component.css")).default]
    })
], PhonemeCategoriesComponent);



/***/ }),

/***/ "./src/app/pages/phoneme-learn/index.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/phoneme-learn/index.ts ***!
  \**********************************************/
/*! exports provided: PhonemeLearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _phoneme_learn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phoneme-learn.component */ "./src/app/pages/phoneme-learn/phoneme-learn.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhonemeLearnComponent", function() { return _phoneme_learn_component__WEBPACK_IMPORTED_MODULE_1__["PhonemeLearnComponent"]; });





/***/ }),

/***/ "./src/app/pages/phoneme-learn/phoneme-learn.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/phoneme-learn/phoneme-learn.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n\tbackground-color: #FFFFFF !important;\n}\n\n#side-menu {\n\tbackground-color: #6EC7D4 !important;\n}\n\n#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n.column {\n  float: left;\n  text-align: center;\n  width: 48vh;\n  transform: translateX(-21vh);\n}\n\n.column .text {\n  font-size: 4.8vh;\n  cursor: pointer;\n  position: absolute;\n  top: 55vh;\n  z-index: 999;\n  margin-left: 21vh;\n}\n\n.letter {\n  font-size: 19.4vh;\n  padding-top: -10vh;\n  margin-left: 44vh;\n  cursor: pointer;\n  transition: all .5s;\n  transform: scale(1);\n}\n\n.letter.one {\n  transform: translate(11vh, 3vh);\n}\n\n.letter.two {\n  transform: translate(5.5vh, 3vh);\n}\n\n.letter.three {\n  transform: translate(5vh, 3vh);\n}\n\n::ng-deep span {\n  color: red;\n}\n\n.back-button {\n    width: 9.5vh;\n    height: 9.5vh;\n    display: block;\n    position: absolute;\n    margin-left: 10vh;\n    margin-bottom: 3.5vh;\n    border: none;\n    margin-top: 15vh;\n}\n\n.after-button {\n    width: 9.5vh;\n    height: 9.5vh;\n    display: block;\n    position: absolute;\n    margin-left: 103vh;\n    margin-bottom: 3.5vh;\n    border: none;\n    margin-top: 15vh;\n}\n\n.row {\n  padding-left: 10vh;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.word-image {\n  margin-top: 22vh;\n  cursor: pointer;\n  transition: all .5s;\n  transform: scale(1) !important;\n  width: 70%;\n}\n\n.animate {\n  transition: all .5s;\n  transform: translate(-21vh, -1vh) scale(1.12) !important;\n}\n\n.animate-one {\n  transition: all .5s;\n  transform: translate(18vh, 3vh) scale(1.12) !important;\n}\n\n.animate-two {\n  transition: all .5s;\n  transform: translate(12vh, 3vh) scale(1.12) !important;\n}\n\n.animate-three {\n  transition: all .5s;\n  transform: translate(11vh, 3vh) scale(1.12) !important;\n}\n\n/* Text */\n\nh2 {\n  font-size: 20px;\n}\n\nh2 {\n  font-weight: lighter;\n}\n\np {\n  font-size: 14px;\n}\n\n/* Buttons */\n\n#forward {\n    background: url('forward.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGhvbmVtZS1sZWFybi9waG9uZW1lLWxlYXJuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0EsbUNBQW1DOztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3REFBd0Q7QUFDMUQ7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0RBQXNEO0FBQ3hEOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHNEQUFzRDtBQUN4RDs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzREFBc0Q7QUFDeEQ7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLFlBQVk7O0FBQ1o7SUFDSSwrREFBMkY7SUFDM0YsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGhvbmVtZS1sZWFybi9waG9uZW1lLWxlYXJuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuI3NpZGUtbWVudSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2RUM3RDQgIWltcG9ydGFudDtcbn1cblxuI21haW4tYm9keSB7XG4gIHdpZHRoOiAxNjkuN3ZoO1xuICBoZWlnaHQ6IDB2aDtcbiAgcGFkZGluZy1sZWZ0OiA0MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDh2aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMXZoKTtcbn1cblxuLmNvbHVtbiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogNC44dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1dmg7XG4gIHotaW5kZXg6IDk5OTtcbiAgbWFyZ2luLWxlZnQ6IDIxdmg7XG59XG5cbi5sZXR0ZXIge1xuICBmb250LXNpemU6IDE5LjR2aDtcbiAgcGFkZGluZy10b3A6IC0xMHZoO1xuICBtYXJnaW4tbGVmdDogNDR2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLmxldHRlci5vbmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMXZoLCAzdmgpO1xufVxuLmxldHRlci50d28ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1LjV2aCwgM3ZoKTtcbn1cbi5sZXR0ZXIudGhyZWUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1dmgsIDN2aCk7XG59XG5cbjo6bmctZGVlcCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgICB3aWR0aDogOS41dmg7XG4gICAgaGVpZ2h0OiA5LjV2aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMy41dmg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDE1dmg7XG59XG5cbi5hZnRlci1idXR0b24ge1xuICAgIHdpZHRoOiA5LjV2aDtcbiAgICBoZWlnaHQ6IDkuNXZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTAzdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMy41dmg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDE1dmg7XG59XG5cbi5yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDEwdmg7XG59XG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi53b3JkLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMjJ2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5hbmltYXRlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIxdmgsIC0xdmgpIHNjYWxlKDEuMTIpICFpbXBvcnRhbnQ7XG59XG4uYW5pbWF0ZS1vbmUge1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxOHZoLCAzdmgpIHNjYWxlKDEuMTIpICFpbXBvcnRhbnQ7XG59XG4uYW5pbWF0ZS10d28ge1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnZoLCAzdmgpIHNjYWxlKDEuMTIpICFpbXBvcnRhbnQ7XG59XG4uYW5pbWF0ZS10aHJlZSB7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExdmgsIDN2aCkgc2NhbGUoMS4xMikgIWltcG9ydGFudDtcbn1cblxuLyogVGV4dCAqL1xuaDIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIEJ1dHRvbnMgKi9cbiNmb3J3YXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9mb3J3YXJkLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/phoneme-learn/phoneme-learn.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/phoneme-learn/phoneme-learn.component.ts ***!
  \****************************************************************/
/*! exports provided: PhonemeLearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeLearnComponent", function() { return PhonemeLearnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let PhonemeLearnComponent = class PhonemeLearnComponent {
    constructor(transferService, elem, router, location) {
        this.transferService = transferService;
        this.elem = elem;
        this.router = router;
        this.location = location;
        this.phoneme = this.transferService.getData();
        this.img1 = this.phoneme.word1.image;
        this.img2 = this.phoneme.word2.image;
        this.img3 = this.phoneme.word3.image;
        this.word1 = this.phoneme.word1.display;
        this.word2 = this.phoneme.word2.display;
        this.word3 = this.phoneme.word3.display;
        this.phonemePlayAudio = true;
        this.oneAnimate = false;
        this.twoAnimate = false;
        this.threeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
    }
    goBack() {
        this.location.back();
    }
    showQuiz() {
        this.router.navigateByUrl('/phoneme-quiz');
    }
    ngOnInit() {
        let phonemeList = this.elem.nativeElement.querySelector('.letter').classList;
        if (this.phoneme.display.length == 1) {
            phonemeList.add('one');
        }
        else if (this.phoneme.display.length == 2) {
            phonemeList.add('two');
        }
        else if (this.phoneme.display.length == 3) {
            phonemeList.add('three');
        }
        this.phonemeAudio = new Audio();
        this.phonemeAudio.src = this.phoneme.audio;
        this.phonemeAudio.load();
        this.ex1Audio = new Audio();
        this.ex1Audio.src = this.phoneme.word1.audio;
        this.ex1Audio.load();
        this.ex2Audio = new Audio();
        this.ex2Audio.src = this.phoneme.word2.audio;
        this.ex2Audio.load();
        this.ex3Audio = new Audio();
        this.ex3Audio.src = this.phoneme.word3.audio;
        this.ex3Audio.load();
        this.phonemeAudio.onended = () => {
            if (this.phoneme.display.length == 1) {
                this.oneAnimate = false;
            }
            else if (this.phoneme.display.length == 2) {
                this.twoAnimate = false;
            }
            else if (this.phoneme.display.length == 3) {
                this.threeAnimate = false;
            }
            this.ex1Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                this.ex1Audio.play();
            });
        };
        this.ex1Audio.onended = () => {
            this.ex1Animate = false;
            this.ex2Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                this.ex2Audio.play();
            });
        };
        this.ex2Audio.onended = () => {
            this.ex2Animate = false;
            this.ex3Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                this.ex3Audio.play();
            });
        };
        this.ex3Audio.onended = () => {
            this.ex3Animate = false;
        };
        this.playAudio();
    }
    ngOnDestroy() {
        this.phonemeAudio.pause();
        this.ex1Audio.pause();
        this.ex2Audio.pause();
        this.ex3Audio.pause();
        this.phonemeAudio = null;
        this.ex1Audio = null;
        this.ex2Audio = null;
        this.ex3Audio = null;
    }
    playAudio() {
        this.phonemeAudio.pause();
        this.phonemeAudio.currentTime = 0;
        if (this.phoneme.display.length == 1) {
            this.oneAnimate = false;
        }
        else if (this.phoneme.display.length == 2) {
            this.twoAnimate = false;
        }
        else if (this.phoneme.display.length == 3) {
            this.threeAnimate = false;
        }
        this.ex1Audio.pause();
        this.ex1Audio.currentTime = 0;
        this.ex1Animate = false;
        this.ex2Audio.pause();
        this.ex2Audio.currentTime = 0;
        this.ex2Animate = false;
        this.ex3Audio.pause();
        this.ex3Audio.currentTime = 0;
        this.ex3Animate = false;
        if (this.phoneme.display.length == 1) {
            this.oneAnimate = true;
        }
        else if (this.phoneme.display.length == 2) {
            this.twoAnimate = true;
        }
        else if (this.phoneme.display.length == 3) {
            this.threeAnimate = true;
        }
        this.phonemeAudio.play();
    }
    playAudioA() {
        if (this.phoneme.display.length == 1) {
            this.oneAnimate = true;
        }
        else if (this.phoneme.display.length == 2) {
            this.twoAnimate = true;
        }
        else if (this.phoneme.display.length == 3) {
            this.threeAnimate = true;
        }
        this.phonemeAudio.onended = () => {
            if (this.phoneme.display.length == 1) {
                this.oneAnimate = false;
            }
            else if (this.phoneme.display.length == 2) {
                this.twoAnimate = false;
            }
            else if (this.phoneme.display.length == 3) {
                this.threeAnimate = false;
            }
            this.phonemeAudio.onended = () => {
                if (this.phoneme.display.length == 1) {
                    this.oneAnimate = false;
                }
                else if (this.phoneme.display.length == 2) {
                    this.twoAnimate = false;
                }
                else if (this.phoneme.display.length == 3) {
                    this.threeAnimate = false;
                }
                this.ex1Animate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                    this.ex1Audio.play();
                });
            };
        };
        this.phonemeAudio.play();
    }
    playEx1Audio() {
        this.ex1Animate = true;
        this.ex1Audio.onended = () => {
            this.ex1Animate = false;
            this.ex1Audio.onended = () => {
                this.ex1Animate = false;
                this.ex2Animate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                    this.ex2Audio.play();
                });
            };
        };
        this.ex1Audio.play();
    }
    playEx2Audio() {
        this.ex2Animate = true;
        this.ex2Audio.onended = () => {
            this.ex2Animate = false;
            this.ex2Audio.onended = () => {
                this.ex2Animate = false;
                this.ex3Animate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                    this.ex3Audio.play();
                });
            };
        };
        this.ex2Audio.play();
    }
    playEx3Audio() {
        this.ex3Animate = true;
        this.ex3Audio.onended = () => {
            this.ex3Animate = false;
        };
        this.ex3Audio.play();
    }
    prev(event) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value) => {
            return value.id === this.phoneme.id;
        });
        if (currentIndex === 0) {
            return;
        }
        this.ex1Audio.onended = null;
        this.ex2Audio.onended = null;
        this.ex3Audio.onended = null;
        this.ex1Audio.pause();
        this.ex2Audio.pause();
        this.ex3Audio.pause();
        this.phoneme = this.transferService.getList()[currentIndex - 1];
        this.img1 = this.phoneme.word1.image;
        this.img2 = this.phoneme.word2.image;
        this.img3 = this.phoneme.word3.image;
        this.word1 = this.phoneme.word1.display;
        this.word2 = this.phoneme.word2.display;
        this.word3 = this.phoneme.word3.display;
        this.phonemePlayAudio = true;
        this.oneAnimate = false;
        this.twoAnimate = false;
        this.threeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
        this.ngOnInit();
    }
    next(event) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value) => {
            return value.id === this.phoneme.id;
        });
        if (currentIndex === this.transferService.getList().length - 1) {
            return;
        }
        this.ex1Audio.onended = null;
        this.ex2Audio.onended = null;
        this.ex3Audio.onended = null;
        this.ex1Audio.pause();
        this.ex2Audio.pause();
        this.ex3Audio.pause();
        this.phoneme = this.transferService.getList()[currentIndex + 1];
        this.img1 = this.phoneme.word1.image;
        this.img2 = this.phoneme.word2.image;
        this.img3 = this.phoneme.word3.image;
        this.word1 = this.phoneme.word1.display;
        this.word2 = this.phoneme.word2.display;
        this.word3 = this.phoneme.word3.display;
        this.phonemePlayAudio = true;
        this.oneAnimate = false;
        this.twoAnimate = false;
        this.threeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
        this.ngOnInit();
    }
};
PhonemeLearnComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_4__["TransferLetterService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
PhonemeLearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-learn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-learn/phoneme-learn.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-learn.component.css */ "./src/app/pages/phoneme-learn/phoneme-learn.component.css")).default]
    })
], PhonemeLearnComponent);



/***/ }),

/***/ "./src/app/pages/phoneme-quiz/index.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/phoneme-quiz/index.ts ***!
  \*********************************************/
/*! exports provided: PhonemeQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _phoneme_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phoneme-quiz.component */ "./src/app/pages/phoneme-quiz/phoneme-quiz.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhonemeQuizComponent", function() { return _phoneme_quiz_component__WEBPACK_IMPORTED_MODULE_1__["PhonemeQuizComponent"]; });





/***/ }),

/***/ "./src/app/pages/phoneme-quiz/phoneme-quiz.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/phoneme-quiz/phoneme-quiz.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n\tbackground-color: #FFFFFF;\n}\n\n#side-menu {\n\tbackground-color: #6EC7D4;\n}\n\n#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 20vh;\n  position: relative;\n}\n\n.column {\n  float: left;\n}\n\n.puzzle-pane {\n    height: 900px;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    width: 48vh;\n    background-color: lightblue;\n}\n\n.puzzle {\n    position: relative;\n    text-align: left;\n    margin: auto;\n    width: 36vh;\n    height: 48vh;\n    background-color: #6EC7D4;\n}\n\n.puzzle-image {\n    position: absolute;\n    top: 0;\n    width: 36vh;\n    height: 48vh;\n    opacity: 0;\n}\n\n.visible {\n    opacity: 1;\n}\n\n.letter {\n  font-size: 19.4vh;\n  padding-top: -10vh;\n  padding-bottom: 10vh;\n  cursor: pointer;\n  transition: all .5s;\n  transform: scale(1);\n}\n\n::ng-deep span {\n  color: red;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.word-image {\n  cursor: pointer;\n  margin-top: 6vh;\n  width: 30vh;\n  height: 30vh;\n  transition: all .5s;\n  transform: scale(1);\n}\n\n.word-image-top {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.word-image-bottom {\n    margin-left: 10vh;\n    margin-right: 10vh;\n}\n\n.animate {\n  transition: all .75s;\n  transform: scale(1.12);\n}\n\n.animate-default {\n  transition: all .5s;\n  transform: scale(1);\n}\n\n.animate-one {\n  transition: all .5s;\n  transform: scale(1.12);\n}\n\n.animate-two {\n  transition: all .5s;\n  transform: scale(1.12);\n}\n\n.animate-three {\n  transition: all .5s;\n  transform: scale(1.12);\n}\n\n.animate-puzzle {\n  transition: all .5s;\n  transform: scale(1.12);\n}\n\n/* Text */\n\nh2 {\n  font-size: 20px;\n}\n\nh2 {\n  font-weight: lighter;\n}\n\np {\n  font-size: 14px;\n}\n\n/* Buttons */\n\n#forward {\n    background: url('forward.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGhvbmVtZS1xdWl6L3Bob25lbWUtcXVpei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQSxTQUFTOztBQUNUO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsWUFBWTs7QUFDWjtJQUNJLCtEQUEyRjtJQUMzRiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9waG9uZW1lLXF1aXovcGhvbmVtZS1xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbiNzaWRlLW1lbnUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDN0Q0O1xufVxuXG4jbWFpbi1ib2R5IHtcbiAgd2lkdGg6IDE2OS43dmg7XG4gIGhlaWdodDogMHZoO1xuICBwYWRkaW5nLWxlZnQ6IDIwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucHV6emxlLXBhbmUge1xuICAgIGhlaWdodDogOTAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0OHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuLnB1enpsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAzNnZoO1xuICAgIGhlaWdodDogNDh2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDN0Q0O1xufVxuXG4ucHV6emxlLWltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAzNnZoO1xuICAgIGhlaWdodDogNDh2aDtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4udmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmxldHRlciB7XG4gIGZvbnQtc2l6ZTogMTkuNHZoO1xuICBwYWRkaW5nLXRvcDogLTEwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbjo6bmctZGVlcCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ud29yZC1pbWFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogNnZoO1xuICB3aWR0aDogMzB2aDtcbiAgaGVpZ2h0OiAzMHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ud29yZC1pbWFnZS10b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLndvcmQtaW1hZ2UtYm90dG9tIHtcbiAgICBtYXJnaW4tbGVmdDogMTB2aDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdmg7XG59XG5cbi5hbmltYXRlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC43NXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xMik7XG59XG5cbi5hbmltYXRlLWRlZmF1bHQge1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uYW5pbWF0ZS1vbmUge1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTIpO1xufVxuLmFuaW1hdGUtdHdvIHtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbn1cbi5hbmltYXRlLXRocmVlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbn1cblxuLmFuaW1hdGUtcHV6emxlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbn1cblxuLyogVGV4dCAqL1xuaDIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIEJ1dHRvbnMgKi9cbiNmb3J3YXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9ucy9mb3J3YXJkLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/phoneme-quiz/phoneme-quiz.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/phoneme-quiz/phoneme-quiz.component.ts ***!
  \**************************************************************/
/*! exports provided: PhonemeQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeQuizComponent", function() { return PhonemeQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json");
var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json", 1);
/* harmony import */ var _assets_json_bad_assets_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/json/bad-assets.json */ "./src/assets/json/bad-assets.json");
var _assets_json_bad_assets_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json/bad-assets.json */ "./src/assets/json/bad-assets.json", 1);
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_phonemes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/phonemes.service */ "./src/app/services/phonemes.service.ts");
/* harmony import */ var _services_vowels_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/vowels.service */ "./src/app/services/vowels.service.ts");
/* harmony import */ var _services_consonantBlends_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/consonantBlends.service */ "./src/app/services/consonantBlends.service.ts");
/* harmony import */ var _services_consonants_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/consonants.service */ "./src/app/services/consonants.service.ts");
/* harmony import */ var _services_vowelConsonantBlends_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/vowelConsonantBlends.service */ "./src/app/services/vowelConsonantBlends.service.ts");
/* harmony import */ var _services_vowelPairs_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/vowelPairs.service */ "./src/app/services/vowelPairs.service.ts");
/* harmony import */ var _services_kindergarten_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/kindergarten.service */ "./src/app/services/kindergarten.service.ts");


















let PhonemeQuizComponent = class PhonemeQuizComponent {
    constructor(transferService, userDataService, phonemeProgressService, elem, router, location, activatedRoute, phonemesService, vowelsService, consonantBlendsService, consonantsService, vowelConsonantBlendsService, vowelPairsService, kindergartenService, changeDetectorRef) {
        this.transferService = transferService;
        this.userDataService = userDataService;
        this.phonemeProgressService = phonemeProgressService;
        this.elem = elem;
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.phonemesService = phonemesService;
        this.vowelsService = vowelsService;
        this.consonantBlendsService = consonantBlendsService;
        this.consonantsService = consonantsService;
        this.vowelConsonantBlendsService = vowelConsonantBlendsService;
        this.vowelPairsService = vowelPairsService;
        this.kindergartenService = kindergartenService;
        this.changeDetectorRef = changeDetectorRef;
        this.begin = false;
        this.puzzlePieceImages = [];
        this.piecesToAnimate = 0;
        this.puzzleAnimate = false;
        this.puzzleComplete = false;
        this.quizAll = this.activatedRoute.snapshot.queryParamMap.get('quizAll');
        // Sets random phoneme if selected Quiz-all function
        if (this.quizAll === 'true') {
            let list = this.activatedRoute.snapshot.queryParamMap.get('list');
            this.list = list;
            // Chooses a random phoneme that belongs in its category
            var key = 0;
            if (!list || list === '') {
                this.router.navigate(['']);
            }
            else if (list === 'phoneme') {
                key = Math.floor(Math.random() * 92);
                this.data = this.phonemesService.dataLoad();
            }
            else if (list === 'vowels') {
                key = Math.floor(Math.random() * 17);
                this.data = this.vowelsService.dataLoad();
            }
            else if (list === 'consonantBlends') {
                key = Math.floor(Math.random() * 15);
                this.data = this.consonantBlendsService.dataLoad();
            }
            else if (list === 'consonants') {
                key = Math.floor(Math.random() * 22);
                this.data = this.consonantsService.dataLoad();
            }
            else if (list === 'vowelConsonants') {
                key = Math.floor(Math.random() * 10);
                this.data = this.vowelConsonantBlendsService.dataLoad();
            }
            else if (list === 'vowelPairs') {
                key = Math.floor(Math.random() * 15);
                this.data = this.vowelPairsService.dataLoad();
            }
            else if (list === 'kindergarten') {
                key = Math.floor(Math.random() * 53);
                this.data = this.kindergartenService.dataLoad();
            }
            this.key = key;
            this.phoneme = this.data[key];
        }
        else {
            this.phoneme = this.transferService.getData();
        }
        this.puzzleDirectory = '../../assets/img/puzzle-pieces/puzzle-' + this.phoneme.id;
        this.phonemePlayAudio = true;
        this.phonemeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 2; j++) {
                this.puzzlePieceImages.push(this.puzzleDirectory + '/puzzle-' + this.phoneme.id + '-row' + i + '-col' + j + '.png');
            }
        }
        // Random number generator that accepts a seed
        var LCG = s => () => (Math.pow(2, 31) - 1 & (s = Math.imul(48271, s))) / Math.pow(2, 31);
        // Generate seed for rng based on phoneme id
        var hashCode = s => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
        var hash = hashCode(this.phoneme.id);
        var rng = LCG(hash);
        // Shuffle order of puzzle pieces being displayed
        this.puzzlePieceImages.sort(function () { return rng() - 0.5; });
    }
    goBack() {
        this.transferService.setData(this.phoneme);
        this.location.back();
    }
    ngOnInit() {
        this.quizPhoneme = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6__.find(o => o.id == this.phoneme.id);
        this.phoneme.puzzlePiecesEarned = this.userDataService.getPuzzlePieces(this.phoneme.id);
        this.correctAudio = new Audio();
        this.correctAudio.src = '/assets/audio/buttons/correct.mp3';
        this.correctAudio.load();
        this.phonemeAudio = new Audio();
        this.phonemeAudio.src = this.phoneme.audio;
        this.phonemeAudio.load();
        this.ex1Audio = new Audio();
        this.ex2Audio = new Audio();
        this.ex3Audio = new Audio();
        this.loadNew();
        this.phonemeAudio.onended = () => {
            this.phonemeAnimate = false;
            this.ex1Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                this.ex1Audio.play();
            });
        };
        this.ex1Audio.onended = () => {
            this.ex1Animate = false;
            this.ex2Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                this.ex2Audio.play();
            });
        };
        this.ex2Audio.onended = () => {
            this.ex2Animate = false;
            this.ex3Animate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                this.ex3Audio.play();
            });
        };
        this.ex3Audio.onended = () => {
            this.ex3Animate = false;
        };
        this.playAudio();
        this.isFirstAttempt = true;
        this.hasGuessed = false;
    }
    ngOnDestroy() {
        this.phonemeAudio.pause();
        this.phonemeAudio = null;
        this.phonemeAnimate = false;
        this.ex1Audio.pause();
        this.ex1Audio = null;
        this.ex1Animate = false;
        this.ex2Audio.pause();
        this.ex2Audio = null;
        this.ex2Animate = false;
        this.ex3Audio.pause();
        this.ex3Audio = null;
        this.ex3Animate = false;
    }
    stopAudioAndAnimation() {
        this.phonemeAudio.pause();
        this.phonemeAudio.currentTime = 0;
        this.phonemeAnimate = false;
        this.ex1Audio.pause();
        this.ex1Audio.currentTime = 0;
        this.ex1Animate = false;
        this.ex2Audio.pause();
        this.ex2Audio.currentTime = 0;
        this.ex2Animate = false;
        this.ex3Audio.pause();
        this.ex3Audio.currentTime = 0;
        this.ex3Animate = false;
    }
    playAudio() {
        this.stopAudioAndAnimation();
        this.phonemeAnimate = true;
        this.phonemeAudio.play();
    }
    playPhonemeAudio() {
        this.phonemeAnimate = true;
        this.phonemeAudio.onended = () => {
            this.phonemeAnimate = false;
            this.phonemeAudio.onended = () => {
                this.phonemeAnimate = false;
                this.ex1Animate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                    this.ex1Audio.play();
                });
            };
        };
        this.phonemeAudio.play();
    }
    onCorrect() {
        var initialPuzzlePieces = this.phoneme.puzzlePiecesEarned;
        if (this.isFirstAttempt) {
            this.userDataService.addPuzzlePieces(this.phoneme.id, 2);
            this.userDataService.addCoins(2);
            //add stars to progress if select correct phoneme on first attempt
            this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "gold", 1);
            if (this.phonemeProgressService.getSilverStarsFromKey("phoneme" + this.phoneme.id) > 0) {
                this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "silv", -1);
            }
        }
        else {
            this.userDataService.addPuzzlePieces(this.phoneme.id, 1);
            this.userDataService.addCoins(1);
        }
        this.phoneme.puzzlePiecesEarned = this.userDataService.getPuzzlePieces(this.phoneme.id);
        this.piecesToAnimate = this.phoneme.puzzlePiecesEarned - initialPuzzlePieces;
        if (this.phoneme.puzzlePiecesEarned == 12) {
            this.phonemeProgressService.setCheckMark("phoneme" + this.phoneme.id, true);
        }
        this.correctAudio.play();
        if (this.quizAll) {
            this.loadNewPhoneme();
        }
        this.loadNew();
        this.puzzleAnimate = true;
        Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(900).then(() => {
            this.puzzleAnimate = false;
            this.changeDetectorRef.detectChanges();
        });
        Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000).then(() => {
            this.playAudio();
        });
        this.isFirstAttempt = true;
    }
    loadNew() {
        this.correctAnswer = Math.floor(Math.random() * 3);
        var examples = this.generateExamples();
        var temp = examples[this.correctAnswer];
        examples[this.correctAnswer] = examples[0];
        examples[0] = temp;
        this.img1 = '/assets/img/sight-words/' + examples[0] + '.png';
        this.img2 = '/assets/img/sight-words/' + examples[1] + '.png';
        this.img3 = '/assets/img/sight-words/' + examples[2] + '.png';
        this.ex1Audio.src = '/assets/audio/sight-words/' + examples[0] + '.mp3';
        this.ex2Audio.src = '/assets/audio/sight-words/' + examples[1] + '.mp3';
        this.ex3Audio.src = '/assets/audio/sight-words/' + examples[2] + '.mp3';
        this.ex1Audio.load();
        this.ex2Audio.load();
        this.ex3Audio.load();
    }
    // Function for Quiz-All; selects a new random phoneme to quiz on;
    loadNewPhoneme() {
        // Chooses a random phoneme that belongs in its category
        var key = 0;
        if (!this.list || this.list === '') {
            this.router.navigate(['']);
        }
        else if (this.list === 'phoneme') {
            key = Math.floor(Math.random() * 92);
        }
        else if (this.list === 'vowels') {
            key = Math.floor(Math.random() * 17);
        }
        else if (this.list === 'consonantBlends') {
            key = Math.floor(Math.random() * 15);
        }
        else if (this.list === 'consonants') {
            key = Math.floor(Math.random() * 22);
        }
        else if (this.list === 'vowelConsonants') {
            key = Math.floor(Math.random() * 10);
        }
        else if (this.list === 'vowelPairs') {
            key = Math.floor(Math.random() * 15);
        }
        else if (this.list === 'kindergarten') {
            key = Math.floor(Math.random() * 53);
        }
        this.key = key;
        this.phoneme = this.data[key];
        this.quizPhoneme = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6__.find(o => o.id == this.phoneme.id);
    }
    generateExamples() {
        var positiveExamples = this.quizPhoneme["quiz-words"];
        positiveExamples = [].concat(positiveExamples, [
            this.phoneme.word1.word,
            this.phoneme.word2.word,
            this.phoneme.word3.word
        ]);
        var positiveExample;
        do {
            positiveExample = positiveExamples[Math.floor(Math.random() * positiveExamples.length)];
        } while (_assets_json_bad_assets_json__WEBPACK_IMPORTED_MODULE_7__.includes(positiveExample));
        return [
            positiveExample,
            this.generateNegativeExample(positiveExamples),
            this.generateNegativeExample(positiveExamples)
        ];
    }
    isValidNegativeExample(example, positiveExamples) {
        return !positiveExamples.includes(example) && !example.includes(this.phoneme.display) && !_assets_json_bad_assets_json__WEBPACK_IMPORTED_MODULE_7__.includes(example);
    }
    generateNegativeExample(positiveExamples) {
        var example;
        do {
            example = this.randomQuizWord();
        } while (!this.isValidNegativeExample(example, positiveExamples));
        return example;
    }
    randomQuizWord() {
        var quizWords = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6__[Math.floor(Math.random() * _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_6__.length)]["quiz-words"];
        return quizWords[Math.floor(Math.random() * quizWords.length)];
    }
    onClick1() {
        if (this.correctAnswer == 0) {
            this.onCorrect();
        }
        else {
            this.incorrectAnswer();
            this.playAudio();
        }
    }
    onClick2() {
        if (this.correctAnswer == 1) {
            this.onCorrect();
        }
        else {
            this.incorrectAnswer();
            this.playAudio();
        }
    }
    onClick3() {
        if (this.correctAnswer == 2) {
            this.onCorrect();
        }
        else {
            this.incorrectAnswer();
            this.playAudio();
        }
    }
    incorrectAnswer() {
        if (!this.hasGuessed) {
            this.hasGuessed = true;
            this.isFirstAttempt = false;
            const goldStarNum = this.phonemeProgressService.getGoldStarsFromKey("phoneme" + this.phoneme.id);
            if (goldStarNum > 0 && goldStarNum < 5) {
                this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "gold", -1);
                this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "silv", 1);
            }
        }
    }
    playEx1Audio() {
        this.ex1Animate = true;
        this.ex1Audio.onended = () => {
            this.ex1Animate = false;
            this.ex1Audio.onended = () => {
                this.ex1Animate = false;
                this.ex2Animate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                    this.ex2Audio.play();
                });
            };
        };
        this.ex1Audio.play();
    }
    playEx2Audio() {
        this.ex2Animate = true;
        this.ex2Audio.onended = () => {
            this.ex2Animate = false;
            this.ex2Audio.onended = () => {
                this.ex2Animate = false;
                this.ex3Animate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(250).then(() => {
                    this.ex3Audio.play();
                });
            };
        };
        this.ex2Audio.play();
    }
    playEx3Audio() {
        this.ex3Animate = true;
        this.ex3Audio.onended = () => {
            this.ex3Animate = false;
        };
        this.ex3Audio.play();
    }
};
PhonemeQuizComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_4__["TransferLetterService"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] },
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_8__["ProgressService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_phonemes_service__WEBPACK_IMPORTED_MODULE_10__["PhonemesService"] },
    { type: _services_vowels_service__WEBPACK_IMPORTED_MODULE_11__["VowelsService"] },
    { type: _services_consonantBlends_service__WEBPACK_IMPORTED_MODULE_12__["ConsonantBlendsService"] },
    { type: _services_consonants_service__WEBPACK_IMPORTED_MODULE_13__["ConsonantsService"] },
    { type: _services_vowelConsonantBlends_service__WEBPACK_IMPORTED_MODULE_14__["VowelConsonantBlendsService"] },
    { type: _services_vowelPairs_service__WEBPACK_IMPORTED_MODULE_15__["VowelPairsService"] },
    { type: _services_kindergarten_service__WEBPACK_IMPORTED_MODULE_16__["KindergartenService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PhonemeQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/phoneme-quiz/phoneme-quiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-quiz.component.css */ "./src/app/pages/phoneme-quiz/phoneme-quiz.component.css")).default]
    })
], PhonemeQuizComponent);



/***/ }),

/***/ "./src/app/pages/puzzle/puzzle.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/puzzle/puzzle.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n\tbackground-color: #FFFFFF !important;\n}\n\n#side-menu {\n\tbackground-color: #6EC7D4 !important;\n}\n\n#main-body {\n    width: 169.7vh;\n    height: 0vh;\n    padding-left: 22vh;\n    position: relative;\n}\n\n#puzzle-image {\n    width: 68vh;\n    height: 90vh;\n    margin: 3vh 0 0 10vh;\n    vertical-align: middle;\n}\n\n#rhyme {\n    font-family: Arial, Helvetica, sans-serif !important;\n    display: inline-block;\n    text-align: left;\n    width: 80vh;\n    font-size: 3.3vh;\n    margin: 3vh 0 0 5vh;\n    vertical-align: middle;\n    line-height: 5.5vh;\n}\n\n#rhyme ::ng-deep span {\n    color: red;\n    font-family: Arial, Helvetica, sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHV6emxlL3B1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvREFBb0Q7QUFDeEQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdXp6bGUvcHV6emxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuI3NpZGUtbWVudSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2RUM3RDQgIWltcG9ydGFudDtcbn1cblxuI21haW4tYm9keSB7XG4gICAgd2lkdGg6IDE2OS43dmg7XG4gICAgaGVpZ2h0OiAwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3B1enpsZS1pbWFnZSB7XG4gICAgd2lkdGg6IDY4dmg7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIG1hcmdpbjogM3ZoIDAgMCAxMHZoO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbiNyaHltZSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogODB2aDtcbiAgICBmb250LXNpemU6IDMuM3ZoO1xuICAgIG1hcmdpbjogM3ZoIDAgMCA1dmg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogNS41dmg7XG59XG5cbiNyaHltZSA6Om5nLWRlZXAgc3BhbiB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/puzzle/puzzle.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/puzzle/puzzle.component.ts ***!
  \**************************************************/
/*! exports provided: PuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleComponent", function() { return PuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");





let PuzzleComponent = class PuzzleComponent {
    constructor(transferService, location) {
        this.transferService = transferService;
        this.location = location;
        // get phoneme data
        this.phoneme = this.transferService.getData();
        this.img = '../../assets/img/puzzle-pieces/puzzle-' + this.phoneme.id + '/puzzle-' + this.phoneme.id + '-composite.png';
        this.text = this.phoneme.rhyme.replace(/[(]/g, '<span>').replace(/[)]/g, '</span>').replace(/;/g, ',');
        // play audio
        this.rhyme = new Audio();
        this.rhyme.src = '../../assets/audio/rhymes/puzzle-' + this.phoneme.id + '-rhyme.mp3';
        this.rhyme.load();
        this.playAudio();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.rhyme.pause();
        this.rhyme = null;
    }
    playAudio() {
        this.rhyme.pause();
        this.rhyme.currentTime = 0;
        this.rhyme.play();
    }
    goBack() {
        this.location.back();
    }
};
PuzzleComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_3__["TransferLetterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
PuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./puzzle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzle/puzzle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./puzzle.component.css */ "./src/app/pages/puzzle/puzzle.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PuzzleComponent);



/***/ }),

/***/ "./src/app/pages/puzzles/puzzles.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/puzzles/puzzles.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n\tbackground-color: #FFFFFF !important;\n}\n\n#side-menu {\n\tbackground-color: #6EC7D4 !important;\n}\n\n#main-body {\n    width: 164vh;\n    height: 0vh;\n    padding-left: 22vh;\n    position: relative;\n  }\n\n.cardList {\n    display: flex;\n    height: 97vh;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    overflow: scroll;\n}\n\n/* Item sizing */\n\n.cardListItem {\n  width: 32vh;\n  height: 42vh;\n  margin-top: 4.5vh;\n  margin-right: 32px;\n  cursor: pointer;\n  border: none;\n  background-color: #ECF9EF;\n  font-size: 9vh;\n  text-align: center;\n}\n\n.cardListItem p {\n  margin-top: 13vh;\n}\n\n#background {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHV6emxlcy9wdXp6bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdXp6bGVzL3B1enpsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuXG4jc2lkZS1tZW51IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzZFQzdENCAhaW1wb3J0YW50O1xufVxuXG4jbWFpbi1ib2R5IHtcbiAgICB3aWR0aDogMTY0dmg7XG4gICAgaGVpZ2h0OiAwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4uY2FyZExpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA5N3ZoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vKiBJdGVtIHNpemluZyAqL1xuLmNhcmRMaXN0SXRlbSB7XG4gIHdpZHRoOiAzMnZoO1xuICBoZWlnaHQ6IDQydmg7XG4gIG1hcmdpbi10b3A6IDQuNXZoO1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGOUVGO1xuICBmb250LXNpemU6IDl2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZExpc3RJdGVtIHAge1xuICBtYXJnaW4tdG9wOiAxM3ZoO1xufVxuXG4jYmFja2dyb3VuZCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/puzzles/puzzles.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/puzzles/puzzles.component.ts ***!
  \****************************************************/
/*! exports provided: PuzzlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzlesComponent", function() { return PuzzlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/transfer-letter-service.service */ "./src/app/services/transfer-letter-service.service.ts");
/* harmony import */ var _services_phonemes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/phonemes.service */ "./src/app/services/phonemes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/services/user-data.service.ts");








let PuzzlesComponent = class PuzzlesComponent {
    constructor(transferLetterService, phonemesService, progressService, userDataService, router, activatedRoute, location) {
        this.transferLetterService = transferLetterService;
        this.phonemesService = phonemesService;
        this.progressService = progressService;
        this.userDataService = userDataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        // load phonemes data
        this.data = this.phonemesService.dataLoad();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // set background for completed puzzles
        for (var i = 0; i < this.userDataService.getPuzzles().length; i++) {
            document.getElementById(this.userDataService.getPuzzles()[i]).style.background = "url('../../assets/img/puzzle-pieces/puzzle-" + this.userDataService.getPuzzles()[i] + "/puzzle-" + this.userDataService.getPuzzles()[i] + "-composite.png')";
            document.getElementById(this.userDataService.getPuzzles()[i]).style.backgroundSize = '32vh 42vh';
            document.getElementById(this.userDataService.getPuzzles()[i]).style.color = 'transparent';
        }
    }
    getDisplay(item) {
        return item.display;
    }
    select(item) {
        this.transferLetterService.setData(item);
        if (this.progressService.getGoldStarsFromKey('phoneme' + item.id) == 5) {
            this.router.navigate(['puzzle']);
        }
        else {
            this.router.navigate(['phoneme-learn']);
        }
    }
    goBack() {
        this.location.back();
    }
    setID(item) {
        return item.id;
    }
};
PuzzlesComponent.ctorParameters = () => [
    { type: _services_transfer_letter_service_service__WEBPACK_IMPORTED_MODULE_2__["TransferLetterService"] },
    { type: _services_phonemes_service__WEBPACK_IMPORTED_MODULE_3__["PhonemesService"] },
    { type: _services_progress_service__WEBPACK_IMPORTED_MODULE_6__["ProgressService"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_7__["UserDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
PuzzlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./puzzles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/puzzles/puzzles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./puzzles.component.css */ "./src/app/pages/puzzles/puzzles.component.css")).default]
    })
], PuzzlesComponent);



/***/ }),

/***/ "./src/app/services/alphabet-letters.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/alphabet-letters.service.ts ***!
  \******************************************************/
/*! exports provided: AlphabetLettersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphabetLettersService", function() { return AlphabetLettersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _types_alphabet_letter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/alphabet-letter */ "./src/app/types/alphabet-letter.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_json_letters_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/letters.json */ "./src/assets/json/letters.json");
var _assets_json_letters_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/letters.json */ "./src/assets/json/letters.json", 1);





let AlphabetLettersService = class AlphabetLettersService {
    constructor() {
        this._letters = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.letters = this._letters.asObservable();
    }
    dataImport() {
        const temp = [];
        const data = _assets_json_letters_json__WEBPACK_IMPORTED_MODULE_4__.valueOf();
        data.forEach(letter => {
            temp.push(new _types_alphabet_letter__WEBPACK_IMPORTED_MODULE_2__["AlphabetLetter"](letter.letter, `/assets/audio/letters/${letter.audio}`, 0));
        });
        return data;
    }
};
AlphabetLettersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlphabetLettersService);



/***/ }),

/***/ "./src/app/services/consonantBlends.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/consonantBlends.service.ts ***!
  \*****************************************************/
/*! exports provided: ConsonantBlendsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantBlendsService", function() { return ConsonantBlendsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _types_consonantBlends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/consonantBlends */ "./src/app/types/consonantBlends.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json");
var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json", 1);
/* harmony import */ var _types_sight_word__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/sight-word */ "./src/app/types/sight-word.ts");






let ConsonantBlendsService = class ConsonantBlendsService {
    constructor() {
        this._consonantBlends = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.consonantBlends = this._consonantBlends.asObservable();
        this.dataLoad();
    }
    dataLoad() {
        const temp = [];
        const data = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__.valueOf();
        for (var i = 0; i < data.length; i++) {
            if (data[i].category === "CB") {
                temp.push(new _types_consonantBlends__WEBPACK_IMPORTED_MODULE_2__["ConsonantBlends"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme));
            }
        }
        this._consonantBlends.next(temp);
        return temp;
    }
};
ConsonantBlendsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConsonantBlendsService);



/***/ }),

/***/ "./src/app/services/consonants.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/consonants.service.ts ***!
  \************************************************/
/*! exports provided: ConsonantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantsService", function() { return ConsonantsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _types_consonants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/consonants */ "./src/app/types/consonants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json");
var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json", 1);
/* harmony import */ var _types_sight_word__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/sight-word */ "./src/app/types/sight-word.ts");






let ConsonantsService = class ConsonantsService {
    constructor() {
        this._consonants = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.consonants = this._consonants.asObservable();
        this.dataLoad();
    }
    dataLoad() {
        const temp = [];
        const data = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__.valueOf();
        for (var i = 0; i < data.length; i++) {
            if (data[i].category === "C") {
                temp.push(new _types_consonants__WEBPACK_IMPORTED_MODULE_2__["Consonants"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme));
            }
        }
        this._consonants.next(temp);
        return temp;
    }
};
ConsonantsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConsonantsService);



/***/ }),

/***/ "./src/app/services/kindergarten.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/kindergarten.service.ts ***!
  \**************************************************/
/*! exports provided: KindergartenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KindergartenService", function() { return KindergartenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _types_kindergarten__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/kindergarten */ "./src/app/types/kindergarten.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json");
var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json", 1);
/* harmony import */ var _types_sight_word__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/sight-word */ "./src/app/types/sight-word.ts");






let KindergartenService = class KindergartenService {
    constructor() {
        this._kindergarten = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.kindergarten = this._kindergarten.asObservable();
        this.dataLoad();
    }
    dataLoad() {
        const temp = [];
        const data = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__.valueOf();
        for (var i = 0; i < data.length; i++) {
            if (data[i].grade === "K" || data[i].grade === "K-only") {
                temp.push(new _types_kindergarten__WEBPACK_IMPORTED_MODULE_2__["Kindergarten"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme, data[i].grade));
            }
        }
        this._kindergarten.next(temp);
        return temp;
    }
};
KindergartenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], KindergartenService);



/***/ }),

/***/ "./src/app/services/phonemes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/phonemes.service.ts ***!
  \**********************************************/
/*! exports provided: PhonemesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemesService", function() { return PhonemesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _types_phoneme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/phoneme */ "./src/app/types/phoneme.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json");
var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json", 1);
/* harmony import */ var _types_sight_word__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/sight-word */ "./src/app/types/sight-word.ts");






let PhonemesService = class PhonemesService {
    constructor() {
        this._phonemes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.phonemes = this._phonemes.asObservable();
        this.dataLoad();
    }
    dataLoad() {
        const temp = [];
        const data = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__.valueOf();
        for (var i = 0; i < data.length; i++) {
            if (data[i].grade !== "K-only") {
                temp.push(new _types_phoneme__WEBPACK_IMPORTED_MODULE_2__["Phoneme"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme));
            }
        }
        this._phonemes.next(temp);
        return temp;
    }
};
PhonemesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhonemesService);



/***/ }),

/***/ "./src/app/services/progress.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/progress.service.ts ***!
  \**********************************************/
/*! exports provided: ProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressService", function() { return ProgressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");



let ProgressService = class ProgressService {
    constructor(storage) {
        this.storage = storage;
        this.storage.set('hasReceivedPhonemeInstruction', false);
        this.storage.set('hasReceivedAlphabetInstruction', false);
    }
    getReceivedInstructions(key) {
        return this.storage.get(key);
    }
    setReceivedInstructions(key, hasRecInstructions) {
        this.storage.set(key, hasRecInstructions);
    }
    //initial each input with { stars: 0, active: false, checkmark: false }
    prepareNewKeyProgress() {
        return { 'gold_stars': 0,
            'silver_stars': 0,
            'active': true,
            'checkmark': false };
    }
    getCheckMark(key) {
        if (this.storage.get(key) != null) {
            return this.storage.get(key).checkmark;
        }
        else {
            return false;
        }
    }
    setCheckMark(key, val) {
        let input;
        if (this.storage.get(key) != null) {
            input = { 'gold_stars': 5,
                'silver_stars': 0,
                'active': this.storage.get(key).active,
                'checkmark': val };
        }
        return this.storage.set(key, input);
    }
    saveStarsToKey(key, val) {
        let actualKey = key.slice(0, -4);
        let input;
        if (this.storage.get(actualKey) == null) {
            input = this.prepareNewKeyProgress();
            if (key.includes("gold")) {
                input.gold_stars += val;
            }
            else {
                input.silver_stars += val;
            }
        }
        else {
            input = this.storage.get(actualKey);
            if (key.includes("gold")) {
                if (input.gold_stars + val >= 5 && actualKey.includes("letter")) {
                    input.checkmark = true;
                    input.gold_stars = 5;
                }
                else if (input.gold_stars + val >= 5) {
                    input.gold_stars = 5;
                }
                else {
                    input.gold_stars += val;
                }
            }
            else if (input.gold_stars + val < 5) {
                if (input.silver_stars + val >= 5) {
                    input.silver_stars = 5;
                }
                else {
                    input.silver_stars += val;
                }
            }
        }
        this.storage.set(actualKey, input);
    }
    getGoldStarsFromKey(key) {
        let stars = 0;
        if (this.storage.get(key) != null) {
            stars = this.storage.get(key).gold_stars;
        }
        return stars;
    }
    getSilverStarsFromKey(key) {
        let stars = 0;
        if (this.storage.get(key) != null) {
            stars = this.storage.get(key).silver_stars;
        }
        return stars;
    }
};
ProgressService.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"],] }] }
];
ProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"]))
], ProgressService);



/***/ }),

/***/ "./src/app/services/transfer-letter-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/transfer-letter-service.service.ts ***!
  \*************************************************************/
/*! exports provided: TransferLetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferLetterService", function() { return TransferLetterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TransferLetterService = class TransferLetterService {
    constructor(router) {
        this.router = router;
    }
    setList(list) {
        this.list = list;
    }
    getList() {
        return this.list;
    }
    setData(data) {
        this.data = data;
    }
    getData() {
        if (!this.data) {
            this.router.navigate(['']);
        }
        return this.data;
    }
    clearData() {
        this.data = undefined;
    }
};
TransferLetterService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TransferLetterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TransferLetterService);



/***/ }),

/***/ "./src/app/services/user-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");



const coinKey = 'COINS';
const completePuzzlesKey = 'COMPLETED_PUZZLES';
const puzzlePiecesEarnedKey = 'PUZZLE_PIECES_EARNED';
let UserDataService = class UserDataService {
    constructor(storage) {
        this.storage = storage;
    }
    addCoins(amount) {
        this.storage.set(coinKey, this.getCoins() + amount);
    }
    getCoins() {
        return this.storage.get(coinKey) || 0;
    }
    savePuzzle(puzzlePhoneme) {
        var completePuzzles = this.getPuzzles();
        completePuzzles.push(puzzlePhoneme);
        this.storage.set(completePuzzlesKey, completePuzzles);
    }
    getPuzzles() {
        return this.storage.get(completePuzzlesKey) || [];
    }
    addPuzzlePieces(puzzlePhoneme, amount) {
        var puzzlePiecesEarned = this.storage.get(puzzlePiecesEarnedKey) || {};
        if (puzzlePhoneme in puzzlePiecesEarned) {
            puzzlePiecesEarned[puzzlePhoneme] += amount;
            if (puzzlePiecesEarned[puzzlePhoneme] >= 12) {
                puzzlePiecesEarned[puzzlePhoneme] = 12;
                if (!(this.getPuzzles().includes(puzzlePhoneme))) {
                    this.savePuzzle(puzzlePhoneme);
                }
            }
        }
        else {
            puzzlePiecesEarned[puzzlePhoneme] = amount;
        }
        this.storage.set(puzzlePiecesEarnedKey, puzzlePiecesEarned);
    }
    getPuzzlePieces(puzzlePhoneme) {
        var puzzlePiecesEarned = this.storage.get(puzzlePiecesEarnedKey) || {};
        if (puzzlePhoneme in puzzlePiecesEarned) {
            return puzzlePiecesEarned[puzzlePhoneme];
        }
        else {
            return 0;
        }
    }
};
UserDataService.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"],] }] }
];
UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"]))
], UserDataService);



/***/ }),

/***/ "./src/app/services/vowelConsonantBlends.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/vowelConsonantBlends.service.ts ***!
  \**********************************************************/
/*! exports provided: VowelConsonantBlendsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VowelConsonantBlendsService", function() { return VowelConsonantBlendsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _types_vowelConsonantBlends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/vowelConsonantBlends */ "./src/app/types/vowelConsonantBlends.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json");
var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json", 1);
/* harmony import */ var _types_sight_word__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/sight-word */ "./src/app/types/sight-word.ts");






let VowelConsonantBlendsService = class VowelConsonantBlendsService {
    constructor() {
        this._vowelConsonantBlends = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.vowelConsonantBlends = this._vowelConsonantBlends.asObservable();
        this.dataLoad();
    }
    dataLoad() {
        const temp = [];
        const data = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__.valueOf();
        for (var i = 0; i < data.length; i++) {
            if (data[i].category === "VC") {
                temp.push(new _types_vowelConsonantBlends__WEBPACK_IMPORTED_MODULE_2__["VowelConsonantBlends"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme));
            }
        }
        this._vowelConsonantBlends.next(temp);
        return temp;
    }
};
VowelConsonantBlendsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VowelConsonantBlendsService);



/***/ }),

/***/ "./src/app/services/vowelPairs.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/vowelPairs.service.ts ***!
  \************************************************/
/*! exports provided: VowelPairsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VowelPairsService", function() { return VowelPairsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _types_vowelPairs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/vowelPairs */ "./src/app/types/vowelPairs.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json");
var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json", 1);
/* harmony import */ var _types_sight_word__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/sight-word */ "./src/app/types/sight-word.ts");






let VowelPairsService = class VowelPairsService {
    constructor() {
        this._vowelPairs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.vowelPairs = this._vowelPairs.asObservable();
        this.dataLoad();
    }
    dataLoad() {
        const temp = [];
        const data = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__.valueOf();
        for (var i = 0; i < data.length; i++) {
            if (data[i].category === "VP") {
                temp.push(new _types_vowelPairs__WEBPACK_IMPORTED_MODULE_2__["VowelPairs"](data[i].id, data[i].display, `../../assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word1.word, data[i].word1.display, `../../assets/audio/sight-words/${data[i].word1.audio}`, `../../assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word2.word, data[i].word2.display, `../../assets/audio/sight-words/${data[i].word2.audio}`, `../../assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme));
            }
        }
        this._vowelPairs.next(temp);
        return temp;
    }
};
VowelPairsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VowelPairsService);



/***/ }),

/***/ "./src/app/services/vowels.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/vowels.service.ts ***!
  \********************************************/
/*! exports provided: VowelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VowelsService", function() { return VowelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _types_vowels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/vowels */ "./src/app/types/vowels.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json");
var _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/phonemes.json */ "./src/assets/json/phonemes.json", 1);
/* harmony import */ var _types_sight_word__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/sight-word */ "./src/app/types/sight-word.ts");






let VowelsService = class VowelsService {
    constructor() {
        this._vowels = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.vowels = this._vowels.asObservable();
        this.dataLoad();
    }
    dataLoad() {
        const temp = [];
        const data = _assets_json_phonemes_json__WEBPACK_IMPORTED_MODULE_4__.valueOf();
        for (var i = 0; i < data.length; i++) {
            if (data[i].category === "V") {
                temp.push(new _types_vowels__WEBPACK_IMPORTED_MODULE_2__["Vowels"](data[i].id, data[i].display, `/assets/audio/phonemes/${data[i].audio}`, new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word1.word, data[i].word1.display, `/assets/audio/sight-words/${data[i].word1.audio}`, `/assets/img/sight-words/${data[i].word1.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word2.word, data[i].word2.display, `/assets/audio/sight-words/${data[i].word2.audio}`, `/assets/img/sight-words/${data[i].word2.image}`), new _types_sight_word__WEBPACK_IMPORTED_MODULE_5__["SightWord"](data[i].word3.word, data[i].word3.display, `/assets/audio/sight-words/${data[i].word3.audio}`, `/assets/img/sight-words/${data[i].word3.image}`), data[i]['quiz-words'], data[i].color, data[i].category, 0, 0, data[i].rhyme));
            }
        }
        this._vowels.next(temp);
        return temp;
    }
};
VowelsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VowelsService);



/***/ }),

/***/ "./src/app/types/alphabet-letter.ts":
/*!******************************************!*\
  !*** ./src/app/types/alphabet-letter.ts ***!
  \******************************************/
/*! exports provided: AlphabetLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphabetLetter", function() { return AlphabetLetter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AlphabetLetter {
    constructor(letter, audio, stars) {
        this.letter = letter;
        this.audio = audio;
        this.stars = stars;
    }
}


/***/ }),

/***/ "./src/app/types/consonantBlends.ts":
/*!******************************************!*\
  !*** ./src/app/types/consonantBlends.ts ***!
  \******************************************/
/*! exports provided: ConsonantBlends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsonantBlends", function() { return ConsonantBlends; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ConsonantBlends {
    constructor(id, display, audio, word1, word2, word3, quizWords, color, category, stars, puzzlePiecesEarned, rhyme) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.quizWords = quizWords;
        this.color = color;
        this.category = category;
        this.stars = stars;
        this.puzzlePiecesEarned = puzzlePiecesEarned;
        this.rhyme = rhyme;
    }
}


/***/ }),

/***/ "./src/app/types/consonants.ts":
/*!*************************************!*\
  !*** ./src/app/types/consonants.ts ***!
  \*************************************/
/*! exports provided: Consonants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consonants", function() { return Consonants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Consonants {
    constructor(id, display, audio, word1, word2, word3, quizWords, color, category, stars, puzzlePiecesEarned, rhyme) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.quizWords = quizWords;
        this.color = color;
        this.category = category;
        this.stars = stars;
        this.puzzlePiecesEarned = puzzlePiecesEarned;
        this.rhyme = rhyme;
    }
}


/***/ }),

/***/ "./src/app/types/kindergarten.ts":
/*!***************************************!*\
  !*** ./src/app/types/kindergarten.ts ***!
  \***************************************/
/*! exports provided: Kindergarten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kindergarten", function() { return Kindergarten; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Kindergarten {
    constructor(id, display, audio, word1, word2, word3, quizWords, color, category, stars, puzzlePiecesEarned, rhyme, grade) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.quizWords = quizWords;
        this.color = color;
        this.category = category;
        this.stars = stars;
        this.puzzlePiecesEarned = puzzlePiecesEarned;
        this.rhyme = rhyme;
        this.grade = grade;
    }
}


/***/ }),

/***/ "./src/app/types/phoneme.ts":
/*!**********************************!*\
  !*** ./src/app/types/phoneme.ts ***!
  \**********************************/
/*! exports provided: Phoneme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phoneme", function() { return Phoneme; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Phoneme {
    constructor(id, display, audio, word1, word2, word3, quizWords, color, category, stars, puzzlePiecesEarned, rhyme) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.quizWords = quizWords;
        this.color = color;
        this.category = category;
        this.stars = stars;
        this.puzzlePiecesEarned = puzzlePiecesEarned;
        this.rhyme = rhyme;
    }
}


/***/ }),

/***/ "./src/app/types/sight-word.ts":
/*!*************************************!*\
  !*** ./src/app/types/sight-word.ts ***!
  \*************************************/
/*! exports provided: SightWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightWord", function() { return SightWord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SightWord {
    constructor(word, display, audio, image) {
        this.word = word;
        this.display = display;
        this.audio = audio;
        this.image = image;
    }
}


/***/ }),

/***/ "./src/app/types/vowelConsonantBlends.ts":
/*!***********************************************!*\
  !*** ./src/app/types/vowelConsonantBlends.ts ***!
  \***********************************************/
/*! exports provided: VowelConsonantBlends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VowelConsonantBlends", function() { return VowelConsonantBlends; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class VowelConsonantBlends {
    constructor(id, display, audio, word1, word2, word3, quizWords, color, category, stars, puzzlePiecesEarned, rhyme) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.quizWords = quizWords;
        this.color = color;
        this.category = category;
        this.stars = stars;
        this.puzzlePiecesEarned = puzzlePiecesEarned;
        this.rhyme = rhyme;
    }
}


/***/ }),

/***/ "./src/app/types/vowelPairs.ts":
/*!*************************************!*\
  !*** ./src/app/types/vowelPairs.ts ***!
  \*************************************/
/*! exports provided: VowelPairs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VowelPairs", function() { return VowelPairs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class VowelPairs {
    constructor(id, display, audio, word1, word2, word3, quizWords, color, category, stars, puzzlePiecesEarned, rhyme) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.quizWords = quizWords;
        this.color = color;
        this.category = category;
        this.stars = stars;
        this.puzzlePiecesEarned = puzzlePiecesEarned;
        this.rhyme = rhyme;
    }
}


/***/ }),

/***/ "./src/app/types/vowels.ts":
/*!*********************************!*\
  !*** ./src/app/types/vowels.ts ***!
  \*********************************/
/*! exports provided: Vowels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vowels", function() { return Vowels; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Vowels {
    constructor(id, display, audio, word1, word2, word3, quizWords, color, category, stars, puzzlePiecesEarned, rhyme) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.quizWords = quizWords;
        this.color = color;
        this.category = category;
        this.stars = stars;
        this.puzzlePiecesEarned = puzzlePiecesEarned;
        this.rhyme = rhyme;
    }
}


/***/ }),

/***/ "./src/assets/json/bad-assets.json":
/*!*****************************************!*\
  !*** ./src/assets/json/bad-assets.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"bionic\",\"bird\",\"blaze\",\"box\",\"bulb\",\"buzz\",\"cab\",\"clinic\",\"cub\",\"disc\",\"doc\",\"doll\",\"doze\",\"duck\",\"exciting\",\"explode\",\"explore\",\"fix\",\"foal\",\"gauze\",\"lock\",\"lynx\",\"magic\",\"quart\",\"quarter\",\"quiver\",\"ram\",\"seal\",\"sob\",\"sun\",\"tiger\",\"trex\",\"vegetables\",\"vet\",\"wax\",\"wind\",\"yell\",\"yummy\",\"zany\",\"zeppelin\",\"zigzag\"]");

/***/ }),

/***/ "./src/assets/json/letters.json":
/*!**************************************!*\
  !*** ./src/assets/json/letters.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"letter\":\"Aa\",\"audio\":\"A.mp3\"},{\"letter\":\"Bb\",\"audio\":\"B.mp3\"},{\"letter\":\"Cc\",\"audio\":\"C.mp3\"},{\"letter\":\"Dd\",\"audio\":\"D.mp3\"},{\"letter\":\"Ee\",\"audio\":\"E.mp3\"},{\"letter\":\"Ff\",\"audio\":\"F.mp3\"},{\"letter\":\"Gg\",\"audio\":\"G.mp3\"},{\"letter\":\"Hh\",\"audio\":\"H.mp3\"},{\"letter\":\"Ii\",\"audio\":\"I.mp3\"},{\"letter\":\"Jj\",\"audio\":\"J.mp3\"},{\"letter\":\"Kk\",\"audio\":\"K.mp3\"},{\"letter\":\"Ll\",\"audio\":\"L.mp3\"},{\"letter\":\"Mm\",\"audio\":\"M.mp3\"},{\"letter\":\"Nn\",\"audio\":\"N.mp3\"},{\"letter\":\"Oo\",\"audio\":\"O.mp3\"},{\"letter\":\"Pp\",\"audio\":\"P.mp3\"},{\"letter\":\"Qq\",\"audio\":\"Q.mp3\"},{\"letter\":\"Rr\",\"audio\":\"R.mp3\"},{\"letter\":\"Ss\",\"audio\":\"S.mp3\"},{\"letter\":\"Tt\",\"audio\":\"T.mp3\"},{\"letter\":\"Uu\",\"audio\":\"U.mp3\"},{\"letter\":\"Vv\",\"audio\":\"V.mp3\"},{\"letter\":\"Ww\",\"audio\":\"W.mp3\"},{\"letter\":\"Xx\",\"audio\":\"X.mp3\"},{\"letter\":\"Yy\",\"audio\":\"Y.mp3\"},{\"letter\":\"Zz\",\"audio\":\"Z.mp3\"}]");

/***/ }),

/***/ "./src/assets/json/phonemes.json":
/*!***************************************!*\
  !*** ./src/assets/json/phonemes.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"A-long\",\"audio\":\"phoneme-A-long.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"ape\",\"display\":\"<span>a</span>pe\",\"audio\":\"ape.mp3\",\"image\":\"ape.png\"},\"word2\":{\"word\":\"volcano\",\"display\":\"volc<span>a</span>no\",\"audio\":\"volcano.mp3\",\"image\":\"volcano.png\"},\"word3\":{\"word\":\"cake\",\"display\":\"c<span>a</span>ke\",\"audio\":\"cake.mp3\",\"image\":\"cake.png\"},\"quiz-words\":[\"skate\",\"tail\",\"suitcase\",\"crayons\",\"baby\",\"grapes\",\"playground\",\"jay\",\"cradle\",\"face\",\"whale\",\"crane\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Pat a c(a)ke; pat a c(a)ke; B(a)ker's man;</br>B(a)ke me a c(a)ke as fast as you can.</br>Pit it and pat it and mark it with B;</br>And put it in the oven for B(a)by and me.\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"A-short\",\"audio\":\"phoneme-A-short.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"bat\",\"display\":\"b<span>a</span>t\",\"audio\":\"bat.mp3\",\"image\":\"bat.png\"},\"word2\":{\"word\":\"cat\",\"display\":\"c<span>a</span>t\",\"audio\":\"cat.mp3\",\"image\":\"cat.png\"},\"word3\":{\"word\":\"wagon\",\"display\":\"w<span>a</span>gon\",\"audio\":\"wagon.mp3\",\"image\":\"wagon.png\"},\"quiz-words\":[\"axe\",\"taxi\",\"wagon\",\"clam\",\"hamster\",\"raccoons\",\"camel\",\"rabbit\",\"cactus\",\"statue\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"green\"},\"rhyme\":\"B(a)t; b(a)t;</br>Come under my h(a)t;</br>And I'll give you a slice of bacon;</br>And when I bake;</br>I'll give you a cake;</br>If I am not mistaken.\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"A-ahh\",\"audio\":\"phoneme-A-ahh.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"swan\",\"display\":\"sw<span>a</span>n\",\"audio\":\"swan.mp3\",\"image\":\"swan.png\"},\"word2\":{\"word\":\"father\",\"display\":\"f<span>a</span>ther\",\"audio\":\"father.mp3\",\"image\":\"father.png\"},\"word3\":{\"word\":\"squash\",\"display\":\"squ<span>a</span>sh\",\"audio\":\"squash.mp3\",\"image\":\"squash.png\"},\"quiz-words\":[\"saw\",\"swan\",\"fall\",\"hawk\",\"walnuts\",\"fall\",\"draw\",\"walrus\",\"ball\"],\"color\":{\"all\":\"purple\",\"vowel\":\"purple\",\"K\":\"purple\"},\"rhyme\":\"Children call me F(a)ther Goose,</br>Because when I w(a)nt to w(a)nder,</br>I ride through the air</br>On a very fine gander.</br>\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"A-schwa\",\"audio\":\"phoneme-A-schwa.mp3\",\"display\":\"a\",\"word1\":{\"word\":\"canoe\",\"display\":\"c<span>a</span>noe\",\"audio\":\"canoe.mp3\",\"image\":\"canoe.png\"},\"word2\":{\"word\":\"zebra\",\"display\":\"zebr<span>a</span>\",\"audio\":\"zebra.mp3\",\"image\":\"zebra.png\"},\"word3\":{\"word\":\"sofa\",\"display\":\"sof<span>a</span>\",\"audio\":\"sofa.mp3\",\"image\":\"sofa.png\"},\"quiz-words\":[\"afraid\",\"excavator\",\"gazelle\",\"balance beam\"],\"color\":{\"all\":\"orange\",\"vowel\":\"orange\",\"K\":\"orange\"},\"rhyme\":\"(A)round the bush, Willie,</br>(A)round the bee hive.</br>(A)round the bush, Willie,</br>I'll meet you (a)live.\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"A-AI\",\"audio\":\"phoneme-A-AI.mp3\",\"display\":\"ai\",\"word1\":{\"word\":\"tail\",\"display\":\"t<span>ai</span>l\",\"audio\":\"tail.mp3\",\"image\":\"tail.png\"},\"word2\":{\"word\":\"nail\",\"display\":\"n<span>ai</span>l\",\"audio\":\"nail.mp3\",\"image\":\"nail.png\"},\"word3\":{\"word\":\"rainbow\",\"display\":\"r<span>ai</span>nbow\",\"audio\":\"rainbow.mp3\",\"image\":\"rainbow.png\"},\"quiz-words\":[\"snail\",\"airplane\",\"chair\",\"saint bernard\",\"wheelchair\",\"afraid\",\"paint\",\"chainsaw\",\"mailman\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"R(ai)n, r(ai)n, go to Sp(ai)n,</br>Never come back again.</br>R(ai)n, r(ai)n, go away,</br>Come again another day.</br>Little Johny wants to play.\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"A-AN\",\"audio\":\"phoneme-A-AN.mp3\",\"display\":\"an\",\"word1\":{\"word\":\"man\",\"display\":\"m<span>an</span>\",\"audio\":\"man.mp3\",\"image\":\"man.png\"},\"word2\":{\"word\":\"hand\",\"display\":\"h<span>an</span>d\",\"audio\":\"hand.mp3\",\"image\":\"hand.png\"},\"word3\":{\"word\":\"candy\",\"display\":\"c<span>an</span>dy\",\"audio\":\"candy.mp3\",\"image\":\"candy.png\"},\"quiz-words\":[\"panda\",\"sandbox\",\"van\",\"frying pan\",\"blanket\",\"kangaroo\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Fr(an)kie Frog was afraid of (an)ts—</br>He flopped on (an) (an)thill and up did pr(an)ce!</br>To shake fire (an)ts from his underp(an)ts,</br>Fr(an)kie Frog d(an)ced to Paris, Fr(an)ce!</br>\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"A-AR\",\"audio\":\"phoneme-A-AR.mp3\",\"display\":\"ar\",\"word1\":{\"word\":\"arm\",\"display\":\"<span>ar</span>m\",\"audio\":\"arm.mp3\",\"image\":\"arm.png\"},\"word2\":{\"word\":\"star\",\"display\":\"st<span>ar</span>\",\"audio\":\"star.mp3\",\"image\":\"star.png\"},\"word3\":{\"word\":\"garden\",\"display\":\"g<span>ar</span>den\",\"audio\":\"garden.mp3\",\"image\":\"garden.png\"},\"quiz-words\":[\"car\",\"armadillo\",\"scarf\",\"barn\",\"carpet\",\"dark\",\"hard hat\",\"saint bernard\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Twinkle, twinkle, little st(ar),</br>How I wonder what you (ar)e.</br>Up above the world so high,</br>Like a diamond in the sky.\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"A-AU\",\"audio\":\"phoneme-A-AU.mp3\",\"display\":\"au\",\"word1\":{\"word\":\"daughter\",\"display\":\"d<span>au</span>ghter\",\"audio\":\"daughter.mp3\",\"image\":\"daughter.png\"},\"word2\":{\"word\":\"laundress\",\"display\":\"l<span>au</span>ndress\",\"audio\":\"laundress.mp3\",\"image\":\"laundress.png\"},\"word3\":{\"word\":\"sauce pan\",\"display\":\"s<span>au</span>ce pan\",\"audio\":\"sauce pan.mp3\",\"image\":\"sauce pan.png\"},\"quiz-words\":[\"astronaut\",\"sauce pan\",\"cauldron\",\"faucet\",\"caught\",\"haul\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Little Polly Flinders<br>Sat among the cinders,<br>Warming her pretty little toes.<br>Her mother came and c(au)ght her,</br>Whipped her little d(au)ghter</br>For spoiling her nice new clothes.\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"A-AW\",\"audio\":\"phoneme-A-AW.mp3\",\"display\":\"aw\",\"word1\":{\"word\":\"saw\",\"display\":\"s<span>aw</span>\",\"audio\":\"saw.mp3\",\"image\":\"saw.png\"},\"word2\":{\"word\":\"hawk\",\"display\":\"h<span>aw</span>k\",\"audio\":\"hawk.mp3\",\"image\":\"hawk.png\"},\"word3\":{\"word\":\"draw\",\"display\":\"dr<span>aw</span>\",\"audio\":\"draw.mp3\",\"image\":\"draw.png\"},\"quiz-words\":[\"chainsaw\",\"strawberries\",\"yawn\",\"straw\",\"claw hammer\",\"macaw parrot\",\"see saw\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"See s(aw), Margery D(aw),</br>Jacky shall have a new master.</br>Jacky will earn just a penny a day,</br>Because he will work no faster.\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"A-AY\",\"audio\":\"phoneme-A-AY.mp3\",\"display\":\"ay\",\"word1\":{\"word\":\"jay\",\"display\":\"j<span>ay</span>\",\"audio\":\"jay.mp3\",\"image\":\"jay.png\"},\"word2\":{\"word\":\"crayons\",\"display\":\"cr<span>ay</span>ons\",\"audio\":\"crayons.mp3\",\"image\":\"crayons.png\"},\"word3\":{\"word\":\"playground\",\"display\":\"pl<span>ay</span>ground\",\"audio\":\"playground.mp3\",\"image\":\"playground.png\"},\"quiz-words\":[\"daydreaming\",\"daybreak\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"How many d(ay)s has my baby to pl(ay)?</br>Saturd(ay); Sund(ay); Mond(ay);</br>Tuesd(ay); Wednesd(ay); Thursd(ay); Frid(ay);</br>Saturd(ay); Sund(ay); Mond(ay).\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"B-begin\",\"audio\":\"phoneme-B-buh.mp3\",\"display\":\"b\",\"word1\":{\"word\":\"boy\",\"display\":\"<span>b</span>oy\",\"audio\":\"boy.mp3\",\"image\":\"boy.png\"},\"word2\":{\"word\":\"bubble\",\"display\":\"<span>b</span>u<span>bb</span>le\",\"audio\":\"bubble.mp3\",\"image\":\"bubble.png\"},\"word3\":{\"word\":\"boat\",\"display\":\"<span>b</span>oat\",\"audio\":\"boat.mp3\",\"image\":\"boat.png\"},\"quiz-words\":[\"bird\",\"bat\",\"bear\",\"box\",\"beaver\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"B-end\",\"audio\":\"phoneme-B-buh.mp3\",\"display\":\"b\",\"word1\":{\"word\":\"cub\",\"display\":\"cu<span>b</span>\",\"audio\":\"cub.mp3\",\"image\":\"cub.png\"},\"word2\":{\"word\":\"crab\",\"display\":\"cra<span>b</span>\",\"audio\":\"crab.mp3\",\"image\":\"crab.png\"},\"word3\":{\"word\":\"cobweb\",\"display\":\"co<span>b</span>we<span>b</span>\",\"audio\":\"cobweb.mp3\",\"image\":\"cobweb.png\"},\"quiz-words\":[\"cab\",\"sob\",\"bulb\",\"rob\",\"bathtub\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"B-buh\",\"audio\":\"phoneme-B-buh.mp3\",\"display\":\"b\",\"word1\":{\"word\":\"bubble\",\"display\":\"<span>b</span>u<span>bb</span>le\",\"audio\":\"bubble.mp3\",\"image\":\"bubble.png\"},\"word2\":{\"word\":\"boy\",\"display\":\"<span>b</span>oy\",\"audio\":\"boy.mp3\",\"image\":\"boy.png\"},\"word3\":{\"word\":\"frisbee\",\"display\":\"fris<span>b</span>ee\",\"audio\":\"frisbee.mp3\",\"image\":\"frisbee.png\"},\"quiz-words\":[\"butterfly\",\"rabbit\",\"beaver\",\"sandbox\",\"saint bernard\",\"rainbow\",\"bat\",\"surfboard\",\"zebra\",\"balance\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Rock-a-(b)ye; (B)aby; on the tree top;</br>When the wind (b)lows the cradle will rock;</br>When the (b)ough (b)reaks the cradle will fall;</br>and down will come (B)aby; cradle; and all.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"B-BL\",\"audio\":\"phoneme-B-BL.mp3\",\"display\":\"bl\",\"word1\":{\"word\":\"blue\",\"display\":\"<span>bl</span>ue\",\"audio\":\"blue.mp3\",\"image\":\"blue.png\"},\"word2\":{\"word\":\"blanket\",\"display\":\"<span>bl</span>anket\",\"audio\":\"blanket.mp3\",\"image\":\"blanket.png\"},\"word3\":{\"word\":\"bloodhound\",\"display\":\"<span>bl</span>oodhound\",\"audio\":\"bloodhound.mp3\",\"image\":\"bloodhound.png\"},\"quiz-words\":[\"blackberries\",\"blew\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Little Boy (Bl)ue; come (bl)ow your horn;</br>The sheep's in the meadow; the cow's in the corn.</br>Where is the boy who minds the sheep?</br>Under the haystack fast asleep.</br>Will you wake him?</br>No; not I;</br>For if I do he's sure to cry.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"B-BR\",\"audio\":\"phoneme-B-BR.mp3\",\"display\":\"br\",\"word1\":{\"word\":\"bridge\",\"display\":\"<span>br</span>idge\",\"audio\":\"bridge.mp3\",\"image\":\"bridge.png\"},\"word2\":{\"word\":\"break\",\"display\":\"<span>br</span>eak\",\"audio\":\"break.mp3\",\"image\":\"break.png\"},\"word3\":{\"word\":\"brush\",\"display\":\"<span>br</span>ush\",\"audio\":\"brush.mp3\",\"image\":\"brush.png\"},\"quiz-words\":[\"zebra\",\"gingerbread man\",\"umbrellas\",\"sombrero\",\"eyebrow\",\"brother\",\"brown\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"London (Br)idge is falling down,</br>Falling down, falling down.</br>London (Br)idge is falling down.</br>My fair lady.</br></br>Build it up with stones and (br)icks,</br>Stones and (br)icks, stones and (br)icks.</br>Build it up with stones and (br)icks,</br>My fair lady.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"C-hard-begin\",\"audio\":\"phoneme-C-kuh.mp3\",\"display\":\"c\",\"word1\":{\"word\":\"cat\",\"display\":\"<span>c</span>at\",\"audio\":\"cat.mp3\",\"image\":\"cat.png\"},\"word2\":{\"word\":\"canary\",\"display\":\"<span>c</span>anary\",\"audio\":\"canary.mp3\",\"image\":\"canary.png\"},\"word3\":{\"word\":\"cake\",\"display\":\"<span>c</span>ake\",\"audio\":\"cake.mp3\",\"image\":\"cake.png\"},\"quiz-words\":[\"cub\",\"cut\",\"cow\",\"candy\",\"car\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"C-hard-end\",\"audio\":\"phoneme-C-kuh.mp3\",\"display\":\"c\",\"word1\":{\"word\":\"music\",\"display\":\"musi<span>c</span>\",\"audio\":\"music.mp3\",\"image\":\"music.png\"},\"word2\":{\"word\":\"magic\",\"display\":\"magi<span>c</span>\",\"audio\":\"magic.mp3\",\"image\":\"magic.png\"},\"word3\":{\"word\":\"picnic\",\"display\":\"pi<span>c</span>ni<span>c</span>\",\"audio\":\"picnic.mp3\",\"image\":\"picnic.png\"},\"quiz-words\":[\"doc\",\"croc\",\"disc\",\"bionic\",\"clinic\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"C-kuh\",\"audio\":\"phoneme-C-kuh.mp3\",\"display\":\"c\",\"word1\":{\"word\":\"cat\",\"display\":\"<span>c</span>at\",\"audio\":\"cat.mp3\",\"image\":\"cat.png\"},\"word2\":{\"word\":\"canary\",\"display\":\"<span>c</span>anary\",\"audio\":\"canary.mp3\",\"image\":\"canary.png\"},\"word3\":{\"word\":\"cake\",\"display\":\"<span>c</span>ake\",\"audio\":\"cake.mp3\",\"image\":\"cake.png\"},\"quiz-words\":[\"candy\",\"volcano\",\"camel\",\"raccoons\",\"cow\",\"cut\",\"curl\",\"corn\",\"suitcase\",\"car\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Little Robin Redbreast sat upon a tree;<br>Up went the Kitty-(C)at; and down went he;</br>Down came Kitty-(C)at; away Robin ran;</br>Says little Robin Redbreast:</br>\\\"(C)atch me if you (c)an!\\\"\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"C-sss\",\"audio\":\"phoneme-C-sss.mp3\",\"display\":\"c\",\"word1\":{\"word\":\"celery\",\"display\":\"<span>c</span>elery\",\"audio\":\"celery.mp3\",\"image\":\"celery.png\"},\"word2\":{\"word\":\"face\",\"display\":\"fa<span>c</span>e\",\"audio\":\"face.mp3\",\"image\":\"face.png\"},\"word3\":{\"word\":\"balance\",\"display\":\"balan<span>c</span>e\",\"audio\":\"balance.mp3\",\"image\":\"balance.png\"},\"quiz-words\":[\"ice\",\"pencil\",\"tricycle\",\"unicycle\",\"ice cream\",\"sauce pan\",\"dancing\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\"},\"rhyme\":\"(C)elery, lettu(c)e, and ri(c)e aren’t my dream,</br>But you scream, I scream, we all scream</br>for i(c)e cream!</br>\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"C-CH\",\"audio\":\"phoneme-C-CH.mp3\",\"display\":\"ch\",\"word1\":{\"word\":\"chipmunk\",\"display\":\"<span>ch</span>ipmunk\",\"audio\":\"chipmunk.mp3\",\"image\":\"chipmunk.png\"},\"word2\":{\"word\":\"chimney\",\"display\":\"<span>ch</span>imney\",\"audio\":\"chimney.mp3\",\"image\":\"chimney.png\"},\"word3\":{\"word\":\"catch\",\"display\":\"cat<span>ch</span>\",\"audio\":\"catch.mp3\",\"image\":\"catch.png\"},\"quiz-words\":[\"catcher\",\"chair\",\"hatchet\",\"wheelchair\",\"ostrich\",\"chainsaw\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Cross pat(ch); pull the lat(ch);</br>Sit by the fire and spin;</br>Take a cup and drink it up;</br>Then call your neighbors in.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"C-CL\",\"audio\":\"phoneme-C-CL.mp3\",\"display\":\"cl\",\"word1\":{\"word\":\"clown\",\"display\":\"<span>cl</span>own\",\"audio\":\"clown.mp3\",\"image\":\"clown.png\"},\"word2\":{\"word\":\"clam\",\"display\":\"<span>cl</span>am\",\"audio\":\"clam.mp3\",\"image\":\"clam.png\"},\"word3\":{\"word\":\"climb\",\"display\":\"<span>cl</span>imb\",\"audio\":\"climb.mp3\",\"image\":\"climb.png\"},\"quiz-words\":[\"cloud\",\"claw hammer\",\"clam\",\"cleats\",\"clarinet\",\"hedge clippers\",\"four-leaf clover\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Tickety-tock, (cl)imb up the (cl)ock,</br>Don’t let the time get dirty.</br>Tickety-tock we (cl)eaned the (cl)ock,</br>Now one o’(cl)ock looks pretty.</br>\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"C-CR\",\"audio\":\"phoneme-C-CR.mp3\",\"display\":\"cr\",\"word1\":{\"word\":\"crab\",\"display\":\"<span>cr</span>ab\",\"audio\":\"crab.mp3\",\"image\":\"crab.png\"},\"word2\":{\"word\":\"crane\",\"display\":\"<span>cr</span>ane\",\"audio\":\"crane.mp3\",\"image\":\"crane.png\"},\"word3\":{\"word\":\"cradle\",\"display\":\"<span>cr</span>adle\",\"audio\":\"cradle.mp3\",\"image\":\"cradle.png\"},\"quiz-words\":[\"crayons\",\"cry\",\"scratch\",\"ice cream\",\"cranberries\",\"screws\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"There was a (cr)ooked man;</br>And he walked a (cr)ooked mile;</br>He found a (cr)ooked sixpence;</br>Against a (cr)ooked tile;</br>He bought a (cr)ooked cat;</br>Which caught a (cr)ooked mouse;</br>And they all lived together;</br>In a little (cr)ooked house.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"D-begin\",\"audio\":\"phoneme-D-duh.mp3\",\"display\":\"d\",\"word1\":{\"word\":\"dog\",\"display\":\"<span>d</span>og\",\"audio\":\"dog.mp3\",\"image\":\"dog.png\"},\"word2\":{\"word\":\"drum\",\"display\":\"<span>d</span>rum\",\"audio\":\"drum.mp3\",\"image\":\"drum.png\"},\"word3\":{\"word\":\"door\",\"display\":\"<span>d</span>oor\",\"audio\":\"door.mp3\",\"image\":\"door.png\"},\"quiz-words\":[\"dozer\",\"dig\",\"doll\",\"duck\",\"dandelion\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"D-end\",\"audio\":\"phoneme-D-duh.mp3\",\"display\":\"d\",\"word1\":{\"word\":\"bird\",\"display\":\"bir<span>d</span>\",\"audio\":\"bird.mp3\",\"image\":\"bird.png\"},\"word2\":{\"word\":\"cold\",\"display\":\"col<span>d</span>\",\"audio\":\"cold.mp3\",\"image\":\"cold.png\"},\"word3\":{\"word\":\"friend\",\"display\":\"frien<span>d</span>\",\"audio\":\"friend.mp3\",\"image\":\"friend.png\"},\"quiz-words\":[\"bed\",\"hid\",\"toad\",\"wind\",\"sled\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"D-duh\",\"audio\":\"phoneme-D-duh.mp3\",\"display\":\"d\",\"word1\":{\"word\":\"dog\",\"display\":\"<span>d</span>og\",\"audio\":\"dog.mp3\",\"image\":\"dog.png\"},\"word2\":{\"word\":\"dozer\",\"display\":\"<span>d</span>ozer\",\"audio\":\"dozer.mp3\",\"image\":\"dozer.png\"},\"word3\":{\"word\":\"sled\",\"display\":\"sle<span>d</span>\",\"audio\":\"sled.mp3\",\"image\":\"sled.png\"},\"quiz-words\":[\"dig\",\"cloud\",\"dark\",\"slide\",\"window\",\"garden\",\"bed\",\"bulldog\",\"spider\",\"proud\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(D)iddle; (d)iddle; (d)umpling; my son John;</br>Went to be(d) with his trousers on;</br>One stocking off; and one stocking on;</br>(D)iddle; (d)iddle; (d)umpling; my son John.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"D-DR\",\"audio\":\"phoneme-D-DR.mp3\",\"display\":\"dr\",\"word1\":{\"word\":\"drink\",\"display\":\"<span>dr</span>ink\",\"audio\":\"drink.mp3\",\"image\":\"drink.png\"},\"word2\":{\"word\":\"drop\",\"display\":\"<span>dr</span>op\",\"audio\":\"drop.mp3\",\"image\":\"drop.png\"},\"word3\":{\"word\":\"drill\",\"display\":\"<span>dr</span>ill\",\"audio\":\"drill.mp3\",\"image\":\"drill.png\"},\"quiz-words\":[\"drum\",\"draw\",\"laundress\",\"cauldron\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Three chil(dr)en sliding on the ice;</br>All on a winter's day;</br>As it fell out; they all fell in;</br>The rest they ran away.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"E-long\",\"audio\":\"phoneme-E-long.mp3\",\"display\":\"e\",\"word1\":{\"word\":\"key\",\"display\":\"k<span>e</span>y\",\"audio\":\"key.mp3\",\"image\":\"key.png\"},\"word2\":{\"word\":\"zebra\",\"display\":\"z<span>e</span>bra\",\"audio\":\"zebra.mp3\",\"image\":\"zebra.png\"},\"word3\":{\"word\":\"tree\",\"display\":\"tr<span>ee</span>\",\"audio\":\"tree.mp3\",\"image\":\"tree.png\"},\"quiz-words\":[\"monkey\",\"frisbee\",\"trolley\",\"queen\",\"chimney\",\"jeep\",\"sleepy\",\"sweet\",\"three\",\"wheelchair\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Little Bo-p(ee)p has lost her sh(ee)p;</br>And doesn't know where to find them;</br>Leave them alone; and they'll come home;</br>Wagging their tails behind them.\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"E-short\",\"audio\":\"phoneme-E-short.mp3\",\"display\":\"e\",\"word1\":{\"word\":\"elf\",\"display\":\"<span>e</span>lf\",\"audio\":\"elf.mp3\",\"image\":\"elf.png\"},\"word2\":{\"word\":\"bed\",\"display\":\"b<span>e</span>d\",\"audio\":\"bed.mp3\",\"image\":\"bed.png\"},\"word3\":{\"word\":\"net\",\"display\":\"n<span>e</span>t\",\"audio\":\"net.mp3\",\"image\":\"net.png\"},\"quiz-words\":[\"sled\",\"yellow\",\"jelly-jars\",\"jellyfish\",\"bell\",\"pretzel\",\"present\",\"question\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"green\"},\"rhyme\":\"Hick(e)ty; pick(e)ty; my black h(e)n;</br>She lays (e)ggs for gentlem(e)n;</br>Gentlem(e)n come (e)very day;</br>To see what my black h(e)n does lay.\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"E-schwa\",\"audio\":\"phoneme-E-schwa.mp3\",\"display\":\"e\",\"word1\":{\"word\":\"camel\",\"display\":\"cam<span>e</span>l\",\"audio\":\"camel.mp3\",\"image\":\"camel.png\"},\"word2\":{\"word\":\"hatchet\",\"display\":\"hatch<span>e</span>t\",\"audio\":\"hatchet.mp3\",\"image\":\"hatchet.png\"},\"word3\":{\"word\":\"kitten\",\"display\":\"kitt<span>e</span>n\",\"audio\":\"kitten.mp3\",\"image\":\"kitten.png\"},\"quiz-words\":[\"oven\",\"carpet\",\"shovel\",\"squirrel\",\"mittens\",\"quiet\"],\"color\":{\"all\":\"orange\",\"vowel\":\"orange\",\"K\":\"orange\"},\"rhyme\":\"The el(e)phant want(e)d to cheat on her di(e)t</br>Found one gold(e)n cookie in the warm ov(e)n,</br>One in the gard(e)n, two in a torn pock(e)t,</br>Three hid in the kitch(e)n, that made sev(e)n,</br>Bought two at the mark(e)t, spied one in a bask(e)t,</br>Plus one she kept froz(e)n, that was elev(e)n,</br>And one from her lock(e)t, made twelve, a full doz(e)n</br>When she started to eat them it felt like pure heav(e)n!</br>\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"E-EA\",\"audio\":\"phoneme-E-EA.mp3\",\"display\":\"ea\",\"word1\":{\"word\":\"eat\",\"display\":\"<span>ea</span>t\",\"audio\":\"eat.mp3\",\"image\":\"eat.png\"},\"word2\":{\"word\":\"eagle\",\"display\":\"<span>ea</span>gle\",\"audio\":\"eagle.mp3\",\"image\":\"eagle.png\"},\"word3\":{\"word\":\"leaf\",\"display\":\"l<span>ea</span>f\",\"audio\":\"leaf.mp3\",\"image\":\"leaf.png\"},\"quiz-words\":[\"beaver\",\"seagulls\",\"steal\",\"ice cream\",\"beagle\",\"teapot\",\"guinea pig\",\"peas\",\"green beans\",\"balance beam\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Jack Sprat would (ea)t no fat;</br>His wife would (ea)t no l(ea)n;</br>And so between the two of them;</br>They licked the platter cl(ea)n.</br>\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"E-ER\",\"audio\":\"phoneme-E-ER.mp3\",\"display\":\"er\",\"word1\":{\"word\":\"boxer\",\"display\":\"box<span>er</span>\",\"audio\":\"boxer.mp3\",\"image\":\"boxer.png\"},\"word2\":{\"word\":\"catcher\",\"display\":\"catch<span>er</span>\",\"audio\":\"catcher.mp3\",\"image\":\"catcher.png\"},\"word3\":{\"word\":\"teeter-totter\",\"display\":\"teet<span>er</span>-tott<span>er</span>\",\"audio\":\"teeter-totter.mp3\",\"image\":\"teeter-totter.png\"},\"quiz-words\":[\"flower\",\"dozer\",\"hamster\",\"juggler\",\"beaver\",\"butterfly\",\"silver\",\"finger\",\"feather\",\"spider\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Pet(er); Pet(er); pumpkin eat(er);</br>Had a wife and couldn't keep h(er);</br>He put h(er) in a pumpkin shell;</br>And then he kept h(er) very well.\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"E-ET\",\"audio\":\"phoneme-E-ET.mp3\",\"display\":\"et\",\"word1\":{\"word\":\"net\",\"display\":\"n<span>et</span>\",\"audio\":\"net.mp3\",\"image\":\"net.png\"},\"word2\":{\"word\":\"pet\",\"display\":\"p<span>et</span>\",\"audio\":\"pet.mp3\",\"image\":\"pet.png\"},\"word3\":{\"word\":\"rocket\",\"display\":\"rock<span>et</span>\",\"audio\":\"rocket.mp3\",\"image\":\"rocket.png\"},\"quiz-words\":[\"trumpet\",\"basket\",\"blanket\",\"life jacket\",\"hatchet\",\"carpet\",\"pretzel\",\"bucket\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Lucy Lock(et) lost her pock(et);</br>Kitty Fisher found it.</br>There was not a penny in it;</br>But a ribbon round it.\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"E-EW\",\"audio\":\"phoneme-E-EW.mp3\",\"display\":\"ew\",\"word1\":{\"word\":\"flew\",\"display\":\"fl<span>ew</span>\",\"audio\":\"flew.mp3\",\"image\":\"flew.png\"},\"word2\":{\"word\":\"screws\",\"display\":\"scr<span>ew</span>s\",\"audio\":\"screws.mp3\",\"image\":\"screws.png\"},\"word3\":{\"word\":\"stew pot\",\"display\":\"st<span>ew</span> pot\",\"audio\":\"stew pot.mp3\",\"image\":\"stew pot.png\"},\"quiz-words\":[\"cashew\",\"threw\",\"blew\",\"jewelry\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"The hungry cuckoo fl(ew)</br>Then found a cash(ew)</br>His beak couldn’t ch(ew).</br>What could he do?</br>He br(ew)ed cash(ew) st(ew)</br>Which smelled really P U!</br>But tasted great with barbecue.</br></br>\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"F-begin\",\"audio\":\"phoneme-F-fuh.mp3\",\"display\":\"f\",\"word1\":{\"word\":\"fox\",\"display\":\"<span>f</span>ox\",\"audio\":\"fox.mp3\",\"image\":\"fox.png\"},\"word2\":{\"word\":\"fish\",\"display\":\"<span>f</span>ish\",\"audio\":\"fish.mp3\",\"image\":\"fish.png\"},\"word3\":{\"word\":\"foot\",\"display\":\"<span>f</span>oot\",\"audio\":\"foot.mp3\",\"image\":\"foot.png\"},\"quiz-words\":[\"fall\",\"fairy\",\"fan\",\"find\",\"firefly\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"F-end\",\"audio\":\"phoneme-F-fuh.mp3\",\"display\":\"f\",\"word1\":{\"word\":\"scarf\",\"display\":\"scar<span>f</span>\",\"audio\":\"scarf.mp3\",\"image\":\"scarf.png\"},\"word2\":{\"word\":\"thief\",\"display\":\"thie<span>f</span>\",\"audio\":\"thief.mp3\",\"image\":\"thief.png\"},\"word3\":{\"word\":\"chef\",\"display\":\"che<span>f</span>\",\"audio\":\"chef.mp3\",\"image\":\"chef.png\"},\"quiz-words\":[\"hoof\",\"leaf\",\"white calf\",\"surf\",\"wolf\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"F-fuh\",\"audio\":\"phoneme-F-fuh.mp3\",\"display\":\"f\",\"word1\":{\"word\":\"fox\",\"display\":\"<span>f</span>ox\",\"audio\":\"fox.mp3\",\"image\":\"fox.png\"},\"word2\":{\"word\":\"fish\",\"display\":\"<span>f</span>ish\",\"audio\":\"fish.mp3\",\"image\":\"fish.png\"},\"word3\":{\"word\":\"sofa\",\"display\":\"so<span>f</span>a\",\"audio\":\"sofa.mp3\",\"image\":\"sofa.png\"},\"quiz-words\":[\"firetruck\",\"wolf\",\"fiddle\",\"giraffe\",\"fall\",\"elf\",\"feather\",\"traffic light\",\"leaf\",\"surfboard\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Little Miss Mu(ff)et;</br>Sat on a tu(ff)et;</br>Eating some curds and whey.</br>Along came a spider;</br>And sat down beside her;</br>And frightened Miss Mu(ff)et away.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"F-FL\",\"audio\":\"phoneme-F-FL.mp3\",\"display\":\"fl\",\"word1\":{\"word\":\"flower\",\"display\":\"<span>fl</span>ower\",\"audio\":\"flower.mp3\",\"image\":\"flower.png\"},\"word2\":{\"word\":\"fly\",\"display\":\"<span>fl</span>y\",\"audio\":\"fly.mp3\",\"image\":\"fly.png\"},\"word3\":{\"word\":\"flag\",\"display\":\"<span>fl</span>ag\",\"audio\":\"flag.mp3\",\"image\":\"flag.png\"},\"quiz-words\":[\"butterfly\",\"flew\",\"flute\",\"housefly\",\"flashlight\",\"flame\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"A hungry (fl)y (fl)ew in a (fl)ower,</br>Then dreamed of sweets for half an hour.</br>A (fl)ea (fl)oating by yelled, “Stay awake!</br>I just baked us a snow(fl)ake cake!”</br>\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"F-FR\",\"audio\":\"phoneme-F-FR.mp3\",\"display\":\"fr\",\"word1\":{\"word\":\"frog\",\"display\":\"<span>fr</span>og\",\"audio\":\"frog.mp3\",\"image\":\"frog.png\"},\"word2\":{\"word\":\"frisbee\",\"display\":\"<span>fr</span>isbee\",\"audio\":\"frisbee.mp3\",\"image\":\"frisbee.png\"},\"word3\":{\"word\":\"frying pan\",\"display\":\"<span>fr</span>ying pan\",\"audio\":\"frying pan.mp3\",\"image\":\"frying pan.png\"},\"quiz-words\":[\"fridge\",\"front loader\",\"afraid\",\"fridge\",\"frog pads\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"On (Fr)iday night, </br>My (fr)iend and I</br>Had (fr)ozen (fr)ench-(fr)y soup</br>And (fr)og leg pie.</br></br>(Fr)ied ice cream</br>And fish heads in a cup,</br>I hope some medicine </br>Will help me throw up.</br>\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"G-hard-begin\",\"audio\":\"phoneme-G-guh.mp3\",\"display\":\"g\",\"word1\":{\"word\":\"goose\",\"display\":\"<span>g</span>oose\",\"audio\":\"goose.mp3\",\"image\":\"goose.png\"},\"word2\":{\"word\":\"goat\",\"display\":\"<span>g</span>oat\",\"audio\":\"goat.mp3\",\"image\":\"goat.png\"},\"word3\":{\"word\":\"gold\",\"display\":\"<span>g</span>old\",\"audio\":\"gold.mp3\",\"image\":\"gold.png\"},\"quiz-words\":[\"goal\",\"grapes\",\"gate\",\"go-kart\",\"gazelle\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"G-hard-end\",\"audio\":\"phoneme-G-guh.mp3\",\"display\":\"g\",\"word1\":{\"word\":\"frog\",\"display\":\"fro<span>g</span>\",\"audio\":\"frog.mp3\",\"image\":\"frog.png\"},\"word2\":{\"word\":\"plug\",\"display\":\"plu<span>g</span>\",\"audio\":\"plug.mp3\",\"image\":\"plug.png\"},\"word3\":{\"word\":\"bug\",\"display\":\"bu<span>g</span>\",\"audio\":\"bug.mp3\",\"image\":\"bug.png\"},\"quiz-words\":[\"hog\",\"wig\",\"flag\",\"dog\",\"dig\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"G-guh\",\"audio\":\"phoneme-G-guh.mp3\",\"display\":\"g\",\"word1\":{\"word\":\"goose\",\"display\":\"<span>g</span>oose\",\"audio\":\"goose.mp3\",\"image\":\"goose.png\"},\"word2\":{\"word\":\"goat\",\"display\":\"<span>g</span>oat\",\"audio\":\"goat.mp3\",\"image\":\"goat.png\"},\"word3\":{\"word\":\"flag\",\"display\":\"fla<span>g</span>\",\"audio\":\"flag.mp3\",\"image\":\"flag.png\"},\"quiz-words\":[\"garden\",\"wagon\",\"girl\",\"kangaroo\",\"hug\",\"gold\",\"eagle\",\"penguin\",\"bulldog\",\"seagulls\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(G)oosey; (g)oosey; (g)ander; where do you wander?</br>Upstairs and downstairs and in my lady's chamber;</br>There I met an old man who wouldn't say his prayers;</br>I took him by his hind le(g)s and threw him downstairs.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"G-juh\",\"audio\":\"phoneme-G-juh.mp3\",\"display\":\"g\",\"word1\":{\"word\":\"giraffe\",\"display\":\"<span>g</span>iraffe\",\"audio\":\"giraffe.mp3\",\"image\":\"giraffe.png\"},\"word2\":{\"word\":\"gingerbread man\",\"display\":\"<span>g</span>in<span>g</span>erbread man\",\"audio\":\"gingerbread man.mp3\",\"image\":\"gingerbread man.png\"},\"word3\":{\"word\":\"fridge\",\"display\":\"frid<span>g</span>e\",\"audio\":\"fridge.mp3\",\"image\":\"fridge.png\"},\"quiz-words\":[\"bridge\",\"fringe\",\"hedge clippers\",\"syringe\",\"bandage\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\"},\"rhyme\":\"(G)eorgie Por(g)ie, pudding and pie,</br>Kissed the girls and made them cry.</br>When the boys came out to play,</br>(G)eorgie Por(g)ie ran away.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"G-GL\",\"audio\":\"phoneme-G-GL.mp3\",\"display\":\"gl\",\"word1\":{\"word\":\"gloves\",\"display\":\"<span>gl</span>oves\",\"audio\":\"gloves.mp3\",\"image\":\"gloves.png\"},\"word2\":{\"word\":\"glass\",\"display\":\"<span>gl</span>ass\",\"audio\":\"glass.mp3\",\"image\":\"glass.png\"},\"word3\":{\"word\":\"juggler\",\"display\":\"jug<span>gl</span>er\",\"audio\":\"juggler.mp3\",\"image\":\"juggler.png\"},\"quiz-words\":[\"globe\",\"glow\",\"sunglasses\",\"glum\",\"spyglass\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"A (gl)ass of juice</br>And a (gl)azed donut,</br>Put (gl)ad in the heart</br>And a (gl)ow in the gut.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"G-GR\",\"audio\":\"phoneme-G-GR.mp3\",\"display\":\"gr\",\"word1\":{\"word\":\"grapes\",\"display\":\"<span>gr</span>apes\",\"audio\":\"grapes.mp3\",\"image\":\"grapes.png\"},\"word2\":{\"word\":\"grass\",\"display\":\"<span>gr</span>ass\",\"audio\":\"grass.mp3\",\"image\":\"grass.png\"},\"word3\":{\"word\":\"angry\",\"display\":\"an<span>gr</span>y\",\"audio\":\"angry.mp3\",\"image\":\"angry.png\"},\"quiz-words\":[\"greyhound\",\"playground\",\"green beans\",\"grizzly bear\",\"grasshopper\",\"grandmother\",\"grandfather\",\"grandfather clock\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(Gr)ouchy (gr)emlin’s (gr)umpy tummy (gr)owled,</br>“I’m hun(gr)y, feed me, feed me,” it howled.</br>When a (gr)inning (gr)izzly (gr)abbed it tight,</br>(Gr)umpy tummy squeeeezed out of sight.</br>\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"H-begin\",\"audio\":\"phoneme-H-huh.mp3\",\"display\":\"h\",\"word1\":{\"word\":\"hug\",\"display\":\"<span>h</span>ug\",\"audio\":\"hug.mp3\",\"image\":\"hug.png\"},\"word2\":{\"word\":\"hardhat\",\"display\":\"<span>h</span>ard<span>h</span>at\",\"audio\":\"hardhat.mp3\",\"image\":\"hardhat.png\"},\"word3\":{\"word\":\"hide\",\"display\":\"<span>h</span>ide\",\"audio\":\"hide.mp3\",\"image\":\"hide.png\"},\"quiz-words\":[\"hot\",\"horns\",\"hawk\",\"hippo\",\"hose\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"H-huh\",\"audio\":\"phoneme-H-huh.mp3\",\"display\":\"h\",\"word1\":{\"word\":\"hug\",\"display\":\"<span>h</span>ug\",\"audio\":\"hug.mp3\",\"image\":\"hug.png\"},\"word2\":{\"word\":\"hard hat\",\"display\":\"<span>h</span>ard <span>h</span>at\",\"audio\":\"hardhat.mp3\",\"image\":\"hardhat.png\"},\"word3\":{\"word\":\"greyhound\",\"display\":\"grey<span>h</span>ound\",\"audio\":\"greyhound.mp3\",\"image\":\"greyhound.png\"},\"quiz-words\":[\"hawk\",\"hamster\",\"horn\",\"hilly\",\"hatchet\",\"bloodhound\",\"hand\",\"hat\",\"hot\",\"hit\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(H)umpty Dumpty sat on a wall;</br>(H)umpty Dumpty (h)ad a great fall;</br>All the king's (h)orses and all the king's men;</br>Couldn't put (H)umpty Dumpty together again.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"I-long\",\"audio\":\"phoneme-I-long.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"ice\",\"display\":\"<span>i</span>ce\",\"audio\":\"ice.mp3\",\"image\":\"ice.png\"},\"word2\":{\"word\":\"climb\",\"display\":\"cl<span>i</span>mb\",\"audio\":\"climb.mp3\",\"image\":\"climb.png\"},\"word3\":{\"word\":\"life jacket\",\"display\":\"l<span>i</span>fe jacket\",\"audio\":\"life jacket.mp3\",\"image\":\"life jacket.png\"},\"quiz-words\":[\"lion\",\"slide\",\"tricycle\",\"spider\",\"ice cream\",\"bride\",\"diving\",\"five\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Three bl(i)nd m(i)ce, three bl(i)nd m(i)ce,</br>See how they run, see how they run.</br>They all ran after the farmer's w(i)fe,</br>She cut off their tails with a carving kn(i)fe.</br>Did you ever see such a s(i)ght in your l(i)fe</br>As three bl(i)nd m(i)ce?\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"I-short\",\"audio\":\"phoneme-I-short.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"mittens\",\"display\":\"m<span>i</span>ttens\",\"audio\":\"mittens.mp3\",\"image\":\"mittens.png\"},\"word2\":{\"word\":\"hit\",\"display\":\"h<span>i</span>t\",\"audio\":\"hit.mp3\",\"image\":\"hit.png\"},\"word3\":{\"word\":\"fish\",\"display\":\"f<span>i</span>sh\",\"audio\":\"fish.mp3\",\"image\":\"fish.png\"},\"quiz-words\":[\"lizard\",\"window\",\"frisbee\",\"slippers\",\"chimney\",\"swing\",\"fiddle\",\"unicycle\",\"sing\",\"ostrich\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"green\"},\"rhyme\":\"Jack; be n(i)mble; Jack; be qu(i)ck.</br>Jack; jump over the candlest(i)ck.\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"I-schwa\",\"audio\":\"phoneme-I-schwa.mp3\",\"display\":\"i\",\"word1\":{\"word\":\"rabbit\",\"display\":\"rabb<span>i</span>t\",\"audio\":\"rabbit.mp3\",\"image\":\"rabbit.png\"},\"word2\":{\"word\":\"pencil\",\"display\":\"penc<span>i</span>l\",\"audio\":\"pencil.mp3\",\"image\":\"pencil.png\"},\"word3\":{\"word\":\"family\",\"display\":\"fam<span>i</span>ly\",\"audio\":\"family.mp3\",\"image\":\"family.png\"},\"quiz-words\":[],\"color\":{\"all\":\"orange\",\"vowel\":\"orange\",\"K\":\"orange\"},\"rhyme\":\"Oh, do you know the muff(i)n-man,</br>The muff(i)n-man, the muff(i)n-man?</br>Do you know the muff(i)n-man</br>Who lives in Drury Lane?</br></br>Yes, I know the muff(i)n-man,</br>The muff(i)n-man, the muff(i)n-man.</br>Yes, I know the muff(i)n-man</br>Who lives in Drury Lane.\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"I-ee\",\"audio\":\"phoneme-I-ee.mp3\",\"display\":\"ie\",\"word1\":{\"word\":\"collie\",\"display\":\"coll<span>ie</span>\",\"audio\":\"collie.mp3\",\"image\":\"collie.png\"},\"word2\":{\"word\":\"cookies\",\"display\":\"cook<span>ie</span>s\",\"audio\":\"cookies.mp3\",\"image\":\"cookies.png\"},\"word3\":{\"word\":\"strawberries\",\"display\":\"strawberr<span>ie</span>s\",\"audio\":\"strawberries.mp3\",\"image\":\"strawberries.png\"},\"quiz-words\":[\"beanie cap\",\"groceries\",\"labrador retriever\",\"blackberries\",\"diesel truck\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Cranberr(ie)s for yummy muffins,</br>And also berr(ie)s blue,</br>Strawberr(ie)s for scrumptious jelly,</br>Raspberr(ie)s and blackberr(ie)s too!\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"I-ie\",\"audio\":\"phoneme-I-ie.mp3\",\"display\":\"ie\",\"word1\":{\"word\":\"tie\",\"display\":\"t<span>ie</span>\",\"audio\":\"tie.mp3\",\"image\":\"tie.png\"},\"word2\":{\"word\":\"quiet\",\"display\":\"qu<span>ie</span>t\",\"audio\":\"quiet.mp3\",\"image\":\"quiet.png\"},\"word3\":{\"word\":\"pie\",\"display\":\"p<span>ie</span>\",\"audio\":\"pie.mp3\",\"image\":\"pie.png\"},\"quiz-words\":[\"flies\",\"spies\",\"butterflies\",\"cries\",\"pie man\",\"bow tie\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\"},\"rhyme\":\"There was an old woman lived under the hill;<br>And if she's not gone she lives there still;<br>Baked apples she sold; and cranberry p(ie)s;</br>And she's the old woman who never told l(ie)s.\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"I-IGH\",\"audio\":\"phoneme-I-IGH.mp3\",\"display\":\"igh\",\"word1\":{\"word\":\"light\",\"display\":\"l<span>igh</span>t\",\"audio\":\"light.mp3\",\"image\":\"light.png\"},\"word2\":{\"word\":\"frightened\",\"display\":\"fr<span>igh</span>tened\",\"audio\":\"frightened.mp3\",\"image\":\"frightened.png\"},\"word3\":{\"word\":\"nightgown\",\"display\":\"n<span>igh</span>tgown\",\"audio\":\"nightgown.mp3\",\"image\":\"nightgown.png\"},\"quiz-words\":[\"lightning\",\"night\",\"flashlight\",\"fight\",\"flight\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Star l(igh)t, star br(igh)t,</br>First star I see ton(igh)t,</br>I wish I may, I wish I m(igh)t,</br>Have the wish I wish ton(igh)t.\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"I-IL\",\"audio\":\"phoneme-I-IL.mp3\",\"display\":\"il\",\"word1\":{\"word\":\"spill\",\"display\":\"sp<span>il</span>l\",\"audio\":\"spill.mp3\",\"image\":\"spill.png\"},\"word2\":{\"word\":\"drill\",\"display\":\"dr<span>il</span>l\",\"audio\":\"drill.mp3\",\"image\":\"drill.png\"},\"word3\":{\"word\":\"silver\",\"display\":\"s<span>il</span>ver\",\"audio\":\"silver.mp3\",\"image\":\"silver.png\"},\"quiz-words\":[\"hilly\",\"armadillo\",\"stilts\",\"silly\",\"pencil\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Jack and J(ill) went up the h(ill);</br>To fetch a pail of water;</br>Jack fell down and broke his crown;</br>And J(ill) came tumbling after.\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"I-IR\",\"audio\":\"phoneme-I-IR.mp3\",\"display\":\"ir\",\"word1\":{\"word\":\"bird\",\"display\":\"b<span>ir</span>d\",\"audio\":\"bird.mp3\",\"image\":\"bird.png\"},\"word2\":{\"word\":\"girl\",\"display\":\"g<span>ir</span>l\",\"audio\":\"girl.mp3\",\"image\":\"girl.png\"},\"word3\":{\"word\":\"birthday cake\",\"display\":\"b<span>ir</span>thday cake\",\"audio\":\"birthday cake.mp3\",\"image\":\"birthday cake.png\"},\"quiz-words\":[\"giraffe\",\"thirsty\",\"circle\",\"stir\",\"shirt\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"On her b(ir)thday the g(ir)l</br>Wh(ir)led her pearls, sw(ir)led her sk(ir)t,</br>Gave her sh(ir)t tail a tw(ir)l,</br>St(ir)red her toe in the d(ir)t,</br>Until, so I heard,</br>She looked just like a b(ir)d!</br>\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"J-juh\",\"audio\":\"phoneme-J-juh.mp3\",\"display\":\"j\",\"word1\":{\"word\":\"jump\",\"display\":\"<span>j</span>ump\",\"audio\":\"jump.mp3\",\"image\":\"jump.png\"},\"word2\":{\"word\":\"jay\",\"display\":\"<span>j</span>ay\",\"audio\":\"jay.mp3\",\"image\":\"jay.png\"},\"word3\":{\"word\":\"jeep\",\"display\":\"<span>j</span>eep\",\"audio\":\"jeep.mp3\",\"image\":\"jeep.png\"},\"quiz-words\":[\"juggler\",\"jellyfish\",\"life jacket\",\"jewelry\",\"jack in the box\",\"judge\",\"joy\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Here am I; Little (j)umping (J)oan;</br>When nobody's with me;</br>I'm always alone.\",\"category\":\"C\",\"grade\":\"K\"},{\"id\":\"j-soft-end\",\"audio\":\"phoneme-J-juh.mp3\",\"display\":\"j\",\"word1\":{\"word\":\"cage\",\"display\":\"ca<span>g</span>e\",\"audio\":\"cage.mp3\",\"image\":\"cage.png\"},\"word2\":{\"word\":\"bridge\",\"display\":\"brid<span>g</span>e\",\"audio\":\"bridge.mp3\",\"image\":\"bridge.png\"},\"word3\":{\"word\":\"orange\",\"display\":\"oran<span>g</span>e\",\"audio\":\"orange.mp3\",\"image\":\"orange.png\"},\"quiz-words\":[\"fridge\",\"bandage\",\"cabbage\",\"judge\",\"fringe\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"K-begin\",\"audio\":\"phoneme-H-huh.mp3\",\"display\":\"k\",\"word1\":{\"word\":\"key\",\"display\":\"<span>k</span>ey\",\"audio\":\"key.mp3\",\"image\":\"key.png\"},\"word2\":{\"word\":\"kayak\",\"display\":\"<span>k</span>aya<span>k</span>\",\"audio\":\"kayak.mp3\",\"image\":\"kayak.png\"},\"word3\":{\"word\":\"kangaroo\",\"display\":\"<span>k</span>angaroo\",\"audio\":\"kangaroo.mp3\",\"image\":\"kangaroo.png\"},\"quiz-words\":[\"king\",\"kitten\",\"kiss\",\"kitchen\",\"kimono\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"K-end\",\"audio\":\"phoneme-K-kuh.mp3\",\"display\":\"k\",\"word1\":{\"word\":\"elk\",\"display\":\"el<span>k</span>\",\"audio\":\"elk.mp3\",\"image\":\"elk.png\"},\"word2\":{\"word\":\"pick\",\"display\":\"pic<span>k</span>\",\"audio\":\"pick.mp3\",\"image\":\"pick.png\"},\"word3\":{\"word\":\"shark\",\"display\":\"shar<span>k</span>\",\"audio\":\"shark.mp3\",\"image\":\"shark.png\"},\"quiz-words\":[\"beak\",\"fork\",\"hawk\",\"duck\",\"kayak\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"K-kuh\",\"audio\":\"phoneme-K-kuh.mp3\",\"display\":\"k\",\"word1\":{\"word\":\"kangaroo\",\"display\":\"<span>k</span>angaroo\",\"audio\":\"kangaroo.mp3\",\"image\":\"kangaroo.png\"},\"word2\":{\"word\":\"kayak\",\"display\":\"<span>k</span>aya<span>k</span>\",\"audio\":\"kayak.mp3\",\"image\":\"kayak.png\"},\"word3\":{\"word\":\"key\",\"display\":\"<span>k</span>ey\",\"audio\":\"key.mp3\",\"image\":\"key.png\"},\"quiz-words\":[\"king\",\"hawk\",\"kitten\",\"chipmunk\",\"drink\",\"fork\",\"monkey\",\"blanket\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Lucy Loc(k)et lost her poc(k)et,</br>(K)itty Fisher found it;</br>There was not a penny in it,</br>But a ribbon round it.</br>\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"L-begin\",\"audio\":\"phoneme-L-lll.mp3\",\"display\":\"l\",\"word1\":{\"word\":\"love\",\"display\":\"<span>l</span>ove\",\"audio\":\"love.mp3\",\"image\":\"love.png\"},\"word2\":{\"word\":\"leaf\",\"display\":\"<span>l</span>eaf\",\"audio\":\"leaf.mp3\",\"image\":\"leaf.png\"},\"word3\":{\"word\":\"lion\",\"display\":\"<span>l</span>ion\",\"audio\":\"lion.mp3\",\"image\":\"lion.png\"},\"quiz-words\":[\"lip\",\"lemon\",\"lizard\",\"lock\",\"lamb\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"L-end\",\"audio\":\"phoneme-L-lll.mp3\",\"display\":\"l\",\"word1\":{\"word\":\"owl\",\"display\":\"ow<span>l</span>\",\"audio\":\"owl.mp3\",\"image\":\"owl.png\"},\"word2\":{\"word\":\"goal\",\"display\":\"goa<span>l</span>\",\"audio\":\"goal.mp3\",\"image\":\"goal.png\"},\"word3\":{\"word\":\"sail\",\"display\":\"sai<span>l</span>\",\"audio\":\"sail.mp3\",\"image\":\"sail.png\"},\"quiz-words\":[\"foal\",\"heel\",\"mail\",\"pool\",\"nail\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"L-lll\",\"audio\":\"phoneme-L-lll.mp3\",\"display\":\"l\",\"word1\":{\"word\":\"love\",\"display\":\"<span>l</span>ove\",\"audio\":\"love.mp3\",\"image\":\"love.png\"},\"word2\":{\"word\":\"leaf\",\"display\":\"<span>l</span>eaf\",\"audio\":\"leaf.mp3\",\"image\":\"leaf.png\"},\"word3\":{\"word\":\"bell\",\"display\":\"be<span>ll</span>\",\"audio\":\"bell.mp3\",\"image\":\"bell.png\"},\"quiz-words\":[\"lion\",\"owl\",\"lizard\",\"tail\",\"light\",\"elf\",\"trolley\",\"yellow\",\"bull\",\"wolf\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Mary had a (l)ittle (l)amb,</br>Its f(l)eece was white as snow,</br>And everywhere that Mary went,</br>The (l)amb was sure to go.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"L-LE\",\"audio\":\"phoneme-L-LE.mp3\",\"display\":\"le\",\"word1\":{\"word\":\"poodle\",\"display\":\"pood<span>le</span>\",\"audio\":\"poodle.mp3\",\"image\":\"poodle.png\"},\"word2\":{\"word\":\"whale\",\"display\":\"wha<span>le</span>\",\"audio\":\"whale.mp3\",\"image\":\"whale.png\"},\"word3\":{\"word\":\"tricycle\",\"display\":\"tricyc<span>le</span>\",\"audio\":\"tricycle.mp3\",\"image\":\"tricycle.png\"},\"quiz-words\":[\"whistle\",\"turtle\",\"unicycle\",\"tricycle\",\"saddle\",\"cradle\",\"eagle\",\"fiddle\",\"beagle\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"The sow came in with the sadd(le);</br>The litt(le) pig rocked the crad(le);</br>The dish jumped up on the tab(le);</br>To see the pot swallow the lad(le).\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"M-begin\",\"audio\":\"phoneme-M-mmm.mp3\",\"display\":\"m\",\"word1\":{\"word\":\"monkey\",\"display\":\"<span>m</span>onkey\",\"audio\":\"monkey.mp3\",\"image\":\"monkey.png\"},\"word2\":{\"word\":\"mole\",\"display\":\"<span>m</span>ole\",\"audio\":\"mole.mp3\",\"image\":\"mole.png\"},\"word3\":{\"word\":\"mermaid\",\"display\":\"<span>m</span>er<span>m</span>aid\",\"audio\":\"mermaid.mp3\",\"image\":\"mermaid.png\"},\"quiz-words\":[\"music\",\"magic\",\"man\",\"moth\",\"moon\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"M-end\",\"audio\":\"phoneme-M-mmm.mp3\",\"display\":\"m\",\"word1\":{\"word\":\"swim\",\"display\":\"swi<span>m</span>\",\"audio\":\"swim.mp3\",\"image\":\"swim.png\"},\"word2\":{\"word\":\"clam\",\"display\":\"cla<span>m</span>\",\"audio\":\"clam.mp3\",\"image\":\"clam.png\"},\"word3\":{\"word\":\"storm\",\"display\":\"stor<span>m</span>\",\"audio\":\"storm.mp3\",\"image\":\"storm.png\"},\"quiz-words\":[\"ram\",\"broom\",\"drum\",\"palm\",\"glum\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"M-mmm\",\"audio\":\"phoneme-M-mmm.mp3\",\"display\":\"m\",\"word1\":{\"word\":\"monkey\",\"display\":\"<span>m</span>onkey\",\"audio\":\"monkey.mp3\",\"image\":\"monkey.png\"},\"word2\":{\"word\":\"mole\",\"display\":\"<span>m</span>ole\",\"audio\":\"mole.mp3\",\"image\":\"mole.png\"},\"word3\":{\"word\":\"hamster\",\"display\":\"ha<span>m</span>ster\",\"audio\":\"hamster.mp3\",\"image\":\"hamster.png\"},\"quiz-words\":[\"mother\",\"clam\",\"mouse\",\"hamster\",\"moth\",\"man\",\"chimney\",\"mouth\",\"camel\",\"jump\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"One (m)isty; (m)oisty (m)orning;</br>When cloudy was the weather;</br>I happened to (m)eet an old (m)an clothed all in leather.</br>He began to co(m)pli(m)ent; and I began to grin;</br>How do you do; and how do you do?</br>And how do you do again?\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"N-begin\",\"audio\":\"phoneme-N-nnn.mp3\",\"display\":\"n\",\"word1\":{\"word\":\"noise\",\"display\":\"<span>n</span>oise\",\"audio\":\"noise.mp3\",\"image\":\"noise.png\"},\"word2\":{\"word\":\"nail\",\"display\":\"<span>n</span>ail\",\"audio\":\"nail.mp3\",\"image\":\"nail.png\"},\"word3\":{\"word\":\"nest\",\"display\":\"<span>n</span>est\",\"audio\":\"nest.mp3\",\"image\":\"nest.png\"},\"quiz-words\":[\"net\",\"nuts\",\"nap\",\"nurse\",\"nose\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"N-end\",\"audio\":\"phoneme-N-nnn.mp3\",\"display\":\"n\",\"word1\":{\"word\":\"rain\",\"display\":\"rai<span>n</span>\",\"audio\":\"rain.mp3\",\"image\":\"rain.png\"},\"word2\":{\"word\":\"van\",\"display\":\"va<span>n</span>\",\"audio\":\"van.mp3\",\"image\":\"van.png\"},\"word3\":{\"word\":\"fin\",\"display\":\"fi<span>n</span>\",\"audio\":\"fin.mp3\",\"image\":\"fin.png\"},\"quiz-words\":[\"yawn\",\"lion\",\"moon\",\"fan\",\"nun\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"N-nnn\",\"audio\":\"phoneme-N-nnn.mp3\",\"display\":\"n\",\"word1\":{\"word\":\"nose\",\"display\":\"<span>n</span>ose\",\"audio\":\"nose.mp3\",\"image\":\"nose.png\"},\"word2\":{\"word\":\"nail\",\"display\":\"<span>n</span>ail\",\"audio\":\"nail.mp3\",\"image\":\"nail.png\"},\"word3\":{\"word\":\"lion\",\"display\":\"lio<span>n</span>\",\"audio\":\"lion.mp3\",\"image\":\"lion.png\"},\"quiz-words\":[\"nuts\",\"van\",\"net\",\"penguin\",\"clown\",\"kitten\",\"onion\",\"queen\",\"swan\",\"canary\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(N)eedles a(n)d pi(n)s,</br>(N)eedles a(n)d pi(n)s.</br>Whe(n) a ma(n) marries,</br>his trouble begi(n)s.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"N-ND\",\"audio\":\"phoneme-N-ND.mp3\",\"display\":\"nd\",\"word1\":{\"word\":\"hand\",\"display\":\"ha<span>nd</span>\",\"audio\":\"hand.mp3\",\"image\":\"hand.png\"},\"word2\":{\"word\":\"sandbox\",\"display\":\"sa<span>nd</span>box\",\"audio\":\"sandbox.mp3\",\"image\":\"sandbox.png\"},\"word3\":{\"word\":\"panda\",\"display\":\"pa<span>nd</span>a\",\"audio\":\"panda.mp3\",\"image\":\"panda.png\"},\"quiz-words\":[\"candy\",\"greyhound\",\"playground\",\"bloodhound\",\"candlestick\",\"dandelion\",\"sandal\",\"sandwich\",\"dachshund\",\"grandfather\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Ha(nd)y-spa(nd)y; Jacky da(nd)y;</br>Loves plum cake a(nd) sugar ca(nd)y.</br>He bought some at a grocer's shop;</br>A(nd) pleased ran away going hop; hop; hop.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"N-NG\",\"audio\":\"phoneme-N-NG.mp3\",\"display\":\"ng\",\"word1\":{\"word\":\"king\",\"display\":\"ki<span>ng</span>\",\"audio\":\"king.mp3\",\"image\":\"king.png\"},\"word2\":{\"word\":\"finger\",\"display\":\"fi<span>ng</span>er\",\"audio\":\"finger.mp3\",\"image\":\"finger.png\"},\"word3\":{\"word\":\"sing\",\"display\":\"si<span>ng</span>\",\"audio\":\"sing.mp3\",\"image\":\"sing.png\"},\"quiz-words\":[\"swing\",\"lightning\",\"angry\",\"fishing net\",\"flying carpet\",\"dancing\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Si(ng) a so(ng) of sixpence, a pocket full of rye,</br>Four and twenty blackbirds baked in a pie.</br>When the pie was opened the birds began to si(ng),</br>Now wasn’t this a dainty dish to set before the ki(ng)?</br></br>The ki(ng) was in the parlor counti(ng) out his money;</br>The queen was in the kitchen eati(ng) bread and honey;</br>The maid was in the garden ha(ng)i(ng) out the clothes,</br>And alo(ng) came a blackbird and nipped off her nose.</br>\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"N-NK\",\"audio\":\"phoneme-N-NK.mp3\",\"display\":\"nk\",\"word1\":{\"word\":\"skunk\",\"display\":\"sku<span>nk</span>\",\"audio\":\"skunk.mp3\",\"image\":\"skunk.png\"},\"word2\":{\"word\":\"monkey\",\"display\":\"mo<span>nk</span>ey\",\"audio\":\"monkey.mp3\",\"image\":\"monkey.png\"},\"word3\":{\"word\":\"drink\",\"display\":\"dri<span>nk</span>\",\"audio\":\"drink.mp3\",\"image\":\"drink.png\"},\"quiz-words\":[\"chipmunk\",\"blanket\",\"pink\",\"bunk bed\",\"monkey bars\",\"tank truck\",\"monkey wrench\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"There was an old woman; and what do you thi(nk)?</br>She lived upon nothing but foods and dri(nk);</br>Food and dri(nk) made up most of her diet;</br>And yet this old woman could never be quiet.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"O-long\",\"audio\":\"phoneme-O-long.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"old\",\"display\":\"<span>o</span>ld\",\"audio\":\"old.mp3\",\"image\":\"old.png\"},\"word2\":{\"word\":\"mole\",\"display\":\"m<span>o</span>le\",\"audio\":\"mole.mp3\",\"image\":\"mole.png\"},\"word3\":{\"word\":\"polar bear\",\"display\":\"p<span>o</span>lar bear\",\"audio\":\"polarbear.mp3\",\"image\":\"polarbear.png\"},\"quiz-words\":[\"yo-yo\",\"nose\",\"sofa\",\"gold\",\"dozer\",\"toe\",\"throne\",\"armadillo\",\"volcano\",\"robot\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"(O)ld King C(o)le;</br>Was a merry (o)ld s(o)ul;</br>And a merry (o)ld s(o)ul was he;</br>He called for his pipe;</br>And he called for his b(o)wl;</br>And he called for his fiddlers three.\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"O-short\",\"audio\":\"phoneme-O-short.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"ostrich\",\"display\":\"<span>o</span>strich\",\"audio\":\"ostrich.mp3\",\"image\":\"ostrich.png\"},\"word2\":{\"word\":\"pot\",\"display\":\"p<span>o</span>t\",\"audio\":\"pot.mp3\",\"image\":\"pot.png\"},\"word3\":{\"word\":\"trolley\",\"display\":\"tr<span>o</span>lley\",\"audio\":\"trolley.mp3\",\"image\":\"trolley.png\"},\"quiz-words\":[\"fox\",\"hot\",\"boxer\",\"drop\",\"sandbox\",\"rocket\",\"moth\",\"frog\",\"trolley\",\"crayon\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"green\"},\"rhyme\":\"H(o)t cr(o)ss buns, h(o)t cr(o)ss buns.</br>One a penny, two a penny,</br>H(o)t cr(o)ss buns!</br></br>If your daughters do n(o)t like them,</br>Give them to your sons.</br>One a penny, two a penny,</br>H(o)t cr(o)ss buns!\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"O-uh\",\"audio\":\"phoneme-O-uh.mp3\",\"display\":\"o\",\"word1\":{\"word\":\"onion\",\"display\":\"<span>o</span>nion\",\"audio\":\"onion.mp3\",\"image\":\"onion.png\"},\"word2\":{\"word\":\"oven\",\"display\":\"<span>o</span>ven\",\"audio\":\"oven.mp3\",\"image\":\"oven.png\"},\"word3\":{\"word\":\"wagon\",\"display\":\"wag<span>o</span>n\",\"audio\":\"wagon.mp3\",\"image\":\"wagon.png\"},\"quiz-words\":[\"love\",\"monkey\",\"glove\",\"mother\",\"shovel\",\"monkey wrench\",\"grandmother\",\"monkey bars\"],\"color\":{\"all\":\"orange\",\"vowel\":\"orange\",\"K\":\"orange\"},\"rhyme\":\"He l(o)ves me.</br>He d(o)esn't!</br>He'll have me.</br>He won't!</br></br>He would if he could,</br>But he can't, so he won't!\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"O-ew\",\"audio\":\"phoneme-O-ew.mp3\",\"display\":\"oo\",\"word1\":{\"word\":\"spoon\",\"display\":\"sp<span>oo</span>n\",\"audio\":\"spoon.mp3\",\"image\":\"spoon.png\"},\"word2\":{\"word\":\"raccoons\",\"display\":\"racc<span>oo</span>ns\",\"audio\":\"raccoons.mp3\",\"image\":\"raccoons.png\"},\"word3\":{\"word\":\"boots\",\"display\":\"b<span>oo</span>ts\",\"audio\":\"boots.mp3\",\"image\":\"boots.png\"},\"quiz-words\":[\"kangaroo\",\"poodle\",\"goose\",\"school bus\",\"balloon\",\"moon\",\"broom\",\"stool\",\"coonskin cap\",\"tool belt\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"The man in the m(oo)n came down t(oo) s(oo)n;</br>To inquire the way to Norridge;</br>The man in the south; he burnt his mouth;</br>With eating cold plum porridge.\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"O-uuh\",\"audio\":\"phoneme-O-uuh.mp3\",\"display\":\"oo\",\"word1\":{\"word\":\"cookies\",\"display\":\"c<span>oo</span>kies\",\"audio\":\"cookies.mp3\",\"image\":\"cookies.png\"},\"word2\":{\"word\":\"wood\",\"display\":\"w<span>oo</span>d\",\"audio\":\"wood.mp3\",\"image\":\"wood.png\"},\"word3\":{\"word\":\"foot\",\"display\":\"f<span>oo</span>t\",\"audio\":\"foot.mp3\",\"image\":\"foot.png\"},\"quiz-words\":[\"football\",\"crook\",\"crooked\",\"footstool\",\"bookcase\",\"book\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\"},\"rhyme\":\"Little Bopeep never underst(oo)d,</br>When little Miss Red Riding H(oo)d</br>Went trick-or-treat in our neighborh(oo)d</br>With little Mister Captain H(oo)k,</br>It wasn’t c(oo)kies or candy they t(oo)k,</br>Each picked a little picture b(oo)k.</br>\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"O-OA\",\"audio\":\"phoneme-O-OA.mp3\",\"display\":\"oa\",\"word1\":{\"word\":\"goat\",\"display\":\"g<span>oa</span>t\",\"audio\":\"goat.mp3\",\"image\":\"goat.png\"},\"word2\":{\"word\":\"boat\",\"display\":\"b<span>oa</span>t\",\"audio\":\"boat.mp3\",\"image\":\"boat.png\"},\"word3\":{\"word\":\"coat\",\"display\":\"c<span>oa</span>t\",\"audio\":\"coat.mp3\",\"image\":\"coat.png\"},\"quiz-words\":[\"soap\",\"soccer goal\",\"toaster\",\"boat trailer\",\"front loader\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Little Nanny Ettic(oa)t;</br>In a white pettic(oa)t;</br>And a red nose;</br>The longer she stands;</br>The shorter she grows.\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"O-OI\",\"audio\":\"phoneme-O-OI.mp3\",\"display\":\"oi\",\"word1\":{\"word\":\"coin\",\"display\":\"c<span>oi</span>n\",\"audio\":\"coin.mp3\",\"image\":\"coin.png\"},\"word2\":{\"word\":\"poison\",\"display\":\"p<span>oi</span>son\",\"audio\":\"poison.mp3\",\"image\":\"poison.png\"},\"word3\":{\"word\":\"noise\",\"display\":\"n<span>oi</span>se\",\"audio\":\"noise.mp3\",\"image\":\"noise.png\"},\"quiz-words\":[\"toilet\",\"five-point-star\",\"fencing foil\",\"toilet paper\",\"six-point-star\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"A toy box you put toys in.<br>Pin a balloon and you’ll sp(oi)l it.</br>A pan’s for putting (oi)ly c(oi)ns in.</br>To clean them add water and b(oi)l it.</br>Time out’s for putting n(oi)sy boys in.</br>P(oi)son? Pour it in the t(oi)let!</br>\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"O-OR\",\"audio\":\"phoneme-O-OR.mp3\",\"display\":\"or\",\"word1\":{\"word\":\"fork\",\"display\":\"f<span>or</span>k\",\"audio\":\"fork.mp3\",\"image\":\"fork.png\"},\"word2\":{\"word\":\"storm\",\"display\":\"st<span>or</span>m\",\"audio\":\"storm.mp3\",\"image\":\"storm.png\"},\"word3\":{\"word\":\"corn\",\"display\":\"c<span>or</span>n\",\"audio\":\"corn.mp3\",\"image\":\"corn.png\"},\"quiz-words\":[\"excavator\",\"hornet\",\"popcorn\",\"tortilla\",\"forest\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Little Jack H(or)ner;</br>Sat in a c(or)ner;</br>Eating a Christmas pie;</br>He put in his thumb;</br>And pulled out a plum;</br>And said: \\\"What a good boy am I!\\\"\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"O-OU\",\"audio\":\"phoneme-O-OU.mp3\",\"display\":\"ou\",\"word1\":{\"word\":\"mouth\",\"display\":\"m<span>ou</span>th\",\"audio\":\"mouth.mp3\",\"image\":\"mouth.png\"},\"word2\":{\"word\":\"cloud\",\"display\":\"cl<span>ou</span>d\",\"audio\":\"cloud.mp3\",\"image\":\"cloud.png\"},\"word3\":{\"word\":\"mouse\",\"display\":\"m<span>ou</span>se\",\"audio\":\"mouse.mp3\",\"image\":\"mouse.png\"},\"quiz-words\":[\"proud\",\"playground\",\"greyhound\",\"doll house\",\"mountain\",\"bloodhound\",\"cloudy\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"I'm a little teapot,</br>short and st(ou)t.</br>Here is my handle,</br>here is my sp(ou)t.</br></br>When I see the teacups,</br>hear me sh(ou)t:</br>\\\"Tip me over,</br>And pour me (ou)t!\\\"</br>\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"O-ohw\",\"audio\":\"phoneme-O-ohw.mp3\",\"display\":\"ow\",\"word1\":{\"word\":\"rainbow\",\"display\":\"rainb<span>ow</span>\",\"audio\":\"rainbow.mp3\",\"image\":\"rainbow.png\"},\"word2\":{\"word\":\"snow\",\"display\":\"sn<span>ow</span>\",\"audio\":\"snow.mp3\",\"image\":\"snow.png\"},\"word3\":{\"word\":\"bow and arrow\",\"display\":\"b<span>ow</span> and arr<span>ow</span>\",\"audio\":\"bowandarrow.mp3\",\"image\":\"bowandarrow.png\"},\"quiz-words\":[\"window\",\"yellow\",\"bowl\",\"throw\",\"crowbar\",\"lawnmower\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"The north wind does bl(ow);</br>And we shall have sn(ow);</br>And what will poor robin do then?</br>Poor thing!</br></br>He'll sit in the barn;</br>And keep himself warm;</br>And hide his head under his wing.</br>Poor thing!\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"O-ow\",\"audio\":\"phoneme-O-ow.mp3\",\"display\":\"ow\",\"word1\":{\"word\":\"owl\",\"display\":\"<span>ow</span>l\",\"audio\":\"owl.mp3\",\"image\":\"owl.png\"},\"word2\":{\"word\":\"cow\",\"display\":\"c<span>ow</span>\",\"audio\":\"cow.mp3\",\"image\":\"cow.png\"},\"word3\":{\"word\":\"town\",\"display\":\"t<span>ow</span>n\",\"audio\":\"town.mp3\",\"image\":\"town.png\"},\"quiz-words\":[\"clown\",\"flower\",\"brown\",\"eyebrow\",\"trowel\",\"nightgown\",\"shower\",\"wedding gown\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\"},\"rhyme\":\"Daffy-d(ow)n-dilly has come to t(ow)n,</br>With a green petticoat</br>and a bright yellow g(ow)n.</br>\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"O-OY\",\"audio\":\"phoneme-O-OY.mp3\",\"display\":\"oy\",\"word1\":{\"word\":\"boy\",\"display\":\"b<span>oy</span>\",\"audio\":\"boy.mp3\",\"image\":\"boy.png\"},\"word2\":{\"word\":\"toys\",\"display\":\"t<span>oy</span>s\",\"audio\":\"toys.mp3\",\"image\":\"toys.png\"},\"word3\":{\"word\":\"oyster\",\"display\":\"<span>oy</span>ster\",\"audio\":\"oyster.mp3\",\"image\":\"oyster.png\"},\"quiz-words\":[\"cowboy\",\"joy\",\"boyfriend\",\"royal\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"A b(oy) needs a t(oy)</br>That he can enj(oy)</br>Or he'll have to ann(oy) a grown-up,</br>Climb on the highb(oy),</br>Find a pile to destr(oy),</br>Or play cowb(oy) till doggie has thrown-up.</br>\",\"category\":\"VP\",\"grade\":[[]]},{\"id\":\"P-begin\",\"audio\":\"phoneme-P-puh.mp3\",\"display\":\"p\",\"word1\":{\"word\":\"puppy\",\"display\":\"<span>p</span>u<span>pp</span>y\",\"audio\":\"puppy.mp3\",\"image\":\"puppy.png\"},\"word2\":{\"word\":\"penguin\",\"display\":\"<span>p</span>enguin\",\"audio\":\"penguin.mp3\",\"image\":\"penguin.png\"},\"word3\":{\"word\":\"pie\",\"display\":\"<span>p</span>ie\",\"audio\":\"pie.mp3\",\"image\":\"pie.png\"},\"quiz-words\":[\"pig\",\"paint\",\"purse\",\"pizza\",\"polar bear\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"P-end\",\"audio\":\"phoneme-P-puh.mp3\",\"display\":\"p\",\"word1\":{\"word\":\"drop\",\"display\":\"dro<span>p</span>\",\"audio\":\"drop.mp3\",\"image\":\"drop.png\"},\"word2\":{\"word\":\"soap\",\"display\":\"soa<span>p</span>\",\"audio\":\"soap.mp3\",\"image\":\"soap.png\"},\"word3\":{\"word\":\"jeep\",\"display\":\"jee<span>p</span>\",\"audio\":\"jeep.mp3\",\"image\":\"jeep.png\"},\"quiz-words\":[\"cap\",\"mop\",\"chop\",\"harp\",\"chimp\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"P-puh\",\"audio\":\"phoneme-P-puh.mp3\",\"display\":\"p\",\"word1\":{\"word\":\"puppy\",\"display\":\"<span>p</span>u<span>pp</span>y\",\"audio\":\"puppy.mp3\",\"image\":\"puppy.png\"},\"word2\":{\"word\":\"penguin\",\"display\":\"<span>p</span>enguin\",\"audio\":\"penguin.mp3\",\"image\":\"penguin.png\"},\"word3\":{\"word\":\"carpet\",\"display\":\"car<span>p</span>et\",\"audio\":\"carpet.mp3\",\"image\":\"carpet.png\"},\"quiz-words\":[\"panda\",\"poodle\",\"jeep\",\"pig\",\"slippers\",\"pearl\",\"sleepy\",\"ape\",\"purse\",\"trumpet\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(P)ease (p)orridge hot; (p)ease (p)orridge cold;</br>(P)ease (p)orridge in the (p)ot; nine days old.</br>Some like it hot; some like it cold;</br>Some like it in the (p)ot; nine days old.</br>S(p)ell me that in four letters:</br>I will: T H A T.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"P-PL\",\"audio\":\"phoneme-P-PL.mp3\",\"display\":\"pl\",\"word1\":{\"word\":\"plug\",\"display\":\"<span>pl</span>ug\",\"audio\":\"plug.mp3\",\"image\":\"plug.png\"},\"word2\":{\"word\":\"playground\",\"display\":\"<span>pl</span>ayground\",\"audio\":\"playground.mp3\",\"image\":\"playground.png\"},\"word3\":{\"word\":\"airplane\",\"display\":\"air<span>pl</span>ane\",\"audio\":\"airplane.mp3\",\"image\":\"airplane.png\"},\"quiz-words\":[\"plum\",\"guitar player\",\"snow plow\",\"plug\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"No kid likes peas piled on (pl)ates,</br>But (pl)aced in straws they’re (pl)enty fun.</br>Blow so they shoot past people’s faces</br>(Pl)ay, (pl)ay, (pl)ay, then run, run, run!</br>\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"P-PR\",\"audio\":\"phoneme-P-PR.mp3\",\"display\":\"pr\",\"word1\":{\"word\":\"proud\",\"display\":\"<span>pr</span>oud\",\"audio\":\"proud.mp3\",\"image\":\"proud.png\"},\"word2\":{\"word\":\"pretzel\",\"display\":\"<span>pr</span>etzel\",\"audio\":\"pretzel.mp3\",\"image\":\"pretzel.png\"},\"word3\":{\"word\":\"present\",\"display\":\"<span>pr</span>esent\",\"audio\":\"present.mp3\",\"image\":\"present.png\"},\"quiz-words\":[\"sprinkler\",\"proposing\",\"spray\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"As I was going up (Pr)imrose Hill;</br>(Pr)imrose Hill was dirty;</br>There I met a (pr)etty girl;</br>And she gave me a curtsey.</br>Little girl; (pr)etty girl;</br>Blessings be upon you;</br>If I had half-a-dollar a day;</br>I'd spend it all on you.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"Q-begin\",\"audio\":\"phoneme-Q-qwuh.mp3\",\"display\":\"q\",\"word1\":{\"word\":\"queen\",\"display\":\"<span>q</span>ueen\",\"audio\":\"queen.mp3\",\"image\":\"queen.png\"},\"word2\":{\"word\":\"question\",\"display\":\"<span>q</span>uestion\",\"audio\":\"question.mp3\",\"image\":\"question.png\"},\"word3\":{\"word\":\"quick\",\"display\":\"<span>q</span>uick\",\"audio\":\"quick.mp3\",\"image\":\"quick.png\"},\"quiz-words\":[\"quiet\",\"quill\",\"quart\",\"quarter\",\"quiver\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"Q-qwuh\",\"audio\":\"phoneme-Q-qwuh.mp3\",\"display\":\"q\",\"word1\":{\"word\":\"queen\",\"display\":\"<span>q</span>ueen\",\"audio\":\"queen.mp3\",\"image\":\"queen.png\"},\"word2\":{\"word\":\"question\",\"display\":\"<span>q</span>uestion\",\"audio\":\"question.mp3\",\"image\":\"question.png\"},\"word3\":{\"word\":\"squirrel\",\"display\":\"s<span>q</span>uirrel\",\"audio\":\"squirrel.mp3\",\"image\":\"squirrel.png\"},\"quiz-words\":[\"squash\",\"quiet\",\"tennis racquet\",\"square\",\"t-square\",\"flying squirrel\",\"badminton racquet\",\"carpenter's square\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(Q)ueen Croc napped on her (q)uilt,</br>Mama duck (q)uacked, “Be (q)uiet!”</br>“What?” (Q)uacked the duckling.</br>“(Q)uit!” Mama (q)uacked, “Ducks are her diet!”</br>\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"R-begin\",\"audio\":\"phoneme-R-ruh.mp3\",\"display\":\"r\",\"word1\":{\"word\":\"raccoons\",\"display\":\"<span>r</span>accoon\",\"audio\":\"raccoons.mp3\",\"image\":\"raccoons.png\"},\"word2\":{\"word\":\"robot\",\"display\":\"<span>r</span>obot\",\"audio\":\"robot.mp3\",\"image\":\"robot.png\"},\"word3\":{\"word\":\"run\",\"display\":\"<span>r</span>un\",\"audio\":\"run.mp3\",\"image\":\"run.png\"},\"quiz-words\":[\"read\",\"rug\",\"robin\",\"rainbow\",\"rabbit\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"R-end\",\"audio\":\"phoneme-R-ruh.mp3\",\"display\":\"r\",\"word1\":{\"word\":\"door\",\"display\":\"doo<span>r</span>\",\"audio\":\"door.mp3\",\"image\":\"door.png\"},\"word2\":{\"word\":\"tiger\",\"display\":\"tige<span>r</span>\",\"audio\":\"tiger.mp3\",\"image\":\"tiger.png\"},\"word3\":{\"word\":\"polar bear\",\"display\":\"pola<span>r</span> bea<span>r</span>\",\"audio\":\"polarbear.mp3\",\"image\":\"polarbear.png\"},\"quiz-words\":[\"car\",\"boar\",\"hear\",\"beaver\",\"dozer\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"R-ruh\",\"audio\":\"phoneme-R-ruh.mp3\",\"display\":\"r\",\"word1\":{\"word\":\"raccoons\",\"display\":\"<span>r</span>accoons\",\"audio\":\"raccoons.mp3\",\"image\":\"raccoons.png\"},\"word2\":{\"word\":\"robot\",\"display\":\"<span>r</span>obot\",\"audio\":\"robot.mp3\",\"image\":\"robot.png\"},\"word3\":{\"word\":\"grapes\",\"display\":\"g<span>r</span>apes\",\"audio\":\"grapes.mp3\",\"image\":\"grapes.png\"},\"quiz-words\":[\"rainbow\",\"rabbit\",\"bow and arrow\",\"rocket\",\"polar bear\",\"rake\",\"squirrel\",\"firetruck\",\"walrus\",\"throne\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(R)ing a(r)ound the (r)oses,</br>A pocket full of posies.</br>Ashes, ashes,</br>We all fall down.</br></br>Picking up the daisies,</br>Picking up the daisies.</br>Ashes, ashes,</br>We all stand up!\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"S-begin\",\"audio\":\"phoneme-S-sss.mp3\",\"display\":\"s\",\"word1\":{\"word\":\"suitcase\",\"display\":\"<span>s</span>uitca<span>s</span>e\",\"audio\":\"suitcase.mp3\",\"image\":\"suitcase.png\"},\"word2\":{\"word\":\"say\",\"display\":\"<span>s</span>ay\",\"audio\":\"say.mp3\",\"image\":\"say.png\"},\"word3\":{\"word\":\"sneak\",\"display\":\"<span>s</span>neak\",\"audio\":\"sneak.mp3\",\"image\":\"sneak.png\"},\"quiz-words\":[\"sing\",\"sofa\",\"sun\",\"soap\",\"seal\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"s-end\",\"audio\":\"phoneme-S-sss.mp3\",\"display\":\"s\",\"word1\":{\"word\":\"bus\",\"display\":\"bu<span>s</span>\",\"audio\":\"bus.mp3\",\"image\":\"bus.png\"},\"word2\":{\"word\":\"dress\",\"display\":\"dre<span>ss</span>\",\"audio\":\"dress.mp3\",\"image\":\"dress.png\"},\"word3\":{\"word\":\"grapes\",\"display\":\"grape<span>s</span>\",\"audio\":\"grapes.mp3\",\"image\":\"grapes.png\"},\"quiz-words\":[\"stilts\",\"kiss\",\"moss\",\"pets\",\"ants\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"S-sss\",\"audio\":\"phoneme-S-sss.mp3\",\"display\":\"s\",\"word1\":{\"word\":\"suitcase\",\"display\":\"<span>s</span>uitca<span>s</span>e\",\"audio\":\"suitcase.mp3\",\"image\":\"suitcase.png\"},\"word2\":{\"word\":\"whistle\",\"display\":\"whi<span>s</span>tle\",\"audio\":\"whistle.mp3\",\"image\":\"whistle.png\"},\"word3\":{\"word\":\"saint bernard\",\"display\":\"<span>S</span>aint Bernard\",\"audio\":\"saint bernard.mp3\",\"image\":\"saint bernard.png\"},\"quiz-words\":[\"saw\",\"sing\",\"glass\",\"sofa\",\"grass\",\"seagulls\",\"question\",\"sandbox\",\"purse\",\"squirrel\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(S)imple (S)imon met a pieman;</br>Going to the Fair;</br>(S)ays (S)imple (S)imon to the pieman:</br>\\\"Please let me ta(s)te your ware.\\\"</br></br>(S)ay(s) the pieman to (S)imple (S)imon:</br>\\\"Show me fir(s)t your penny.\\\"</br>(S)ays (S)imple (S)imon to the pieman:</br>\\\"Indeed I have not any.\\\"\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"S-zz\",\"audio\":\"phoneme-S-zz.mp3\",\"display\":\"s\",\"word1\":{\"word\":\"dogs\",\"display\":\"dog<span>s</span>\",\"audio\":\"dogs.mp3\",\"image\":\"dogs.png\"},\"word2\":{\"word\":\"skis\",\"display\":\"ski<span>s</span>\",\"audio\":\"skis.mp3\",\"image\":\"skis.png\"},\"word3\":{\"word\":\"poison\",\"display\":\"poi<span>s</span>on\",\"audio\":\"poison.mp3\",\"image\":\"poison.png\"},\"quiz-words\":[\"nose\",\"present\",\"raccoons\",\"frisbee\",\"boots\",\"gloves\",\"crayons\",\"walnuts\",\"binoculars\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\"},\"rhyme\":\"Scissor(s) and string,</br>Scissor(s) and string.</br>When a man'(s) single,</br>he live(s) like a king.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"S-SH\",\"audio\":\"phoneme-S-SH.mp3\",\"display\":\"sh\",\"word1\":{\"word\":\"shoes\",\"display\":\"<span>sh</span>oes\",\"audio\":\"shoes.mp3\",\"image\":\"shoes.png\"},\"word2\":{\"word\":\"shovel\",\"display\":\"<span>sh</span>ovel\",\"audio\":\"shovel.mp3\",\"image\":\"shovel.png\"},\"word3\":{\"word\":\"fish\",\"display\":\"fi<span>sh</span>\",\"audio\":\"fish.mp3\",\"image\":\"fish.png\"},\"quiz-words\":[\"brush\",\"jellyfish\",\"squash\",\"fishing net\",\"eyelash\",\"sheep\",\"starfish\",\"flashlight\",\"dish\",\"cushion\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"There was an old woman who lived in a (sh)oe;</br>(Sh)e had so many children (sh)e didn't know what to do.</br>(Sh)e gave them some broth without any bread;</br>Then whipped them all soundly and put them to bed.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"S-SK\",\"audio\":\"phoneme-S-SK.mp3\",\"display\":\"sk\",\"word1\":{\"word\":\"skate\",\"display\":\"<span>sk</span>ate\",\"audio\":\"skate.mp3\",\"image\":\"skate.png\"},\"word2\":{\"word\":\"skunk\",\"display\":\"<span>sk</span>unk\",\"audio\":\"skunk.mp3\",\"image\":\"skunk.png\"},\"word3\":{\"word\":\"basket\",\"display\":\"ba<span>sk</span>et\",\"audio\":\"basket.mp3\",\"image\":\"basket.png\"},\"quiz-words\":[\"skis\",\"skateboard\",\"sky\",\"coonskin cap\",\"skip\",\"desk\",\"mask of frog\",\"skirt\",\"basketball\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"There once was old woman tossed up in a ba(sk)et,</br>Seventeen times as high as the moon.</br>Where she was going I couldn't but a(sk) it,</br>For in her hand she carried a broom.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"S-SL\",\"audio\":\"phoneme-S-SL.mp3\",\"display\":\"sl\",\"word1\":{\"word\":\"sled\",\"display\":\"<span>sl</span>ed\",\"audio\":\"sled.mp3\",\"image\":\"sled.png\"},\"word2\":{\"word\":\"slippers\",\"display\":\"<span>sl</span>ippers\",\"audio\":\"slippers.mp3\",\"image\":\"slippers.png\"},\"word3\":{\"word\":\"slide\",\"display\":\"<span>sl</span>ide\",\"audio\":\"slide.mp3\",\"image\":\"slide.png\"},\"quiz-words\":[\"sleepy\",\"sledge hammer\",\"sleepy dog\",\"ballet slippers\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"To bed; to bed; says (Sl)eepy Head;</br>\\\"Let's stay awhile;\\\" says (Sl)ow;</br>\\\"Put on the pot;\\\" says Hungry Ned;</br>\\\"We'll eat before we go.\\\"\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"S-SP\",\"audio\":\"phoneme-S-SP.mp3\",\"display\":\"sp\",\"word1\":{\"word\":\"spider\",\"display\":\"<span>sp</span>ider\",\"audio\":\"spider.mp3\",\"image\":\"spider.png\"},\"word2\":{\"word\":\"spoon\",\"display\":\"<span>sp</span>oon\",\"audio\":\"spoon.mp3\",\"image\":\"spoon.png\"},\"word3\":{\"word\":\"spill\",\"display\":\"<span>sp</span>ill\",\"audio\":\"spill.mp3\",\"image\":\"spill.png\"},\"quiz-words\":[\"sprinkler\",\"wasp\",\"spray\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"I (sp)ied a dirty blue jay</br>On a '(sp)ecially hot (sp)ring day.</br>He (sp)lished and (sp)lashed in a birdbath,</br>Then (sp)eedily flew away.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"S-ST\",\"audio\":\"phoneme-S-ST.mp3\",\"display\":\"st\",\"word1\":{\"word\":\"stilts\",\"display\":\"<span>st</span>ilts\",\"audio\":\"stilts.mp3\",\"image\":\"stilts.png\"},\"word2\":{\"word\":\"steal\",\"display\":\"<span>st</span>eal\",\"audio\":\"steal.mp3\",\"image\":\"steal.png\"},\"word3\":{\"word\":\"statue\",\"display\":\"<span>st</span>atue\",\"audio\":\"statue.mp3\",\"image\":\"statue.png\"},\"quiz-words\":[\"star\",\"hamster\",\"storm\",\"ostrich\",\"strawberries\",\"toaster\",\"stool\",\"stew pot\",\"straw\",\"street sweeper\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Robin and Richard<br>Were two lazy men;</br>They (st)ayed in bed</br>Till the clock (st)ruck ten.</br>Then up jumps Robin</br>And looks at the sky:</br>“Oh, brother Richard,</br>The sun’s very high.</br>You walk fir(st)</br>With the bottle and bag,</br>And I’ll ride later</br>On the gray horse nag.”</br>\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"S-SW\",\"audio\":\"phoneme-S-SW.mp3\",\"display\":\"sw\",\"word1\":{\"word\":\"sweet\",\"display\":\"<span>sw</span>eet\",\"audio\":\"sweet.mp3\",\"image\":\"sweet.png\"},\"word2\":{\"word\":\"swing\",\"display\":\"<span>sw</span>ing\",\"audio\":\"swing.mp3\",\"image\":\"swing.png\"},\"word3\":{\"word\":\"swan\",\"display\":\"<span>sw</span>an\",\"audio\":\"swan.mp3\",\"image\":\"swan.png\"},\"quiz-words\":[\"swim\",\"sweet potato\",\"street sweeper\",\"swimming\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(Sw)an (sw)am over the sea,</br>(Sw)im (sw)an (sw)im!</br>(Sw)an (sw)am back again,</br>Well (sw)um (sw)an!\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"T-begin\",\"audio\":\"phoneme-T-tttt.mp3\",\"display\":\"t\",\"word1\":{\"word\":\"toe\",\"display\":\"<span>t</span>oe\",\"audio\":\"toe.mp3\",\"image\":\"toe.png\"},\"word2\":{\"word\":\"toys\",\"display\":\"<span>t</span>oys\",\"audio\":\"toys.mp3\",\"image\":\"toys.png\"},\"word3\":{\"word\":\"tail\",\"display\":\"<span>t</span>ail\",\"audio\":\"tail.mp3\",\"image\":\"tail.png\"},\"quiz-words\":[\"tiger\",\"tent\",\"turtle\",\"tuba\",\"teeter-totter\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"T-end\",\"audio\":\"phoneme-T-tttt.mp3\",\"display\":\"t\",\"word1\":{\"word\":\"net\",\"display\":\"ne<span>t</span>\",\"audio\":\"net.mp3\",\"image\":\"net.png\"},\"word2\":{\"word\":\"paint\",\"display\":\"pain<span>t</span>\",\"audio\":\"paint.mp3\",\"image\":\"paint.png\"},\"word3\":{\"word\":\"tent\",\"display\":\"<span>t</span>en<span>t</span>\",\"audio\":\"tent.mp3\",\"image\":\"tent.png\"},\"quiz-words\":[\"cat\",\"vet\",\"cast\",\"hunt\",\"goat\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"T-tttt\",\"audio\":\"phoneme-T-tttt.mp3\",\"display\":\"t\",\"word1\":{\"word\":\"toe\",\"display\":\"<span>t</span>oe\",\"audio\":\"toe.mp3\",\"image\":\"toe.png\"},\"word2\":{\"word\":\"traffic light\",\"display\":\"<span>t</span>raffic ligh<span>t</span>\",\"audio\":\"traffic light.mp3\",\"image\":\"traffic light.png\"},\"word3\":{\"word\":\"hat\",\"display\":\"ha<span>t</span>\",\"audio\":\"hat.mp3\",\"image\":\"hat.png\"},\"quiz-words\":[\"teeter-totter\",\"turtle\",\"goat\",\"tail\",\"tuba\",\"utility knife\",\"tie\",\"light\",\"town\",\"sweet\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(T)o marke(t); (t)o marke(t); (t)o buy a fa(t) pig;</br>Home again; home again; jigge(t)y; jig.</br></br>(T)o marke(t); (t)o marke(t); (t)o buy a fa(t) hog;</br>Home again; home again; jigge(t)y; jog.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"T-the\",\"audio\":\"phoneme-T-the.mp3\",\"display\":\"th\",\"word1\":{\"word\":\"father\",\"display\":\"fa<span>th</span>er\",\"audio\":\"father.mp3\",\"image\":\"father.png\"},\"word2\":{\"word\":\"mother\",\"display\":\"mo<span>th</span>er\",\"audio\":\"mother.mp3\",\"image\":\"mother.png\"},\"word3\":{\"word\":\"feather\",\"display\":\"fea<span>th</span>er\",\"audio\":\"feather.mp3\",\"image\":\"feather.png\"},\"quiz-words\":[\"clothes\",\"weather\",\"grandfather clock\",\"tetherball\",\"brother\",\"grandmother\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Bye; baby bunting;<br>Fa(th)er's gone a-hunting;</br>Mo(th)er's gone a-milking;</br>Sister's gone a-silking;</br>And Bro(th)er's gone for a rabbit skin;</br>To wrap little baby bunting in.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"T-th\",\"audio\":\"phoneme-T-th.mp3\",\"display\":\"th\",\"word1\":{\"word\":\"throne\",\"display\":\"<span>th</span>rone\",\"audio\":\"throne.mp3\",\"image\":\"throne.png\"},\"word2\":{\"word\":\"three\",\"display\":\"<span>th</span>ree\",\"audio\":\"three.mp3\",\"image\":\"three.png\"},\"word3\":{\"word\":\"moth\",\"display\":\"mo<span>th</span>\",\"audio\":\"moth.mp3\",\"image\":\"moth.png\"},\"quiz-words\":[\"mouth\",\"birthday cake\",\"path\",\"throw\",\"thumb\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\"},\"rhyme\":\"(Th)ree wise men of Go(th)am</br>Went to sea in a bowl,</br>And if the bowl had been stronger,</br>My song had been longer.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"T-TR\",\"audio\":\"phoneme-T-TR.mp3\",\"display\":\"tr\",\"word1\":{\"word\":\"tricycle\",\"display\":\"<span>tr</span>icycle\",\"audio\":\"tricycle.mp3\",\"image\":\"tricycle.png\"},\"word2\":{\"word\":\"tree\",\"display\":\"<span>tr</span>ee\",\"audio\":\"tree.mp3\",\"image\":\"tree.png\"},\"word3\":{\"word\":\"firetruck\",\"display\":\"fire<span>tr</span>uck\",\"audio\":\"firetruck.mp3\",\"image\":\"firetruck.png\"},\"quiz-words\":[\"trumpet\",\"trolley\",\"ostrich\",\"tank truck\",\"troubles\",\"boat trailer\",\"trombone\",\"triangle\",\"tree stump\",\"trowel\",\"troll\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Mis(tr)ess Mary; quite con(tr)ary;</br>How does your garden grow?</br>With silver bells and cockle shells;</br>And pretty maids all in a row.\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"U-long\",\"audio\":\"phoneme-U-long.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"unicycle\",\"display\":\"<span>u</span>nicycle\",\"audio\":\"unicycle.mp3\",\"image\":\"unicycle.png\"},\"word2\":{\"word\":\"binoculars\",\"display\":\"binoc<span>u</span>lars\",\"audio\":\"binoculars.mp3\",\"image\":\"binoculars.png\"},\"word3\":{\"word\":\"unicorn\",\"display\":\"<span>u</span>nicorn\",\"audio\":\"unicorn.mp3\",\"image\":\"unicorn.png\"},\"quiz-words\":[\"statue\",\"cucumber\",\"ambulance\",\"suv\",\"music\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"He balanced a c(u)cumber on his nose,</br>But should have (u)sed binoc(u)lars to watch the roads.</br>A (u)nicycle’s dangerous when clowns can’t see—</br>Quick call an amb(u)lance:  one, two, three!</br>\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"U-uu\",\"audio\":\"phoneme-U-uu.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"tuba\",\"display\":\"t<span>u</span>ba\",\"audio\":\"tuba.mp3\",\"image\":\"tuba.png\"},\"word2\":{\"word\":\"blue\",\"display\":\"bl<span>u</span>e\",\"audio\":\"blue.mp3\",\"image\":\"blue.png\"},\"word3\":{\"word\":\"dune buggy\",\"display\":\"d<span>u</span>ne buggy\",\"audio\":\"dune buggy.mp3\",\"image\":\"dune buggy.png\"},\"quiz-words\":[\"flute\",\"suit\",\"tissue\",\"fruits\",\"suitcase\",\"dune buggy\",\"blue\",\"tuba\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\"},\"rhyme\":\"Little Betty Bl(u)e</br>Lost her holiday shoe.</br>What shall little Betty do?</br></br>Buy her another,</br>To match the other,</br>And then she'll walk upon two.\",\"category\":\"V\",\"grade\":[[]]},{\"id\":\"U-short\",\"audio\":\"phoneme-U-short.mp3\",\"display\":\"u\",\"word1\":{\"word\":\"bug\",\"display\":\"b<span>u</span>g\",\"audio\":\"bug.mp3\",\"image\":\"bug.png\"},\"word2\":{\"word\":\"bucket\",\"display\":\"b<span>u</span>cket\",\"audio\":\"bucket.mp3\",\"image\":\"bucket.png\"},\"word3\":{\"word\":\"chipmunk\",\"display\":\"chipm<span>u</span>nk\",\"audio\":\"chipmunk.mp3\",\"image\":\"chipmunk.png\"},\"quiz-words\":[\"cut\",\"brush\",\"bubble\",\"firetruck\",\"plug\",\"rug\",\"plum\",\"golf club\",\"judge\",\"jump\"],\"color\":{\"all\":\"orange\",\"vowel\":\"orange\",\"K\":\"orange\"},\"rhyme\":\"S(u)e played a big bl(u)e t(u)ba,</br>J(u)lius played one too,</br>With their two bl(u)e t(u)bas,</br>What did those two do?</br>He blew his bl(u)e t(u)ba loud!</br>She blew hers too!</br>\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"U-UR\",\"audio\":\"phoneme-U-UR.mp3\",\"display\":\"ur\",\"word1\":{\"word\":\"turtle\",\"display\":\"t<span>ur</span>tle\",\"audio\":\"turtle.mp3\",\"image\":\"turtle.png\"},\"word2\":{\"word\":\"purse\",\"display\":\"p<span>ur</span>se\",\"audio\":\"purse.mp3\",\"image\":\"purse.png\"},\"word3\":{\"word\":\"surfboard\",\"display\":\"s<span>ur</span>fboard\",\"audio\":\"surfboard.mp3\",\"image\":\"surfboard.png\"},\"quiz-words\":[\"curl\",\"burn\",\"hamburger\",\"purple\",\"turkey\",\"furniture\",\"tape measure\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"To (ur)ge her to p(ur)r</br>Lin rubs kitty cat's f(ur);</br>When Lin topples the (ur)n</br>Kitty makes a bl(ur).</br>\",\"category\":\"VC\",\"grade\":[[]]},{\"id\":\"V-begin\",\"audio\":\"phoneme-V-vv.mp3\",\"display\":\"v\",\"word1\":{\"word\":\"volcano\",\"display\":\"<span>v</span>olcano\",\"audio\":\"volcano.mp3\",\"image\":\"volcano.png\"},\"word2\":{\"word\":\"van\",\"display\":\"<span>v</span>an\",\"audio\":\"van.mp3\",\"image\":\"van.png\"},\"word3\":{\"word\":\"voice\",\"display\":\"<span>v</span>oice\",\"audio\":\"voice.mp3\",\"image\":\"voice.png\"},\"quiz-words\":[\"veil\",\"vowels\",\"violin\",\"volleyball\",\"vegetables\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"V-vv\",\"audio\":\"phoneme-V-vv.mp3\",\"display\":\"v\",\"word1\":{\"word\":\"volcano\",\"display\":\"<span>v</span>olcano\",\"audio\":\"volcano.mp3\",\"image\":\"volcano.png\"},\"word2\":{\"word\":\"van\",\"display\":\"<span>v</span>an\",\"audio\":\"van.mp3\",\"image\":\"van.png\"},\"word3\":{\"word\":\"beaver\",\"display\":\"bea<span>v</span>er\",\"audio\":\"beaver.mp3\",\"image\":\"beaver.png\"},\"quiz-words\":[\"silver\",\"oven\",\"glove\",\"shovel\",\"excavator\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"As I was going to St. I(v)es;</br>I met a man with se(v)en wi(v)es.</br>E(v)ery wife had se(v)en sacks;</br>E(v)ery sack had se(v)en cats;</br>E(v)ery cat had se(v)en kits.</br>Kits; cats; sacks and wi(v)es;</br>How many were going to St. I(v)es?\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"W-begin\",\"audio\":\"phoneme-W-wuh.mp3\",\"display\":\"w\",\"word1\":{\"word\":\"wagon\",\"display\":\"<span>w</span>agon\",\"audio\":\"wagon.mp3\",\"image\":\"wagon.png\"},\"word2\":{\"word\":\"wolf\",\"display\":\"<span>w</span>olf\",\"audio\":\"wolf.mp3\",\"image\":\"wolf.png\"},\"word3\":{\"word\":\"wind\",\"display\":\"<span>w</span>ind\",\"audio\":\"wind.mp3\",\"image\":\"wind.png\"},\"quiz-words\":[\"wig\",\"wall\",\"walrus\",\"waterfall\",\"walnuts\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"W-wuh\",\"audio\":\"phoneme-W-wuh.mp3\",\"display\":\"w\",\"word1\":{\"word\":\"wagon\",\"display\":\"<span>w</span>agon\",\"audio\":\"wagon.mp3\",\"image\":\"wagon.png\"},\"word2\":{\"word\":\"wolf\",\"display\":\"<span>w</span>olf\",\"audio\":\"wolf.mp3\",\"image\":\"wolf.png\"},\"word3\":{\"word\":\"window\",\"display\":\"<span>w</span>indo<span>w</span>\",\"audio\":\"window.mp3\",\"image\":\"window.png\"},\"quiz-words\":[\"walrus\",\"walnuts\",\"work\",\"wig\",\"weather\",\"waterfall\",\"wall\",\"woman\",\"wash\",\"watermelon\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"(W)ee (W)illie (W)inkie runs through the town;</br>Upstairs and downstairs; in his nightgown;</br>Tapping at the (w)indo(w); crying at the lock;</br>Are the children all in bed? It's now eight o'clock?\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"W-WH\",\"audio\":\"phoneme-W-WH.mp3\",\"display\":\"wh\",\"word1\":{\"word\":\"whistle\",\"display\":\"<span>wh</span>istle\",\"audio\":\"whistle.mp3\",\"image\":\"whistle.png\"},\"word2\":{\"word\":\"wheelchair\",\"display\":\"<span>wh</span>eelchair\",\"audio\":\"wheelchair.mp3\",\"image\":\"wheelchair.png\"},\"word3\":{\"word\":\"whale\",\"display\":\"<span>wh</span>ale\",\"audio\":\"whale.mp3\",\"image\":\"whale.png\"},\"quiz-words\":[\"white cat\",\"whisper\",\"white calf\",\"wheelbarrow\",\"white spider\",\"wheel\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Bill claimed a bully (wh)acked and (wh)opped his rib.</br>Mom said, “(Wh)at?  (Wh)o?  (Wh)en?  (Wh)ere?”</br>Kim said, “That’s a (wh)opper, a big fat fib.”</br>Bill said, “(Wh)atever!” -- (wh)ich means: I don’t care.</br>\",\"category\":\"CB\",\"grade\":[[]]},{\"id\":\"X-begin\",\"audio\":\"phoneme-X-ks.mp3\",\"display\":\"x\",\"word1\":{\"word\":\"excavator\",\"display\":\"e<span>x</span>cavator\",\"audio\":\"excavator.mp3\",\"image\":\"excavator.png\"},\"word2\":{\"word\":\"ax\",\"display\":\"a<span>x</span>\",\"audio\":\"axe.mp3\",\"image\":\"axe.png\"},\"word3\":{\"word\":\"exam\",\"display\":\"e<span>x</span>am\",\"audio\":\"exam.mp3\",\"image\":\"exam.png\"},\"quiz-words\":[\"explore\",\"excellent\",\"exercise\",\"exciting\",\"explode\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"X-end\",\"audio\":\"phoneme-X-ks.mp3\",\"display\":\"x\",\"word1\":{\"word\":\"fox\",\"display\":\"fo<span>x</span>\",\"audio\":\"fox.mp3\",\"image\":\"fox.png\"},\"word2\":{\"word\":\"ax\",\"display\":\"a<span>x</span>\",\"audio\":\"axe.mp3\",\"image\":\"axe.png\"},\"word3\":{\"word\":\"six\",\"display\":\"si<span>x</span>\",\"audio\":\"six.mp3\",\"image\":\"six.png\"},\"quiz-words\":[\"trex\",\"box\",\"fix\",\"lynx\",\"wax\"],\"color\":{\"all\":\"green\",\"vowel\":\"green\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"X-ks\",\"audio\":\"phoneme-X-ks.mp3\",\"display\":\"x\",\"word1\":{\"word\":\"taxi\",\"display\":\"ta<span>x</span>i\",\"audio\":\"taxi.mp3\",\"image\":\"taxi.png\"},\"word2\":{\"word\":\"fox\",\"display\":\"fo<span>x</span>\",\"audio\":\"fox.mp3\",\"image\":\"fox.png\"},\"word3\":{\"word\":\"axe\",\"display\":\"a<span>x</span>e\",\"audio\":\"axe.mp3\",\"image\":\"axe.png\"},\"quiz-words\":[\"sandbox\",\"boxer\",\"six\",\"excavator\",\"jack in the box\",\"sixteen\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"DUM diddle DEE doh,</br>O(x) wore a tu(x)edo,</br>The dancer bo(x)ed with T-Re(x).</br>Jack popped from a mailbo(x),</br>First swung his hand a(x)e,</br>Next tattled that red fo(x)</br>Had pooped in the sandbo(x)</br>Then all of them ta(x)ied away.</br>\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"Y-begin\",\"audio\":\"phoneme-Y-yuh.mp3\",\"display\":\"y\",\"word1\":{\"word\":\"yellow\",\"display\":\"<span>y</span>ellow\",\"audio\":\"yellow.mp3\",\"image\":\"yellow.png\"},\"word2\":{\"word\":\"yoyo\",\"display\":\"<span>y</span>oyo\",\"audio\":\"yoyo.mp3\",\"image\":\"yoyo.png\"},\"word3\":{\"word\":\"yawn\",\"display\":\"<span>y</span>awn\",\"audio\":\"yawn.mp3\",\"image\":\"yawn.png\"},\"quiz-words\":[\"yeti\",\"yell\",\"yummy\",\"youngster\",\"yacht\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"Y-yuh\",\"audio\":\"phoneme-Y-yuh.mp3\",\"display\":\"y\",\"word1\":{\"word\":\"yellow\",\"display\":\"<span>y</span>ellow\",\"audio\":\"yellow.mp3\",\"image\":\"yellow.png\"},\"word2\":{\"word\":\"yo-yo\",\"display\":\"<span>y</span>o-<span>y</span>o\",\"audio\":\"yo-yo.mp3\",\"image\":\"yo-yo.png\"},\"word3\":{\"word\":\"crayons\",\"display\":\"cra<span>y</span>ons\",\"audio\":\"crayons.mp3\",\"image\":\"crayons.png\"},\"quiz-words\":[\"kayak\",\"yawn\",\"guitar player\",\"barnyard\",\"yacht\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"Bah; bah; black sheep;<br>Have (y)ou any wool?</br>(Y)es sir; (Y)es sir;</br>Three bags full.</br></br>One for my master;</br>And one for my dame;</br>And one for the little boy</br>Who lives down the lane.\",\"category\":\"C\",\"grade\":[[]]},{\"id\":\"Y-i\",\"audio\":\"phoneme-Y-i.mp3\",\"display\":\"y\",\"word1\":{\"word\":\"cry\",\"display\":\"cr<span>y</span>\",\"audio\":\"cry.mp3\",\"image\":\"cry.png\"},\"word2\":{\"word\":\"fly\",\"display\":\"fl<span>y</span>\",\"audio\":\"fly.mp3\",\"image\":\"fly.png\"},\"word3\":{\"word\":\"sky\",\"display\":\"sk<span>y</span>\",\"audio\":\"sky.mp3\",\"image\":\"sky.png\"},\"quiz-words\":[\"butterfly\",\"frying pan\",\"unicycle\",\"eyelash\",\"flying squirrel\",\"eyebrow\",\"flying carpet\"],\"color\":{\"all\":\"green\",\"vowel\":\"black\",\"K\":\"black\"},\"rhyme\":\"Cr(y)baby, cr(y)baby,</br>Cr(y)baby, wh(y)!?</br>Stick your finger in your e(y)e,</br>Then tell your mother it was I?\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"Y-e\",\"audio\":\"phoneme-Y-e.mp3\",\"display\":\"y\",\"word1\":{\"word\":\"baby\",\"display\":\"bab<span>y</span>\",\"audio\":\"baby.mp3\",\"image\":\"baby.png\"},\"word2\":{\"word\":\"candy\",\"display\":\"cand<span>y</span>\",\"audio\":\"candy.mp3\",\"image\":\"candy.png\"},\"word3\":{\"word\":\"sleepy\",\"display\":\"sleep<span>y</span>\",\"audio\":\"sleepy.mp3\",\"image\":\"sleepy.png\"},\"quiz-words\":[\"bunny\",\"puppy\",\"canary\",\"monkey\",\"family\",\"chimney\",\"trolley\",\"angry\",\"key\",\"celery\"],\"color\":{\"all\":\"purple\",\"vowel\":\"green\",\"K\":\"green\"},\"rhyme\":\"Ride away; Ride away;<br>Johnn(y) shall ride;</br>And he shall have kitt(y) cat;</br>Tied to one side.</br>And he shall have pupp(y) dog;</br>Tied to the other;</br>And Johnn(y) shall ride;</br>To see his grandmother.\",\"category\":\"V\",\"grade\":\"K\"},{\"id\":\"Z-begin\",\"audio\":\"phoneme-Z-zzz.mp3\",\"display\":\"z\",\"word1\":{\"word\":\"zebra\",\"display\":\"<span>z</span>ebra\",\"audio\":\"zebra.mp3\",\"image\":\"zebra.png\"},\"word2\":{\"word\":\"zipper\",\"display\":\"<span>z</span>ipper\",\"audio\":\"zipper.mp3\",\"image\":\"zipper.png\"},\"word3\":{\"word\":\"zoo\",\"display\":\"<span>z</span>oo\",\"audio\":\"zoo.mp3\",\"image\":\"zoo.png\"},\"quiz-words\":[\"zero\",\"zigzag\",\"zany\",\"zither\",\"zeppelin\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"Z-end\",\"audio\":\"phoneme-Z-zzz.mp3\",\"display\":\"z\",\"word1\":{\"word\":\"quiz\",\"display\":\"qui<span>z</span>\",\"audio\":\"quiz.mp3\",\"image\":\"quiz.png\"},\"word2\":{\"word\":\"prize\",\"display\":\"pri<span>z</span>e\",\"audio\":\"prize.mp3\",\"image\":\"prize.png\"},\"word3\":{\"word\":\"freeze\",\"display\":\"free<span>z</span>e\",\"audio\":\"freeze.mp3\",\"image\":\"freeze.png\"},\"quiz-words\":[\"buzz\",\"doze\",\"blaze\",\"gauze\",\"maize\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\",\"K\":\"black\"},\"grade\":\"K-only\"},{\"id\":\"Z-zzz\",\"audio\":\"phoneme-Z-zzz.mp3\",\"display\":\"z\",\"word1\":{\"word\":\"zebra\",\"display\":\"<span>z</span>ebra\",\"audio\":\"zebra.mp3\",\"image\":\"zebra.png\"},\"word2\":{\"word\":\"lizard\",\"display\":\"li<span>z</span>ard\",\"audio\":\"lizard.mp3\",\"image\":\"lizard.png\"},\"word3\":{\"word\":\"dozer\",\"display\":\"do<span>z</span>er\",\"audio\":\"dozer.mp3\",\"image\":\"dozer.png\"},\"quiz-words\":[\"pretzel\",\"grizzly bear\",\"zipper\",\"gazelle\",\"hazelnuts\"],\"color\":{\"all\":\"black\",\"vowel\":\"black\"},\"rhyme\":\"You’re hard-working not la(z)y,</br>And brainy smart, not cra(z)y.</br>That’s why you won this pu(zz)le pri(z)e.</br>Did your head grow one more si(z)e?</br>\",\"category\":\"C\",\"grade\":[[]]}]");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jasminvoigtlander/Documents/cs-3312.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map