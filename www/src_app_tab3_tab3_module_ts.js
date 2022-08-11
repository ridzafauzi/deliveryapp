(self["webpackChunkpergi"] = self["webpackChunkpergi"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 4255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let Tab3Page = class Tab3Page {
    constructor(nav) {
        this.nav = nav;
        this.datetime = "Sept 3 09:40";
        this.sender = "86 Jalan Ara SD 8/4, Bandar Sri Damansara, 52200 Kuala Lumpur, Malaysia";
        this.receiver = "Lengkok BSC 1/1 Presint 1, Bandar Seri Coalfields, 47000 Sungai Buloh, Selangor, Malaysia";
        this.vehicle = "Motorcyle";
        this.price = "RM37.00";
    }
    updatetab1() {
        let params = {
            datetime: this.datetime,
            sender: this.sender,
            receiver: this.receiver,
            vehicle: this.vehicle,
            price: this.price
        };
        this.nav.navigateForward('/tabs/tab1', { state: params }); // params to pass object/array
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-col.col-border {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  background-color: lightgrey;\n}\nion-col.kanan {\n  text-align: right;\n  border-width: 0.01em;\n}\nion-col.kiri {\n  text-align: left;\n}\nion-col.arrow-tgh {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-col.order-no {\n  text-align: right;\n  border-width: 0.01em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQW9CLG1CQUFBO0VBQ3BCLDJCQUFBO0FBQ0o7QUFDRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUNFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLDJCQUFBO0FBQ0o7QUFDRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAmLmNvbC1ib3JkZXIge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7IFxuICAgIGJvcmRlci13aWR0aDogLjAxZW07IFxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDsgbWFyZ2luLWJvdHRvbSA6IC0xcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5XG4gIH1cbiAgJi5rYW5hbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYm9yZGVyLXdpZHRoOiAuMDFlbTtcbiAgfVxuICAmLmtpcmkge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgJi5hcnJvdy10Z2gge1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgJi5vcmRlci1ubyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYm9yZGVyLXdpZHRoOiAuMDFlbTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ 4255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      My Wallet\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n  <ion-row>\n          <ion-col class=\"col-border\" size=\"2\">\n            date time\n          </ion-col>\n          <ion-col class=\"col-border\">\n            <ion-input type=\"text\" [(ngModel)]=\"datetime\" text-right id=\"input\" ></ion-input>\n          </ion-col>\n  </ion-row>\n  <ion-row>\n          <ion-col class=\"col-border\" size=\"2\">\n            sender\n          </ion-col>\n          <ion-col class=\"col-border\">\n            <ion-input type=\"text\" [(ngModel)]=\"sender\" text-right id=\"input\" ></ion-input>\n          </ion-col>\n  </ion-row>\n  <ion-row>\n          <ion-col class=\"col-border\" size=\"2\">\n            receiver\n          </ion-col>\n          <ion-col class=\"col-border\">\n            <ion-input type=\"text\" [(ngModel)]=\"receiver\" text-right id=\"input\" ></ion-input>\n          </ion-col>\n  </ion-row>\n  <ion-row>\n          <ion-col class=\"col-border\" size=\"2\">\n            vehicle type\n          </ion-col>\n          <ion-col class=\"col-border\">\n            <ion-input type=\"text\" [(ngModel)]=\"vehicle\" text-right id=\"input\" ></ion-input>\n          </ion-col>\n  </ion-row>\n  <ion-row>\n          <ion-col class=\"col-border\" size=\"2\">\n            price\n          </ion-col>\n          <ion-col class=\"col-border\">\n            <ion-input type=\"text\" [(ngModel)]=\"price\" text-right id=\"input\" ></ion-input>\n          </ion-col>\n  </ion-row>\n  <ion-row>\n          <ion-button expand=\"full\" (click)=\"updatetab1()\">\n            update tab1\n          </ion-button>\n  </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map