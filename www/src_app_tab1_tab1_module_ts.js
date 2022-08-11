(self["webpackChunkpergi"] = self["webpackChunkpergi"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2501:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let Tab1Page = class Tab1Page {
    constructor(router) {
        this.router = router;
        if (router.getCurrentNavigation().extras.state) {
            const params = this.router.getCurrentNavigation().extras.state;
            console.log(params.dateline);
            this.datetime = params.datetime;
            this.sender = params.sender;
            this.receiver = params.receiver;
            this.vehicle = params.vehicle;
            this.price = params.price;
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon.big {\n  width: 50px;\n  height: 50px;\n}\nion-icon.bigger {\n  width: 28px;\n  height: 28px;\n}\nion-icon.origin {\n  width: 15px;\n  height: 15px;\n}\nion-icon.dest {\n  width: 18px;\n  height: 18px;\n}\nion-icon.mysize {\n  font-size: 32px;\n}\nion-icon.icon-navi {\n  width: 28px;\n  height: 28px;\n}\nion-icon.kecik {\n  font-size: 16px;\n}\nion-icon.red {\n  color: red;\n}\nion-icon.ion-color-lala {\n  --ion-color-base: #F46D3C;\n  --ion-color-base-rgb: 0,0,0;\n  --ion-color-contrast: #000000;\n  --ion-color-contrast-rgb: 0,0,0;\n  --ion-color-shade: #e0e000;\n  --ion-color-tint: #ffff1a;\n}\nion-card.card-border {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  background-color: lightgrey;\n}\nion-card-content.cardcon-border {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  background-color: lightgrey;\n  margin: 0 !important;\n  padding: 0 !important;\n}\nion-card-content.cardcon-client {\n  padding-left: 1px;\n}\nion-card-content.cardcon-address {\n  padding-left: 5px;\n}\nion-card-content.cardcon-payable {\n  padding-left: 5px;\n}\nion-grid.grid-border {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  background-color: lightgrey;\n}\nion-row.row-border {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  background-color: lightgrey;\n}\nion-row.row-address {\n  margin-bottom: 10px;\n}\nion-col.col-border {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  background-color: lightgrey;\n}\nion-col.kanan {\n  text-align: right;\n  border-width: 0.01em;\n}\nion-col.kiri {\n  text-align: left;\n}\nion-col.arrow-tgh {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-col.order-no {\n  text-align: right;\n  border-width: 0.01em;\n}\np.client {\n  font-weight: bold;\n  font-size: 20px;\n  font-family: Arial, sans-serif;\n}\np.berat {\n  font-weight: bold;\n  font-family: Arial, sans-serif;\n  font-size: 20px;\n  line-height: 15px;\n}\np.tarikh {\n  font-size: 18px;\n}\np.text-lala {\n  color: #F46D3C;\n  margin: 0;\n  padding: 0;\n}\np.text-putih {\n  text-align: center;\n  font-size: 13px;\n  color: white;\n  margin: 0;\n  padding: 0;\n  line-height: 15px;\n}\np.text-contacted {\n  text-align: center;\n  font-size: 20px;\n  color: white;\n  margin-bottom: 10px;\n  padding: 0;\n  line-height: 15px;\n}\np.awaiting {\n  text-align: center;\n  margin: 0;\n  padding: 0;\n}\np.alamat {\n  margin: 0;\n  padding: 0;\n  line-height: 15px;\n}\np.harga {\n  font-size: 18px;\n  font-family: Arial, sans-serif;\n  line-height: 15px;\n}\np.payable {\n  font-weight: bold;\n  font-family: Arial, sans-serif;\n  font-size: 18px;\n  line-height: 15px;\n}\np.fee {\n  margin: 0;\n  padding: 0;\n  line-height: 15px;\n}\nion-card.biru {\n  background-color: #3981C6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBTjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFETjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFETjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFETjtBQUdJO0VBQ0UsZUFBQTtBQUROO0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUROO0FBSUk7RUFDRSxlQUFBO0FBRk47QUFLSTtFQUNFLFVBQUE7QUFITjtBQU1JO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBSk47QUFTRTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUFvQixtQkFBQTtFQUNwQiwyQkFBQTtBQUxKO0FBVUU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFBb0IsbUJBQUE7RUFDcEIsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBTko7QUFRRTtFQUNFLGlCQUFBO0FBTko7QUFRRTtFQUNFLGlCQUFBO0FBTko7QUFRRTtFQUNFLGlCQUFBO0FBTko7QUFXRTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUFvQixtQkFBQTtFQUNwQiwyQkFBQTtBQVBKO0FBWUU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFBb0IsbUJBQUE7RUFDcEIsMkJBQUE7QUFSSjtBQVVFO0VBQ0MsbUJBQUE7QUFSSDtBQWVFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQW9CLG1CQUFBO0VBQ3BCLDJCQUFBO0FBWEo7QUFhRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFYSjtBQWFFO0VBQ0UsZ0JBQUE7QUFYSjtBQWFFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLDJCQUFBO0FBWEo7QUFhRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFYSjtBQWdCRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBYko7QUFlRTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFiSjtBQWVFO0VBQ0UsZUFBQTtBQWJKO0FBZUU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFiSjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFiSjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBYko7QUFlRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFiSjtBQWVFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQWJKO0FBZUU7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQWJKO0FBZUU7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBYko7QUFlRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFiSjtBQWtCRTtFQUNFLHlCQUFBO0FBZkoiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gICAgJi5iaWcge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICBcbiAgICAmLmJpZ2dlciB7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICB9XG4gICAgJi5vcmlnaW4ge1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgfVxuICAgICYuZGVzdCB7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICB9XG4gICAgJi5teXNpemUge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbiAgICAmLmljb24tbmF2aSB7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICB9XG5cbiAgICAmLmtlY2lrIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIFxuICAgICYucmVkIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgJi5pb24tY29sb3ItbGFsYSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiAjRjQ2RDNDO1xuICAgICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IDAsMCwwO1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgICAgLS1pb24tY29sb3Itc2hhZGU6ICNlMGUwMDA7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiAjZmZmZjFhO1xuICAgIH1cbn1cblxuaW9uLWNhcmQge1xuICAmLmNhcmQtYm9yZGVyIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrOyBcbiAgICBib3JkZXItd2lkdGg6IC4wMWVtOyBcbiAgICBib3JkZXItc3R5bGU6c29saWQ7IG1hcmdpbi1ib3R0b20gOiAtMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgfVxufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgJi5jYXJkY29uLWJvcmRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjazsgXG4gICAgYm9yZGVyLXdpZHRoOiAuMDFlbTsgXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBtYXJnaW4tYm90dG9tIDogLTFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG4gICYuY2FyZGNvbi1jbGllbnQge1xuICAgIHBhZGRpbmctbGVmdDogMXB4OyAgICBcbiAgfVxuICAmLmNhcmRjb24tYWRkcmVzcyB7ICAgIFxuICAgIHBhZGRpbmctbGVmdDogNXB4OyAgICBcbiAgfVxuICAmLmNhcmRjb24tcGF5YWJsZSB7ICAgIFxuICAgIHBhZGRpbmctbGVmdDogNXB4OyAgICBcbiAgfVxufVxuXG5pb24tZ3JpZCB7XG4gICYuZ3JpZC1ib3JkZXIge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7IFxuICAgIGJvcmRlci13aWR0aDogLjAxZW07IFxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDsgbWFyZ2luLWJvdHRvbSA6IC0xcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5XG4gIH1cbn1cblxuaW9uLXJvdyB7XG4gICYucm93LWJvcmRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjazsgXG4gICAgYm9yZGVyLXdpZHRoOiAuMDFlbTsgXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBtYXJnaW4tYm90dG9tIDogLTFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXlcbiAgfVxuICAmLnJvdy1hZGRyZXNzIHtcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxufVxuXG5cbmlvbi1jb2wge1xuICAmLmNvbC1ib3JkZXIge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7IFxuICAgIGJvcmRlci13aWR0aDogLjAxZW07IFxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDsgbWFyZ2luLWJvdHRvbSA6IC0xcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5XG4gIH1cbiAgJi5rYW5hbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYm9yZGVyLXdpZHRoOiAuMDFlbTtcbiAgfVxuICAmLmtpcmkge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgJi5hcnJvdy10Z2gge1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgJi5vcmRlci1ubyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYm9yZGVyLXdpZHRoOiAuMDFlbTtcbiAgfVxufVxuXG5wIHtcbiAgJi5jbGllbnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgJi5iZXJhdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6MTVweDtcbiAgfVxuICAmLnRhcmlraCB7XG4gICAgZm9udC1zaXplOiAxOHB4OyAgICBcbiAgfVxuICAmLnRleHQtbGFsYSB7XG4gICAgY29sb3I6ICNGNDZEM0M7ICAgIFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9ICBcbiAgJi50ZXh0LXB1dGloIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaW5lLWhlaWdodDoxNXB4O1xuICB9XG4gICYudGV4dC1jb250YWN0ZWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaW5lLWhlaWdodDoxNXB4O1xuICB9XG4gICYuYXdhaXRpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAmLmFsYW1hdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6MTVweDtcbiAgfVxuICAmLmhhcmdhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OjE1cHg7XG4gIH1cbiAgJi5wYXlhYmxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgICAgXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDoxNXB4O1xuICB9XG4gICYuZmVlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaW5lLWhlaWdodDoxNXB4O1xuICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgJi5iaXJ1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4MUM2XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\" class=\"arrow-tgh\">\n            <ion-icon name=\"chevron-back-sharp\" class=\"mysize\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <p class=\"awaiting\">Awaiting to Go</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"kanan\">\n            <p class=\"text-lala\">HELP</p>\n          </ion-col>          \n        </ion-row>\n      </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card>\n    <ion-card-content class=\"cardcon-client\">\n     <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"client\">Client: Nor Juzaili</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"kanan\">\n            <ion-icon class=\"mysize\" color=\"lala\" name=\"chatbox-ellipses\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"1\" class=\"kanan\">\n            <ion-icon class=\"mysize\" name=\"call\"></ion-icon>\n          </ion-col>          \n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content class=\"cardcon-address\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"kiri\">\n            <p class=\"tarikh\">{{datetime}}</p>\n          </ion-col>\n          <ion-col size=\"5\" class=\"order-no\">\n           #179740-003892\n          </ion-col>                \n        </ion-row>\n        <ion-row class=\"row-address\">\n          <ion-col size=\"1\" class=\"kiri\">\n            <ion-icon name=\"radio-button-off-sharp\" class=\"origin\" color=\"lala\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <p class=\"berat\">Nor Juzaili</p>\n            <p class=\"alamat\">{{sender}}</p>\n          </ion-col>\n          <ion-col size=\"1\" class=\"kanan\">\n            <ion-icon name=\"navigate\" class=\"icon-navi\" color=\"lala\"></ion-icon>\n          </ion-col>              \n        </ion-row>\n        <ion-row>\n          <ion-col size=\"1\" class=\"kiri\">\n            <ion-icon name=\"location-sharp\" class=\"dest\" color=\"lala\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <p class=\"berat\">Vincent</p>\n            <p class=\"alamat\">{{receiver}}</p>          \n          </ion-col>\n          <ion-col size=\"1\" class=\"kanan\">\n            <ion-icon name=\"navigate\" class=\"icon-navi\" color=\"lala\"></ion-icon>\n          </ion-col>              \n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n          <ion-col>\n            Vehicle Type\n          </ion-col>\n          <ion-col size=\"8\" class=\"kiri\"> \n            {{vehicle}}           \n          </ion-col>          \n        </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content class=\"cardcon-payable\">\n      <ion-row>\n        <ion-col>\n          <p class=\"payable\">Payable by Customer</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"kanan\"> \n          <p class=\"harga\">{{price}}</p>           \n        </ion-col>          \n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p class=\"fee\">For additional fee that is payable by the customer such as tolls and parking, please confirm with the customer (Not applicable to Singapore)</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"kanan\">\n          <p class=\"text-lala\">Income Breakdown</p>\n        </ion-col> \n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"biru\">\n    <ion-card-content>\n      <p class=\"text-contacted\">CUSTOMER CONTACTED</p>\n      <p class=\"text-putih\">*To proceed, call the customer to confirm the order details</p>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map