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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_meeting_list_meeting_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/meeting-list/meeting-list.component */ "./src/app/components/meeting-list/meeting-list.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "./src/app/components/calendar/calendar.component.ts");
/* harmony import */ var _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/documents/documents.component */ "./src/app/components/documents/documents.component.ts");







var routes = [
    { path: 'meeting-list', component: _components_meeting_list_meeting_list_component__WEBPACK_IMPORTED_MODULE_3__["MeetingListComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'calendar', component: _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"] },
    { path: 'documents/:document-type', component: _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_6__["DocumentsComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"content\" style=\"width: 100%; margin:0 auto;\">\n    <router-outlet></router-outlet>\n</div>\n\n"

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
        this.title = 'OVANA Website';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pipes_time_time_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/time/time.pipe */ "./src/app/pipes/time/time.pipe.ts");
/* harmony import */ var _pipes_search_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/search/search.pipe */ "./src/app/pipes/search/search.pipe.ts");
/* harmony import */ var _pipes_address_address_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/address/address.pipe */ "./src/app/pipes/address/address.pipe.ts");
/* harmony import */ var _components_meeting_list_meeting_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/meeting-list/meeting-list.component */ "./src/app/components/meeting-list/meeting-list.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "./src/app/components/calendar/calendar.component.ts");
/* harmony import */ var _pipes_tag_tag_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/tag/tag.pipe */ "./src/app/pipes/tag/tag.pipe.ts");
/* harmony import */ var _pipes_dayofweek_dayofweek_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/dayofweek/dayofweek.pipe */ "./src/app/pipes/dayofweek/dayofweek.pipe.ts");
/* harmony import */ var _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/documents/documents.component */ "./src/app/components/documents/documents.component.ts");
/* harmony import */ var _components_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar/navbar.component */ "./src/app/components/navbar/navbar/navbar.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pipes_time_time_pipe__WEBPACK_IMPORTED_MODULE_7__["TimePipe"],
                _pipes_search_search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"],
                _pipes_address_address_pipe__WEBPACK_IMPORTED_MODULE_9__["AddressPipe"],
                _components_meeting_list_meeting_list_component__WEBPACK_IMPORTED_MODULE_10__["MeetingListComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__["CalendarComponent"],
                _pipes_tag_tag_pipe__WEBPACK_IMPORTED_MODULE_13__["VisibleTagPipe"],
                _pipes_tag_tag_pipe__WEBPACK_IMPORTED_MODULE_13__["InvisibleTagPipe"],
                _pipes_dayofweek_dayofweek_pipe__WEBPACK_IMPORTED_MODULE_14__["DayOfWeekPipe"],
                _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_15__["DocumentsComponent"],
                _components_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/calendar/calendar.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/calendar/calendar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>TO ADD SOMETHING TO THIS CALENDAR PLEASE EMAIL kyinnaevents@gmail.com</p>\n    <iframe src=\"https://calendar.google.com/calendar/embed?src=kyinnaevents%40gmail.com&ctz=America%2FNew_York\" style=\"border: 0\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>\n</div>\n    "

/***/ }),

/***/ "./src/app/components/calendar/calendar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/components/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/components/calendar/calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/components/documents/documents.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/documents/documents.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdW1lbnRzL2RvY3VtZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/documents/documents.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/documents/documents.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let document of documents\">\n  <h2>{{ document.display }}</h2>\n  <ng-container *ngIf=\"document.files else empty\">\n    <ul>\n      <li *ngFor=\"let file of document.files\"><a href=\"{{ file.fileName }}\">{{ file.linkText }}</a>\n      </li>\n    </ul>\n  </ng-container>\n  <ng-template #empty>\n    <div>There are no documents uploaded for this section yet</div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/components/documents/documents.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/documents/documents.component.ts ***!
  \*************************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_document_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/document/document.service */ "./src/app/services/document/document.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent(documentService, route, router) {
        this.documentService = documentService;
        this.route = route;
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    DocumentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.documentType = params['document-type'];
        });
        this.documentService.getDocuments().subscribe(function (documents) { return _this.documents = documents.filter(function (documentType) { return documentType.type == _this.documentType; }); });
    };
    DocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app--documents',
            template: __webpack_require__(/*! ./documents.component.html */ "./src/app/components/documents/documents.component.html"),
            styles: [__webpack_require__(/*! ./documents.component.css */ "./src/app/components/documents/documents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_document_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/downtown.jpeg\" style=\"max-width:100%;\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"second-slide\" src=\"assets/images/IndianaSign.jpeg\" style=\"max-width:100%;\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"third-slide\" src=\"assets/images/kentucky.jpeg\" style=\"max-width:100%;\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n</div><!-- /.carousel -->\n\n\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"img-circle\" src=\"assets/images/NaLogo.jpeg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>What is Narcotics Anonymous?</h2>\n      <p>Narcotics Anonymous is a fellowship or society of men and women for whom Drugs had become a major problem.\n        ...We are not interested in what or how much you used or who your connections were, what you have done in the\n        past, how much or how little you have, but only in what you want to do about your problem and how we can help.\n        Our Primary Purpose - to carry the message to the addict who still suffers.</p>\n\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"img-circle\" src=\"assets/images/NaLogo.jpeg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>NEED HELP?</h2>\n      <p>Contact the Helpline to talk to another addict or find a meeting: <strong>502-569-1769 <br><br>\n          (special thanks to the LASCNA area for staffing this helpline)\n        </strong></p>\n\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"img-circle\" src=\"assets/images/NaLogo.jpeg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Why are we here?</h2>\n      <p>Before coming to the Fellowship of N.A., we could not manage our own lives. We could not live and enjoy life\n        as other people do. We had to have something different and we thought we had found it in drugs. We placed their\n        use ahead of the welfare of our families, our wives, husbands, and our children. We had to have drugs at all\n        costs. We did many people great harm, but most of all we harmed ourselves. Through our inability to accept\n        personal responsibilities we were actually creating our own problem. We seemed to be incapable of facing life\n        on its own terms</p>\n\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n\n\n  <!-- START THE FEATURETTES -->\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-7 col-md-push-5\">\n      <h2 class=\"featurette-heading\">Get Involved With OVANA. <span class=\"text-muted\">Service is a Must</span></h2>\n      <p class=\"lead\">The Ohio Valley Area of Narcotics Anonymous meets on the last Sunday each month, at 2 pm at the\n        Floyd County Token Club, upstairs. The purpose of this meeting is to provide support to our home groups to\n        carry the message of recovery to the addicts who still suffer. We are registered with the World Services of\n        Narcotics Anonymous.</p>\n      <p class=\"lead\">Click <a href=\"assets/images/flyers/PP_Manual_december_2017.pdf\">HERE</a> for our Policy and\n        Procedures</p>\n      <p class=\"lead\">Email OVANA Public Relations by clicking <a href=\"mailto:ovanapr@gmail.com\">HERE</a>\n        (ovanapr@gmail.com)</p>\n    </div>\n    <div class=\"col-md-5 col-md-pull-7\">\n      <img class=\"featurette-image img-responsive center-block\" src=\"assets/images/getinvolved.jpeg\" style=\"max-width: 250px;\" data-src=\"holder.js/500x500/auto\"\n        alt=\"Generic placeholder image\">\n    </div>\n  </div>\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-7\">\n      <h2 class=\"featurette-heading\">Click <a target=\"_blank\" href=\"http://jftna.org/jft/\">HERE</a> for the Just For\n        Today Daily Meditation</h2>\n    </div>\n    <div class=\"col-md-5\">\n      <img class=\"featurette-image img-responsive center-block\" src=\"assets/images/jft.jpeg\" data-src=\"holder.js/500x500/auto\"\n        alt=\"Generic placeholder image\">\n    </div>\n  </div>\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-8\">\n      <h2 class=\"featurette-heading\">AREA LINKS</h2>\n    </div>\n    <div class=\"col-md-5\">\n      <a href=\"http://502na.org/\">-502 AREA OF NARCOTICS ANONYMOUS</a></div>\n    <div class=\"col-md-5\">\n      <a href=\"http://www.nalouisville.net/\">-LOUISVILLE AREA OF NARCOTICS ANONYMOUS</a></div>\n    <div class=\"col-md-5\">\n      <a href=\"http://sckana.net/\">-SOUTH CENTRAL KY AREA OF NARCOTICS ANONYMOUS</a></div>\n    <div class=\"col-md-5\">\n      <a href=\"http://na-pana.org/\">-PENNYRILE AREA OF NARCOTICS ANONYMOUS</a></div>\n    <div class=\"col-md-5\">\n      <a href=\"http://barcna.com/\">-BLUEGRASS APPALACHIAN AREA OF NARCOTICS ANONYMOUS</a></div>\n\n\n  </div>\n\n\n  <hr class=\"featurette-divider\">\n\n  <div class=\"row featurette\">\n    <div class=\"col-md-8\">\n      <h2 class=\"featurette-heading\">REGIONAL LINKS</h2>\n    </div>\n\n    <div class=\"col-md-5\">\n      <a href=\"http://krscna.org/\">-KENTUCKIANA REGION OF NARCOTICS ANONYMOUS</a></div>\n    <div class=\"col-md-5\">\n      <a href=\"http://naindiana.org/\">-INDIANA REGION OF NARCOTICS ANONYMOUS</a></div>\n\n  </div>\n\n\n  <hr class=\"featurette-divider\">\n\n  <!-- /END THE FEATURETTES -->\n\n\n  <!-- FOOTER -->\n  <footer>\n    <p class=\"pull-right\"><a href=\"#\">Back to top</a></p>\n    <p>&copy; 2018 Ohio Valley Area of NA &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n  </footer>\n\n</div><!-- /.container -->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
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
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/meeting-list/meeting-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/meeting-list/meeting-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVldGluZy1saXN0L21lZXRpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/meeting-list/meeting-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/meeting-list/meeting-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"meetings-wrapper\" style=\"margin: 0 auto;\">\n<div id=\"daySwitcher\">\n  <button type=\"button\" (click)=\"onSelect('')\" [ngClass]=\"!selectedDay || selectedDay ==='' ? 'btn-primary' : 'btn-secondary'\"\n    class=\"btn btn-primary btn-xs\">All</button>\n  <ng-container *ngFor=\"let weekday of weekdays\">\n    <button type=\"button\" (click)=\"onSelect(weekday)\" [ngClass]=\"selectedDay===weekday ? 'btn-primary' : 'btn-secondary'\"\n      class=\"btn btn-primary btn-xs\">{{ weekday }}</button>\n  </ng-container>\n</div>\n<div style=\"padding-top: 20px; padding-bottom: 20px;\">\n  <div id=\"search\" class=\"form-group form-inline\">\n    <label class=\"control-label\" style=\"padding-right:5px\" for=\"search-input\">Search:</label>\n    <input type=\"input\" class=\"form-control\" [(ngModel)]=\"filterText\" id=\"search-input\" placeholder=\"e.g. Hope\">\n    <button (click)=\"filterText=''\" type=\"button\" class=\"btn btn-secondary\">Clear</button>\n  </div>\n  <small id=\"searchHelp\" class=\"form-text text-muted\">Try searching for Evening, Late, Afternoon, Indiana, Kentucky, Open, Close, Discussion, Speaker, etc.</small>\n</div>\n<div *ngFor=\"let meeting of meetings | dayofweek:selectedDay | search:filterText\">\n  <div class=\"card border-primary mb-3\" style=\"max-width: 35rem;\">\n    <h3 class=\"card-header\">{{ meeting.groupName }}</h3>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{ meeting.dayOfWeek }}s at {{ meeting.time | time }}</h5>\n      <p class=\"card-text\">\n        <ng-container *ngIf=\"meeting.location\">{{ meeting.location }}<br /></ng-container>\n        {{ meeting.address.street }}\n        <br />\n        {{ meeting.address | address }}\n      </p>\n    </div>\n    <ng-container *ngIf=\"meeting.tags\">\n      <div class=\"card-footer text-muted\">\n        <span *ngFor=\"let tag of meeting.tags | visibletags\" class=\"badge badge-primary\">{{ tag.tag }} </span>\n      </div>\n      <div id=\"invisible-tags\" style=\"display:none;\">\n        <ng-container *ngFor=\"let tag of meeting.tags | invisibletags\">\n          {{ tag.tag }}\n        </ng-container>\n      </div>\n    </ng-container>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/meeting-list/meeting-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/meeting-list/meeting-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: MeetingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingListComponent", function() { return MeetingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_meeting_meeting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/meeting/meeting.service */ "./src/app/services/meeting/meeting.service.ts");



var MeetingListComponent = /** @class */ (function () {
    function MeetingListComponent(meetingService) {
        this.meetingService = meetingService;
    }
    MeetingListComponent.prototype.getMeetings = function () {
        var _this = this;
        this.meetingService.getMeetings().subscribe(function (meetings) { return _this.meetings = meetings; });
    };
    MeetingListComponent.prototype.onSelect = function (day) {
        this.selectedDay = day;
        //this.filterText = "";
        //this.getMeetings();
    };
    MeetingListComponent.prototype.ngOnInit = function () {
        var d = new Date();
        this.weekdays = new Array(7);
        this.weekdays[0] = "Sunday";
        this.weekdays[1] = "Monday";
        this.weekdays[2] = "Tuesday";
        this.weekdays[3] = "Wednesday";
        this.weekdays[4] = "Thursday";
        this.weekdays[5] = "Friday";
        this.weekdays[6] = "Saturday";
        this.selectedDay = this.weekdays[d.getDay()];
        this.getMeetings();
    };
    MeetingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meeting-list',
            template: __webpack_require__(/*! ./meeting-list.component.html */ "./src/app/components/meeting-list/meeting-list.component.html"),
            styles: [__webpack_require__(/*! ./meeting-list.component.css */ "./src/app/components/meeting-list/meeting-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_meeting_meeting_service__WEBPACK_IMPORTED_MODULE_2__["MeetingService"]])
    ], MeetingListComponent);
    return MeetingListComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/navbar/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".firstLetterBigRed::first-letter {\r\n    font-size: 140%;\r\n    color: red;\r\n}\r\n\r\n.firstLetterBigRed {\r\n    display: inline-block;\r\n    font-size: 9pt;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0TGV0dGVyQmlnUmVkOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmZpcnN0TGV0dGVyQmlnUmVkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogOXB0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/navbar/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <a class=\"navbar-brand\" routerLink=\"/home\">\n          <span class=\"firstLetterBigRed\">OHIO </span>\n          <span class=\"firstLetterBigRed\">VALLEY </span>\n          <span class=\"firstLetterBigRed\">AREA OF</span>\n          <span class=\"firstLetterBigRed\">NARCOTICS </span>\n          <span class=\"firstLetterBigRed\">ANONYMOUS </span>\n      </a>          \n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      \n      <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n          <ul class=\"navbar-nav ml-auto align-items-end\">     \n              <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                  <a class=\"nav-link active\" routerLink=\"/home\">Home</a>\n              </li>\n              <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                  <a class=\"nav-link\" routerLink=\"/calendar\">Calendar</a>\n              </li>\n              <ng-container *ngIf=\"documents\">\n                <!-- If there's just one, a dropdown is useless. -->\n                <ng-container *ngIf=\"documents.length == 1 else documentsDropdown\">\n                  <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" >\n                      <a class=\"nav-link\" routerLink=\"/documents/{{ documents[0].type }}\">{{ documents[0].display }}</a>\n                  </li>\n                </ng-container>\n                <ng-template #documentsDropdown>\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link dropdown-toggle\" style=\"left: auto; right:0\" href=\"#\" id=\"documentsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Documents\n                        </a>\n                        <div class=\"dropdown-menu dropdown-menu-right\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\"  aria-labelledby=\"documentsDropdown\">\n                        <a *ngFor=\"let document of documents\" class=\"dropdown-item\" routerLink=\"/documents/{{ document.type }}\">{{ document.display }}</a>\n                        </div>\n                    </li>\n                </ng-template>\n              </ng-container>\n              <li class=\"nav-item dropdown\">\n                  <a class=\"nav-link dropdown-toggle\" style=\"left: auto; right:0\" href=\"#\" id=\"meetingsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Meetings\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\"  aria-labelledby=\"meetingsDropdown\">\n                  <a class=\"dropdown-item\" routerLink=\"/meeting-list\">Meetings</a>\n                  <a class=\"dropdown-item\" href=\"http://www.nalouisville.net/printable-meeting-schedule.html\">LASCNA Printable Meeting Schedule</a>\n                  </div>\n              </li>\n          </ul>\n      </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/navbar/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_document_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/document/document.service */ "./src/app/services/document/document.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(documentService) {
        this.documentService = documentService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentService.getDocuments().subscribe(function (documents) { return _this.documents = documents; });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_document_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/address/address.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/address/address.pipe.ts ***!
  \***********************************************/
/*! exports provided: AddressPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPipe", function() { return AddressPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddressPipe = /** @class */ (function () {
    function AddressPipe() {
    }
    AddressPipe.prototype.transform = function (address) {
        return address.city + ", " + address.state + " " + address.zip;
    };
    AddressPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'address'
        })
    ], AddressPipe);
    return AddressPipe;
}());



/***/ }),

/***/ "./src/app/pipes/dayofweek/dayofweek.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/dayofweek/dayofweek.pipe.ts ***!
  \***************************************************/
/*! exports provided: DayOfWeekPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayOfWeekPipe", function() { return DayOfWeekPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DayOfWeekPipe = /** @class */ (function () {
    function DayOfWeekPipe() {
    }
    DayOfWeekPipe.prototype.transform = function (meetingList, dayOfWeek) {
        if (!meetingList)
            return meetingList;
        if (dayOfWeek == "") {
            return meetingList;
        }
        return meetingList.filter(function (meeting) {
            return meeting.dayOfWeek == dayOfWeek;
        });
    };
    DayOfWeekPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dayofweek'
        })
    ], DayOfWeekPipe);
    return DayOfWeekPipe;
}());



/***/ }),

/***/ "./src/app/pipes/search/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/search/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time/time.pipe */ "./src/app/pipes/time/time.pipe.ts");



var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (meetings, filterText) {
        var _this = this;
        if (!filterText)
            return meetings;
        this.filters = filterText.split(' ');
        if (!meetings || !filterText) {
            return meetings;
        }
        return meetings.filter(function (meeting) {
            return _this.filters.some(function (filter) {
                if (filter == '')
                    return false;
                filter = filter.toUpperCase();
                return _this.verifyFilters(meeting, filter);
            });
        });
    };
    SearchPipe.prototype.verifyFilters = function (meeting, filter) {
        return this.filterCheck(meeting.groupName, filter) ||
            this.filterCheck("" + meeting.dayOfWeek, filter) ||
            this.filterCheck(new _time_time_pipe__WEBPACK_IMPORTED_MODULE_2__["TimePipe"]().transform(meeting.time), filter) ||
            this.filterCheck(meeting.location, filter) ||
            this.filterCheck(meeting.address.street, filter) ||
            this.filterCheck(meeting.address.city, filter) ||
            this.filterCheck(meeting.address.state, filter) ||
            this.filterCheck(meeting.address.zip, filter) ||
            this.checkTags(meeting.tags, filter);
    };
    SearchPipe.prototype.filterCheck = function (value, filter) {
        value = value || "";
        return value.toUpperCase().includes(filter);
    };
    SearchPipe.prototype.checkTags = function (tags, filter) {
        var _this = this;
        if (!tags)
            return false;
        var found = false;
        found = tags.some(function (tag) {
            if (_this.filterCheck(tag.tag, filter)) {
                return true;
            }
        });
        return found;
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/pipes/tag/tag.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/tag/tag.pipe.ts ***!
  \***************************************/
/*! exports provided: VisibleTagPipe, InvisibleTagPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibleTagPipe", function() { return VisibleTagPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvisibleTagPipe", function() { return InvisibleTagPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VisibleTagPipe = /** @class */ (function () {
    function VisibleTagPipe() {
    }
    VisibleTagPipe.prototype.transform = function (tags) {
        return tags.filter(function (tag) { return tag.visible; });
    };
    VisibleTagPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'visibletags'
        })
    ], VisibleTagPipe);
    return VisibleTagPipe;
}());

var InvisibleTagPipe = /** @class */ (function () {
    function InvisibleTagPipe() {
    }
    InvisibleTagPipe.prototype.transform = function (tags) {
        return tags.filter(function (tag) { return !tag.visible; });
    };
    InvisibleTagPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'invisibletags'
        })
    ], InvisibleTagPipe);
    return InvisibleTagPipe;
}());



/***/ }),

/***/ "./src/app/pipes/time/time.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/time/time.pipe.ts ***!
  \*****************************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (time) {
        var hours = Math.floor(time / 3600);
        var ampm = hours >= 12 ? "PM" : "AM";
        hours = hours > 12 ? hours - 12 : hours;
        time = time % 3600;
        var minutes = Math.floor(time / 60);
        var minuteString = minutes < 10 ? "0" + minutes : minutes;
        return hours + ":" + minuteString + " " + ampm;
    };
    TimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'time'
        })
    ], TimePipe);
    return TimePipe;
}());



/***/ }),

/***/ "./src/app/services/document/document.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/document/document.service.ts ***!
  \*******************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DocumentService = /** @class */ (function () {
    function DocumentService(http) {
        this.http = http;
    }
    DocumentService.prototype.getDocuments = function () {
        return this.http.get('assets/data/documents.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/services/meeting/meeting.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/meeting/meeting.service.ts ***!
  \*****************************************************/
/*! exports provided: MeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingService", function() { return MeetingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MeetingService = /** @class */ (function () {
    function MeetingService(http) {
        this.http = http;
    }
    MeetingService.prototype.getMeetings = function () {
        return this.http.get('assets/data/meetings.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    MeetingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeetingService);
    return MeetingService;
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

module.exports = __webpack_require__(/*! C:\Users\Charlie\Documents\GitHub\ovana-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map