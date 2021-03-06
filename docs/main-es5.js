(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/Admin/Developer/portfolio-projects/warehouse-app/warehouse/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4AUu":
    /*!**********************************************************!*\
      !*** ./src/app/pages/about-page/about-page.component.ts ***!
      \**********************************************************/

    /*! exports provided: AboutPageComponent */

    /***/
    function AUu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
        return AboutPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutPageComponent = /*#__PURE__*/function () {
        function AboutPageComponent() {
          _classCallCheck(this, AboutPageComponent);
        }

        _createClass(AboutPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutPageComponent;
      }();

      AboutPageComponent.??fac = function AboutPageComponent_Factory(t) {
        return new (t || AboutPageComponent)();
      };

      AboutPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AboutPageComponent,
        selectors: [["app-about-page"]],
        decls: 41,
        vars: 0,
        consts: [[1, "hero"], [1, "page-container"], [1, "mx-auto", "text-center", "col-xl-6", "col-lg-9", "col-md-12", "col-sm-11", "pt-5", "pb-5"], [1, "text-justify", "mx-auto"], [1, "text-center"], ["href", "https://murrayobrien.github.io/"], ["href", "https://github.com/murrayobrien/angular-app"]],
        template: function AboutPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "About This Site");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " This site was built with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Angular TS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Bootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Charts.js");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Unicons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " for developer demonstrative purposes. Feel free to play around with this simple site, creating fake products, removing products, viewing the statistical graph change based on products and/or edit your username. A Rest API was built for the site but is not in use for the demonstration. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " See some of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "my other projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " at: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "https://murrayobrien.github.io/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " See ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "source code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "https://github.com/murrayobrien/angular-app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "I hope you like my work, cheers :) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "4J96":
    /*!************************************************!*\
      !*** ./src/app/core/services/state.service.ts ***!
      \************************************************/

    /*! exports provided: StateService */

    /***/
    function J96(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateService", function () {
        return StateService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StateService = /*#__PURE__*/function () {
        function StateService() {
          _classCallCheck(this, StateService);

          //User
          this.user = {};
          this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.user); //Products

          this.products = [];
          this.allProducts$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.products); //Columns

          this.columns = [];
          this.columns$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.columns); //Layout

          this.navbar = true;
          this.navbar$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.navbar);
        }

        _createClass(StateService, [{
          key: "setUser",
          value: function setUser(userin) {
            this.user = userin;
            this.user$.next(this.user);
          }
        }, {
          key: "setLayout",
          value: function setLayout(navbar) {
            this.navbar = navbar;
            this.navbar$.next(this.navbar);
          }
        }, {
          key: "setProduct",
          value: function setProduct(productsAndColumns) {
            var columns = [];
            var products = [];
            columns = productsAndColumns[0];
            var headers = []; //Get Headers

            for (var i = 0; i < columns.length; i++) {
              headers.push(columns[i][0]);
            } //Set Products


            products = productsAndColumns[1];
            this.products = products;
            this.allProducts$.next(this.products);
            localStorage.setItem("products", JSON.stringify(this.products)); //Set Columns

            this.columns = headers;
            this.columns$.next(this.columns);
            localStorage.setItem("columns", JSON.stringify(this.columns));
          }
        }]);

        return StateService;
      }();

      StateService.??fac = function StateService_Factory(t) {
        return new (t || StateService)();
      };

      StateService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: StateService,
        factory: StateService.??fac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "6V8c":
    /*!**********************************************************!*\
      !*** ./src/app/pages/login-page/login-page.component.ts ***!
      \**********************************************************/

    /*! exports provided: LoginPageComponent */

    /***/
    function V8c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
        return LoginPageComponent;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/services/api.service */
      "qc5V");
      /* harmony import */


      var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/state.service */
      "4J96");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginPageComponent_small_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter your Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function LoginPageComponent_small_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Please enter your Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var LoginPageComponent = /*#__PURE__*/function () {
        function LoginPageComponent(apiService, stateService, router) {
          _classCallCheck(this, LoginPageComponent);

          this.apiService = apiService;
          this.stateService = stateService;
          this.router = router;
          this.user = {
            name: "user123-example",
            password: "Password123"
          };
          this.result = "";
        }

        _createClass(LoginPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              var user = {
                name: "user123-example",
                email: "example@gmail.com",
                password: "Password123",
                role: "Admin"
              };
              this.stateService.setUser(user); //Setting LocalStorage Items
              //This would be updated with setUser(user)

              this.apiService.setLocalStorageItem("role", user.role);
              this.apiService.setLocalStorageItem("email", user.email);
              this.apiService.setLocalStorageItem("name", user.name);
              this.apiService.setLocalStorageItem("token", "tokenexample");
              this.router.navigate(["/dashboard-page"]);
            }

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.apiService.post(this.user, "user/loginUser").subscribe(function (response) {
                //Output Data for Console
                console.log(response);

                if (response == null) {
                  _this.result = "Unable to Connect to Server";
                } //Validation


                if (response.Success == false) {
                  _this.result = response.Message;
                  return;
                } //Set User


                var user = response.Data;

                _this.stateService.setUser(user); //Setting LocalStorage Items


                _this.apiService.setLocalStorageItem("role", user.role);

                _this.apiService.setLocalStorageItem("email", user.email);

                _this.apiService.setLocalStorageItem("name", user.name);

                _this.apiService.setLocalStorageItem("token", user.token);

                _this.apiService.fetchProducts(user); //Direct to Dashboard Page


                _this.router.navigate(["/dashboard-page"]);
              }, function (err) {
                console.error(err);
                _this.result = "Unable to Connect to the Server, " + err["statusText"];
              });
            }
          }
        }]);

        return LoginPageComponent;
      }();

      LoginPageComponent.??fac = function LoginPageComponent_Factory(t) {
        return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      LoginPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: LoginPageComponent,
        selectors: [["app-login-page"]],
        decls: 30,
        vars: 6,
        consts: [[1, "hero"], [1, "page-container"], [1, "mx-auto", "text-center", "col-12", "pt-5", "pb-5"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group", "col-lg-4", "mx-auto"], [2, "color", "rgb(20, 170, 20)"], ["for", "name", "hidden", ""], ["type", "text", "placeholder", "Username", "id", "name", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], ["for", "password", "hidden", ""], ["type", "password", "placeholder", "Password", "id", "password", "name", "password", "required", "", 1, "form-control", "mt-3", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "mt-4", 3, "disabled"], ["routerLink", "/register-page", "routerLinkActive", "active", 1, "btn", "btn-link", "mt-4"], [2, "color", "rgb(255, 81, 81)"]],
        template: function LoginPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Please Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " You can use these default login details :) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.user.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, LoginPageComponent_small_18_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, LoginPageComponent_small_23_Template, 3, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](17);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !_r1.pristine && !_r1.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !_r3.pristine && !_r3.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.result);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "A5xL":
    /*!**************************************************************!*\
      !*** ./src/app/pages/profile-page/profile-page.component.ts ***!
      \**************************************************************/

    /*! exports provided: ProfilePageComponent */

    /***/
    function A5xL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function () {
        return ProfilePageComponent;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/api.service */
      "qc5V");
      /* harmony import */


      var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/state.service */
      "4J96");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function ProfilePageComponent_p_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ngb-alert", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("closed", function ProfilePageComponent_p_35_Template_ngb_alert_closed_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);

            var alert_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r3.close(alert_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var alert_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", alert_r2.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](alert_r2.message);
        }
      }

      var DALERTS = [{
        type: "danger",
        message: "This is a danger alert"
      }];
      var ALERTS = [{
        type: "success",
        message: "This is an success alert"
      }];

      var ProfilePageComponent = /*#__PURE__*/function () {
        function ProfilePageComponent(apiService, stateService) {
          _classCallCheck(this, ProfilePageComponent);

          this.apiService = apiService;
          this.stateService = stateService;
          this.alerts = [];
          this.url = "user/changeUserDetails";
          this.user = {
            name: "",
            email: "",
            token: ""
          };
          this.errorMessage = "";
          this.successMessage = "";
        }

        _createClass(ProfilePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user.name = this.apiService.getLocalStorageItem("name");
            this.user.email = this.apiService.getLocalStorageItem("email");
            this.user.token = this.apiService.getLocalStorageItem("token");
          }
        }, {
          key: "close",
          value: function close(alert) {
            this.alerts.splice(this.alerts.indexOf(alert), 1);
          } //Stop User From Continuous Calls

        }, {
          key: "limitBtn",
          value: function limitBtn() {
            document.getElementById("changeBtn").disabled = true;
            setTimeout(function () {
              document.getElementById("changeBtn").disabled = false;
            }, 2000);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            //Reset User Messages
            this.errorMessage = "";
            this.successMessage = "";
            this.limitBtn(); //Validation To See If They've Made Any Changes

            if (this.user.name == this.apiService.getLocalStorageItem("name") && this.user.email == this.apiService.getLocalStorageItem("email")) {
              this.errorMessage = "You havent made any changes";
              return;
            }

            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.apiService.setLocalStorageItem("name", this.user.name);
              this.apiService.setLocalStorageItem("email", this.user.email);
              this.stateService.setUser(this.user);
              this.successMessage = "Successfully Changed User Details";
            }

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.apiService.post(this.user, this.url).subscribe(function (response) {
                console.log(response); //Validation

                if (!response.Success) {
                  _this2.errorMessage = response.Message;
                  return;
                } //Storage


                _this2.apiService.setLocalStorageItem("name", response.Data.name);

                _this2.apiService.setLocalStorageItem("email", response.Data.email); //Broadcast Subject


                _this2.stateService.setUser(_this2.user);

                _this2.successMessage = "Successfully Changed User Details";
              }, function (err) {
                console.error(err);
              });
            }
          }
        }]);

        return ProfilePageComponent;
      }();

      ProfilePageComponent.??fac = function ProfilePageComponent_Factory(t) {
        return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]));
      };

      ProfilePageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: ProfilePageComponent,
        selectors: [["app-profile-page"]],
        decls: 42,
        vars: 7,
        consts: [[1, "hero"], [1, "page-container"], [1, "pl-lg-3", "col-lg-11", "ml-lg-5", "ml-sm-2", "mt-3"], [1, "col-12"], [2, "color", "rgb(20, 170, 20)"], [1, "col-12", "pl-0"], [3, "ngSubmit"], ["changeUserDetailsForm", "ngForm"], [1, "form-group", "col-lg-4", "col-sm-12"], ["for", "name", "hidden", ""], ["type", "text", "id", "name", "name", "name", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email", "hidden", ""], ["type", "text", "id", "email", "name", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "changeBtn", 1, "btn", "btn-info", "mt-4"], ["class", "pl-4 pr-3", 4, "ngFor", "ngForOf"], [1, "pl-3"], [2, "color", "royalblue"], [2, "color", "rgb(255, 81, 81)"], [1, "pl-4", "pr-3"], [3, "type", "closed"]],
        template: function ProfilePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Change username and email and watch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "navbar change");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "form", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function ProfilePageComponent_Template_form_ngSubmit_20_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Change Username or Email below");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ProfilePageComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.user.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function ProfilePageComponent_Template_input_ngModelChange_32_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, " Change Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, ProfilePageComponent_p_35_Template, 3, 2, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.alerts);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.errorMessage);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "G5/g":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/sidebar-footer/sidebar-footer.component.ts ***!
      \******************************************************************************/

    /*! exports provided: SidebarFooterComponent */

    /***/
    function G5G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarFooterComponent", function () {
        return SidebarFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SidebarFooterComponent = /*#__PURE__*/function () {
        function SidebarFooterComponent() {
          _classCallCheck(this, SidebarFooterComponent);
        }

        _createClass(SidebarFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidebarFooterComponent;
      }();

      SidebarFooterComponent.??fac = function SidebarFooterComponent_Factory(t) {
        return new (t || SidebarFooterComponent)();
      };

      SidebarFooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SidebarFooterComponent,
        selectors: [["app-sidebar-footer"]],
        decls: 9,
        vars: 0,
        consts: [[1, "col-11", "mx-auto"], [1, "text-right"], ["href", "https://murrayobrien.github.io/", 1, "authorLink"]],
        template: function SidebarFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " \xA92021 | Designed & Built by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Murray O'Brien");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: [".authorLink[_ngcontent-%COMP%] {\n  color: var(--p);\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXItZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNpZGViYXItZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aG9yTGluayB7XG4gIGNvbG9yOiB2YXIoLS1wKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "MX8e":
    /*!******************************************************************!*\
      !*** ./src/app/pages/dashboard-page/dashboard-page.component.ts ***!
      \******************************************************************/

    /*! exports provided: DashboardPageComponent */

    /***/
    function MX8e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function () {
        return DashboardPageComponent;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/state.service */
      "4J96");
      /* harmony import */


      var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/api.service */
      "qc5V");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["alert"];

      function DashboardPageComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "No Product to display...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function DashboardPageComponent_table_21_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function DashboardPageComponent_table_21_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var column_r7 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r4.capitalize(column_r7), " ");
        }
      }

      function DashboardPageComponent_table_21_th_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function DashboardPageComponent_table_21_tr_5_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var column_r12 = ctx.$implicit;

          var product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", product_r8[column_r12], " ");
        }
      }

      function DashboardPageComponent_table_21_tr_5_td_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPageComponent_table_21_tr_5_td_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16);

            var product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r14.removeProduct(product_r8.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function DashboardPageComponent_table_21_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, DashboardPageComponent_table_21_tr_5_td_4_Template, 2, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, DashboardPageComponent_table_21_tr_5_td_5_Template, 3, 0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var product_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("id", product_r8.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", i_r9 + 1, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r6.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r6.role == "Admin");
        }
      }

      function DashboardPageComponent_table_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, DashboardPageComponent_table_21_th_2_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, DashboardPageComponent_table_21_th_3_Template, 2, 1, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, DashboardPageComponent_table_21_th_4_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, DashboardPageComponent_table_21_tr_5_Template, 6, 4, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.errorMsg == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r1.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.role == "Admin" && ctx_r1.errorMsg == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r1.allProducts);
        }
      }

      var DashboardPageComponent = /*#__PURE__*/function () {
        function DashboardPageComponent(stateService, apiService) {
          _classCallCheck(this, DashboardPageComponent);

          this.stateService = stateService;
          this.apiService = apiService;
          this.role = "";
          this.url = "product/removeProduct";
          this.token = "";
          this.errorMsg = "";
          this.product = {
            token: ""
          };
          this.allProducts = [{
            id: 1,
            name: "Apples",
            category: "Food",
            quantity: 100
          }, {
            id: 34,
            name: "Shirts",
            category: "Clothes",
            quantity: 50
          }, {
            id: 20,
            name: "Vitamin",
            category: "Medicine",
            quantity: 110
          }, {
            id: 10,
            name: "Chairs",
            category: "Household",
            quantity: 120
          }];
          this.columns = ["name", "category", "quantity"];
        }

        _createClass(DashboardPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.getUserRole();
              this.stateService.allProducts$.subscribe(function (products) {
                if (products.length !== 0) {
                  _this3.allProducts = products;
                  return;
                } else {
                  var data = [];
                  data.push(_this3.columns);
                  data.push(_this3.allProducts);

                  _this3.stateService.setProduct(data);
                }
              });
            }

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.getUserRole();
              this.product.token = this.apiService.getLocalStorageItem("token");
              this.getProducts();
              this.getColumns();
            }
          }
        }, {
          key: "getUserRole",
          value: function getUserRole() {
            var _this4 = this;

            this.stateService.user$.subscribe(function (user) {
              _this4.role = user.role || localStorage.getItem("role");
            });
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            var _this5 = this;

            this.stateService.allProducts$.subscribe(function (products) {
              _this5.allProducts = products;

              if (!_this5.allProducts.length) {
                _this5.allProducts = JSON.parse(localStorage.getItem("products"));
              }
            });
          }
        }, {
          key: "getColumns",
          value: function getColumns() {
            var _this6 = this;

            this.stateService.columns$.subscribe(function (columns) {
              _this6.columns = columns;

              if (!_this6.columns.length) {
                _this6.columns = JSON.parse(localStorage.getItem("columns"));
              }
            });
          }
        }, {
          key: "closeAlert",
          value: function closeAlert() {
            this.alert.nativeElement.classList.remove("show");
            this.alert.nativeElement.classList.remove("d-block");
            this.alert.nativeElement.classList.add("d-none");
          } //Capitilize Headers First Letter

        }, {
          key: "capitalize",
          value: function capitalize(s) {
            return s[0].toUpperCase() + s.slice(1);
          }
        }, {
          key: "removeLocalProduct",
          value: function removeLocalProduct(id) {
            //Delete Product Subject And LocalStorage
            for (var i = 0; i < this.allProducts.length; i++) {
              if (this.allProducts[i]["id"] === id) {
                this.allProducts.splice(i, 1); //Update Subject

                this.stateService.allProducts$.next(this.allProducts); //Update Local Storage

                localStorage.setItem("products", JSON.stringify(this.allProducts));
              }
            }
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(id) {
            var _this7 = this;

            this.errorMsg = "";
            this.product.id = id;

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.apiService.post(this.product, "product/removeProduct").subscribe(function (res) {
                console.log(res);

                if (!res.Success) {
                  _this7.errorMsg = res.Message;
                  return;
                }

                _this7.alert.nativeElement.classList.add("show");

                _this7.alert.nativeElement.classList.add("d-block");

                _this7.removeLocalProduct(id);
              }, function (err) {
                console.error(err);
                _this7.errorMsg = err["statusText"];
              });
            }

            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.alert.nativeElement.classList.add("show");
              this.alert.nativeElement.classList.add("d-block");
              this.removeLocalProduct(id);
            }
          }
        }]);

        return DashboardPageComponent;
      }();

      DashboardPageComponent.??fac = function DashboardPageComponent_Factory(t) {
        return new (t || DashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      DashboardPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: DashboardPageComponent,
        selectors: [["app-dashboard-page"]],
        viewQuery: function DashboardPageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.alert = _t.first);
          }
        },
        decls: 31,
        vars: 4,
        consts: [[1, "hero"], [1, "page-container"], [1, "col-lg-11", "ml-lg-5", "ml-sm-2", "mt-3"], [2, "color", "rgb(20, 170, 20)"], [2, "color", "tomato"], [1, "table-section"], ["class", "mx-auto text-center", 4, "ngIf"], ["style", "width: 99%", 4, "ngIf"], [1, "absoluteAlert", "mx-auto", "text-center", "col-lg-12", "col-sm-12", "pl-lg-5", "pr-lg-5", "pl-3", "pr-3"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "d-none"], ["alert", ""], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "mx-auto", "text-center"], [2, "width", "99%"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "numbers"], ["type", "submit", 1, "btn", "btn-outline-danger", 3, "click"], [1, "uil", "uil-trash-alt"]],
        template: function DashboardPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " products as you please :) For demonstration purposes, the database ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "will not");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " be effected ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, DashboardPageComponent_div_20_Template, 3, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, DashboardPageComponent_table_21_Template, 6, 4, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardPageComponent_Template_button_click_25_listener() {
              return ctx.closeAlert();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " Product Has Been ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Removed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("User Role: ", ctx.role, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.allProducts.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.allProducts.length !== 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["td[_ngcontent-%COMP%] {\n  border: 1px solid rgb(87, 87, 87);\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.table-section[_ngcontent-%COMP%] {\n  overflow: auto;\n  min-height: 400px;\n}\n\n.category-tag[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  margin-right: 6px;\n  border-radius: 50%;\n  background-color: rgb(226, 101, 101);\n  margin-top: 8px;\n}\n\n.numbers[_ngcontent-%COMP%] {\n  background-color: rgb(134, 174, 247);\n}\n\n.numbers[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.numbers[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.absoluteAlert[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  margin: auto 0;\n  padding: 0;\n  z-index: 200;\n}\n\n.absoluteAlert[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(255, 180, 180) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoiZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDg3LCA4NywgODcpO1xufVxuXG50aCxcbnRkIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udGFibGUtc2VjdGlvbiB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLmNhdGVnb3J5LXRhZyB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDEwMSwgMTAxKTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubnVtYmVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDE3NCwgMjQ3KTtcbn1cblxuLm51bWJlcnMgc3Ryb25nIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5udW1iZXJzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWJzb2x1dGVBbGVydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICBtYXJnaW46IGF1dG8gMDtcbiAgcGFkZGluZzogMDtcbiAgei1pbmRleDogMjAwO1xufVxuXG4uYWJzb2x1dGVBbGVydCBzdHJvbmcge1xuICBjb2xvcjogcmdiKDI1NSwgMTgwLCAxODApICFpbXBvcnRhbnQ7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
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
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/services/state.service */
      "4J96");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/components/nav-bar/nav-bar.component */
      "usaV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_components_sidebar_footer_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/components/sidebar-footer/sidebar-footer.component */
      "G5/g");
      /* harmony import */


      var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/components/footer/footer.component */
      "aF9I");

      function AppComponent_app_sidebar_footer_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-sidebar-footer");
        }
      }

      function AppComponent_app_footer_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-footer");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          parent: a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          content: a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          subContent: a0
        };
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(stateService) {
          _classCallCheck(this, AppComponent);

          this.stateService = stateService;
          this.navbar = true;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.stateService.navbar$.subscribe(function (nav) {
              _this8.navbar = nav;
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]));
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 8,
        vars: 11,
        consts: [[3, "ngClass"], ["routerOutlet", "outlet"], [4, "ngIf"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-nav-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "router-outlet", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AppComponent_app_sidebar_footer_6_Template, 1, 0, "app-sidebar-footer", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, AppComponent_app_footer_7_Template, 1, 0, "app-footer", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, !ctx.navbar));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c1, !ctx.navbar));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c2, !ctx.navbar));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.navbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.navbar);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _shared_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_sidebar_footer_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_5__["SidebarFooterComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
        styles: [".parent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  max-height: 100vh;\n  overflow-x: hidden !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n}\n\n.subContent[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3ViQ29udGVudCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "UnyZ":
    /*!*************************************************!*\
      !*** ./src/app/core/guards/auth-guard.guard.ts ***!
      \*************************************************/

    /*! exports provided: AuthGuardGuard */

    /***/
    function UnyZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function () {
        return AuthGuardGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/api.service */
      "qc5V");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';


      var AuthGuardGuard = /*#__PURE__*/function () {
        function AuthGuardGuard(apiService, router) {
          _classCallCheck(this, AuthGuardGuard);

          this.apiService = apiService;
          this.router = router;
        }

        _createClass(AuthGuardGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (!this.apiService.isLoggedIn()) {
              this.router.navigate(['/login-page']);
              return false;
            }

            return true;
          }
        }]);

        return AuthGuardGuard;
      }();

      AuthGuardGuard.??fac = function AuthGuardGuard_Factory(t) {
        return new (t || AuthGuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuardGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthGuardGuard,
        factory: AuthGuardGuard.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "YeYy":
    /*!***************************************************!*\
      !*** ./src/app/pages/home-page/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function YeYy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 64,
        vars: 0,
        consts: [[1, "page-container"], [1, "home-banner", "col-lg-10", "ml-lg-5", "ml-sm-2", "mt-3", "mx-auto", 2, "background-image", "url('assets/images/wh-pic-1.jpg')"], [1, "pl-lg-3"], [2, "color", "white"], ["href", "#products", 1, "btn", "btn-primary", "mt-4"], ["id", "about-us", 1, "info-banner"], [1, "col-lg-5", "col-sm-12", "float-lg-left", "ml-lg-5"], ["src", "assets/images/wh-pic-2.jpg", "alt", "An Empty Warehouse", 1, "img-fluid", "wh-image"], [1, "col-lg-5", "col-sm-12", "float-lg-left", "text-justify"], [1, "col-11", "text-center", "mx-auto"], ["id", "products", 1, "product-banner"], [1, "mx-auto", "text-center"], [1, "row"], [1, "product", "col-lg-4"], ["src", "assets/images/chair.jpg", "alt", "", 1, "img-fluid", 2, "height", "370px"], [1, "text-center"], [1, "btn", "btn-outline-primary", "mt-4"], ["src", "assets/images/shirt.jpg", "alt", "", 1, "img-fluid", 2, "height", "370px"], ["href", "#about-us", 1, "btn", "btn-outline-primary", "mt-4"], ["src", "assets/images/stethoscope.jpg", "alt", "", 1, "img-fluid", 2, "height", "370px"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Welcome to, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " The Warehouse ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "See Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Our Collection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Household");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "About Household");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Clothes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "About Clothes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Medicine");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "About Medicine");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: [".home-banner[_ngcontent-%COMP%] {\n  height: 400px;\n  background-color: rgb(242, 249, 250);\n  border-radius: 4px;\n}\n\n.info-banner[_ngcontent-%COMP%] {\n  min-height: 390px;\n}\n\n.wh-image[_ngcontent-%COMP%] {\n  max-height: 390px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWJhbm5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0OSwgMjUwKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaW5mby1iYW5uZXIge1xuICBtaW4taGVpZ2h0OiAzOTBweDtcbn1cblxuLndoLWltYWdlIHtcbiAgbWF4LWhlaWdodDogMzkwcHg7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _pages_home_page_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/home-page/home.component */
      "YeYy");
      /* harmony import */


      var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/login-page/login-page.component */
      "6V8c");
      /* harmony import */


      var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/register-page/register-page.component */
      "lmRq");
      /* harmony import */


      var _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/dashboard-page/dashboard-page.component */
      "MX8e");
      /* harmony import */


      var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/profile-page/profile-page.component */
      "A5xL");
      /* harmony import */


      var _pages_products_page_edit_products_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/products-page/edit-products-page.component */
      "xtmM");
      /* harmony import */


      var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/statistics/statistics.component */
      "v6lb");
      /* harmony import */


      var _shared_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/components/nav-bar/nav-bar.component */
      "usaV");
      /* harmony import */


      var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shared/components/footer/footer.component */
      "aF9I");
      /* harmony import */


      var _core_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./core/guards/auth-guard.guard */
      "UnyZ");
      /* harmony import */


      var _core_services_state_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./core/services/state.service */
      "4J96");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/about-page/about-page.component */
      "4AUu");
      /* harmony import */


      var _pages_user_profile_page_user_profile_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/user-profile-page/user-profile-page.component */
      "jtbL");
      /* harmony import */


      var _shared_components_sidebar_footer_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./shared/components/sidebar-footer/sidebar-footer.component */
      "G5/g");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); //Pages
      //Components
      //Guard
      //Services
      //Chart


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??fac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["????defineInjector"]({
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _core_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuardGuard"], _core_services_state_service__WEBPACK_IMPORTED_MODULE_17__["StateService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _shared_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _pages_home_page_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"], _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_10__["DashboardPageComponent"], _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_11__["ProfilePageComponent"], _pages_products_page_edit_products_page_component__WEBPACK_IMPORTED_MODULE_12__["EditProductsPageComponent"], _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_13__["StatisticsComponent"], _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_20__["AboutPageComponent"], _pages_user_profile_page_user_profile_page_component__WEBPACK_IMPORTED_MODULE_21__["UserProfilePageComponent"], _shared_components_sidebar_footer_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_22__["SidebarFooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"]]
        });
      })();
      /***/

    },

    /***/
    "aF9I":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function aF9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FooterComponent_p_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1);
        }
      }

      var FooterComponent = /*#__PURE__*/function () {
        // Format YYYY-mm-dd HH:mm:ss
        function FooterComponent(datepipe) {
          var _this9 = this;

          _classCallCheck(this, FooterComponent);

          this.datepipe = datepipe;
          this.items = ["591 Grand Avenue, San Marcos, CA, 92069", "021 453 46353"];
          setInterval(function () {
            _this9.time = _this9.datepipe.transform(new Date(), "YYYY-MM-dd HH:mm:ss");
          }, 1000);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]));
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 34,
        vars: 2,
        consts: [[1, "footer"], [1, "col-lg-10", "mx-auto"], [1, "row", "mx-lg-auto"], [1, "col-lg-4"], [1, "col-lg-10", "pl-lg-5"], [1, "col-lg-10"], [4, "ngFor", "ngForOf"], [1, "col-lg-12", "mx-auto", "text-center"], [1, "footer-p"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The Warehouse ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "2011 - 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Find Us Here:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, FooterComponent_p_25_Template, 2, 1, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\xA92021 Example App Built by Murray O'Brien");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.time);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".footer-p[_ngcontent-%COMP%] {\n  color: var(--h) !important;\n}\n\n@media screen and (max-width: 500px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 80% !important;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 80% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItcCB7XG4gIGNvbG9yOiB2YXIoLS1oKSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBoNSB7XG4gICAgZm9udC1zaXplOiA4MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogODAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "jtbL":
    /*!************************************************************************!*\
      !*** ./src/app/pages/user-profile-page/user-profile-page.component.ts ***!
      \************************************************************************/

    /*! exports provided: UserProfilePageComponent */

    /***/
    function jtbL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilePageComponent", function () {
        return UserProfilePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/state.service */
      "4J96");

      var UserProfilePageComponent = /*#__PURE__*/function () {
        function UserProfilePageComponent(stateService) {
          _classCallCheck(this, UserProfilePageComponent);

          this.stateService = stateService;
          this.user = {
            name: "",
            email: ""
          };
        }

        _createClass(UserProfilePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.date = new Date().toString().slice(0, 10) + ", " + new Date().getFullYear();
            this.stateService.user$.subscribe(function (user) {
              _this10.user.name = user.name || localStorage.getItem("name");
              _this10.user.email = user.email || localStorage.getItem("email");
            });
          }
        }]);

        return UserProfilePageComponent;
      }();

      UserProfilePageComponent.??fac = function UserProfilePageComponent_Factory(t) {
        return new (t || UserProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]));
      };

      UserProfilePageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserProfilePageComponent,
        selectors: [["app-user-profile-page"]],
        decls: 19,
        vars: 3,
        consts: [[1, "hero"], [1, "page-container"], [1, "mx-auto", "text-center", "col-xl-4", "col-lg-6", "col-md-9", "col-sm-11", "pt-5", "pb-5"], [1, "card", "col-xl-10", "mx-auto"], [1, ".uil", "uil-user-circle", "profileIcon"]],
        template: function UserProfilePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "user:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "member since");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.user.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.user.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.date, "");
          }
        },
        styles: [".profileIcon[_ngcontent-%COMP%] {\n  color: #adbac7;\n  font-size: 50px;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: var(--h) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJY29uIHtcbiAgY29sb3I6ICNhZGJhYzc7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuaDYge1xuICBjb2xvcjogdmFyKC0taCkgIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "lmRq":
    /*!****************************************************************!*\
      !*** ./src/app/pages/register-page/register-page.component.ts ***!
      \****************************************************************/

    /*! exports provided: RegisterPageComponent */

    /***/
    function lmRq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function () {
        return RegisterPageComponent;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/services/api.service */
      "qc5V");
      /* harmony import */


      var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/state.service */
      "4J96");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RegisterPageComponent_small_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please enter your Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function RegisterPageComponent_small_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Invalid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function RegisterPageComponent_small_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Name must be at least 5 characters long. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function RegisterPageComponent_option_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var role_r9 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngValue", role_r9 === ctx_r8.defaultStr ? null : role_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", role_r9, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var RegisterPageComponent = /*#__PURE__*/function () {
        function RegisterPageComponent(apiService, stateService, router) {
          _classCallCheck(this, RegisterPageComponent);

          this.apiService = apiService;
          this.stateService = stateService;
          this.router = router;
          this.patternEmail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
          this.user = {
            name: 'tryme',
            email: 'example@gmail.com',
            password: 'Password123',
            role: 'Admin'
          };
          this.url = "user/registerUser";
          this.result = '';
          this.roles = ['Cashier', 'Admin'];
          this.defaultStr = 'Select A Role';
        }

        _createClass(RegisterPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this11 = this;

            this.stateService.setUser(this.user);

            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              //Setting LocalStorage Items
              //This would be updated with setUser(user)
              this.apiService.setLocalStorageItem('role', this.user.role);
              this.apiService.setLocalStorageItem('email', this.user.email);
              this.apiService.setLocalStorageItem('name', this.user.name);
              this.apiService.setLocalStorageItem('token', 'tokenexample');
              this.router.navigate(['/dashboard-page']);
            }

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.apiService.post(this.user, this.url).subscribe(function (response) {
                console.log(response);

                if (!response.Success) {
                  _this11.result = response.Message;
                  return;
                }

                _this11.router.navigate(['/dashboard-page']);
              }, function (err) {
                console.error(err);
              });
            }
          }
        }]);

        return RegisterPageComponent;
      }();

      RegisterPageComponent.??fac = function RegisterPageComponent_Factory(t) {
        return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      RegisterPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: RegisterPageComponent,
        selectors: [["app-register-page"]],
        decls: 38,
        vars: 13,
        consts: [[1, "hero"], [1, "page-container"], [1, "mx-auto", "text-center", "col-12", "pt-5", "pb-5"], [3, "ngSubmit"], ["registerForm", "ngForm"], [1, "form-group", "col-lg-4", "mx-auto"], [2, "color", "rgb(20, 170, 20)"], ["for", "name", "hidden", ""], ["type", "text", "placeholder", "Name", "id", "name", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], ["for", "email", "hidden", ""], ["type", "text", "placeholder", "Email", "id", "email", "name", "email", "required", "", 1, "form-control", "mt-3", 3, "ngModel", "pattern", "ngModelChange"], ["email", "ngModel"], ["type", "password", "placeholder", "Password", "id", "password", "name", "password", "required", "", "minlength", "8", 1, "form-control", "mt-3", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "role", "hidden", ""], ["id", "role", "name", "role", "required", "", 1, "form-control", "mt-3", 3, "ngModel", "ngModelChange"], ["role", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-danger", "mt-4", 3, "disabled"], [2, "color", "rgb(255, 75, 75)"], [3, "ngValue"]],
        template: function RegisterPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Register an Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " You can use these default registration details :) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.user.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, RegisterPageComponent_small_18_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, RegisterPageComponent_small_23_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, RegisterPageComponent_small_28_Template, 2, 0, "small", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "select", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function RegisterPageComponent_Template_select_ngModelChange_31_listener($event) {
              return ctx.user.role = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, RegisterPageComponent_option_33_Template, 2, 2, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](17);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](22);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !_r1.pristine && !_r1.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.email)("pattern", ctx.patternEmail);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _r5.errors == null ? null : _r5.errors.minlength);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.user.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](11, _c0, ctx.defaultStr).concat(ctx.roles));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.result);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_z"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "qc5V":
    /*!**********************************************!*\
      !*** ./src/app/core/services/api.service.ts ***!
      \**********************************************/

    /*! exports provided: ApiService */

    /***/
    function qc5V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./state.service */
      "4J96");

      var API_URL = "";

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, stateService) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.stateService = stateService;
        } //Post To Server


        _createClass(ApiService, [{
          key: "post",
          value: function post(userOrProduct, url) {
            return this.http.post("".concat(API_URL).concat(url), userOrProduct);
          } //Local Storage Functions: 
          //Returns Logged In Boolean

        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return !!localStorage.getItem('token');
          } //Set Local Storage Function

        }, {
          key: "setLocalStorageItem",
          value: function setLocalStorageItem(name, item) {
            localStorage.setItem(name, item);
          } //Get Local Storage Function

        }, {
          key: "getLocalStorageItem",
          value: function getLocalStorageItem(name) {
            return localStorage.getItem(name) || '';
          }
        }, {
          key: "fetchProducts",
          value: function fetchProducts(user) {
            var _this12 = this;

            this.post(user, "product/fetchProducts").subscribe(function (res) {
              console.log(res); //Validation

              if (!res.Success) {
                console.log(res.Message);
                return;
              } //Result (Columns and Products Array)


              var array = [];
              array = res.Data;

              _this12.stateService.setProduct(array);
            }, function (err) {
              console.error(err);
            });
          }
        }]);

        return ApiService;
      }();

      ApiService.??fac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]));
      };

      ApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ApiService,
        factory: ApiService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "usaV":
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/nav-bar/nav-bar.component.ts ***!
      \****************************************************************/

    /*! exports provided: moveIn, moveInOut, NavBarComponent */

    /***/
    function usaV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "moveIn", function () {
        return moveIn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "moveInOut", function () {
        return moveInOut;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/api.service */
      "qc5V");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/state.service */
      "4J96");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function NavBarComponent_nav_0_div_8_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Statistics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function NavBarComponent_nav_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, NavBarComponent_nav_0_div_8_div_6_Template, 4, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.role == "Admin");
        }
      }

      function NavBarComponent_nav_0_a_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Dark Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function NavBarComponent_nav_0_a_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Light Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function NavBarComponent_nav_0_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Add Product ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function NavBarComponent_nav_0_div_23_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r8.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Edit ", ctx_r5.role, " Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r5.name, " ");
        }
      }

      function NavBarComponent_nav_0_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function NavBarComponent_nav_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "App ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, NavBarComponent_nav_0_div_8_Template, 7, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function NavBarComponent_nav_0_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r10.toggleSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Sidebar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function NavBarComponent_nav_0_Template_li_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r12.toggleTheme();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](21, NavBarComponent_nav_0_a_21_Template, 3, 0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](22, NavBarComponent_nav_0_a_22_Template, 3, 0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](23, NavBarComponent_nav_0_div_23_Template, 19, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](24, NavBarComponent_nav_0_div_24_Template, 5, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("@fadeInOut-1", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.theme == ctx_r0.light);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.theme == ctx_r0.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r0.loggedIn);
        }
      }

      function NavBarComponent_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Statistics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function NavBarComponent_div_1_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", ctx_r14.name, " ");
        }
      }

      function NavBarComponent_div_1_a_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function NavBarComponent_div_1_a_17_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r19.toggleTheme();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Dark Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function NavBarComponent_div_1_a_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function NavBarComponent_div_1_a_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r21.toggleTheme();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Light Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function NavBarComponent_div_1_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Add Product ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function NavBarComponent_div_1_div_19_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r23.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Edit ", ctx_r17.role, " Profile ");
        }
      }

      function NavBarComponent_div_1_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function NavBarComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "App ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, NavBarComponent_div_1_div_7_Template, 9, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, NavBarComponent_div_1_div_12_Template, 5, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function NavBarComponent_div_1_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r25.toggleSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "Navbar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, NavBarComponent_div_1_a_17_Template, 3, 0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, NavBarComponent_div_1_a_18_Template, 3, 0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, NavBarComponent_div_1_div_19_Template, 13, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](20, NavBarComponent_div_1_div_20_Template, 8, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("@moveInOut", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.theme == ctx_r1.light);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.theme == ctx_r1.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r1.loggedIn);
        }
      }

      var moveIn = function moveIn() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "fadeInOut";
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])(name, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "s ease-in-out"))])]);
      };

      var moveInOut = function moveInOut() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "moveInOut";
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])(name, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "s ease-in-out"))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "s ease-in-out"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: 0
        }))])]);
      };

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent(apiService, router, stateService) {
          var _this13 = this;

          _classCallCheck(this, NavBarComponent);

          this.apiService = apiService;
          this.router = router;
          this.stateService = stateService; //Parameters

          this.dark = "dark-theme";
          this.light = "light-theme";
          this.theme = "light-theme";
          this.showSidebar = false;
          this.loggedIn = false;
          this.role = "";
          this.name = "";
          this.url = "user/logoutUser"; //Token Used For Logout Button

          this.user = {
            token: ""
          };

          this.toggleSidebar = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.showSidebar == false)) {
                        _context.next = 5;
                        break;
                      }

                      this.stateService.setLayout(false);
                      localStorage.setItem("nav", "false");
                      this.showSidebar = true;
                      return _context.abrupt("return");

                    case 5:
                      this.stateService.setLayout(true);
                      localStorage.setItem("nav", "true");
                      this.showSidebar = false;

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          };
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            //Get theme
            this.theme = localStorage.getItem("theme") || this.light; //Subscribe To Nav Bar Change

            this.router.events.subscribe(function (event) {
              _this14.loggedIn = _this14.apiService.isLoggedIn();

              if (!_this14.loggedIn) {
                return;
              }

              _this14.user.token = _this14.apiService.getLocalStorageItem("token");
            }); //Subscribe to User Role & Username

            this.stateService.user$.subscribe(function (user) {
              _this14.role = user.role || localStorage.getItem("role");
              _this14.name = user.name || localStorage.getItem("name");
            });
          }
        }, {
          key: "toggleTheme",
          value: function toggleTheme() {
            var theme = document.documentElement.className;

            if (theme === this.dark) {
              this.theme = this.light;
              document.documentElement.className = this.light;
              localStorage.setItem("theme", this.light);
            } else {
              this.theme = this.dark;
              document.documentElement.className = this.dark;
              localStorage.setItem("theme", this.dark);
            }
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.loggedIn = false;
            this.apiService.post(this.user, this.url).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.error(err);
            });
            localStorage.clear();
            this.router.navigate(["/login-page"]);
          }
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.??fac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]));
      };

      NavBarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        decls: 2,
        vars: 2,
        consts: [["class", "navbar navbar-expand-lg navbar-light bg-light sticky-top", 4, "ngIf"], ["class", "sidebar", 4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "sticky-top"], ["href", "#", 1, "navbar-brand", "links"], [1, "uil", "uil-browser"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [4, "ngIf"], [1, "nav-item"], [1, "d-lg-inline", "d-sm-block", "text-right"], ["routerLink", "/about-page", 1, "btn", "my-2", "my-sm-0", "mr-2", "links"], [1, "uil", "uil-info-circle"], [1, "btn", "my-2", "my-sm-0", "mr-2", "links", "sidebarBtn", 3, "click"], [1, "uil", "uil-web-section-alt"], [1, "nav-item", 3, "click"], ["class", "btn my-2 my-sm-0 mr-2 links", 4, "ngIf"], ["routerLink", "/dashboard-page", 1, "btn", "my-2", "my-sm-0", "mr-2", "links"], [1, "uil", "uil-apps"], ["class", "d-lg-inline d-sm-block text-right", 4, "ngIf"], ["routerLink", "/statistics-page", 1, "btn", "my-2", "my-sm-0", "mr-2", "links"], [1, "uil", "uil-graph-bar"], [1, "btn", "my-2", "my-sm-0", "mr-2", "links"], [1, "uil", "uil-moon"], [1, "uil", "uil-sun"], ["routerLink", "/edit-products-page", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", "mr-2"], [1, "uil", "uil-plus"], [1, "d-lg-inline", "d-sm-block", "mx-sm-auto", "text-right"], ["routerLink", "/profile-page", 1, "btn", "btn-outline-info", "my-2", "my-sm-0", "mr-2"], [1, "uil", "uil-setting"], ["routerLink", "/user-profile-page", 1, "btn", "btn-link", "my-2", "my-sm-0", "mr-2"], [2, "display", "flex", "flex-direction", "row"], [2, "width", "60px", "text-overflow", "ellipsis", "white-space", "nowrap", "overflow", "hidden"], [1, "uil", "uil-user"], [1, "btn", "btn-outline-primary", "my-2", "my-sm-0", "mr-2", 3, "click"], [1, "uil", "uil-signout"], ["routerLink", "/login-page", 1, "btn", "btn-outline-primary", "my-2", "my-sm-0", "mr-2"], ["routerLink", "/register-page", "routerLinkActive", "active", 1, "btn", "btn-outline-danger", "my-2", "my-sm-0"], [1, "sidebar"], [1, "ml-2"], [1, "mt-2"], ["href", "#", 1, "btn", "my-2", "my-sm-0", "mr-2", "links", "mainLink"], [1, "btn", "my-2", "my-sm-0", "mr-2", "links", 3, "click"], [1, "uil", "uil-window-maximize"], ["class", "btn my-2 my-sm-0 mr-2 links", 3, "click", 4, "ngIf"], ["class", "ml-2", 4, "ngIf"], ["routerLink", "/dashboard-page", "type", "submit", 1, "btn", "my-2", "my-sm-0", "mr-2", "links"], ["routerLink", "/statistics-page", "type", "submit", 1, "btn", "my-2", "my-sm-0", "mr-2", "links"], ["routerLink", "/user-profile-page", 1, "btn", "my-2", "my-sm-0", "mr-2"], ["routerLink", "/edit-products-page", 1, "btn", "my-2", "my-sm-0", "mr-2", "links"], ["routerLink", "/profile-page", 1, "btn", "my-2", "my-sm-0", "mr-2", "links"], [1, "mt-3", "ml-2"], [1, "btn", "btn-primary", "my-2", "my-sm-0", "mr-2", "noshade", 3, "click"], ["routerLink", "/register-page", "routerLinkActive", "active", 1, "btn", "btn-danger", "my-2", "my-sm-0", "pt-2", "noshade"], ["routerLink", "/login-page", 1, "btn", "btn-primary", "my-2", "my-sm-0", "mr-2", "noshade"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, NavBarComponent_nav_0_Template, 25, 6, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, NavBarComponent_div_1_Template, 21, 7, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.showSidebar);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.showSidebar);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
        styles: [".counter[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  color: #607fd3;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgb(126, 126, 126);\n}\n\n.links[_ngcontent-%COMP%] {\n  color: var(--p);\n}\n\n.a[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n@media screen and (max-width: 1000px) {\n  .sidebarBtn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20%;\n  background-color: var(--sidebar);\n  position: absolute;\n  box-shadow: var(--sidebar-shadow);\n  overflow-x: hidden;\n  white-space: nowrap;\n  z-index: 9;\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--p);\n  font-size: large;\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--shade-accent);\n}\n\n.mainLink[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n\n.noshade[_ngcontent-%COMP%]:hover {\n  color: initial !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRlciB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm5hdmJhci1icmFuZDpob3ZlciB7XG4gIGNvbG9yOiAjNjA3ZmQzO1xufVxuXG4ubmF2LWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XG59XG5cbi5saW5rcyB7XG4gIGNvbG9yOiB2YXIoLS1wKTtcbn1cblxuLmEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5zaWRlYmFyQnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8qIFNpZGVCYXIgKi9cbi5zaWRlYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaWRlYmFyLXNoYWRvdyk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgei1pbmRleDogOTtcbn1cblxuLnNpZGViYXIgYSB7XG4gIGNvbG9yOiB2YXIoLS1wKTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLnNpZGViYXIgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zaGFkZS1hY2NlbnQpO1xufVxuXG4ubWFpbkxpbmsge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLm5vc2hhZGU6aG92ZXIge1xuICBjb2xvcjogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuIl19 */"],
        data: {
          animation: [moveIn("fadeInOut-1", 0.4), moveInOut("moveInOut", 0.3)]
        }
      });
      /***/
    },

    /***/
    "v6lb":
    /*!**********************************************************!*\
      !*** ./src/app/pages/statistics/statistics.component.ts ***!
      \**********************************************************/

    /*! exports provided: StatisticsComponent */

    /***/
    function v6lb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function () {
        return StatisticsComponent;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/state.service */
      "4J96");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");

      var StatisticsComponent = /*#__PURE__*/function () {
        function StatisticsComponent(stateService) {
          _classCallCheck(this, StatisticsComponent);

          this.stateService = stateService;
          this.chartOptions = {
            responsive: true
          }; //Chart Labels

          this.labels = ["Clothes", "Household", "Medicine", "Food"]; //Chart Data Array

          this.quantity = []; //Chart Data

          this.chartData = [{
            data: this.quantity
          }]; //Chart Colors

          this.colors = [{
            backgroundColor: ["rgba(134, 174, 247, 0.8)", "rgba(101, 214, 105, 0.8)", "rgba(240, 112, 103, 0.8)", "rgba(255, 174, 74, 0.6)"]
          }];
          this.lineColors = [{
            backgroundColor: ["rgba(134, 174, 247, 0.8)", "rgba(101, 214, 105, 0.8)", "rgba(240, 112, 103, 0.8)", "rgba(255, 174, 74, 0.6)"]
          }];
          this.total = 0;
          this.allProducts = [{
            id: 1,
            name: "Example",
            category: "Food",
            quantity: 100
          }, {
            id: 34,
            name: "Another Example",
            category: "Clothes",
            quantity: 90
          }, {
            id: 20,
            name: "Another Example",
            category: "Medicine",
            quantity: 110
          }, {
            id: 10,
            name: "Another Example",
            category: "Household",
            quantity: 120
          }];
        }

        _createClass(StatisticsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.stateService.allProducts$.subscribe(function (products) {
                _this15.allProducts = products;

                if (!_this15.allProducts.length) {
                  _this15.allProducts = JSON.parse(localStorage.getItem("products"));
                }
              });
              this.getQuantities(this.allProducts);
            }

            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.stateService.allProducts$.subscribe(function (products) {
                if (!products.length) {
                  return;
                }

                _this15.allProducts = products;
              });
              this.getQuantities(this.allProducts);
            }

            this.getTotal();
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            this.total = this.quantity.reduce(function (a, b) {
              return a + b;
            });
          } //Get Quantities of Categories for Charts onInit

        }, {
          key: "getQuantities",
          value: function getQuantities(allProducts) {
            var household = 0;
            var clothes = 0;
            var food = 0;
            var medicine = 0;

            if (!allProducts.length) {
              return;
            }

            for (var i = 0; i < allProducts.length; i++) {
              //Add Quanitites to Categories Array
              if (allProducts[i]["category"] == "Household") {
                household = household + Number(allProducts[i]["quantity"]);
              }

              if (allProducts[i]["category"] == "Clothes") {
                clothes = clothes + Number(allProducts[i]["quantity"]);
              }

              if (allProducts[i]["category"] == "Medicine") {
                medicine = medicine + Number(allProducts[i]["quantity"]);
              }

              if (allProducts[i]["category"] == "Food") {
                food = food + Number(allProducts[i]["quantity"]);
              }
            }

            this.quantity.push(clothes);
            this.quantity.push(household);
            this.quantity.push(medicine);
            this.quantity.push(food);
          }
        }]);

        return StatisticsComponent;
      }();

      StatisticsComponent.??fac = function StatisticsComponent_Factory(t) {
        return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]));
      };

      StatisticsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: StatisticsComponent,
        selectors: [["app-statistics"]],
        decls: 50,
        vars: 20,
        consts: [[1, "hero"], [1, "page-container"], [1, "col-xl-9", "mx-auto", "col-lg-11", "ml-lg-5", "ml-sm-2", "mt-3"], [1, "d-inline"], [1, "uil", "uil-horizontal-align-left", 2, "color", "rgba(134, 174, 247, 0.8)"], [1, "uil", "uil-horizontal-align-left", 2, "color", "rgba(101, 214, 105, 0.8)"], [1, "uil", "uil-horizontal-align-left", 2, "color", "rgba(240, 112, 103, 0.8)"], [1, "uil", "uil-horizontal-align-left", 2, "color", "rgba(255, 174, 74, 0.6)"], [1, "row"], [1, "col"], [1, "col-xl-12"], ["baseChart", "", 3, "chartType", "datasets", "labels", "options", "legend", "colors"], [1, "text-center"], [1, "ml-lg-5", "ml-sm-2", "mt-3"], [1, "col-xl-6"]],
        template: function StatisticsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Statistics");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " Clothes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, " Household ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, " Medicine ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, " Food ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "canvas", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "canvas", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "canvas", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Quantity of Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("chartType", "horizontalBar")("datasets", ctx.chartData)("labels", ctx.labels)("options", ctx.chartOptions)("legend", false)("colors", ctx.colors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("chartType", "line")("datasets", ctx.chartData)("labels", ctx.labels)("options", ctx.chartOptions)("legend", false)("colors", ctx.lineColors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Total Products (", ctx.quantity.length, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("chartType", "doughnut")("datasets", ctx.chartData)("labels", ctx.labels)("options", ctx.chartOptions)("legend", false)("colors", ctx.lineColors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Total Amount (", ctx.total, ")");
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/guards/auth-guard.guard */
      "UnyZ");
      /* harmony import */


      var _pages_products_page_edit_products_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/products-page/edit-products-page.component */
      "xtmM");
      /* harmony import */


      var _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/dashboard-page/dashboard-page.component */
      "MX8e");
      /* harmony import */


      var _pages_home_page_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/home-page/home.component */
      "YeYy");
      /* harmony import */


      var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/login-page/login-page.component */
      "6V8c");
      /* harmony import */


      var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/profile-page/profile-page.component */
      "A5xL");
      /* harmony import */


      var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/register-page/register-page.component */
      "lmRq");
      /* harmony import */


      var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/statistics/statistics.component */
      "v6lb");
      /* harmony import */


      var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/about-page/about-page.component */
      "4AUu");
      /* harmony import */


      var _pages_user_profile_page_user_profile_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/user-profile-page/user-profile-page.component */
      "jtbL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); //Pages:
      //Edit Products Page
      //Dashboard Page
      //Home Page
      //Login Page
      //Profile Page
      //Register Page
      //Statistics Page
      //About Page
      //User Profile Page


      var routes = [{
        path: "",
        component: _pages_home_page_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }, {
        path: "dashboard-page",
        component: _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__["DashboardPageComponent"],
        canActivate: [_core_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardGuard"]]
      }, {
        path: "edit-products-page",
        component: _pages_products_page_edit_products_page_component__WEBPACK_IMPORTED_MODULE_2__["EditProductsPageComponent"],
        canActivate: [_core_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardGuard"]]
      }, {
        path: "home-page",
        component: _pages_home_page_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }, {
        path: "login-page",
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"]
      }, {
        path: "profile-page",
        component: _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePageComponent"],
        canActivate: [_core_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardGuard"]]
      }, {
        path: "register-page",
        component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPageComponent"]
      }, {
        path: "about-page",
        component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"]
      }, {
        path: "statistics-page",
        component: _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"],
        canActivate: [_core_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardGuard"]]
      }, {
        path: "user-profile-page",
        component: _pages_user_profile_page_user_profile_page_component__WEBPACK_IMPORTED_MODULE_10__["UserProfilePageComponent"],
        canActivate: [_core_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "xtmM":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/products-page/edit-products-page.component.ts ***!
      \*********************************************************************/

    /*! exports provided: EditProductsPageComponent */

    /***/
    function xtmM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProductsPageComponent", function () {
        return EditProductsPageComponent;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/api.service */
      "qc5V");
      /* harmony import */


      var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/state.service */
      "4J96");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = ["alert"];

      function EditProductsPageComponent_small_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please Enter The Product's Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditProductsPageComponent_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var category_r9 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngValue", category_r9 === ctx_r4.defaultStr ? null : category_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", category_r9, " ");
        }
      }

      function EditProductsPageComponent_small_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please Select A Product Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditProductsPageComponent_small_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Please Enter A Number From 1 - 100 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      var EditProductsPageComponent = /*#__PURE__*/function () {
        function EditProductsPageComponent(apiService, stateService) {
          _classCallCheck(this, EditProductsPageComponent);

          this.apiService = apiService;
          this.stateService = stateService;
          this.url = "product/addProduct";
          this.successMessage = "";
          this.errorMessage = "";
          this.categories = ["Food", "Clothes", "Medicine", "Household"];
          this.defaultStr = "Select A Category";
          this.product = {
            name: "",
            category: null,
            quantity: null,
            token: ""
          };
          this.allProducts = [];
        }

        _createClass(EditProductsPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.stateService.allProducts$.subscribe(function (products) {
                if (products.length == 0) {
                  _this16.allProducts = JSON.parse(localStorage.getItem("products"));
                } else {
                  _this16.allProducts = products;
                }
              });
              console.log(JSON.stringify(this.allProducts));
            }

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.product.token = this.apiService.getLocalStorageItem("token");
              this.stateService.allProducts$.subscribe(function (products) {
                _this16.allProducts = products;

                if (!_this16.allProducts.length) {
                  _this16.allProducts = JSON.parse(localStorage.getItem("products"));
                }
              });
            }
          }
        }, {
          key: "closeAlert",
          value: function closeAlert() {
            this.alert.nativeElement.classList.remove("show");
            this.alert.nativeElement.classList.remove("d-block");
            this.alert.nativeElement.classList.add("d-none");
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this17 = this;

            //Fake Environment
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              var oldProduct = this.product;
              var newProduct = {
                id: 14,
                name: oldProduct.name,
                category: oldProduct.category,
                quantity: oldProduct.quantity
              };
              this.allProducts.unshift(newProduct);
              this.stateService.allProducts$.next(this.allProducts);
              localStorage.setItem("products", JSON.stringify(this.allProducts));
              this.alert.nativeElement.classList.add("show");
              this.alert.nativeElement.classList.add("d-block");
            }

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              this.apiService.post(this.product, this.url).subscribe(function (res) {
                _this17.errorMessage = "";
                _this17.successMessage = "";

                if (!res.Success) {
                  _this17.errorMessage = res.Message;
                  return;
                }

                _this17.successMessage = res.Message;

                _this17.allProducts.unshift(res.Data[0]);

                _this17.stateService.allProducts$.next(_this17.allProducts);

                localStorage.setItem("products", JSON.stringify(_this17.allProducts));

                _this17.alert.nativeElement.classList.add("show");

                _this17.alert.nativeElement.classList.add("d-block");
              }, function (err) {
                console.log(err);
                _this17.errorMessage = err["statusText"];
              });
            }
          }
        }]);

        return EditProductsPageComponent;
      }();

      EditProductsPageComponent.??fac = function EditProductsPageComponent_Factory(t) {
        return new (t || EditProductsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]));
      };

      EditProductsPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: EditProductsPageComponent,
        selectors: [["app-edit-products-page"]],
        viewQuery: function EditProductsPageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.alert = _t.first);
          }
        },
        decls: 54,
        vars: 11,
        consts: [[1, "hero"], [1, "page-container"], [1, "col-lg-11", "ml-lg-5", "ml-sm-2", "mt-3"], [1, "col-12"], [2, "color", "rgb(20, 170, 20)"], [1, "col-12", "pl-0"], [3, "ngSubmit"], ["addProductForm", "ngForm"], [1, "form-group", "col-lg-4", "col-sm-12"], ["for", "name", "hidden", ""], ["type", "text", "id", "name", "name", "name", "placeholder", "Product Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["productName", "ngModel"], [4, "ngIf"], ["name", "categories", "id", "categories", "required", "", 1, "form-control", "mt-3", 3, "ngModel", "ngModelChange"], ["category", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "quantity", "hidden", ""], ["type", "number", "id", "quantity", "name", "quantity", "placeholder", "Type Quantity - Max 100", "min", "1", "max", "100", "required", "", 1, "form-control", "mt-3", 3, "ngModel", "ngModelChange"], ["quantity", "ngModel"], ["type", "submit", "id", "addProduct", 1, "btn", "btn-primary", "mt-4", 3, "disabled"], [1, "uil", "uil-plus"], [1, "col-lg-4", "col-sm-12"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", "d-none"], ["alert", ""], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["routerLink", "/dashboard-page", 1, ""], [1, "pl-3"], [2, "color", "rgb(255, 81, 81)"], [3, "ngValue"]],
        template: function EditProductsPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, " Add a product and see both ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "statistics graph update!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Add Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "form", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function EditProductsPageComponent_Template_form_ngSubmit_18_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r10);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](19);

              ctx.onSubmit();
              return _r0.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Fill in Name, Category and Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditProductsPageComponent_Template_input_ngModelChange_27_listener($event) {
              return ctx.product.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](29, EditProductsPageComponent_small_29_Template, 2, 0, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "select", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditProductsPageComponent_Template_select_ngModelChange_30_listener($event) {
              return ctx.product.category = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, EditProductsPageComponent_option_32_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, EditProductsPageComponent_small_33_Template, 2, 0, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditProductsPageComponent_Template_input_ngModelChange_35_listener($event) {
              return ctx.product.quantity = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](37, EditProductsPageComponent_small_37_Template, 3, 0, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " Add Product ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](40, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditProductsPageComponent_Template_button_click_44_listener() {
              return ctx.closeAlert();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, " Product Has Been Added ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "Here");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](19);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](28);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !_r1.pristine && !_r1.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.category);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](9, _c1, ctx.defaultStr).concat(ctx.categories));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !_r3.pristine && !_r3.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.product.quantity);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !_r3.pristine && !_r3.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.errorMessage);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_z"]],
        styles: [".dashboardLink[_ngcontent-%COMP%] {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZHVjdHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImVkaXQtcHJvZHVjdHMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZExpbmsge1xuICBjb2xvcjogYmx1ZTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      } //Theme


      var theme = localStorage.getItem("theme");
      document.documentElement.className = theme || "light-theme";

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map