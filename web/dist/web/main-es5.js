function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isAuthen\">\r\n  <app-header></app-header>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<div *ngIf=\"isAuthen\">\r\n  <app-footer></app-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/download-app/download-app.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/download-app/download-app.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDownloadAppDownloadAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div *ngFor=\"let fileName of filesName && filesName.files\">\r\n    <a (click)=\"onClickDownloadFileApk(fileName)\" href=\"#\">{{fileName}}</a>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/erorrs/notfound/notfound.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/erorrs/notfound/notfound.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsErorrsNotfoundNotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>notfound works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"page-footer font-small blue\">\r\n  <div class=\"footer-copyright text-center py-3\">© {{year}} Copyright:\r\n    <a href=\"#\">OTP-System</a>\r\n  </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\">OTP System</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\r\n    aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n    <div class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <a class=\"nav-item nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/messages', 'OTP']\">OPT</a>\r\n      <a class=\"nav-item nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/messages', 'MONEY']\">MONEY</a>\r\n      <a class=\"nav-item nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/messages', '']\">SMS</a>\r\n      <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/setting\">SETTING</a>\r\n      <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/download-app\">DOWNLOAD APP</a>\r\n    </div>\r\n    <div class=\"navbar-nav my-2 my-lg-0 user-info\">\r\n      <a class=\"nav-item nav-link\">{{user.username}}</a>\r\n      <a class=\"nav-item nav-link\" (click)=\"onClickLogout()\">Logout</a>\r\n    </div>\r\n  </div>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='login-form'>\r\n  <form (ngSubmit)='onSubmit()'>\r\n    <h2 class='text-center'>Log in</h2>\r\n    <div class='form-group'>\r\n      <input type='text' [(ngModel)]='username' name='username' class='form-control ng-valid ng-touched ng-dirty' placeholder='Username'\r\n        required='required' autocomplete='off'>\r\n    </div>\r\n    <div class='form-group'>\r\n      <input type='password' [(ngModel)]='password' name='password' class='form-control ng-valid ng-touched ng-dirty' placeholder='Password'\r\n        required='required' autocomplete='off'>\r\n    </div>\r\n    <div class='form-group'>\r\n      <button type='submit' class='btn btn-primary btn-block'>Log in</button>\r\n    </div>\r\n  </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMessagesMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div *ngFor=\"let item of messages\" class=\"p-1\">\r\n    <div class=\"list-group-item list-group-item-action\">\r\n      <div class=\"d-flex w-100 justify-content-between\">\r\n        <h5 class=\"mb-1\">{{item.bankname}} {{item.otp || ''}} {{item.money || ''}}</h5>\r\n        <small>{{item.createdAt | timeAgo}}</small>\r\n      </div>\r\n      <p class=\"mb-1\">{{item.messages}}</p>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/setting/setting.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/setting/setting.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSettingSettingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  {{user.username}}\r\n  <form (ngSubmit)='onSubmitChangePassword()'>\r\n    <div class=\"form-group\">\r\n      <label for=\"oldpassword\">Old Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]='oldpassword' name='oldpassword' id=\"oldpassword\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"newpassword\">New Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]='newpassword' name='newpassword' id=\"newpassword\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"confirmpassword\">Confirm Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]='confirmpassword' name='confirmpassword' id=\"confirmpassword\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/authen/authen.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/templates/authen/authen.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTemplatesAuthenAuthenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>authen works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/general/general.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/templates/general/general.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTemplatesGeneralGeneralComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>general works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/authen.service */
    "./src/app/service/authen.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authen, router) {
        _classCallCheck(this, AppComponent);

        this.authen = authen;
        this.router = router;
        this.title = 'web';
        this.isAuthen = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.authen.checkToken();

                  case 2:
                    this.isAuthen = _context.sent;
                    this.router.navigate(['login']);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.isAuthen = this.authen.isAuthen();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _service_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _routes_routes_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./routes/routes.root */
    "./src/app/routes/routes.root.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! time-ago-pipe */
    "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/messages/messages.component */
    "./src/app/components/messages/messages.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_erorrs_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/erorrs/notfound/notfound.component */
    "./src/app/components/erorrs/notfound/notfound.component.ts");
    /* harmony import */


    var _routes_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./routes/can-activate-auth.guard */
    "./src/app/routes/can-activate-auth.guard.ts");
    /* harmony import */


    var _service_authen_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./service/authen.service */
    "./src/app/service/authen.service.ts");
    /* harmony import */


    var _templates_authen_authen_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./templates/authen/authen.component */
    "./src/app/templates/authen/authen.component.ts");
    /* harmony import */


    var _templates_general_general_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./templates/general/general.component */
    "./src/app/templates/general/general.component.ts");
    /* harmony import */


    var _service_messages_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./service/messages.service */
    "./src/app/service/messages.service.ts");
    /* harmony import */


    var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/setting/setting.component */
    "./src/app/components/setting/setting.component.ts");
    /* harmony import */


    var _components_download_app_download_app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/download-app/download-app.component */
    "./src/app/components/download-app/download-app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _components_erorrs_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"], _templates_authen_authen_component__WEBPACK_IMPORTED_MODULE_16__["AuthenComponent"], _templates_general_general_component__WEBPACK_IMPORTED_MODULE_17__["GeneralComponent"], time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"], _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_19__["SettingComponent"], _components_download_app_download_app_component__WEBPACK_IMPORTED_MODULE_20__["DownloadAppComponent"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes_routes_root__WEBPACK_IMPORTED_MODULE_4__["appRoutes"])],
      providers: [_routes_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_14__["CanActivateAuthGuard"], _service_messages_service__WEBPACK_IMPORTED_MODULE_18__["MessagesService"], _service_authen_service__WEBPACK_IMPORTED_MODULE_15__["AuthenService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/download-app/download-app.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/download-app/download-app.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DownloadAppComponent */

  /***/
  function srcAppComponentsDownloadAppDownloadAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadAppComponent", function () {
      return DownloadAppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_files_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/files-app.service */
    "./src/app/service/files-app.service.ts");

    var DownloadAppComponent =
    /*#__PURE__*/
    function () {
      function DownloadAppComponent(filesNameService) {
        _classCallCheck(this, DownloadAppComponent);

        this.filesNameService = filesNameService;
      }

      _createClass(DownloadAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.filesNameService.getFilesName();

                  case 2:
                    this.filesName = _context2.sent;

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onClickDownloadFileApk",
        value: function onClickDownloadFileApk(fileName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var blob, url;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.filesNameService.getFilesNameDownload(fileName);

                  case 2:
                    this.file = _context3.sent;
                    blob = new Blob([this.file], {
                      type: 'text/apk'
                    });
                    url = window.URL.createObjectURL(blob);
                    window.open(url);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return DownloadAppComponent;
    }();

    DownloadAppComponent.ctorParameters = function () {
      return [{
        type: src_app_service_files_app_service__WEBPACK_IMPORTED_MODULE_2__["FilesAppService"]
      }];
    };

    DownloadAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-download-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./download-app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/download-app/download-app.component.html")).default
    })], DownloadAppComponent);
    /***/
  },

  /***/
  "./src/app/components/erorrs/notfound/notfound.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/erorrs/notfound/notfound.component.ts ***!
    \******************************************************************/

  /*! exports provided: NotfoundComponent */

  /***/
  function srcAppComponentsErorrsNotfoundNotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
      return NotfoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotfoundComponent =
    /*#__PURE__*/
    function () {
      function NotfoundComponent() {
        _classCallCheck(this, NotfoundComponent);
      }

      _createClass(NotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotfoundComponent;
    }();

    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notfound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/erorrs/notfound/notfound.component.html")).default
    })], NotfoundComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var d = new Date();
          this.year = d.getFullYear();
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_service_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/authen.service */
    "./src/app/service/authen.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(activatedRouter, authen, router) {
        _classCallCheck(this, HeaderComponent);

        this.activatedRouter = activatedRouter;
        this.authen = authen;
        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.activatedRouter.params.subscribe(function (params) {
            _this.param = params['type'];
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.user = this.authen.getUser();
        }
      }, {
        key: "onClickLogout",
        value: function onClickLogout() {
          this.authen.logout();
          this.router.navigate(['login']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_service_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/authen.service */
    "./src/app/service/authen.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authen, router) {
        _classCallCheck(this, LoginComponent);

        this.authen = authen;
        this.router = router;
        this.username = '';
        this.password = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authen.isAuthen()) {
            this.router.navigate(['messages', '']);
          } else {
            this.router.navigate(['login']);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var res;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.authen.login(this.username, this.password);

                  case 2:
                    res = _context4.sent;

                    if (res.success) {
                      this.authen.setAuthen(res.token);
                      this.authen.setUser({
                        id: res.id,
                        username: res.username
                      });
                      this.router.navigate(['messages', '']);
                    } else {
                      console.log(res.error);
                    }

                    return _context4.abrupt("return", false);

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_service_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/messages/messages.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/messages/messages.component.ts ***!
    \***********************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppComponentsMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_service_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/messages.service */
    "./src/app/service/messages.service.ts");

    var MessagesComponent =
    /*#__PURE__*/
    function () {
      function MessagesComponent(router, messagesService) {
        _classCallCheck(this, MessagesComponent);

        this.router = router;
        this.messagesService = messagesService;
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.sub = this.router.params.subscribe(function (params) {
            _this2.param = params['type'];

            _this2.ngCallService(); // reset and set based on new parameter this time

          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "ngCallService",
        value: function ngCallService() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.messagesService.getMessages(this.param);

                  case 2:
                    this.messages = _context5.sent;

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_service_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]
      }];
    };

    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html")).default
    })], MessagesComponent);
    /***/
  },

  /***/
  "./src/app/components/setting/setting.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/setting/setting.component.ts ***!
    \*********************************************************/

  /*! exports provided: SettingComponent */

  /***/
  function srcAppComponentsSettingSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingComponent", function () {
      return SettingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/authen.service */
    "./src/app/service/authen.service.ts");

    var SettingComponent =
    /*#__PURE__*/
    function () {
      function SettingComponent(authen) {
        _classCallCheck(this, SettingComponent);

        this.authen = authen;
      }

      _createClass(SettingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authen.getUser();
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.user = this.authen.getUser();
        }
      }, {
        key: "onSubmitChangePassword",
        value: function onSubmitChangePassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var res;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(this.confirmpassword === this.newpassword)) {
                      _context6.next = 6;
                      break;
                    }

                    _context6.next = 3;
                    return this.authen.changePassword(this.oldpassword, this.confirmpassword);

                  case 3:
                    res = _context6.sent;
                    _context6.next = 7;
                    break;

                  case 6:
                    console.log('password not match');

                  case 7:
                    return _context6.abrupt("return", false);

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return SettingComponent;
    }();

    SettingComponent.ctorParameters = function () {
      return [{
        type: src_app_service_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"]
      }];
    };

    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-setting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./setting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/setting/setting.component.html")).default
    })], SettingComponent);
    /***/
  },

  /***/
  "./src/app/routes/can-activate-auth.guard.ts":
  /*!***************************************************!*\
    !*** ./src/app/routes/can-activate-auth.guard.ts ***!
    \***************************************************/

  /*! exports provided: CanActivateAuthGuard */

  /***/
  function srcAppRoutesCanActivateAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanActivateAuthGuard", function () {
      return CanActivateAuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/authen.service */
    "./src/app/service/authen.service.ts");

    var CanActivateAuthGuard =
    /*#__PURE__*/
    function () {
      function CanActivateAuthGuard(service, router) {
        _classCallCheck(this, CanActivateAuthGuard);

        this.service = service;
        this.router = router;
      }

      _createClass(CanActivateAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var isAuthen = this.service.isAuthen();

          if (!isAuthen) {
            this.router.navigate(['NotFound']);
          }

          return isAuthen;
        }
      }]);

      return CanActivateAuthGuard;
    }();

    CanActivateAuthGuard.ctorParameters = function () {
      return [{
        type: _service_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CanActivateAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CanActivateAuthGuard);
    /***/
  },

  /***/
  "./src/app/routes/routes.root.ts":
  /*!***************************************!*\
    !*** ./src/app/routes/routes.root.ts ***!
    \***************************************/

  /*! exports provided: appRoutes */

  /***/
  function srcAppRoutesRoutesRootTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_erorrs_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/erorrs/notfound/notfound.component */
    "./src/app/components/erorrs/notfound/notfound.component.ts");
    /* harmony import */


    var _can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./can-activate-auth.guard */
    "./src/app/routes/can-activate-auth.guard.ts");
    /* harmony import */


    var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/messages/messages.component */
    "./src/app/components/messages/messages.component.ts");
    /* harmony import */


    var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/setting/setting.component */
    "./src/app/components/setting/setting.component.ts");
    /* harmony import */


    var _components_download_app_download_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/download-app/download-app.component */
    "./src/app/components/download-app/download-app.component.ts");

    var appRoutes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
      pathMatch: 'full'
    }, {
      path: 'messages',
      component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"],
      canActivate: [_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_3__["CanActivateAuthGuard"]],
      pathMatch: 'full'
    }, {
      path: 'messages/:type',
      component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"],
      canActivate: [_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_3__["CanActivateAuthGuard"]],
      pathMatch: 'full'
    }, {
      path: 'setting',
      component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"],
      canActivate: [_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_3__["CanActivateAuthGuard"]],
      pathMatch: 'full'
    }, {
      path: 'download-app',
      component: _components_download_app_download_app_component__WEBPACK_IMPORTED_MODULE_6__["DownloadAppComponent"],
      canActivate: [_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_3__["CanActivateAuthGuard"]],
      pathMatch: 'full'
    }, {
      path: 'NotFound',
      component: _components_erorrs_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundComponent"],
      pathMatch: 'full'
    }, {
      path: '*path',
      redirectTo: 'NotFound'
    }, {
      path: '**',
      redirectTo: 'NotFound'
    }];
    /***/
  },

  /***/
  "./src/app/service/authen.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/authen.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenService */

  /***/
  function srcAppServiceAuthenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenService", function () {
      return AuthenService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AuthenService =
    /*#__PURE__*/
    function () {
      function AuthenService(http) {
        _classCallCheck(this, AuthenService);

        this.http = http;
        this.authorization = 'authorization';
        this.user = {};
      }

      _createClass(AuthenService, [{
        key: "setAuthen",
        value: function setAuthen(token) {
          localStorage.setItem(this.authorization, token);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.user;
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          this.user = user;
        }
      }, {
        key: "getAuthen",
        value: function getAuthen() {
          return localStorage.getItem(this.authorization);
        }
      }, {
        key: "isAuthen",
        value: function isAuthen() {
          var currentState = localStorage.getItem(this.authorization);

          if (currentState) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "changePassword",
        value: function changePassword(oldPassword, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var headers, checkToken;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                      'Content-Type': 'application/json',
                      'authorization': "Bearer ".concat(this.getAuthen())
                    });
                    _context7.next = 3;
                    return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/setting_account"), {
                      password: oldPassword,
                      passwordConfirm: password
                    }, {
                      headers: headers
                    }).toPromise().then(function (res) {
                      return res;
                    });

                  case 3:
                    checkToken = _context7.sent;

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "checkToken",
        value: function checkToken() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var headers, checkToken;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                      'Content-Type': 'application/json',
                      'authorization': "Bearer ".concat(this.getAuthen())
                    });
                    _context8.next = 3;
                    return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/checkToken"), {
                      headers: headers
                    }).toPromise().then(function (res) {
                      return res;
                    });

                  case 3:
                    checkToken = _context8.sent;

                    if (!checkToken.id) {
                      _context8.next = 9;
                      break;
                    }

                    this.setUser(checkToken);
                    return _context8.abrupt("return", true);

                  case 9:
                    this.logout();
                    return _context8.abrupt("return", false);

                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "login",
        value: function login(username, password) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/login"), {
            username: username,
            password: password
          }).toPromise().then(function (res) {
            return res;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem(this.authorization);
        }
      }]);

      return AuthenService;
    }();

    AuthenService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenService);
    /***/
  },

  /***/
  "./src/app/service/files-app.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/files-app.service.ts ***!
    \**********************************************/

  /*! exports provided: FilesAppService */

  /***/
  function srcAppServiceFilesAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesAppService", function () {
      return FilesAppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authen.service */
    "./src/app/service/authen.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);

    var FilesAppService =
    /*#__PURE__*/
    function () {
      function FilesAppService(http, authen) {
        _classCallCheck(this, FilesAppService);

        this.http = http;
        this.authen = authen;
      }

      _createClass(FilesAppService, [{
        key: "getFilesName",
        value: function getFilesName() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'authorization': "Bearer ".concat(this.authen.getAuthen())
          });
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/files-apk"), {
            headers: headers
          }).toPromise().then(function (res) {
            return res;
          });
        }
      }, {
        key: "getFilesNameDownload",
        value: function getFilesNameDownload(fileName) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'authorization': "Bearer ".concat(this.authen.getAuthen())
          });
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/files-apk/").concat(fileName), {
            headers: headers,
            responseType: "blob"
          }).toPromise().then(function (blob) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, fileName);
          }).catch(function (err) {
            return console.error("download error = ", err);
          });
        }
      }]);

      return FilesAppService;
    }();

    FilesAppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]
      }];
    };

    FilesAppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FilesAppService);
    /***/
  },

  /***/
  "./src/app/service/messages.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/service/messages.service.ts ***!
    \*********************************************/

  /*! exports provided: MessagesService */

  /***/
  function srcAppServiceMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
      return MessagesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _authen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authen.service */
    "./src/app/service/authen.service.ts");

    var MessagesService =
    /*#__PURE__*/
    function () {
      function MessagesService(http, authen) {
        _classCallCheck(this, MessagesService);

        this.http = http;
        this.authen = authen;
      }

      _createClass(MessagesService, [{
        key: "getMessages",
        value: function getMessages(type) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'authorization': "Bearer ".concat(this.authen.getAuthen())
          });
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('type', type);
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/messages"), {
            headers: headers,
            params: params
          }).toPromise().then(function (res) {
            return res;
          });
        }
      }]);

      return MessagesService;
    }();

    MessagesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"]
      }];
    };

    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessagesService);
    /***/
  },

  /***/
  "./src/app/templates/authen/authen.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/templates/authen/authen.component.ts ***!
    \******************************************************/

  /*! exports provided: AuthenComponent */

  /***/
  function srcAppTemplatesAuthenAuthenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenComponent", function () {
      return AuthenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthenComponent =
    /*#__PURE__*/
    function () {
      function AuthenComponent() {
        _classCallCheck(this, AuthenComponent);
      }

      _createClass(AuthenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthenComponent;
    }();

    AuthenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/authen/authen.component.html")).default
    })], AuthenComponent);
    /***/
  },

  /***/
  "./src/app/templates/general/general.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/templates/general/general.component.ts ***!
    \********************************************************/

  /*! exports provided: GeneralComponent */

  /***/
  function srcAppTemplatesGeneralGeneralComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralComponent", function () {
      return GeneralComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GeneralComponent =
    /*#__PURE__*/
    function () {
      function GeneralComponent() {
        _classCallCheck(this, GeneralComponent);
      }

      _createClass(GeneralComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GeneralComponent;
    }();

    GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-general',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/general/general.component.html")).default
    })], GeneralComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      // apiUrl: 'http://127.0.0.1:5000/api'
      apiUrl: 'http://157.230.243.171/api'
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\banz_\Documents\work_Game\OTPSystem\web\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map