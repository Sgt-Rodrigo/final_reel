"use strict";
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["subscribe_form"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/views/subscribe_form/subscribe_form.js":
/*!****************************************************!*\
  !*** ./src/views/subscribe_form/subscribe_form.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reset.scss */ "./src/reset.scss");
/* harmony import */ var _sass_subscribe_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/subscribe_form.scss */ "./src/views/subscribe_form/sass/subscribe_form.scss");



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reset.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reset.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  position: relative;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role=list],
ol[role=list] {
  list-style: none;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  min-height: 100svh;
  text-rendering: optimizeSpeed;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`, "",{"version":3,"sources":["webpack://./src/reset.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;;;;;;;;;;;;EAYE,SAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,UAAA;EACA,SAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,iBAAA;EACA,kBAAA;EACA,6BAAA;AACF;;AAEA;EACE,8BAAA;AACF;;AAEA;;EAEE,eAAA;EACA,cAAA;AACF;;AAEA;;;;EAIE,aAAA;AACF;;AAEA;EACE;IACE,qBAAA;EACF;EAEA;;;IAGE,qCAAA;IACA,uCAAA;IACA,sCAAA;IACA,gCAAA;EAAF;AACF","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n}\r\n\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\nul[role=\"list\"],\r\nol[role=\"list\"] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nhtml:focus-within {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  min-height: 100svh;\r\n  text-rendering: optimizeSpeed;\r\n}\r\n\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n    scroll-behavior: auto;\r\n  }\r\n\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/subscribe_form/sass/subscribe_form.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/subscribe_form/sass/subscribe_form.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.limelight-bg {
  font-family: "Limelight", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 2.5rem;
}
@media (min-width: 500px) {
  .limelight-bg {
    font-size: 7rem;
  }
}
@media (min-width: 1000px) {
  .limelight-bg {
    font-size: 10rem;
  }
}

.limelight-sm {
  font-family: "Limelight", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5rem;
}
@media (min-width: 500px) {
  .limelight-sm {
    font-size: 4rem;
  }
}

.roboto-mono-regular {
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-style: normal;
  font-size: 1.5rem;
}

/*!
 * Bootstrap  v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root,
[data-bs-theme=light] {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;
  --bs-primary-text-emphasis: #052c65;
  --bs-secondary-text-emphasis: #2b2f32;
  --bs-success-text-emphasis: #0a3622;
  --bs-info-text-emphasis: #055160;
  --bs-warning-text-emphasis: #664d03;
  --bs-danger-text-emphasis: #58151c;
  --bs-light-text-emphasis: #495057;
  --bs-dark-text-emphasis: #495057;
  --bs-primary-bg-subtle: #cfe2ff;
  --bs-secondary-bg-subtle: #e2e3e5;
  --bs-success-bg-subtle: #d1e7dd;
  --bs-info-bg-subtle: #cff4fc;
  --bs-warning-bg-subtle: #fff3cd;
  --bs-danger-bg-subtle: #f8d7da;
  --bs-light-bg-subtle: #fcfcfd;
  --bs-dark-bg-subtle: #ced4da;
  --bs-primary-border-subtle: #9ec5fe;
  --bs-secondary-border-subtle: #c4c8cb;
  --bs-success-border-subtle: #a3cfbb;
  --bs-info-border-subtle: #9eeaf9;
  --bs-warning-border-subtle: #ffe69c;
  --bs-danger-border-subtle: #f1aeb5;
  --bs-light-border-subtle: #e9ecef;
  --bs-dark-border-subtle: #adb5bd;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-emphasis-color: #000;
  --bs-emphasis-color-rgb: 0, 0, 0;
  --bs-secondary-color: rgba(33, 37, 41, 0.75);
  --bs-secondary-color-rgb: 33, 37, 41;
  --bs-secondary-bg: #e9ecef;
  --bs-secondary-bg-rgb: 233, 236, 239;
  --bs-tertiary-color: rgba(33, 37, 41, 0.5);
  --bs-tertiary-color-rgb: 33, 37, 41;
  --bs-tertiary-bg: #f8f9fa;
  --bs-tertiary-bg-rgb: 248, 249, 250;
  --bs-heading-color: inherit;
  --bs-link-color: #0d6efd;
  --bs-link-color-rgb: 13, 110, 253;
  --bs-link-decoration: underline;
  --bs-link-hover-color: #0a58ca;
  --bs-link-hover-color-rgb: 10, 88, 202;
  --bs-code-color: #d63384;
  --bs-highlight-color: #212529;
  --bs-highlight-bg: #fff3cd;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-xxl: 2rem;
  --bs-border-radius-2xl: var(--bs-border-radius-xxl);
  --bs-border-radius-pill: 50rem;
  --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-focus-ring-width: 0.25rem;
  --bs-focus-ring-opacity: 0.25;
  --bs-focus-ring-color: rgba(13, 110, 253, 0.25);
  --bs-form-valid-color: #198754;
  --bs-form-valid-border-color: #198754;
  --bs-form-invalid-color: #dc3545;
  --bs-form-invalid-border-color: #dc3545;
}

[data-bs-theme=dark] {
  color-scheme: dark;
  --bs-body-color: #dee2e6;
  --bs-body-color-rgb: 222, 226, 230;
  --bs-body-bg: #212529;
  --bs-body-bg-rgb: 33, 37, 41;
  --bs-emphasis-color: #fff;
  --bs-emphasis-color-rgb: 255, 255, 255;
  --bs-secondary-color: rgba(222, 226, 230, 0.75);
  --bs-secondary-color-rgb: 222, 226, 230;
  --bs-secondary-bg: #343a40;
  --bs-secondary-bg-rgb: 52, 58, 64;
  --bs-tertiary-color: rgba(222, 226, 230, 0.5);
  --bs-tertiary-color-rgb: 222, 226, 230;
  --bs-tertiary-bg: #2b3035;
  --bs-tertiary-bg-rgb: 43, 48, 53;
  --bs-primary-text-emphasis: #6ea8fe;
  --bs-secondary-text-emphasis: #a7acb1;
  --bs-success-text-emphasis: #75b798;
  --bs-info-text-emphasis: #6edff6;
  --bs-warning-text-emphasis: #ffda6a;
  --bs-danger-text-emphasis: #ea868f;
  --bs-light-text-emphasis: #f8f9fa;
  --bs-dark-text-emphasis: #dee2e6;
  --bs-primary-bg-subtle: #031633;
  --bs-secondary-bg-subtle: #161719;
  --bs-success-bg-subtle: #051b11;
  --bs-info-bg-subtle: #032830;
  --bs-warning-bg-subtle: #332701;
  --bs-danger-bg-subtle: #2c0b0e;
  --bs-light-bg-subtle: #343a40;
  --bs-dark-bg-subtle: #1a1d20;
  --bs-primary-border-subtle: #084298;
  --bs-secondary-border-subtle: #41464b;
  --bs-success-border-subtle: #0f5132;
  --bs-info-border-subtle: #087990;
  --bs-warning-border-subtle: #997404;
  --bs-danger-border-subtle: #842029;
  --bs-light-border-subtle: #495057;
  --bs-dark-border-subtle: #343a40;
  --bs-heading-color: inherit;
  --bs-link-color: #6ea8fe;
  --bs-link-hover-color: #8bb9fe;
  --bs-link-color-rgb: 110, 168, 254;
  --bs-link-hover-color-rgb: 139, 185, 254;
  --bs-code-color: #e685b5;
  --bs-highlight-color: #dee2e6;
  --bs-highlight-bg: #664d03;
  --bs-border-color: #495057;
  --bs-border-color-translucent: rgba(255, 255, 255, 0.15);
  --bs-form-valid-color: #75b798;
  --bs-form-valid-border-color: #75b798;
  --bs-form-invalid-color: #ea868f;
  --bs-form-invalid-border-color: #ea868f;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
  border-top: var(--bs-border-width) solid;
  opacity: 0.25;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--bs-heading-color);
}

h1, .h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 2.5rem;
  }
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

h3, .h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.75rem;
  }
}

h4, .h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.5rem;
  }
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .small {
  font-size: 0.875em;
}

mark, .mark {
  padding: 0.1875em;
  color: var(--bs-highlight-color);
  background-color: var(--bs-highlight-bg);
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
  text-decoration: underline;
}
a:hover {
  --bs-link-color-rgb: var(--bs-link-hover-color-rgb);
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: var(--bs-code-color);
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.1875rem 0.375rem;
  font-size: 0.875em;
  color: var(--bs-body-bg);
  background-color: var(--bs-body-color);
  border-radius: 0.25rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--bs-secondary-color);
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
  display: none !important;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: var(--bs-body-bg);
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.875em;
  color: var(--bs-secondary-color);
}

.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
:root {
  --bs-breakpoint-xs: 0;
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1200px;
  --bs-breakpoint-xxl: 1400px;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-1,
  .gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-sm-1,
  .gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-sm-2,
  .gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-sm-2,
  .gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-sm-3,
  .gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .g-sm-3,
  .gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .g-sm-4,
  .gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-sm-4,
  .gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-sm-5,
  .gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .g-sm-5,
  .gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-1,
  .gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-md-1,
  .gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-md-2,
  .gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-md-2,
  .gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-md-3,
  .gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .g-md-3,
  .gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .g-md-4,
  .gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-md-4,
  .gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-md-5,
  .gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .g-md-5,
  .gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-1,
  .gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-lg-1,
  .gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-lg-2,
  .gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-lg-2,
  .gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-lg-3,
  .gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .g-lg-3,
  .gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .g-lg-4,
  .gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-lg-4,
  .gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-1,
  .gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xl-1,
  .gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xl-2,
  .gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xl-2,
  .gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xl-3,
  .gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xl-3,
  .gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xl-4,
  .gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xl-4,
  .gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xl-5,
  .gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xl-5,
  .gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.table {
  --bs-table-color-type: initial;
  --bs-table-bg-type: initial;
  --bs-table-color-state: initial;
  --bs-table-bg-state: initial;
  --bs-table-color: var(--bs-emphasis-color);
  --bs-table-bg: var(--bs-body-bg);
  --bs-table-border-color: var(--bs-border-color);
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: var(--bs-emphasis-color);
  --bs-table-striped-bg: rgba(var(--bs-emphasis-color-rgb), 0.05);
  --bs-table-active-color: var(--bs-emphasis-color);
  --bs-table-active-bg: rgba(var(--bs-emphasis-color-rgb), 0.1);
  --bs-table-hover-color: var(--bs-emphasis-color);
  --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.075);
  width: 100%;
  margin-bottom: 1rem;
  vertical-align: top;
  border-color: var(--bs-table-border-color);
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)));
  background-color: var(--bs-table-bg);
  border-bottom-width: var(--bs-border-width);
  box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}

.table-group-divider {
  border-top: calc(var(--bs-border-width) * 2) solid currentcolor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.table-bordered > :not(caption) > * {
  border-width: var(--bs-border-width) 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 var(--bs-border-width);
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}
.table-borderless > :not(:first-child) {
  border-top-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) > * {
  --bs-table-color-type: var(--bs-table-striped-color);
  --bs-table-bg-type: var(--bs-table-striped-bg);
}

.table-striped-columns > :not(caption) > tr > :nth-child(even) {
  --bs-table-color-type: var(--bs-table-striped-color);
  --bs-table-bg-type: var(--bs-table-striped-bg);
}

.table-active {
  --bs-table-color-state: var(--bs-table-active-color);
  --bs-table-bg-state: var(--bs-table-active-bg);
}

.table-hover > tbody > tr:hover > * {
  --bs-table-color-state: var(--bs-table-hover-color);
  --bs-table-bg-state: var(--bs-table-hover-bg);
}

.table-primary {
  --bs-table-color: #000;
  --bs-table-bg: #cfe2ff;
  --bs-table-border-color: #a6b5cc;
  --bs-table-striped-bg: #c5d7f2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bacbe6;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfd1ec;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-secondary {
  --bs-table-color: #000;
  --bs-table-bg: #e2e3e5;
  --bs-table-border-color: #b5b6b7;
  --bs-table-striped-bg: #d7d8da;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #cbccce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #d1d2d4;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-success {
  --bs-table-color: #000;
  --bs-table-bg: #d1e7dd;
  --bs-table-border-color: #a7b9b1;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-info {
  --bs-table-color: #000;
  --bs-table-bg: #cff4fc;
  --bs-table-border-color: #a6c3ca;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-warning {
  --bs-table-color: #000;
  --bs-table-bg: #fff3cd;
  --bs-table-border-color: #ccc2a4;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-danger {
  --bs-table-color: #000;
  --bs-table-bg: #f8d7da;
  --bs-table-border-color: #c6acae;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-light {
  --bs-table-color: #000;
  --bs-table-bg: #f8f9fa;
  --bs-table-border-color: #c6c7c8;
  --bs-table-striped-bg: #ecedee;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfe0e1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5e6e7;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-dark {
  --bs-table-color: #fff;
  --bs-table-bg: #212529;
  --bs-table-border-color: #4d5154;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0.5rem;
}

.col-form-label {
  padding-top: calc(0.375rem + var(--bs-border-width));
  padding-bottom: calc(0.375rem + var(--bs-border-width));
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + var(--bs-border-width));
  padding-bottom: calc(0.5rem + var(--bs-border-width));
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + var(--bs-border-width));
  padding-bottom: calc(0.25rem + var(--bs-border-width));
  font-size: 0.875rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-secondary-color);
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  appearance: none;
  background-color: var(--bs-body-bg);
  background-clip: padding-box;
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-control::-webkit-date-and-time-value {
  min-width: 85px;
  height: 1.5em;
  margin: 0;
}
.form-control::-webkit-datetime-edit {
  display: block;
  padding: 0;
}
.form-control::placeholder {
  color: var(--bs-secondary-color);
  opacity: 1;
}
.form-control:disabled {
  background-color: var(--bs-secondary-bg);
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  margin-inline-end: 0.75rem;
  color: var(--bs-body-color);
  background-color: var(--bs-tertiary-bg);
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: var(--bs-border-width);
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: var(--bs-secondary-bg);
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: var(--bs-body-color);
  background-color: transparent;
  border: solid transparent;
  border-width: var(--bs-border-width) 0;
}
.form-control-plaintext:focus {
  outline: 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--bs-border-radius-sm);
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: var(--bs-border-radius-lg);
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));
}
textarea.form-control-sm {
  min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
}

.form-control-color {
  width: 3rem;
  height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  border: 0 !important;
  border-radius: var(--bs-border-radius);
}
.form-control-color::-webkit-color-swatch {
  border: 0 !important;
  border-radius: var(--bs-border-radius);
}
.form-control-color.form-control-sm {
  height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
}
.form-control-color.form-control-lg {
  height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
}

.form-select {
  --bs-form-select-bg-img: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  appearance: none;
  background-color: var(--bs-body-bg);
  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.form-select:disabled {
  background-color: var(--bs-secondary-bg);
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 var(--bs-body-color);
}

.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--bs-border-radius-sm);
}

.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
  border-radius: var(--bs-border-radius-lg);
}

[data-bs-theme=dark] .form-select {
  --bs-form-select-bg-img: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-reverse {
  padding-right: 1.5em;
  padding-left: 0;
  text-align: right;
}
.form-check-reverse .form-check-input {
  float: right;
  margin-right: -1.5em;
  margin-left: 0;
}

.form-check-input {
  --bs-form-check-bg: var(--bs-body-bg);
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  appearance: none;
  background-color: var(--bs-form-check-bg);
  background-image: var(--bs-form-check-bg-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: var(--bs-border-width) solid var(--bs-border-color);
  print-color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.form-check-input:checked[type=checkbox] {
  --bs-form-check-bg-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.form-check-input:checked[type=radio] {
  --bs-form-check-bg-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  --bs-form-check-bg-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  cursor: default;
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  --bs-form-switch-bg: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  width: 2em;
  margin-left: -2.5em;
  background-image: var(--bs-form-switch-bg);
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  --bs-form-switch-bg: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}
.form-switch .form-check-input:checked {
  background-position: right center;
  --bs-form-switch-bg: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}
.form-switch.form-check-reverse {
  padding-right: 2.5em;
  padding-left: 0;
}
.form-switch.form-check-reverse .form-check-input {
  margin-right: -2.5em;
  margin-left: 0;
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus) {
  --bs-form-switch-bg: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  appearance: none;
  background-color: transparent;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  appearance: none;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--bs-secondary-bg);
  border-color: transparent;
  border-radius: 1rem;
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  appearance: none;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--bs-secondary-bg);
  border-color: transparent;
  border-radius: 1rem;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: var(--bs-secondary-color);
}
.form-range:disabled::-moz-range-thumb {
  background-color: var(--bs-secondary-color);
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext,
.form-floating > .form-select {
  height: calc(3.5rem + calc(var(--bs-border-width) * 2));
  min-height: calc(3.5rem + calc(var(--bs-border-width) * 2));
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  padding: 1rem 0.75rem;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  border: var(--bs-border-width) solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control::placeholder,
.form-floating > .form-control-plaintext::placeholder {
  color: transparent;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown),
.form-floating > .form-control-plaintext:focus,
.form-floating > .form-control-plaintext:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill,
.form-floating > .form-control-plaintext:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-control-plaintext ~ label,
.form-floating > .form-select ~ label {
  color: rgba(var(--bs-body-color-rgb), 0.65);
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label::after,
.form-floating > .form-control:not(:placeholder-shown) ~ label::after,
.form-floating > .form-control-plaintext ~ label::after,
.form-floating > .form-select ~ label::after {
  position: absolute;
  inset: 1rem 0.375rem;
  z-index: -1;
  height: 1.5em;
  content: "";
  background-color: var(--bs-body-bg);
  border-radius: var(--bs-border-radius);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  color: rgba(var(--bs-body-color-rgb), 0.65);
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control-plaintext ~ label {
  border-width: var(--bs-border-width) 0;
}
.form-floating > :disabled ~ label,
.form-floating > .form-control:disabled ~ label {
  color: #6c757d;
}
.form-floating > :disabled ~ label::after,
.form-floating > .form-control:disabled ~ label::after {
  background-color: var(--bs-secondary-bg);
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select,
.input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus,
.input-group > .form-floating:focus-within {
  z-index: 5;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 5;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-tertiary-bg);
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: var(--bs-border-radius-lg);
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--bs-border-radius-sm);
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 3rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: calc(var(--bs-border-width) * -1);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .form-floating:not(:first-child) > .form-control,
.input-group > .form-floating:not(:first-child) > .form-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-form-valid-color);
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: var(--bs-success);
  border-radius: var(--bs-border-radius);
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: var(--bs-form-valid-border-color);
  padding-right: calc(1.5em + 0.75rem);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: var(--bs-form-valid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: var(--bs-form-valid-border-color);
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  padding-right: 4.125rem;
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: var(--bs-form-valid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}

.was-validated .form-control-color:valid, .form-control-color.is-valid {
  width: calc(3rem + calc(1.5em + 0.75rem));
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: var(--bs-form-valid-border-color);
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: var(--bs-form-valid-color);
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: var(--bs-form-valid-color);
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group > .form-control:not(:focus):valid, .input-group > .form-control:not(:focus).is-valid,
.was-validated .input-group > .form-select:not(:focus):valid,
.input-group > .form-select:not(:focus).is-valid,
.was-validated .input-group > .form-floating:not(:focus-within):valid,
.input-group > .form-floating:not(:focus-within).is-valid {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-form-invalid-color);
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: var(--bs-danger);
  border-radius: var(--bs-border-radius);
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
  padding-right: calc(1.5em + 0.75rem);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: var(--bs-form-invalid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
  padding-right: 4.125rem;
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: var(--bs-form-invalid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}

.was-validated .form-control-color:invalid, .form-control-color.is-invalid {
  width: calc(3rem + calc(1.5em + 0.75rem));
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: var(--bs-form-invalid-color);
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: var(--bs-form-invalid-color);
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group > .form-control:not(:focus):invalid, .input-group > .form-control:not(:focus).is-invalid,
.was-validated .input-group > .form-select:not(:focus):invalid,
.input-group > .form-select:not(:focus).is-invalid,
.was-validated .input-group > .form-floating:not(:focus-within):invalid,
.input-group > .form-floating:not(:focus-within).is-invalid {
  z-index: 4;
}

.btn {
  --bs-btn-padding-x: 0.75rem;
  --bs-btn-padding-y: 0.375rem;
  --bs-btn-font-family: ;
  --bs-btn-font-size: 1rem;
  --bs-btn-font-weight: 400;
  --bs-btn-line-height: 1.5;
  --bs-btn-color: var(--bs-body-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-width: var(--bs-border-width);
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: var(--bs-border-radius);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
}
.btn-check + .btn:hover {
  color: var(--bs-btn-color);
  background-color: var(--bs-btn-bg);
  border-color: var(--bs-btn-border-color);
}
.btn:focus-visible {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:focus-visible + .btn {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {
  color: var(--bs-btn-active-color);
  background-color: var(--bs-btn-active-bg);
  border-color: var(--bs-btn-active-border-color);
}
.btn-check:checked + .btn:focus-visible, :not(.btn-check) + .btn:active:focus-visible, .btn:first-child:active:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible {
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  color: var(--bs-btn-disabled-color);
  pointer-events: none;
  background-color: var(--bs-btn-disabled-bg);
  border-color: var(--bs-btn-disabled-border-color);
  opacity: var(--bs-btn-disabled-opacity);
}

.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0b5ed7;
  --bs-btn-hover-border-color: #0a58ca;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0a58ca;
  --bs-btn-active-border-color: #0a53be;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0d6efd;
  --bs-btn-disabled-border-color: #0d6efd;
}

.btn-secondary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #6c757d;
  --bs-btn-border-color: #6c757d;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #5c636a;
  --bs-btn-hover-border-color: #565e64;
  --bs-btn-focus-shadow-rgb: 130, 138, 145;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #565e64;
  --bs-btn-active-border-color: #51585e;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #6c757d;
  --bs-btn-disabled-border-color: #6c757d;
}

.btn-success {
  --bs-btn-color: #fff;
  --bs-btn-bg: #198754;
  --bs-btn-border-color: #198754;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #157347;
  --bs-btn-hover-border-color: #146c43;
  --bs-btn-focus-shadow-rgb: 60, 153, 110;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #146c43;
  --bs-btn-active-border-color: #13653f;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #198754;
  --bs-btn-disabled-border-color: #198754;
}

.btn-info {
  --bs-btn-color: #000;
  --bs-btn-bg: #0dcaf0;
  --bs-btn-border-color: #0dcaf0;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #31d2f2;
  --bs-btn-hover-border-color: #25cff2;
  --bs-btn-focus-shadow-rgb: 11, 172, 204;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #3dd5f3;
  --bs-btn-active-border-color: #25cff2;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #0dcaf0;
  --bs-btn-disabled-border-color: #0dcaf0;
}

.btn-warning {
  --bs-btn-color: #000;
  --bs-btn-bg: #ffc107;
  --bs-btn-border-color: #ffc107;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ffca2c;
  --bs-btn-hover-border-color: #ffc720;
  --bs-btn-focus-shadow-rgb: 217, 164, 6;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #ffcd39;
  --bs-btn-active-border-color: #ffc720;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #ffc107;
  --bs-btn-disabled-border-color: #ffc107;
}

.btn-danger {
  --bs-btn-color: #fff;
  --bs-btn-bg: #dc3545;
  --bs-btn-border-color: #dc3545;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #bb2d3b;
  --bs-btn-hover-border-color: #b02a37;
  --bs-btn-focus-shadow-rgb: 225, 83, 97;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #b02a37;
  --bs-btn-active-border-color: #a52834;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #dc3545;
  --bs-btn-disabled-border-color: #dc3545;
}

.btn-light {
  --bs-btn-color: #000;
  --bs-btn-bg: #f8f9fa;
  --bs-btn-border-color: #f8f9fa;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #d3d4d5;
  --bs-btn-hover-border-color: #c6c7c8;
  --bs-btn-focus-shadow-rgb: 211, 212, 213;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #c6c7c8;
  --bs-btn-active-border-color: #babbbc;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #f8f9fa;
  --bs-btn-disabled-border-color: #f8f9fa;
}

.btn-dark {
  --bs-btn-color: #fff;
  --bs-btn-bg: #212529;
  --bs-btn-border-color: #212529;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #424649;
  --bs-btn-hover-border-color: #373b3e;
  --bs-btn-focus-shadow-rgb: 66, 70, 73;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #4d5154;
  --bs-btn-active-border-color: #373b3e;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #212529;
  --bs-btn-disabled-border-color: #212529;
}

.btn-outline-primary {
  --bs-btn-color: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0d6efd;
  --bs-btn-hover-border-color: #0d6efd;
  --bs-btn-focus-shadow-rgb: 13, 110, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0d6efd;
  --bs-btn-active-border-color: #0d6efd;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #0d6efd;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #0d6efd;
  --bs-gradient: none;
}

.btn-outline-secondary {
  --bs-btn-color: #6c757d;
  --bs-btn-border-color: #6c757d;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #6c757d;
  --bs-btn-hover-border-color: #6c757d;
  --bs-btn-focus-shadow-rgb: 108, 117, 125;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #6c757d;
  --bs-btn-active-border-color: #6c757d;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #6c757d;
  --bs-gradient: none;
}

.btn-outline-success {
  --bs-btn-color: #198754;
  --bs-btn-border-color: #198754;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #198754;
  --bs-btn-hover-border-color: #198754;
  --bs-btn-focus-shadow-rgb: 25, 135, 84;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #198754;
  --bs-btn-active-border-color: #198754;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #198754;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #198754;
  --bs-gradient: none;
}

.btn-outline-info {
  --bs-btn-color: #0dcaf0;
  --bs-btn-border-color: #0dcaf0;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #0dcaf0;
  --bs-btn-hover-border-color: #0dcaf0;
  --bs-btn-focus-shadow-rgb: 13, 202, 240;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #0dcaf0;
  --bs-btn-active-border-color: #0dcaf0;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #0dcaf0;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #0dcaf0;
  --bs-gradient: none;
}

.btn-outline-warning {
  --bs-btn-color: #ffc107;
  --bs-btn-border-color: #ffc107;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ffc107;
  --bs-btn-hover-border-color: #ffc107;
  --bs-btn-focus-shadow-rgb: 255, 193, 7;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #ffc107;
  --bs-btn-active-border-color: #ffc107;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #ffc107;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #ffc107;
  --bs-gradient: none;
}

.btn-outline-danger {
  --bs-btn-color: #dc3545;
  --bs-btn-border-color: #dc3545;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #dc3545;
  --bs-btn-hover-border-color: #dc3545;
  --bs-btn-focus-shadow-rgb: 220, 53, 69;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #dc3545;
  --bs-btn-active-border-color: #dc3545;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #dc3545;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #dc3545;
  --bs-gradient: none;
}

.btn-outline-light {
  --bs-btn-color: #f8f9fa;
  --bs-btn-border-color: #f8f9fa;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #f8f9fa;
  --bs-btn-hover-border-color: #f8f9fa;
  --bs-btn-focus-shadow-rgb: 248, 249, 250;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #f8f9fa;
  --bs-btn-active-border-color: #f8f9fa;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #f8f9fa;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #f8f9fa;
  --bs-gradient: none;
}

.btn-outline-dark {
  --bs-btn-color: #212529;
  --bs-btn-border-color: #212529;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #212529;
  --bs-btn-hover-border-color: #212529;
  --bs-btn-focus-shadow-rgb: 33, 37, 41;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #212529;
  --bs-btn-active-border-color: #212529;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #212529;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #212529;
  --bs-gradient: none;
}

.btn-link {
  --bs-btn-font-weight: 400;
  --bs-btn-color: var(--bs-link-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-color: transparent;
  --bs-btn-hover-color: var(--bs-link-hover-color);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-active-color: var(--bs-link-hover-color);
  --bs-btn-active-border-color: transparent;
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-border-color: transparent;
  --bs-btn-box-shadow: 0 0 0 #000;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  text-decoration: underline;
}
.btn-link:focus-visible {
  color: var(--bs-btn-color);
}
.btn-link:hover {
  color: var(--bs-btn-hover-color);
}

.btn-lg, .btn-group-lg > .btn {
  --bs-btn-padding-y: 0.5rem;
  --bs-btn-padding-x: 1rem;
  --bs-btn-font-size: 1.25rem;
  --bs-btn-border-radius: var(--bs-border-radius-lg);
}

.btn-sm, .btn-group-sm > .btn {
  --bs-btn-padding-y: 0.25rem;
  --bs-btn-padding-x: 0.5rem;
  --bs-btn-font-size: 0.875rem;
  --bs-btn-border-radius: var(--bs-border-radius-sm);
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}
.collapsing.collapse-horizontal {
  width: 0;
  height: auto;
  transition: width 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing.collapse-horizontal {
    transition: none;
  }
}

.dropup,
.dropend,
.dropdown,
.dropstart,
.dropup-center,
.dropdown-center {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  --bs-dropdown-zindex: 1000;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: 0.5rem;
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: 1rem;
  --bs-dropdown-color: var(--bs-body-color);
  --bs-dropdown-bg: var(--bs-body-bg);
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-border-radius: var(--bs-border-radius);
  --bs-dropdown-border-width: var(--bs-border-width);
  --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width));
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-divider-margin-y: 0.5rem;
  --bs-dropdown-box-shadow: var(--bs-box-shadow);
  --bs-dropdown-link-color: var(--bs-body-color);
  --bs-dropdown-link-hover-color: var(--bs-body-color);
  --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg);
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: #0d6efd;
  --bs-dropdown-link-disabled-color: var(--bs-tertiary-color);
  --bs-dropdown-item-padding-x: 1rem;
  --bs-dropdown-item-padding-y: 0.25rem;
  --bs-dropdown-header-color: #6c757d;
  --bs-dropdown-header-padding-x: 1rem;
  --bs-dropdown-header-padding-y: 0.5rem;
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  margin: 0;
  font-size: var(--bs-dropdown-font-size);
  color: var(--bs-dropdown-color);
  text-align: left;
  list-style: none;
  background-color: var(--bs-dropdown-bg);
  background-clip: padding-box;
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: var(--bs-dropdown-border-radius);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: var(--bs-dropdown-spacer);
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: var(--bs-dropdown-spacer);
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: var(--bs-dropdown-spacer);
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: var(--bs-dropdown-spacer);
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: var(--bs-dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--bs-dropdown-divider-bg);
  opacity: 1;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  clear: both;
  font-weight: 400;
  color: var(--bs-dropdown-link-color);
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  border-radius: var(--bs-dropdown-item-border-radius, 0);
}
.dropdown-item:hover, .dropdown-item:focus {
  color: var(--bs-dropdown-link-hover-color);
  background-color: var(--bs-dropdown-link-hover-bg);
}
.dropdown-item.active, .dropdown-item:active {
  color: var(--bs-dropdown-link-active-color);
  text-decoration: none;
  background-color: var(--bs-dropdown-link-active-bg);
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: var(--bs-dropdown-link-disabled-color);
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
  margin-bottom: 0;
  font-size: 0.875rem;
  color: var(--bs-dropdown-header-color);
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  color: var(--bs-dropdown-link-color);
}

.dropdown-menu-dark {
  --bs-dropdown-color: #dee2e6;
  --bs-dropdown-bg: #343a40;
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-box-shadow: ;
  --bs-dropdown-link-color: #dee2e6;
  --bs-dropdown-link-hover-color: #fff;
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: #0d6efd;
  --bs-dropdown-link-disabled-color: #adb5bd;
  --bs-dropdown-header-color: #adb5bd;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn:hover,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group {
  border-radius: var(--bs-border-radius);
}
.btn-group > :not(.btn-check:first-child) + .btn,
.btn-group > .btn-group:not(:first-child) {
  margin-left: calc(var(--bs-border-width) * -1);
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn.dropdown-toggle-split:first-child,
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:nth-child(n+3),
.btn-group > :not(.btn-check) + .btn,
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: calc(var(--bs-border-width) * -1);
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn ~ .btn,
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav {
  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: var(--bs-secondary-color);
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  color: var(--bs-nav-link-color);
  text-decoration: none;
  background: none;
  border: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: var(--bs-nav-link-hover-color);
}
.nav-link:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.nav-link.disabled, .nav-link:disabled {
  color: var(--bs-nav-link-disabled-color);
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  --bs-nav-tabs-border-width: var(--bs-border-width);
  --bs-nav-tabs-border-color: var(--bs-border-color);
  --bs-nav-tabs-border-radius: var(--bs-border-radius);
  --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);
  --bs-nav-tabs-link-active-color: var(--bs-emphasis-color);
  --bs-nav-tabs-link-active-bg: var(--bs-body-bg);
  --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);
  border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);
}
.nav-tabs .nav-link {
  margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
  border: var(--bs-nav-tabs-border-width) solid transparent;
  border-top-left-radius: var(--bs-nav-tabs-border-radius);
  border-top-right-radius: var(--bs-nav-tabs-border-radius);
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  isolation: isolate;
  border-color: var(--bs-nav-tabs-link-hover-border-color);
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: var(--bs-nav-tabs-link-active-color);
  background-color: var(--bs-nav-tabs-link-active-bg);
  border-color: var(--bs-nav-tabs-link-active-border-color);
}
.nav-tabs .dropdown-menu {
  margin-top: calc(-1 * var(--bs-nav-tabs-border-width));
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills {
  --bs-nav-pills-border-radius: var(--bs-border-radius);
  --bs-nav-pills-link-active-color: #fff;
  --bs-nav-pills-link-active-bg: #0d6efd;
}
.nav-pills .nav-link {
  border-radius: var(--bs-nav-pills-border-radius);
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--bs-nav-pills-link-active-color);
  background-color: var(--bs-nav-pills-link-active-bg);
}

.nav-underline {
  --bs-nav-underline-gap: 1rem;
  --bs-nav-underline-border-width: 0.125rem;
  --bs-nav-underline-link-active-color: var(--bs-emphasis-color);
  gap: var(--bs-nav-underline-gap);
}
.nav-underline .nav-link {
  padding-right: 0;
  padding-left: 0;
  border-bottom: var(--bs-nav-underline-border-width) solid transparent;
}
.nav-underline .nav-link:hover, .nav-underline .nav-link:focus {
  border-bottom-color: currentcolor;
}
.nav-underline .nav-link.active,
.nav-underline .show > .nav-link {
  font-weight: 700;
  color: var(--bs-nav-underline-link-active-color);
  border-bottom-color: currentcolor;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  --bs-navbar-padding-x: 0;
  --bs-navbar-padding-y: 0.5rem;
  --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65);
  --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8);
  --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3);
  --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-brand-padding-y: 0.3125rem;
  --bs-navbar-brand-margin-end: 1rem;
  --bs-navbar-brand-font-size: 1.25rem;
  --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-nav-link-padding-x: 0.5rem;
  --bs-navbar-toggler-padding-y: 0.25rem;
  --bs-navbar-toggler-padding-x: 0.75rem;
  --bs-navbar-toggler-font-size: 1.25rem;
  --bs-navbar-toggler-icon-bg: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15);
  --bs-navbar-toggler-border-radius: var(--bs-border-radius);
  --bs-navbar-toggler-focus-width: 0.25rem;
  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: var(--bs-navbar-brand-padding-y);
  padding-bottom: var(--bs-navbar-brand-padding-y);
  margin-right: var(--bs-navbar-brand-margin-end);
  font-size: var(--bs-navbar-brand-font-size);
  color: var(--bs-navbar-brand-color);
  text-decoration: none;
  white-space: nowrap;
}
.navbar-brand:hover, .navbar-brand:focus {
  color: var(--bs-navbar-brand-hover-color);
}

.navbar-nav {
  --bs-nav-link-padding-x: 0;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-navbar-color);
  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
  color: var(--bs-navbar-active-color);
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--bs-navbar-color);
}
.navbar-text a,
.navbar-text a:hover,
.navbar-text a:focus {
  color: var(--bs-navbar-active-color);
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: var(--bs-navbar-color);
  background-color: transparent;
  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: var(--bs-navbar-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
  .navbar-expand-sm .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
  .navbar-expand-md .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .navbar-expand-lg .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xxl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-xxl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xxl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}
.navbar-expand .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}
.navbar-expand .offcanvas .offcanvas-header {
  display: none;
}
.navbar-expand .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}

.navbar-dark,
.navbar[data-bs-theme=dark] {
  --bs-navbar-color: rgba(255, 255, 255, 0.55);
  --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);
  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
  --bs-navbar-active-color: #fff;
  --bs-navbar-brand-color: #fff;
  --bs-navbar-brand-hover-color: #fff;
  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
  --bs-navbar-toggler-icon-bg: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
}

[data-bs-theme=dark] .navbar-toggler-icon {
  --bs-navbar-toggler-icon-bg: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
}

.card {
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-title-color: ;
  --bs-card-subtitle-color: ;
  --bs-card-border-width: var(--bs-border-width);
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: var(--bs-border-radius);
  --bs-card-box-shadow: ;
  --bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: var(--bs-body-bg);
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  color: var(--bs-body-color);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: var(--bs-card-inner-border-radius);
  border-top-right-radius: var(--bs-card-inner-border-radius);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: var(--bs-card-inner-border-radius);
  border-bottom-left-radius: var(--bs-card-inner-border-radius);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
}

.card-title {
  margin-bottom: var(--bs-card-title-spacer-y);
  color: var(--bs-card-title-color);
}

.card-subtitle {
  margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));
  margin-bottom: 0;
  color: var(--bs-card-subtitle-color);
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link + .card-link {
  margin-left: var(--bs-card-spacer-x);
}

.card-header {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  margin-bottom: 0;
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
}
.card-header:first-child {
  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
}

.card-footer {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);
}
.card-footer:last-child {
  border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);
}

.card-header-tabs {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
  border-bottom: 0;
}
.card-header-tabs .nav-link.active {
  background-color: var(--bs-card-bg);
  border-bottom-color: var(--bs-card-bg);
}

.card-header-pills {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--bs-card-img-overlay-padding);
  border-radius: var(--bs-card-inner-border-radius);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: var(--bs-card-inner-border-radius);
  border-top-right-radius: var(--bs-card-inner-border-radius);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: var(--bs-card-inner-border-radius);
  border-bottom-left-radius: var(--bs-card-inner-border-radius);
}

.card-group > .card {
  margin-bottom: var(--bs-card-group-margin);
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
  .card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
  .card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
  .card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
  .card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion {
  --bs-accordion-color: var(--bs-body-color);
  --bs-accordion-bg: var(--bs-body-bg);
  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
  --bs-accordion-border-color: var(--bs-border-color);
  --bs-accordion-border-width: var(--bs-border-width);
  --bs-accordion-border-radius: var(--bs-border-radius);
  --bs-accordion-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));
  --bs-accordion-btn-padding-x: 1.25rem;
  --bs-accordion-btn-padding-y: 1rem;
  --bs-accordion-btn-color: var(--bs-body-color);
  --bs-accordion-btn-bg: var(--bs-accordion-bg);
  --bs-accordion-btn-icon: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  --bs-accordion-btn-icon-width: 1.25rem;
  --bs-accordion-btn-icon-transform: rotate(-180deg);
  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
  --bs-accordion-btn-active-icon: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
  --bs-accordion-btn-focus-border-color: #86b7fe;
  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --bs-accordion-body-padding-x: 1.25rem;
  --bs-accordion-body-padding-y: 1rem;
  --bs-accordion-active-color: var(--bs-primary-text-emphasis);
  --bs-accordion-active-bg: var(--bs-primary-bg-subtle);
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
  font-size: 1rem;
  color: var(--bs-accordion-btn-color);
  text-align: left;
  background-color: var(--bs-accordion-btn-bg);
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: var(--bs-accordion-transition);
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  color: var(--bs-accordion-active-color);
  background-color: var(--bs-accordion-active-bg);
  box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);
}
.accordion-button:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-active-icon);
  transform: var(--bs-accordion-btn-icon-transform);
}
.accordion-button::after {
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-left: auto;
  content: "";
  background-image: var(--bs-accordion-btn-icon);
  background-repeat: no-repeat;
  background-size: var(--bs-accordion-btn-icon-width);
  transition: var(--bs-accordion-btn-icon-transition);
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: var(--bs-accordion-btn-focus-border-color);
  outline: 0;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  color: var(--bs-accordion-color);
  background-color: var(--bs-accordion-bg);
  border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);
}
.accordion-item:first-of-type {
  border-top-left-radius: var(--bs-accordion-border-radius);
  border-top-right-radius: var(--bs-accordion-border-radius);
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: var(--bs-accordion-inner-border-radius);
  border-top-right-radius: var(--bs-accordion-inner-border-radius);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: var(--bs-accordion-inner-border-radius);
  border-bottom-left-radius: var(--bs-accordion-inner-border-radius);
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}

.accordion-body {
  padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);
}

.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush .accordion-item .accordion-button, .accordion-flush .accordion-item .accordion-button.collapsed {
  border-radius: 0;
}

[data-bs-theme=dark] .accordion-button::after {
  --bs-accordion-btn-icon: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
  --bs-accordion-btn-active-icon: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
}

.breadcrumb {
  --bs-breadcrumb-padding-x: 0;
  --bs-breadcrumb-padding-y: 0;
  --bs-breadcrumb-margin-bottom: 1rem;
  --bs-breadcrumb-bg: ;
  --bs-breadcrumb-border-radius: ;
  --bs-breadcrumb-divider-color: var(--bs-secondary-color);
  --bs-breadcrumb-item-padding-x: 0.5rem;
  --bs-breadcrumb-item-active-color: var(--bs-secondary-color);
  display: flex;
  flex-wrap: wrap;
  padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);
  margin-bottom: var(--bs-breadcrumb-margin-bottom);
  font-size: var(--bs-breadcrumb-font-size);
  list-style: none;
  background-color: var(--bs-breadcrumb-bg);
  border-radius: var(--bs-breadcrumb-border-radius);
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: var(--bs-breadcrumb-item-padding-x);
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: var(--bs-breadcrumb-item-padding-x);
  color: var(--bs-breadcrumb-divider-color);
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.breadcrumb-item.active {
  color: var(--bs-breadcrumb-item-active-color);
}

.pagination {
  --bs-pagination-padding-x: 0.75rem;
  --bs-pagination-padding-y: 0.375rem;
  --bs-pagination-font-size: 1rem;
  --bs-pagination-color: var(--bs-link-color);
  --bs-pagination-bg: var(--bs-body-bg);
  --bs-pagination-border-width: var(--bs-border-width);
  --bs-pagination-border-color: var(--bs-border-color);
  --bs-pagination-border-radius: var(--bs-border-radius);
  --bs-pagination-hover-color: var(--bs-link-hover-color);
  --bs-pagination-hover-bg: var(--bs-tertiary-bg);
  --bs-pagination-hover-border-color: var(--bs-border-color);
  --bs-pagination-focus-color: var(--bs-link-hover-color);
  --bs-pagination-focus-bg: var(--bs-secondary-bg);
  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --bs-pagination-active-color: #fff;
  --bs-pagination-active-bg: #0d6efd;
  --bs-pagination-active-border-color: #0d6efd;
  --bs-pagination-disabled-color: var(--bs-secondary-color);
  --bs-pagination-disabled-bg: var(--bs-secondary-bg);
  --bs-pagination-disabled-border-color: var(--bs-border-color);
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
  font-size: var(--bs-pagination-font-size);
  color: var(--bs-pagination-color);
  text-decoration: none;
  background-color: var(--bs-pagination-bg);
  border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: var(--bs-pagination-hover-color);
  background-color: var(--bs-pagination-hover-bg);
  border-color: var(--bs-pagination-hover-border-color);
}
.page-link:focus {
  z-index: 3;
  color: var(--bs-pagination-focus-color);
  background-color: var(--bs-pagination-focus-bg);
  outline: 0;
  box-shadow: var(--bs-pagination-focus-box-shadow);
}
.page-link.active, .active > .page-link {
  z-index: 3;
  color: var(--bs-pagination-active-color);
  background-color: var(--bs-pagination-active-bg);
  border-color: var(--bs-pagination-active-border-color);
}
.page-link.disabled, .disabled > .page-link {
  color: var(--bs-pagination-disabled-color);
  pointer-events: none;
  background-color: var(--bs-pagination-disabled-bg);
  border-color: var(--bs-pagination-disabled-border-color);
}

.page-item:not(:first-child) .page-link {
  margin-left: calc(var(--bs-border-width) * -1);
}
.page-item:first-child .page-link {
  border-top-left-radius: var(--bs-pagination-border-radius);
  border-bottom-left-radius: var(--bs-pagination-border-radius);
}
.page-item:last-child .page-link {
  border-top-right-radius: var(--bs-pagination-border-radius);
  border-bottom-right-radius: var(--bs-pagination-border-radius);
}

.pagination-lg {
  --bs-pagination-padding-x: 1.5rem;
  --bs-pagination-padding-y: 0.75rem;
  --bs-pagination-font-size: 1.25rem;
  --bs-pagination-border-radius: var(--bs-border-radius-lg);
}

.pagination-sm {
  --bs-pagination-padding-x: 0.5rem;
  --bs-pagination-padding-y: 0.25rem;
  --bs-pagination-font-size: 0.875rem;
  --bs-pagination-border-radius: var(--bs-border-radius-sm);
}

.badge {
  --bs-badge-padding-x: 0.65em;
  --bs-badge-padding-y: 0.35em;
  --bs-badge-font-size: 0.75em;
  --bs-badge-font-weight: 700;
  --bs-badge-color: #fff;
  --bs-badge-border-radius: var(--bs-border-radius);
  display: inline-block;
  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  font-size: var(--bs-badge-font-size);
  font-weight: var(--bs-badge-font-weight);
  line-height: 1;
  color: var(--bs-badge-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--bs-badge-border-radius);
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.alert {
  --bs-alert-bg: transparent;
  --bs-alert-padding-x: 1rem;
  --bs-alert-padding-y: 1rem;
  --bs-alert-margin-bottom: 1rem;
  --bs-alert-color: inherit;
  --bs-alert-border-color: transparent;
  --bs-alert-border: var(--bs-border-width) solid var(--bs-alert-border-color);
  --bs-alert-border-radius: var(--bs-border-radius);
  --bs-alert-link-color: inherit;
  position: relative;
  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
  margin-bottom: var(--bs-alert-margin-bottom);
  color: var(--bs-alert-color);
  background-color: var(--bs-alert-bg);
  border: var(--bs-alert-border);
  border-radius: var(--bs-alert-border-radius);
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
  color: var(--bs-alert-link-color);
}

.alert-dismissible {
  padding-right: 3rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}

.alert-primary {
  --bs-alert-color: var(--bs-primary-text-emphasis);
  --bs-alert-bg: var(--bs-primary-bg-subtle);
  --bs-alert-border-color: var(--bs-primary-border-subtle);
  --bs-alert-link-color: var(--bs-primary-text-emphasis);
}

.alert-secondary {
  --bs-alert-color: var(--bs-secondary-text-emphasis);
  --bs-alert-bg: var(--bs-secondary-bg-subtle);
  --bs-alert-border-color: var(--bs-secondary-border-subtle);
  --bs-alert-link-color: var(--bs-secondary-text-emphasis);
}

.alert-success {
  --bs-alert-color: var(--bs-success-text-emphasis);
  --bs-alert-bg: var(--bs-success-bg-subtle);
  --bs-alert-border-color: var(--bs-success-border-subtle);
  --bs-alert-link-color: var(--bs-success-text-emphasis);
}

.alert-info {
  --bs-alert-color: var(--bs-info-text-emphasis);
  --bs-alert-bg: var(--bs-info-bg-subtle);
  --bs-alert-border-color: var(--bs-info-border-subtle);
  --bs-alert-link-color: var(--bs-info-text-emphasis);
}

.alert-warning {
  --bs-alert-color: var(--bs-warning-text-emphasis);
  --bs-alert-bg: var(--bs-warning-bg-subtle);
  --bs-alert-border-color: var(--bs-warning-border-subtle);
  --bs-alert-link-color: var(--bs-warning-text-emphasis);
}

.alert-danger {
  --bs-alert-color: var(--bs-danger-text-emphasis);
  --bs-alert-bg: var(--bs-danger-bg-subtle);
  --bs-alert-border-color: var(--bs-danger-border-subtle);
  --bs-alert-link-color: var(--bs-danger-text-emphasis);
}

.alert-light {
  --bs-alert-color: var(--bs-light-text-emphasis);
  --bs-alert-bg: var(--bs-light-bg-subtle);
  --bs-alert-border-color: var(--bs-light-border-subtle);
  --bs-alert-link-color: var(--bs-light-text-emphasis);
}

.alert-dark {
  --bs-alert-color: var(--bs-dark-text-emphasis);
  --bs-alert-bg: var(--bs-dark-bg-subtle);
  --bs-alert-border-color: var(--bs-dark-border-subtle);
  --bs-alert-link-color: var(--bs-dark-text-emphasis);
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.progress,
.progress-stacked {
  --bs-progress-height: 1rem;
  --bs-progress-font-size: 0.75rem;
  --bs-progress-bg: var(--bs-secondary-bg);
  --bs-progress-border-radius: var(--bs-border-radius);
  --bs-progress-box-shadow: var(--bs-box-shadow-inset);
  --bs-progress-bar-color: #fff;
  --bs-progress-bar-bg: #0d6efd;
  --bs-progress-bar-transition: width 0.6s ease;
  display: flex;
  height: var(--bs-progress-height);
  overflow: hidden;
  font-size: var(--bs-progress-font-size);
  background-color: var(--bs-progress-bg);
  border-radius: var(--bs-progress-border-radius);
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--bs-progress-bar-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-progress-bar-bg);
  transition: var(--bs-progress-bar-transition);
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: var(--bs-progress-height) var(--bs-progress-height);
}

.progress-stacked > .progress {
  overflow: visible;
}

.progress-stacked > .progress > .progress-bar {
  width: 100%;
}

.progress-bar-animated {
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    animation: none;
  }
}

.list-group {
  --bs-list-group-color: var(--bs-body-color);
  --bs-list-group-bg: var(--bs-body-bg);
  --bs-list-group-border-color: var(--bs-border-color);
  --bs-list-group-border-width: var(--bs-border-width);
  --bs-list-group-border-radius: var(--bs-border-radius);
  --bs-list-group-item-padding-x: 1rem;
  --bs-list-group-item-padding-y: 0.5rem;
  --bs-list-group-action-color: var(--bs-secondary-color);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-tertiary-bg);
  --bs-list-group-action-active-color: var(--bs-body-color);
  --bs-list-group-action-active-bg: var(--bs-secondary-bg);
  --bs-list-group-disabled-color: var(--bs-secondary-color);
  --bs-list-group-disabled-bg: var(--bs-body-bg);
  --bs-list-group-active-color: #fff;
  --bs-list-group-active-bg: #0d6efd;
  --bs-list-group-active-border-color: #0d6efd;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: var(--bs-list-group-border-radius);
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > .list-group-item::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: var(--bs-list-group-action-color);
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: var(--bs-list-group-action-hover-color);
  text-decoration: none;
  background-color: var(--bs-list-group-action-hover-bg);
}
.list-group-item-action:active {
  color: var(--bs-list-group-action-active-color);
  background-color: var(--bs-list-group-action-active-bg);
}

.list-group-item {
  position: relative;
  display: block;
  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
  color: var(--bs-list-group-color);
  text-decoration: none;
  background-color: var(--bs-list-group-bg);
  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: var(--bs-list-group-disabled-color);
  pointer-events: none;
  background-color: var(--bs-list-group-disabled-bg);
}
.list-group-item.active {
  z-index: 2;
  color: var(--bs-list-group-active-color);
  background-color: var(--bs-list-group-active-bg);
  border-color: var(--bs-list-group-active-border-color);
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: calc(-1 * var(--bs-list-group-border-width));
  border-top-width: var(--bs-list-group-border-width);
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 var(--bs-list-group-border-width);
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  --bs-list-group-color: var(--bs-primary-text-emphasis);
  --bs-list-group-bg: var(--bs-primary-bg-subtle);
  --bs-list-group-border-color: var(--bs-primary-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-primary-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-primary-border-subtle);
  --bs-list-group-active-color: var(--bs-primary-bg-subtle);
  --bs-list-group-active-bg: var(--bs-primary-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-primary-text-emphasis);
}

.list-group-item-secondary {
  --bs-list-group-color: var(--bs-secondary-text-emphasis);
  --bs-list-group-bg: var(--bs-secondary-bg-subtle);
  --bs-list-group-border-color: var(--bs-secondary-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-secondary-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-secondary-border-subtle);
  --bs-list-group-active-color: var(--bs-secondary-bg-subtle);
  --bs-list-group-active-bg: var(--bs-secondary-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-secondary-text-emphasis);
}

.list-group-item-success {
  --bs-list-group-color: var(--bs-success-text-emphasis);
  --bs-list-group-bg: var(--bs-success-bg-subtle);
  --bs-list-group-border-color: var(--bs-success-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-success-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-success-border-subtle);
  --bs-list-group-active-color: var(--bs-success-bg-subtle);
  --bs-list-group-active-bg: var(--bs-success-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-success-text-emphasis);
}

.list-group-item-info {
  --bs-list-group-color: var(--bs-info-text-emphasis);
  --bs-list-group-bg: var(--bs-info-bg-subtle);
  --bs-list-group-border-color: var(--bs-info-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-info-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-info-border-subtle);
  --bs-list-group-active-color: var(--bs-info-bg-subtle);
  --bs-list-group-active-bg: var(--bs-info-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-info-text-emphasis);
}

.list-group-item-warning {
  --bs-list-group-color: var(--bs-warning-text-emphasis);
  --bs-list-group-bg: var(--bs-warning-bg-subtle);
  --bs-list-group-border-color: var(--bs-warning-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-warning-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-warning-border-subtle);
  --bs-list-group-active-color: var(--bs-warning-bg-subtle);
  --bs-list-group-active-bg: var(--bs-warning-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-warning-text-emphasis);
}

.list-group-item-danger {
  --bs-list-group-color: var(--bs-danger-text-emphasis);
  --bs-list-group-bg: var(--bs-danger-bg-subtle);
  --bs-list-group-border-color: var(--bs-danger-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-danger-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-danger-border-subtle);
  --bs-list-group-active-color: var(--bs-danger-bg-subtle);
  --bs-list-group-active-bg: var(--bs-danger-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-danger-text-emphasis);
}

.list-group-item-light {
  --bs-list-group-color: var(--bs-light-text-emphasis);
  --bs-list-group-bg: var(--bs-light-bg-subtle);
  --bs-list-group-border-color: var(--bs-light-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-light-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-light-border-subtle);
  --bs-list-group-active-color: var(--bs-light-bg-subtle);
  --bs-list-group-active-bg: var(--bs-light-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-light-text-emphasis);
}

.list-group-item-dark {
  --bs-list-group-color: var(--bs-dark-text-emphasis);
  --bs-list-group-bg: var(--bs-dark-bg-subtle);
  --bs-list-group-border-color: var(--bs-dark-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-dark-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-dark-border-subtle);
  --bs-list-group-active-color: var(--bs-dark-bg-subtle);
  --bs-list-group-active-bg: var(--bs-dark-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-dark-text-emphasis);
}

.btn-close {
  --bs-btn-close-color: #000;
  --bs-btn-close-bg: url(${___CSS_LOADER_URL_REPLACEMENT_16___});
  --bs-btn-close-opacity: 0.5;
  --bs-btn-close-hover-opacity: 0.75;
  --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --bs-btn-close-focus-opacity: 1;
  --bs-btn-close-disabled-opacity: 0.25;
  --bs-btn-close-white-filter: invert(1) grayscale(100%) brightness(200%);
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: var(--bs-btn-close-color);
  background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat;
  border: 0;
  border-radius: 0.375rem;
  opacity: var(--bs-btn-close-opacity);
}
.btn-close:hover {
  color: var(--bs-btn-close-color);
  text-decoration: none;
  opacity: var(--bs-btn-close-hover-opacity);
}
.btn-close:focus {
  outline: 0;
  box-shadow: var(--bs-btn-close-focus-shadow);
  opacity: var(--bs-btn-close-focus-opacity);
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  user-select: none;
  opacity: var(--bs-btn-close-disabled-opacity);
}

.btn-close-white {
  filter: var(--bs-btn-close-white-filter);
}

[data-bs-theme=dark] .btn-close {
  filter: var(--bs-btn-close-white-filter);
}

.toast {
  --bs-toast-zindex: 1090;
  --bs-toast-padding-x: 0.75rem;
  --bs-toast-padding-y: 0.5rem;
  --bs-toast-spacing: 1.5rem;
  --bs-toast-max-width: 350px;
  --bs-toast-font-size: 0.875rem;
  --bs-toast-color: ;
  --bs-toast-bg: rgba(var(--bs-body-bg-rgb), 0.85);
  --bs-toast-border-width: var(--bs-border-width);
  --bs-toast-border-color: var(--bs-border-color-translucent);
  --bs-toast-border-radius: var(--bs-border-radius);
  --bs-toast-box-shadow: var(--bs-box-shadow);
  --bs-toast-header-color: var(--bs-secondary-color);
  --bs-toast-header-bg: rgba(var(--bs-body-bg-rgb), 0.85);
  --bs-toast-header-border-color: var(--bs-border-color-translucent);
  width: var(--bs-toast-max-width);
  max-width: 100%;
  font-size: var(--bs-toast-font-size);
  color: var(--bs-toast-color);
  pointer-events: auto;
  background-color: var(--bs-toast-bg);
  background-clip: padding-box;
  border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);
  box-shadow: var(--bs-toast-box-shadow);
  border-radius: var(--bs-toast-border-radius);
}
.toast.showing {
  opacity: 0;
}
.toast:not(.show) {
  display: none;
}

.toast-container {
  --bs-toast-zindex: 1090;
  position: absolute;
  z-index: var(--bs-toast-zindex);
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.toast-container > :not(:last-child) {
  margin-bottom: var(--bs-toast-spacing);
}

.toast-header {
  display: flex;
  align-items: center;
  padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);
  color: var(--bs-toast-header-color);
  background-color: var(--bs-toast-header-bg);
  background-clip: padding-box;
  border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);
  border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
  border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
}
.toast-header .btn-close {
  margin-right: calc(-0.5 * var(--bs-toast-padding-x));
  margin-left: var(--bs-toast-padding-x);
}

.toast-body {
  padding: var(--bs-toast-padding-x);
  word-wrap: break-word;
}

.modal {
  --bs-modal-zindex: 1055;
  --bs-modal-width: 500px;
  --bs-modal-padding: 1rem;
  --bs-modal-margin: 0.5rem;
  --bs-modal-color: ;
  --bs-modal-bg: var(--bs-body-bg);
  --bs-modal-border-color: var(--bs-border-color-translucent);
  --bs-modal-border-width: var(--bs-border-width);
  --bs-modal-border-radius: var(--bs-border-radius-lg);
  --bs-modal-box-shadow: var(--bs-box-shadow-sm);
  --bs-modal-inner-border-radius: calc(var(--bs-border-radius-lg) - (var(--bs-border-width)));
  --bs-modal-header-padding-x: 1rem;
  --bs-modal-header-padding-y: 1rem;
  --bs-modal-header-padding: 1rem 1rem;
  --bs-modal-header-border-color: var(--bs-border-color);
  --bs-modal-header-border-width: var(--bs-border-width);
  --bs-modal-title-line-height: 1.5;
  --bs-modal-footer-gap: 0.5rem;
  --bs-modal-footer-bg: ;
  --bs-modal-footer-border-color: var(--bs-border-color);
  --bs-modal-footer-border-width: var(--bs-border-width);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-modal-zindex);
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: var(--bs-modal-margin);
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - var(--bs-modal-margin) * 2);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - var(--bs-modal-margin) * 2);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--bs-modal-color);
  pointer-events: auto;
  background-color: var(--bs-modal-bg);
  background-clip: padding-box;
  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
  border-radius: var(--bs-modal-border-radius);
  outline: 0;
}

.modal-backdrop {
  --bs-backdrop-zindex: 1050;
  --bs-backdrop-bg: #000;
  --bs-backdrop-opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-backdrop-zindex);
  width: 100vw;
  height: 100vh;
  background-color: var(--bs-backdrop-bg);
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: var(--bs-backdrop-opacity);
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-modal-header-padding);
  border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
  border-top-left-radius: var(--bs-modal-inner-border-radius);
  border-top-right-radius: var(--bs-modal-inner-border-radius);
}
.modal-header .btn-close {
  padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5);
  margin: calc(-0.5 * var(--bs-modal-header-padding-y)) calc(-0.5 * var(--bs-modal-header-padding-x)) calc(-0.5 * var(--bs-modal-header-padding-y)) auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: var(--bs-modal-title-line-height);
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: var(--bs-modal-padding);
}

.modal-footer {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);
  background-color: var(--bs-modal-footer-bg);
  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
  border-bottom-right-radius: var(--bs-modal-inner-border-radius);
  border-bottom-left-radius: var(--bs-modal-inner-border-radius);
}
.modal-footer > * {
  margin: calc(var(--bs-modal-footer-gap) * 0.5);
}

@media (min-width: 576px) {
  .modal {
    --bs-modal-margin: 1.75rem;
    --bs-modal-box-shadow: var(--bs-box-shadow);
  }
  .modal-dialog {
    max-width: var(--bs-modal-width);
    margin-right: auto;
    margin-left: auto;
  }
  .modal-sm {
    --bs-modal-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    --bs-modal-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    --bs-modal-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header,
.modal-fullscreen .modal-footer {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header,
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header,
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header,
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header,
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-header,
  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
}
.tooltip {
  --bs-tooltip-zindex: 1080;
  --bs-tooltip-max-width: 200px;
  --bs-tooltip-padding-x: 0.5rem;
  --bs-tooltip-padding-y: 0.25rem;
  --bs-tooltip-margin: ;
  --bs-tooltip-font-size: 0.875rem;
  --bs-tooltip-color: var(--bs-body-bg);
  --bs-tooltip-bg: var(--bs-emphasis-color);
  --bs-tooltip-border-radius: var(--bs-border-radius);
  --bs-tooltip-opacity: 0.9;
  --bs-tooltip-arrow-width: 0.8rem;
  --bs-tooltip-arrow-height: 0.4rem;
  z-index: var(--bs-tooltip-zindex);
  display: block;
  margin: var(--bs-tooltip-margin);
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
  font-size: var(--bs-tooltip-font-size);
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: var(--bs-tooltip-opacity);
}
.tooltip .tooltip-arrow {
  display: block;
  width: var(--bs-tooltip-arrow-width);
  height: var(--bs-tooltip-arrow-height);
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: calc(-1 * var(--bs-tooltip-arrow-height));
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;
  border-top-color: var(--bs-tooltip-bg);
}

/* rtl:begin:ignore */
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: calc(-1 * var(--bs-tooltip-arrow-height));
  width: var(--bs-tooltip-arrow-height);
  height: var(--bs-tooltip-arrow-width);
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;
  border-right-color: var(--bs-tooltip-bg);
}

/* rtl:end:ignore */
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: calc(-1 * var(--bs-tooltip-arrow-height));
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);
  border-bottom-color: var(--bs-tooltip-bg);
}

/* rtl:begin:ignore */
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: calc(-1 * var(--bs-tooltip-arrow-height));
  width: var(--bs-tooltip-arrow-height);
  height: var(--bs-tooltip-arrow-width);
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);
  border-left-color: var(--bs-tooltip-bg);
}

/* rtl:end:ignore */
.tooltip-inner {
  max-width: var(--bs-tooltip-max-width);
  padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);
  color: var(--bs-tooltip-color);
  text-align: center;
  background-color: var(--bs-tooltip-bg);
  border-radius: var(--bs-tooltip-border-radius);
}

.popover {
  --bs-popover-zindex: 1070;
  --bs-popover-max-width: 276px;
  --bs-popover-font-size: 0.875rem;
  --bs-popover-bg: var(--bs-body-bg);
  --bs-popover-border-width: var(--bs-border-width);
  --bs-popover-border-color: var(--bs-border-color-translucent);
  --bs-popover-border-radius: var(--bs-border-radius-lg);
  --bs-popover-inner-border-radius: calc(var(--bs-border-radius-lg) - var(--bs-border-width));
  --bs-popover-box-shadow: var(--bs-box-shadow);
  --bs-popover-header-padding-x: 1rem;
  --bs-popover-header-padding-y: 0.5rem;
  --bs-popover-header-font-size: 1rem;
  --bs-popover-header-color: inherit;
  --bs-popover-header-bg: var(--bs-secondary-bg);
  --bs-popover-body-padding-x: 1rem;
  --bs-popover-body-padding-y: 1rem;
  --bs-popover-body-color: var(--bs-body-color);
  --bs-popover-arrow-width: 1rem;
  --bs-popover-arrow-height: 0.5rem;
  --bs-popover-arrow-border: var(--bs-popover-border-color);
  z-index: var(--bs-popover-zindex);
  display: block;
  max-width: var(--bs-popover-max-width);
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
  font-size: var(--bs-popover-font-size);
  word-wrap: break-word;
  background-color: var(--bs-popover-bg);
  background-clip: padding-box;
  border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
  border-radius: var(--bs-popover-border-radius);
}
.popover .popover-arrow {
  display: block;
  width: var(--bs-popover-arrow-width);
  height: var(--bs-popover-arrow-height);
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
  border-width: 0;
}

.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-top-color: var(--bs-popover-arrow-border);
}
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: var(--bs-popover-border-width);
  border-top-color: var(--bs-popover-bg);
}

/* rtl:begin:ignore */
.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
  width: var(--bs-popover-arrow-height);
  height: var(--bs-popover-arrow-width);
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-right-color: var(--bs-popover-arrow-border);
}
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: var(--bs-popover-border-width);
  border-right-color: var(--bs-popover-bg);
}

/* rtl:end:ignore */
.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-bottom-color: var(--bs-popover-arrow-border);
}
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: var(--bs-popover-border-width);
  border-bottom-color: var(--bs-popover-bg);
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: var(--bs-popover-arrow-width);
  margin-left: calc(-0.5 * var(--bs-popover-arrow-width));
  content: "";
  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg);
}

/* rtl:begin:ignore */
.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
  width: var(--bs-popover-arrow-height);
  height: var(--bs-popover-arrow-width);
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  border-width: calc(var(--bs-popover-arrow-width) * 0.5) 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-left-color: var(--bs-popover-arrow-border);
}
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: var(--bs-popover-border-width);
  border-left-color: var(--bs-popover-bg);
}

/* rtl:end:ignore */
.popover-header {
  padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);
  margin-bottom: 0;
  font-size: var(--bs-popover-header-font-size);
  color: var(--bs-popover-header-color);
  background-color: var(--bs-popover-header-bg);
  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
  border-top-left-radius: var(--bs-popover-inner-border-radius);
  border-top-right-radius: var(--bs-popover-inner-border-radius);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);
  color: var(--bs-popover-body-color);
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
  .carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
  .carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
.carousel-control-prev-icon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___});
}

.carousel-control-next-icon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___});
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #000;
}
.carousel-dark .carousel-caption {
  color: #000;
}

[data-bs-theme=dark] .carousel .carousel-control-prev-icon,
[data-bs-theme=dark] .carousel .carousel-control-next-icon, [data-bs-theme=dark].carousel .carousel-control-prev-icon,
[data-bs-theme=dark].carousel .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
[data-bs-theme=dark] .carousel .carousel-indicators [data-bs-target], [data-bs-theme=dark].carousel .carousel-indicators [data-bs-target] {
  background-color: #000;
}
[data-bs-theme=dark] .carousel .carousel-caption, [data-bs-theme=dark].carousel .carousel-caption {
  color: #000;
}

.spinner-grow,
.spinner-border {
  display: inline-block;
  width: var(--bs-spinner-width);
  height: var(--bs-spinner-height);
  vertical-align: var(--bs-spinner-vertical-align);
  border-radius: 50%;
  animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  --bs-spinner-width: 2rem;
  --bs-spinner-height: 2rem;
  --bs-spinner-vertical-align: -0.125em;
  --bs-spinner-border-width: 0.25em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-border;
  border: var(--bs-spinner-border-width) solid currentcolor;
  border-right-color: transparent;
}

.spinner-border-sm {
  --bs-spinner-width: 1rem;
  --bs-spinner-height: 1rem;
  --bs-spinner-border-width: 0.2em;
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  --bs-spinner-width: 2rem;
  --bs-spinner-height: 2rem;
  --bs-spinner-vertical-align: -0.125em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-grow;
  background-color: currentcolor;
  opacity: 0;
}

.spinner-grow-sm {
  --bs-spinner-width: 1rem;
  --bs-spinner-height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
  .spinner-grow {
    --bs-spinner-animation-speed: 1.5s;
  }
}
.offcanvas, .offcanvas-xxl, .offcanvas-xl, .offcanvas-lg, .offcanvas-md, .offcanvas-sm {
  --bs-offcanvas-zindex: 1045;
  --bs-offcanvas-width: 400px;
  --bs-offcanvas-height: 30vh;
  --bs-offcanvas-padding-x: 1rem;
  --bs-offcanvas-padding-y: 1rem;
  --bs-offcanvas-color: var(--bs-body-color);
  --bs-offcanvas-bg: var(--bs-body-bg);
  --bs-offcanvas-border-width: var(--bs-border-width);
  --bs-offcanvas-border-color: var(--bs-border-color-translucent);
  --bs-offcanvas-box-shadow: var(--bs-box-shadow-sm);
  --bs-offcanvas-transition: transform 0.3s ease-in-out;
  --bs-offcanvas-title-line-height: 1.5;
}

@media (max-width: 575.98px) {
  .offcanvas-sm {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-sm {
    transition: none;
  }
}
@media (max-width: 575.98px) {
  .offcanvas-sm.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-sm.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-sm.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-sm.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-sm.showing, .offcanvas-sm.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-sm.showing, .offcanvas-sm.hiding, .offcanvas-sm.show {
    visibility: visible;
  }
}
@media (min-width: 576px) {
  .offcanvas-sm {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-sm .offcanvas-header {
    display: none;
  }
  .offcanvas-sm .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 767.98px) {
  .offcanvas-md {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-md {
    transition: none;
  }
}
@media (max-width: 767.98px) {
  .offcanvas-md.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-md.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-md.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-md.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-md.showing, .offcanvas-md.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-md.showing, .offcanvas-md.hiding, .offcanvas-md.show {
    visibility: visible;
  }
}
@media (min-width: 768px) {
  .offcanvas-md {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-md .offcanvas-header {
    display: none;
  }
  .offcanvas-md .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 991.98px) {
  .offcanvas-lg {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-lg {
    transition: none;
  }
}
@media (max-width: 991.98px) {
  .offcanvas-lg.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-lg.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-lg.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-lg.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-lg.showing, .offcanvas-lg.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-lg.showing, .offcanvas-lg.hiding, .offcanvas-lg.show {
    visibility: visible;
  }
}
@media (min-width: 992px) {
  .offcanvas-lg {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-lg .offcanvas-header {
    display: none;
  }
  .offcanvas-lg .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 1199.98px) {
  .offcanvas-xl {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 1199.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-xl {
    transition: none;
  }
}
@media (max-width: 1199.98px) {
  .offcanvas-xl.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-xl.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-xl.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-xl.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-xl.showing, .offcanvas-xl.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-xl.showing, .offcanvas-xl.hiding, .offcanvas-xl.show {
    visibility: visible;
  }
}
@media (min-width: 1200px) {
  .offcanvas-xl {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-xl .offcanvas-header {
    display: none;
  }
  .offcanvas-xl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 1399.98px) {
  .offcanvas-xxl {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 1399.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-xxl {
    transition: none;
  }
}
@media (max-width: 1399.98px) {
  .offcanvas-xxl.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-xxl.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-xxl.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-xxl.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-xxl.showing, .offcanvas-xxl.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-xxl.showing, .offcanvas-xxl.hiding, .offcanvas-xxl.show {
    visibility: visible;
  }
}
@media (min-width: 1400px) {
  .offcanvas-xxl {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-xxl .offcanvas-header {
    display: none;
  }
  .offcanvas-xxl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

.offcanvas {
  position: fixed;
  bottom: 0;
  z-index: var(--bs-offcanvas-zindex);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--bs-offcanvas-color);
  visibility: hidden;
  background-color: var(--bs-offcanvas-bg);
  background-clip: padding-box;
  outline: 0;
  transition: var(--bs-offcanvas-transition);
}
@media (prefers-reduced-motion: reduce) {
  .offcanvas {
    transition: none;
  }
}
.offcanvas.offcanvas-start {
  top: 0;
  left: 0;
  width: var(--bs-offcanvas-width);
  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(-100%);
}
.offcanvas.offcanvas-end {
  top: 0;
  right: 0;
  width: var(--bs-offcanvas-width);
  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(100%);
}
.offcanvas.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(-100%);
}
.offcanvas.offcanvas-bottom {
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(100%);
}
.offcanvas.showing, .offcanvas.show:not(.hiding) {
  transform: none;
}
.offcanvas.showing, .offcanvas.hiding, .offcanvas.show {
  visibility: visible;
}

.offcanvas-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.offcanvas-backdrop.fade {
  opacity: 0;
}
.offcanvas-backdrop.show {
  opacity: 0.5;
}

.offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
}
.offcanvas-header .btn-close {
  padding: calc(var(--bs-offcanvas-padding-y) * 0.5) calc(var(--bs-offcanvas-padding-x) * 0.5);
  margin-top: calc(-0.5 * var(--bs-offcanvas-padding-y));
  margin-right: calc(-0.5 * var(--bs-offcanvas-padding-x));
  margin-bottom: calc(-0.5 * var(--bs-offcanvas-padding-y));
}

.offcanvas-title {
  margin-bottom: 0;
  line-height: var(--bs-offcanvas-title-line-height);
}

.offcanvas-body {
  flex-grow: 1;
  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
  overflow-y: auto;
}

.placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentcolor;
  opacity: 0.5;
}
.placeholder.btn::before {
  display: inline-block;
  content: "";
}

.placeholder-xs {
  min-height: 0.6em;
}

.placeholder-sm {
  min-height: 0.8em;
}

.placeholder-lg {
  min-height: 1.2em;
}

.placeholder-glow .placeholder {
  animation: placeholder-glow 2s ease-in-out infinite;
}

@keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}
.placeholder-wave {
  mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
  mask-size: 200% 100%;
  animation: placeholder-wave 2s linear infinite;
}

@keyframes placeholder-wave {
  100% {
    mask-position: -200% 0%;
  }
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.text-bg-primary {
  color: #fff !important;
  background-color: RGBA(var(--bs-primary-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-secondary {
  color: #fff !important;
  background-color: RGBA(var(--bs-secondary-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-success {
  color: #fff !important;
  background-color: RGBA(var(--bs-success-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-info {
  color: #000 !important;
  background-color: RGBA(var(--bs-info-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-warning {
  color: #000 !important;
  background-color: RGBA(var(--bs-warning-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-danger {
  color: #fff !important;
  background-color: RGBA(var(--bs-danger-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-light {
  color: #000 !important;
  background-color: RGBA(var(--bs-light-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-dark {
  color: #fff !important;
  background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1)) !important;
}

.link-primary {
  color: RGBA(var(--bs-primary-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-primary-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-primary:hover, .link-primary:focus {
  color: RGBA(10, 88, 202, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(10, 88, 202, var(--bs-link-underline-opacity, 1)) !important;
}

.link-secondary {
  color: RGBA(var(--bs-secondary-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-secondary-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-secondary:hover, .link-secondary:focus {
  color: RGBA(86, 94, 100, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(86, 94, 100, var(--bs-link-underline-opacity, 1)) !important;
}

.link-success {
  color: RGBA(var(--bs-success-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-success-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-success:hover, .link-success:focus {
  color: RGBA(20, 108, 67, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(20, 108, 67, var(--bs-link-underline-opacity, 1)) !important;
}

.link-info {
  color: RGBA(var(--bs-info-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-info-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-info:hover, .link-info:focus {
  color: RGBA(61, 213, 243, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(61, 213, 243, var(--bs-link-underline-opacity, 1)) !important;
}

.link-warning {
  color: RGBA(var(--bs-warning-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-warning-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-warning:hover, .link-warning:focus {
  color: RGBA(255, 205, 57, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(255, 205, 57, var(--bs-link-underline-opacity, 1)) !important;
}

.link-danger {
  color: RGBA(var(--bs-danger-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-danger-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-danger:hover, .link-danger:focus {
  color: RGBA(176, 42, 55, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(176, 42, 55, var(--bs-link-underline-opacity, 1)) !important;
}

.link-light {
  color: RGBA(var(--bs-light-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-light-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-light:hover, .link-light:focus {
  color: RGBA(249, 250, 251, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(249, 250, 251, var(--bs-link-underline-opacity, 1)) !important;
}

.link-dark {
  color: RGBA(var(--bs-dark-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-dark-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-dark:hover, .link-dark:focus {
  color: RGBA(26, 30, 33, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(26, 30, 33, var(--bs-link-underline-opacity, 1)) !important;
}

.link-body-emphasis {
  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-body-emphasis:hover, .link-body-emphasis:focus {
  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 0.75)) !important;
  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 0.75)) !important;
}

.focus-ring:focus {
  outline: 0;
  box-shadow: var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);
}

.icon-link {
  display: inline-flex;
  gap: 0.375rem;
  align-items: center;
  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 0.5));
  text-underline-offset: 0.25em;
  backface-visibility: hidden;
}
.icon-link > .bi {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  fill: currentcolor;
  transition: 0.2s ease-in-out transform;
}
@media (prefers-reduced-motion: reduce) {
  .icon-link > .bi {
    transition: none;
  }
}

.icon-link-hover:hover > .bi, .icon-link-hover:focus-visible > .bi {
  transform: var(--bs-icon-link-transform, translate3d(0.25em, 0, 0));
}

.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--bs-aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ratio-1x1 {
  --bs-aspect-ratio: 100%;
}

.ratio-4x3 {
  --bs-aspect-ratio: 75%;
}

.ratio-16x9 {
  --bs-aspect-ratio: 56.25%;
}

.ratio-21x9 {
  --bs-aspect-ratio: 42.8571428571%;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}

.sticky-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}

@media (min-width: 576px) {
  .sticky-sm-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-sm-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-md-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-lg-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .sticky-xl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-xl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sticky-xxl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-xxl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
.hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}

.vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
.visually-hidden:not(caption),
.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption) {
  position: absolute !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vr {
  display: inline-block;
  align-self: stretch;
  width: var(--bs-border-width);
  min-height: 1em;
  background-color: currentcolor;
  opacity: 0.25;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.float-start {
  float: left !important;
}

.float-end {
  float: right !important;
}

.float-none {
  float: none !important;
}

.object-fit-contain {
  object-fit: contain !important;
}

.object-fit-cover {
  object-fit: cover !important;
}

.object-fit-fill {
  object-fit: fill !important;
}

.object-fit-scale {
  object-fit: scale-down !important;
}

.object-fit-none {
  object-fit: none !important;
}

.opacity-0 {
  opacity: 0 !important;
}

.opacity-25 {
  opacity: 0.25 !important;
}

.opacity-50 {
  opacity: 0.5 !important;
}

.opacity-75 {
  opacity: 0.75 !important;
}

.opacity-100 {
  opacity: 1 !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.overflow-x-auto {
  overflow-x: auto !important;
}

.overflow-x-hidden {
  overflow-x: hidden !important;
}

.overflow-x-visible {
  overflow-x: visible !important;
}

.overflow-x-scroll {
  overflow-x: scroll !important;
}

.overflow-y-auto {
  overflow-y: auto !important;
}

.overflow-y-hidden {
  overflow-y: hidden !important;
}

.overflow-y-visible {
  overflow-y: visible !important;
}

.overflow-y-scroll {
  overflow-y: scroll !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-inline-grid {
  display: inline-grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.shadow {
  box-shadow: var(--bs-box-shadow) !important;
}

.shadow-sm {
  box-shadow: var(--bs-box-shadow-sm) !important;
}

.shadow-lg {
  box-shadow: var(--bs-box-shadow-lg) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.focus-ring-primary {
  --bs-focus-ring-color: rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-secondary {
  --bs-focus-ring-color: rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-success {
  --bs-focus-ring-color: rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-info {
  --bs-focus-ring-color: rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-warning {
  --bs-focus-ring-color: rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-danger {
  --bs-focus-ring-color: rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-light {
  --bs-focus-ring-color: rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-dark {
  --bs-focus-ring-color: rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity));
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.top-50 {
  top: 50% !important;
}

.top-100 {
  top: 100% !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-50 {
  bottom: 50% !important;
}

.bottom-100 {
  bottom: 100% !important;
}

.start-0 {
  left: 0 !important;
}

.start-50 {
  left: 50% !important;
}

.start-100 {
  left: 100% !important;
}

.end-0 {
  right: 0 !important;
}

.end-50 {
  right: 50% !important;
}

.end-100 {
  right: 100% !important;
}

.translate-middle {
  transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
}

.translate-middle-y {
  transform: translateY(-50%) !important;
}

.border {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-0 {
  border: 0 !important;
}

.border-top {
  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-end {
  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-bottom {
  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-start {
  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-primary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;
}

.border-secondary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;
}

.border-success {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
}

.border-info {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;
}

.border-warning {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;
}

.border-danger {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;
}

.border-light {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;
}

.border-dark {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;
}

.border-black {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-black-rgb), var(--bs-border-opacity)) !important;
}

.border-white {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;
}

.border-primary-subtle {
  border-color: var(--bs-primary-border-subtle) !important;
}

.border-secondary-subtle {
  border-color: var(--bs-secondary-border-subtle) !important;
}

.border-success-subtle {
  border-color: var(--bs-success-border-subtle) !important;
}

.border-info-subtle {
  border-color: var(--bs-info-border-subtle) !important;
}

.border-warning-subtle {
  border-color: var(--bs-warning-border-subtle) !important;
}

.border-danger-subtle {
  border-color: var(--bs-danger-border-subtle) !important;
}

.border-light-subtle {
  border-color: var(--bs-light-border-subtle) !important;
}

.border-dark-subtle {
  border-color: var(--bs-dark-border-subtle) !important;
}

.border-1 {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-3 {
  border-width: 3px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-5 {
  border-width: 5px !important;
}

.border-opacity-10 {
  --bs-border-opacity: 0.1;
}

.border-opacity-25 {
  --bs-border-opacity: 0.25;
}

.border-opacity-50 {
  --bs-border-opacity: 0.5;
}

.border-opacity-75 {
  --bs-border-opacity: 0.75;
}

.border-opacity-100 {
  --bs-border-opacity: 1;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.vw-100 {
  width: 100vw !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mh-100 {
  max-height: 100% !important;
}

.vh-100 {
  height: 100vh !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}

.me-5 {
  margin-right: 3rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.ms-5 {
  margin-left: 3rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-1 {
  padding-right: 0.25rem !important;
}

.pe-2 {
  padding-right: 0.5rem !important;
}

.pe-3 {
  padding-right: 1rem !important;
}

.pe-4 {
  padding-right: 1.5rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-1 {
  padding-left: 0.25rem !important;
}

.ps-2 {
  padding-left: 0.5rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}

.ps-4 {
  padding-left: 1.5rem !important;
}

.ps-5 {
  padding-left: 3rem !important;
}

.gap-0 {
  gap: 0 !important;
}

.gap-1 {
  gap: 0.25rem !important;
}

.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 1rem !important;
}

.gap-4 {
  gap: 1.5rem !important;
}

.gap-5 {
  gap: 3rem !important;
}

.row-gap-0 {
  row-gap: 0 !important;
}

.row-gap-1 {
  row-gap: 0.25rem !important;
}

.row-gap-2 {
  row-gap: 0.5rem !important;
}

.row-gap-3 {
  row-gap: 1rem !important;
}

.row-gap-4 {
  row-gap: 1.5rem !important;
}

.row-gap-5 {
  row-gap: 3rem !important;
}

.column-gap-0 {
  column-gap: 0 !important;
}

.column-gap-1 {
  column-gap: 0.25rem !important;
}

.column-gap-2 {
  column-gap: 0.5rem !important;
}

.column-gap-3 {
  column-gap: 1rem !important;
}

.column-gap-4 {
  column-gap: 1.5rem !important;
}

.column-gap-5 {
  column-gap: 3rem !important;
}

.font-monospace {
  font-family: var(--bs-font-monospace) !important;
}

.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}

.fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}

.fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}

.fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-5 {
  font-size: 1.25rem !important;
}

.fs-6 {
  font-size: 1rem !important;
}

.fst-italic {
  font-style: italic !important;
}

.fst-normal {
  font-style: normal !important;
}

.fw-lighter {
  font-weight: lighter !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.fw-medium {
  font-weight: 500 !important;
}

.fw-semibold {
  font-weight: 600 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-bolder {
  font-weight: bolder !important;
}

.lh-1 {
  line-height: 1 !important;
}

.lh-sm {
  line-height: 1.25 !important;
}

.lh-base {
  line-height: 1.5 !important;
}

.lh-lg {
  line-height: 2 !important;
}

.text-start {
  text-align: left !important;
}

.text-end {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}

.text-secondary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}

.text-success {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}

.text-info {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}

.text-warning {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
}

.text-danger {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}

.text-light {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}

.text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}

.text-black {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
}

.text-white {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}

.text-body {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: var(--bs-secondary-color) !important;
}

.text-black-50 {
  --bs-text-opacity: 1;
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-body-secondary {
  --bs-text-opacity: 1;
  color: var(--bs-secondary-color) !important;
}

.text-body-tertiary {
  --bs-text-opacity: 1;
  color: var(--bs-tertiary-color) !important;
}

.text-body-emphasis {
  --bs-text-opacity: 1;
  color: var(--bs-emphasis-color) !important;
}

.text-reset {
  --bs-text-opacity: 1;
  color: inherit !important;
}

.text-opacity-25 {
  --bs-text-opacity: 0.25;
}

.text-opacity-50 {
  --bs-text-opacity: 0.5;
}

.text-opacity-75 {
  --bs-text-opacity: 0.75;
}

.text-opacity-100 {
  --bs-text-opacity: 1;
}

.text-primary-emphasis {
  color: var(--bs-primary-text-emphasis) !important;
}

.text-secondary-emphasis {
  color: var(--bs-secondary-text-emphasis) !important;
}

.text-success-emphasis {
  color: var(--bs-success-text-emphasis) !important;
}

.text-info-emphasis {
  color: var(--bs-info-text-emphasis) !important;
}

.text-warning-emphasis {
  color: var(--bs-warning-text-emphasis) !important;
}

.text-danger-emphasis {
  color: var(--bs-danger-text-emphasis) !important;
}

.text-light-emphasis {
  color: var(--bs-light-text-emphasis) !important;
}

.text-dark-emphasis {
  color: var(--bs-dark-text-emphasis) !important;
}

.link-opacity-10 {
  --bs-link-opacity: 0.1;
}

.link-opacity-10-hover:hover {
  --bs-link-opacity: 0.1;
}

.link-opacity-25 {
  --bs-link-opacity: 0.25;
}

.link-opacity-25-hover:hover {
  --bs-link-opacity: 0.25;
}

.link-opacity-50 {
  --bs-link-opacity: 0.5;
}

.link-opacity-50-hover:hover {
  --bs-link-opacity: 0.5;
}

.link-opacity-75 {
  --bs-link-opacity: 0.75;
}

.link-opacity-75-hover:hover {
  --bs-link-opacity: 0.75;
}

.link-opacity-100 {
  --bs-link-opacity: 1;
}

.link-opacity-100-hover:hover {
  --bs-link-opacity: 1;
}

.link-offset-1 {
  text-underline-offset: 0.125em !important;
}

.link-offset-1-hover:hover {
  text-underline-offset: 0.125em !important;
}

.link-offset-2 {
  text-underline-offset: 0.25em !important;
}

.link-offset-2-hover:hover {
  text-underline-offset: 0.25em !important;
}

.link-offset-3 {
  text-underline-offset: 0.375em !important;
}

.link-offset-3-hover:hover {
  text-underline-offset: 0.375em !important;
}

.link-underline-primary {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-primary-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-secondary {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-secondary-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-success {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-success-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-info {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-info-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-warning {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-warning-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-danger {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-danger-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-light {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-light-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-dark {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-dark-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-underline-opacity, 1)) !important;
}

.link-underline-opacity-0 {
  --bs-link-underline-opacity: 0;
}

.link-underline-opacity-0-hover:hover {
  --bs-link-underline-opacity: 0;
}

.link-underline-opacity-10 {
  --bs-link-underline-opacity: 0.1;
}

.link-underline-opacity-10-hover:hover {
  --bs-link-underline-opacity: 0.1;
}

.link-underline-opacity-25 {
  --bs-link-underline-opacity: 0.25;
}

.link-underline-opacity-25-hover:hover {
  --bs-link-underline-opacity: 0.25;
}

.link-underline-opacity-50 {
  --bs-link-underline-opacity: 0.5;
}

.link-underline-opacity-50-hover:hover {
  --bs-link-underline-opacity: 0.5;
}

.link-underline-opacity-75 {
  --bs-link-underline-opacity: 0.75;
}

.link-underline-opacity-75-hover:hover {
  --bs-link-underline-opacity: 0.75;
}

.link-underline-opacity-100 {
  --bs-link-underline-opacity: 1;
}

.link-underline-opacity-100-hover:hover {
  --bs-link-underline-opacity: 1;
}

.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}

.bg-info {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}

.bg-warning {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}

.bg-danger {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}

.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.bg-dark {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}

.bg-black {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
}

.bg-white {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}

.bg-body {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-transparent {
  --bs-bg-opacity: 1;
  background-color: transparent !important;
}

.bg-body-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-body-tertiary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-opacity-10 {
  --bs-bg-opacity: 0.1;
}

.bg-opacity-25 {
  --bs-bg-opacity: 0.25;
}

.bg-opacity-50 {
  --bs-bg-opacity: 0.5;
}

.bg-opacity-75 {
  --bs-bg-opacity: 0.75;
}

.bg-opacity-100 {
  --bs-bg-opacity: 1;
}

.bg-primary-subtle {
  background-color: var(--bs-primary-bg-subtle) !important;
}

.bg-secondary-subtle {
  background-color: var(--bs-secondary-bg-subtle) !important;
}

.bg-success-subtle {
  background-color: var(--bs-success-bg-subtle) !important;
}

.bg-info-subtle {
  background-color: var(--bs-info-bg-subtle) !important;
}

.bg-warning-subtle {
  background-color: var(--bs-warning-bg-subtle) !important;
}

.bg-danger-subtle {
  background-color: var(--bs-danger-bg-subtle) !important;
}

.bg-light-subtle {
  background-color: var(--bs-light-bg-subtle) !important;
}

.bg-dark-subtle {
  background-color: var(--bs-dark-bg-subtle) !important;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.user-select-all {
  user-select: all !important;
}

.user-select-auto {
  user-select: auto !important;
}

.user-select-none {
  user-select: none !important;
}

.pe-none {
  pointer-events: none !important;
}

.pe-auto {
  pointer-events: auto !important;
}

.rounded {
  border-radius: var(--bs-border-radius) !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-1 {
  border-radius: var(--bs-border-radius-sm) !important;
}

.rounded-2 {
  border-radius: var(--bs-border-radius) !important;
}

.rounded-3 {
  border-radius: var(--bs-border-radius-lg) !important;
}

.rounded-4 {
  border-radius: var(--bs-border-radius-xl) !important;
}

.rounded-5 {
  border-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: var(--bs-border-radius-pill) !important;
}

.rounded-top {
  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}

.rounded-top-0 {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.rounded-top-1 {
  border-top-left-radius: var(--bs-border-radius-sm) !important;
  border-top-right-radius: var(--bs-border-radius-sm) !important;
}

.rounded-top-2 {
  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}

.rounded-top-3 {
  border-top-left-radius: var(--bs-border-radius-lg) !important;
  border-top-right-radius: var(--bs-border-radius-lg) !important;
}

.rounded-top-4 {
  border-top-left-radius: var(--bs-border-radius-xl) !important;
  border-top-right-radius: var(--bs-border-radius-xl) !important;
}

.rounded-top-5 {
  border-top-left-radius: var(--bs-border-radius-xxl) !important;
  border-top-right-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-top-circle {
  border-top-left-radius: 50% !important;
  border-top-right-radius: 50% !important;
}

.rounded-top-pill {
  border-top-left-radius: var(--bs-border-radius-pill) !important;
  border-top-right-radius: var(--bs-border-radius-pill) !important;
}

.rounded-end {
  border-top-right-radius: var(--bs-border-radius) !important;
  border-bottom-right-radius: var(--bs-border-radius) !important;
}

.rounded-end-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.rounded-end-1 {
  border-top-right-radius: var(--bs-border-radius-sm) !important;
  border-bottom-right-radius: var(--bs-border-radius-sm) !important;
}

.rounded-end-2 {
  border-top-right-radius: var(--bs-border-radius) !important;
  border-bottom-right-radius: var(--bs-border-radius) !important;
}

.rounded-end-3 {
  border-top-right-radius: var(--bs-border-radius-lg) !important;
  border-bottom-right-radius: var(--bs-border-radius-lg) !important;
}

.rounded-end-4 {
  border-top-right-radius: var(--bs-border-radius-xl) !important;
  border-bottom-right-radius: var(--bs-border-radius-xl) !important;
}

.rounded-end-5 {
  border-top-right-radius: var(--bs-border-radius-xxl) !important;
  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-end-circle {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}

.rounded-end-pill {
  border-top-right-radius: var(--bs-border-radius-pill) !important;
  border-bottom-right-radius: var(--bs-border-radius-pill) !important;
}

.rounded-bottom {
  border-bottom-right-radius: var(--bs-border-radius) !important;
  border-bottom-left-radius: var(--bs-border-radius) !important;
}

.rounded-bottom-0 {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.rounded-bottom-1 {
  border-bottom-right-radius: var(--bs-border-radius-sm) !important;
  border-bottom-left-radius: var(--bs-border-radius-sm) !important;
}

.rounded-bottom-2 {
  border-bottom-right-radius: var(--bs-border-radius) !important;
  border-bottom-left-radius: var(--bs-border-radius) !important;
}

.rounded-bottom-3 {
  border-bottom-right-radius: var(--bs-border-radius-lg) !important;
  border-bottom-left-radius: var(--bs-border-radius-lg) !important;
}

.rounded-bottom-4 {
  border-bottom-right-radius: var(--bs-border-radius-xl) !important;
  border-bottom-left-radius: var(--bs-border-radius-xl) !important;
}

.rounded-bottom-5 {
  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;
  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-bottom-circle {
  border-bottom-right-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}

.rounded-bottom-pill {
  border-bottom-right-radius: var(--bs-border-radius-pill) !important;
  border-bottom-left-radius: var(--bs-border-radius-pill) !important;
}

.rounded-start {
  border-bottom-left-radius: var(--bs-border-radius) !important;
  border-top-left-radius: var(--bs-border-radius) !important;
}

.rounded-start-0 {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
}

.rounded-start-1 {
  border-bottom-left-radius: var(--bs-border-radius-sm) !important;
  border-top-left-radius: var(--bs-border-radius-sm) !important;
}

.rounded-start-2 {
  border-bottom-left-radius: var(--bs-border-radius) !important;
  border-top-left-radius: var(--bs-border-radius) !important;
}

.rounded-start-3 {
  border-bottom-left-radius: var(--bs-border-radius-lg) !important;
  border-top-left-radius: var(--bs-border-radius-lg) !important;
}

.rounded-start-4 {
  border-bottom-left-radius: var(--bs-border-radius-xl) !important;
  border-top-left-radius: var(--bs-border-radius-xl) !important;
}

.rounded-start-5 {
  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;
  border-top-left-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-start-circle {
  border-bottom-left-radius: 50% !important;
  border-top-left-radius: 50% !important;
}

.rounded-start-pill {
  border-bottom-left-radius: var(--bs-border-radius-pill) !important;
  border-top-left-radius: var(--bs-border-radius-pill) !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

.z-n1 {
  z-index: -1 !important;
}

.z-0 {
  z-index: 0 !important;
}

.z-1 {
  z-index: 1 !important;
}

.z-2 {
  z-index: 2 !important;
}

.z-3 {
  z-index: 3 !important;
}

@media (min-width: 576px) {
  .float-sm-start {
    float: left !important;
  }
  .float-sm-end {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
  .object-fit-sm-contain {
    object-fit: contain !important;
  }
  .object-fit-sm-cover {
    object-fit: cover !important;
  }
  .object-fit-sm-fill {
    object-fit: fill !important;
  }
  .object-fit-sm-scale {
    object-fit: scale-down !important;
  }
  .object-fit-sm-none {
    object-fit: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-grid {
    display: grid !important;
  }
  .d-sm-inline-grid {
    display: inline-grid !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
  .d-sm-none {
    display: none !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-between {
    align-content: space-between !important;
  }
  .align-content-sm-around {
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
  .order-sm-first {
    order: -1 !important;
  }
  .order-sm-0 {
    order: 0 !important;
  }
  .order-sm-1 {
    order: 1 !important;
  }
  .order-sm-2 {
    order: 2 !important;
  }
  .order-sm-3 {
    order: 3 !important;
  }
  .order-sm-4 {
    order: 4 !important;
  }
  .order-sm-5 {
    order: 5 !important;
  }
  .order-sm-last {
    order: 6 !important;
  }
  .m-sm-0 {
    margin: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-sm-0 {
    margin-top: 0 !important;
  }
  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mt-sm-3 {
    margin-top: 1rem !important;
  }
  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mt-sm-5 {
    margin-top: 3rem !important;
  }
  .mt-sm-auto {
    margin-top: auto !important;
  }
  .me-sm-0 {
    margin-right: 0 !important;
  }
  .me-sm-1 {
    margin-right: 0.25rem !important;
  }
  .me-sm-2 {
    margin-right: 0.5rem !important;
  }
  .me-sm-3 {
    margin-right: 1rem !important;
  }
  .me-sm-4 {
    margin-right: 1.5rem !important;
  }
  .me-sm-5 {
    margin-right: 3rem !important;
  }
  .me-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-0 {
    margin-bottom: 0 !important;
  }
  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }
  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }
  .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .ms-sm-0 {
    margin-left: 0 !important;
  }
  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }
  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }
  .ms-sm-3 {
    margin-left: 1rem !important;
  }
  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }
  .ms-sm-5 {
    margin-left: 3rem !important;
  }
  .ms-sm-auto {
    margin-left: auto !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem !important;
  }
  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-sm-0 {
    padding-top: 0 !important;
  }
  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pt-sm-3 {
    padding-top: 1rem !important;
  }
  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pt-sm-5 {
    padding-top: 3rem !important;
  }
  .pe-sm-0 {
    padding-right: 0 !important;
  }
  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pe-sm-3 {
    padding-right: 1rem !important;
  }
  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pe-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-0 {
    padding-bottom: 0 !important;
  }
  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }
  .ps-sm-0 {
    padding-left: 0 !important;
  }
  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }
  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }
  .ps-sm-3 {
    padding-left: 1rem !important;
  }
  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }
  .ps-sm-5 {
    padding-left: 3rem !important;
  }
  .gap-sm-0 {
    gap: 0 !important;
  }
  .gap-sm-1 {
    gap: 0.25rem !important;
  }
  .gap-sm-2 {
    gap: 0.5rem !important;
  }
  .gap-sm-3 {
    gap: 1rem !important;
  }
  .gap-sm-4 {
    gap: 1.5rem !important;
  }
  .gap-sm-5 {
    gap: 3rem !important;
  }
  .row-gap-sm-0 {
    row-gap: 0 !important;
  }
  .row-gap-sm-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-sm-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-sm-3 {
    row-gap: 1rem !important;
  }
  .row-gap-sm-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-sm-5 {
    row-gap: 3rem !important;
  }
  .column-gap-sm-0 {
    column-gap: 0 !important;
  }
  .column-gap-sm-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-sm-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-sm-3 {
    column-gap: 1rem !important;
  }
  .column-gap-sm-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-sm-5 {
    column-gap: 3rem !important;
  }
  .text-sm-start {
    text-align: left !important;
  }
  .text-sm-end {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }
  .float-md-end {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
  .object-fit-md-contain {
    object-fit: contain !important;
  }
  .object-fit-md-cover {
    object-fit: cover !important;
  }
  .object-fit-md-fill {
    object-fit: fill !important;
  }
  .object-fit-md-scale {
    object-fit: scale-down !important;
  }
  .object-fit-md-none {
    object-fit: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-grid {
    display: grid !important;
  }
  .d-md-inline-grid {
    display: inline-grid !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
  .d-md-none {
    display: none !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-between {
    align-content: space-between !important;
  }
  .align-content-md-around {
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
  .order-md-first {
    order: -1 !important;
  }
  .order-md-0 {
    order: 0 !important;
  }
  .order-md-1 {
    order: 1 !important;
  }
  .order-md-2 {
    order: 2 !important;
  }
  .order-md-3 {
    order: 3 !important;
  }
  .order-md-4 {
    order: 4 !important;
  }
  .order-md-5 {
    order: 5 !important;
  }
  .order-md-last {
    order: 6 !important;
  }
  .m-md-0 {
    margin: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-md-0 {
    margin-top: 0 !important;
  }
  .mt-md-1 {
    margin-top: 0.25rem !important;
  }
  .mt-md-2 {
    margin-top: 0.5rem !important;
  }
  .mt-md-3 {
    margin-top: 1rem !important;
  }
  .mt-md-4 {
    margin-top: 1.5rem !important;
  }
  .mt-md-5 {
    margin-top: 3rem !important;
  }
  .mt-md-auto {
    margin-top: auto !important;
  }
  .me-md-0 {
    margin-right: 0 !important;
  }
  .me-md-1 {
    margin-right: 0.25rem !important;
  }
  .me-md-2 {
    margin-right: 0.5rem !important;
  }
  .me-md-3 {
    margin-right: 1rem !important;
  }
  .me-md-4 {
    margin-right: 1.5rem !important;
  }
  .me-md-5 {
    margin-right: 3rem !important;
  }
  .me-md-auto {
    margin-right: auto !important;
  }
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-md-3 {
    margin-bottom: 1rem !important;
  }
  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-md-5 {
    margin-bottom: 3rem !important;
  }
  .mb-md-auto {
    margin-bottom: auto !important;
  }
  .ms-md-0 {
    margin-left: 0 !important;
  }
  .ms-md-1 {
    margin-left: 0.25rem !important;
  }
  .ms-md-2 {
    margin-left: 0.5rem !important;
  }
  .ms-md-3 {
    margin-left: 1rem !important;
  }
  .ms-md-4 {
    margin-left: 1.5rem !important;
  }
  .ms-md-5 {
    margin-left: 3rem !important;
  }
  .ms-md-auto {
    margin-left: auto !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem !important;
  }
  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-md-0 {
    padding-top: 0 !important;
  }
  .pt-md-1 {
    padding-top: 0.25rem !important;
  }
  .pt-md-2 {
    padding-top: 0.5rem !important;
  }
  .pt-md-3 {
    padding-top: 1rem !important;
  }
  .pt-md-4 {
    padding-top: 1.5rem !important;
  }
  .pt-md-5 {
    padding-top: 3rem !important;
  }
  .pe-md-0 {
    padding-right: 0 !important;
  }
  .pe-md-1 {
    padding-right: 0.25rem !important;
  }
  .pe-md-2 {
    padding-right: 0.5rem !important;
  }
  .pe-md-3 {
    padding-right: 1rem !important;
  }
  .pe-md-4 {
    padding-right: 1.5rem !important;
  }
  .pe-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-0 {
    padding-bottom: 0 !important;
  }
  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-md-3 {
    padding-bottom: 1rem !important;
  }
  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-md-5 {
    padding-bottom: 3rem !important;
  }
  .ps-md-0 {
    padding-left: 0 !important;
  }
  .ps-md-1 {
    padding-left: 0.25rem !important;
  }
  .ps-md-2 {
    padding-left: 0.5rem !important;
  }
  .ps-md-3 {
    padding-left: 1rem !important;
  }
  .ps-md-4 {
    padding-left: 1.5rem !important;
  }
  .ps-md-5 {
    padding-left: 3rem !important;
  }
  .gap-md-0 {
    gap: 0 !important;
  }
  .gap-md-1 {
    gap: 0.25rem !important;
  }
  .gap-md-2 {
    gap: 0.5rem !important;
  }
  .gap-md-3 {
    gap: 1rem !important;
  }
  .gap-md-4 {
    gap: 1.5rem !important;
  }
  .gap-md-5 {
    gap: 3rem !important;
  }
  .row-gap-md-0 {
    row-gap: 0 !important;
  }
  .row-gap-md-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-md-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-md-3 {
    row-gap: 1rem !important;
  }
  .row-gap-md-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-md-5 {
    row-gap: 3rem !important;
  }
  .column-gap-md-0 {
    column-gap: 0 !important;
  }
  .column-gap-md-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-md-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-md-3 {
    column-gap: 1rem !important;
  }
  .column-gap-md-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-md-5 {
    column-gap: 3rem !important;
  }
  .text-md-start {
    text-align: left !important;
  }
  .text-md-end {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }
  .float-lg-end {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
  .object-fit-lg-contain {
    object-fit: contain !important;
  }
  .object-fit-lg-cover {
    object-fit: cover !important;
  }
  .object-fit-lg-fill {
    object-fit: fill !important;
  }
  .object-fit-lg-scale {
    object-fit: scale-down !important;
  }
  .object-fit-lg-none {
    object-fit: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-grid {
    display: grid !important;
  }
  .d-lg-inline-grid {
    display: inline-grid !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
  .d-lg-none {
    display: none !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-between {
    align-content: space-between !important;
  }
  .align-content-lg-around {
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
  .order-lg-first {
    order: -1 !important;
  }
  .order-lg-0 {
    order: 0 !important;
  }
  .order-lg-1 {
    order: 1 !important;
  }
  .order-lg-2 {
    order: 2 !important;
  }
  .order-lg-3 {
    order: 3 !important;
  }
  .order-lg-4 {
    order: 4 !important;
  }
  .order-lg-5 {
    order: 5 !important;
  }
  .order-lg-last {
    order: 6 !important;
  }
  .m-lg-0 {
    margin: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-lg-0 {
    margin-top: 0 !important;
  }
  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mt-lg-3 {
    margin-top: 1rem !important;
  }
  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mt-lg-5 {
    margin-top: 3rem !important;
  }
  .mt-lg-auto {
    margin-top: auto !important;
  }
  .me-lg-0 {
    margin-right: 0 !important;
  }
  .me-lg-1 {
    margin-right: 0.25rem !important;
  }
  .me-lg-2 {
    margin-right: 0.5rem !important;
  }
  .me-lg-3 {
    margin-right: 1rem !important;
  }
  .me-lg-4 {
    margin-right: 1.5rem !important;
  }
  .me-lg-5 {
    margin-right: 3rem !important;
  }
  .me-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-0 {
    margin-bottom: 0 !important;
  }
  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }
  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }
  .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .ms-lg-0 {
    margin-left: 0 !important;
  }
  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }
  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }
  .ms-lg-3 {
    margin-left: 1rem !important;
  }
  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }
  .ms-lg-5 {
    margin-left: 3rem !important;
  }
  .ms-lg-auto {
    margin-left: auto !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-lg-0 {
    padding-top: 0 !important;
  }
  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pt-lg-3 {
    padding-top: 1rem !important;
  }
  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pt-lg-5 {
    padding-top: 3rem !important;
  }
  .pe-lg-0 {
    padding-right: 0 !important;
  }
  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pe-lg-3 {
    padding-right: 1rem !important;
  }
  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pe-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-0 {
    padding-bottom: 0 !important;
  }
  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }
  .ps-lg-0 {
    padding-left: 0 !important;
  }
  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }
  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }
  .ps-lg-3 {
    padding-left: 1rem !important;
  }
  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }
  .ps-lg-5 {
    padding-left: 3rem !important;
  }
  .gap-lg-0 {
    gap: 0 !important;
  }
  .gap-lg-1 {
    gap: 0.25rem !important;
  }
  .gap-lg-2 {
    gap: 0.5rem !important;
  }
  .gap-lg-3 {
    gap: 1rem !important;
  }
  .gap-lg-4 {
    gap: 1.5rem !important;
  }
  .gap-lg-5 {
    gap: 3rem !important;
  }
  .row-gap-lg-0 {
    row-gap: 0 !important;
  }
  .row-gap-lg-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-lg-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-lg-3 {
    row-gap: 1rem !important;
  }
  .row-gap-lg-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-lg-5 {
    row-gap: 3rem !important;
  }
  .column-gap-lg-0 {
    column-gap: 0 !important;
  }
  .column-gap-lg-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-lg-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-lg-3 {
    column-gap: 1rem !important;
  }
  .column-gap-lg-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-lg-5 {
    column-gap: 3rem !important;
  }
  .text-lg-start {
    text-align: left !important;
  }
  .text-lg-end {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-start {
    float: left !important;
  }
  .float-xl-end {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
  .object-fit-xl-contain {
    object-fit: contain !important;
  }
  .object-fit-xl-cover {
    object-fit: cover !important;
  }
  .object-fit-xl-fill {
    object-fit: fill !important;
  }
  .object-fit-xl-scale {
    object-fit: scale-down !important;
  }
  .object-fit-xl-none {
    object-fit: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-grid {
    display: grid !important;
  }
  .d-xl-inline-grid {
    display: inline-grid !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
  .d-xl-none {
    display: none !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-between {
    align-content: space-between !important;
  }
  .align-content-xl-around {
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
  .order-xl-first {
    order: -1 !important;
  }
  .order-xl-0 {
    order: 0 !important;
  }
  .order-xl-1 {
    order: 1 !important;
  }
  .order-xl-2 {
    order: 2 !important;
  }
  .order-xl-3 {
    order: 3 !important;
  }
  .order-xl-4 {
    order: 4 !important;
  }
  .order-xl-5 {
    order: 5 !important;
  }
  .order-xl-last {
    order: 6 !important;
  }
  .m-xl-0 {
    margin: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xl-0 {
    margin-top: 0 !important;
  }
  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mt-xl-3 {
    margin-top: 1rem !important;
  }
  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mt-xl-5 {
    margin-top: 3rem !important;
  }
  .mt-xl-auto {
    margin-top: auto !important;
  }
  .me-xl-0 {
    margin-right: 0 !important;
  }
  .me-xl-1 {
    margin-right: 0.25rem !important;
  }
  .me-xl-2 {
    margin-right: 0.5rem !important;
  }
  .me-xl-3 {
    margin-right: 1rem !important;
  }
  .me-xl-4 {
    margin-right: 1.5rem !important;
  }
  .me-xl-5 {
    margin-right: 3rem !important;
  }
  .me-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }
  .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .ms-xl-0 {
    margin-left: 0 !important;
  }
  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }
  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }
  .ms-xl-3 {
    margin-left: 1rem !important;
  }
  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }
  .ms-xl-5 {
    margin-left: 3rem !important;
  }
  .ms-xl-auto {
    margin-left: auto !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-xl-0 {
    padding-top: 0 !important;
  }
  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pt-xl-3 {
    padding-top: 1rem !important;
  }
  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pt-xl-5 {
    padding-top: 3rem !important;
  }
  .pe-xl-0 {
    padding-right: 0 !important;
  }
  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pe-xl-3 {
    padding-right: 1rem !important;
  }
  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pe-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }
  .ps-xl-0 {
    padding-left: 0 !important;
  }
  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }
  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }
  .ps-xl-3 {
    padding-left: 1rem !important;
  }
  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }
  .ps-xl-5 {
    padding-left: 3rem !important;
  }
  .gap-xl-0 {
    gap: 0 !important;
  }
  .gap-xl-1 {
    gap: 0.25rem !important;
  }
  .gap-xl-2 {
    gap: 0.5rem !important;
  }
  .gap-xl-3 {
    gap: 1rem !important;
  }
  .gap-xl-4 {
    gap: 1.5rem !important;
  }
  .gap-xl-5 {
    gap: 3rem !important;
  }
  .row-gap-xl-0 {
    row-gap: 0 !important;
  }
  .row-gap-xl-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-xl-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-xl-3 {
    row-gap: 1rem !important;
  }
  .row-gap-xl-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-xl-5 {
    row-gap: 3rem !important;
  }
  .column-gap-xl-0 {
    column-gap: 0 !important;
  }
  .column-gap-xl-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-xl-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-xl-3 {
    column-gap: 1rem !important;
  }
  .column-gap-xl-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-xl-5 {
    column-gap: 3rem !important;
  }
  .text-xl-start {
    text-align: left !important;
  }
  .text-xl-end {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }
  .float-xxl-end {
    float: right !important;
  }
  .float-xxl-none {
    float: none !important;
  }
  .object-fit-xxl-contain {
    object-fit: contain !important;
  }
  .object-fit-xxl-cover {
    object-fit: cover !important;
  }
  .object-fit-xxl-fill {
    object-fit: fill !important;
  }
  .object-fit-xxl-scale {
    object-fit: scale-down !important;
  }
  .object-fit-xxl-none {
    object-fit: none !important;
  }
  .d-xxl-inline {
    display: inline !important;
  }
  .d-xxl-inline-block {
    display: inline-block !important;
  }
  .d-xxl-block {
    display: block !important;
  }
  .d-xxl-grid {
    display: grid !important;
  }
  .d-xxl-inline-grid {
    display: inline-grid !important;
  }
  .d-xxl-table {
    display: table !important;
  }
  .d-xxl-table-row {
    display: table-row !important;
  }
  .d-xxl-table-cell {
    display: table-cell !important;
  }
  .d-xxl-flex {
    display: flex !important;
  }
  .d-xxl-inline-flex {
    display: inline-flex !important;
  }
  .d-xxl-none {
    display: none !important;
  }
  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xxl-row {
    flex-direction: row !important;
  }
  .flex-xxl-column {
    flex-direction: column !important;
  }
  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xxl-center {
    justify-content: center !important;
  }
  .justify-content-xxl-between {
    justify-content: space-between !important;
  }
  .justify-content-xxl-around {
    justify-content: space-around !important;
  }
  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xxl-start {
    align-items: flex-start !important;
  }
  .align-items-xxl-end {
    align-items: flex-end !important;
  }
  .align-items-xxl-center {
    align-items: center !important;
  }
  .align-items-xxl-baseline {
    align-items: baseline !important;
  }
  .align-items-xxl-stretch {
    align-items: stretch !important;
  }
  .align-content-xxl-start {
    align-content: flex-start !important;
  }
  .align-content-xxl-end {
    align-content: flex-end !important;
  }
  .align-content-xxl-center {
    align-content: center !important;
  }
  .align-content-xxl-between {
    align-content: space-between !important;
  }
  .align-content-xxl-around {
    align-content: space-around !important;
  }
  .align-content-xxl-stretch {
    align-content: stretch !important;
  }
  .align-self-xxl-auto {
    align-self: auto !important;
  }
  .align-self-xxl-start {
    align-self: flex-start !important;
  }
  .align-self-xxl-end {
    align-self: flex-end !important;
  }
  .align-self-xxl-center {
    align-self: center !important;
  }
  .align-self-xxl-baseline {
    align-self: baseline !important;
  }
  .align-self-xxl-stretch {
    align-self: stretch !important;
  }
  .order-xxl-first {
    order: -1 !important;
  }
  .order-xxl-0 {
    order: 0 !important;
  }
  .order-xxl-1 {
    order: 1 !important;
  }
  .order-xxl-2 {
    order: 2 !important;
  }
  .order-xxl-3 {
    order: 3 !important;
  }
  .order-xxl-4 {
    order: 4 !important;
  }
  .order-xxl-5 {
    order: 5 !important;
  }
  .order-xxl-last {
    order: 6 !important;
  }
  .m-xxl-0 {
    margin: 0 !important;
  }
  .m-xxl-1 {
    margin: 0.25rem !important;
  }
  .m-xxl-2 {
    margin: 0.5rem !important;
  }
  .m-xxl-3 {
    margin: 1rem !important;
  }
  .m-xxl-4 {
    margin: 1.5rem !important;
  }
  .m-xxl-5 {
    margin: 3rem !important;
  }
  .m-xxl-auto {
    margin: auto !important;
  }
  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xxl-0 {
    margin-top: 0 !important;
  }
  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }
  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }
  .mt-xxl-3 {
    margin-top: 1rem !important;
  }
  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }
  .mt-xxl-5 {
    margin-top: 3rem !important;
  }
  .mt-xxl-auto {
    margin-top: auto !important;
  }
  .me-xxl-0 {
    margin-right: 0 !important;
  }
  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }
  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }
  .me-xxl-3 {
    margin-right: 1rem !important;
  }
  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }
  .me-xxl-5 {
    margin-right: 3rem !important;
  }
  .me-xxl-auto {
    margin-right: auto !important;
  }
  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }
  .mb-xxl-auto {
    margin-bottom: auto !important;
  }
  .ms-xxl-0 {
    margin-left: 0 !important;
  }
  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }
  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }
  .ms-xxl-3 {
    margin-left: 1rem !important;
  }
  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }
  .ms-xxl-5 {
    margin-left: 3rem !important;
  }
  .ms-xxl-auto {
    margin-left: auto !important;
  }
  .p-xxl-0 {
    padding: 0 !important;
  }
  .p-xxl-1 {
    padding: 0.25rem !important;
  }
  .p-xxl-2 {
    padding: 0.5rem !important;
  }
  .p-xxl-3 {
    padding: 1rem !important;
  }
  .p-xxl-4 {
    padding: 1.5rem !important;
  }
  .p-xxl-5 {
    padding: 3rem !important;
  }
  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-xxl-0 {
    padding-top: 0 !important;
  }
  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }
  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }
  .pt-xxl-3 {
    padding-top: 1rem !important;
  }
  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }
  .pt-xxl-5 {
    padding-top: 3rem !important;
  }
  .pe-xxl-0 {
    padding-right: 0 !important;
  }
  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }
  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }
  .pe-xxl-3 {
    padding-right: 1rem !important;
  }
  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }
  .pe-xxl-5 {
    padding-right: 3rem !important;
  }
  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }
  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }
  .ps-xxl-0 {
    padding-left: 0 !important;
  }
  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }
  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }
  .ps-xxl-3 {
    padding-left: 1rem !important;
  }
  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }
  .ps-xxl-5 {
    padding-left: 3rem !important;
  }
  .gap-xxl-0 {
    gap: 0 !important;
  }
  .gap-xxl-1 {
    gap: 0.25rem !important;
  }
  .gap-xxl-2 {
    gap: 0.5rem !important;
  }
  .gap-xxl-3 {
    gap: 1rem !important;
  }
  .gap-xxl-4 {
    gap: 1.5rem !important;
  }
  .gap-xxl-5 {
    gap: 3rem !important;
  }
  .row-gap-xxl-0 {
    row-gap: 0 !important;
  }
  .row-gap-xxl-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-xxl-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-xxl-3 {
    row-gap: 1rem !important;
  }
  .row-gap-xxl-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-xxl-5 {
    row-gap: 3rem !important;
  }
  .column-gap-xxl-0 {
    column-gap: 0 !important;
  }
  .column-gap-xxl-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-xxl-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-xxl-3 {
    column-gap: 1rem !important;
  }
  .column-gap-xxl-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-xxl-5 {
    column-gap: 3rem !important;
  }
  .text-xxl-start {
    text-align: left !important;
  }
  .text-xxl-end {
    text-align: right !important;
  }
  .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }
  .fs-2 {
    font-size: 2rem !important;
  }
  .fs-3 {
    font-size: 1.75rem !important;
  }
  .fs-4 {
    font-size: 1.5rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-grid {
    display: grid !important;
  }
  .d-print-inline-grid {
    display: inline-grid !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
  .d-print-none {
    display: none !important;
  }
}
body {
  background-color: #303030;
}

.main-container,
.left,
.right {
  height: 100svh;
}

.left {
  background-color: gray;
}

.left-image {
  width: 80%;
}

.form {
  width: 60%;
  margin: 0 auto;
  color: black;
}`, "",{"version":3,"sources":["webpack://./src/views/subscribe_form/sass/subscribe_form.scss","webpack://./src/sass-partials/_utils.scss","webpack://./node_modules/bootstrap/scss/mixins/_banner.scss","webpack://./node_modules/bootstrap/scss/_root.scss","webpack://./node_modules/bootstrap/scss/vendor/_rfs.scss","webpack://./node_modules/bootstrap/scss/mixins/_color-mode.scss","webpack://./node_modules/bootstrap/scss/_reboot.scss","webpack://./node_modules/bootstrap/scss/_variables.scss","webpack://./node_modules/bootstrap/scss/mixins/_border-radius.scss","webpack://./node_modules/bootstrap/scss/_type.scss","webpack://./node_modules/bootstrap/scss/mixins/_lists.scss","webpack://./node_modules/bootstrap/scss/_images.scss","webpack://./node_modules/bootstrap/scss/mixins/_image.scss","webpack://./node_modules/bootstrap/scss/_containers.scss","webpack://./node_modules/bootstrap/scss/mixins/_container.scss","webpack://./node_modules/bootstrap/scss/mixins/_breakpoints.scss","webpack://./node_modules/bootstrap/scss/_grid.scss","webpack://./node_modules/bootstrap/scss/mixins/_grid.scss","webpack://./node_modules/bootstrap/scss/_tables.scss","webpack://./node_modules/bootstrap/scss/mixins/_table-variants.scss","webpack://./node_modules/bootstrap/scss/forms/_labels.scss","webpack://./node_modules/bootstrap/scss/forms/_form-text.scss","webpack://./node_modules/bootstrap/scss/forms/_form-control.scss","webpack://./node_modules/bootstrap/scss/mixins/_transition.scss","webpack://./node_modules/bootstrap/scss/mixins/_gradients.scss","webpack://./node_modules/bootstrap/scss/forms/_form-select.scss","webpack://./node_modules/bootstrap/scss/forms/_form-check.scss","webpack://./node_modules/bootstrap/scss/forms/_form-range.scss","webpack://./node_modules/bootstrap/scss/forms/_floating-labels.scss","webpack://./node_modules/bootstrap/scss/forms/_input-group.scss","webpack://./node_modules/bootstrap/scss/mixins/_forms.scss","webpack://./node_modules/bootstrap/scss/_buttons.scss","webpack://./node_modules/bootstrap/scss/mixins/_buttons.scss","webpack://./node_modules/bootstrap/scss/_transitions.scss","webpack://./node_modules/bootstrap/scss/_dropdown.scss","webpack://./node_modules/bootstrap/scss/mixins/_caret.scss","webpack://./node_modules/bootstrap/scss/_button-group.scss","webpack://./node_modules/bootstrap/scss/_nav.scss","webpack://./node_modules/bootstrap/scss/_navbar.scss","webpack://./node_modules/bootstrap/scss/_card.scss","webpack://./node_modules/bootstrap/scss/_accordion.scss","webpack://./node_modules/bootstrap/scss/_breadcrumb.scss","webpack://./node_modules/bootstrap/scss/_pagination.scss","webpack://./node_modules/bootstrap/scss/mixins/_pagination.scss","webpack://./node_modules/bootstrap/scss/_badge.scss","webpack://./node_modules/bootstrap/scss/_alert.scss","webpack://./node_modules/bootstrap/scss/_progress.scss","webpack://./node_modules/bootstrap/scss/_list-group.scss","webpack://./node_modules/bootstrap/scss/_close.scss","webpack://./node_modules/bootstrap/scss/_toasts.scss","webpack://./node_modules/bootstrap/scss/_modal.scss","webpack://./node_modules/bootstrap/scss/mixins/_backdrop.scss","webpack://./node_modules/bootstrap/scss/_tooltip.scss","webpack://./node_modules/bootstrap/scss/mixins/_reset-text.scss","webpack://./node_modules/bootstrap/scss/_popover.scss","webpack://./node_modules/bootstrap/scss/_carousel.scss","webpack://./node_modules/bootstrap/scss/mixins/_clearfix.scss","webpack://./node_modules/bootstrap/scss/_spinners.scss","webpack://./node_modules/bootstrap/scss/_offcanvas.scss","webpack://./node_modules/bootstrap/scss/_placeholders.scss","webpack://./node_modules/bootstrap/scss/helpers/_color-bg.scss","webpack://./node_modules/bootstrap/scss/helpers/_colored-links.scss","webpack://./node_modules/bootstrap/scss/helpers/_focus-ring.scss","webpack://./node_modules/bootstrap/scss/helpers/_icon-link.scss","webpack://./node_modules/bootstrap/scss/helpers/_ratio.scss","webpack://./node_modules/bootstrap/scss/helpers/_position.scss","webpack://./node_modules/bootstrap/scss/helpers/_stacks.scss","webpack://./node_modules/bootstrap/scss/helpers/_visually-hidden.scss","webpack://./node_modules/bootstrap/scss/mixins/_visually-hidden.scss","webpack://./node_modules/bootstrap/scss/helpers/_stretched-link.scss","webpack://./node_modules/bootstrap/scss/helpers/_text-truncation.scss","webpack://./node_modules/bootstrap/scss/mixins/_text-truncate.scss","webpack://./node_modules/bootstrap/scss/helpers/_vr.scss","webpack://./node_modules/bootstrap/scss/mixins/_utilities.scss","webpack://./node_modules/bootstrap/scss/utilities/_api.scss"],"names":[],"mappings":"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5B,SAAA;EACA,wCAAA;EACA,aCynB4B;APvc9B;;AMxKA;EACE,aAAA;EACA,qBCwjB4B;EDrjB5B,gBCwjB4B;EDvjB5B,gBCwjB4B;EDvjB5B,8BAAA;ANyKF;;AMtKA;EFuMQ,iCAAA;AJ7BR;AI/HI;EE3CJ;IF8MQ,iBAAA;EJhCN;AACF;;AM1KA;EFkMQ,iCAAA;AJpBR;AIxII;EEtCJ;IFyMQ,eAAA;EJvBN;AACF;;AM9KA;EF6LQ,+BAAA;AJXR;AIjJI;EEjCJ;IFoMQ,kBAAA;EJdN;AACF;;AMlLA;EFwLQ,iCAAA;AJFR;AI1JI;EE5BJ;IF+LQ,iBAAA;EJLN;AACF;;AMtLA;EF+KM,kBALI;AJgBV;;AMrLA;EF0KM,eALI;AJoBV;;AM9KA;EACE,aAAA;EACA,mBCwV0B;APvK5B;;AMvKA;EACE,iCAAA;EACA,YAAA;EACA,8BAAA;AN0KF;;AMpKA;EACE,mBAAA;EACA,kBAAA;EACA,oBAAA;ANuKF;;AMjKA;;EAEE,kBAAA;ANoKF;;AMjKA;;;EAGE,aAAA;EACA,mBAAA;ANoKF;;AMjKA;;;;EAIE,gBAAA;ANoKF;;AMjKA;EACE,gBC6b4B;APzR9B;;AM/JA;EACE,qBAAA;EACA,cAAA;ANkKF;;AM5JA;EACE,gBAAA;AN+JF;;AMvJA;;EAEE,mBCsa4B;AP5Q9B;;AMlJA;EF6EM,kBALI;AJ8EV;;AM/IA;EACE,iBCqf4B;EDpf5B,gCAAA;EACA,wCAAA;ANkJF;;AMzIA;;EAEE,kBAAA;EFwDI,iBALI;EEjDR,cAAA;EACA,wBAAA;AN4IF;;AMzIA;EAAM,eAAA;AN6IN;;AM5IA;EAAM,WAAA;ANgJN;;AM3IA;EACE,gEAAA;EACA,0BCgNwC;APlE1C;AM5IE;EACE,mDAAA;AN8IJ;;AMnIE;EAEE,cAAA;EACA,qBAAA;ANqIJ;;AM9HA;;;;EAIE,qCCgV4B;EHlUxB,cALI;AJyHV;;AM1HA;EACE,cAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EFEI,kBALI;AJiIV;AMzHE;EFHI,kBALI;EEUN,cAAA;EACA,kBAAA;AN2HJ;;AMvHA;EFVM,kBALI;EEiBR,2BAAA;EACA,qBAAA;AN0HF;AMvHE;EACE,cAAA;ANyHJ;;AMrHA;EACE,2BAAA;EFtBI,kBALI;EE6BR,wBCu5CkC;EDt5ClC,sCCu5CkC;EC5rDhC,sBAAA;AR8ZJ;AMtHE;EACE,UAAA;EF7BE,cALI;AJ2JV;;AM9GA;EACE,gBAAA;ANiHF;;AM3GA;;EAEE,sBAAA;AN8GF;;AMtGA;EACE,oBAAA;EACA,yBAAA;ANyGF;;AMtGA;EACE,mBC4X4B;ED3X5B,sBC2X4B;ED1X5B,gCC4Z4B;ED3Z5B,gBAAA;ANyGF;;AMlGA;EAEE,mBAAA;EACA,gCAAA;ANoGF;;AMjGA;;;;;;EAME,qBAAA;EACA,mBAAA;EACA,eAAA;ANoGF;;AM5FA;EACE,qBAAA;AN+FF;;AMzFA;EAEE,gBAAA;AN2FF;;AMnFA;EACE,UAAA;ANsFF;;AMjFA;;;;;EAKE,SAAA;EACA,oBAAA;EF5HI,kBALI;EEmIR,oBAAA;ANoFF;;AMhFA;;EAEE,oBAAA;ANmFF;;AM9EA;EACE,eAAA;ANiFF;;AM9EA;EAGE,iBAAA;AN+EF;AM5EE;EACE,UAAA;AN8EJ;;AMvEA;EACE,wBAAA;AN0EF;;AMlEA;;;;EAIE,0BAAA;ANqEF;AMlEI;;;;EACE,eAAA;ANuEN;;AMhEA;EACE,UAAA;EACA,kBAAA;ANmEF;;AM9DA;EACE,gBAAA;ANiEF;;AMvDA;EACE,YAAA;EACA,UAAA;EACA,SAAA;EACA,SAAA;AN0DF;;AMlDA;EACE,WAAA;EACA,WAAA;EACA,UAAA;EACA,qBCmN4B;EHpatB,iCAAA;EEoNN,oBAAA;ANoDF;AIpaI;EEyWJ;IFtMQ,iBAAA;EJqQN;AACF;AMvDE;EACE,WAAA;ANyDJ;;AMlDA;;;;;;;EAOE,UAAA;ANqDF;;AMlDA;EACE,YAAA;ANqDF;;AM5CA;EACE,6BAAA;EACA,oBAAA;AN+CF;;AMvCA;;;;;;;CAAA;AAWA;EACE,wBAAA;ANuCF;;AMlCA;EACE,UAAA;ANqCF;;AM9BA;EACE,aAAA;EACA,0BAAA;ANiCF;;AM5BA;EACE,qBAAA;AN+BF;;AM1BA;EACE,SAAA;AN6BF;;AMtBA;EACE,kBAAA;EACA,eAAA;ANyBF;;AMjBA;EACE,wBAAA;ANoBF;;AMZA;EACE,wBAAA;ANeF;;ASplBA;ELmQM,kBALI;EK5PR,gBFwoB4B;APjD9B;;ASllBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;APrB9B;AIpfI;EKpGF;ILuQM,eAAA;EJqVN;AACF;;AS7lBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;APV9B;AI/fI;EKpGF;ILuQM,iBAAA;EJgWN;AACF;;ASxmBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;APC9B;AI1gBI;EKpGF;ILuQM,eAAA;EJ2WN;AACF;;ASnnBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;APY9B;AIrhBI;EKpGF;ILuQM,iBAAA;EJsXN;AACF;;AS9nBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;APuB9B;AIhiBI;EKpGF;ILuQM,eAAA;EJiYN;AACF;;ASzoBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;APkC9B;AI3iBI;EKpGF;ILuQM,iBAAA;EJ4YN;AACF;;AS5nBA;ECvDE,eAAA;EACA,gBAAA;AVurBF;;AS5nBA;EC5DE,eAAA;EACA,gBAAA;AV4rBF;;AS9nBA;EACE,qBAAA;ATioBF;AS/nBE;EACE,oBFsoB0B;APL9B;;ASvnBA;EL8MM,kBALI;EKvMR,yBAAA;AT0nBF;;AStnBA;EACE,mBFiUO;EH1HH,kBALI;AJwbV;ASvnBE;EACE,gBAAA;ATynBJ;;ASrnBA;EACE,iBAAA;EACA,mBFuTO;EH1HH,kBALI;EKtLR,cFtFS;AP8sBX;AStnBE;EACE,aAAA;ATwnBJ;;AWxtBA;ECIE,eAAA;EAGA,YAAA;AZstBF;;AWvtBA;EACE,gBJ6jDkC;EI5jDlC,mCJ6jDkC;EI5jDlC,2DAAA;EHGE,sCAAA;EIRF,eAAA;EAGA,YAAA;AZ+tBF;;AWjtBA;EAEE,qBAAA;AXmtBF;;AWhtBA;EACE,qBAAA;EACA,cAAA;AXmtBF;;AWhtBA;EPyPM,kBALI;EOlPR,gCJgjDkC;AP71BpC;;Aa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,SAAA;AtBqkEJ;AsBhkEE;EACE,cAAA;EACA,UAAA;AtBkkEJ;AsB9jEE;EACE,gCf40BoC;Ee10BpC,UAAA;AtB+jEJ;AsBvjEE;EAEE,wCf8yBoC;Ee3yBpC,UAAA;AtBsjEJ;AsBljEE;EACE,yBAAA;EACA,0BAAA;EACA,0BforB0B;EenrB1B,2BfsyBoC;EiBp4BtC,uCjBqiCgC;Eer8B9B,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,+CfgsB0B;Ee/rB1B,gBAAA;ECzFE,qID0FF;AtBojEJ;AuB1oEM;ED0EJ;ICzEM,gBAAA;EvB6oEN;AACF;AsBtjEE;EACE,wCf47B8B;AP4nClC;;AsB/iEA;EACE,cAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBfwf4B;Eevf5B,2Bf2xBsC;Ee1xBtC,6BAAA;EACA,yBAAA;EACA,sCAAA;AtBkjEF;AsBhjEE;EACE,UAAA;AtBkjEJ;AsB/iEE;EAEE,gBAAA;EACA,eAAA;AtBgjEJ;;AsBriEA;EACE,mEf4wBsC;Ee3wBtC,uBAAA;ElByII,mBALI;EIvQN,yCAAA;AR6qEJ;AsBtiEE;EACE,uBAAA;EACA,wBAAA;EACA,yBfooB0B;APo6C9B;;AsBpiEA;EACE,iEfgwBsC;Ee/vBtC,oBAAA;ElB4HI,kBALI;EIvQN,yCAAA;ARyrEJ;AsBriEE;EACE,oBAAA;EACA,qBAAA;EACA,uBf2nB0B;AP46C9B;;AsB/hEE;EACE,oEf6uBoC;APqzCxC;AsB/hEE;EACE,mEf0uBoC;APuzCxC;AsB9hEE;EACE,iEfuuBoC;APyzCxC;;AsB3hEA;EACE,WfquBsC;EepuBtC,gEf8tBsC;Ee7tBtC,iBfilB4B;AP68C9B;AsB5hEE;EACE,eAAA;AtB8hEJ;AsB3hEE;EACE,oBAAA;EdvLA,sCAAA;ARqtEJ;AsB1hEE;EACE,oBAAA;Ed5LA,sCAAA;ARytEJ;AsBzhEE;EAAoB,+Df8sBkB;AP80CxC;AsB3hEE;EAAoB,6Df8sBkB;APg1CxC;;AyB7uEA;EACE,gEAAA;EAEA,cAAA;EACA,WAAA;EACA,0CAAA;ErBqRI,eALI;EqB7QR,gBlB+lB4B;EkB9lB5B,gBlBsmB4B;EkBrmB5B,2BlBy3BsC;EkBx3BtC,gBAAA;EACA,mClBk3BsC;EkBj3BtC,mFAAA;EACA,4BAAA;EACA,yClB+9BkC;EkB99BlC,0BlB+9BkC;EkB99BlC,2DAAA;EjBHE,sCAAA;EeHE,wEESJ;AzB6uEF;AuBlvEM;EEfN;IFgBQ,gBAAA;EvBqvEN;AACF;AyBhvEE;EACE,qBlBs3BoC;EkBr3BpC,UAAA;EAKE,kDlBi+B4B;AP6wClC;AyB1uEE;EAEE,sBlB6uB0B;EkB5uB1B,sBAAA;AzB2uEJ;AyBxuEE;EAEE,wClBu1BoC;APk5CxC;AyBpuEE;EACE,kBAAA;EACA,uCAAA;AzBsuEJ;;AyBluEA;EACE,oBlBsuB4B;EkBruB5B,uBlBquB4B;EkBpuB5B,oBlBquB4B;EHlgBxB,mBALI;EIvQN,yCAAA;ARgxEJ;;AyBluEA;EACE,mBlBkuB4B;EkBjuB5B,sBlBiuB4B;EkBhuB5B,kBlBiuB4B;EHtgBxB,kBALI;EIvQN,yCAAA;ARwxEJ;;AyBhuEI;EACE,gEAAA;AzBmuEN;;A0B3yEA;EACE,cAAA;EACA,kBnBq6BwC;EmBp6BxC,mBnBq6BwC;EmBp6BxC,uBnBq6BwC;APy4C1C;A0B5yEE;EACE,WAAA;EACA,mBAAA;A1B8yEJ;;A0B1yEA;EACE,oBnB25BwC;EmB15BxC,eAAA;EACA,iBAAA;A1B6yEF;A0B3yEE;EACE,YAAA;EACA,oBAAA;EACA,cAAA;A1B6yEJ;;A0BzyEA;EACE,qCAAA;EAEA,cAAA;EACA,UnB04BwC;EmBz4BxC,WnBy4BwC;EmBx4BxC,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,yCAAA;EACA,+CAAA;EACA,4BAAA;EACA,2BAAA;EACA,wBAAA;EACA,2DnB24BwC;EmB14BxC,yBAAA;A1B2yEF;A0BxyEE;ElB3BE,qBAAA;ARs0EJ;A0BvyEE;EAEE,kBnBm4BsC;APq6C1C;A0BryEE;EACE,uBnB03BsC;AP66C1C;A0BpyEE;EACE,qBnBs1BoC;EmBr1BpC,UAAA;EACA,kDnB8foB;APwyDxB;A0BnyEE;EACE,yBnB5BM;EmB6BN,qBnB7BM;APk0EV;A0BnyEI;EAII,iEAAA;A1BkyER;A0B9xEI;EAII,iEAAA;A1B6xER;A0BxxEE;EACE,yBnBjDM;EmBkDN,qBnBlDM;EmBuDJ,iEAAA;A1BsxEN;A0BlxEE;EACE,oBAAA;EACA,YAAA;EACA,YnBk2BuC;APk7C3C;A0B7wEI;EACE,eAAA;EACA,YnBy1BqC;APs7C3C;;A0BjwEA;EACE,mBnBo1BgC;APg7ClC;A0BlwEE;EACE,4DAAA;EAEA,UnB80B8B;EmB70B9B,mBAAA;EACA,0CAAA;EACA,gCAAA;ElBjHA,kBAAA;EeHE,iDGsHF;A1BmwEJ;AuBr3EM;EG0GJ;IHzGM,gBAAA;EvBw3EN;AACF;A0BtwEI;EACE,4DAAA;A1BwwEN;A0BrwEI;EACE,iCnB60B4B;EmBx0B1B,4DAAA;A1BmwER;A0B9vEE;EACE,oBnBwzB8B;EmBvzB9B,eAAA;A1BgwEJ;A0B9vEI;EACE,oBAAA;EACA,cAAA;A1BgwEN;;A0B3vEA;EACE,qBAAA;EACA,kBnBsyBgC;APw9ClC;;A0B3vEA;EACE,kBAAA;EACA,sBAAA;EACA,oBAAA;A1B8vEF;A0B1vEI;EACE,oBAAA;EACA,YAAA;EACA,anBspBwB;APsmD9B;;A0BrvEI;EACE,4DAAA;A1BwvEN;;A2B36EA;EACE,WAAA;EACA,cAAA;EACA,UAAA;EACA,gBAAA;EACA,6BAAA;A3B86EF;A2B56EE;EACE,UAAA;A3B86EJ;A2B16EI;EAA0B,kEpB8gCa;AP+5C3C;A2B56EI;EAA0B,kEpB6gCa;APk6C3C;A2B56EE;EACE,SAAA;A3B86EJ;A2B36EE;EACE,WpB+/BuC;EoB9/BvC,YpB8/BuC;EoB7/BvC,oBAAA;EACA,gBAAA;EH1BF,yBjBkCQ;EoBNN,SpB6/BuC;EC1gCvC,mBAAA;EeHE,4GImBF;A3B46EJ;AuB37EM;EIMJ;IJLM,gBAAA;EvB87EN;AACF;A2B/6EI;EHjCF,yBjB8hCyC;APq7C3C;A2B76EE;EACE,WpBw+B8B;EoBv+B9B,cpBw+B8B;EoBv+B9B,kBAAA;EACA,epBu+B8B;EoBt+B9B,wCpBu+B8B;EoBt+B9B,yBAAA;EnB7BA,mBAAA;AR68EJ;A2B36EE;EACE,WpBo+BuC;EoBn+BvC,YpBm+BuC;EoBl+BvC,gBAAA;EHpDF,yBjBkCQ;EoBoBN,SpBm+BuC;EC1gCvC,mBAAA;EeHE,4GI6CF;A3B46EJ;AuBr9EM;EIiCJ;IJhCM,gBAAA;EvBw9EN;AACF;A2B/6EI;EH3DF,yBjB8hCyC;AP+8C3C;A2B76EE;EACE,WpB88B8B;EoB78B9B,cpB88B8B;EoB78B9B,kBAAA;EACA,epB68B8B;EoB58B9B,wCpB68B8B;EoB58B9B,yBAAA;EnBvDA,mBAAA;ARu+EJ;A2B36EE;EACE,oBAAA;A3B66EJ;A2B36EI;EACE,2CpBg9BqC;AP69C3C;A2B16EI;EACE,2CpB48BqC;APg+C3C;;A4BngFA;EACE,kBAAA;A5BsgFF;A4BpgFE;;;EAGE,uDrBwiCoC;EqBviCpC,2DrBuiCoC;EqBtiCpC,iBrBuiCoC;AP+9CxC;A4BngFE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,YAAA;EACA,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gDAAA;EACA,qBAAA;ELRE,gEKSF;A5BqgFJ;AuB1gFM;EKTJ;ILUM,gBAAA;EvB6gFN;AACF;A4BvgFE;;EAEE,qBAAA;A5BygFJ;A4BvgFI;;EACE,kBAAA;A5B0gFN;A4BvgFI;;;EAEE,qBrB4gCkC;EqB3gClC,wBrB4gCkC;AP8/CxC;A4BvgFI;;EACE,qBrBugCkC;EqBtgClC,wBrBugCkC;APmgDxC;A4BtgFE;EACE,qBrBigCoC;EqBhgCpC,wBrBigCoC;APugDxC;A4BjgFI;;;;EACE,2CAAA;EACA,8DrB2/BkC;AP2gDxC;A4BpgFM;;;;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,arBm/BgC;EqBl/BhC,WAAA;EACA,mCrBg0BgC;ECh3BpC,sCAAA;AR0jFJ;A4BngFI;EACE,2CAAA;EACA,8DrB0+BkC;AP2hDxC;A4BhgFI;EACE,sCAAA;A5BkgFN;A4B9/EE;;EAEE,crB1EO;AP0kFX;A4B9/EI;;EACE,wCrB0yBkC;APutDxC;;A6BxlFA;EACE,kBAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;A7B2lFF;A6BzlFE;;;EAGE,kBAAA;EACA,cAAA;EACA,SAAA;EACA,YAAA;A7B2lFJ;A6BvlFE;;;EAGE,UAAA;A7BylFJ;A6BnlFE;EACE,kBAAA;EACA,UAAA;A7BqlFJ;A6BnlFI;EACE,UAAA;A7BqlFN;;A6B1kFA;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;EzB8OI,eALI;EyBvOR,gBtByjB4B;EsBxjB5B,gBtBgkB4B;EsB/jB5B,2BtBm1BsC;EsBl1BtC,kBAAA;EACA,mBAAA;EACA,uCtB06BsC;EsBz6BtC,2DAAA;ErBtCE,sCAAA;ARonFJ;;A6BpkFA;;;;EAIE,oBAAA;EzBwNI,kBALI;EIvQN,yCAAA;AR6nFJ;;A6BpkFA;;;;EAIE,uBAAA;EzB+MI,mBALI;EIvQN,yCAAA;ARsoFJ;;A6BpkFA;;EAEE,mBAAA;A7BukFF;;A6B1jFI;;;;ErBjEA,0BAAA;EACA,6BAAA;ARkoFJ;A6BzjFI;;;;ErB1EA,0BAAA;EACA,6BAAA;ARyoFJ;A6BnjFE;EACE,8CAAA;ErB1EA,yBAAA;EACA,4BAAA;ARgoFJ;A6BnjFE;;ErB9EE,yBAAA;EACA,4BAAA;ARqoFJ;;A8B7pFE;EACE,aAAA;EACA,WAAA;EACA,mBvBu0BoC;EHrkBlC,kBALI;E0B1PN,iCvBkjCqB;AP6mDzB;;A8B5pFE;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,kBAAA;E1BqPE,mBALI;E0B7ON,WvBqiCqB;EuBpiCrB,mCvBoiCqB;EC/jCrB,sCAAA;AR0rFJ;;A8B1pFI;;;;EAEE,cAAA;A9B+pFN;;A8B9sFI;EAqDE,+CvBuhCmB;EuBphCjB,oCvB81BgC;EuB71BhC,yDAAA;EACA,4BAAA;EACA,2DAAA;EACA,gEAAA;A9B2pFR;A8BxpFM;EACE,+CvB4gCiB;EuB3gCjB,2DvB2gCiB;AP+oDzB;;A8B3tFI;EA0EI,oCvB40BgC;EuB30BhC,kFAAA;A9BqpFR;;A8BhuFI;EAkFE,+CvB0/BmB;APwpDzB;A8B/oFQ;EAEE,iEAAA;EACA,uBvB05B8B;EuBz5B9B,+DAAA;EACA,2EAAA;A9BgpFV;A8B5oFM;EACE,+CvB6+BiB;EuB5+BjB,2DvB4+BiB;APkqDzB;;A8B9uFI;EAwGI,yCAAA;A9B0oFR;;A8BlvFI;EA+GE,+CvB69BmB;AP0qDzB;A8BroFM;EACE,4CvB09BiB;AP6qDzB;A8BpoFM;EACE,2DvBs9BiB;APgrDzB;A8BnoFM;EACE,iCvBk9BiB;APmrDzB;;A8BhoFI;EACE,kBAAA;A9BmoFN;;A8BnwFI;;;;;EA0IM,UAAA;A9BioFV;;A8BvvFE;EACE,aAAA;EACA,WAAA;EACA,mBvBu0BoC;EHrkBlC,kBALI;E0B1PN,mCvBkjCqB;APusDzB;;A8BtvFE;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,kBAAA;E1BqPE,mBALI;E0B7ON,WvBqiCqB;EuBpiCrB,kCvBoiCqB;EC/jCrB,sCAAA;ARoxFJ;;A8BpvFI;;;;EAEE,cAAA;A9ByvFN;;A8BxyFI;EAqDE,iDvBuhCmB;EuBphCjB,oCvB81BgC;EuB71BhC,0DAAA;EACA,4BAAA;EACA,2DAAA;EACA,gEAAA;A9BqvFR;A8BlvFM;EACE,iDvB4gCiB;EuB3gCjB,0DvB2gCiB;APyuDzB;;A8BrzFI;EA0EI,oCvB40BgC;EuB30BhC,kFAAA;A9B+uFR;;A8B1zFI;EAkFE,iDvB0/BmB;APkvDzB;A8BzuFQ;EAEE,kEAAA;EACA,uBvB05B8B;EuBz5B9B,+DAAA;EACA,2EAAA;A9B0uFV;A8BtuFM;EACE,iDvB6+BiB;EuB5+BjB,0DvB4+BiB;AP4vDzB;;A8Bx0FI;EAwGI,yCAAA;A9BouFR;;A8B50FI;EA+GE,iDvB69BmB;APowDzB;A8B/tFM;EACE,8CvB09BiB;APuwDzB;A8B9tFM;EACE,0DvBs9BiB;AP0wDzB;A8B7tFM;EACE,mCvBk9BiB;AP6wDzB;;A8B1tFI;EACE,kBAAA;A9B6tFN;;A8B71FI;;;;;EA4IM,UAAA;A9BytFV;;A+Bv2FA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Q;EAOI,yBAAA;AzE2hOZ;;AyEliOQ;EAOI,6BAAA;AzE+hOZ;;AyEtiOQ;EAOI,8BAAA;AzEmiOZ;;AyE1iOQ;EAOI,wBAAA;AzEuiOZ;;AyE9iOQ;EAOI,+BAAA;AzE2iOZ;;AyEljOQ;EAOI,wBAAA;AzE+iOZ;;AyEtjOQ;EAOI,2CAAA;AzEmjOZ;;AyE1jOQ;EAOI,8CAAA;AzEujOZ;;AyE9jOQ;EAOI,8CAAA;AzE2jOZ;;AyElkOQ;EAOI,2BAAA;AzE+jOZ;;AyEhlOQ;EACE,gFAAA;AzEmlOV;;AyEplOQ;EACE,kFAAA;AzEulOV;;AyExlOQ;EACE,gFAAA;AzE2lOV;;AyE5lOQ;EACE,6EAAA;AzE+lOV;;AyEhmOQ;EACE,gFAAA;AzEmmOV;;AyEpmOQ;EACE,+EAAA;AzEumOV;;AyExmOQ;EACE,8EAAA;AzE2mOV;;AyE5mOQ;EACE,6EAAA;AzE+mOV;;AyEtmOQ;EAOI,2BAAA;AzEmmOZ;;AyE1mOQ;EAOI,6BAAA;AzEumOZ;;AyE9mOQ;EAOI,6BAAA;AzE2mOZ;;AyElnOQ;EAOI,0BAAA;AzE+mOZ;;AyEtnOQ;EAOI,2BAAA;AzEmnOZ;;AyE1nOQ;EAOI,iBAAA;AzEunOZ;;AyE9nOQ;EAOI,mBAAA;AzE2nOZ;;AyEloOQ;EAOI,oBAAA;AzE+nOZ;;AyEtoOQ;EAOI,oBAAA;AzEmoOZ;;AyE1oOQ;EAOI,sBAAA;AzEuoOZ;;AyE9oOQ;EAOI,uBAAA;AzE2oOZ;;AyElpOQ;EAOI,kBAAA;AzE+oOZ;;AyEtpOQ;EAOI,oBAAA;AzEmpOZ;;AyE1pOQ;EAOI,qBAAA;AzEupOZ;;AyE9pOQ;EAOI,mBAAA;AzE2pOZ;;AyElqOQ;EAOI,qBAAA;AzE+pOZ;;AyEtqOQ;EAOI,sBAAA;AzEmqOZ;;AyE1qOQ;EAOI,2CAAA;AzEuqOZ;;AyE9qOQ;EAOI,sCAAA;AzE2qOZ;;AyElrOQ;EAOI,sCAAA;AzE+qOZ;;AyEtrOQ;EAOI,uFAAA;AzEmrOZ;;AyE1rOQ;EAOI,oBAAA;AzEurOZ;;AyE9rOQ;EAOI,2FAAA;AzE2rOZ;;AyElsOQ;EAOI,wBAAA;AzE+rOZ;;AyEtsOQ;EAOI,6FAAA;AzEmsOZ;;AyE1sOQ;EAOI,0BAAA;AzEusOZ;;AyE9sOQ;EAOI,8FAAA;AzE2sOZ;;AyEltOQ;EAOI,2BAAA;AzE+sOZ;;AyEttOQ;EAOI,4FAAA;AzEmtOZ;;AyE1tOQ;EAOI,yBAAA;AzEutOZ;;AyE9tOQ;EAIQ,sBAAA;EAGJ,8EAAA;AzE4tOZ;;AyEnuOQ;EAIQ,sBAAA;EAGJ,gFAAA;AzEiuOZ;;AyExuOQ;EAIQ,sBAAA;EAGJ,8EAAA;AzEsuOZ;;AyE7uOQ;EAIQ,sBAAA;EAGJ,2EAAA;AzE2uOZ;;AyElvOQ;EAIQ,sBAAA;EAGJ,8EAAA;AzEgvOZ;;AyEvvOQ;EAIQ,sBAAA;EAGJ,6EAAA;AzEqvOZ;;AyE5vOQ;EAIQ,sBAAA;EAGJ,4EAAA;AzE0vOZ;;AyEjwOQ;EAIQ,sBAAA;EAGJ,2EAAA;AzE+vOZ;;AyEtwOQ;EAIQ,sBAAA;EAGJ,4EAAA;AzEowOZ;;AyE3wOQ;EAIQ,sBAAA;EAGJ,4EAAA;AzEywOZ;;AyEhxOQ;EAOI,wDAAA;AzE6wOZ;;AyEpxOQ;EAOI,0DAAA;AzEixOZ;;AyExxOQ;EAOI,wDAAA;AzEqxOZ;;AyE5xOQ;EAOI,qDAAA;AzEyxOZ;;AyEhyOQ;EAOI,wDAAA;AzE6xOZ;;AyEpyOQ;EAOI,uDAAA;AzEiyOZ;;AyExyOQ;EAOI,sDAAA;AzEqyOZ;;AyE5yOQ;EAOI,qDAAA;AzEyyOZ;;AyEhzOQ;EAOI,4BAAA;AzE6yOZ;;AyEpzOQ;EAOI,4BAAA;AzEizOZ;;AyExzOQ;EAOI,4BAAA;AzEqzOZ;;AyE5zOQ;EAOI,4BAAA;AzEyzOZ;;AyEh0OQ;EAOI,4BAAA;AzE6zOZ;;AyE90OQ;EACE,wBAAA;AzEi1OV;;AyEl1OQ;EACE,yBAAA;AzEq1OV;;AyEt1OQ;EACE,wBAAA;AzEy1OV;;AyE11OQ;EACE,yBAAA;AzE61OV;;AyE91OQ;EACE,sBAAA;AzEi2OV;;AyEx1OQ;EAOI,qBAAA;AzEq1OZ;;AyE51OQ;EAOI,qBAAA;AzEy1OZ;;AyEh2OQ;EAOI,qBAAA;AzE61OZ;;AyEp2OQ;EAOI,sBAAA;AzEi2OZ;;AyEx2OQ;EAOI,sBAAA;AzEq2OZ;;AyE52OQ;EAOI,0BAAA;AzEy2OZ;;AyEh3OQ;EAOI,uBAAA;AzE62OZ;;AyEp3OQ;EAOI,2BAAA;AzEi3OZ;;AyEx3OQ;EAOI,sBAAA;AzEq3OZ;;AyE53OQ;EAOI,sBAAA;AzEy3OZ;;AyEh4OQ;EAOI,sBAAA;AzE63OZ;;AyEp4OQ;EAOI,uBAAA;AzEi4OZ;;AyEx4OQ;EAOI,uBAAA;AzEq4OZ;;AyE54OQ;EAOI,2BAAA;AzEy4OZ;;AyEh5OQ;EAOI,wBAAA;AzE64OZ;;AyEp5OQ;EAOI,4BAAA;AzEi5OZ;;AyEx5OQ;EAOI,yBAAA;AzEq5OZ;;AyE55OQ;EAOI,8BAAA;AzEy5OZ;;AyEh6OQ;EAOI,iCAAA;AzE65OZ;;AyEp6OQ;EAOI,sCAAA;AzEi6OZ;;AyEx6OQ;EAOI,yCAAA;AzEq6OZ;;AyE56OQ;EAOI,uBAAA;AzEy6OZ;;AyEh7OQ;EAOI,uBAAA;AzE66OZ;;AyEp7OQ;EAOI,yBAAA;AzEi7OZ;;AyEx7OQ;EAOI,yBAAA;AzEq7OZ;;AyE57OQ;EAOI,0BAAA;AzEy7OZ;;AyEh8OQ;EAOI,4BAAA;AzE67OZ;;AyEp8OQ;EAOI,kCAAA;AzEi8OZ;;AyEx8OQ;EAOI,sCAAA;AzEq8OZ;;AyE58OQ;EAOI,oCAAA;AzEy8OZ;;AyEh9OQ;EAOI,kCAAA;AzE68OZ;;AyEp9OQ;EAOI,yCAAA;AzEi9OZ;;AyEx9OQ;EAOI,wCAAA;AzEq9OZ;;AyE59OQ;EAOI,wCAAA;AzEy9OZ;;AyEh+OQ;EAOI,kCAAA;AzE69OZ;;AyEp+OQ;EAOI,gCAAA;AzEi+OZ;;AyEx+OQ;EAOI,8BAAA;AzEq+OZ;;AyE5+OQ;EAOI,gCAAA;AzEy+OZ;;AyEh/OQ;EAOI,+BAAA;AzE6+OZ;;AyEp/OQ;EAOI,oCAAA;AzEi/OZ;;AyEx/OQ;EAOI,kCAAA;AzEq/OZ;;AyE5/OQ;EAOI,gCAAA;AzEy/OZ;;AyEhgPQ;EAOI,uCAAA;AzE6/OZ;;AyEpgPQ;EAOI,sCAAA;AzEigPZ;;AyExgPQ;EAOI,iCAAA;AzEqgPZ;;AyE5gPQ;EAOI,2BAAA;AzEygPZ;;AyEhhPQ;EAOI,iCAAA;AzE6gPZ;;AyEphPQ;EAOI,+BAAA;AzEihPZ;;AyExhPQ;EAOI,6BAAA;AzEqh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E81PZ;;AyEr2PQ;EAOI,4BAAA;EAAA,+BAAA;AzEm2PZ;;AyE12PQ;EAOI,yBAAA;AzEu2PZ;;AyE92PQ;EAOI,+BAAA;AzE22PZ;;AyEl3PQ;EAOI,8BAAA;AzE+2PZ;;AyEt3PQ;EAOI,4BAAA;AzEm3PZ;;AyE13PQ;EAOI,8BAAA;AzEu3PZ;;AyE93PQ;EAOI,4BAAA;AzE23PZ;;AyEl4PQ;EAOI,2BAAA;AzE+3PZ;;AyEt4PQ;EAOI,iCAAA;AzEm4PZ;;AyE14PQ;EAOI,gCAAA;AzEu4PZ;;AyE94PQ;EAOI,8BAAA;AzE24PZ;;AyEl5PQ;EAOI,gCAAA;AzE+4PZ;;AyEt5PQ;EAOI,8BAAA;AzEm5PZ;;AyE15PQ;EAOI,4BAAA;AzEu5PZ;;AyE95PQ;EAOI,kCAAA;AzE25PZ;;AyEl6PQ;EAOI,iCAAA;AzE+5PZ;;AyEt6PQ;EAOI,+BAAA;AzEm6PZ;;AyE16PQ;EAOI,iCAAA;AzEu6PZ;;AyE96PQ;EAOI,+BAAA;AzE26PZ;;AyEl7PQ;EAOI,0BAAA;AzE+6PZ;;AyEt7PQ;EAOI,gCAAA;AzEm7PZ;;AyE17PQ;EAOI,+BAAA;AzEu7PZ;;AyE97PQ;EAOI,6BAAA;AzE27PZ;;AyEl8PQ;EAOI,+BAAA;AzE+7PZ;;AyEt8PQ;EAOI,6BAAA;AzEm8PZ;;AyE18PQ;EAOI,iBAAA;AzEu8PZ;;AyE98PQ;EAOI,uBAAA;AzE28PZ;;AyEl9PQ;EAOI,sBAAA;AzE+8PZ;;AyEt9PQ;EAOI,oBAAA;AzEm9PZ;;AyE19PQ;EAOI,sBAAA;AzEu9PZ;;AyE99PQ;EAOI,oBAAA;AzE29PZ;;AyEl+PQ;EAOI,qBAAA;AzE+9PZ;;AyEt+PQ;EAOI,2BAAA;AzEm+PZ;;AyE1+PQ;EAOI,0BAAA;AzEu+PZ;;AyE9+PQ;EAOI,wBAAA;AzE2+PZ;;AyEl/PQ;EAOI,0BAAA;AzE++PZ;;AyEt/PQ;EAOI,wBAAA;AzEm/PZ;;AyE1/PQ;EAOI,wBAAA;AzEu/PZ;;AyE9/PQ;EAOI,8BAAA;AzE2/PZ;;AyElgQQ;EAOI,6BAAA;AzE+/PZ;;AyEtgQQ;EAOI,2BAAA;AzEmgQZ;;AyE1gQQ;EAOI,6BAAA;AzEugQZ;;AyE9gQ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yE1zRQ;EAOI,qBAAA;AzEuzRZ;;AyE9zRQ;EAOI,qBAAA;AzE2zRZ;;Aer0RI;E0DGI;IAOI,sBAAA;EzEg0RV;EyEv0RM;IAOI,uBAAA;EzEm0RV;EyE10RM;IAOI,sBAAA;EzEs0RV;EyE70RM;IAOI,8BAAA;EzEy0RV;EyEh1RM;IAOI,4BAAA;EzE40RV;EyEn1RM;IAOI,2BAAA;EzE+0RV;EyEt1RM;IAOI,iCAAA;EzEk1RV;EyEz1RM;IAOI,2BAAA;EzEq1RV;EyE51RM;IAOI,0BAAA;EzEw1RV;EyE/1RM;IAOI,gCAAA;EzE21RV;EyEl2RM;IAOI,yBAAA;EzE81RV;EyEr2RM;IAOI,wBAAA;EzEi2RV;EyEx2RM;IAOI,+BAAA;EzEo2RV;EyE32RM;IAOI,yBAAA;EzEu2RV;EyE92RM;IAOI,6BAAA;EzE02RV;EyEj3RM;IAOI,8BAAA;EzE62RV;EyEp3RM;IAOI,wBAAA;EzEg3RV;EyEv3RM;IAOI,+BAAA;EzEm3RV;EyE13RM;IAOI,wBAAA;EzEs3RV;EyE73RM;IAOI,yBAAA;EzEy3RV;EyEh4RM;IAOI,8BAAA;EzE43RV;EyEn4RM;IAOI,iCAAA;EzE+3RV;EyEt4RM;IAOI,sCAAA;EzEk4RV;EyEz4RM;IAOI,yCAAA;EzEq4RV;EyE54RM;IAOI,uBAAA;EzEw4RV;EyE/4RM;IAOI,uBAAA;EzE24RV;EyEl5RM;IAOI,yBAAA;EzE84RV;EyEr5RM;IAOI,yBAAA;EzEi5RV;EyEx5RM;IAOI,0BAAA;EzEo5RV;EyE35RM;IAOI,4BAAA;EzEu5RV;EyE95RM;IAOI,kCAAA;EzE05RV;EyEj6RM;IAOI,sCAAA;EzE65RV;EyEp6RM;IAOI,oCAAA;EzEg6RV;EyEv6RM;IAOI,kCAAA;EzEm6RV;EyE16RM;IAOI,yCAAA;EzEs6RV;EyE76RM;IAOI,wCAAA;EzEy6RV;EyEh7RM;IAOI,wCAAA;EzE46RV;EyEn7RM;IAOI,kCAAA;EzE+6RV;EyEt7RM;IAOI,gCAAA;EzEk7RV;EyEz7RM;IAOI,8BAAA;EzEq7RV;EyE57RM;IAOI,gCAAA;EzEw7RV;EyE/7RM;IAOI,+BAAA;EzE27RV;EyEl8R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;EyE70SM;IAOI,wBAAA;EzEy0SV;EyEh1SM;IAOI,8BAAA;EzE40SV;EyEn1SM;IAOI,6BAAA;EzE+0SV;EyEt1SM;IAOI,2BAAA;EzEk1SV;EyEz1SM;IAOI,6BAAA;EzEq1SV;EyE51SM;IAOI,2BAAA;EzEw1SV;EyE/1SM;IAOI,2BAAA;EzE21SV;EyEl2SM;IAOI,4BAAA;EzE81SV;EyEr2SM;IAOI,6BAAA;EzEi2SV;AACF;Ae52SI;E0DGI;IAOI,sBAAA;EzEs2SV;EyE72SM;IAOI,uBAAA;EzEy2SV;EyEh3SM;IAOI,sBAAA;EzE42SV;EyEn3SM;IAOI,8BAAA;EzE+2SV;EyEt3SM;IAOI,4BAAA;EzEk3SV;EyEz3SM;IAOI,2BAAA;EzEq3SV;EyE53SM;IAOI,iCAAA;EzEw3SV;EyE/3SM;IAOI,2BAAA;EzE23SV;EyEl4SM;IAOI,0BAAA;EzE83SV;EyEr4SM;IAOI,gCAAA;EzEi4SV;EyEx4SM;IAOI,yBAAA;EzEo4SV;EyE34SM;IAOI,wBAAA;EzEu4SV;EyE94SM;IAOI,+BAAA;EzE04SV;EyEj5SM;IAOI,yBAAA;EzE64SV;EyEp5SM;IAOI,6BAAA;EzEg5SV;EyEv5SM;IAOI,8BAAA;EzEm5SV;EyE15SM;IAOI,wBAAA;EzEs5SV;EyE75SM;IAOI,+BAAA;EzEy5SV;EyEh6SM;IAOI,wBAAA;EzE45SV;EyEn6SM;IAOI,yBAAA;EzE+5SV;EyEt6SM;IAOI,8BAAA;EzEk6SV;EyEz6SM;IAOI,iCAAA;EzEq6SV;EyE56SM;IAOI,sCAAA;EzEw6SV;EyE/6SM;IAOI,yCAAA;EzE26SV;EyEl7SM;IAOI,uBAAA;EzE86SV;EyEr7SM;IAOI,uBAAA;EzEi7SV;EyEx7SM;IAOI,yBAAA;EzEo7SV;EyE37SM;IAOI,yBAAA;EzEu7SV;EyE97SM;IAOI,0BAAA;EzE07SV;EyEj8SM;IAOI,4BAAA;EzE67SV;EyEp8SM;IAOI,kCAAA;EzEg8SV;EyEv8SM;IAOI,sCAAA;EzEm8SV;EyE18SM;IAOI,oCAAA;EzEs8SV;EyE78SM;IAOI,kCAAA;EzEy8SV;EyEh9SM;IAOI,yCAAA;EzE48SV;E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Eu1TV;EyE91TM;IAOI,oBAAA;EzE01TV;EyEj2TM;IAOI,qBAAA;EzE61TV;EyEp2TM;IAOI,2BAAA;EzEg2TV;EyEv2TM;IAOI,0BAAA;EzEm2TV;EyE12TM;IAOI,wBAAA;EzEs2TV;EyE72TM;IAOI,0BAAA;EzEy2TV;EyEh3TM;IAOI,wBAAA;EzE42TV;EyEn3TM;IAOI,wBAAA;EzE+2TV;EyEt3TM;IAOI,8BAAA;EzEk3TV;EyEz3TM;IAOI,6BAAA;EzEq3TV;EyE53TM;IAOI,2BAAA;EzEw3TV;EyE/3TM;IAOI,6BAAA;EzE23TV;EyEl4TM;IAOI,2BAAA;EzE83TV;EyEr4TM;IAOI,2BAAA;EzEi4TV;EyEx4TM;IAOI,4BAAA;EzEo4TV;EyE34TM;IAOI,6BAAA;EzEu4TV;AACF;Ael5TI;E0DGI;IAOI,sBAAA;EzE44TV;EyEn5TM;IAOI,uBAAA;EzE+4TV;EyEt5TM;IAOI,sBAAA;EzEk5TV;EyEz5TM;IAOI,8BAAA;EzEq5TV;EyE55TM;IAOI,4BAAA;EzEw5TV;EyE/5TM;IAOI,2BAAA;EzE25TV;EyEl6TM;IAOI,iCAAA;EzE85TV;EyEr6TM;IAOI,2BAAA;EzEi6TV;EyEx6TM;IAOI,0BAAA;EzEo6TV;EyE36TM;IAOI,gCAAA;EzEu6TV;EyE96TM;IAOI,yBAAA;EzE06TV;EyEj7TM;IAOI,wBAAA;EzE66TV;EyEp7TM;IAOI,+BAAA;EzEg7TV;EyEv7TM;IAOI,yBAAA;EzEm7TV;EyE17TM;IAOI,6BAAA;EzEs7TV;EyE77TM;IAOI,8BAAA;EzEy7TV;EyEh8TM;IAOI,wBAAA;EzE47TV;EyEn8TM;IAOI,+BAAA;EzE+7TV;EyEt8TM;IAOI,wBAAA;EzEk8TV;EyEz8TM;IAOI,yBAAA;EzEq8TV;EyE58TM;IAOI,8BAAA;EzEw8TV;EyE/8TM;IAOI,iCAAA;EzE28TV;EyEl9TM;IAOI,sCAAA;EzE88TV;EyEr9TM;IAOI,yCAAA;EzEi9TV;EyEx9TM;IAOI,uBAAA;EzEo9TV;EyE39TM;IAOI,uBAAA;EzEu9TV;EyE99TM;IAOI,yBAAA;EzE09TV;EyEj+TM;IAOI,yBAAA;EzE69TV;EyEp+TM;IAOI,0BAAA;EzEg+TV;EyEv+TM;IAOI,4BAAA;EzEm+TV;EyE1+TM;IAOI,kCAAA;EzEs+TV;EyE7+TM;IAOI,sCAAA;EzEy+TV;EyEh/TM;IAOI,oCAAA;EzE4+TV;EyEn/TM;IAOI,kCAAA;EzE++TV;EyEt/TM;IAOI,yCAAA;EzEk/TV;EyEz/TM;IAOI,wCAAA;EzEq/TV;EyE5/TM;IAOI,wCAAA;EzEw/TV;EyE//TM;IAOI,kCAAA;EzE2/TV;EyElgUM;IAOI,gCAAA;EzE8/TV;EyErgUM;IAOI,8BAAA;EzEigUV;EyExgUM;IAOI,gCAAA;EzEogUV;EyE3gUM;IAOI,+BAAA;EzEugUV;EyE9gUM;IAOI,oCAAA;EzE0gUV;EyEjhUM;IAOI,kCAAA;EzE6gUV;EyEphUM;IAOI,gCAAA;EzEghUV;EyEvhUM;IAOI,uCAAA;EzEmhUV;EyE1hUM;IAOI,sCAAA;EzEshUV;EyE7hUM;IAOI,iCAAA;EzEyhUV;EyEhiUM;IAOI,2BAAA;EzE4hUV;EyEniUM;IAOI,iCAAA;EzE+hUV;EyEtiUM;IAOI,+BAAA;EzEkiUV;EyEziUM;IAOI,6BAAA;EzEqiUV;EyE5iUM;IAOI,+BAAA;EzEwiUV;EyE/iUM;IAOI,8BAAA;EzE2iUV;EyEljUM;IAOI,oBAAA;EzE8iUV;EyErjUM;IAOI,mBAAA;EzEijUV;EyExjUM;IAOI,mBAAA;EzEojUV;EyE3jUM;IAOI,mBAAA;EzEujUV;EyE9jUM;IAOI,mBAAA;EzE0jUV;EyEjkUM;IAOI,mBAAA;EzE6jUV;EyEpkUM;IAOI,mBAAA;EzEgkUV;EyEvkUM;IAOI,mBAAA;EzEmkUV;EyE1kUM;IAOI,oBAAA;EzEskUV;EyE7kUM;IAOI,0BAAA;EzEykUV;EyEhlUM;IAOI,yBAAA;EzE4kUV;EyEnlUM;IAOI,uBAAA;EzE+kUV;EyEtlUM;IAOI,yBAAA;EzEklUV;EyEzlUM;IAOI,uBAAA;EzEqlUV;EyE5lUM;IAOI,uBAAA;EzEwlUV;EyE/lUM;IAOI,0BAAA;IAAA,yBAAA;EzE4lUV;EyEnmUM;IAOI,gCAAA;IAAA,+BAAA;EzEgmUV;EyEvmUM;IAOI,+BAAA;IAAA,8BAAA;EzEomUV;EyE3mUM;IAOI,6BAAA;IAAA,4BAAA;EzEwmUV;EyE/mUM;IAOI,+BAAA;IAAA,8BAAA;EzE4mUV;EyEnnUM;IAOI,6BAAA;IAAA,4BAAA;EzEgnUV;EyEvnUM;IAOI,6BAAA;IAAA,4BAAA;EzEonUV;EyE3nUM;IAOI,wBAAA;IAAA,2BAAA;EzEwnUV;EyE/nUM;IAOI,8BAAA;IAAA,iCAAA;EzE4nUV;EyEnoUM;IAOI,6BAAA;IAAA,gCAAA;EzEgoUV;EyEvoUM;IAOI,2BAAA;IAAA,8BAAA;EzEooUV;EyE3oUM;IAOI,6BAAA;IAAA,gCAAA;EzEwoUV;EyE/oUM;IAOI,2BAAA;IAAA,8BAAA;EzE4oUV;EyEnpUM;IAOI,2BAAA;IAAA,8BAAA;EzEgpUV;EyEvpUM;IAOI,wBAAA;EzEmpUV;EyE1pUM;IAOI,8BAAA;EzEspUV;EyE7pUM;IAOI,6BAAA;EzEypUV;EyEhqUM;IAOI,2BAAA;EzE4pUV;EyEnqUM;IAOI,6BAAA;EzE+pUV;EyEtqUM;IAOI,2BAAA;EzEkqUV;EyEzqUM;IAOI,2BAAA;EzEqqUV;EyE5qUM;IAOI,0BAAA;EzEwqUV;EyE/qUM;IAOI,gCAAA;EzE2qUV;EyElrUM;IAOI,+BAAA;EzE8qUV;EyErrUM;IAOI,6BAAA;EzEirUV;EyExrUM;IAOI,+BAAA;EzEorUV;EyE3rUM;IAOI,6BAAA;EzEurUV;EyE9rUM;IAOI,6BAAA;EzE0rUV;EyEjsUM;IAOI,2BAAA;EzE6rUV;EyEpsUM;IAOI,iCAAA;EzEgsUV;EyEvsUM;IAOI,gCAAA;EzEmsUV;EyE1sUM;IAOI,8BAAA;EzEssUV;EyE7sUM;IAOI,gCAAA;EzEysUV;EyEhtUM;IAOI,8BAAA;EzE4sUV;EyEntUM;IAOI,8BAAA;EzE+sUV;EyEttUM;IAOI,yBAAA;EzEktUV;EyEztUM;IAOI,+BAAA;EzEqtUV;EyE5tUM;IAOI,8BAAA;EzEwtUV;EyE/tUM;IAOI,4BAAA;EzE2tUV;EyEluUM;IAOI,8BAAA;EzE8tUV;EyEruUM;IAOI,4BAAA;EzEiuUV;EyExuUM;IAOI,4BAAA;EzEouUV;EyE3uUM;IAOI,qBAAA;EzEuuUV;EyE9uUM;IAOI,2BAAA;EzE0uUV;EyEjvUM;IAOI,0BAAA;EzE6uUV;EyEpvUM;IAOI,wBAAA;EzEgvUV;EyEvvUM;IAOI,0BAAA;EzEmvUV;EyE1vUM;IAOI,wBAAA;EzEsvUV;EyE7vUM;IAOI,2BAAA;IAAA,0BAAA;EzE0vUV;EyEjwUM;IAOI,iCAAA;IAAA,gCAAA;EzE8vUV;EyErwUM;IAOI,gCAAA;IAAA,+BAAA;EzEkwUV;EyEzwUM;IAOI,8BAAA;IAAA,6BAAA;EzEswUV;EyE7wUM;IAOI,gCAAA;IAAA,+BAAA;EzE0wUV;EyEjxUM;IAOI,8BAAA;IAAA,6BAAA;EzE8wUV;EyErxUM;IAOI,yBAAA;IAAA,4BAAA;EzEkxUV;EyEzxUM;IAOI,+BAAA;IAAA,kCAAA;EzEsxUV;EyE7xUM;IAOI,8BAAA;IAAA,iCAAA;EzE0xUV;EyEjyUM;IAOI,4BAAA;IAAA,+BAAA;EzE8xUV;EyEryUM;IAOI,8BAAA;IAAA,iCAAA;EzEkyUV;EyEzyUM;IAOI,4BAAA;IAAA,+BAAA;EzEsyUV;EyE7yUM;IAOI,yBAAA;EzEyyUV;EyEhzUM;IAOI,+BAAA;EzE4yUV;EyEnzUM;IAOI,8BAAA;EzE+yUV;EyEtzUM;IAOI,4BAAA;EzEkzUV;EyEzzUM;IAOI,8BAAA;EzEqzUV;EyE5zUM;IAOI,4BAAA;EzEwzUV;EyE/zUM;IAOI,2BAAA;EzE2zUV;EyEl0UM;IAOI,iCAAA;EzE8zUV;EyEr0UM;IAOI,gCAAA;EzEi0UV;EyEx0UM;IAOI,8BAAA;EzEo0UV;EyE30UM;IAOI,gCAAA;EzEu0UV;EyE90UM;IAOI,8BAAA;EzE00UV;EyEj1UM;IAOI,4BAAA;EzE60UV;EyEp1UM;IAOI,kCAAA;EzEg1UV;EyEv1UM;IAOI,iCAAA;EzEm1UV;EyE11UM;IAOI,+BAAA;EzEs1UV;EyE71UM;IAOI,iCAAA;EzEy1UV;EyEh2UM;IAOI,+BAAA;EzE41UV;EyEn2UM;IAOI,0BAAA;EzE+1UV;EyEt2UM;IAOI,gCAAA;EzEk2UV;EyEz2UM;IAOI,+BAAA;EzEq2UV;EyE52UM;IAOI,6BAAA;EzEw2UV;EyE/2UM;IAOI,+BAAA;EzE22UV;EyEl3UM;IAOI,6BAAA;EzE82UV;EyEr3UM;IAOI,iBAAA;EzEi3UV;EyEx3UM;IAOI,uBAAA;EzEo3UV;EyE33UM;IAOI,sBAAA;EzEu3UV;EyE93UM;IAOI,oBAAA;EzE03UV;EyEj4UM;IAOI,sBAAA;EzE63UV;EyEp4UM;IAOI,oBAAA;EzEg4UV;EyEv4UM;IAOI,qBAAA;EzEm4UV;EyE14UM;IAOI,2BAAA;EzEs4UV;EyE74UM;IAOI,0BAAA;EzEy4UV;EyEh5UM;IAOI,wBAAA;EzE44UV;EyEn5UM;IAOI,0BAAA;EzE+4UV;EyEt5UM;IAOI,wBAAA;EzEk5UV;EyEz5UM;IAOI,wBAAA;EzEq5UV;EyE55UM;IAOI,8BAAA;EzEw5UV;EyE/5UM;IAOI,6BAAA;EzE25UV;EyEl6UM;IAOI,2BAAA;EzE85UV;EyEr6UM;IAOI,6BAAA;EzEi6UV;EyEx6UM;IAOI,2BAAA;EzEo6UV;EyE36UM;IAOI,2BAAA;EzEu6UV;EyE96UM;IAOI,4BAAA;EzE06UV;EyEj7UM;IAOI,6BAAA;EzE66UV;AACF;Aex7UI;E0DGI;IAOI,sBAAA;EzEk7UV;EyEz7UM;IAOI,uBAAA;EzEq7UV;EyE57UM;IAOI,sBAAA;EzEw7UV;EyE/7UM;IAOI,8BAAA;EzE27UV;EyEl8UM;IAOI,4BAAA;EzE87UV;EyEr8UM;IAOI,2BAAA;EzEi8UV;EyEx8UM;IAOI,iCAAA;EzEo8UV;EyE38UM;IAOI,2BAAA;EzEu8UV;EyE98UM;IAOI,0BAAA;EzE08UV;EyEj9UM;IAOI,gCAAA;EzE68UV;EyEp9UM;IAOI,yBAAA;EzEg9UV;EyEv9UM;IAOI,wBAAA;EzEm9UV;EyE19UM;IAOI,+BAAA;EzEs9UV;EyE79UM;IAOI,yBAAA;EzEy9UV;EyEh+UM;IAOI,6BAAA;EzE49UV;EyEn+UM;IAOI,8BAAA;EzE+9UV;EyEt+UM;IAOI,wBAAA;EzEk+UV;EyEz+UM;IAOI,+BAAA;EzEq+UV;EyE5+UM;IAOI,wBAAA;EzEw+UV;EyE/+UM;IAOI,yBAAA;EzE2+UV;EyEl/UM;IAOI,8BAAA;EzE8+UV;EyEr/UM;IAOI,iCAAA;EzEi/UV;EyEx/UM;IAOI,sCAAA;EzEo/UV;EyE3/UM;IAOI,yCAAA;EzEu/UV;EyE9/UM;IAOI,uBAAA;EzE0/UV;EyEjgVM;IAOI,uBAAA;EzE6/UV;EyEpgVM;IAOI,yBAAA;EzEggVV;EyEvgVM;IAOI,yBAAA;EzEmgVV;EyE1gVM;IAOI,0BAAA;EzEsgVV;EyE7gVM;IAOI,4BAAA;EzEygVV;EyEhhVM;IAOI,kCAAA;EzE4gVV;EyEnhVM;IAOI,sCAAA;EzE+gVV;EyEthVM;IAOI,oCAAA;EzEkhVV;EyEzhVM;IAOI,kCAAA;EzEqhVV;EyE5hVM;IAOI,yCAAA;EzEwhVV;EyE/hVM;IAOI,wCAAA;EzE2hVV;EyEliVM;IAOI,wCAAA;EzE8hVV;EyEriVM;IAOI,kCAAA;EzEiiVV;EyExiVM;IAOI,gCAAA;EzEoiVV;EyE3iVM;IAOI,8BAAA;EzEuiVV;EyE9iVM;IAOI,gCAAA;EzE0iVV;EyEjjVM;IAOI,+BAAA;EzE6iVV;EyEpjVM;IAOI,oCAAA;EzEgjVV;EyEvjVM;IAOI,kCAAA;EzEmjVV;EyE1jVM;IAOI,gCAAA;EzEsjVV;EyE7jVM;IAOI,uCAAA;EzEyjVV;EyEhkVM;IAOI,sCAAA;EzE4jVV;EyEnkVM;IAOI,iCAAA;EzE+jVV;EyEtkVM;IAOI,2BAAA;EzEkkVV;EyEzkVM;IAOI,iCAAA;EzEqkVV;EyE5kVM;IAOI,+BAAA;EzEwkVV;EyE/kVM;IAOI,6BAAA;EzE2kVV;EyEllVM;IAOI,+BAAA;EzE8kVV;EyErlVM;IAOI,8BAAA;EzEilVV;EyExlVM;IAOI,oBAAA;EzEolVV;EyE3lVM;IAOI,mBAAA;EzEulVV;EyE9lVM;IAOI,mBAAA;EzE0lVV;EyEjmVM;IAOI,mBAAA;EzE6lVV;EyEpmVM;IAOI,mBAAA;EzEgmVV;EyEvmVM;IAOI,mBAAA;EzEmmVV;EyE1mVM;IAOI,mBAAA;EzEsmVV;EyE7mVM;IAOI,mBAAA;EzEymVV;EyEhnVM;IAOI,oBAAA;EzE4mVV;EyEnnVM;IAOI,0BAAA;EzE+mVV;EyEtnVM;IAOI,yBAAA;EzEknVV;EyE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I,iCAAA;EzEy3VV;EyEh4VM;IAOI,+BAAA;EzE43VV;EyEn4VM;IAOI,iCAAA;EzE+3VV;EyEt4VM;IAOI,+BAAA;EzEk4VV;EyEz4VM;IAOI,0BAAA;EzEq4VV;EyE54VM;IAOI,gCAAA;EzEw4VV;EyE/4VM;IAOI,+BAAA;EzE24VV;EyEl5VM;IAOI,6BAAA;EzE84VV;EyEr5VM;IAOI,+BAAA;EzEi5VV;EyEx5VM;IAOI,6BAAA;EzEo5VV;EyE35VM;IAOI,iBAAA;EzEu5VV;EyE95VM;IAOI,uBAAA;EzE05VV;EyEj6VM;IAOI,sBAAA;EzE65VV;EyEp6VM;IAOI,oBAAA;EzEg6VV;EyEv6VM;IAOI,sBAAA;EzEm6VV;EyE16VM;IAOI,oBAAA;EzEs6VV;EyE76VM;IAOI,qBAAA;EzEy6VV;EyEh7VM;IAOI,2BAAA;EzE46VV;EyEn7VM;IAOI,0BAAA;EzE+6VV;EyEt7VM;IAOI,wBAAA;EzEk7VV;EyEz7VM;IAOI,0BAAA;EzEq7VV;EyE57VM;IAOI,wBAAA;EzEw7VV;EyE/7VM;IAOI,wBAAA;EzE27VV;EyEl8VM;IAOI,8BAAA;EzE87VV;EyEr8VM;IAOI,6BAAA;EzEi8VV;EyEx8VM;IAOI,2BAAA;EzEo8VV;EyE38VM;IAOI,6BAAA;EzEu8VV;EyE98VM;IAOI,2BAAA;EzE08VV;EyEj9VM;IAOI,2BAAA;EzE68VV;EyEp9VM;IAOI,4BAAA;EzEg9VV;EyEv9VM;IAOI,6BAAA;EzEm9VV;AACF;Ae99VI;E0DGI;IAOI,sBAAA;EzEw9VV;EyE/9VM;IAOI,uBAAA;EzE29VV;EyEl+VM;IAOI,sBAAA;EzE89VV;EyEr+VM;IAOI,8BAAA;EzEi+VV;EyEx+VM;IAOI,4BAAA;EzEo+VV;EyE3+VM;IAOI,2BAAA;EzEu+VV;EyE9+VM;IAOI,iCAAA;EzE0+VV;EyEj/VM;IAOI,2BAAA;EzE6+VV;EyEp/VM;IAOI,0BAAA;EzEg/VV;EyEv/VM;IAOI,gCAAA;EzEm/VV;EyE1/VM;IAOI,yBAAA;EzEs/VV;EyE7/VM;IAOI,wBAAA;EzEy/VV;EyEhgWM;IAOI,+BAAA;EzE4/VV;EyEngWM;IAOI,yBAAA;EzE+/VV;EyEtgWM;IAOI,6BAAA;EzEkgWV;EyEzgWM;IAOI,8BAAA;EzEqgWV;EyE5gWM;IAOI,wBAAA;EzEwgWV;EyE/gWM;IAOI,+BAAA;EzE2gWV;EyElhWM;IAOI,wBAAA;EzE8gWV;EyErhWM;IAOI,yBAAA;EzEihWV;EyExhWM;IAOI,8BAAA;EzEohWV;EyE3hWM;IAOI,iCAAA;EzEuhWV;EyE9hWM;IAOI,sCAAA;EzE0hWV;EyEjiWM;IAOI,yCAAA;EzE6hWV;EyEpiWM;IAOI,uBAAA;EzEgiWV;EyEviWM;IAOI,uBAAA;EzEmiWV;EyE1iWM;IAOI,yBAAA;EzEsiWV;EyE7iWM;IAOI,yBAAA;EzEyiWV;EyEhjWM;IAOI,0BAAA;EzE4iWV;EyEnjWM;IAOI,4BAAA;EzE+iWV;EyEtjWM;IAOI,kCAAA;EzEkjWV;EyEzjWM;IAOI,sCAAA;EzEqjWV;EyE5jWM;IAOI,oCAAA;EzEwjWV;EyE/jWM;IAOI,kCAAA;EzE2jWV;EyElkWM;IAOI,yCAAA;EzE8jWV;EyErkWM;IAOI,wCAAA;EzEikWV;EyExkWM;IAOI,wCAAA;EzEokWV;EyE3kWM;IAOI,kCAAA;EzEukWV;EyE9kWM;IAOI,gCAAA;EzE0kWV;EyEjlWM;IAOI,8BAAA;EzE6kWV;EyEplWM;IAOI,gCAAA;EzEglWV;EyEvlWM;IAOI,+BAAA;EzEmlWV;EyE1lWM;IAOI,oCAAA;EzEslWV;EyE7lWM;IAOI,kCAAA;EzEylWV;EyEhmWM;IAOI,gCAAA;EzE4lWV;EyEnmWM;IAOI,uCAAA;EzE+lWV;EyEtmWM;IAOI,sCAAA;EzEkmWV;EyEzmWM;IAOI,iCAAA;EzEqmWV;EyE5mWM;IAOI,2BAAA;EzEwmWV;EyE/mWM;IAOI,iCAAA;EzE2mWV;EyElnWM;IAOI,+BAAA;EzE8mWV;EyErnWM;IAOI,6BAAA;EzEinWV;EyExnWM;IAOI,+BAAA;EzEonWV;EyE3nWM;IAOI,8BAAA;EzEunWV;EyE9nWM;IAOI,oBAAA;EzE0nWV;EyEjoWM;IAOI,mBAAA;EzE6nWV;EyEpoWM;IAOI,mBAAA;EzEgoWV;EyEvoWM;IAOI,mBAAA;EzEmoWV;EyE1oWM;IAOI,mBAAA;EzEsoWV;EyE7oWM;IAOI,mBAAA;EzEyoWV;EyEhpWM;IAOI,mBAAA;EzE4oWV;EyEnpWM;IAOI,mBAAA;EzE+oWV;EyEtpWM;IAOI,oBAAA;EzEkpWV;EyEzpWM;IAOI,0BAAA;EzEqpWV;EyE5pWM;IAOI,yBAAA;EzEwpWV;EyE/pWM;IAOI,uBAAA;EzE2pWV;EyElqWM;IAOI,yBAAA;EzE8pWV;EyErqWM;IAOI,uBAAA;EzEiqWV;EyExqWM;IAOI,uBAAA;EzEoqWV;EyE3qWM;IAOI,0BAAA;IAAA,yBAAA;EzEwqWV;EyE/qWM;IAOI,gCAAA;IAAA,+BAAA;EzE4qWV;EyEnrWM;IAOI,+BAAA;IAAA,8BAAA;EzEgrWV;EyEvrWM;IAOI,6BAAA;IAAA,4BAAA;EzEorWV;EyE3rWM;IAOI,+BAAA;IAAA,8BAAA;EzEwrWV;EyE/rWM;IAOI,6BAAA;IAAA,4BAAA;EzE4rWV;EyEnsWM;IAOI,6BAAA;IAAA,4BAAA;EzEgsWV;EyEvsWM;IAOI,wBAAA;IAAA,2BAAA;EzEosWV;EyE3sWM;IAOI,8BAAA;IAAA,iCAAA;EzEwsWV;EyE/sWM;IAOI,6BAAA;IAAA,gCAAA;EzE4sWV;EyEntWM;IAOI,2BAAA;IAAA,8BAAA;EzEgtWV;EyEvtWM;IAOI,6BAAA;IAAA,gCAAA;EzEotWV;EyE3tWM;IAOI,2BAAA;IAAA,8BAAA;EzEwtWV;EyE/tWM;IAOI,2BAAA;IAAA,8BAAA;EzE4tWV;EyEnuWM;IAOI,wBAAA;EzE+tWV;EyEtuWM;IAOI,8BAAA;EzEkuWV;EyEzuWM;IAOI,6BAAA;EzEquWV;EyE5uWM;IAOI,2BAAA;EzEwuWV;EyE/uWM;IAOI,6BAAA;EzE2uWV;EyElvWM;IAOI,2BAAA;EzE8uWV;EyErvWM;IAOI,2BAAA;EzEivWV;EyExvWM;IAOI,0BAAA;EzEovWV;EyE3vWM;IAOI,gCAAA;EzEuvWV;EyE9vWM;IAOI,+BAAA;EzE0vWV;EyEjwWM;IAOI,6BAAA;EzE6vWV;EyEpwWM;IAOI,+BAAA;EzEgwWV;EyEvwWM;IAOI,6BAAA;EzEmwWV;EyE1wWM;IAOI,6BAAA;EzEswWV;EyE7wWM;IAOI,2BAAA;EzEywWV;EyEhxWM;IAOI,iCAAA;EzE4wWV;EyEnxWM;IAOI,gCAAA;EzE+wWV;EyEtxWM;IAOI,8BAAA;EzEkxWV;EyEzxWM;IAOI,gCAAA;EzEqxWV;EyE5xWM;IAOI,8BAAA;EzEwxWV;EyE/xWM;IAOI,8BAAA;EzE2xWV;EyElyWM;IAOI,yBAAA;EzE8xWV;EyEryWM;IAOI,+BAAA;EzEiyWV;EyExyWM;IAOI,8BAAA;EzEoyWV;EyE3yWM;IAOI,4BAAA;EzEuyWV;EyE9yWM;IAOI,8BAAA;EzE0yWV;EyEjzWM;IAOI,4BAAA;EzE6yWV;EyEpzWM;IAOI,4BAAA;EzEgzWV;EyEvzWM;IAOI,qBAAA;EzEmzWV;EyE1zWM;IAOI,2BAAA;EzEszWV;EyE7zWM;IAOI,0BAAA;EzEyzWV;EyEh0WM;IAOI,wBAAA;EzE4zWV;EyEn0WM;IAOI,0BAAA;EzE+zWV;EyEt0WM;IAOI,wBAAA;EzEk0WV;EyEz0WM;IAOI,2BAAA;IAAA,0BAAA;EzEs0WV;EyE70WM;IAOI,iCAAA;IAAA,gCAAA;EzE00WV;EyEj1WM;IAOI,gCAAA;IAAA,+BAAA;EzE80WV;EyEr1WM;IAOI,8BAAA;IAAA,6BAAA;EzEk1WV;EyEz1WM;IAOI,gCAAA;IAAA,+BAAA;EzEs1WV;EyE71WM;IAOI,8BAAA;IAAA,6BAAA;EzE01WV;EyEj2WM;IAOI,yBAAA;IAAA,4BAAA;EzE81WV;EyEr2WM;IAOI,+BAAA;IAAA,kCAAA;EzEk2WV;EyEz2WM;IAOI,8BAAA;IAAA,iCAAA;EzEs2WV;EyE72WM;IAOI,4BAAA;IAAA,+BAAA;EzE02WV;EyEj3WM;IAOI,8BAAA;IAAA,iCAAA;EzE82WV;EyEr3WM;IAOI,4BAAA;IAAA,+BAAA;EzEk3WV;EyEz3WM;IAOI,yBAAA;EzEq3WV;EyE53WM;IAOI,+BAAA;EzEw3WV;EyE/3WM;IAOI,8BAAA;EzE23WV;EyEl4WM;IAOI,4BAAA;EzE83WV;EyEr4WM;IAOI,8BAAA;EzEi4WV;EyEx4WM;IAOI,4BAAA;EzEo4WV;EyE34WM;IAOI,2BAAA;EzEu4WV;EyE94WM;IAOI,iCAAA;EzE04WV;EyEj5WM;IAOI,gCAAA;EzE64WV;EyEp5WM;IAOI,8BAAA;EzEg5WV;EyEv5WM;IAOI,gCAAA;EzEm5WV;EyE15WM;IAOI,8BAAA;EzEs5WV;EyE75WM;IAOI,4BAAA;EzEy5WV;EyEh6WM;IAOI,kCAAA;EzE45WV;EyEn6WM;IAOI,iCAAA;EzE+5WV;EyEt6WM;IAOI,+BAAA;EzEk6WV;EyEz6WM;IAOI,iCAAA;EzEq6WV;EyE56WM;IAOI,+BAAA;EzEw6WV;EyE/6WM;IAOI,0BAAA;EzE26WV;EyEl7WM;IAOI,gCAAA;EzE86WV;EyEr7WM;IAOI,+BAAA;EzEi7WV;EyEx7WM;IAOI,6BAAA;EzEo7WV;EyE37WM;IAOI,+BAAA;EzEu7WV;EyE97WM;IAOI,6BAAA;EzE07WV;EyEj8WM;IAOI,iBAAA;EzE67WV;EyEp8WM;IAOI,uBAAA;EzEg8WV;EyEv8WM;IAOI,sBAAA;EzEm8WV;EyE18WM;IAOI,oBAAA;EzEs8WV;EyE78WM;IAOI,sBAAA;EzEy8WV;EyEh9WM;IAOI,oBAAA;EzE48WV;EyEn9WM;IAOI,qBAAA;EzE+8WV;EyEt9WM;IAOI,2BAAA;EzEk9WV;EyEz9WM;IAOI,0BAAA;EzEq9WV;EyE59WM;IAOI,wBAAA;EzEw9WV;EyE/9WM;IAOI,0BAAA;EzE29WV;EyEl+WM;IAOI,wBAAA;EzE89WV;EyEr+WM;IAOI,wBAAA;EzEi+WV;EyEx+WM;IAOI,8BAAA;EzEo+WV;EyE3+WM;IAOI,6BAAA;EzEu+WV;EyE9+WM;IAOI,2BAAA;EzE0+WV;EyEj/WM;IAOI,6BAAA;EzE6+WV;EyEp/WM;IAOI,2BAAA;EzEg/WV;EyEv/WM;IAOI,2BAAA;EzEm/WV;EyE1/WM;IAOI,4BAAA;EzEs/WV;EyE7/WM;IAOI,6BAAA;EzEy/WV;AACF;A0EhjXA;ED+CQ;IAOI,4BAAA;EzE8/WV;EyErgXM;IAOI,0BAAA;EzEigXV;EyExgXM;IAOI,6BAAA;EzEogXV;EyE3gXM;IAOI,4BAAA;EzEugXV;AACF;A0E3iXA;ED4BQ;IAOI,0BAAA;EzE4gXV;EyEnhXM;IAOI,gCAAA;EzE+gXV;EyEthXM;IAOI,yBAAA;EzEkhXV;EyEzhXM;IAOI,wBAAA;EzEqhXV;EyE5hXM;IAOI,+BAAA;EzEwhXV;EyE/hXM;IAOI,yBAAA;EzE2hXV;EyEliXM;IAOI,6BAAA;EzE8hXV;EyEriXM;IAOI,8BAAA;EzEiiXV;EyExiXM;IAOI,wBAAA;EzEoiXV;EyE3iXM;IAOI,+BAAA;EzEuiXV;EyE9iXM;IAOI,wBAAA;EzE0iXV;AACF;AAhnXA;EACE,yBAAA;AAknXF;;AA/mXA;;;EAGE,cAAA;AAknXF;;AA/mXA;EACE,sBAAA;AAknXF;;AA/mXA;EACE,UAAA;AAknXF;;AA/mXA;EACE,UAAA;EACA,cAAA;EACA,YAAA;AAknXF","sourcesContent":["@use \"../../../sass-partials/variables\" as *;\r\n@use \"../../../sass-partials/utils\" as *;\r\n@import \"bootstrap/scss/bootstrap\";\r\n\r\nbody {\r\n  background-color: #303030;\r\n}\r\n\r\n.main-container,\r\n.left,\r\n.right {\r\n  height: 100svh;\r\n}\r\n\r\n.left {\r\n  background-color: gray;\r\n}\r\n\r\n.left-image {\r\n  width: 80%;\r\n}\r\n\r\n.form {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n  color: black;\r\n}\r\n","//*font classes\r\n\r\n.limelight-bg {\r\n  font-family: \"Limelight\", sans-serif;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  font-size: 2.5rem;\r\n\r\n  @media (min-width: 500px) {\r\n    font-size: 7rem;\r\n  }\r\n\r\n  @media (min-width: 1000px) {\r\n    font-size: 10rem;\r\n  }\r\n}\r\n\r\n.limelight-sm {\r\n  font-family: \"Limelight\", sans-serif;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-size: 1.5rem;\r\n\r\n  @media (min-width: 500px) {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n\r\n.roboto-mono-regular {\r\n  font-family: \"Roboto Mono\", monospace;\r\n  font-weight: 200;\r\n  font-style: normal;\r\n  font-size: 1.5rem;\r\n}\r\n","@mixin bsBanner($file) {\n  /*!\n   * Bootstrap #{$file} v5.3.2 (https://getbootstrap.com/)\n   * Copyright 2011-2023 The Bootstrap Authors\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   */\n}\n",":root,\n[data-bs-theme=\"light\"] {\n  // Note: Custom variable values only support SassScript inside `#{}`.\n\n  // Colors\n  //\n  // Generate palettes for full colors, grays, and theme colors.\n\n  @each $color, $value in $colors {\n    --#{$prefix}#{$color}: #{$value};\n  }\n\n  @each $color, $value in $grays {\n    --#{$prefix}gray-#{$color}: #{$value};\n  }\n\n  @each $color, $value in $theme-colors {\n    --#{$prefix}#{$color}: #{$value};\n  }\n\n  @each $color, $value in $theme-colors-rgb {\n    --#{$prefix}#{$color}-rgb: #{$value};\n  }\n\n  @each $color, $value in $theme-colors-text {\n    --#{$prefix}#{$color}-text-emphasis: #{$value};\n  }\n\n  @each $color, $value in $theme-colors-bg-subtle {\n    --#{$prefix}#{$color}-bg-subtle: #{$value};\n  }\n\n  @each $color, $value in $theme-colors-border-subtle {\n    --#{$prefix}#{$color}-border-subtle: #{$value};\n  }\n\n  --#{$prefix}white-rgb: #{to-rgb($white)};\n  --#{$prefix}black-rgb: #{to-rgb($black)};\n\n  // Fonts\n\n  // Note: Use `inspect` for lists so that quoted items keep the quotes.\n  // See https://github.com/sass/sass/issues/2383#issuecomment-336349172\n  --#{$prefix}font-sans-serif: #{inspect($font-family-sans-serif)};\n  --#{$prefix}font-monospace: #{inspect($font-family-monospace)};\n  --#{$prefix}gradient: #{$gradient};\n\n  // Root and body\n  // scss-docs-start root-body-variables\n  @if $font-size-root != null {\n    --#{$prefix}root-font-size: #{$font-size-root};\n  }\n  --#{$prefix}body-font-family: #{inspect($font-family-base)};\n  @include rfs($font-size-base, --#{$prefix}body-font-size);\n  --#{$prefix}body-font-weight: #{$font-weight-base};\n  --#{$prefix}body-line-height: #{$line-height-base};\n  @if $body-text-align != null {\n    --#{$prefix}body-text-align: #{$body-text-align};\n  }\n\n  --#{$prefix}body-color: #{$body-color};\n  --#{$prefix}body-color-rgb: #{to-rgb($body-color)};\n  --#{$prefix}body-bg: #{$body-bg};\n  --#{$prefix}body-bg-rgb: #{to-rgb($body-bg)};\n\n  --#{$prefix}emphasis-color: #{$body-emphasis-color};\n  --#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color)};\n\n  --#{$prefix}secondary-color: #{$body-secondary-color};\n  --#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color)};\n  --#{$prefix}secondary-bg: #{$body-secondary-bg};\n  --#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg)};\n\n  --#{$prefix}tertiary-color: #{$body-tertiary-color};\n  --#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color)};\n  --#{$prefix}tertiary-bg: #{$body-tertiary-bg};\n  --#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg)};\n  // scss-docs-end root-body-variables\n\n  --#{$prefix}heading-color: #{$headings-color};\n\n  --#{$prefix}link-color: #{$link-color};\n  --#{$prefix}link-color-rgb: #{to-rgb($link-color)};\n  --#{$prefix}link-decoration: #{$link-decoration};\n\n  --#{$prefix}link-hover-color: #{$link-hover-color};\n  --#{$prefix}link-hover-color-rgb: #{to-rgb($link-hover-color)};\n\n  @if $link-hover-decoration != null {\n    --#{$prefix}link-hover-decoration: #{$link-hover-decoration};\n  }\n\n  --#{$prefix}code-color: #{$code-color};\n  --#{$prefix}highlight-color: #{$mark-color};\n  --#{$prefix}highlight-bg: #{$mark-bg};\n\n  // scss-docs-start root-border-var\n  --#{$prefix}border-width: #{$border-width};\n  --#{$prefix}border-style: #{$border-style};\n  --#{$prefix}border-color: #{$border-color};\n  --#{$prefix}border-color-translucent: #{$border-color-translucent};\n\n  --#{$prefix}border-radius: #{$border-radius};\n  --#{$prefix}border-radius-sm: #{$border-radius-sm};\n  --#{$prefix}border-radius-lg: #{$border-radius-lg};\n  --#{$prefix}border-radius-xl: #{$border-radius-xl};\n  --#{$prefix}border-radius-xxl: #{$border-radius-xxl};\n  --#{$prefix}border-radius-2xl: var(--#{$prefix}border-radius-xxl); // Deprecated in v5.3.0 for consistency\n  --#{$prefix}border-radius-pill: #{$border-radius-pill};\n  // scss-docs-end root-border-var\n\n  --#{$prefix}box-shadow: #{$box-shadow};\n  --#{$prefix}box-shadow-sm: #{$box-shadow-sm};\n  --#{$prefix}box-shadow-lg: #{$box-shadow-lg};\n  --#{$prefix}box-shadow-inset: #{$box-shadow-inset};\n\n  // Focus styles\n  // scss-docs-start root-focus-variables\n  --#{$prefix}focus-ring-width: #{$focus-ring-width};\n  --#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};\n  --#{$prefix}focus-ring-color: #{$focus-ring-color};\n  // scss-docs-end root-focus-variables\n\n  // scss-docs-start root-form-validation-variables\n  --#{$prefix}form-valid-color: #{$form-valid-color};\n  --#{$prefix}form-valid-border-color: #{$form-valid-border-color};\n  --#{$prefix}form-invalid-color: #{$form-invalid-color};\n  --#{$prefix}form-invalid-border-color: #{$form-invalid-border-color};\n  // scss-docs-end root-form-validation-variables\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark, true) {\n    color-scheme: dark;\n\n    // scss-docs-start root-dark-mode-vars\n    --#{$prefix}body-color: #{$body-color-dark};\n    --#{$prefix}body-color-rgb: #{to-rgb($body-color-dark)};\n    --#{$prefix}body-bg: #{$body-bg-dark};\n    --#{$prefix}body-bg-rgb: #{to-rgb($body-bg-dark)};\n\n    --#{$prefix}emphasis-color: #{$body-emphasis-color-dark};\n    --#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color-dark)};\n\n    --#{$prefix}secondary-color: #{$body-secondary-color-dark};\n    --#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color-dark)};\n    --#{$prefix}secondary-bg: #{$body-secondary-bg-dark};\n    --#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg-dark)};\n\n    --#{$prefix}tertiary-color: #{$body-tertiary-color-dark};\n    --#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color-dark)};\n    --#{$prefix}tertiary-bg: #{$body-tertiary-bg-dark};\n    --#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg-dark)};\n\n    @each $color, $value in $theme-colors-text-dark {\n      --#{$prefix}#{$color}-text-emphasis: #{$value};\n    }\n\n    @each $color, $value in $theme-colors-bg-subtle-dark {\n      --#{$prefix}#{$color}-bg-subtle: #{$value};\n    }\n\n    @each $color, $value in $theme-colors-border-subtle-dark {\n      --#{$prefix}#{$color}-border-subtle: #{$value};\n    }\n\n    --#{$prefix}heading-color: #{$headings-color-dark};\n\n    --#{$prefix}link-color: #{$link-color-dark};\n    --#{$prefix}link-hover-color: #{$link-hover-color-dark};\n    --#{$prefix}link-color-rgb: #{to-rgb($link-color-dark)};\n    --#{$prefix}link-hover-color-rgb: #{to-rgb($link-hover-color-dark)};\n\n    --#{$prefix}code-color: #{$code-color-dark};\n    --#{$prefix}highlight-color: #{$mark-color-dark};\n    --#{$prefix}highlight-bg: #{$mark-bg-dark};\n\n    --#{$prefix}border-color: #{$border-color-dark};\n    --#{$prefix}border-color-translucent: #{$border-color-translucent-dark};\n\n    --#{$prefix}form-valid-color: #{$form-valid-color-dark};\n    --#{$prefix}form-valid-border-color: #{$form-valid-border-color-dark};\n    --#{$prefix}form-invalid-color: #{$form-invalid-color-dark};\n    --#{$prefix}form-invalid-border-color: #{$form-invalid-border-color-dark};\n    // scss-docs-end root-dark-mode-vars\n  }\n}\n","// stylelint-disable scss/dimension-no-non-numeric-values\n\n// SCSS RFS mixin\n//\n// Automated responsive values for font sizes, paddings, margins and much more\n//\n// Licensed under MIT (https://github.com/twbs/rfs/blob/main/LICENSE)\n\n// Configuration\n\n// Base value\n$rfs-base-value: 1.25rem !default;\n$rfs-unit: rem !default;\n\n@if $rfs-unit != rem and $rfs-unit != px {\n  @error \"`#{$rfs-unit}` is not a valid unit for $rfs-unit. Use `px` or `rem`.\";\n}\n\n// Breakpoint at where values start decreasing if screen width is smaller\n$rfs-breakpoint: 1200px !default;\n$rfs-breakpoint-unit: px !default;\n\n@if $rfs-breakpoint-unit != px and $rfs-breakpoint-unit != em and $rfs-breakpoint-unit != rem {\n  @error \"`#{$rfs-breakpoint-unit}` is not a valid unit for $rfs-breakpoint-unit. Use `px`, `em` or `rem`.\";\n}\n\n// Resize values based on screen height and width\n$rfs-two-dimensional: false !default;\n\n// Factor of decrease\n$rfs-factor: 10 !default;\n\n@if type-of($rfs-factor) != number or $rfs-factor <= 1 {\n  @error \"`#{$rfs-factor}` is not a valid  $rfs-factor, it must be greater than 1.\";\n}\n\n// Mode. Possibilities: \"min-media-query\", \"max-media-query\"\n$rfs-mode: min-media-query !default;\n\n// Generate enable or disable classes. Possibilities: false, \"enable\" or \"disable\"\n$rfs-class: false !default;\n\n// 1 rem = $rfs-rem-value px\n$rfs-rem-value: 16 !default;\n\n// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14\n$rfs-safari-iframe-resize-bug-fix: false !default;\n\n// Disable RFS by setting $enable-rfs to false\n$enable-rfs: true !default;\n\n// Cache $rfs-base-value unit\n$rfs-base-value-unit: unit($rfs-base-value);\n\n@function divide($dividend, $divisor, $precision: 10) {\n  $sign: if($dividend > 0 and $divisor > 0 or $dividend < 0 and $divisor < 0, 1, -1);\n  $dividend: abs($dividend);\n  $divisor: abs($divisor);\n  @if $dividend == 0 {\n    @return 0;\n  }\n  @if $divisor == 0 {\n    @error \"Cannot divide by 0\";\n  }\n  $remainder: $dividend;\n  $result: 0;\n  $factor: 10;\n  @while ($remainder > 0 and $precision >= 0) {\n    $quotient: 0;\n    @while ($remainder >= $divisor) {\n      $remainder: $remainder - $divisor;\n      $quotient: $quotient + 1;\n    }\n    $result: $result * 10 + $quotient;\n    $factor: $factor * .1;\n    $remainder: $remainder * 10;\n    $precision: $precision - 1;\n    @if ($precision < 0 and $remainder >= $divisor * 5) {\n      $result: $result + 1;\n    }\n  }\n  $result: $result * $factor * $sign;\n  $dividend-unit: unit($dividend);\n  $divisor-unit: unit($divisor);\n  $unit-map: (\n    \"px\": 1px,\n    \"rem\": 1rem,\n    \"em\": 1em,\n    \"%\": 1%\n  );\n  @if ($dividend-unit != $divisor-unit and map-has-key($unit-map, $dividend-unit)) {\n    $result: $result * map-get($unit-map, $dividend-unit);\n  }\n  @return $result;\n}\n\n// Remove px-unit from $rfs-base-value for calculations\n@if $rfs-base-value-unit == px {\n  $rfs-base-value: divide($rfs-base-value, $rfs-base-value * 0 + 1);\n}\n@else if $rfs-base-value-unit == rem {\n  $rfs-base-value: divide($rfs-base-value, divide($rfs-base-value * 0 + 1, $rfs-rem-value));\n}\n\n// Cache $rfs-breakpoint unit to prevent multiple calls\n$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);\n\n// Remove unit from $rfs-breakpoint for calculations\n@if $rfs-breakpoint-unit-cache == px {\n  $rfs-breakpoint: divide($rfs-breakpoint, $rfs-breakpoint * 0 + 1);\n}\n@else if $rfs-breakpoint-unit-cache == rem or $rfs-breakpoint-unit-cache == \"em\" {\n  $rfs-breakpoint: divide($rfs-breakpoint, divide($rfs-breakpoint * 0 + 1, $rfs-rem-value));\n}\n\n// Calculate the media query value\n$rfs-mq-value: if($rfs-breakpoint-unit == px, #{$rfs-breakpoint}px, #{divide($rfs-breakpoint, $rfs-rem-value)}#{$rfs-breakpoint-unit});\n$rfs-mq-property-width: if($rfs-mode == max-media-query, max-width, min-width);\n$rfs-mq-property-height: if($rfs-mode == max-media-query, max-height, min-height);\n\n// Internal mixin used to determine which media query needs to be used\n@mixin _rfs-media-query {\n  @if $rfs-two-dimensional {\n    @if $rfs-mode == max-media-query {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}), (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n    @else {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) and (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n  }\n  @else {\n    @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) {\n      @content;\n    }\n  }\n}\n\n// Internal mixin that adds disable classes to the selector if needed.\n@mixin _rfs-rule {\n  @if $rfs-class == disable and $rfs-mode == max-media-query {\n    // Adding an extra class increases specificity, which prevents the media query to override the property\n    &,\n    .disable-rfs &,\n    &.disable-rfs {\n      @content;\n    }\n  }\n  @else if $rfs-class == enable and $rfs-mode == min-media-query {\n    .enable-rfs &,\n    &.enable-rfs {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Internal mixin that adds enable classes to the selector if needed.\n@mixin _rfs-media-query-rule {\n\n  @if $rfs-class == enable {\n    @if $rfs-mode == min-media-query {\n      @content;\n    }\n\n    @include _rfs-media-query () {\n      .enable-rfs &,\n      &.enable-rfs {\n        @content;\n      }\n    }\n  }\n  @else {\n    @if $rfs-class == disable and $rfs-mode == min-media-query {\n      .disable-rfs &,\n      &.disable-rfs {\n        @content;\n      }\n    }\n    @include _rfs-media-query () {\n      @content;\n    }\n  }\n}\n\n// Helper function to get the formatted non-responsive value\n@function rfs-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: \"\";\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + \" 0\";\n    }\n    @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == \"number\", unit($value), false);\n\n      @if $unit == px {\n        // Convert to rem if needed\n        $val: $val + \" \" + if($rfs-unit == rem, #{divide($value, $value * 0 + $rfs-rem-value)}rem, $value);\n      }\n      @else if $unit == rem {\n        // Convert to px if needed\n        $val: $val + \" \" + if($rfs-unit == px, #{divide($value, $value * 0 + 1) * $rfs-rem-value}px, $value);\n      } @else {\n        // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n        $val: $val + \" \" + $value;\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// Helper function to get the responsive value calculated by RFS\n@function rfs-fluid-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: \"\";\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + \" 0\";\n    } @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == \"number\", unit($value), false);\n\n      // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n      @if not $unit or $unit != px and $unit != rem {\n        $val: $val + \" \" + $value;\n      } @else {\n        // Remove unit from $value for calculations\n        $value: divide($value, $value * 0 + if($unit == px, 1, divide(1, $rfs-rem-value)));\n\n        // Only add the media query if the value is greater than the minimum value\n        @if abs($value) <= $rfs-base-value or not $enable-rfs {\n          $val: $val + \" \" + if($rfs-unit == rem, #{divide($value, $rfs-rem-value)}rem, #{$value}px);\n        }\n        @else {\n          // Calculate the minimum value\n          $value-min: $rfs-base-value + divide(abs($value) - $rfs-base-value, $rfs-factor);\n\n          // Calculate difference between $value and the minimum value\n          $value-diff: abs($value) - $value-min;\n\n          // Base value formatting\n          $min-width: if($rfs-unit == rem, #{divide($value-min, $rfs-rem-value)}rem, #{$value-min}px);\n\n          // Use negative value if needed\n          $min-width: if($value < 0, -$min-width, $min-width);\n\n          // Use `vmin` if two-dimensional is enabled\n          $variable-unit: if($rfs-two-dimensional, vmin, vw);\n\n          // Calculate the variable width between 0 and $rfs-breakpoint\n          $variable-width: #{divide($value-diff * 100, $rfs-breakpoint)}#{$variable-unit};\n\n          // Return the calculated value\n          $val: $val + \" calc(\" + $min-width + if($value < 0, \" - \", \" + \") + $variable-width + \")\";\n        }\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// RFS mixin\n@mixin rfs($values, $property: font-size) {\n  @if $values != null {\n    $val: rfs-value($values);\n    $fluid-val: rfs-fluid-value($values);\n\n    // Do not print the media query if responsive & non-responsive values are the same\n    @if $val == $fluid-val {\n      #{$property}: $val;\n    }\n    @else {\n      @include _rfs-rule () {\n        #{$property}: if($rfs-mode == max-media-query, $val, $fluid-val);\n\n        // Include safari iframe resize fix if needed\n        min-width: if($rfs-safari-iframe-resize-bug-fix, (0 * 1vw), null);\n      }\n\n      @include _rfs-media-query-rule () {\n        #{$property}: if($rfs-mode == max-media-query, $fluid-val, $val);\n      }\n    }\n  }\n}\n\n// Shorthand helper mixins\n@mixin font-size($value) {\n  @include rfs($value);\n}\n\n@mixin padding($value) {\n  @include rfs($value, padding);\n}\n\n@mixin padding-top($value) {\n  @include rfs($value, padding-top);\n}\n\n@mixin padding-right($value) {\n  @include rfs($value, padding-right);\n}\n\n@mixin padding-bottom($value) {\n  @include rfs($value, padding-bottom);\n}\n\n@mixin padding-left($value) {\n  @include rfs($value, padding-left);\n}\n\n@mixin margin($value) {\n  @include rfs($value, margin);\n}\n\n@mixin margin-top($value) {\n  @include rfs($value, margin-top);\n}\n\n@mixin margin-right($value) {\n  @include rfs($value, margin-right);\n}\n\n@mixin margin-bottom($value) {\n  @include rfs($value, margin-bottom);\n}\n\n@mixin margin-left($value) {\n  @include rfs($value, margin-left);\n}\n","// scss-docs-start color-mode-mixin\n@mixin color-mode($mode: light, $root: false) {\n  @if $color-mode-type == \"media-query\" {\n    @if $root == true {\n      @media (prefers-color-scheme: $mode) {\n        :root {\n          @content;\n        }\n      }\n    } @else {\n      @media (prefers-color-scheme: $mode) {\n        @content;\n      }\n    }\n  } @else {\n    [data-bs-theme=\"#{$mode}\"] {\n      @content;\n    }\n  }\n}\n// scss-docs-end color-mode-mixin\n","// stylelint-disable declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix\n\n\n// Reboot\n//\n// Normalization of HTML elements, manually forked from Normalize.css to remove\n// styles targeting irrelevant browsers while applying new styles.\n//\n// Normalize is licensed MIT. https://github.com/necolas/normalize.css\n\n\n// Document\n//\n// Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n\n// Root\n//\n// Ability to the value of the root font sizes, affecting the value of `rem`.\n// null by default, thus nothing is generated.\n\n:root {\n  @if $font-size-root != null {\n    @include font-size(var(--#{$prefix}root-font-size));\n  }\n\n  @if $enable-smooth-scroll {\n    @media (prefers-reduced-motion: no-preference) {\n      scroll-behavior: smooth;\n    }\n  }\n}\n\n\n// Body\n//\n// 1. Remove the margin in all browsers.\n// 2. As a best practice, apply a default `background-color`.\n// 3. Prevent adjustments of font size after orientation changes in iOS.\n// 4. Change the default tap highlight to be completely transparent in iOS.\n\n// scss-docs-start reboot-body-rules\nbody {\n  margin: 0; // 1\n  font-family: var(--#{$prefix}body-font-family);\n  @include font-size(var(--#{$prefix}body-font-size));\n  font-weight: var(--#{$prefix}body-font-weight);\n  line-height: var(--#{$prefix}body-line-height);\n  color: var(--#{$prefix}body-color);\n  text-align: var(--#{$prefix}body-text-align);\n  background-color: var(--#{$prefix}body-bg); // 2\n  -webkit-text-size-adjust: 100%; // 3\n  -webkit-tap-highlight-color: rgba($black, 0); // 4\n}\n// scss-docs-end reboot-body-rules\n\n\n// Content grouping\n//\n// 1. Reset Firefox's gray color\n\nhr {\n  margin: $hr-margin-y 0;\n  color: $hr-color; // 1\n  border: 0;\n  border-top: $hr-border-width solid $hr-border-color;\n  opacity: $hr-opacity;\n}\n\n\n// Typography\n//\n// 1. Remove top margins from headings\n//    By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top\n//    margin for easier control within type scales as it avoids margin collapsing.\n\n%heading {\n  margin-top: 0; // 1\n  margin-bottom: $headings-margin-bottom;\n  font-family: $headings-font-family;\n  font-style: $headings-font-style;\n  font-weight: $headings-font-weight;\n  line-height: $headings-line-height;\n  color: var(--#{$prefix}heading-color);\n}\n\nh1 {\n  @extend %heading;\n  @include font-size($h1-font-size);\n}\n\nh2 {\n  @extend %heading;\n  @include font-size($h2-font-size);\n}\n\nh3 {\n  @extend %heading;\n  @include font-size($h3-font-size);\n}\n\nh4 {\n  @extend %heading;\n  @include font-size($h4-font-size);\n}\n\nh5 {\n  @extend %heading;\n  @include font-size($h5-font-size);\n}\n\nh6 {\n  @extend %heading;\n  @include font-size($h6-font-size);\n}\n\n\n// Reset margins on paragraphs\n//\n// Similarly, the top margin on `<p>`s get reset. However, we also reset the\n// bottom margin to use `rem` units instead of `em`.\n\np {\n  margin-top: 0;\n  margin-bottom: $paragraph-margin-bottom;\n}\n\n\n// Abbreviations\n//\n// 1. Add the correct text decoration in Chrome, Edge, Opera, and Safari.\n// 2. Add explicit cursor to indicate changed behavior.\n// 3. Prevent the text-decoration to be skipped.\n\nabbr[title] {\n  text-decoration: underline dotted; // 1\n  cursor: help; // 2\n  text-decoration-skip-ink: none; // 3\n}\n\n\n// Address\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\n\n// Lists\n\nol,\nul {\n  padding-left: 2rem;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: $dt-font-weight;\n}\n\n// 1. Undo browser default\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; // 1\n}\n\n\n// Blockquote\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\n\n// Strong\n//\n// Add the correct font weight in Chrome, Edge, and Safari\n\nb,\nstrong {\n  font-weight: $font-weight-bolder;\n}\n\n\n// Small\n//\n// Add the correct font size in all browsers\n\nsmall {\n  @include font-size($small-font-size);\n}\n\n\n// Mark\n\nmark {\n  padding: $mark-padding;\n  color: var(--#{$prefix}highlight-color);\n  background-color: var(--#{$prefix}highlight-bg);\n}\n\n\n// Sub and Sup\n//\n// Prevent `sub` and `sup` elements from affecting the line height in\n// all browsers.\n\nsub,\nsup {\n  position: relative;\n  @include font-size($sub-sup-font-size);\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub { bottom: -.25em; }\nsup { top: -.5em; }\n\n\n// Links\n\na {\n  color: rgba(var(--#{$prefix}link-color-rgb), var(--#{$prefix}link-opacity, 1));\n  text-decoration: $link-decoration;\n\n  &:hover {\n    --#{$prefix}link-color-rgb: var(--#{$prefix}link-hover-color-rgb);\n    text-decoration: $link-hover-decoration;\n  }\n}\n\n// And undo these styles for placeholder links/named anchors (without href).\n// It would be more straightforward to just use a[href] in previous block, but that\n// causes specificity issues in many other styles that are too complex to fix.\n// See https://github.com/twbs/bootstrap/issues/19402\n\na:not([href]):not([class]) {\n  &,\n  &:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n}\n\n\n// Code\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: $font-family-code;\n  @include font-size(1em); // Correct the odd `em` font sizing in all browsers.\n}\n\n// 1. Remove browser default top margin\n// 2. Reset browser default of `1em` to use `rem`s\n// 3. Don't allow content to break outside\n\npre {\n  display: block;\n  margin-top: 0; // 1\n  margin-bottom: 1rem; // 2\n  overflow: auto; // 3\n  @include font-size($code-font-size);\n  color: $pre-color;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    @include font-size(inherit);\n    color: inherit;\n    word-break: normal;\n  }\n}\n\ncode {\n  @include font-size($code-font-size);\n  color: var(--#{$prefix}code-color);\n  word-wrap: break-word;\n\n  // Streamline the style when inside anchors to avoid broken underline and more\n  a > & {\n    color: inherit;\n  }\n}\n\nkbd {\n  padding: $kbd-padding-y $kbd-padding-x;\n  @include font-size($kbd-font-size);\n  color: $kbd-color;\n  background-color: $kbd-bg;\n  @include border-radius($border-radius-sm);\n\n  kbd {\n    padding: 0;\n    @include font-size(1em);\n    font-weight: $nested-kbd-font-weight;\n  }\n}\n\n\n// Figures\n//\n// Apply a consistent margin strategy (matches our type styles).\n\nfigure {\n  margin: 0 0 1rem;\n}\n\n\n// Images and content\n\nimg,\nsvg {\n  vertical-align: middle;\n}\n\n\n// Tables\n//\n// Prevent double borders\n\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: $table-cell-padding-y;\n  padding-bottom: $table-cell-padding-y;\n  color: $table-caption-color;\n  text-align: left;\n}\n\n// 1. Removes font-weight bold by inheriting\n// 2. Matches default `<td>` alignment by inheriting `text-align`.\n// 3. Fix alignment for Safari\n\nth {\n  font-weight: $table-th-font-weight; // 1\n  text-align: inherit; // 2\n  text-align: -webkit-match-parent; // 3\n}\n\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n\n// Forms\n//\n// 1. Allow labels to use `margin` for spacing.\n\nlabel {\n  display: inline-block; // 1\n}\n\n// Remove the default `border-radius` that macOS Chrome adds.\n// See https://github.com/twbs/bootstrap/issues/24093\n\nbutton {\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 0;\n}\n\n// Explicitly remove focus outline in Chromium when it shouldn't be\n// visible (e.g. as result of mouse click or touch tap). It already\n// should be doing this automatically, but seems to currently be\n// confused and applies its very visible two-tone outline anyway.\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\n// 1. Remove the margin in Firefox and Safari\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0; // 1\n  font-family: inherit;\n  @include font-size(inherit);\n  line-height: inherit;\n}\n\n// Remove the inheritance of text transform in Firefox\nbutton,\nselect {\n  text-transform: none;\n}\n// Set the cursor for non-`<button>` buttons\n//\n// Details at https://github.com/twbs/bootstrap/pull/30562\n[role=\"button\"] {\n  cursor: pointer;\n}\n\nselect {\n  // Remove the inheritance of word-wrap in Safari.\n  // See https://github.com/twbs/bootstrap/issues/24990\n  word-wrap: normal;\n\n  // Undo the opacity change from Chrome\n  &:disabled {\n    opacity: 1;\n  }\n}\n\n// Remove the dropdown arrow only from text type inputs built with datalists in Chrome.\n// See https://stackoverflow.com/a/54997118\n\n[list]:not([type=\"date\"]):not([type=\"datetime-local\"]):not([type=\"month\"]):not([type=\"week\"]):not([type=\"time\"])::-webkit-calendar-picker-indicator {\n  display: none !important;\n}\n\n// 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n//    controls in Android 4.\n// 2. Correct the inability to style clickable types in iOS and Safari.\n// 3. Opinionated: add \"hand\" cursor to non-disabled button elements.\n\nbutton,\n[type=\"button\"], // 1\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n\n  @if $enable-button-pointers {\n    &:not(:disabled) {\n      cursor: pointer; // 3\n    }\n  }\n}\n\n// Remove inner border and padding from Firefox, but don't restore the outline like Normalize.\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n// 1. Textareas should really only resize vertically so they don't break their (horizontal) containers.\n\ntextarea {\n  resize: vertical; // 1\n}\n\n// 1. Browsers set a default `min-width: min-content;` on fieldsets,\n//    unlike e.g. `<div>`s, which have `min-width: 0;` by default.\n//    So we reset that to ensure fieldsets behave more like a standard block element.\n//    See https://github.com/twbs/bootstrap/issues/12359\n//    and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n// 2. Reset the default outline behavior of fieldsets so they don't affect page layout.\n\nfieldset {\n  min-width: 0; // 1\n  padding: 0; // 2\n  margin: 0; // 2\n  border: 0; // 2\n}\n\n// 1. By using `float: left`, the legend will behave like a block element.\n//    This way the border of a fieldset wraps around the legend if present.\n// 2. Fix wrapping bug.\n//    See https://github.com/twbs/bootstrap/issues/29712\n\nlegend {\n  float: left; // 1\n  width: 100%;\n  padding: 0;\n  margin-bottom: $legend-margin-bottom;\n  @include font-size($legend-font-size);\n  font-weight: $legend-font-weight;\n  line-height: inherit;\n\n  + * {\n    clear: left; // 2\n  }\n}\n\n// Fix height of inputs with a type of datetime-local, date, month, week, or time\n// See https://github.com/twbs/bootstrap/issues/18842\n\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n\n::-webkit-inner-spin-button {\n  height: auto;\n}\n\n// 1. This overrides the extra rounded corners on search inputs in iOS so that our\n//    `.form-control` class can properly style them. Note that this cannot simply\n//    be added to `.form-control` as it's not specific enough. For details, see\n//    https://github.com/twbs/bootstrap/issues/11586.\n// 2. Correct the outline style in Safari.\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; // 1\n  outline-offset: -2px; // 2\n}\n\n// 1. A few input types should stay LTR\n// See https://rtlstyling.com/posts/rtl-styling#form-inputs\n// 2. RTL only output\n// See https://rtlcss.com/learn/usage-guide/control-directives/#raw\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n\n// Remove the inner padding in Chrome and Safari on macOS.\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n// Remove padding around color pickers in webkit browsers\n\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n\n// 1. Inherit font family and line height for file input buttons\n// 2. Correct the inability to style clickable types in iOS and Safari.\n\n::file-selector-button {\n  font: inherit; // 1\n  -webkit-appearance: button; // 2\n}\n\n// Correct element displays\n\noutput {\n  display: inline-block;\n}\n\n// Remove border from iframe\n\niframe {\n  border: 0;\n}\n\n// Summary\n//\n// 1. Add the correct display in all browsers\n\nsummary {\n  display: list-item; // 1\n  cursor: pointer;\n}\n\n\n// Progress\n//\n// Add the correct vertical alignment in Chrome, Firefox, and Opera.\n\nprogress {\n  vertical-align: baseline;\n}\n\n\n// Hidden attribute\n//\n// Always hide an element with the `hidden` HTML attribute.\n\n[hidden] {\n  display: none !important;\n}\n","// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n// Color system\n\n// scss-docs-start gray-color-variables\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n// scss-docs-end gray-color-variables\n\n// fusv-disable\n// scss-docs-start gray-colors-map\n$grays: (\n  \"100\": $gray-100,\n  \"200\": $gray-200,\n  \"300\": $gray-300,\n  \"400\": $gray-400,\n  \"500\": $gray-500,\n  \"600\": $gray-600,\n  \"700\": $gray-700,\n  \"800\": $gray-800,\n  \"900\": $gray-900\n) !default;\n// scss-docs-end gray-colors-map\n// fusv-enable\n\n// scss-docs-start color-variables\n$blue:    #0d6efd !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #d63384 !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #198754 !default;\n$teal:    #20c997 !default;\n$cyan:    #0dcaf0 !default;\n// scss-docs-end color-variables\n\n// scss-docs-start colors-map\n$colors: (\n  \"blue\":       $blue,\n  \"indigo\":     $indigo,\n  \"purple\":     $purple,\n  \"pink\":       $pink,\n  \"red\":        $red,\n  \"orange\":     $orange,\n  \"yellow\":     $yellow,\n  \"green\":      $green,\n  \"teal\":       $teal,\n  \"cyan\":       $cyan,\n  \"black\":      $black,\n  \"white\":      $white,\n  \"gray\":       $gray-600,\n  \"gray-dark\":  $gray-800\n) !default;\n// scss-docs-end colors-map\n\n// The contrast ratio to reach against white, to determine if color changes from \"light\" to \"dark\". Acceptable values for WCAG 2.0 are 3, 4.5 and 7.\n// See https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast\n$min-contrast-ratio:   4.5 !default;\n\n// Customize the light and dark text colors for use in our color contrast function.\n$color-contrast-dark:      $black !default;\n$color-contrast-light:     $white !default;\n\n// fusv-disable\n$blue-100: tint-color($blue, 80%) !default;\n$blue-200: tint-color($blue, 60%) !default;\n$blue-300: tint-color($blue, 40%) !default;\n$blue-400: tint-color($blue, 20%) !default;\n$blue-500: $blue !default;\n$blue-600: shade-color($blue, 20%) !default;\n$blue-700: shade-color($blue, 40%) !default;\n$blue-800: shade-color($blue, 60%) !default;\n$blue-900: shade-color($blue, 80%) !default;\n\n$indigo-100: tint-color($indigo, 80%) !default;\n$indigo-200: tint-color($indigo, 60%) !default;\n$indigo-300: tint-color($indigo, 40%) !default;\n$indigo-400: tint-color($indigo, 20%) !default;\n$indigo-500: $indigo !default;\n$indigo-600: shade-color($indigo, 20%) !default;\n$indigo-700: shade-color($indigo, 40%) !default;\n$indigo-800: shade-color($indigo, 60%) !default;\n$indigo-900: shade-color($indigo, 80%) !default;\n\n$purple-100: tint-color($purple, 80%) !default;\n$purple-200: tint-color($purple, 60%) !default;\n$purple-300: tint-color($purple, 40%) !default;\n$purple-400: tint-color($purple, 20%) !default;\n$purple-500: $purple !default;\n$purple-600: shade-color($purple, 20%) !default;\n$purple-700: shade-color($purple, 40%) !default;\n$purple-800: shade-color($purple, 60%) !default;\n$purple-900: shade-color($purple, 80%) !default;\n\n$pink-100: tint-color($pink, 80%) !default;\n$pink-200: tint-color($pink, 60%) !default;\n$pink-300: tint-color($pink, 40%) !default;\n$pink-400: tint-color($pink, 20%) !default;\n$pink-500: $pink !default;\n$pink-600: shade-color($pink, 20%) !default;\n$pink-700: shade-color($pink, 40%) !default;\n$pink-800: shade-color($pink, 60%) !default;\n$pink-900: shade-color($pink, 80%) !default;\n\n$red-100: tint-color($red, 80%) !default;\n$red-200: tint-color($red, 60%) !default;\n$red-300: tint-color($red, 40%) !default;\n$red-400: tint-color($red, 20%) !default;\n$red-500: $red !default;\n$red-600: shade-color($red, 20%) !default;\n$red-700: shade-color($red, 40%) !default;\n$red-800: shade-color($red, 60%) !default;\n$red-900: shade-color($red, 80%) !default;\n\n$orange-100: tint-color($orange, 80%) !default;\n$orange-200: tint-color($orange, 60%) !default;\n$orange-300: tint-color($orange, 40%) !default;\n$orange-400: tint-color($orange, 20%) !default;\n$orange-500: $orange !default;\n$orange-600: shade-color($orange, 20%) !default;\n$orange-700: shade-color($orange, 40%) !default;\n$orange-800: shade-color($orange, 60%) !default;\n$orange-900: shade-color($orange, 80%) !default;\n\n$yellow-100: tint-color($yellow, 80%) !default;\n$yellow-200: tint-color($yellow, 60%) !default;\n$yellow-300: tint-color($yellow, 40%) !default;\n$yellow-400: tint-color($yellow, 20%) !default;\n$yellow-500: $yellow !default;\n$yellow-600: shade-color($yellow, 20%) !default;\n$yellow-700: shade-color($yellow, 40%) !default;\n$yellow-800: shade-color($yellow, 60%) !default;\n$yellow-900: shade-color($yellow, 80%) !default;\n\n$green-100: tint-color($green, 80%) !default;\n$green-200: tint-color($green, 60%) !default;\n$green-300: tint-color($green, 40%) !default;\n$green-400: tint-color($green, 20%) !default;\n$green-500: $green !default;\n$green-600: shade-color($green, 20%) !default;\n$green-700: shade-color($green, 40%) !default;\n$green-800: shade-color($green, 60%) !default;\n$green-900: shade-color($green, 80%) !default;\n\n$teal-100: tint-color($teal, 80%) !default;\n$teal-200: tint-color($teal, 60%) !default;\n$teal-300: tint-color($teal, 40%) !default;\n$teal-400: tint-color($teal, 20%) !default;\n$teal-500: $teal !default;\n$teal-600: shade-color($teal, 20%) !default;\n$teal-700: shade-color($teal, 40%) !default;\n$teal-800: shade-color($teal, 60%) !default;\n$teal-900: shade-color($teal, 80%) !default;\n\n$cyan-100: tint-color($cyan, 80%) !default;\n$cyan-200: tint-color($cyan, 60%) !default;\n$cyan-300: tint-color($cyan, 40%) !default;\n$cyan-400: tint-color($cyan, 20%) !default;\n$cyan-500: $cyan !default;\n$cyan-600: shade-color($cyan, 20%) !default;\n$cyan-700: shade-color($cyan, 40%) !default;\n$cyan-800: shade-color($cyan, 60%) !default;\n$cyan-900: shade-color($cyan, 80%) !default;\n\n$blues: (\n  \"blue-100\": $blue-100,\n  \"blue-200\": $blue-200,\n  \"blue-300\": $blue-300,\n  \"blue-400\": $blue-400,\n  \"blue-500\": $blue-500,\n  \"blue-600\": $blue-600,\n  \"blue-700\": $blue-700,\n  \"blue-800\": $blue-800,\n  \"blue-900\": $blue-900\n) !default;\n\n$indigos: (\n  \"indigo-100\": $indigo-100,\n  \"indigo-200\": $indigo-200,\n  \"indigo-300\": $indigo-300,\n  \"indigo-400\": $indigo-400,\n  \"indigo-500\": $indigo-500,\n  \"indigo-600\": $indigo-600,\n  \"indigo-700\": $indigo-700,\n  \"indigo-800\": $indigo-800,\n  \"indigo-900\": $indigo-900\n) !default;\n\n$purples: (\n  \"purple-100\": $purple-100,\n  \"purple-200\": $purple-200,\n  \"purple-300\": $purple-300,\n  \"purple-400\": $purple-400,\n  \"purple-500\": $purple-500,\n  \"purple-600\": $purple-600,\n  \"purple-700\": $purple-700,\n  \"purple-800\": $purple-800,\n  \"purple-900\": $purple-900\n) !default;\n\n$pinks: (\n  \"pink-100\": $pink-100,\n  \"pink-200\": $pink-200,\n  \"pink-300\": $pink-300,\n  \"pink-400\": $pink-400,\n  \"pink-500\": $pink-500,\n  \"pink-600\": $pink-600,\n  \"pink-700\": $pink-700,\n  \"pink-800\": $pink-800,\n  \"pink-900\": $pink-900\n) !default;\n\n$reds: (\n  \"red-100\": $red-100,\n  \"red-200\": $red-200,\n  \"red-300\": $red-300,\n  \"red-400\": $red-400,\n  \"red-500\": $red-500,\n  \"red-600\": $red-600,\n  \"red-700\": $red-700,\n  \"red-800\": $red-800,\n  \"red-900\": $red-900\n) !default;\n\n$oranges: (\n  \"orange-100\": $orange-100,\n  \"orange-200\": $orange-200,\n  \"orange-300\": $orange-300,\n  \"orange-400\": $orange-400,\n  \"orange-500\": $orange-500,\n  \"orange-600\": $orange-600,\n  \"orange-700\": $orange-700,\n  \"orange-800\": $orange-800,\n  \"orange-900\": $orange-900\n) !default;\n\n$yellows: (\n  \"yellow-100\": $yellow-100,\n  \"yellow-200\": $yellow-200,\n  \"yellow-300\": $yellow-300,\n  \"yellow-400\": $yellow-400,\n  \"yellow-500\": $yellow-500,\n  \"yellow-600\": $yellow-600,\n  \"yellow-700\": $yellow-700,\n  \"yellow-800\": $yellow-800,\n  \"yellow-900\": $yellow-900\n) !default;\n\n$greens: (\n  \"green-100\": $green-100,\n  \"green-200\": $green-200,\n  \"green-300\": $green-300,\n  \"green-400\": $green-400,\n  \"green-500\": $green-500,\n  \"green-600\": $green-600,\n  \"green-700\": $green-700,\n  \"green-800\": $green-800,\n  \"green-900\": $green-900\n) !default;\n\n$teals: (\n  \"teal-100\": $teal-100,\n  \"teal-200\": $teal-200,\n  \"teal-300\": $teal-300,\n  \"teal-400\": $teal-400,\n  \"teal-500\": $teal-500,\n  \"teal-600\": $teal-600,\n  \"teal-700\": $teal-700,\n  \"teal-800\": $teal-800,\n  \"teal-900\": $teal-900\n) !default;\n\n$cyans: (\n  \"cyan-100\": $cyan-100,\n  \"cyan-200\": $cyan-200,\n  \"cyan-300\": $cyan-300,\n  \"cyan-400\": $cyan-400,\n  \"cyan-500\": $cyan-500,\n  \"cyan-600\": $cyan-600,\n  \"cyan-700\": $cyan-700,\n  \"cyan-800\": $cyan-800,\n  \"cyan-900\": $cyan-900\n) !default;\n// fusv-enable\n\n// scss-docs-start theme-color-variables\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-900 !default;\n// scss-docs-end theme-color-variables\n\n// scss-docs-start theme-colors-map\n$theme-colors: (\n  \"primary\":    $primary,\n  \"secondary\":  $secondary,\n  \"success\":    $success,\n  \"info\":       $info,\n  \"warning\":    $warning,\n  \"danger\":     $danger,\n  \"light\":      $light,\n  \"dark\":       $dark\n) !default;\n// scss-docs-end theme-colors-map\n\n// scss-docs-start theme-text-variables\n$primary-text-emphasis:   shade-color($primary, 60%) !default;\n$secondary-text-emphasis: shade-color($secondary, 60%) !default;\n$success-text-emphasis:   shade-color($success, 60%) !default;\n$info-text-emphasis:      shade-color($info, 60%) !default;\n$warning-text-emphasis:   shade-color($warning, 60%) !default;\n$danger-text-emphasis:    shade-color($danger, 60%) !default;\n$light-text-emphasis:     $gray-700 !default;\n$dark-text-emphasis:      $gray-700 !default;\n// scss-docs-end theme-text-variables\n\n// scss-docs-start theme-bg-subtle-variables\n$primary-bg-subtle:       tint-color($primary, 80%) !default;\n$secondary-bg-subtle:     tint-color($secondary, 80%) !default;\n$success-bg-subtle:       tint-color($success, 80%) !default;\n$info-bg-subtle:          tint-color($info, 80%) !default;\n$warning-bg-subtle:       tint-color($warning, 80%) !default;\n$danger-bg-subtle:        tint-color($danger, 80%) !default;\n$light-bg-subtle:         mix($gray-100, $white) !default;\n$dark-bg-subtle:          $gray-400 !default;\n// scss-docs-end theme-bg-subtle-variables\n\n// scss-docs-start theme-border-subtle-variables\n$primary-border-subtle:   tint-color($primary, 60%) !default;\n$secondary-border-subtle: tint-color($secondary, 60%) !default;\n$success-border-subtle:   tint-color($success, 60%) !default;\n$info-border-subtle:      tint-color($info, 60%) !default;\n$warning-border-subtle:   tint-color($warning, 60%) !default;\n$danger-border-subtle:    tint-color($danger, 60%) !default;\n$light-border-subtle:     $gray-200 !default;\n$dark-border-subtle:      $gray-500 !default;\n// scss-docs-end theme-border-subtle-variables\n\n// Characters which are escaped by the escape-svg function\n$escaped-characters: (\n  (\"<\", \"%3c\"),\n  (\">\", \"%3e\"),\n  (\"#\", \"%23\"),\n  (\"(\", \"%28\"),\n  (\")\", \"%29\"),\n) !default;\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:                true !default;\n$enable-rounded:              true !default;\n$enable-shadows:              false !default;\n$enable-gradients:            false !default;\n$enable-transitions:          true !default;\n$enable-reduced-motion:       true !default;\n$enable-smooth-scroll:        true !default;\n$enable-grid-classes:         true !default;\n$enable-container-classes:    true !default;\n$enable-cssgrid:              false !default;\n$enable-button-pointers:      true !default;\n$enable-rfs:                  true !default;\n$enable-validation-icons:     true !default;\n$enable-negative-margins:     false !default;\n$enable-deprecation-messages: true !default;\n$enable-important-utilities:  true !default;\n\n$enable-dark-mode:            true !default;\n$color-mode-type:             data !default; // `data` or `media-query`\n\n// Prefix for :root CSS variables\n\n$variable-prefix:             bs- !default; // Deprecated in v5.2.0 for the shorter `$prefix`\n$prefix:                      $variable-prefix !default;\n\n// Gradient\n//\n// The gradient which is added to components if `$enable-gradients` is `true`\n// This gradient is also added to elements with `.bg-gradient`\n// scss-docs-start variable-gradient\n$gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0)) !default;\n// scss-docs-end variable-gradient\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n// scss-docs-start spacer-variables-maps\n$spacer: 1rem !default;\n$spacers: (\n  0: 0,\n  1: $spacer * .25,\n  2: $spacer * .5,\n  3: $spacer,\n  4: $spacer * 1.5,\n  5: $spacer * 3,\n) !default;\n// scss-docs-end spacer-variables-maps\n\n// Position\n//\n// Define the edge positioning anchors of the position utilities.\n\n// scss-docs-start position-map\n$position-values: (\n  0: 0,\n  50: 50%,\n  100: 100%\n) !default;\n// scss-docs-end position-map\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-text-align:           null !default;\n$body-color:                $gray-900 !default;\n$body-bg:                   $white !default;\n\n$body-secondary-color:      rgba($body-color, .75) !default;\n$body-secondary-bg:         $gray-200 !default;\n\n$body-tertiary-color:       rgba($body-color, .5) !default;\n$body-tertiary-bg:          $gray-100 !default;\n\n$body-emphasis-color:       $black !default;\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                              $primary !default;\n$link-decoration:                         underline !default;\n$link-shade-percentage:                   20% !default;\n$link-hover-color:                        shift-color($link-color, $link-shade-percentage) !default;\n$link-hover-decoration:                   null !default;\n\n$stretched-link-pseudo-element:           after !default;\n$stretched-link-z-index:                  1 !default;\n\n// Icon links\n// scss-docs-start icon-link-variables\n$icon-link-gap:               .375rem !default;\n$icon-link-underline-offset:  .25em !default;\n$icon-link-icon-size:         1em !default;\n$icon-link-icon-transition:   .2s ease-in-out transform !default;\n$icon-link-icon-transform:    translate3d(.25em, 0, 0) !default;\n// scss-docs-end icon-link-variables\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n// scss-docs-start grid-breakpoints\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px\n) !default;\n// scss-docs-end grid-breakpoints\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints, \"$grid-breakpoints\");\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n// scss-docs-start container-max-widths\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px,\n  xxl: 1320px\n) !default;\n// scss-docs-end container-max-widths\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           1.5rem !default;\n$grid-row-columns:            6 !default;\n\n// Container padding\n\n$container-padding-x: $grid-gutter-width !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n// scss-docs-start border-variables\n$border-width:                1px !default;\n$border-widths: (\n  1: 1px,\n  2: 2px,\n  3: 3px,\n  4: 4px,\n  5: 5px\n) !default;\n$border-style:                solid !default;\n$border-color:                $gray-300 !default;\n$border-color-translucent:    rgba($black, .175) !default;\n// scss-docs-end border-variables\n\n// scss-docs-start border-radius-variables\n$border-radius:               .375rem !default;\n$border-radius-sm:            .25rem !default;\n$border-radius-lg:            .5rem !default;\n$border-radius-xl:            1rem !default;\n$border-radius-xxl:           2rem !default;\n$border-radius-pill:          50rem !default;\n// scss-docs-end border-radius-variables\n// fusv-disable\n$border-radius-2xl:           $border-radius-xxl !default; // Deprecated in v5.3.0\n// fusv-enable\n\n// scss-docs-start box-shadow-variables\n$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\n$box-shadow-inset:            inset 0 1px 2px rgba($black, .075) !default;\n// scss-docs-end box-shadow-variables\n\n$component-active-color:      $white !default;\n$component-active-bg:         $primary !default;\n\n// scss-docs-start focus-ring-variables\n$focus-ring-width:      .25rem !default;\n$focus-ring-opacity:    .25 !default;\n$focus-ring-color:      rgba($primary, $focus-ring-opacity) !default;\n$focus-ring-blur:       0 !default;\n$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color !default;\n// scss-docs-end focus-ring-variables\n\n// scss-docs-start caret-variables\n$caret-width:                 .3em !default;\n$caret-vertical-align:        $caret-width * .85 !default;\n$caret-spacing:               $caret-width * .85 !default;\n// scss-docs-end caret-variables\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n// scss-docs-start collapse-transition\n$transition-collapse:         height .35s ease !default;\n$transition-collapse-width:   width .35s ease !default;\n// scss-docs-end collapse-transition\n\n// stylelint-disable function-disallowed-list\n// scss-docs-start aspect-ratios\n$aspect-ratios: (\n  \"1x1\": 100%,\n  \"4x3\": calc(3 / 4 * 100%),\n  \"16x9\": calc(9 / 16 * 100%),\n  \"21x9\": calc(9 / 21 * 100%)\n) !default;\n// scss-docs-end aspect-ratios\n// stylelint-enable function-disallowed-list\n\n// Typography\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// scss-docs-start font-variables\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n// stylelint-enable value-keyword-case\n$font-family-base:            var(--#{$prefix}font-sans-serif) !default;\n$font-family-code:            var(--#{$prefix}font-monospace) !default;\n\n// $font-size-root affects the value of `rem`, which is used for as well font sizes, paddings, and margins\n// $font-size-base affects the font size of the body text\n$font-size-root:              null !default;\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-sm:                $font-size-base * .875 !default;\n$font-size-lg:                $font-size-base * 1.25 !default;\n\n$font-weight-lighter:         lighter !default;\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-medium:          500 !default;\n$font-weight-semibold:        600 !default;\n$font-weight-bold:            700 !default;\n$font-weight-bolder:          bolder !default;\n\n$font-weight-base:            $font-weight-normal !default;\n\n$line-height-base:            1.5 !default;\n$line-height-sm:              1.25 !default;\n$line-height-lg:              2 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n// scss-docs-end font-variables\n\n// scss-docs-start font-sizes\n$font-sizes: (\n  1: $h1-font-size,\n  2: $h2-font-size,\n  3: $h3-font-size,\n  4: $h4-font-size,\n  5: $h5-font-size,\n  6: $h6-font-size\n) !default;\n// scss-docs-end font-sizes\n\n// scss-docs-start headings-variables\n$headings-margin-bottom:      $spacer * .5 !default;\n$headings-font-family:        null !default;\n$headings-font-style:         null !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              inherit !default;\n// scss-docs-end headings-variables\n\n// scss-docs-start display-headings\n$display-font-sizes: (\n  1: 5rem,\n  2: 4.5rem,\n  3: 4rem,\n  4: 3.5rem,\n  5: 3rem,\n  6: 2.5rem\n) !default;\n\n$display-font-family: null !default;\n$display-font-style:  null !default;\n$display-font-weight: 300 !default;\n$display-line-height: $headings-line-height !default;\n// scss-docs-end display-headings\n\n// scss-docs-start type-variables\n$lead-font-size:              $font-size-base * 1.25 !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             .875em !default;\n\n$sub-sup-font-size:           .75em !default;\n\n// fusv-disable\n$text-muted:                  var(--#{$prefix}secondary-color) !default; // Deprecated in 5.3.0\n// fusv-enable\n\n$initialism-font-size:        $small-font-size !default;\n\n$blockquote-margin-y:         $spacer !default;\n$blockquote-font-size:        $font-size-base * 1.25 !default;\n$blockquote-footer-color:     $gray-600 !default;\n$blockquote-footer-font-size: $small-font-size !default;\n\n$hr-margin-y:                 $spacer !default;\n$hr-color:                    inherit !default;\n\n// fusv-disable\n$hr-bg-color:                 null !default; // Deprecated in v5.2.0\n$hr-height:                   null !default; // Deprecated in v5.2.0\n// fusv-enable\n\n$hr-border-color:             null !default; // Allows for inherited colors\n$hr-border-width:             var(--#{$prefix}border-width) !default;\n$hr-opacity:                  .25 !default;\n\n// scss-docs-start vr-variables\n$vr-border-width:             var(--#{$prefix}border-width) !default;\n// scss-docs-end vr-variables\n\n$legend-margin-bottom:        .5rem !default;\n$legend-font-size:            1.5rem !default;\n$legend-font-weight:          null !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$list-inline-padding:         .5rem !default;\n\n$mark-padding:                .1875em !default;\n$mark-color:                  $body-color !default;\n$mark-bg:                     $yellow-100 !default;\n// scss-docs-end type-variables\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n// scss-docs-start table-variables\n$table-cell-padding-y:        .5rem !default;\n$table-cell-padding-x:        .5rem !default;\n$table-cell-padding-y-sm:     .25rem !default;\n$table-cell-padding-x-sm:     .25rem !default;\n\n$table-cell-vertical-align:   top !default;\n\n$table-color:                 var(--#{$prefix}emphasis-color) !default;\n$table-bg:                    var(--#{$prefix}body-bg) !default;\n$table-accent-bg:             transparent !default;\n\n$table-th-font-weight:        null !default;\n\n$table-striped-color:         $table-color !default;\n$table-striped-bg-factor:     .05 !default;\n$table-striped-bg:            rgba(var(--#{$prefix}emphasis-color-rgb), $table-striped-bg-factor) !default;\n\n$table-active-color:          $table-color !default;\n$table-active-bg-factor:      .1 !default;\n$table-active-bg:             rgba(var(--#{$prefix}emphasis-color-rgb), $table-active-bg-factor) !default;\n\n$table-hover-color:           $table-color !default;\n$table-hover-bg-factor:       .075 !default;\n$table-hover-bg:              rgba(var(--#{$prefix}emphasis-color-rgb), $table-hover-bg-factor) !default;\n\n$table-border-factor:         .2 !default;\n$table-border-width:          var(--#{$prefix}border-width) !default;\n$table-border-color:          var(--#{$prefix}border-color) !default;\n\n$table-striped-order:         odd !default;\n$table-striped-columns-order: even !default;\n\n$table-group-separator-color: currentcolor !default;\n\n$table-caption-color:         var(--#{$prefix}secondary-color) !default;\n\n$table-bg-scale:              -80% !default;\n// scss-docs-end table-variables\n\n// scss-docs-start table-loop\n$table-variants: (\n  \"primary\":    shift-color($primary, $table-bg-scale),\n  \"secondary\":  shift-color($secondary, $table-bg-scale),\n  \"success\":    shift-color($success, $table-bg-scale),\n  \"info\":       shift-color($info, $table-bg-scale),\n  \"warning\":    shift-color($warning, $table-bg-scale),\n  \"danger\":     shift-color($danger, $table-bg-scale),\n  \"light\":      $light,\n  \"dark\":       $dark,\n) !default;\n// scss-docs-end table-loop\n\n\n// Buttons + Forms\n//\n// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.\n\n// scss-docs-start input-btn-variables\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-font-family:       null !default;\n$input-btn-font-size:         $font-size-base !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:         $focus-ring-width !default;\n$input-btn-focus-color-opacity: $focus-ring-opacity !default;\n$input-btn-focus-color:         $focus-ring-color !default;\n$input-btn-focus-blur:          $focus-ring-blur !default;\n$input-btn-focus-box-shadow:    $focus-ring-box-shadow !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-font-size-sm:      $font-size-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-font-size-lg:      $font-size-lg !default;\n\n$input-btn-border-width:      var(--#{$prefix}border-width) !default;\n// scss-docs-end input-btn-variables\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background, and border color.\n\n// scss-docs-start btn-variables\n$btn-color:                   var(--#{$prefix}body-color) !default;\n$btn-padding-y:               $input-btn-padding-y !default;\n$btn-padding-x:               $input-btn-padding-x !default;\n$btn-font-family:             $input-btn-font-family !default;\n$btn-font-size:               $input-btn-font-size !default;\n$btn-line-height:             $input-btn-line-height !default;\n$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping\n\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\n\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\n\n$btn-border-width:            $input-btn-border-width !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\n$btn-focus-width:             $input-btn-focus-width !default;\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\n$btn-disabled-opacity:        .65 !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\n\n$btn-link-color:              var(--#{$prefix}link-color) !default;\n$btn-link-hover-color:        var(--#{$prefix}link-hover-color) !default;\n$btn-link-disabled-color:     $gray-600 !default;\n$btn-link-focus-shadow-rgb:   to-rgb(mix(color-contrast($link-color), $link-color, 15%)) !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           var(--#{$prefix}border-radius) !default;\n$btn-border-radius-sm:        var(--#{$prefix}border-radius-sm) !default;\n$btn-border-radius-lg:        var(--#{$prefix}border-radius-lg) !default;\n\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$btn-hover-bg-shade-amount:       15% !default;\n$btn-hover-bg-tint-amount:        15% !default;\n$btn-hover-border-shade-amount:   20% !default;\n$btn-hover-border-tint-amount:    10% !default;\n$btn-active-bg-shade-amount:      20% !default;\n$btn-active-bg-tint-amount:       20% !default;\n$btn-active-border-shade-amount:  25% !default;\n$btn-active-border-tint-amount:   10% !default;\n// scss-docs-end btn-variables\n\n\n// Forms\n\n// scss-docs-start form-text-variables\n$form-text-margin-top:                  .25rem !default;\n$form-text-font-size:                   $small-font-size !default;\n$form-text-font-style:                  null !default;\n$form-text-font-weight:                 null !default;\n$form-text-color:                       var(--#{$prefix}secondary-color) !default;\n// scss-docs-end form-text-variables\n\n// scss-docs-start form-label-variables\n$form-label-margin-bottom:              .5rem !default;\n$form-label-font-size:                  null !default;\n$form-label-font-style:                 null !default;\n$form-label-font-weight:                null !default;\n$form-label-color:                      null !default;\n// scss-docs-end form-label-variables\n\n// scss-docs-start form-input-variables\n$input-padding-y:                       $input-btn-padding-y !default;\n$input-padding-x:                       $input-btn-padding-x !default;\n$input-font-family:                     $input-btn-font-family !default;\n$input-font-size:                       $input-btn-font-size !default;\n$input-font-weight:                     $font-weight-base !default;\n$input-line-height:                     $input-btn-line-height !default;\n\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\n\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\n\n$input-bg:                              var(--#{$prefix}body-bg) !default;\n$input-disabled-color:                  null !default;\n$input-disabled-bg:                     var(--#{$prefix}secondary-bg) !default;\n$input-disabled-border-color:           null !default;\n\n$input-color:                           var(--#{$prefix}body-color) !default;\n$input-border-color:                    var(--#{$prefix}border-color) !default;\n$input-border-width:                    $input-btn-border-width !default;\n$input-box-shadow:                      var(--#{$prefix}box-shadow-inset) !default;\n\n$input-border-radius:                   var(--#{$prefix}border-radius) !default;\n$input-border-radius-sm:                var(--#{$prefix}border-radius-sm) !default;\n$input-border-radius-lg:                var(--#{$prefix}border-radius-lg) !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              tint-color($component-active-bg, 50%) !default;\n$input-focus-color:                     $input-color !default;\n$input-focus-width:                     $input-btn-focus-width !default;\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\n\n$input-placeholder-color:               var(--#{$prefix}secondary-color) !default;\n$input-plaintext-color:                 var(--#{$prefix}body-color) !default;\n\n$input-height-border:                   calc(#{$input-border-width} * 2) !default; // stylelint-disable-line function-disallowed-list\n\n$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;\n$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;\n$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y * .5) !default;\n\n$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;\n$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;\n$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;\n\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$form-color-width:                      3rem !default;\n// scss-docs-end form-input-variables\n\n// scss-docs-start form-check-variables\n$form-check-input-width:                  1em !default;\n$form-check-min-height:                   $font-size-base * $line-height-base !default;\n$form-check-padding-start:                $form-check-input-width + .5em !default;\n$form-check-margin-bottom:                .125rem !default;\n$form-check-label-color:                  null !default;\n$form-check-label-cursor:                 null !default;\n$form-check-transition:                   null !default;\n\n$form-check-input-active-filter:          brightness(90%) !default;\n\n$form-check-input-bg:                     $input-bg !default;\n$form-check-input-border:                 var(--#{$prefix}border-width) solid var(--#{$prefix}border-color) !default;\n$form-check-input-border-radius:          .25em !default;\n$form-check-radio-border-radius:          50% !default;\n$form-check-input-focus-border:           $input-focus-border-color !default;\n$form-check-input-focus-box-shadow:       $focus-ring-box-shadow !default;\n\n$form-check-input-checked-color:          $component-active-color !default;\n$form-check-input-checked-bg-color:       $component-active-bg !default;\n$form-check-input-checked-border-color:   $form-check-input-checked-bg-color !default;\n$form-check-input-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/></svg>\") !default;\n$form-check-radio-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>\") !default;\n\n$form-check-input-indeterminate-color:          $component-active-color !default;\n$form-check-input-indeterminate-bg-color:       $component-active-bg !default;\n$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color !default;\n$form-check-input-indeterminate-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>\") !default;\n\n$form-check-input-disabled-opacity:        .5 !default;\n$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity !default;\n$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity !default;\n\n$form-check-inline-margin-end:    1rem !default;\n// scss-docs-end form-check-variables\n\n// scss-docs-start form-switch-variables\n$form-switch-color:               rgba($black, .25) !default;\n$form-switch-width:               2em !default;\n$form-switch-padding-start:       $form-switch-width + .5em !default;\n$form-switch-bg-image:            url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>\") !default;\n$form-switch-border-radius:       $form-switch-width !default;\n$form-switch-transition:          background-position .15s ease-in-out !default;\n\n$form-switch-focus-color:         $input-focus-border-color !default;\n$form-switch-focus-bg-image:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>\") !default;\n\n$form-switch-checked-color:       $component-active-color !default;\n$form-switch-checked-bg-image:    url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>\") !default;\n$form-switch-checked-bg-position: right center !default;\n// scss-docs-end form-switch-variables\n\n// scss-docs-start input-group-variables\n$input-group-addon-padding-y:           $input-padding-y !default;\n$input-group-addon-padding-x:           $input-padding-x !default;\n$input-group-addon-font-weight:         $input-font-weight !default;\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  var(--#{$prefix}tertiary-bg) !default;\n$input-group-addon-border-color:        $input-border-color !default;\n// scss-docs-end input-group-variables\n\n// scss-docs-start form-select-variables\n$form-select-padding-y:             $input-padding-y !default;\n$form-select-padding-x:             $input-padding-x !default;\n$form-select-font-family:           $input-font-family !default;\n$form-select-font-size:             $input-font-size !default;\n$form-select-indicator-padding:     $form-select-padding-x * 3 !default; // Extra padding for background-image\n$form-select-font-weight:           $input-font-weight !default;\n$form-select-line-height:           $input-line-height !default;\n$form-select-color:                 $input-color !default;\n$form-select-bg:                    $input-bg !default;\n$form-select-disabled-color:        null !default;\n$form-select-disabled-bg:           $input-disabled-bg !default;\n$form-select-disabled-border-color: $input-disabled-border-color !default;\n$form-select-bg-position:           right $form-select-padding-x center !default;\n$form-select-bg-size:               16px 12px !default; // In pixels because image dimensions\n$form-select-indicator-color:       $gray-800 !default;\n$form-select-indicator:             url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>\") !default;\n\n$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding !default;\n$form-select-feedback-icon-position:    center right $form-select-indicator-padding !default;\n$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half !default;\n\n$form-select-border-width:        $input-border-width !default;\n$form-select-border-color:        $input-border-color !default;\n$form-select-border-radius:       $input-border-radius !default;\n$form-select-box-shadow:          var(--#{$prefix}box-shadow-inset) !default;\n\n$form-select-focus-border-color:  $input-focus-border-color !default;\n$form-select-focus-width:         $input-focus-width !default;\n$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color !default;\n\n$form-select-padding-y-sm:        $input-padding-y-sm !default;\n$form-select-padding-x-sm:        $input-padding-x-sm !default;\n$form-select-font-size-sm:        $input-font-size-sm !default;\n$form-select-border-radius-sm:    $input-border-radius-sm !default;\n\n$form-select-padding-y-lg:        $input-padding-y-lg !default;\n$form-select-padding-x-lg:        $input-padding-x-lg !default;\n$form-select-font-size-lg:        $input-font-size-lg !default;\n$form-select-border-radius-lg:    $input-border-radius-lg !default;\n\n$form-select-transition:          $input-transition !default;\n// scss-docs-end form-select-variables\n\n// scss-docs-start form-range-variables\n$form-range-track-width:          100% !default;\n$form-range-track-height:         .5rem !default;\n$form-range-track-cursor:         pointer !default;\n$form-range-track-bg:             var(--#{$prefix}secondary-bg) !default;\n$form-range-track-border-radius:  1rem !default;\n$form-range-track-box-shadow:     var(--#{$prefix}box-shadow-inset) !default;\n\n$form-range-thumb-width:                   1rem !default;\n$form-range-thumb-height:                  $form-range-thumb-width !default;\n$form-range-thumb-bg:                      $component-active-bg !default;\n$form-range-thumb-border:                  0 !default;\n$form-range-thumb-border-radius:           1rem !default;\n$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\n$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\n$form-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in Edge\n$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%) !default;\n$form-range-thumb-disabled-bg:             var(--#{$prefix}secondary-color) !default;\n$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n// scss-docs-end form-range-variables\n\n// scss-docs-start form-file-variables\n$form-file-button-color:          $input-color !default;\n$form-file-button-bg:             var(--#{$prefix}tertiary-bg) !default;\n$form-file-button-hover-bg:       var(--#{$prefix}secondary-bg) !default;\n// scss-docs-end form-file-variables\n\n// scss-docs-start form-floating-variables\n$form-floating-height:                  add(3.5rem, $input-height-border) !default;\n$form-floating-line-height:             1.25 !default;\n$form-floating-padding-x:               $input-padding-x !default;\n$form-floating-padding-y:               1rem !default;\n$form-floating-input-padding-t:         1.625rem !default;\n$form-floating-input-padding-b:         .625rem !default;\n$form-floating-label-height:            1.5em !default;\n$form-floating-label-opacity:           .65 !default;\n$form-floating-label-transform:         scale(.85) translateY(-.5rem) translateX(.15rem) !default;\n$form-floating-label-disabled-color:    $gray-600 !default;\n$form-floating-transition:              opacity .1s ease-in-out, transform .1s ease-in-out !default;\n// scss-docs-end form-floating-variables\n\n// Form validation\n\n// scss-docs-start form-feedback-variables\n$form-feedback-margin-top:          $form-text-margin-top !default;\n$form-feedback-font-size:           $form-text-font-size !default;\n$form-feedback-font-style:          $form-text-font-style !default;\n$form-feedback-valid-color:         $success !default;\n$form-feedback-invalid-color:       $danger !default;\n\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\n$form-feedback-icon-valid:          url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>\") !default;\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\n$form-feedback-icon-invalid:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>\") !default;\n// scss-docs-end form-feedback-variables\n\n// scss-docs-start form-validation-colors\n$form-valid-color:                  $form-feedback-valid-color !default;\n$form-valid-border-color:           $form-feedback-valid-color !default;\n$form-invalid-color:                $form-feedback-invalid-color !default;\n$form-invalid-border-color:         $form-feedback-invalid-color !default;\n// scss-docs-end form-validation-colors\n\n// scss-docs-start form-validation-states\n$form-validation-states: (\n  \"valid\": (\n    \"color\": var(--#{$prefix}form-valid-color),\n    \"icon\": $form-feedback-icon-valid,\n    \"tooltip-color\": #fff,\n    \"tooltip-bg-color\": var(--#{$prefix}success),\n    \"focus-box-shadow\": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}success-rgb), $input-btn-focus-color-opacity),\n    \"border-color\": var(--#{$prefix}form-valid-border-color),\n  ),\n  \"invalid\": (\n    \"color\": var(--#{$prefix}form-invalid-color),\n    \"icon\": $form-feedback-icon-invalid,\n    \"tooltip-color\": #fff,\n    \"tooltip-bg-color\": var(--#{$prefix}danger),\n    \"focus-box-shadow\": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}danger-rgb), $input-btn-focus-color-opacity),\n    \"border-color\": var(--#{$prefix}form-invalid-border-color),\n  )\n) !default;\n// scss-docs-end form-validation-states\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n// scss-docs-start zindex-stack\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-offcanvas-backdrop:         1040 !default;\n$zindex-offcanvas:                  1045 !default;\n$zindex-modal-backdrop:             1050 !default;\n$zindex-modal:                      1055 !default;\n$zindex-popover:                    1070 !default;\n$zindex-tooltip:                    1080 !default;\n$zindex-toast:                      1090 !default;\n// scss-docs-end zindex-stack\n\n// scss-docs-start zindex-levels-map\n$zindex-levels: (\n  n1: -1,\n  0: 0,\n  1: 1,\n  2: 2,\n  3: 3\n) !default;\n// scss-docs-end zindex-levels-map\n\n\n// Navs\n\n// scss-docs-start nav-variables\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-font-size:                null !default;\n$nav-link-font-weight:              null !default;\n$nav-link-color:                    var(--#{$prefix}link-color) !default;\n$nav-link-hover-color:              var(--#{$prefix}link-hover-color) !default;\n$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out !default;\n$nav-link-disabled-color:           var(--#{$prefix}secondary-color) !default;\n$nav-link-focus-box-shadow:         $focus-ring-box-shadow !default;\n\n$nav-tabs-border-color:             var(--#{$prefix}border-color) !default;\n$nav-tabs-border-width:             var(--#{$prefix}border-width) !default;\n$nav-tabs-border-radius:            var(--#{$prefix}border-radius) !default;\n$nav-tabs-link-hover-border-color:  var(--#{$prefix}secondary-bg) var(--#{$prefix}secondary-bg) $nav-tabs-border-color !default;\n$nav-tabs-link-active-color:        var(--#{$prefix}emphasis-color) !default;\n$nav-tabs-link-active-bg:           var(--#{$prefix}body-bg) !default;\n$nav-tabs-link-active-border-color: var(--#{$prefix}border-color) var(--#{$prefix}border-color) $nav-tabs-link-active-bg !default;\n\n$nav-pills-border-radius:           var(--#{$prefix}border-radius) !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n\n$nav-underline-gap:                 1rem !default;\n$nav-underline-border-width:        .125rem !default;\n$nav-underline-link-active-color:   var(--#{$prefix}emphasis-color) !default;\n// scss-docs-end nav-variables\n\n\n// Navbar\n\n// scss-docs-start navbar-variables\n$navbar-padding-y:                  $spacer * .5 !default;\n$navbar-padding-x:                  null !default;\n\n$navbar-nav-link-padding-x:         .5rem !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5 !default;\n$navbar-brand-margin-end:           1rem !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n$navbar-toggler-focus-width:        $btn-focus-width !default;\n$navbar-toggler-transition:         box-shadow .15s ease-in-out !default;\n\n$navbar-light-color:                rgba(var(--#{$prefix}emphasis-color-rgb), .65) !default;\n$navbar-light-hover-color:          rgba(var(--#{$prefix}emphasis-color-rgb), .8) !default;\n$navbar-light-active-color:         rgba(var(--#{$prefix}emphasis-color-rgb), 1) !default;\n$navbar-light-disabled-color:       rgba(var(--#{$prefix}emphasis-color-rgb), .3) !default;\n$navbar-light-icon-color:           rgba($body-color, .75) !default;\n$navbar-light-toggler-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-light-toggler-border-color: rgba(var(--#{$prefix}emphasis-color-rgb), .15) !default;\n$navbar-light-brand-color:          $navbar-light-active-color !default;\n$navbar-light-brand-hover-color:    $navbar-light-active-color !default;\n// scss-docs-end navbar-variables\n\n// scss-docs-start navbar-dark-variables\n$navbar-dark-color:                 rgba($white, .55) !default;\n$navbar-dark-hover-color:           rgba($white, .75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\n$navbar-dark-icon-color:            $navbar-dark-color !default;\n$navbar-dark-toggler-icon-bg:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\n$navbar-dark-brand-color:           $navbar-dark-active-color !default;\n$navbar-dark-brand-hover-color:     $navbar-dark-active-color !default;\n// scss-docs-end navbar-dark-variables\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n// scss-docs-start dropdown-variables\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-x:                0 !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-font-size:                $font-size-base !default;\n$dropdown-color:                    var(--#{$prefix}body-color) !default;\n$dropdown-bg:                       var(--#{$prefix}body-bg) !default;\n$dropdown-border-color:             var(--#{$prefix}border-color-translucent) !default;\n$dropdown-border-radius:            var(--#{$prefix}border-radius) !default;\n$dropdown-border-width:             var(--#{$prefix}border-width) !default;\n$dropdown-inner-border-radius:      calc(#{$dropdown-border-radius} - #{$dropdown-border-width}) !default; // stylelint-disable-line function-disallowed-list\n$dropdown-divider-bg:               $dropdown-border-color !default;\n$dropdown-divider-margin-y:         $spacer * .5 !default;\n$dropdown-box-shadow:               var(--#{$prefix}box-shadow) !default;\n\n$dropdown-link-color:               var(--#{$prefix}body-color) !default;\n$dropdown-link-hover-color:         $dropdown-link-color !default;\n$dropdown-link-hover-bg:            var(--#{$prefix}tertiary-bg) !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      var(--#{$prefix}tertiary-color) !default;\n\n$dropdown-item-padding-y:           $spacer * .25 !default;\n$dropdown-item-padding-x:           $spacer !default;\n\n$dropdown-header-color:             $gray-600 !default;\n$dropdown-header-padding-x:         $dropdown-item-padding-x !default;\n$dropdown-header-padding-y:         $dropdown-padding-y !default;\n// fusv-disable\n$dropdown-header-padding:           $dropdown-header-padding-y $dropdown-header-padding-x !default; // Deprecated in v5.2.0\n// fusv-enable\n// scss-docs-end dropdown-variables\n\n// scss-docs-start dropdown-dark-variables\n$dropdown-dark-color:               $gray-300 !default;\n$dropdown-dark-bg:                  $gray-800 !default;\n$dropdown-dark-border-color:        $dropdown-border-color !default;\n$dropdown-dark-divider-bg:          $dropdown-divider-bg !default;\n$dropdown-dark-box-shadow:          null !default;\n$dropdown-dark-link-color:          $dropdown-dark-color !default;\n$dropdown-dark-link-hover-color:    $white !default;\n$dropdown-dark-link-hover-bg:       rgba($white, .15) !default;\n$dropdown-dark-link-active-color:   $dropdown-link-active-color !default;\n$dropdown-dark-link-active-bg:      $dropdown-link-active-bg !default;\n$dropdown-dark-link-disabled-color: $gray-500 !default;\n$dropdown-dark-header-color:        $gray-500 !default;\n// scss-docs-end dropdown-dark-variables\n\n\n// Pagination\n\n// scss-docs-start pagination-variables\n$pagination-padding-y:              .375rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n\n$pagination-font-size:              $font-size-base !default;\n\n$pagination-color:                  var(--#{$prefix}link-color) !default;\n$pagination-bg:                     var(--#{$prefix}body-bg) !default;\n$pagination-border-radius:          var(--#{$prefix}border-radius) !default;\n$pagination-border-width:           var(--#{$prefix}border-width) !default;\n$pagination-margin-start:           calc(#{$pagination-border-width} * -1) !default; // stylelint-disable-line function-disallowed-list\n$pagination-border-color:           var(--#{$prefix}border-color) !default;\n\n$pagination-focus-color:            var(--#{$prefix}link-hover-color) !default;\n$pagination-focus-bg:               var(--#{$prefix}secondary-bg) !default;\n$pagination-focus-box-shadow:       $focus-ring-box-shadow !default;\n$pagination-focus-outline:          0 !default;\n\n$pagination-hover-color:            var(--#{$prefix}link-hover-color) !default;\n$pagination-hover-bg:               var(--#{$prefix}tertiary-bg) !default;\n$pagination-hover-border-color:     var(--#{$prefix}border-color) !default; // Todo in v6: remove this?\n\n$pagination-active-color:           $component-active-color !default;\n$pagination-active-bg:              $component-active-bg !default;\n$pagination-active-border-color:    $component-active-bg !default;\n\n$pagination-disabled-color:         var(--#{$prefix}secondary-color) !default;\n$pagination-disabled-bg:            var(--#{$prefix}secondary-bg) !default;\n$pagination-disabled-border-color:  var(--#{$prefix}border-color) !default;\n\n$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$pagination-border-radius-sm:       var(--#{$prefix}border-radius-sm) !default;\n$pagination-border-radius-lg:       var(--#{$prefix}border-radius-lg) !default;\n// scss-docs-end pagination-variables\n\n\n// Placeholders\n\n// scss-docs-start placeholders\n$placeholder-opacity-max:           .5 !default;\n$placeholder-opacity-min:           .2 !default;\n// scss-docs-end placeholders\n\n// Cards\n\n// scss-docs-start card-variables\n$card-spacer-y:                     $spacer !default;\n$card-spacer-x:                     $spacer !default;\n$card-title-spacer-y:               $spacer * .5 !default;\n$card-title-color:                  null !default;\n$card-subtitle-color:               null !default;\n$card-border-width:                 var(--#{$prefix}border-width) !default;\n$card-border-color:                 var(--#{$prefix}border-color-translucent) !default;\n$card-border-radius:                var(--#{$prefix}border-radius) !default;\n$card-box-shadow:                   null !default;\n$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;\n$card-cap-padding-y:                $card-spacer-y * .5 !default;\n$card-cap-padding-x:                $card-spacer-x !default;\n$card-cap-bg:                       rgba(var(--#{$prefix}body-color-rgb), .03) !default;\n$card-cap-color:                    null !default;\n$card-height:                       null !default;\n$card-color:                        null !default;\n$card-bg:                           var(--#{$prefix}body-bg) !default;\n$card-img-overlay-padding:          $spacer !default;\n$card-group-margin:                 $grid-gutter-width * .5 !default;\n// scss-docs-end card-variables\n\n// Accordion\n\n// scss-docs-start accordion-variables\n$accordion-padding-y:                     1rem !default;\n$accordion-padding-x:                     1.25rem !default;\n$accordion-color:                         var(--#{$prefix}body-color) !default;\n$accordion-bg:                            var(--#{$prefix}body-bg) !default;\n$accordion-border-width:                  var(--#{$prefix}border-width) !default;\n$accordion-border-color:                  var(--#{$prefix}border-color) !default;\n$accordion-border-radius:                 var(--#{$prefix}border-radius) !default;\n$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width) !default;\n\n$accordion-body-padding-y:                $accordion-padding-y !default;\n$accordion-body-padding-x:                $accordion-padding-x !default;\n\n$accordion-button-padding-y:              $accordion-padding-y !default;\n$accordion-button-padding-x:              $accordion-padding-x !default;\n$accordion-button-color:                  var(--#{$prefix}body-color) !default;\n$accordion-button-bg:                     var(--#{$prefix}accordion-bg) !default;\n$accordion-transition:                    $btn-transition, border-radius .15s ease !default;\n$accordion-button-active-bg:              var(--#{$prefix}primary-bg-subtle) !default;\n$accordion-button-active-color:           var(--#{$prefix}primary-text-emphasis) !default;\n\n$accordion-button-focus-border-color:     $input-focus-border-color !default;\n$accordion-button-focus-box-shadow:       $btn-focus-box-shadow !default;\n\n$accordion-icon-width:                    1.25rem !default;\n$accordion-icon-color:                    $body-color !default;\n$accordion-icon-active-color:             $primary-text-emphasis !default;\n$accordion-icon-transition:               transform .2s ease-in-out !default;\n$accordion-icon-transform:                rotate(-180deg) !default;\n\n$accordion-button-icon:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n$accordion-button-active-icon:  url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n// scss-docs-end accordion-variables\n\n// Tooltips\n\n// scss-docs-start tooltip-variables\n$tooltip-font-size:                 $font-size-sm !default;\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     var(--#{$prefix}body-bg) !default;\n$tooltip-bg:                        var(--#{$prefix}emphasis-color) !default;\n$tooltip-border-radius:             var(--#{$prefix}border-radius) !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 $spacer * .25 !default;\n$tooltip-padding-x:                 $spacer * .5 !default;\n$tooltip-margin:                    null !default; // TODO: remove this in v6\n\n$tooltip-arrow-width:               .8rem !default;\n$tooltip-arrow-height:              .4rem !default;\n// fusv-disable\n$tooltip-arrow-color:               null !default; // Deprecated in Bootstrap 5.2.0 for CSS variables\n// fusv-enable\n// scss-docs-end tooltip-variables\n\n// Form tooltips must come after regular tooltips\n// scss-docs-start tooltip-feedback-variables\n$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;\n$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;\n$form-feedback-tooltip-font-size:     $tooltip-font-size !default;\n$form-feedback-tooltip-line-height:   null !default;\n$form-feedback-tooltip-opacity:       $tooltip-opacity !default;\n$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;\n// scss-docs-end tooltip-feedback-variables\n\n\n// Popovers\n\n// scss-docs-start popover-variables\n$popover-font-size:                 $font-size-sm !default;\n$popover-bg:                        var(--#{$prefix}body-bg) !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              var(--#{$prefix}border-width) !default;\n$popover-border-color:              var(--#{$prefix}border-color-translucent) !default;\n$popover-border-radius:             var(--#{$prefix}border-radius-lg) !default;\n$popover-inner-border-radius:       calc(#{$popover-border-radius} - #{$popover-border-width}) !default; // stylelint-disable-line function-disallowed-list\n$popover-box-shadow:                var(--#{$prefix}box-shadow) !default;\n\n$popover-header-font-size:          $font-size-base !default;\n$popover-header-bg:                 var(--#{$prefix}secondary-bg) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          $spacer !default;\n\n$popover-body-color:                var(--#{$prefix}body-color) !default;\n$popover-body-padding-y:            $spacer !default;\n$popover-body-padding-x:            $spacer !default;\n\n$popover-arrow-width:               1rem !default;\n$popover-arrow-height:              .5rem !default;\n// scss-docs-end popover-variables\n\n// fusv-disable\n// Deprecated in Bootstrap 5.2.0 for CSS variables\n$popover-arrow-color:               $popover-bg !default;\n$popover-arrow-outer-color:         var(--#{$prefix}border-color-translucent) !default;\n// fusv-enable\n\n\n// Toasts\n\n// scss-docs-start toast-variables\n$toast-max-width:                   350px !default;\n$toast-padding-x:                   .75rem !default;\n$toast-padding-y:                   .5rem !default;\n$toast-font-size:                   .875rem !default;\n$toast-color:                       null !default;\n$toast-background-color:            rgba(var(--#{$prefix}body-bg-rgb), .85) !default;\n$toast-border-width:                var(--#{$prefix}border-width) !default;\n$toast-border-color:                var(--#{$prefix}border-color-translucent) !default;\n$toast-border-radius:               var(--#{$prefix}border-radius) !default;\n$toast-box-shadow:                  var(--#{$prefix}box-shadow) !default;\n$toast-spacing:                     $container-padding-x !default;\n\n$toast-header-color:                var(--#{$prefix}secondary-color) !default;\n$toast-header-background-color:     rgba(var(--#{$prefix}body-bg-rgb), .85) !default;\n$toast-header-border-color:         $toast-border-color !default;\n// scss-docs-end toast-variables\n\n\n// Badges\n\n// scss-docs-start badge-variables\n$badge-font-size:                   .75em !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-color:                       $white !default;\n$badge-padding-y:                   .35em !default;\n$badge-padding-x:                   .65em !default;\n$badge-border-radius:               var(--#{$prefix}border-radius) !default;\n// scss-docs-end badge-variables\n\n\n// Modals\n\n// scss-docs-start modal-variables\n$modal-inner-padding:               $spacer !default;\n\n$modal-footer-margin-between:       .5rem !default;\n\n$modal-dialog-margin:               .5rem !default;\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-color:               null !default;\n$modal-content-bg:                  var(--#{$prefix}body-bg) !default;\n$modal-content-border-color:        var(--#{$prefix}border-color-translucent) !default;\n$modal-content-border-width:        var(--#{$prefix}border-width) !default;\n$modal-content-border-radius:       var(--#{$prefix}border-radius-lg) !default;\n$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;\n$modal-content-box-shadow-xs:       var(--#{$prefix}box-shadow-sm) !default;\n$modal-content-box-shadow-sm-up:    var(--#{$prefix}box-shadow) !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n\n$modal-header-border-color:         var(--#{$prefix}border-color) !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-header-padding-y:            $modal-inner-padding !default;\n$modal-header-padding-x:            $modal-inner-padding !default;\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\n\n$modal-footer-bg:                   null !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n\n$modal-sm:                          300px !default;\n$modal-md:                          500px !default;\n$modal-lg:                          800px !default;\n$modal-xl:                          1140px !default;\n\n$modal-fade-transform:              translate(0, -50px) !default;\n$modal-show-transform:              none !default;\n$modal-transition:                  transform .3s ease-out !default;\n$modal-scale-transform:             scale(1.02) !default;\n// scss-docs-end modal-variables\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n// scss-docs-start alert-variables\n$alert-padding-y:               $spacer !default;\n$alert-padding-x:               $spacer !default;\n$alert-margin-bottom:           1rem !default;\n$alert-border-radius:           var(--#{$prefix}border-radius) !default;\n$alert-link-font-weight:        $font-weight-bold !default;\n$alert-border-width:            var(--#{$prefix}border-width) !default;\n$alert-dismissible-padding-r:   $alert-padding-x * 3 !default; // 3x covers width of x plus default padding on either side\n// scss-docs-end alert-variables\n\n// fusv-disable\n$alert-bg-scale:                -80% !default; // Deprecated in v5.2.0, to be removed in v6\n$alert-border-scale:            -70% !default; // Deprecated in v5.2.0, to be removed in v6\n$alert-color-scale:             40% !default; // Deprecated in v5.2.0, to be removed in v6\n// fusv-enable\n\n// Progress bars\n\n// scss-docs-start progress-variables\n$progress-height:                   1rem !default;\n$progress-font-size:                $font-size-base * .75 !default;\n$progress-bg:                       var(--#{$prefix}secondary-bg) !default;\n$progress-border-radius:            var(--#{$prefix}border-radius) !default;\n$progress-box-shadow:               var(--#{$prefix}box-shadow-inset) !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   $primary !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n// scss-docs-end progress-variables\n\n\n// List group\n\n// scss-docs-start list-group-variables\n$list-group-color:                  var(--#{$prefix}body-color) !default;\n$list-group-bg:                     var(--#{$prefix}body-bg) !default;\n$list-group-border-color:           var(--#{$prefix}border-color) !default;\n$list-group-border-width:           var(--#{$prefix}border-width) !default;\n$list-group-border-radius:          var(--#{$prefix}border-radius) !default;\n\n$list-group-item-padding-y:         $spacer * .5 !default;\n$list-group-item-padding-x:         $spacer !default;\n// fusv-disable\n$list-group-item-bg-scale:          -80% !default; // Deprecated in v5.3.0\n$list-group-item-color-scale:       40% !default; // Deprecated in v5.3.0\n// fusv-enable\n\n$list-group-hover-bg:               var(--#{$prefix}tertiary-bg) !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         var(--#{$prefix}secondary-color) !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           var(--#{$prefix}secondary-color) !default;\n$list-group-action-hover-color:     var(--#{$prefix}emphasis-color) !default;\n\n$list-group-action-active-color:    var(--#{$prefix}body-color) !default;\n$list-group-action-active-bg:       var(--#{$prefix}secondary-bg) !default;\n// scss-docs-end list-group-variables\n\n\n// Image thumbnails\n\n// scss-docs-start thumbnail-variables\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      var(--#{$prefix}body-bg) !default;\n$thumbnail-border-width:            var(--#{$prefix}border-width) !default;\n$thumbnail-border-color:            var(--#{$prefix}border-color) !default;\n$thumbnail-border-radius:           var(--#{$prefix}border-radius) !default;\n$thumbnail-box-shadow:              var(--#{$prefix}box-shadow-sm) !default;\n// scss-docs-end thumbnail-variables\n\n\n// Figures\n\n// scss-docs-start figure-variables\n$figure-caption-font-size:          $small-font-size !default;\n$figure-caption-color:              var(--#{$prefix}secondary-color) !default;\n// scss-docs-end figure-variables\n\n\n// Breadcrumbs\n\n// scss-docs-start breadcrumb-variables\n$breadcrumb-font-size:              null !default;\n$breadcrumb-padding-y:              0 !default;\n$breadcrumb-padding-x:              0 !default;\n$breadcrumb-item-padding-x:         .5rem !default;\n$breadcrumb-margin-bottom:          1rem !default;\n$breadcrumb-bg:                     null !default;\n$breadcrumb-divider-color:          var(--#{$prefix}secondary-color) !default;\n$breadcrumb-active-color:           var(--#{$prefix}secondary-color) !default;\n$breadcrumb-divider:                quote(\"/\") !default;\n$breadcrumb-divider-flipped:        $breadcrumb-divider !default;\n$breadcrumb-border-radius:          null !default;\n// scss-docs-end breadcrumb-variables\n\n// Carousel\n\n// scss-docs-start carousel-variables\n$carousel-control-color:             $white !default;\n$carousel-control-width:             15% !default;\n$carousel-control-opacity:           .5 !default;\n$carousel-control-hover-opacity:     .9 !default;\n$carousel-control-transition:        opacity .15s ease !default;\n\n$carousel-indicator-width:           30px !default;\n$carousel-indicator-height:          3px !default;\n$carousel-indicator-hit-area-height: 10px !default;\n$carousel-indicator-spacer:          3px !default;\n$carousel-indicator-opacity:         .5 !default;\n$carousel-indicator-active-bg:       $white !default;\n$carousel-indicator-active-opacity:  1 !default;\n$carousel-indicator-transition:      opacity .6s ease !default;\n\n$carousel-caption-width:             70% !default;\n$carousel-caption-color:             $white !default;\n$carousel-caption-padding-y:         1.25rem !default;\n$carousel-caption-spacer:            1.25rem !default;\n\n$carousel-control-icon-width:        2rem !default;\n\n$carousel-control-prev-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>\") !default;\n$carousel-control-next-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n\n$carousel-transition-duration:       .6s !default;\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)\n// scss-docs-end carousel-variables\n\n// scss-docs-start carousel-dark-variables\n$carousel-dark-indicator-active-bg:  $black !default;\n$carousel-dark-caption-color:        $black !default;\n$carousel-dark-control-icon-filter:  invert(1) grayscale(100) !default;\n// scss-docs-end carousel-dark-variables\n\n\n// Spinners\n\n// scss-docs-start spinner-variables\n$spinner-width:           2rem !default;\n$spinner-height:          $spinner-width !default;\n$spinner-vertical-align:  -.125em !default;\n$spinner-border-width:    .25em !default;\n$spinner-animation-speed: .75s !default;\n\n$spinner-width-sm:        1rem !default;\n$spinner-height-sm:       $spinner-width-sm !default;\n$spinner-border-width-sm: .2em !default;\n// scss-docs-end spinner-variables\n\n\n// Close\n\n// scss-docs-start close-variables\n$btn-close-width:            1em !default;\n$btn-close-height:           $btn-close-width !default;\n$btn-close-padding-x:        .25em !default;\n$btn-close-padding-y:        $btn-close-padding-x !default;\n$btn-close-color:            $black !default;\n$btn-close-bg:               url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>\") !default;\n$btn-close-focus-shadow:     $focus-ring-box-shadow !default;\n$btn-close-opacity:          .5 !default;\n$btn-close-hover-opacity:    .75 !default;\n$btn-close-focus-opacity:    1 !default;\n$btn-close-disabled-opacity: .25 !default;\n$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%) !default;\n// scss-docs-end close-variables\n\n\n// Offcanvas\n\n// scss-docs-start offcanvas-variables\n$offcanvas-padding-y:               $modal-inner-padding !default;\n$offcanvas-padding-x:               $modal-inner-padding !default;\n$offcanvas-horizontal-width:        400px !default;\n$offcanvas-vertical-height:         30vh !default;\n$offcanvas-transition-duration:     .3s !default;\n$offcanvas-border-color:            $modal-content-border-color !default;\n$offcanvas-border-width:            $modal-content-border-width !default;\n$offcanvas-title-line-height:       $modal-title-line-height !default;\n$offcanvas-bg-color:                var(--#{$prefix}body-bg) !default;\n$offcanvas-color:                   var(--#{$prefix}body-color) !default;\n$offcanvas-box-shadow:              $modal-content-box-shadow-xs !default;\n$offcanvas-backdrop-bg:             $modal-backdrop-bg !default;\n$offcanvas-backdrop-opacity:        $modal-backdrop-opacity !default;\n// scss-docs-end offcanvas-variables\n\n// Code\n\n$code-font-size:                    $small-font-size !default;\n$code-color:                        $pink !default;\n\n$kbd-padding-y:                     .1875rem !default;\n$kbd-padding-x:                     .375rem !default;\n$kbd-font-size:                     $code-font-size !default;\n$kbd-color:                         var(--#{$prefix}body-bg) !default;\n$kbd-bg:                            var(--#{$prefix}body-color) !default;\n$nested-kbd-font-weight:            null !default; // Deprecated in v5.2.0, removing in v6\n\n$pre-color:                         null !default;\n","// stylelint-disable property-disallowed-list\n// Single side border-radius\n\n// Helper function to replace negative values with 0\n@function valid-radius($radius) {\n  $return: ();\n  @each $value in $radius {\n    @if type-of($value) == number {\n      $return: append($return, max($value, 0));\n    } @else {\n      $return: append($return, $value);\n    }\n  }\n  @return $return;\n}\n\n// scss-docs-start border-radius-mixins\n@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n  @if $enable-rounded {\n    border-radius: valid-radius($radius);\n  }\n  @else if $fallback-border-radius != false {\n    border-radius: $fallback-border-radius;\n  }\n}\n\n@mixin border-top-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n// scss-docs-end border-radius-mixins\n","//\n// Headings\n//\n.h1 {\n  @extend h1;\n}\n\n.h2 {\n  @extend h2;\n}\n\n.h3 {\n  @extend h3;\n}\n\n.h4 {\n  @extend h4;\n}\n\n.h5 {\n  @extend h5;\n}\n\n.h6 {\n  @extend h6;\n}\n\n\n.lead {\n  @include font-size($lead-font-size);\n  font-weight: $lead-font-weight;\n}\n\n// Type display classes\n@each $display, $font-size in $display-font-sizes {\n  .display-#{$display} {\n    @include font-size($font-size);\n    font-family: $display-font-family;\n    font-style: $display-font-style;\n    font-weight: $display-font-weight;\n    line-height: $display-line-height;\n  }\n}\n\n//\n// Emphasis\n//\n.small {\n  @extend small;\n}\n\n.mark {\n  @extend mark;\n}\n\n//\n// Lists\n//\n\n.list-unstyled {\n  @include list-unstyled();\n}\n\n// Inline turns list items into inline-block\n.list-inline {\n  @include list-unstyled();\n}\n.list-inline-item {\n  display: inline-block;\n\n  &:not(:last-child) {\n    margin-right: $list-inline-padding;\n  }\n}\n\n\n//\n// Misc\n//\n\n// Builds on `abbr`\n.initialism {\n  @include font-size($initialism-font-size);\n  text-transform: uppercase;\n}\n\n// Blockquotes\n.blockquote {\n  margin-bottom: $blockquote-margin-y;\n  @include font-size($blockquote-font-size);\n\n  > :last-child {\n    margin-bottom: 0;\n  }\n}\n\n.blockquote-footer {\n  margin-top: -$blockquote-margin-y;\n  margin-bottom: $blockquote-margin-y;\n  @include font-size($blockquote-footer-font-size);\n  color: $blockquote-footer-color;\n\n  &::before {\n    content: \"\\2014\\00A0\"; // em dash, nbsp\n  }\n}\n","// Lists\n\n// Unstyled keeps list items block level, just removes default browser padding and list-style\n@mixin list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n","// Responsive images (ensure images don't scale beyond their parents)\n//\n// This is purposefully opt-in via an explicit class rather than being the default for all `<img>`s.\n// We previously tried the \"images are responsive by default\" approach in Bootstrap v2,\n// and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n// which weren't expecting the images within themselves to be involuntarily resized.\n// See also https://github.com/twbs/bootstrap/issues/18178\n.img-fluid {\n  @include img-fluid();\n}\n\n\n// Image thumbnails\n.img-thumbnail {\n  padding: $thumbnail-padding;\n  background-color: $thumbnail-bg;\n  border: $thumbnail-border-width solid $thumbnail-border-color;\n  @include border-radius($thumbnail-border-radius);\n  @include box-shadow($thumbnail-box-shadow);\n\n  // Keep them at most 100% wide\n  @include img-fluid();\n}\n\n//\n// Figures\n//\n\n.figure {\n  // Ensures the caption's text aligns with the image.\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: $spacer * .5;\n  line-height: 1;\n}\n\n.figure-caption {\n  @include font-size($figure-caption-font-size);\n  color: $figure-caption-color;\n}\n","// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n\n@mixin img-fluid {\n  // Part 1: Set a maximum relative to the parent\n  max-width: 100%;\n  // Part 2: Override the height to auto, otherwise images will be stretched\n  // when setting a width and height attribute on the img element.\n  height: auto;\n}\n","// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n@if $enable-container-classes {\n  // Single container class with breakpoint max-widths\n  .container,\n  // 100% wide container at all breakpoints\n  .container-fluid {\n    @include make-container();\n  }\n\n  // Responsive containers that are 100% wide until a breakpoint\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    .container-#{$breakpoint} {\n      @extend .container-fluid;\n    }\n\n    @include media-breakpoint-up($breakpoint, $grid-breakpoints) {\n      %responsive-container-#{$breakpoint} {\n        max-width: $container-max-width;\n      }\n\n      // Extend each breakpoint which is smaller or equal to the current breakpoint\n      $extend-breakpoint: true;\n\n      @each $name, $width in $grid-breakpoints {\n        @if ($extend-breakpoint) {\n          .container#{breakpoint-infix($name, $grid-breakpoints)} {\n            @extend %responsive-container-#{$breakpoint};\n          }\n\n          // Once the current breakpoint is reached, stop extending\n          @if ($breakpoint == $name) {\n            $extend-breakpoint: false;\n          }\n        }\n      }\n    }\n  }\n}\n","// Container mixins\n\n@mixin make-container($gutter: $container-padding-x) {\n  --#{$prefix}gutter-x: #{$gutter};\n  --#{$prefix}gutter-y: 0;\n  width: 100%;\n  padding-right: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list\n  padding-left: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list\n  margin-right: auto;\n  margin-left: auto;\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl xxl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @if not $n {\n    @error \"breakpoint `#{$name}` not found in `#{$breakpoints}`\";\n  }\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width.\n// The maximum value is reduced by 0.02px to work around the limitations of\n// `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $max: map-get($breakpoints, $name);\n  @return if($max and $max > 0, $max - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min:  breakpoint-min($name, $breakpoints);\n  $next: breakpoint-next($name, $breakpoints);\n  $max:  breakpoint-max($next, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($next, $breakpoints) {\n      @content;\n    }\n  }\n}\n","// Row\n//\n// Rows contain your columns.\n\n:root {\n  @each $name, $value in $grid-breakpoints {\n    --#{$prefix}breakpoint-#{$name}: #{$value};\n  }\n}\n\n@if $enable-grid-classes {\n  .row {\n    @include make-row();\n\n    > * {\n      @include make-col-ready();\n    }\n  }\n}\n\n@if $enable-cssgrid {\n  .grid {\n    display: grid;\n    grid-template-rows: repeat(var(--#{$prefix}rows, 1), 1fr);\n    grid-template-columns: repeat(var(--#{$prefix}columns, #{$grid-columns}), 1fr);\n    gap: var(--#{$prefix}gap, #{$grid-gutter-width});\n\n    @include make-cssgrid();\n  }\n}\n\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@if $enable-grid-classes {\n  @include make-grid-columns();\n}\n","// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n@mixin make-row($gutter: $grid-gutter-width) {\n  --#{$prefix}gutter-x: #{$gutter};\n  --#{$prefix}gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  // TODO: Revisit calc order after https://github.com/react-bootstrap/react-bootstrap/issues/6039 is fixed\n  margin-top: calc(-1 * var(--#{$prefix}gutter-y)); // stylelint-disable-line function-disallowed-list\n  margin-right: calc(-.5 * var(--#{$prefix}gutter-x)); // stylelint-disable-line function-disallowed-list\n  margin-left: calc(-.5 * var(--#{$prefix}gutter-x)); // stylelint-disable-line function-disallowed-list\n}\n\n@mixin make-col-ready() {\n  // Add box sizing if only the grid is loaded\n  box-sizing: if(variable-exists(include-column-box-sizing) and $include-column-box-sizing, border-box, null);\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\n  // always setting `width: 100%;`. This works because we set the width\n  // later on to override this initial width.\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%; // Prevent `.col-auto`, `.col` (& responsive variants) from breaking out the grid\n  padding-right: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list\n  padding-left: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list\n  margin-top: var(--#{$prefix}gutter-y);\n}\n\n@mixin make-col($size: false, $columns: $grid-columns) {\n  @if $size {\n    flex: 0 0 auto;\n    width: percentage(divide($size, $columns));\n\n  } @else {\n    flex: 1 1 0;\n    max-width: 100%;\n  }\n}\n\n@mixin make-col-auto() {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n@mixin make-col-offset($size, $columns: $grid-columns) {\n  $num: divide($size, $columns);\n  margin-left: if($num == 0, 0, percentage($num));\n}\n\n// Row columns\n//\n// Specify on a parent element(e.g., .row) to force immediate children into NN\n// number of columns. Supports wrapping to new lines, but does not do a Masonry\n// style grid.\n@mixin row-cols($count) {\n  > * {\n    flex: 0 0 auto;\n    width: percentage(divide(1, $count));\n  }\n}\n\n// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\n      .col#{$infix} {\n        flex: 1 0 0%; // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      }\n\n      .row-cols#{$infix}-auto > * {\n        @include make-col-auto();\n      }\n\n      @if $grid-row-columns > 0 {\n        @for $i from 1 through $grid-row-columns {\n          .row-cols#{$infix}-#{$i} {\n            @include row-cols($i);\n          }\n        }\n      }\n\n      .col#{$infix}-auto {\n        @include make-col-auto();\n      }\n\n      @if $columns > 0 {\n        @for $i from 1 through $columns {\n          .col#{$infix}-#{$i} {\n            @include make-col($i, $columns);\n          }\n        }\n\n        // `$columns - 1` because offsetting by the width of an entire row isn't possible\n        @for $i from 0 through ($columns - 1) {\n          @if not ($infix == \"\" and $i == 0) { // Avoid emitting useless .offset-0\n            .offset#{$infix}-#{$i} {\n              @include make-col-offset($i, $columns);\n            }\n          }\n        }\n      }\n\n      // Gutters\n      //\n      // Make use of `.g-*`, `.gx-*` or `.gy-*` utilities to change spacing between the columns.\n      @each $key, $value in $gutters {\n        .g#{$infix}-#{$key},\n        .gx#{$infix}-#{$key} {\n          --#{$prefix}gutter-x: #{$value};\n        }\n\n        .g#{$infix}-#{$key},\n        .gy#{$infix}-#{$key} {\n          --#{$prefix}gutter-y: #{$value};\n        }\n      }\n    }\n  }\n}\n\n@mixin make-cssgrid($columns: $grid-columns, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      @if $columns > 0 {\n        @for $i from 1 through $columns {\n          .g-col#{$infix}-#{$i} {\n            grid-column: auto / span $i;\n          }\n        }\n\n        // Start with `1` because `0` is and invalid value.\n        // Ends with `$columns - 1` because offsetting by the width of an entire row isn't possible.\n        @for $i from 1 through ($columns - 1) {\n          .g-start#{$infix}-#{$i} {\n            grid-column-start: $i;\n          }\n        }\n      }\n    }\n  }\n}\n","//\n// Basic Bootstrap table\n//\n\n.table {\n  // Reset needed for nesting tables\n  --#{$prefix}table-color-type: initial;\n  --#{$prefix}table-bg-type: initial;\n  --#{$prefix}table-color-state: initial;\n  --#{$prefix}table-bg-state: initial;\n  // End of reset\n  --#{$prefix}table-color: #{$table-color};\n  --#{$prefix}table-bg: #{$table-bg};\n  --#{$prefix}table-border-color: #{$table-border-color};\n  --#{$prefix}table-accent-bg: #{$table-accent-bg};\n  --#{$prefix}table-striped-color: #{$table-striped-color};\n  --#{$prefix}table-striped-bg: #{$table-striped-bg};\n  --#{$prefix}table-active-color: #{$table-active-color};\n  --#{$prefix}table-active-bg: #{$table-active-bg};\n  --#{$prefix}table-hover-color: #{$table-hover-color};\n  --#{$prefix}table-hover-bg: #{$table-hover-bg};\n\n  width: 100%;\n  margin-bottom: $spacer;\n  vertical-align: $table-cell-vertical-align;\n  border-color: var(--#{$prefix}table-border-color);\n\n  // Target th & td\n  // We need the child combinator to prevent styles leaking to nested tables which doesn't have a `.table` class.\n  // We use the universal selectors here to simplify the selector (else we would need 6 different selectors).\n  // Another advantage is that this generates less code and makes the selector less specific making it easier to override.\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    padding: $table-cell-padding-y $table-cell-padding-x;\n    // Following the precept of cascades: https://codepen.io/miriamsuzanne/full/vYNgodb\n    color: var(--#{$prefix}table-color-state, var(--#{$prefix}table-color-type, var(--#{$prefix}table-color)));\n    background-color: var(--#{$prefix}table-bg);\n    border-bottom-width: $table-border-width;\n    box-shadow: inset 0 0 0 9999px var(--#{$prefix}table-bg-state, var(--#{$prefix}table-bg-type, var(--#{$prefix}table-accent-bg)));\n  }\n\n  > tbody {\n    vertical-align: inherit;\n  }\n\n  > thead {\n    vertical-align: bottom;\n  }\n}\n\n.table-group-divider {\n  border-top: calc(#{$table-border-width} * 2) solid $table-group-separator-color; // stylelint-disable-line function-disallowed-list\n}\n\n//\n// Change placement of captions with a class\n//\n\n.caption-top {\n  caption-side: top;\n}\n\n\n//\n// Condensed table w/ half padding\n//\n\n.table-sm {\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    padding: $table-cell-padding-y-sm $table-cell-padding-x-sm;\n  }\n}\n\n\n// Border versions\n//\n// Add or remove borders all around the table and between all the columns.\n//\n// When borders are added on all sides of the cells, the corners can render odd when\n// these borders do not have the same color or if they are semi-transparent.\n// Therefor we add top and border bottoms to the `tr`s and left and right borders\n// to the `td`s or `th`s\n\n.table-bordered {\n  > :not(caption) > * {\n    border-width: $table-border-width 0;\n\n    // stylelint-disable-next-line selector-max-universal\n    > * {\n      border-width: 0 $table-border-width;\n    }\n  }\n}\n\n.table-borderless {\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    border-bottom-width: 0;\n  }\n\n  > :not(:first-child) {\n    border-top-width: 0;\n  }\n}\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n// For rows\n.table-striped {\n  > tbody > tr:nth-of-type(#{$table-striped-order}) > * {\n    --#{$prefix}table-color-type: var(--#{$prefix}table-striped-color);\n    --#{$prefix}table-bg-type: var(--#{$prefix}table-striped-bg);\n  }\n}\n\n// For columns\n.table-striped-columns {\n  > :not(caption) > tr > :nth-child(#{$table-striped-columns-order}) {\n    --#{$prefix}table-color-type: var(--#{$prefix}table-striped-color);\n    --#{$prefix}table-bg-type: var(--#{$prefix}table-striped-bg);\n  }\n}\n\n// Active table\n//\n// The `.table-active` class can be added to highlight rows or cells\n\n.table-active {\n  --#{$prefix}table-color-state: var(--#{$prefix}table-active-color);\n  --#{$prefix}table-bg-state: var(--#{$prefix}table-active-bg);\n}\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  > tbody > tr:hover > * {\n    --#{$prefix}table-color-state: var(--#{$prefix}table-hover-color);\n    --#{$prefix}table-bg-state: var(--#{$prefix}table-hover-bg);\n  }\n}\n\n\n// Table variants\n//\n// Table variants set the table cell backgrounds, border colors\n// and the colors of the striped, hovered & active tables\n\n@each $color, $value in $table-variants {\n  @include table-variant($color, $value);\n}\n\n// Responsive tables\n//\n// Generate series of `.table-responsive-*` classes for configuring the screen\n// size of where your table will overflow.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n  @include media-breakpoint-down($breakpoint) {\n    .table-responsive#{$infix} {\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n}\n","// scss-docs-start table-variant\n@mixin table-variant($state, $background) {\n  .table-#{$state} {\n    $color: color-contrast(opaque($body-bg, $background));\n    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));\n    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));\n    $active-bg: mix($color, $background, percentage($table-active-bg-factor));\n    $table-border-color: mix($color, $background, percentage($table-border-factor));\n\n    --#{$prefix}table-color: #{$color};\n    --#{$prefix}table-bg: #{$background};\n    --#{$prefix}table-border-color: #{$table-border-color};\n    --#{$prefix}table-striped-bg: #{$striped-bg};\n    --#{$prefix}table-striped-color: #{color-contrast($striped-bg)};\n    --#{$prefix}table-active-bg: #{$active-bg};\n    --#{$prefix}table-active-color: #{color-contrast($active-bg)};\n    --#{$prefix}table-hover-bg: #{$hover-bg};\n    --#{$prefix}table-hover-color: #{color-contrast($hover-bg)};\n\n    color: var(--#{$prefix}table-color);\n    border-color: var(--#{$prefix}table-border-color);\n  }\n}\n// scss-docs-end table-variant\n","//\n// Labels\n//\n\n.form-label {\n  margin-bottom: $form-label-margin-bottom;\n  @include font-size($form-label-font-size);\n  font-style: $form-label-font-style;\n  font-weight: $form-label-font-weight;\n  color: $form-label-color;\n}\n\n// For use with horizontal and inline forms, when you need the label (or legend)\n// text to align with the form controls.\n.col-form-label {\n  padding-top: add($input-padding-y, $input-border-width);\n  padding-bottom: add($input-padding-y, $input-border-width);\n  margin-bottom: 0; // Override the `<legend>` default\n  @include font-size(inherit); // Override the `<legend>` default\n  font-style: $form-label-font-style;\n  font-weight: $form-label-font-weight;\n  line-height: $input-line-height;\n  color: $form-label-color;\n}\n\n.col-form-label-lg {\n  padding-top: add($input-padding-y-lg, $input-border-width);\n  padding-bottom: add($input-padding-y-lg, $input-border-width);\n  @include font-size($input-font-size-lg);\n}\n\n.col-form-label-sm {\n  padding-top: add($input-padding-y-sm, $input-border-width);\n  padding-bottom: add($input-padding-y-sm, $input-border-width);\n  @include font-size($input-font-size-sm);\n}\n","//\n// Form text\n//\n\n.form-text {\n  margin-top: $form-text-margin-top;\n  @include font-size($form-text-font-size);\n  font-style: $form-text-font-style;\n  font-weight: $form-text-font-weight;\n  color: $form-text-color;\n}\n","//\n// General form controls (plus a few specific high-level interventions)\n//\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y $input-padding-x;\n  font-family: $input-font-family;\n  @include font-size($input-font-size);\n  font-weight: $input-font-weight;\n  line-height: $input-line-height;\n  color: $input-color;\n  appearance: none; // Fix appearance for date inputs in Safari\n  background-color: $input-bg;\n  background-clip: padding-box;\n  border: $input-border-width solid $input-border-color;\n\n  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.\n  @include border-radius($input-border-radius, 0);\n\n  @include box-shadow($input-box-shadow);\n  @include transition($input-transition);\n\n  &[type=\"file\"] {\n    overflow: hidden; // prevent pseudo element button overlap\n\n    &:not(:disabled):not([readonly]) {\n      cursor: pointer;\n    }\n  }\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  &:focus {\n    color: $input-focus-color;\n    background-color: $input-focus-bg;\n    border-color: $input-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($input-box-shadow, $input-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $input-focus-box-shadow;\n    }\n  }\n\n  &::-webkit-date-and-time-value {\n    // On Android Chrome, form-control's \"width: 100%\" makes the input width too small\n    // Tested under Android 11 / Chrome 89, Android 12 / Chrome 100, Android 13 / Chrome 109\n    //\n    // On iOS Safari, form-control's \"appearance: none\" + \"width: 100%\" makes the input width too small\n    // Tested under iOS 16.2 / Safari 16.2\n    min-width: 85px; // Seems to be a good minimum safe width\n\n    // Add some height to date inputs on iOS\n    // https://github.com/twbs/bootstrap/issues/23307\n    // TODO: we can remove this workaround once https://bugs.webkit.org/show_bug.cgi?id=198959 is resolved\n    // Multiply line-height by 1em if it has no unit\n    height: if(unit($input-line-height) == \"\", $input-line-height * 1em, $input-line-height);\n\n    // Android Chrome type=\"date\" is taller than the other inputs\n    // because of \"margin: 1px 24px 1px 4px\" inside the shadow DOM\n    // Tested under Android 11 / Chrome 89, Android 12 / Chrome 100, Android 13 / Chrome 109\n    margin: 0;\n  }\n\n  // Prevent excessive date input height in Webkit\n  // https://github.com/twbs/bootstrap/issues/34433\n  &::-webkit-datetime-edit {\n    display: block;\n    padding: 0;\n  }\n\n  // Placeholder\n  &::placeholder {\n    color: $input-placeholder-color;\n    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.\n    opacity: 1;\n  }\n\n  // Disabled inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don't honor that edge case; we style them as disabled anyway.\n  &:disabled {\n    color: $input-disabled-color;\n    background-color: $input-disabled-bg;\n    border-color: $input-disabled-border-color;\n    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.\n    opacity: 1;\n  }\n\n  // File input buttons theming\n  &::file-selector-button {\n    padding: $input-padding-y $input-padding-x;\n    margin: (-$input-padding-y) (-$input-padding-x);\n    margin-inline-end: $input-padding-x;\n    color: $form-file-button-color;\n    @include gradient-bg($form-file-button-bg);\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: $input-border-width;\n    border-radius: 0; // stylelint-disable-line property-disallowed-list\n    @include transition($btn-transition);\n  }\n\n  &:hover:not(:disabled):not([readonly])::file-selector-button {\n    background-color: $form-file-button-hover-bg;\n  }\n}\n\n// Readonly controls as plain text\n//\n// Apply class to a readonly input to make it appear like regular plain\n// text (without any border, background color, focus indicator)\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y 0;\n  margin-bottom: 0; // match inputs if this class comes on inputs with default margins\n  line-height: $input-line-height;\n  color: $input-plaintext-color;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: $input-border-width 0;\n\n  &:focus {\n    outline: 0;\n  }\n\n  &.form-control-sm,\n  &.form-control-lg {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// Repeated in `_input_group.scss` to avoid Sass extend issues.\n\n.form-control-sm {\n  min-height: $input-height-sm;\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  @include border-radius($input-border-radius-sm);\n\n  &::file-selector-button {\n    padding: $input-padding-y-sm $input-padding-x-sm;\n    margin: (-$input-padding-y-sm) (-$input-padding-x-sm);\n    margin-inline-end: $input-padding-x-sm;\n  }\n}\n\n.form-control-lg {\n  min-height: $input-height-lg;\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  @include border-radius($input-border-radius-lg);\n\n  &::file-selector-button {\n    padding: $input-padding-y-lg $input-padding-x-lg;\n    margin: (-$input-padding-y-lg) (-$input-padding-x-lg);\n    margin-inline-end: $input-padding-x-lg;\n  }\n}\n\n// Make sure textareas don't shrink too much when resized\n// https://github.com/twbs/bootstrap/pull/29124\n// stylelint-disable selector-no-qualifying-type\ntextarea {\n  &.form-control {\n    min-height: $input-height;\n  }\n\n  &.form-control-sm {\n    min-height: $input-height-sm;\n  }\n\n  &.form-control-lg {\n    min-height: $input-height-lg;\n  }\n}\n// stylelint-enable selector-no-qualifying-type\n\n.form-control-color {\n  width: $form-color-width;\n  height: $input-height;\n  padding: $input-padding-y;\n\n  &:not(:disabled):not([readonly]) {\n    cursor: pointer;\n  }\n\n  &::-moz-color-swatch {\n    border: 0 !important; // stylelint-disable-line declaration-no-important\n    @include border-radius($input-border-radius);\n  }\n\n  &::-webkit-color-swatch {\n    border: 0 !important; // stylelint-disable-line declaration-no-important\n    @include border-radius($input-border-radius);\n  }\n\n  &.form-control-sm { height: $input-height-sm; }\n  &.form-control-lg { height: $input-height-lg; }\n}\n","// stylelint-disable property-disallowed-list\n@mixin transition($transition...) {\n  @if length($transition) == 0 {\n    $transition: $transition-base;\n  }\n\n  @if length($transition) > 1 {\n    @each $value in $transition {\n      @if $value == null or $value == none {\n        @warn \"The keyword 'none' or 'null' must be used as a single argument.\";\n      }\n    }\n  }\n\n  @if $enable-transitions {\n    @if nth($transition, 1) != null {\n      transition: $transition;\n    }\n\n    @if $enable-reduced-motion and nth($transition, 1) != null and nth($transition, 1) != none {\n      @media (prefers-reduced-motion: reduce) {\n        transition: none;\n      }\n    }\n  }\n}\n","// Gradients\n\n// scss-docs-start gradient-bg-mixin\n@mixin gradient-bg($color: null) {\n  background-color: $color;\n\n  @if $enable-gradients {\n    background-image: var(--#{$prefix}gradient);\n  }\n}\n// scss-docs-end gradient-bg-mixin\n\n// scss-docs-start gradient-mixins\n// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n}\n\n@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\n  background-image: linear-gradient($deg, $start-color, $end-color);\n}\n\n@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n}\n\n@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}\n// scss-docs-end gradient-mixins\n","// Select\n//\n// Replaces the browser default select with a custom one, mostly pulled from\n// https://primer.github.io/.\n\n.form-select {\n  --#{$prefix}form-select-bg-img: #{escape-svg($form-select-indicator)};\n\n  display: block;\n  width: 100%;\n  padding: $form-select-padding-y $form-select-indicator-padding $form-select-padding-y $form-select-padding-x;\n  font-family: $form-select-font-family;\n  @include font-size($form-select-font-size);\n  font-weight: $form-select-font-weight;\n  line-height: $form-select-line-height;\n  color: $form-select-color;\n  appearance: none;\n  background-color: $form-select-bg;\n  background-image: var(--#{$prefix}form-select-bg-img), var(--#{$prefix}form-select-bg-icon, none);\n  background-repeat: no-repeat;\n  background-position: $form-select-bg-position;\n  background-size: $form-select-bg-size;\n  border: $form-select-border-width solid $form-select-border-color;\n  @include border-radius($form-select-border-radius, 0);\n  @include box-shadow($form-select-box-shadow);\n  @include transition($form-select-transition);\n\n  &:focus {\n    border-color: $form-select-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($form-select-box-shadow, $form-select-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $form-select-focus-box-shadow;\n    }\n  }\n\n  &[multiple],\n  &[size]:not([size=\"1\"]) {\n    padding-right: $form-select-padding-x;\n    background-image: none;\n  }\n\n  &:disabled {\n    color: $form-select-disabled-color;\n    background-color: $form-select-disabled-bg;\n    border-color: $form-select-disabled-border-color;\n  }\n\n  // Remove outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $form-select-color;\n  }\n}\n\n.form-select-sm {\n  padding-top: $form-select-padding-y-sm;\n  padding-bottom: $form-select-padding-y-sm;\n  padding-left: $form-select-padding-x-sm;\n  @include font-size($form-select-font-size-sm);\n  @include border-radius($form-select-border-radius-sm);\n}\n\n.form-select-lg {\n  padding-top: $form-select-padding-y-lg;\n  padding-bottom: $form-select-padding-y-lg;\n  padding-left: $form-select-padding-x-lg;\n  @include font-size($form-select-font-size-lg);\n  @include border-radius($form-select-border-radius-lg);\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    .form-select {\n      --#{$prefix}form-select-bg-img: #{escape-svg($form-select-indicator-dark)};\n    }\n  }\n}\n","//\n// Check/radio\n//\n\n.form-check {\n  display: block;\n  min-height: $form-check-min-height;\n  padding-left: $form-check-padding-start;\n  margin-bottom: $form-check-margin-bottom;\n\n  .form-check-input {\n    float: left;\n    margin-left: $form-check-padding-start * -1;\n  }\n}\n\n.form-check-reverse {\n  padding-right: $form-check-padding-start;\n  padding-left: 0;\n  text-align: right;\n\n  .form-check-input {\n    float: right;\n    margin-right: $form-check-padding-start * -1;\n    margin-left: 0;\n  }\n}\n\n.form-check-input {\n  --#{$prefix}form-check-bg: #{$form-check-input-bg};\n\n  flex-shrink: 0;\n  width: $form-check-input-width;\n  height: $form-check-input-width;\n  margin-top: ($line-height-base - $form-check-input-width) * .5; // line-height minus check height\n  vertical-align: top;\n  appearance: none;\n  background-color: var(--#{$prefix}form-check-bg);\n  background-image: var(--#{$prefix}form-check-bg-image);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: $form-check-input-border;\n  print-color-adjust: exact; // Keep themed appearance for print\n  @include transition($form-check-transition);\n\n  &[type=\"checkbox\"] {\n    @include border-radius($form-check-input-border-radius);\n  }\n\n  &[type=\"radio\"] {\n    // stylelint-disable-next-line property-disallowed-list\n    border-radius: $form-check-radio-border-radius;\n  }\n\n  &:active {\n    filter: $form-check-input-active-filter;\n  }\n\n  &:focus {\n    border-color: $form-check-input-focus-border;\n    outline: 0;\n    box-shadow: $form-check-input-focus-box-shadow;\n  }\n\n  &:checked {\n    background-color: $form-check-input-checked-bg-color;\n    border-color: $form-check-input-checked-border-color;\n\n    &[type=\"checkbox\"] {\n      @if $enable-gradients {\n        --#{$prefix}form-check-bg-image: #{escape-svg($form-check-input-checked-bg-image)}, var(--#{$prefix}gradient);\n      } @else {\n        --#{$prefix}form-check-bg-image: #{escape-svg($form-check-input-checked-bg-image)};\n      }\n    }\n\n    &[type=\"radio\"] {\n      @if $enable-gradients {\n        --#{$prefix}form-check-bg-image: #{escape-svg($form-check-radio-checked-bg-image)}, var(--#{$prefix}gradient);\n      } @else {\n        --#{$prefix}form-check-bg-image: #{escape-svg($form-check-radio-checked-bg-image)};\n      }\n    }\n  }\n\n  &[type=\"checkbox\"]:indeterminate {\n    background-color: $form-check-input-indeterminate-bg-color;\n    border-color: $form-check-input-indeterminate-border-color;\n\n    @if $enable-gradients {\n      --#{$prefix}form-check-bg-image: #{escape-svg($form-check-input-indeterminate-bg-image)}, var(--#{$prefix}gradient);\n    } @else {\n      --#{$prefix}form-check-bg-image: #{escape-svg($form-check-input-indeterminate-bg-image)};\n    }\n  }\n\n  &:disabled {\n    pointer-events: none;\n    filter: none;\n    opacity: $form-check-input-disabled-opacity;\n  }\n\n  // Use disabled attribute in addition of :disabled pseudo-class\n  // See: https://github.com/twbs/bootstrap/issues/28247\n  &[disabled],\n  &:disabled {\n    ~ .form-check-label {\n      cursor: default;\n      opacity: $form-check-label-disabled-opacity;\n    }\n  }\n}\n\n.form-check-label {\n  color: $form-check-label-color;\n  cursor: $form-check-label-cursor;\n}\n\n//\n// Switch\n//\n\n.form-switch {\n  padding-left: $form-switch-padding-start;\n\n  .form-check-input {\n    --#{$prefix}form-switch-bg: #{escape-svg($form-switch-bg-image)};\n\n    width: $form-switch-width;\n    margin-left: $form-switch-padding-start * -1;\n    background-image: var(--#{$prefix}form-switch-bg);\n    background-position: left center;\n    @include border-radius($form-switch-border-radius);\n    @include transition($form-switch-transition);\n\n    &:focus {\n      --#{$prefix}form-switch-bg: #{escape-svg($form-switch-focus-bg-image)};\n    }\n\n    &:checked {\n      background-position: $form-switch-checked-bg-position;\n\n      @if $enable-gradients {\n        --#{$prefix}form-switch-bg: #{escape-svg($form-switch-checked-bg-image)}, var(--#{$prefix}gradient);\n      } @else {\n        --#{$prefix}form-switch-bg: #{escape-svg($form-switch-checked-bg-image)};\n      }\n    }\n  }\n\n  &.form-check-reverse {\n    padding-right: $form-switch-padding-start;\n    padding-left: 0;\n\n    .form-check-input {\n      margin-right: $form-switch-padding-start * -1;\n      margin-left: 0;\n    }\n  }\n}\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: $form-check-inline-margin-end;\n}\n\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n\n  &[disabled],\n  &:disabled {\n    + .btn {\n      pointer-events: none;\n      filter: none;\n      opacity: $form-check-btn-check-disabled-opacity;\n    }\n  }\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    .form-switch .form-check-input:not(:checked):not(:focus) {\n      --#{$prefix}form-switch-bg: #{escape-svg($form-switch-bg-image-dark)};\n    }\n  }\n}\n","// Range\n//\n// Style range inputs the same across browsers. Vendor-specific rules for pseudo\n// elements cannot be mixed. As such, there are no shared styles for focus or\n// active states on prefixed selectors.\n\n.form-range {\n  width: 100%;\n  height: add($form-range-thumb-height, $form-range-thumb-focus-box-shadow-width * 2);\n  padding: 0; // Need to reset padding\n  appearance: none;\n  background-color: transparent;\n\n  &:focus {\n    outline: 0;\n\n    // Pseudo-elements must be split across multiple rulesets to have an effect.\n    // No box-shadow() mixin for focus accessibility.\n    &::-webkit-slider-thumb { box-shadow: $form-range-thumb-focus-box-shadow; }\n    &::-moz-range-thumb     { box-shadow: $form-range-thumb-focus-box-shadow; }\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    width: $form-range-thumb-width;\n    height: $form-range-thumb-height;\n    margin-top: ($form-range-track-height - $form-range-thumb-height) * .5; // Webkit specific\n    appearance: none;\n    @include gradient-bg($form-range-thumb-bg);\n    border: $form-range-thumb-border;\n    @include border-radius($form-range-thumb-border-radius);\n    @include box-shadow($form-range-thumb-box-shadow);\n    @include transition($form-range-thumb-transition);\n\n    &:active {\n      @include gradient-bg($form-range-thumb-active-bg);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: $form-range-track-width;\n    height: $form-range-track-height;\n    color: transparent; // Why?\n    cursor: $form-range-track-cursor;\n    background-color: $form-range-track-bg;\n    border-color: transparent;\n    @include border-radius($form-range-track-border-radius);\n    @include box-shadow($form-range-track-box-shadow);\n  }\n\n  &::-moz-range-thumb {\n    width: $form-range-thumb-width;\n    height: $form-range-thumb-height;\n    appearance: none;\n    @include gradient-bg($form-range-thumb-bg);\n    border: $form-range-thumb-border;\n    @include border-radius($form-range-thumb-border-radius);\n    @include box-shadow($form-range-thumb-box-shadow);\n    @include transition($form-range-thumb-transition);\n\n    &:active {\n      @include gradient-bg($form-range-thumb-active-bg);\n    }\n  }\n\n  &::-moz-range-track {\n    width: $form-range-track-width;\n    height: $form-range-track-height;\n    color: transparent;\n    cursor: $form-range-track-cursor;\n    background-color: $form-range-track-bg;\n    border-color: transparent; // Firefox specific?\n    @include border-radius($form-range-track-border-radius);\n    @include box-shadow($form-range-track-box-shadow);\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    &::-webkit-slider-thumb {\n      background-color: $form-range-thumb-disabled-bg;\n    }\n\n    &::-moz-range-thumb {\n      background-color: $form-range-thumb-disabled-bg;\n    }\n  }\n}\n",".form-floating {\n  position: relative;\n\n  > .form-control,\n  > .form-control-plaintext,\n  > .form-select {\n    height: $form-floating-height;\n    min-height: $form-floating-height;\n    line-height: $form-floating-line-height;\n  }\n\n  > label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    height: 100%; // allow textareas\n    padding: $form-floating-padding-y $form-floating-padding-x;\n    overflow: hidden;\n    text-align: start;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    pointer-events: none;\n    border: $input-border-width solid transparent; // Required for aligning label's text with the input as it affects inner box model\n    transform-origin: 0 0;\n    @include transition($form-floating-transition);\n  }\n\n  > .form-control,\n  > .form-control-plaintext {\n    padding: $form-floating-padding-y $form-floating-padding-x;\n\n    &::placeholder {\n      color: transparent;\n    }\n\n    &:focus,\n    &:not(:placeholder-shown) {\n      padding-top: $form-floating-input-padding-t;\n      padding-bottom: $form-floating-input-padding-b;\n    }\n    // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped\n    &:-webkit-autofill {\n      padding-top: $form-floating-input-padding-t;\n      padding-bottom: $form-floating-input-padding-b;\n    }\n  }\n\n  > .form-select {\n    padding-top: $form-floating-input-padding-t;\n    padding-bottom: $form-floating-input-padding-b;\n  }\n\n  > .form-control:focus,\n  > .form-control:not(:placeholder-shown),\n  > .form-control-plaintext,\n  > .form-select {\n    ~ label {\n      color: rgba(var(--#{$prefix}body-color-rgb), #{$form-floating-label-opacity});\n      transform: $form-floating-label-transform;\n\n      &::after {\n        position: absolute;\n        inset: $form-floating-padding-y ($form-floating-padding-x * .5);\n        z-index: -1;\n        height: $form-floating-label-height;\n        content: \"\";\n        background-color: $input-bg;\n        @include border-radius($input-border-radius);\n      }\n    }\n  }\n  // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped\n  > .form-control:-webkit-autofill {\n    ~ label {\n      color: rgba(var(--#{$prefix}body-color-rgb), #{$form-floating-label-opacity});\n      transform: $form-floating-label-transform;\n    }\n  }\n\n  > .form-control-plaintext {\n    ~ label {\n      border-width: $input-border-width 0; // Required to properly position label text - as explained above\n    }\n  }\n\n  > :disabled ~ label,\n  > .form-control:disabled ~ label { // Required for `.form-control`s because of specificity\n    color: $form-floating-label-disabled-color;\n\n    &::after {\n      background-color: $input-disabled-bg;\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // For form validation feedback\n  align-items: stretch;\n  width: 100%;\n\n  > .form-control,\n  > .form-select,\n  > .form-floating {\n    position: relative; // For focus state's z-index\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0; // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size\n  }\n\n  // Bring the \"active\" form control to the top of surrounding elements\n  > .form-control:focus,\n  > .form-select:focus,\n  > .form-floating:focus-within {\n    z-index: 5;\n  }\n\n  // Ensure buttons are always above inputs for more visually pleasing borders.\n  // This isn't needed for `.input-group-text` since it shares the same border-color\n  // as our inputs.\n  .btn {\n    position: relative;\n    z-index: 2;\n\n    &:focus {\n      z-index: 5;\n    }\n  }\n}\n\n\n// Textual addons\n//\n// Serves as a catch-all element for any text or radio/checkbox input you wish\n// to prepend or append to an input.\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: $input-group-addon-padding-y $input-group-addon-padding-x;\n  @include font-size($input-font-size); // Match inputs\n  font-weight: $input-group-addon-font-weight;\n  line-height: $input-line-height;\n  color: $input-group-addon-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $input-group-addon-bg;\n  border: $input-border-width solid $input-group-addon-border-color;\n  @include border-radius($input-border-radius);\n}\n\n\n// Sizing\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  @include border-radius($input-border-radius-lg);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  @include border-radius($input-border-radius-sm);\n}\n\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: $form-select-padding-x + $form-select-indicator-padding;\n}\n\n\n// Rounded corners\n//\n// These rulesets must come after the sizing ones to properly override sm and lg\n// border-radius values when extending. They're more specific than we'd like\n// with the `.input-group >` part, but without it, we cannot override the sizing.\n\n// stylelint-disable-next-line no-duplicate-selectors\n.input-group {\n  &:not(.has-validation) {\n    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),\n    > .dropdown-toggle:nth-last-child(n + 3),\n    > .form-floating:not(:last-child) > .form-control,\n    > .form-floating:not(:last-child) > .form-select {\n      @include border-end-radius(0);\n    }\n  }\n\n  &.has-validation {\n    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),\n    > .dropdown-toggle:nth-last-child(n + 4),\n    > .form-floating:nth-last-child(n + 3) > .form-control,\n    > .form-floating:nth-last-child(n + 3) > .form-select {\n      @include border-end-radius(0);\n    }\n  }\n\n  $validation-messages: \"\";\n  @each $state in map-keys($form-validation-states) {\n    $validation-messages: $validation-messages + \":not(.\" + unquote($state) + \"-tooltip)\" + \":not(.\" + unquote($state) + \"-feedback)\";\n  }\n\n  > :not(:first-child):not(.dropdown-menu)#{$validation-messages} {\n    margin-left: calc(#{$input-border-width} * -1); // stylelint-disable-line function-disallowed-list\n    @include border-start-radius(0);\n  }\n\n  > .form-floating:not(:first-child) > .form-control,\n  > .form-floating:not(:first-child) > .form-select {\n    @include border-start-radius(0);\n  }\n}\n","// This mixin uses an `if()` technique to be compatible with Dart Sass\n// See https://github.com/sass/sass/issues/1873#issuecomment-152293725 for more details\n\n// scss-docs-start form-validation-mixins\n@mixin form-validation-state-selector($state) {\n  @if ($state == \"valid\" or $state == \"invalid\") {\n    .was-validated #{if(&, \"&\", \"\")}:#{$state},\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  } @else {\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  }\n}\n\n@mixin form-validation-state(\n  $state,\n  $color,\n  $icon,\n  $tooltip-color: color-contrast($color),\n  $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),\n  $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity),\n  $border-color: $color\n) {\n  .#{$state}-feedback {\n    display: none;\n    width: 100%;\n    margin-top: $form-feedback-margin-top;\n    @include font-size($form-feedback-font-size);\n    font-style: $form-feedback-font-style;\n    color: $color;\n  }\n\n  .#{$state}-tooltip {\n    position: absolute;\n    top: 100%;\n    z-index: 5;\n    display: none;\n    max-width: 100%; // Contain to parent when possible\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\n    margin-top: .1rem;\n    @include font-size($form-feedback-tooltip-font-size);\n    line-height: $form-feedback-tooltip-line-height;\n    color: $tooltip-color;\n    background-color: $tooltip-bg-color;\n    @include border-radius($form-feedback-tooltip-border-radius);\n  }\n\n  @include form-validation-state-selector($state) {\n    ~ .#{$state}-feedback,\n    ~ .#{$state}-tooltip {\n      display: block;\n    }\n  }\n\n  .form-control {\n    @include form-validation-state-selector($state) {\n      border-color: $border-color;\n\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-image: escape-svg($icon);\n        background-repeat: no-repeat;\n        background-position: right $input-height-inner-quarter center;\n        background-size: $input-height-inner-half $input-height-inner-half;\n      }\n\n      &:focus {\n        border-color: $border-color;\n        box-shadow: $focus-box-shadow;\n      }\n    }\n  }\n\n  // stylelint-disable-next-line selector-no-qualifying-type\n  textarea.form-control {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\n      }\n    }\n  }\n\n  .form-select {\n    @include form-validation-state-selector($state) {\n      border-color: $border-color;\n\n      @if $enable-validation-icons {\n        &:not([multiple]):not([size]),\n        &:not([multiple])[size=\"1\"] {\n          --#{$prefix}form-select-bg-icon: #{escape-svg($icon)};\n          padding-right: $form-select-feedback-icon-padding-end;\n          background-position: $form-select-bg-position, $form-select-feedback-icon-position;\n          background-size: $form-select-bg-size, $form-select-feedback-icon-size;\n        }\n      }\n\n      &:focus {\n        border-color: $border-color;\n        box-shadow: $focus-box-shadow;\n      }\n    }\n  }\n\n  .form-control-color {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        width: add($form-color-width, $input-height-inner);\n      }\n    }\n  }\n\n  .form-check-input {\n    @include form-validation-state-selector($state) {\n      border-color: $border-color;\n\n      &:checked {\n        background-color: $color;\n      }\n\n      &:focus {\n        box-shadow: $focus-box-shadow;\n      }\n\n      ~ .form-check-label {\n        color: $color;\n      }\n    }\n  }\n  .form-check-inline .form-check-input {\n    ~ .#{$state}-feedback {\n      margin-left: .5em;\n    }\n  }\n\n  .input-group {\n    > .form-control:not(:focus),\n    > .form-select:not(:focus),\n    > .form-floating:not(:focus-within) {\n      @include form-validation-state-selector($state) {\n        @if $state == \"valid\" {\n          z-index: 3;\n        } @else if $state == \"invalid\" {\n          z-index: 4;\n        }\n      }\n    }\n  }\n}\n// scss-docs-end form-validation-mixins\n","//\n// Base styles\n//\n\n.btn {\n  // scss-docs-start btn-css-vars\n  --#{$prefix}btn-padding-x: #{$btn-padding-x};\n  --#{$prefix}btn-padding-y: #{$btn-padding-y};\n  --#{$prefix}btn-font-family: #{$btn-font-family};\n  @include rfs($btn-font-size, --#{$prefix}btn-font-size);\n  --#{$prefix}btn-font-weight: #{$btn-font-weight};\n  --#{$prefix}btn-line-height: #{$btn-line-height};\n  --#{$prefix}btn-color: #{$btn-color};\n  --#{$prefix}btn-bg: transparent;\n  --#{$prefix}btn-border-width: #{$btn-border-width};\n  --#{$prefix}btn-border-color: transparent;\n  --#{$prefix}btn-border-radius: #{$btn-border-radius};\n  --#{$prefix}btn-hover-border-color: transparent;\n  --#{$prefix}btn-box-shadow: #{$btn-box-shadow};\n  --#{$prefix}btn-disabled-opacity: #{$btn-disabled-opacity};\n  --#{$prefix}btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--#{$prefix}btn-focus-shadow-rgb), .5);\n  // scss-docs-end btn-css-vars\n\n  display: inline-block;\n  padding: var(--#{$prefix}btn-padding-y) var(--#{$prefix}btn-padding-x);\n  font-family: var(--#{$prefix}btn-font-family);\n  @include font-size(var(--#{$prefix}btn-font-size));\n  font-weight: var(--#{$prefix}btn-font-weight);\n  line-height: var(--#{$prefix}btn-line-height);\n  color: var(--#{$prefix}btn-color);\n  text-align: center;\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: $btn-white-space;\n  vertical-align: middle;\n  cursor: if($enable-button-pointers, pointer, null);\n  user-select: none;\n  border: var(--#{$prefix}btn-border-width) solid var(--#{$prefix}btn-border-color);\n  @include border-radius(var(--#{$prefix}btn-border-radius));\n  @include gradient-bg(var(--#{$prefix}btn-bg));\n  @include box-shadow(var(--#{$prefix}btn-box-shadow));\n  @include transition($btn-transition);\n\n  &:hover {\n    color: var(--#{$prefix}btn-hover-color);\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    background-color: var(--#{$prefix}btn-hover-bg);\n    border-color: var(--#{$prefix}btn-hover-border-color);\n  }\n\n  .btn-check + &:hover {\n    // override for the checkbox/radio buttons\n    color: var(--#{$prefix}btn-color);\n    background-color: var(--#{$prefix}btn-bg);\n    border-color: var(--#{$prefix}btn-border-color);\n  }\n\n  &:focus-visible {\n    color: var(--#{$prefix}btn-hover-color);\n    @include gradient-bg(var(--#{$prefix}btn-hover-bg));\n    border-color: var(--#{$prefix}btn-hover-border-color);\n    outline: 0;\n    // Avoid using mixin so we can pass custom focus shadow properly\n    @if $enable-shadows {\n      box-shadow: var(--#{$prefix}btn-box-shadow), var(--#{$prefix}btn-focus-box-shadow);\n    } @else {\n      box-shadow: var(--#{$prefix}btn-focus-box-shadow);\n    }\n  }\n\n  .btn-check:focus-visible + & {\n    border-color: var(--#{$prefix}btn-hover-border-color);\n    outline: 0;\n    // Avoid using mixin so we can pass custom focus shadow properly\n    @if $enable-shadows {\n      box-shadow: var(--#{$prefix}btn-box-shadow), var(--#{$prefix}btn-focus-box-shadow);\n    } @else {\n      box-shadow: var(--#{$prefix}btn-focus-box-shadow);\n    }\n  }\n\n  .btn-check:checked + &,\n  :not(.btn-check) + &:active,\n  &:first-child:active,\n  &.active,\n  &.show {\n    color: var(--#{$prefix}btn-active-color);\n    background-color: var(--#{$prefix}btn-active-bg);\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n    border-color: var(--#{$prefix}btn-active-border-color);\n    @include box-shadow(var(--#{$prefix}btn-active-shadow));\n\n    &:focus-visible {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      @if $enable-shadows {\n        box-shadow: var(--#{$prefix}btn-active-shadow), var(--#{$prefix}btn-focus-box-shadow);\n      } @else {\n        box-shadow: var(--#{$prefix}btn-focus-box-shadow);\n      }\n    }\n  }\n\n  &:disabled,\n  &.disabled,\n  fieldset:disabled & {\n    color: var(--#{$prefix}btn-disabled-color);\n    pointer-events: none;\n    background-color: var(--#{$prefix}btn-disabled-bg);\n    background-image: if($enable-gradients, none, null);\n    border-color: var(--#{$prefix}btn-disabled-border-color);\n    opacity: var(--#{$prefix}btn-disabled-opacity);\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Alternate buttons\n//\n\n// scss-docs-start btn-variant-loops\n@each $color, $value in $theme-colors {\n  .btn-#{$color} {\n    @if $color == \"light\" {\n      @include button-variant(\n        $value,\n        $value,\n        $hover-background: shade-color($value, $btn-hover-bg-shade-amount),\n        $hover-border: shade-color($value, $btn-hover-border-shade-amount),\n        $active-background: shade-color($value, $btn-active-bg-shade-amount),\n        $active-border: shade-color($value, $btn-active-border-shade-amount)\n      );\n    } @else if $color == \"dark\" {\n      @include button-variant(\n        $value,\n        $value,\n        $hover-background: tint-color($value, $btn-hover-bg-tint-amount),\n        $hover-border: tint-color($value, $btn-hover-border-tint-amount),\n        $active-background: tint-color($value, $btn-active-bg-tint-amount),\n        $active-border: tint-color($value, $btn-active-border-tint-amount)\n      );\n    } @else {\n      @include button-variant($value, $value);\n    }\n  }\n}\n\n@each $color, $value in $theme-colors {\n  .btn-outline-#{$color} {\n    @include button-outline-variant($value);\n  }\n}\n// scss-docs-end btn-variant-loops\n\n\n//\n// Link buttons\n//\n\n// Make a button look and behave like a link\n.btn-link {\n  --#{$prefix}btn-font-weight: #{$font-weight-normal};\n  --#{$prefix}btn-color: #{$btn-link-color};\n  --#{$prefix}btn-bg: transparent;\n  --#{$prefix}btn-border-color: transparent;\n  --#{$prefix}btn-hover-color: #{$btn-link-hover-color};\n  --#{$prefix}btn-hover-border-color: transparent;\n  --#{$prefix}btn-active-color: #{$btn-link-hover-color};\n  --#{$prefix}btn-active-border-color: transparent;\n  --#{$prefix}btn-disabled-color: #{$btn-link-disabled-color};\n  --#{$prefix}btn-disabled-border-color: transparent;\n  --#{$prefix}btn-box-shadow: 0 0 0 #000; // Can't use `none` as keyword negates all values when used with multiple shadows\n  --#{$prefix}btn-focus-shadow-rgb: #{$btn-link-focus-shadow-rgb};\n\n  text-decoration: $link-decoration;\n  @if $enable-gradients {\n    background-image: none;\n  }\n\n  &:hover,\n  &:focus-visible {\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:focus-visible {\n    color: var(--#{$prefix}btn-color);\n  }\n\n  &:hover {\n    color: var(--#{$prefix}btn-hover-color);\n  }\n\n  // No need for an active state here\n}\n\n\n//\n// Button Sizes\n//\n\n.btn-lg {\n  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-border-radius-lg);\n}\n\n.btn-sm {\n  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-border-radius-sm);\n}\n","// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n// scss-docs-start btn-variant-mixin\n@mixin button-variant(\n  $background,\n  $border,\n  $color: color-contrast($background),\n  $hover-background: if($color == $color-contrast-light, shade-color($background, $btn-hover-bg-shade-amount), tint-color($background, $btn-hover-bg-tint-amount)),\n  $hover-border: if($color == $color-contrast-light, shade-color($border, $btn-hover-border-shade-amount), tint-color($border, $btn-hover-border-tint-amount)),\n  $hover-color: color-contrast($hover-background),\n  $active-background: if($color == $color-contrast-light, shade-color($background, $btn-active-bg-shade-amount), tint-color($background, $btn-active-bg-tint-amount)),\n  $active-border: if($color == $color-contrast-light, shade-color($border, $btn-active-border-shade-amount), tint-color($border, $btn-active-border-tint-amount)),\n  $active-color: color-contrast($active-background),\n  $disabled-background: $background,\n  $disabled-border: $border,\n  $disabled-color: color-contrast($disabled-background)\n) {\n  --#{$prefix}btn-color: #{$color};\n  --#{$prefix}btn-bg: #{$background};\n  --#{$prefix}btn-border-color: #{$border};\n  --#{$prefix}btn-hover-color: #{$hover-color};\n  --#{$prefix}btn-hover-bg: #{$hover-background};\n  --#{$prefix}btn-hover-border-color: #{$hover-border};\n  --#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix($color, $border, 15%))};\n  --#{$prefix}btn-active-color: #{$active-color};\n  --#{$prefix}btn-active-bg: #{$active-background};\n  --#{$prefix}btn-active-border-color: #{$active-border};\n  --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};\n  --#{$prefix}btn-disabled-color: #{$disabled-color};\n  --#{$prefix}btn-disabled-bg: #{$disabled-background};\n  --#{$prefix}btn-disabled-border-color: #{$disabled-border};\n}\n// scss-docs-end btn-variant-mixin\n\n// scss-docs-start btn-outline-variant-mixin\n@mixin button-outline-variant(\n  $color,\n  $color-hover: color-contrast($color),\n  $active-background: $color,\n  $active-border: $color,\n  $active-color: color-contrast($active-background)\n) {\n  --#{$prefix}btn-color: #{$color};\n  --#{$prefix}btn-border-color: #{$color};\n  --#{$prefix}btn-hover-color: #{$color-hover};\n  --#{$prefix}btn-hover-bg: #{$active-background};\n  --#{$prefix}btn-hover-border-color: #{$active-border};\n  --#{$prefix}btn-focus-shadow-rgb: #{to-rgb($color)};\n  --#{$prefix}btn-active-color: #{$active-color};\n  --#{$prefix}btn-active-bg: #{$active-background};\n  --#{$prefix}btn-active-border-color: #{$active-border};\n  --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};\n  --#{$prefix}btn-disabled-color: #{$color};\n  --#{$prefix}btn-disabled-bg: transparent;\n  --#{$prefix}btn-disabled-border-color: #{$color};\n  --#{$prefix}gradient: none;\n}\n// scss-docs-end btn-outline-variant-mixin\n\n// scss-docs-start btn-size-mixin\n@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {\n  --#{$prefix}btn-padding-y: #{$padding-y};\n  --#{$prefix}btn-padding-x: #{$padding-x};\n  @include rfs($font-size, --#{$prefix}btn-font-size);\n  --#{$prefix}btn-border-radius: #{$border-radius};\n}\n// scss-docs-end btn-size-mixin\n",".fade {\n  @include transition($transition-fade);\n\n  &:not(.show) {\n    opacity: 0;\n  }\n}\n\n// scss-docs-start collapse-classes\n.collapse {\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  @include transition($transition-collapse);\n\n  &.collapse-horizontal {\n    width: 0;\n    height: auto;\n    @include transition($transition-collapse-width);\n  }\n}\n// scss-docs-end collapse-classes\n","// The dropdown wrapper (`<div>`)\n.dropup,\n.dropend,\n.dropdown,\n.dropstart,\n.dropup-center,\n.dropdown-center {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n\n  // Generate the caret automatically\n  @include caret();\n}\n\n// The dropdown menu\n.dropdown-menu {\n  // scss-docs-start dropdown-css-vars\n  --#{$prefix}dropdown-zindex: #{$zindex-dropdown};\n  --#{$prefix}dropdown-min-width: #{$dropdown-min-width};\n  --#{$prefix}dropdown-padding-x: #{$dropdown-padding-x};\n  --#{$prefix}dropdown-padding-y: #{$dropdown-padding-y};\n  --#{$prefix}dropdown-spacer: #{$dropdown-spacer};\n  @include rfs($dropdown-font-size, --#{$prefix}dropdown-font-size);\n  --#{$prefix}dropdown-color: #{$dropdown-color};\n  --#{$prefix}dropdown-bg: #{$dropdown-bg};\n  --#{$prefix}dropdown-border-color: #{$dropdown-border-color};\n  --#{$prefix}dropdown-border-radius: #{$dropdown-border-radius};\n  --#{$prefix}dropdown-border-width: #{$dropdown-border-width};\n  --#{$prefix}dropdown-inner-border-radius: #{$dropdown-inner-border-radius};\n  --#{$prefix}dropdown-divider-bg: #{$dropdown-divider-bg};\n  --#{$prefix}dropdown-divider-margin-y: #{$dropdown-divider-margin-y};\n  --#{$prefix}dropdown-box-shadow: #{$dropdown-box-shadow};\n  --#{$prefix}dropdown-link-color: #{$dropdown-link-color};\n  --#{$prefix}dropdown-link-hover-color: #{$dropdown-link-hover-color};\n  --#{$prefix}dropdown-link-hover-bg: #{$dropdown-link-hover-bg};\n  --#{$prefix}dropdown-link-active-color: #{$dropdown-link-active-color};\n  --#{$prefix}dropdown-link-active-bg: #{$dropdown-link-active-bg};\n  --#{$prefix}dropdown-link-disabled-color: #{$dropdown-link-disabled-color};\n  --#{$prefix}dropdown-item-padding-x: #{$dropdown-item-padding-x};\n  --#{$prefix}dropdown-item-padding-y: #{$dropdown-item-padding-y};\n  --#{$prefix}dropdown-header-color: #{$dropdown-header-color};\n  --#{$prefix}dropdown-header-padding-x: #{$dropdown-header-padding-x};\n  --#{$prefix}dropdown-header-padding-y: #{$dropdown-header-padding-y};\n  // scss-docs-end dropdown-css-vars\n\n  position: absolute;\n  z-index: var(--#{$prefix}dropdown-zindex);\n  display: none; // none by default, but block on \"open\" of the menu\n  min-width: var(--#{$prefix}dropdown-min-width);\n  padding: var(--#{$prefix}dropdown-padding-y) var(--#{$prefix}dropdown-padding-x);\n  margin: 0; // Override default margin of ul\n  @include font-size(var(--#{$prefix}dropdown-font-size));\n  color: var(--#{$prefix}dropdown-color);\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  list-style: none;\n  background-color: var(--#{$prefix}dropdown-bg);\n  background-clip: padding-box;\n  border: var(--#{$prefix}dropdown-border-width) solid var(--#{$prefix}dropdown-border-color);\n  @include border-radius(var(--#{$prefix}dropdown-border-radius));\n  @include box-shadow(var(--#{$prefix}dropdown-box-shadow));\n\n  &[data-bs-popper] {\n    top: 100%;\n    left: 0;\n    margin-top: var(--#{$prefix}dropdown-spacer);\n  }\n\n  @if $dropdown-padding-y == 0 {\n    > .dropdown-item:first-child,\n    > li:first-child .dropdown-item {\n      @include border-top-radius(var(--#{$prefix}dropdown-inner-border-radius));\n    }\n    > .dropdown-item:last-child,\n    > li:last-child .dropdown-item {\n      @include border-bottom-radius(var(--#{$prefix}dropdown-inner-border-radius));\n    }\n\n  }\n}\n\n// scss-docs-start responsive-breakpoints\n// We deliberately hardcode the `bs-` prefix because we check\n// this custom property in JS to determine Popper's positioning\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .dropdown-menu#{$infix}-start {\n      --bs-position: start;\n\n      &[data-bs-popper] {\n        right: auto;\n        left: 0;\n      }\n    }\n\n    .dropdown-menu#{$infix}-end {\n      --bs-position: end;\n\n      &[data-bs-popper] {\n        right: 0;\n        left: auto;\n      }\n    }\n  }\n}\n// scss-docs-end responsive-breakpoints\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n// Just add .dropup after the standard .dropdown class and you're set.\n.dropup {\n  .dropdown-menu[data-bs-popper] {\n    top: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: var(--#{$prefix}dropdown-spacer);\n  }\n\n  .dropdown-toggle {\n    @include caret(up);\n  }\n}\n\n.dropend {\n  .dropdown-menu[data-bs-popper] {\n    top: 0;\n    right: auto;\n    left: 100%;\n    margin-top: 0;\n    margin-left: var(--#{$prefix}dropdown-spacer);\n  }\n\n  .dropdown-toggle {\n    @include caret(end);\n    &::after {\n      vertical-align: 0;\n    }\n  }\n}\n\n.dropstart {\n  .dropdown-menu[data-bs-popper] {\n    top: 0;\n    right: 100%;\n    left: auto;\n    margin-top: 0;\n    margin-right: var(--#{$prefix}dropdown-spacer);\n  }\n\n  .dropdown-toggle {\n    @include caret(start);\n    &::before {\n      vertical-align: 0;\n    }\n  }\n}\n\n\n// Dividers (basically an `<hr>`) within the dropdown\n.dropdown-divider {\n  height: 0;\n  margin: var(--#{$prefix}dropdown-divider-margin-y) 0;\n  overflow: hidden;\n  border-top: 1px solid var(--#{$prefix}dropdown-divider-bg);\n  opacity: 1; // Revisit in v6 to de-dupe styles that conflict with <hr> element\n}\n\n// Links, buttons, and more within the dropdown menu\n//\n// `<button>`-specific styles are denoted with `// For <button>s`\n.dropdown-item {\n  display: block;\n  width: 100%; // For `<button>`s\n  padding: var(--#{$prefix}dropdown-item-padding-y) var(--#{$prefix}dropdown-item-padding-x);\n  clear: both;\n  font-weight: $font-weight-normal;\n  color: var(--#{$prefix}dropdown-link-color);\n  text-align: inherit; // For `<button>`s\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap; // prevent links from randomly breaking onto new lines\n  background-color: transparent; // For `<button>`s\n  border: 0; // For `<button>`s\n  @include border-radius(var(--#{$prefix}dropdown-item-border-radius, 0));\n\n  &:hover,\n  &:focus {\n    color: var(--#{$prefix}dropdown-link-hover-color);\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    @include gradient-bg(var(--#{$prefix}dropdown-link-hover-bg));\n  }\n\n  &.active,\n  &:active {\n    color: var(--#{$prefix}dropdown-link-active-color);\n    text-decoration: none;\n    @include gradient-bg(var(--#{$prefix}dropdown-link-active-bg));\n  }\n\n  &.disabled,\n  &:disabled {\n    color: var(--#{$prefix}dropdown-link-disabled-color);\n    pointer-events: none;\n    background-color: transparent;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n  }\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: var(--#{$prefix}dropdown-header-padding-y) var(--#{$prefix}dropdown-header-padding-x);\n  margin-bottom: 0; // for use with heading elements\n  @include font-size($font-size-sm);\n  color: var(--#{$prefix}dropdown-header-color);\n  white-space: nowrap; // as with > li > a\n}\n\n// Dropdown text\n.dropdown-item-text {\n  display: block;\n  padding: var(--#{$prefix}dropdown-item-padding-y) var(--#{$prefix}dropdown-item-padding-x);\n  color: var(--#{$prefix}dropdown-link-color);\n}\n\n// Dark dropdowns\n.dropdown-menu-dark {\n  // scss-docs-start dropdown-dark-css-vars\n  --#{$prefix}dropdown-color: #{$dropdown-dark-color};\n  --#{$prefix}dropdown-bg: #{$dropdown-dark-bg};\n  --#{$prefix}dropdown-border-color: #{$dropdown-dark-border-color};\n  --#{$prefix}dropdown-box-shadow: #{$dropdown-dark-box-shadow};\n  --#{$prefix}dropdown-link-color: #{$dropdown-dark-link-color};\n  --#{$prefix}dropdown-link-hover-color: #{$dropdown-dark-link-hover-color};\n  --#{$prefix}dropdown-divider-bg: #{$dropdown-dark-divider-bg};\n  --#{$prefix}dropdown-link-hover-bg: #{$dropdown-dark-link-hover-bg};\n  --#{$prefix}dropdown-link-active-color: #{$dropdown-dark-link-active-color};\n  --#{$prefix}dropdown-link-active-bg: #{$dropdown-dark-link-active-bg};\n  --#{$prefix}dropdown-link-disabled-color: #{$dropdown-dark-link-disabled-color};\n  --#{$prefix}dropdown-header-color: #{$dropdown-dark-header-color};\n  // scss-docs-end dropdown-dark-css-vars\n}\n","// scss-docs-start caret-mixins\n@mixin caret-down($width: $caret-width) {\n  border-top: $width solid;\n  border-right: $width solid transparent;\n  border-bottom: 0;\n  border-left: $width solid transparent;\n}\n\n@mixin caret-up($width: $caret-width) {\n  border-top: 0;\n  border-right: $width solid transparent;\n  border-bottom: $width solid;\n  border-left: $width solid transparent;\n}\n\n@mixin caret-end($width: $caret-width) {\n  border-top: $width solid transparent;\n  border-right: 0;\n  border-bottom: $width solid transparent;\n  border-left: $width solid;\n}\n\n@mixin caret-start($width: $caret-width) {\n  border-top: $width solid transparent;\n  border-right: $width solid;\n  border-bottom: $width solid transparent;\n}\n\n@mixin caret(\n  $direction: down,\n  $width: $caret-width,\n  $spacing: $caret-spacing,\n  $vertical-align: $caret-vertical-align\n) {\n  @if $enable-caret {\n    &::after {\n      display: inline-block;\n      margin-left: $spacing;\n      vertical-align: $vertical-align;\n      content: \"\";\n      @if $direction == down {\n        @include caret-down($width);\n      } @else if $direction == up {\n        @include caret-up($width);\n      } @else if $direction == end {\n        @include caret-end($width);\n      }\n    }\n\n    @if $direction == start {\n      &::after {\n        display: none;\n      }\n\n      &::before {\n        display: inline-block;\n        margin-right: $spacing;\n        vertical-align: $vertical-align;\n        content: \"\";\n        @include caret-start($width);\n      }\n    }\n\n    &:empty::after {\n      margin-left: 0;\n    }\n  }\n}\n// scss-docs-end caret-mixins\n","// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n\n  > .btn {\n    position: relative;\n    flex: 1 1 auto;\n  }\n\n  // Bring the hover, focused, and \"active\" buttons to the front to overlay\n  // the borders properly\n  > .btn-check:checked + .btn,\n  > .btn-check:focus + .btn,\n  > .btn:hover,\n  > .btn:focus,\n  > .btn:active,\n  > .btn.active {\n    z-index: 1;\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n\n  .input-group {\n    width: auto;\n  }\n}\n\n.btn-group {\n  @include border-radius($btn-border-radius);\n\n  // Prevent double borders when buttons are next to each other\n  > :not(.btn-check:first-child) + .btn,\n  > .btn-group:not(:first-child) {\n    margin-left: calc(#{$btn-border-width} * -1); // stylelint-disable-line function-disallowed-list\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn.dropdown-toggle-split:first-child,\n  > .btn-group:not(:last-child) > .btn {\n    @include border-end-radius(0);\n  }\n\n  // The left radius should be 0 if the button is:\n  // - the \"third or more\" child\n  // - the second child and the previous element isn't `.btn-check` (making it the first child visually)\n  // - part of a btn-group which isn't the first child\n  > .btn:nth-child(n + 3),\n  > :not(.btn-check) + .btn,\n  > .btn-group:not(:first-child) > .btn {\n    @include border-start-radius(0);\n  }\n}\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-sm > .btn { @extend .btn-sm; }\n.btn-group-lg > .btn { @extend .btn-lg; }\n\n\n//\n// Split button dropdowns\n//\n\n.dropdown-toggle-split {\n  padding-right: $btn-padding-x * .75;\n  padding-left: $btn-padding-x * .75;\n\n  &::after,\n  .dropup &::after,\n  .dropend &::after {\n    margin-left: 0;\n  }\n\n  .dropstart &::before {\n    margin-right: 0;\n  }\n}\n\n.btn-sm + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-sm * .75;\n  padding-left: $btn-padding-x-sm * .75;\n}\n\n.btn-lg + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-lg * .75;\n  padding-left: $btn-padding-x-lg * .75;\n}\n\n\n// The clickable button for toggling the menu\n// Set the same inset shadow as the :active state\n.btn-group.show .dropdown-toggle {\n  @include box-shadow($btn-active-box-shadow);\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Vertical button groups\n//\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  > .btn,\n  > .btn-group {\n    width: 100%;\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-top: calc(#{$btn-border-width} * -1); // stylelint-disable-line function-disallowed-list\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-bottom-radius(0);\n  }\n\n  > .btn ~ .btn,\n  > .btn-group:not(:first-child) > .btn {\n    @include border-top-radius(0);\n  }\n}\n","// Base class\n//\n// Kickstart any navigation component with a set of style resets. Works with\n// `<nav>`s, `<ul>`s or `<ol>`s.\n\n.nav {\n  // scss-docs-start nav-css-vars\n  --#{$prefix}nav-link-padding-x: #{$nav-link-padding-x};\n  --#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};\n  @include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);\n  --#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};\n  --#{$prefix}nav-link-color: #{$nav-link-color};\n  --#{$prefix}nav-link-hover-color: #{$nav-link-hover-color};\n  --#{$prefix}nav-link-disabled-color: #{$nav-link-disabled-color};\n  // scss-docs-end nav-css-vars\n\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: var(--#{$prefix}nav-link-padding-y) var(--#{$prefix}nav-link-padding-x);\n  @include font-size(var(--#{$prefix}nav-link-font-size));\n  font-weight: var(--#{$prefix}nav-link-font-weight);\n  color: var(--#{$prefix}nav-link-color);\n  text-decoration: if($link-decoration == none, null, none);\n  background: none;\n  border: 0;\n  @include transition($nav-link-transition);\n\n  &:hover,\n  &:focus {\n    color: var(--#{$prefix}nav-link-hover-color);\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n\n  &:focus-visible {\n    outline: 0;\n    box-shadow: $nav-link-focus-box-shadow;\n  }\n\n  // Disabled state lightens text\n  &.disabled,\n  &:disabled {\n    color: var(--#{$prefix}nav-link-disabled-color);\n    pointer-events: none;\n    cursor: default;\n  }\n}\n\n//\n// Tabs\n//\n\n.nav-tabs {\n  // scss-docs-start nav-tabs-css-vars\n  --#{$prefix}nav-tabs-border-width: #{$nav-tabs-border-width};\n  --#{$prefix}nav-tabs-border-color: #{$nav-tabs-border-color};\n  --#{$prefix}nav-tabs-border-radius: #{$nav-tabs-border-radius};\n  --#{$prefix}nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};\n  --#{$prefix}nav-tabs-link-active-color: #{$nav-tabs-link-active-color};\n  --#{$prefix}nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};\n  --#{$prefix}nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};\n  // scss-docs-end nav-tabs-css-vars\n\n  border-bottom: var(--#{$prefix}nav-tabs-border-width) solid var(--#{$prefix}nav-tabs-border-color);\n\n  .nav-link {\n    margin-bottom: calc(-1 * var(--#{$prefix}nav-tabs-border-width)); // stylelint-disable-line function-disallowed-list\n    border: var(--#{$prefix}nav-tabs-border-width) solid transparent;\n    @include border-top-radius(var(--#{$prefix}nav-tabs-border-radius));\n\n    &:hover,\n    &:focus {\n      // Prevents active .nav-link tab overlapping focus outline of previous/next .nav-link\n      isolation: isolate;\n      border-color: var(--#{$prefix}nav-tabs-link-hover-border-color);\n    }\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: var(--#{$prefix}nav-tabs-link-active-color);\n    background-color: var(--#{$prefix}nav-tabs-link-active-bg);\n    border-color: var(--#{$prefix}nav-tabs-link-active-border-color);\n  }\n\n  .dropdown-menu {\n    // Make dropdown border overlap tab border\n    margin-top: calc(-1 * var(--#{$prefix}nav-tabs-border-width)); // stylelint-disable-line function-disallowed-list\n    // Remove the top rounded corners here since there is a hard edge above the menu\n    @include border-top-radius(0);\n  }\n}\n\n\n//\n// Pills\n//\n\n.nav-pills {\n  // scss-docs-start nav-pills-css-vars\n  --#{$prefix}nav-pills-border-radius: #{$nav-pills-border-radius};\n  --#{$prefix}nav-pills-link-active-color: #{$nav-pills-link-active-color};\n  --#{$prefix}nav-pills-link-active-bg: #{$nav-pills-link-active-bg};\n  // scss-docs-end nav-pills-css-vars\n\n  .nav-link {\n    @include border-radius(var(--#{$prefix}nav-pills-border-radius));\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    color: var(--#{$prefix}nav-pills-link-active-color);\n    @include gradient-bg(var(--#{$prefix}nav-pills-link-active-bg));\n  }\n}\n\n\n//\n// Underline\n//\n\n.nav-underline {\n  // scss-docs-start nav-underline-css-vars\n  --#{$prefix}nav-underline-gap: #{$nav-underline-gap};\n  --#{$prefix}nav-underline-border-width: #{$nav-underline-border-width};\n  --#{$prefix}nav-underline-link-active-color: #{$nav-underline-link-active-color};\n  // scss-docs-end nav-underline-css-vars\n\n  gap: var(--#{$prefix}nav-underline-gap);\n\n  .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n    border-bottom: var(--#{$prefix}nav-underline-border-width) solid transparent;\n\n    &:hover,\n    &:focus {\n      border-bottom-color: currentcolor;\n    }\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    font-weight: $font-weight-bold;\n    color: var(--#{$prefix}nav-underline-link-active-color);\n    border-bottom-color: currentcolor;\n  }\n}\n\n\n//\n// Justified variants\n//\n\n.nav-fill {\n  > .nav-link,\n  .nav-item {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n\n.nav-justified {\n  > .nav-link,\n  .nav-item {\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  }\n}\n\n.nav-fill,\n.nav-justified {\n  .nav-item .nav-link {\n    width: 100%; // Make sure button will grow\n  }\n}\n\n\n// Tabbable tabs\n//\n// Hide tabbable panes to start, show them when `.active`\n\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n","// Navbar\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  // scss-docs-start navbar-css-vars\n  --#{$prefix}navbar-padding-x: #{if($navbar-padding-x == null, 0, $navbar-padding-x)};\n  --#{$prefix}navbar-padding-y: #{$navbar-padding-y};\n  --#{$prefix}navbar-color: #{$navbar-light-color};\n  --#{$prefix}navbar-hover-color: #{$navbar-light-hover-color};\n  --#{$prefix}navbar-disabled-color: #{$navbar-light-disabled-color};\n  --#{$prefix}navbar-active-color: #{$navbar-light-active-color};\n  --#{$prefix}navbar-brand-padding-y: #{$navbar-brand-padding-y};\n  --#{$prefix}navbar-brand-margin-end: #{$navbar-brand-margin-end};\n  --#{$prefix}navbar-brand-font-size: #{$navbar-brand-font-size};\n  --#{$prefix}navbar-brand-color: #{$navbar-light-brand-color};\n  --#{$prefix}navbar-brand-hover-color: #{$navbar-light-brand-hover-color};\n  --#{$prefix}navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};\n  --#{$prefix}navbar-toggler-padding-y: #{$navbar-toggler-padding-y};\n  --#{$prefix}navbar-toggler-padding-x: #{$navbar-toggler-padding-x};\n  --#{$prefix}navbar-toggler-font-size: #{$navbar-toggler-font-size};\n  --#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};\n  --#{$prefix}navbar-toggler-border-color: #{$navbar-light-toggler-border-color};\n  --#{$prefix}navbar-toggler-border-radius: #{$navbar-toggler-border-radius};\n  --#{$prefix}navbar-toggler-focus-width: #{$navbar-toggler-focus-width};\n  --#{$prefix}navbar-toggler-transition: #{$navbar-toggler-transition};\n  // scss-docs-end navbar-css-vars\n\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // allow us to do the line break for collapsing content\n  align-items: center;\n  justify-content: space-between; // space out brand from logo\n  padding: var(--#{$prefix}navbar-padding-y) var(--#{$prefix}navbar-padding-x);\n  @include gradient-bg();\n\n  // Because flex properties aren't inherited, we need to redeclare these first\n  // few properties so that content nested within behave properly.\n  // The `flex-wrap` property is inherited to simplify the expanded navbars\n  %container-flex-properties {\n    display: flex;\n    flex-wrap: inherit;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  > .container,\n  > .container-fluid {\n    @extend %container-flex-properties;\n  }\n\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {\n      @extend %container-flex-properties;\n    }\n  }\n}\n\n\n// Navbar brand\n//\n// Used for brand, project, or site names.\n\n.navbar-brand {\n  padding-top: var(--#{$prefix}navbar-brand-padding-y);\n  padding-bottom: var(--#{$prefix}navbar-brand-padding-y);\n  margin-right: var(--#{$prefix}navbar-brand-margin-end);\n  @include font-size(var(--#{$prefix}navbar-brand-font-size));\n  color: var(--#{$prefix}navbar-brand-color);\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap;\n\n  &:hover,\n  &:focus {\n    color: var(--#{$prefix}navbar-brand-hover-color);\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n}\n\n\n// Navbar nav\n//\n// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).\n\n.navbar-nav {\n  // scss-docs-start navbar-nav-css-vars\n  --#{$prefix}nav-link-padding-x: 0;\n  --#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};\n  @include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);\n  --#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};\n  --#{$prefix}nav-link-color: var(--#{$prefix}navbar-color);\n  --#{$prefix}nav-link-hover-color: var(--#{$prefix}navbar-hover-color);\n  --#{$prefix}nav-link-disabled-color: var(--#{$prefix}navbar-disabled-color);\n  // scss-docs-end navbar-nav-css-vars\n\n  display: flex;\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n\n  .nav-link {\n    &.active,\n    &.show {\n      color: var(--#{$prefix}navbar-active-color);\n    }\n  }\n\n  .dropdown-menu {\n    position: static;\n  }\n}\n\n\n// Navbar text\n//\n//\n\n.navbar-text {\n  padding-top: $nav-link-padding-y;\n  padding-bottom: $nav-link-padding-y;\n  color: var(--#{$prefix}navbar-color);\n\n  a,\n  a:hover,\n  a:focus  {\n    color: var(--#{$prefix}navbar-active-color);\n  }\n}\n\n\n// Responsive navbar\n//\n// Custom styles for responsive collapsing and toggling of navbar contents.\n// Powered by the collapse Bootstrap JavaScript plugin.\n\n// When collapsed, prevent the toggleable navbar contents from appearing in\n// the default flexbox row orientation. Requires the use of `flex-wrap: wrap`\n// on the `.navbar` parent.\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  // For always expanded or extra full navbars, ensure content aligns itself\n  // properly vertically. Can be easily overridden with flex utilities.\n  align-items: center;\n}\n\n// Button for toggling the navbar when in its collapsed state\n.navbar-toggler {\n  padding: var(--#{$prefix}navbar-toggler-padding-y) var(--#{$prefix}navbar-toggler-padding-x);\n  @include font-size(var(--#{$prefix}navbar-toggler-font-size));\n  line-height: 1;\n  color: var(--#{$prefix}navbar-color);\n  background-color: transparent; // remove default button style\n  border: var(--#{$prefix}border-width) solid var(--#{$prefix}navbar-toggler-border-color); // remove default button style\n  @include border-radius(var(--#{$prefix}navbar-toggler-border-radius));\n  @include transition(var(--#{$prefix}navbar-toggler-transition));\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:focus {\n    text-decoration: none;\n    outline: 0;\n    box-shadow: 0 0 0 var(--#{$prefix}navbar-toggler-focus-width);\n  }\n}\n\n// Keep as a separate element so folks can easily override it with another icon\n// or image file as needed.\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-image: var(--#{$prefix}navbar-toggler-icon-bg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n\n.navbar-nav-scroll {\n  max-height: var(--#{$prefix}scroll-height, 75vh);\n  overflow-y: auto;\n}\n\n// scss-docs-start navbar-expand-loop\n// Generate series of `.navbar-expand-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-expand {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    // stylelint-disable-next-line scss/selector-no-union-class-name\n    &#{$infix} {\n      @include media-breakpoint-up($next) {\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .dropdown-menu {\n            position: absolute;\n          }\n\n          .nav-link {\n            padding-right: var(--#{$prefix}navbar-nav-link-padding-x);\n            padding-left: var(--#{$prefix}navbar-nav-link-padding-x);\n          }\n        }\n\n        .navbar-nav-scroll {\n          overflow: visible;\n        }\n\n        .navbar-collapse {\n          display: flex !important; // stylelint-disable-line declaration-no-important\n          flex-basis: auto;\n        }\n\n        .navbar-toggler {\n          display: none;\n        }\n\n        .offcanvas {\n          // stylelint-disable declaration-no-important\n          position: static;\n          z-index: auto;\n          flex-grow: 1;\n          width: auto !important;\n          height: auto !important;\n          visibility: visible !important;\n          background-color: transparent !important;\n          border: 0 !important;\n          transform: none !important;\n          @include box-shadow(none);\n          @include transition(none);\n          // stylelint-enable declaration-no-important\n\n          .offcanvas-header {\n            display: none;\n          }\n\n          .offcanvas-body {\n            display: flex;\n            flex-grow: 0;\n            padding: 0;\n            overflow-y: visible;\n          }\n        }\n      }\n    }\n  }\n}\n// scss-docs-end navbar-expand-loop\n\n// Navbar themes\n//\n// Styles for switching between navbars with light or dark background.\n\n.navbar-light {\n  @include deprecate(\"`.navbar-light`\", \"v5.2.0\", \"v6.0.0\", true);\n}\n\n.navbar-dark,\n.navbar[data-bs-theme=\"dark\"] {\n  // scss-docs-start navbar-dark-css-vars\n  --#{$prefix}navbar-color: #{$navbar-dark-color};\n  --#{$prefix}navbar-hover-color: #{$navbar-dark-hover-color};\n  --#{$prefix}navbar-disabled-color: #{$navbar-dark-disabled-color};\n  --#{$prefix}navbar-active-color: #{$navbar-dark-active-color};\n  --#{$prefix}navbar-brand-color: #{$navbar-dark-brand-color};\n  --#{$prefix}navbar-brand-hover-color: #{$navbar-dark-brand-hover-color};\n  --#{$prefix}navbar-toggler-border-color: #{$navbar-dark-toggler-border-color};\n  --#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};\n  // scss-docs-end navbar-dark-css-vars\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    .navbar-toggler-icon {\n      --#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.card {\n  // scss-docs-start card-css-vars\n  --#{$prefix}card-spacer-y: #{$card-spacer-y};\n  --#{$prefix}card-spacer-x: #{$card-spacer-x};\n  --#{$prefix}card-title-spacer-y: #{$card-title-spacer-y};\n  --#{$prefix}card-title-color: #{$card-title-color};\n  --#{$prefix}card-subtitle-color: #{$card-subtitle-color};\n  --#{$prefix}card-border-width: #{$card-border-width};\n  --#{$prefix}card-border-color: #{$card-border-color};\n  --#{$prefix}card-border-radius: #{$card-border-radius};\n  --#{$prefix}card-box-shadow: #{$card-box-shadow};\n  --#{$prefix}card-inner-border-radius: #{$card-inner-border-radius};\n  --#{$prefix}card-cap-padding-y: #{$card-cap-padding-y};\n  --#{$prefix}card-cap-padding-x: #{$card-cap-padding-x};\n  --#{$prefix}card-cap-bg: #{$card-cap-bg};\n  --#{$prefix}card-cap-color: #{$card-cap-color};\n  --#{$prefix}card-height: #{$card-height};\n  --#{$prefix}card-color: #{$card-color};\n  --#{$prefix}card-bg: #{$card-bg};\n  --#{$prefix}card-img-overlay-padding: #{$card-img-overlay-padding};\n  --#{$prefix}card-group-margin: #{$card-group-margin};\n  // scss-docs-end card-css-vars\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0; // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106\n  height: var(--#{$prefix}card-height);\n  color: var(--#{$prefix}body-color);\n  word-wrap: break-word;\n  background-color: var(--#{$prefix}card-bg);\n  background-clip: border-box;\n  border: var(--#{$prefix}card-border-width) solid var(--#{$prefix}card-border-color);\n  @include border-radius(var(--#{$prefix}card-border-radius));\n  @include box-shadow(var(--#{$prefix}card-box-shadow));\n\n  > hr {\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  > .list-group {\n    border-top: inherit;\n    border-bottom: inherit;\n\n    &:first-child {\n      border-top-width: 0;\n      @include border-top-radius(var(--#{$prefix}card-inner-border-radius));\n    }\n\n    &:last-child  {\n      border-bottom-width: 0;\n      @include border-bottom-radius(var(--#{$prefix}card-inner-border-radius));\n    }\n  }\n\n  // Due to specificity of the above selector (`.card > .list-group`), we must\n  // use a child selector here to prevent double borders.\n  > .card-header + .list-group,\n  > .list-group + .card-footer {\n    border-top: 0;\n  }\n}\n\n.card-body {\n  // Enable `flex-grow: 1` for decks and groups so that card blocks take up\n  // as much space as possible, ensuring footers are aligned to the bottom.\n  flex: 1 1 auto;\n  padding: var(--#{$prefix}card-spacer-y) var(--#{$prefix}card-spacer-x);\n  color: var(--#{$prefix}card-color);\n}\n\n.card-title {\n  margin-bottom: var(--#{$prefix}card-title-spacer-y);\n  color: var(--#{$prefix}card-title-color);\n}\n\n.card-subtitle {\n  margin-top: calc(-.5 * var(--#{$prefix}card-title-spacer-y)); // stylelint-disable-line function-disallowed-list\n  margin-bottom: 0;\n  color: var(--#{$prefix}card-subtitle-color);\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link {\n  &:hover {\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n\n  + .card-link {\n    margin-left: var(--#{$prefix}card-spacer-x);\n  }\n}\n\n//\n// Optional textual caps\n//\n\n.card-header {\n  padding: var(--#{$prefix}card-cap-padding-y) var(--#{$prefix}card-cap-padding-x);\n  margin-bottom: 0; // Removes the default margin-bottom of <hN>\n  color: var(--#{$prefix}card-cap-color);\n  background-color: var(--#{$prefix}card-cap-bg);\n  border-bottom: var(--#{$prefix}card-border-width) solid var(--#{$prefix}card-border-color);\n\n  &:first-child {\n    @include border-radius(var(--#{$prefix}card-inner-border-radius) var(--#{$prefix}card-inner-border-radius) 0 0);\n  }\n}\n\n.card-footer {\n  padding: var(--#{$prefix}card-cap-padding-y) var(--#{$prefix}card-cap-padding-x);\n  color: var(--#{$prefix}card-cap-color);\n  background-color: var(--#{$prefix}card-cap-bg);\n  border-top: var(--#{$prefix}card-border-width) solid var(--#{$prefix}card-border-color);\n\n  &:last-child {\n    @include border-radius(0 0 var(--#{$prefix}card-inner-border-radius) var(--#{$prefix}card-inner-border-radius));\n  }\n}\n\n\n//\n// Header navs\n//\n\n.card-header-tabs {\n  margin-right: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list\n  margin-bottom: calc(-1 * var(--#{$prefix}card-cap-padding-y)); // stylelint-disable-line function-disallowed-list\n  margin-left: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list\n  border-bottom: 0;\n\n  .nav-link.active {\n    background-color: var(--#{$prefix}card-bg);\n    border-bottom-color: var(--#{$prefix}card-bg);\n  }\n}\n\n.card-header-pills {\n  margin-right: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list\n  margin-left: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list\n}\n\n// Card image\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: var(--#{$prefix}card-img-overlay-padding);\n  @include border-radius(var(--#{$prefix}card-inner-border-radius));\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch\n}\n\n.card-img,\n.card-img-top {\n  @include border-top-radius(var(--#{$prefix}card-inner-border-radius));\n}\n\n.card-img,\n.card-img-bottom {\n  @include border-bottom-radius(var(--#{$prefix}card-inner-border-radius));\n}\n\n\n//\n// Card groups\n//\n\n.card-group {\n  // The child selector allows nested `.card` within `.card-group`\n  // to display properly.\n  > .card {\n    margin-bottom: var(--#{$prefix}card-group-margin);\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    // The child selector allows nested `.card` within `.card-group`\n    // to display properly.\n    > .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-bottom: 0;\n\n      + .card {\n        margin-left: 0;\n        border-left: 0;\n      }\n\n      // Handle rounded corners\n      @if $enable-rounded {\n        &:not(:last-child) {\n          @include border-end-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-right-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-right-radius: 0;\n          }\n        }\n\n        &:not(:first-child) {\n          @include border-start-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-left-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-left-radius: 0;\n          }\n        }\n      }\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.accordion {\n  // scss-docs-start accordion-css-vars\n  --#{$prefix}accordion-color: #{$accordion-color};\n  --#{$prefix}accordion-bg: #{$accordion-bg};\n  --#{$prefix}accordion-transition: #{$accordion-transition};\n  --#{$prefix}accordion-border-color: #{$accordion-border-color};\n  --#{$prefix}accordion-border-width: #{$accordion-border-width};\n  --#{$prefix}accordion-border-radius: #{$accordion-border-radius};\n  --#{$prefix}accordion-inner-border-radius: #{$accordion-inner-border-radius};\n  --#{$prefix}accordion-btn-padding-x: #{$accordion-button-padding-x};\n  --#{$prefix}accordion-btn-padding-y: #{$accordion-button-padding-y};\n  --#{$prefix}accordion-btn-color: #{$accordion-button-color};\n  --#{$prefix}accordion-btn-bg: #{$accordion-button-bg};\n  --#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon)};\n  --#{$prefix}accordion-btn-icon-width: #{$accordion-icon-width};\n  --#{$prefix}accordion-btn-icon-transform: #{$accordion-icon-transform};\n  --#{$prefix}accordion-btn-icon-transition: #{$accordion-icon-transition};\n  --#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};\n  --#{$prefix}accordion-btn-focus-border-color: #{$accordion-button-focus-border-color};\n  --#{$prefix}accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};\n  --#{$prefix}accordion-body-padding-x: #{$accordion-body-padding-x};\n  --#{$prefix}accordion-body-padding-y: #{$accordion-body-padding-y};\n  --#{$prefix}accordion-active-color: #{$accordion-button-active-color};\n  --#{$prefix}accordion-active-bg: #{$accordion-button-active-bg};\n  // scss-docs-end accordion-css-vars\n}\n\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: var(--#{$prefix}accordion-btn-padding-y) var(--#{$prefix}accordion-btn-padding-x);\n  @include font-size($font-size-base);\n  color: var(--#{$prefix}accordion-btn-color);\n  text-align: left; // Reset button style\n  background-color: var(--#{$prefix}accordion-btn-bg);\n  border: 0;\n  @include border-radius(0);\n  overflow-anchor: none;\n  @include transition(var(--#{$prefix}accordion-transition));\n\n  &:not(.collapsed) {\n    color: var(--#{$prefix}accordion-active-color);\n    background-color: var(--#{$prefix}accordion-active-bg);\n    box-shadow: inset 0 calc(-1 * var(--#{$prefix}accordion-border-width)) 0 var(--#{$prefix}accordion-border-color); // stylelint-disable-line function-disallowed-list\n\n    &::after {\n      background-image: var(--#{$prefix}accordion-btn-active-icon);\n      transform: var(--#{$prefix}accordion-btn-icon-transform);\n    }\n  }\n\n  // Accordion icon\n  &::after {\n    flex-shrink: 0;\n    width: var(--#{$prefix}accordion-btn-icon-width);\n    height: var(--#{$prefix}accordion-btn-icon-width);\n    margin-left: auto;\n    content: \"\";\n    background-image: var(--#{$prefix}accordion-btn-icon);\n    background-repeat: no-repeat;\n    background-size: var(--#{$prefix}accordion-btn-icon-width);\n    @include transition(var(--#{$prefix}accordion-btn-icon-transition));\n  }\n\n  &:hover {\n    z-index: 2;\n  }\n\n  &:focus {\n    z-index: 3;\n    border-color: var(--#{$prefix}accordion-btn-focus-border-color);\n    outline: 0;\n    box-shadow: var(--#{$prefix}accordion-btn-focus-box-shadow);\n  }\n}\n\n.accordion-header {\n  margin-bottom: 0;\n}\n\n.accordion-item {\n  color: var(--#{$prefix}accordion-color);\n  background-color: var(--#{$prefix}accordion-bg);\n  border: var(--#{$prefix}accordion-border-width) solid var(--#{$prefix}accordion-border-color);\n\n  &:first-of-type {\n    @include border-top-radius(var(--#{$prefix}accordion-border-radius));\n\n    .accordion-button {\n      @include border-top-radius(var(--#{$prefix}accordion-inner-border-radius));\n    }\n  }\n\n  &:not(:first-of-type) {\n    border-top: 0;\n  }\n\n  // Only set a border-radius on the last item if the accordion is collapsed\n  &:last-of-type {\n    @include border-bottom-radius(var(--#{$prefix}accordion-border-radius));\n\n    .accordion-button {\n      &.collapsed {\n        @include border-bottom-radius(var(--#{$prefix}accordion-inner-border-radius));\n      }\n    }\n\n    .accordion-collapse {\n      @include border-bottom-radius(var(--#{$prefix}accordion-border-radius));\n    }\n  }\n}\n\n.accordion-body {\n  padding: var(--#{$prefix}accordion-body-padding-y) var(--#{$prefix}accordion-body-padding-x);\n}\n\n\n// Flush accordion items\n//\n// Remove borders and border-radius to keep accordion items edge-to-edge.\n\n.accordion-flush {\n  .accordion-collapse {\n    border-width: 0;\n  }\n\n  .accordion-item {\n    border-right: 0;\n    border-left: 0;\n    @include border-radius(0);\n\n    &:first-child { border-top: 0; }\n    &:last-child { border-bottom: 0; }\n\n    .accordion-button {\n      &,\n      &.collapsed {\n        @include border-radius(0);\n      }\n    }\n  }\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    .accordion-button::after {\n      --#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon-dark)};\n      --#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon-dark)};\n    }\n  }\n}\n",".breadcrumb {\n  // scss-docs-start breadcrumb-css-vars\n  --#{$prefix}breadcrumb-padding-x: #{$breadcrumb-padding-x};\n  --#{$prefix}breadcrumb-padding-y: #{$breadcrumb-padding-y};\n  --#{$prefix}breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};\n  @include rfs($breadcrumb-font-size, --#{$prefix}breadcrumb-font-size);\n  --#{$prefix}breadcrumb-bg: #{$breadcrumb-bg};\n  --#{$prefix}breadcrumb-border-radius: #{$breadcrumb-border-radius};\n  --#{$prefix}breadcrumb-divider-color: #{$breadcrumb-divider-color};\n  --#{$prefix}breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};\n  --#{$prefix}breadcrumb-item-active-color: #{$breadcrumb-active-color};\n  // scss-docs-end breadcrumb-css-vars\n\n  display: flex;\n  flex-wrap: wrap;\n  padding: var(--#{$prefix}breadcrumb-padding-y) var(--#{$prefix}breadcrumb-padding-x);\n  margin-bottom: var(--#{$prefix}breadcrumb-margin-bottom);\n  @include font-size(var(--#{$prefix}breadcrumb-font-size));\n  list-style: none;\n  background-color: var(--#{$prefix}breadcrumb-bg);\n  @include border-radius(var(--#{$prefix}breadcrumb-border-radius));\n}\n\n.breadcrumb-item {\n  // The separator between breadcrumbs (by default, a forward-slash: \"/\")\n  + .breadcrumb-item {\n    padding-left: var(--#{$prefix}breadcrumb-item-padding-x);\n\n    &::before {\n      float: left; // Suppress inline spacings and underlining of the separator\n      padding-right: var(--#{$prefix}breadcrumb-item-padding-x);\n      color: var(--#{$prefix}breadcrumb-divider-color);\n      content: var(--#{$prefix}breadcrumb-divider, escape-svg($breadcrumb-divider)) #{\"/* rtl:\"} var(--#{$prefix}breadcrumb-divider, escape-svg($breadcrumb-divider-flipped)) #{\"*/\"};\n    }\n  }\n\n  &.active {\n    color: var(--#{$prefix}breadcrumb-item-active-color);\n  }\n}\n",".pagination {\n  // scss-docs-start pagination-css-vars\n  --#{$prefix}pagination-padding-x: #{$pagination-padding-x};\n  --#{$prefix}pagination-padding-y: #{$pagination-padding-y};\n  @include rfs($pagination-font-size, --#{$prefix}pagination-font-size);\n  --#{$prefix}pagination-color: #{$pagination-color};\n  --#{$prefix}pagination-bg: #{$pagination-bg};\n  --#{$prefix}pagination-border-width: #{$pagination-border-width};\n  --#{$prefix}pagination-border-color: #{$pagination-border-color};\n  --#{$prefix}pagination-border-radius: #{$pagination-border-radius};\n  --#{$prefix}pagination-hover-color: #{$pagination-hover-color};\n  --#{$prefix}pagination-hover-bg: #{$pagination-hover-bg};\n  --#{$prefix}pagination-hover-border-color: #{$pagination-hover-border-color};\n  --#{$prefix}pagination-focus-color: #{$pagination-focus-color};\n  --#{$prefix}pagination-focus-bg: #{$pagination-focus-bg};\n  --#{$prefix}pagination-focus-box-shadow: #{$pagination-focus-box-shadow};\n  --#{$prefix}pagination-active-color: #{$pagination-active-color};\n  --#{$prefix}pagination-active-bg: #{$pagination-active-bg};\n  --#{$prefix}pagination-active-border-color: #{$pagination-active-border-color};\n  --#{$prefix}pagination-disabled-color: #{$pagination-disabled-color};\n  --#{$prefix}pagination-disabled-bg: #{$pagination-disabled-bg};\n  --#{$prefix}pagination-disabled-border-color: #{$pagination-disabled-border-color};\n  // scss-docs-end pagination-css-vars\n\n  display: flex;\n  @include list-unstyled();\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: var(--#{$prefix}pagination-padding-y) var(--#{$prefix}pagination-padding-x);\n  @include font-size(var(--#{$prefix}pagination-font-size));\n  color: var(--#{$prefix}pagination-color);\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: var(--#{$prefix}pagination-bg);\n  border: var(--#{$prefix}pagination-border-width) solid var(--#{$prefix}pagination-border-color);\n  @include transition($pagination-transition);\n\n  &:hover {\n    z-index: 2;\n    color: var(--#{$prefix}pagination-hover-color);\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    background-color: var(--#{$prefix}pagination-hover-bg);\n    border-color: var(--#{$prefix}pagination-hover-border-color);\n  }\n\n  &:focus {\n    z-index: 3;\n    color: var(--#{$prefix}pagination-focus-color);\n    background-color: var(--#{$prefix}pagination-focus-bg);\n    outline: $pagination-focus-outline;\n    box-shadow: var(--#{$prefix}pagination-focus-box-shadow);\n  }\n\n  &.active,\n  .active > & {\n    z-index: 3;\n    color: var(--#{$prefix}pagination-active-color);\n    @include gradient-bg(var(--#{$prefix}pagination-active-bg));\n    border-color: var(--#{$prefix}pagination-active-border-color);\n  }\n\n  &.disabled,\n  .disabled > & {\n    color: var(--#{$prefix}pagination-disabled-color);\n    pointer-events: none;\n    background-color: var(--#{$prefix}pagination-disabled-bg);\n    border-color: var(--#{$prefix}pagination-disabled-border-color);\n  }\n}\n\n.page-item {\n  &:not(:first-child) .page-link {\n    margin-left: $pagination-margin-start;\n  }\n\n  @if $pagination-margin-start == calc(#{$pagination-border-width} * -1) {\n    &:first-child {\n      .page-link {\n        @include border-start-radius(var(--#{$prefix}pagination-border-radius));\n      }\n    }\n\n    &:last-child {\n      .page-link {\n        @include border-end-radius(var(--#{$prefix}pagination-border-radius));\n      }\n    }\n  } @else {\n    // Add border-radius to all pageLinks in case they have left margin\n    .page-link {\n      @include border-radius(var(--#{$prefix}pagination-border-radius));\n    }\n  }\n}\n\n\n//\n// Sizing\n//\n\n.pagination-lg {\n  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, $font-size-lg, $pagination-border-radius-lg);\n}\n\n.pagination-sm {\n  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, $font-size-sm, $pagination-border-radius-sm);\n}\n","// Pagination\n\n// scss-docs-start pagination-mixin\n@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {\n  --#{$prefix}pagination-padding-x: #{$padding-x};\n  --#{$prefix}pagination-padding-y: #{$padding-y};\n  @include rfs($font-size, --#{$prefix}pagination-font-size);\n  --#{$prefix}pagination-border-radius: #{$border-radius};\n}\n// scss-docs-end pagination-mixin\n","// Base class\n//\n// Requires one of the contextual, color modifier classes for `color` and\n// `background-color`.\n\n.badge {\n  // scss-docs-start badge-css-vars\n  --#{$prefix}badge-padding-x: #{$badge-padding-x};\n  --#{$prefix}badge-padding-y: #{$badge-padding-y};\n  @include rfs($badge-font-size, --#{$prefix}badge-font-size);\n  --#{$prefix}badge-font-weight: #{$badge-font-weight};\n  --#{$prefix}badge-color: #{$badge-color};\n  --#{$prefix}badge-border-radius: #{$badge-border-radius};\n  // scss-docs-end badge-css-vars\n\n  display: inline-block;\n  padding: var(--#{$prefix}badge-padding-y) var(--#{$prefix}badge-padding-x);\n  @include font-size(var(--#{$prefix}badge-font-size));\n  font-weight: var(--#{$prefix}badge-font-weight);\n  line-height: 1;\n  color: var(--#{$prefix}badge-color);\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  @include border-radius(var(--#{$prefix}badge-border-radius));\n  @include gradient-bg();\n\n  // Empty badges collapse automatically\n  &:empty {\n    display: none;\n  }\n}\n\n// Quick fix for badges in buttons\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n","//\n// Base styles\n//\n\n.alert {\n  // scss-docs-start alert-css-vars\n  --#{$prefix}alert-bg: transparent;\n  --#{$prefix}alert-padding-x: #{$alert-padding-x};\n  --#{$prefix}alert-padding-y: #{$alert-padding-y};\n  --#{$prefix}alert-margin-bottom: #{$alert-margin-bottom};\n  --#{$prefix}alert-color: inherit;\n  --#{$prefix}alert-border-color: transparent;\n  --#{$prefix}alert-border: #{$alert-border-width} solid var(--#{$prefix}alert-border-color);\n  --#{$prefix}alert-border-radius: #{$alert-border-radius};\n  --#{$prefix}alert-link-color: inherit;\n  // scss-docs-end alert-css-vars\n\n  position: relative;\n  padding: var(--#{$prefix}alert-padding-y) var(--#{$prefix}alert-padding-x);\n  margin-bottom: var(--#{$prefix}alert-margin-bottom);\n  color: var(--#{$prefix}alert-color);\n  background-color: var(--#{$prefix}alert-bg);\n  border: var(--#{$prefix}alert-border);\n  @include border-radius(var(--#{$prefix}alert-border-radius));\n}\n\n// Headings for larger alerts\n.alert-heading {\n  // Specified to prevent conflicts of changing $headings-color\n  color: inherit;\n}\n\n// Provide class for links that match alerts\n.alert-link {\n  font-weight: $alert-link-font-weight;\n  color: var(--#{$prefix}alert-link-color);\n}\n\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissible {\n  padding-right: $alert-dismissible-padding-r;\n\n  // Adjust close link position\n  .btn-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: $stretched-link-z-index + 1;\n    padding: $alert-padding-y * 1.25 $alert-padding-x;\n  }\n}\n\n\n// scss-docs-start alert-modifiers\n// Generate contextual modifier classes for colorizing the alert\n@each $state in map-keys($theme-colors) {\n  .alert-#{$state} {\n    --#{$prefix}alert-color: var(--#{$prefix}#{$state}-text-emphasis);\n    --#{$prefix}alert-bg: var(--#{$prefix}#{$state}-bg-subtle);\n    --#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);\n    --#{$prefix}alert-link-color: var(--#{$prefix}#{$state}-text-emphasis);\n  }\n}\n// scss-docs-end alert-modifiers\n","// Disable animation if transitions are disabled\n\n// scss-docs-start progress-keyframes\n@if $enable-transitions {\n  @keyframes progress-bar-stripes {\n    0% { background-position-x: $progress-height; }\n  }\n}\n// scss-docs-end progress-keyframes\n\n.progress,\n.progress-stacked {\n  // scss-docs-start progress-css-vars\n  --#{$prefix}progress-height: #{$progress-height};\n  @include rfs($progress-font-size, --#{$prefix}progress-font-size);\n  --#{$prefix}progress-bg: #{$progress-bg};\n  --#{$prefix}progress-border-radius: #{$progress-border-radius};\n  --#{$prefix}progress-box-shadow: #{$progress-box-shadow};\n  --#{$prefix}progress-bar-color: #{$progress-bar-color};\n  --#{$prefix}progress-bar-bg: #{$progress-bar-bg};\n  --#{$prefix}progress-bar-transition: #{$progress-bar-transition};\n  // scss-docs-end progress-css-vars\n\n  display: flex;\n  height: var(--#{$prefix}progress-height);\n  overflow: hidden; // force rounded corners by cropping it\n  @include font-size(var(--#{$prefix}progress-font-size));\n  background-color: var(--#{$prefix}progress-bg);\n  @include border-radius(var(--#{$prefix}progress-border-radius));\n  @include box-shadow(var(--#{$prefix}progress-box-shadow));\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: var(--#{$prefix}progress-bar-color);\n  text-align: center;\n  white-space: nowrap;\n  background-color: var(--#{$prefix}progress-bar-bg);\n  @include transition(var(--#{$prefix}progress-bar-transition));\n}\n\n.progress-bar-striped {\n  @include gradient-striped();\n  background-size: var(--#{$prefix}progress-height) var(--#{$prefix}progress-height);\n}\n\n.progress-stacked > .progress {\n  overflow: visible;\n}\n\n.progress-stacked > .progress > .progress-bar {\n  width: 100%;\n}\n\n@if $enable-transitions {\n  .progress-bar-animated {\n    animation: $progress-bar-animation-timing progress-bar-stripes;\n\n    @if $enable-reduced-motion {\n      @media (prefers-reduced-motion: reduce) {\n        animation: none;\n      }\n    }\n  }\n}\n","// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  // scss-docs-start list-group-css-vars\n  --#{$prefix}list-group-color: #{$list-group-color};\n  --#{$prefix}list-group-bg: #{$list-group-bg};\n  --#{$prefix}list-group-border-color: #{$list-group-border-color};\n  --#{$prefix}list-group-border-width: #{$list-group-border-width};\n  --#{$prefix}list-group-border-radius: #{$list-group-border-radius};\n  --#{$prefix}list-group-item-padding-x: #{$list-group-item-padding-x};\n  --#{$prefix}list-group-item-padding-y: #{$list-group-item-padding-y};\n  --#{$prefix}list-group-action-color: #{$list-group-action-color};\n  --#{$prefix}list-group-action-hover-color: #{$list-group-action-hover-color};\n  --#{$prefix}list-group-action-hover-bg: #{$list-group-hover-bg};\n  --#{$prefix}list-group-action-active-color: #{$list-group-action-active-color};\n  --#{$prefix}list-group-action-active-bg: #{$list-group-action-active-bg};\n  --#{$prefix}list-group-disabled-color: #{$list-group-disabled-color};\n  --#{$prefix}list-group-disabled-bg: #{$list-group-disabled-bg};\n  --#{$prefix}list-group-active-color: #{$list-group-active-color};\n  --#{$prefix}list-group-active-bg: #{$list-group-active-bg};\n  --#{$prefix}list-group-active-border-color: #{$list-group-active-border-color};\n  // scss-docs-end list-group-css-vars\n\n  display: flex;\n  flex-direction: column;\n\n  // No need to set list-style: none; since .list-group-item is block level\n  padding-left: 0; // reset padding because ul and ol\n  margin-bottom: 0;\n  @include border-radius(var(--#{$prefix}list-group-border-radius));\n}\n\n.list-group-numbered {\n  list-style-type: none;\n  counter-reset: section;\n\n  > .list-group-item::before {\n    // Increments only this instance of the section counter\n    content: counters(section, \".\") \". \";\n    counter-increment: section;\n  }\n}\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive\n// list items. Includes an extra `.active` modifier class for selected items.\n\n.list-group-item-action {\n  width: 100%; // For `<button>`s (anchors become 100% by default though)\n  color: var(--#{$prefix}list-group-action-color);\n  text-align: inherit; // For `<button>`s (anchors inherit)\n\n  // Hover state\n  &:hover,\n  &:focus {\n    z-index: 1; // Place hover/focus items above their siblings for proper border styling\n    color: var(--#{$prefix}list-group-action-hover-color);\n    text-decoration: none;\n    background-color: var(--#{$prefix}list-group-action-hover-bg);\n  }\n\n  &:active {\n    color: var(--#{$prefix}list-group-action-active-color);\n    background-color: var(--#{$prefix}list-group-action-active-bg);\n  }\n}\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: var(--#{$prefix}list-group-item-padding-y) var(--#{$prefix}list-group-item-padding-x);\n  color: var(--#{$prefix}list-group-color);\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: var(--#{$prefix}list-group-bg);\n  border: var(--#{$prefix}list-group-border-width) solid var(--#{$prefix}list-group-border-color);\n\n  &:first-child {\n    @include border-top-radius(inherit);\n  }\n\n  &:last-child {\n    @include border-bottom-radius(inherit);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: var(--#{$prefix}list-group-disabled-color);\n    pointer-events: none;\n    background-color: var(--#{$prefix}list-group-disabled-bg);\n  }\n\n  // Include both here for `<a>`s and `<button>`s\n  &.active {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: var(--#{$prefix}list-group-active-color);\n    background-color: var(--#{$prefix}list-group-active-bg);\n    border-color: var(--#{$prefix}list-group-active-border-color);\n  }\n\n  // stylelint-disable-next-line scss/selector-no-redundant-nesting-selector\n  & + .list-group-item {\n    border-top-width: 0;\n\n    &.active {\n      margin-top: calc(-1 * var(--#{$prefix}list-group-border-width)); // stylelint-disable-line function-disallowed-list\n      border-top-width: var(--#{$prefix}list-group-border-width);\n    }\n  }\n}\n\n// Horizontal\n//\n// Change the layout of list group items from vertical (default) to horizontal.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .list-group-horizontal#{$infix} {\n      flex-direction: row;\n\n      > .list-group-item {\n        &:first-child:not(:last-child) {\n          @include border-bottom-start-radius(var(--#{$prefix}list-group-border-radius));\n          @include border-top-end-radius(0);\n        }\n\n        &:last-child:not(:first-child) {\n          @include border-top-end-radius(var(--#{$prefix}list-group-border-radius));\n          @include border-bottom-start-radius(0);\n        }\n\n        &.active {\n          margin-top: 0;\n        }\n\n        + .list-group-item {\n          border-top-width: var(--#{$prefix}list-group-border-width);\n          border-left-width: 0;\n\n          &.active {\n            margin-left: calc(-1 * var(--#{$prefix}list-group-border-width)); // stylelint-disable-line function-disallowed-list\n            border-left-width: var(--#{$prefix}list-group-border-width);\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Flush list items\n//\n// Remove borders and border-radius to keep list group items edge-to-edge. Most\n// useful within other components (e.g., cards).\n\n.list-group-flush {\n  @include border-radius(0);\n\n  > .list-group-item {\n    border-width: 0 0 var(--#{$prefix}list-group-border-width);\n\n    &:last-child {\n      border-bottom-width: 0;\n    }\n  }\n}\n\n\n// scss-docs-start list-group-modifiers\n// List group contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@each $state in map-keys($theme-colors) {\n  .list-group-item-#{$state} {\n    --#{$prefix}list-group-color: var(--#{$prefix}#{$state}-text-emphasis);\n    --#{$prefix}list-group-bg: var(--#{$prefix}#{$state}-bg-subtle);\n    --#{$prefix}list-group-border-color: var(--#{$prefix}#{$state}-border-subtle);\n    --#{$prefix}list-group-action-hover-color: var(--#{$prefix}emphasis-color);\n    --#{$prefix}list-group-action-hover-bg: var(--#{$prefix}#{$state}-border-subtle);\n    --#{$prefix}list-group-action-active-color: var(--#{$prefix}emphasis-color);\n    --#{$prefix}list-group-action-active-bg: var(--#{$prefix}#{$state}-border-subtle);\n    --#{$prefix}list-group-active-color: var(--#{$prefix}#{$state}-bg-subtle);\n    --#{$prefix}list-group-active-bg: var(--#{$prefix}#{$state}-text-emphasis);\n    --#{$prefix}list-group-active-border-color: var(--#{$prefix}#{$state}-text-emphasis);\n  }\n}\n// scss-docs-end list-group-modifiers\n","// Transparent background and border properties included for button version.\n// iOS requires the button element instead of an anchor tag.\n// If you want the anchor version, it requires `href=\"#\"`.\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n.btn-close {\n  // scss-docs-start close-css-vars\n  --#{$prefix}btn-close-color: #{$btn-close-color};\n  --#{$prefix}btn-close-bg: #{ escape-svg($btn-close-bg) };\n  --#{$prefix}btn-close-opacity: #{$btn-close-opacity};\n  --#{$prefix}btn-close-hover-opacity: #{$btn-close-hover-opacity};\n  --#{$prefix}btn-close-focus-shadow: #{$btn-close-focus-shadow};\n  --#{$prefix}btn-close-focus-opacity: #{$btn-close-focus-opacity};\n  --#{$prefix}btn-close-disabled-opacity: #{$btn-close-disabled-opacity};\n  --#{$prefix}btn-close-white-filter: #{$btn-close-white-filter};\n  // scss-docs-end close-css-vars\n\n  box-sizing: content-box;\n  width: $btn-close-width;\n  height: $btn-close-height;\n  padding: $btn-close-padding-y $btn-close-padding-x;\n  color: var(--#{$prefix}btn-close-color);\n  background: transparent var(--#{$prefix}btn-close-bg) center / $btn-close-width auto no-repeat; // include transparent for button elements\n  border: 0; // for button elements\n  @include border-radius();\n  opacity: var(--#{$prefix}btn-close-opacity);\n\n  // Override <a>'s hover style\n  &:hover {\n    color: var(--#{$prefix}btn-close-color);\n    text-decoration: none;\n    opacity: var(--#{$prefix}btn-close-hover-opacity);\n  }\n\n  &:focus {\n    outline: 0;\n    box-shadow: var(--#{$prefix}btn-close-focus-shadow);\n    opacity: var(--#{$prefix}btn-close-focus-opacity);\n  }\n\n  &:disabled,\n  &.disabled {\n    pointer-events: none;\n    user-select: none;\n    opacity: var(--#{$prefix}btn-close-disabled-opacity);\n  }\n}\n\n@mixin btn-close-white() {\n  filter: var(--#{$prefix}btn-close-white-filter);\n}\n\n.btn-close-white {\n  @include btn-close-white();\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    .btn-close {\n      @include btn-close-white();\n    }\n  }\n}\n",".toast {\n  // scss-docs-start toast-css-vars\n  --#{$prefix}toast-zindex: #{$zindex-toast};\n  --#{$prefix}toast-padding-x: #{$toast-padding-x};\n  --#{$prefix}toast-padding-y: #{$toast-padding-y};\n  --#{$prefix}toast-spacing: #{$toast-spacing};\n  --#{$prefix}toast-max-width: #{$toast-max-width};\n  @include rfs($toast-font-size, --#{$prefix}toast-font-size);\n  --#{$prefix}toast-color: #{$toast-color};\n  --#{$prefix}toast-bg: #{$toast-background-color};\n  --#{$prefix}toast-border-width: #{$toast-border-width};\n  --#{$prefix}toast-border-color: #{$toast-border-color};\n  --#{$prefix}toast-border-radius: #{$toast-border-radius};\n  --#{$prefix}toast-box-shadow: #{$toast-box-shadow};\n  --#{$prefix}toast-header-color: #{$toast-header-color};\n  --#{$prefix}toast-header-bg: #{$toast-header-background-color};\n  --#{$prefix}toast-header-border-color: #{$toast-header-border-color};\n  // scss-docs-end toast-css-vars\n\n  width: var(--#{$prefix}toast-max-width);\n  max-width: 100%;\n  @include font-size(var(--#{$prefix}toast-font-size));\n  color: var(--#{$prefix}toast-color);\n  pointer-events: auto;\n  background-color: var(--#{$prefix}toast-bg);\n  background-clip: padding-box;\n  border: var(--#{$prefix}toast-border-width) solid var(--#{$prefix}toast-border-color);\n  box-shadow: var(--#{$prefix}toast-box-shadow);\n  @include border-radius(var(--#{$prefix}toast-border-radius));\n\n  &.showing {\n    opacity: 0;\n  }\n\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.toast-container {\n  --#{$prefix}toast-zindex: #{$zindex-toast};\n\n  position: absolute;\n  z-index: var(--#{$prefix}toast-zindex);\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n\n  > :not(:last-child) {\n    margin-bottom: var(--#{$prefix}toast-spacing);\n  }\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: var(--#{$prefix}toast-padding-y) var(--#{$prefix}toast-padding-x);\n  color: var(--#{$prefix}toast-header-color);\n  background-color: var(--#{$prefix}toast-header-bg);\n  background-clip: padding-box;\n  border-bottom: var(--#{$prefix}toast-border-width) solid var(--#{$prefix}toast-header-border-color);\n  @include border-top-radius(calc(var(--#{$prefix}toast-border-radius) - var(--#{$prefix}toast-border-width)));\n\n  .btn-close {\n    margin-right: calc(-.5 * var(--#{$prefix}toast-padding-x)); // stylelint-disable-line function-disallowed-list\n    margin-left: var(--#{$prefix}toast-padding-x);\n  }\n}\n\n.toast-body {\n  padding: var(--#{$prefix}toast-padding-x);\n  word-wrap: break-word;\n}\n","// stylelint-disable function-disallowed-list\n\n// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and stuff\n\n\n// Container that the modal scrolls within\n.modal {\n  // scss-docs-start modal-css-vars\n  --#{$prefix}modal-zindex: #{$zindex-modal};\n  --#{$prefix}modal-width: #{$modal-md};\n  --#{$prefix}modal-padding: #{$modal-inner-padding};\n  --#{$prefix}modal-margin: #{$modal-dialog-margin};\n  --#{$prefix}modal-color: #{$modal-content-color};\n  --#{$prefix}modal-bg: #{$modal-content-bg};\n  --#{$prefix}modal-border-color: #{$modal-content-border-color};\n  --#{$prefix}modal-border-width: #{$modal-content-border-width};\n  --#{$prefix}modal-border-radius: #{$modal-content-border-radius};\n  --#{$prefix}modal-box-shadow: #{$modal-content-box-shadow-xs};\n  --#{$prefix}modal-inner-border-radius: #{$modal-content-inner-border-radius};\n  --#{$prefix}modal-header-padding-x: #{$modal-header-padding-x};\n  --#{$prefix}modal-header-padding-y: #{$modal-header-padding-y};\n  --#{$prefix}modal-header-padding: #{$modal-header-padding}; // Todo in v6: Split this padding into x and y\n  --#{$prefix}modal-header-border-color: #{$modal-header-border-color};\n  --#{$prefix}modal-header-border-width: #{$modal-header-border-width};\n  --#{$prefix}modal-title-line-height: #{$modal-title-line-height};\n  --#{$prefix}modal-footer-gap: #{$modal-footer-margin-between};\n  --#{$prefix}modal-footer-bg: #{$modal-footer-bg};\n  --#{$prefix}modal-footer-border-color: #{$modal-footer-border-color};\n  --#{$prefix}modal-footer-border-width: #{$modal-footer-border-width};\n  // scss-docs-end modal-css-vars\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--#{$prefix}modal-zindex);\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n  // We deliberately don't use `-webkit-overflow-scrolling: touch;` due to a\n  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342\n  // See also https://github.com/twbs/bootstrap/issues/17695\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: var(--#{$prefix}modal-margin);\n  // allow clicks to pass through for custom click handling to close modal\n  pointer-events: none;\n\n  // When fading in the modal, animate it to slide down\n  .modal.fade & {\n    @include transition($modal-transition);\n    transform: $modal-fade-transform;\n  }\n  .modal.show & {\n    transform: $modal-show-transform;\n  }\n\n  // When trying to close, animate focus to scale\n  .modal.modal-static & {\n    transform: $modal-scale-transform;\n  }\n}\n\n.modal-dialog-scrollable {\n  height: calc(100% - var(--#{$prefix}modal-margin) * 2);\n\n  .modal-content {\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n  .modal-body {\n    overflow-y: auto;\n  }\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - var(--#{$prefix}modal-margin) * 2);\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%; // Ensure `.modal-content` extends the full width of the parent `.modal-dialog`\n  // counteract the pointer-events: none; in the .modal-dialog\n  color: var(--#{$prefix}modal-color);\n  pointer-events: auto;\n  background-color: var(--#{$prefix}modal-bg);\n  background-clip: padding-box;\n  border: var(--#{$prefix}modal-border-width) solid var(--#{$prefix}modal-border-color);\n  @include border-radius(var(--#{$prefix}modal-border-radius));\n  @include box-shadow(var(--#{$prefix}modal-box-shadow));\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  // scss-docs-start modal-backdrop-css-vars\n  --#{$prefix}backdrop-zindex: #{$zindex-modal-backdrop};\n  --#{$prefix}backdrop-bg: #{$modal-backdrop-bg};\n  --#{$prefix}backdrop-opacity: #{$modal-backdrop-opacity};\n  // scss-docs-end modal-backdrop-css-vars\n\n  @include overlay-backdrop(var(--#{$prefix}backdrop-zindex), var(--#{$prefix}backdrop-bg), var(--#{$prefix}backdrop-opacity));\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends\n  padding: var(--#{$prefix}modal-header-padding);\n  border-bottom: var(--#{$prefix}modal-header-border-width) solid var(--#{$prefix}modal-header-border-color);\n  @include border-top-radius(var(--#{$prefix}modal-inner-border-radius));\n\n  .btn-close {\n    padding: calc(var(--#{$prefix}modal-header-padding-y) * .5) calc(var(--#{$prefix}modal-header-padding-x) * .5);\n    margin: calc(-.5 * var(--#{$prefix}modal-header-padding-y)) calc(-.5 * var(--#{$prefix}modal-header-padding-x)) calc(-.5 * var(--#{$prefix}modal-header-padding-y)) auto;\n  }\n}\n\n// Title text within header\n.modal-title {\n  margin-bottom: 0;\n  line-height: var(--#{$prefix}modal-title-line-height);\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  // Enable `flex-grow: 1` so that the body take up as much space as possible\n  // when there should be a fixed height on `.modal-dialog`.\n  flex: 1 1 auto;\n  padding: var(--#{$prefix}modal-padding);\n}\n\n// Footer (for actions)\n.modal-footer {\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center; // vertically center\n  justify-content: flex-end; // Right align buttons with flex property because text-align doesn't work on flex items\n  padding: calc(var(--#{$prefix}modal-padding) - var(--#{$prefix}modal-footer-gap) * .5);\n  background-color: var(--#{$prefix}modal-footer-bg);\n  border-top: var(--#{$prefix}modal-footer-border-width) solid var(--#{$prefix}modal-footer-border-color);\n  @include border-bottom-radius(var(--#{$prefix}modal-inner-border-radius));\n\n  // Place margin between footer elements\n  // This solution is far from ideal because of the universal selector usage,\n  // but is needed to fix https://github.com/twbs/bootstrap/issues/24800\n  > * {\n    margin: calc(var(--#{$prefix}modal-footer-gap) * .5); // Todo in v6: replace with gap on parent class\n  }\n}\n\n// Scale up the modal\n@include media-breakpoint-up(sm) {\n  .modal {\n    --#{$prefix}modal-margin: #{$modal-dialog-margin-y-sm-up};\n    --#{$prefix}modal-box-shadow: #{$modal-content-box-shadow-sm-up};\n  }\n\n  // Automatically set modal's width for larger viewports\n  .modal-dialog {\n    max-width: var(--#{$prefix}modal-width);\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .modal-sm {\n    --#{$prefix}modal-width: #{$modal-sm};\n  }\n}\n\n@include media-breakpoint-up(lg) {\n  .modal-lg,\n  .modal-xl {\n    --#{$prefix}modal-width: #{$modal-lg};\n  }\n}\n\n@include media-breakpoint-up(xl) {\n  .modal-xl {\n    --#{$prefix}modal-width: #{$modal-xl};\n  }\n}\n\n// scss-docs-start modal-fullscreen-loop\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n  $postfix: if($infix != \"\", $infix + \"-down\", \"\");\n\n  @include media-breakpoint-down($breakpoint) {\n    .modal-fullscreen#{$postfix} {\n      width: 100vw;\n      max-width: none;\n      height: 100%;\n      margin: 0;\n\n      .modal-content {\n        height: 100%;\n        border: 0;\n        @include border-radius(0);\n      }\n\n      .modal-header,\n      .modal-footer {\n        @include border-radius(0);\n      }\n\n      .modal-body {\n        overflow-y: auto;\n      }\n    }\n  }\n}\n// scss-docs-end modal-fullscreen-loop\n","// Shared between modals and offcanvases\n@mixin overlay-backdrop($zindex, $backdrop-bg, $backdrop-opacity) {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex;\n  width: 100vw;\n  height: 100vh;\n  background-color: $backdrop-bg;\n\n  // Fade for backdrop\n  &.fade { opacity: 0; }\n  &.show { opacity: $backdrop-opacity; }\n}\n","// Base class\n.tooltip {\n  // scss-docs-start tooltip-css-vars\n  --#{$prefix}tooltip-zindex: #{$zindex-tooltip};\n  --#{$prefix}tooltip-max-width: #{$tooltip-max-width};\n  --#{$prefix}tooltip-padding-x: #{$tooltip-padding-x};\n  --#{$prefix}tooltip-padding-y: #{$tooltip-padding-y};\n  --#{$prefix}tooltip-margin: #{$tooltip-margin};\n  @include rfs($tooltip-font-size, --#{$prefix}tooltip-font-size);\n  --#{$prefix}tooltip-color: #{$tooltip-color};\n  --#{$prefix}tooltip-bg: #{$tooltip-bg};\n  --#{$prefix}tooltip-border-radius: #{$tooltip-border-radius};\n  --#{$prefix}tooltip-opacity: #{$tooltip-opacity};\n  --#{$prefix}tooltip-arrow-width: #{$tooltip-arrow-width};\n  --#{$prefix}tooltip-arrow-height: #{$tooltip-arrow-height};\n  // scss-docs-end tooltip-css-vars\n\n  z-index: var(--#{$prefix}tooltip-zindex);\n  display: block;\n  margin: var(--#{$prefix}tooltip-margin);\n  @include deprecate(\"`$tooltip-margin`\", \"v5\", \"v5.x\", true);\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size(var(--#{$prefix}tooltip-font-size));\n  // Allow breaking very long words so they don't overflow the tooltip's bounds\n  word-wrap: break-word;\n  opacity: 0;\n\n  &.show { opacity: var(--#{$prefix}tooltip-opacity); }\n\n  .tooltip-arrow {\n    display: block;\n    width: var(--#{$prefix}tooltip-arrow-width);\n    height: var(--#{$prefix}tooltip-arrow-height);\n\n    &::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-tooltip-top .tooltip-arrow {\n  bottom: calc(-1 * var(--#{$prefix}tooltip-arrow-height)); // stylelint-disable-line function-disallowed-list\n\n  &::before {\n    top: -1px;\n    border-width: var(--#{$prefix}tooltip-arrow-height) calc(var(--#{$prefix}tooltip-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list\n    border-top-color: var(--#{$prefix}tooltip-bg);\n  }\n}\n\n/* rtl:begin:ignore */\n.bs-tooltip-end .tooltip-arrow {\n  left: calc(-1 * var(--#{$prefix}tooltip-arrow-height)); // stylelint-disable-line function-disallowed-list\n  width: var(--#{$prefix}tooltip-arrow-height);\n  height: var(--#{$prefix}tooltip-arrow-width);\n\n  &::before {\n    right: -1px;\n    border-width: calc(var(--#{$prefix}tooltip-arrow-width) * .5) var(--#{$prefix}tooltip-arrow-height) calc(var(--#{$prefix}tooltip-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list\n    border-right-color: var(--#{$prefix}tooltip-bg);\n  }\n}\n\n/* rtl:end:ignore */\n\n.bs-tooltip-bottom .tooltip-arrow {\n  top: calc(-1 * var(--#{$prefix}tooltip-arrow-height)); // stylelint-disable-line function-disallowed-list\n\n  &::before {\n    bottom: -1px;\n    border-width: 0 calc(var(--#{$prefix}tooltip-arrow-width) * .5) var(--#{$prefix}tooltip-arrow-height); // stylelint-disable-line function-disallowed-list\n    border-bottom-color: var(--#{$prefix}tooltip-bg);\n  }\n}\n\n/* rtl:begin:ignore */\n.bs-tooltip-start .tooltip-arrow {\n  right: calc(-1 * var(--#{$prefix}tooltip-arrow-height)); // stylelint-disable-line function-disallowed-list\n  width: var(--#{$prefix}tooltip-arrow-height);\n  height: var(--#{$prefix}tooltip-arrow-width);\n\n  &::before {\n    left: -1px;\n    border-width: calc(var(--#{$prefix}tooltip-arrow-width) * .5) 0 calc(var(--#{$prefix}tooltip-arrow-width) * .5) var(--#{$prefix}tooltip-arrow-height); // stylelint-disable-line function-disallowed-list\n    border-left-color: var(--#{$prefix}tooltip-bg);\n  }\n}\n\n/* rtl:end:ignore */\n\n.bs-tooltip-auto {\n  &[data-popper-placement^=\"top\"] {\n    @extend .bs-tooltip-top;\n  }\n  &[data-popper-placement^=\"right\"] {\n    @extend .bs-tooltip-end;\n  }\n  &[data-popper-placement^=\"bottom\"] {\n    @extend .bs-tooltip-bottom;\n  }\n  &[data-popper-placement^=\"left\"] {\n    @extend .bs-tooltip-start;\n  }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: var(--#{$prefix}tooltip-max-width);\n  padding: var(--#{$prefix}tooltip-padding-y) var(--#{$prefix}tooltip-padding-x);\n  color: var(--#{$prefix}tooltip-color);\n  text-align: center;\n  background-color: var(--#{$prefix}tooltip-bg);\n  @include border-radius(var(--#{$prefix}tooltip-border-radius));\n}\n","@mixin reset-text {\n  font-family: $font-family-base;\n  // We deliberately do NOT reset font-size or overflow-wrap / word-wrap.\n  font-style: normal;\n  font-weight: $font-weight-normal;\n  line-height: $line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n}\n",".popover {\n  // scss-docs-start popover-css-vars\n  --#{$prefix}popover-zindex: #{$zindex-popover};\n  --#{$prefix}popover-max-width: #{$popover-max-width};\n  @include rfs($popover-font-size, --#{$prefix}popover-font-size);\n  --#{$prefix}popover-bg: #{$popover-bg};\n  --#{$prefix}popover-border-width: #{$popover-border-width};\n  --#{$prefix}popover-border-color: #{$popover-border-color};\n  --#{$prefix}popover-border-radius: #{$popover-border-radius};\n  --#{$prefix}popover-inner-border-radius: #{$popover-inner-border-radius};\n  --#{$prefix}popover-box-shadow: #{$popover-box-shadow};\n  --#{$prefix}popover-header-padding-x: #{$popover-header-padding-x};\n  --#{$prefix}popover-header-padding-y: #{$popover-header-padding-y};\n  @include rfs($popover-header-font-size, --#{$prefix}popover-header-font-size);\n  --#{$prefix}popover-header-color: #{$popover-header-color};\n  --#{$prefix}popover-header-bg: #{$popover-header-bg};\n  --#{$prefix}popover-body-padding-x: #{$popover-body-padding-x};\n  --#{$prefix}popover-body-padding-y: #{$popover-body-padding-y};\n  --#{$prefix}popover-body-color: #{$popover-body-color};\n  --#{$prefix}popover-arrow-width: #{$popover-arrow-width};\n  --#{$prefix}popover-arrow-height: #{$popover-arrow-height};\n  --#{$prefix}popover-arrow-border: var(--#{$prefix}popover-border-color);\n  // scss-docs-end popover-css-vars\n\n  z-index: var(--#{$prefix}popover-zindex);\n  display: block;\n  max-width: var(--#{$prefix}popover-max-width);\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size(var(--#{$prefix}popover-font-size));\n  // Allow breaking very long words so they don't overflow the popover's bounds\n  word-wrap: break-word;\n  background-color: var(--#{$prefix}popover-bg);\n  background-clip: padding-box;\n  border: var(--#{$prefix}popover-border-width) solid var(--#{$prefix}popover-border-color);\n  @include border-radius(var(--#{$prefix}popover-border-radius));\n  @include box-shadow(var(--#{$prefix}popover-box-shadow));\n\n  .popover-arrow {\n    display: block;\n    width: var(--#{$prefix}popover-arrow-width);\n    height: var(--#{$prefix}popover-arrow-height);\n\n    &::before,\n    &::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0;\n    }\n  }\n}\n\n.bs-popover-top {\n  > .popover-arrow {\n    bottom: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list\n\n    &::before,\n    &::after {\n      border-width: var(--#{$prefix}popover-arrow-height) calc(var(--#{$prefix}popover-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list\n    }\n\n    &::before {\n      bottom: 0;\n      border-top-color: var(--#{$prefix}popover-arrow-border);\n    }\n\n    &::after {\n      bottom: var(--#{$prefix}popover-border-width);\n      border-top-color: var(--#{$prefix}popover-bg);\n    }\n  }\n}\n\n/* rtl:begin:ignore */\n.bs-popover-end {\n  > .popover-arrow {\n    left: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list\n    width: var(--#{$prefix}popover-arrow-height);\n    height: var(--#{$prefix}popover-arrow-width);\n\n    &::before,\n    &::after {\n      border-width: calc(var(--#{$prefix}popover-arrow-width) * .5) var(--#{$prefix}popover-arrow-height) calc(var(--#{$prefix}popover-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list\n    }\n\n    &::before {\n      left: 0;\n      border-right-color: var(--#{$prefix}popover-arrow-border);\n    }\n\n    &::after {\n      left: var(--#{$prefix}popover-border-width);\n      border-right-color: var(--#{$prefix}popover-bg);\n    }\n  }\n}\n\n/* rtl:end:ignore */\n\n.bs-popover-bottom {\n  > .popover-arrow {\n    top: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list\n\n    &::before,\n    &::after {\n      border-width: 0 calc(var(--#{$prefix}popover-arrow-width) * .5) var(--#{$prefix}popover-arrow-height); // stylelint-disable-line function-disallowed-list\n    }\n\n    &::before {\n      top: 0;\n      border-bottom-color: var(--#{$prefix}popover-arrow-border);\n    }\n\n    &::after {\n      top: var(--#{$prefix}popover-border-width);\n      border-bottom-color: var(--#{$prefix}popover-bg);\n    }\n  }\n\n  // This will remove the popover-header's border just below the arrow\n  .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: var(--#{$prefix}popover-arrow-width);\n    margin-left: calc(-.5 * var(--#{$prefix}popover-arrow-width)); // stylelint-disable-line function-disallowed-list\n    content: \"\";\n    border-bottom: var(--#{$prefix}popover-border-width) solid var(--#{$prefix}popover-header-bg);\n  }\n}\n\n/* rtl:begin:ignore */\n.bs-popover-start {\n  > .popover-arrow {\n    right: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list\n    width: var(--#{$prefix}popover-arrow-height);\n    height: var(--#{$prefix}popover-arrow-width);\n\n    &::before,\n    &::after {\n      border-width: calc(var(--#{$prefix}popover-arrow-width) * .5) 0 calc(var(--#{$prefix}popover-arrow-width) * .5) var(--#{$prefix}popover-arrow-height); // stylelint-disable-line function-disallowed-list\n    }\n\n    &::before {\n      right: 0;\n      border-left-color: var(--#{$prefix}popover-arrow-border);\n    }\n\n    &::after {\n      right: var(--#{$prefix}popover-border-width);\n      border-left-color: var(--#{$prefix}popover-bg);\n    }\n  }\n}\n\n/* rtl:end:ignore */\n\n.bs-popover-auto {\n  &[data-popper-placement^=\"top\"] {\n    @extend .bs-popover-top;\n  }\n  &[data-popper-placement^=\"right\"] {\n    @extend .bs-popover-end;\n  }\n  &[data-popper-placement^=\"bottom\"] {\n    @extend .bs-popover-bottom;\n  }\n  &[data-popper-placement^=\"left\"] {\n    @extend .bs-popover-start;\n  }\n}\n\n// Offset the popover to account for the popover arrow\n.popover-header {\n  padding: var(--#{$prefix}popover-header-padding-y) var(--#{$prefix}popover-header-padding-x);\n  margin-bottom: 0; // Reset the default from Reboot\n  @include font-size(var(--#{$prefix}popover-header-font-size));\n  color: var(--#{$prefix}popover-header-color);\n  background-color: var(--#{$prefix}popover-header-bg);\n  border-bottom: var(--#{$prefix}popover-border-width) solid var(--#{$prefix}popover-border-color);\n  @include border-top-radius(var(--#{$prefix}popover-inner-border-radius));\n\n  &:empty {\n    display: none;\n  }\n}\n\n.popover-body {\n  padding: var(--#{$prefix}popover-body-padding-y) var(--#{$prefix}popover-body-padding-x);\n  color: var(--#{$prefix}popover-body-color);\n}\n","// Notes on the classes:\n//\n// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)\n//    even when their scroll action started on a carousel, but for compatibility (with Firefox)\n//    we're preventing all actions instead\n// 2. The .carousel-item-start and .carousel-item-end is used to indicate where\n//    the active slide is heading.\n// 3. .active.carousel-item is the current slide.\n// 4. .active.carousel-item-start and .active.carousel-item-end is the current\n//    slide in its in-transition state. Only one of these occurs at a time.\n// 5. .carousel-item-next.carousel-item-start and .carousel-item-prev.carousel-item-end\n//    is the upcoming slide in transition.\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  @include clearfix();\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  @include transition($carousel-transition);\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%);\n}\n\n\n//\n// Alternate transitions\n//\n\n.carousel-fade {\n  .carousel-item {\n    opacity: 0;\n    transition-property: opacity;\n    transform: none;\n  }\n\n  .carousel-item.active,\n  .carousel-item-next.carousel-item-start,\n  .carousel-item-prev.carousel-item-end {\n    z-index: 1;\n    opacity: 1;\n  }\n\n  .active.carousel-item-start,\n  .active.carousel-item-end {\n    z-index: 0;\n    opacity: 0;\n    @include transition(opacity 0s $carousel-transition-duration);\n  }\n}\n\n\n//\n// Left/right controls for nav\n//\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  // Use flex for alignment (1-3)\n  display: flex; // 1. allow flex styles\n  align-items: center; // 2. vertically center contents\n  justify-content: center; // 3. horizontally center contents\n  width: $carousel-control-width;\n  padding: 0;\n  color: $carousel-control-color;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: $carousel-control-opacity;\n  @include transition($carousel-control-transition);\n\n  // Hover/focus state\n  &:hover,\n  &:focus {\n    color: $carousel-control-color;\n    text-decoration: none;\n    outline: 0;\n    opacity: $carousel-control-hover-opacity;\n  }\n}\n.carousel-control-prev {\n  left: 0;\n  background-image: if($enable-gradients, linear-gradient(90deg, rgba($black, .25), rgba($black, .001)), null);\n}\n.carousel-control-next {\n  right: 0;\n  background-image: if($enable-gradients, linear-gradient(270deg, rgba($black, .25), rgba($black, .001)), null);\n}\n\n// Icons for within\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: $carousel-control-icon-width;\n  height: $carousel-control-icon-width;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: escape-svg($carousel-control-prev-icon-bg);\n}\n.carousel-control-next-icon {\n  background-image: escape-svg($carousel-control-next-icon-bg);\n}\n\n// Optional indicator pips/controls\n//\n// Add a container (such as a list) with the following class and add an item (ideally a focusable control,\n// like a button) with data-bs-target for each slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  // Use the .carousel-control's width as margin so we don't overlay those\n  margin-right: $carousel-control-width;\n  margin-bottom: 1rem;\n  margin-left: $carousel-control-width;\n\n  [data-bs-target] {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: $carousel-indicator-width;\n    height: $carousel-indicator-height;\n    padding: 0;\n    margin-right: $carousel-indicator-spacer;\n    margin-left: $carousel-indicator-spacer;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: $carousel-indicator-active-bg;\n    background-clip: padding-box;\n    border: 0;\n    // Use transparent borders to increase the hit area by 10px on top and bottom.\n    border-top: $carousel-indicator-hit-area-height solid transparent;\n    border-bottom: $carousel-indicator-hit-area-height solid transparent;\n    opacity: $carousel-indicator-opacity;\n    @include transition($carousel-indicator-transition);\n  }\n\n  .active {\n    opacity: $carousel-indicator-active-opacity;\n  }\n}\n\n\n// Optional captions\n//\n//\n\n.carousel-caption {\n  position: absolute;\n  right: (100% - $carousel-caption-width) * .5;\n  bottom: $carousel-caption-spacer;\n  left: (100% - $carousel-caption-width) * .5;\n  padding-top: $carousel-caption-padding-y;\n  padding-bottom: $carousel-caption-padding-y;\n  color: $carousel-caption-color;\n  text-align: center;\n}\n\n// Dark mode carousel\n\n@mixin carousel-dark() {\n  .carousel-control-prev-icon,\n  .carousel-control-next-icon {\n    filter: $carousel-dark-control-icon-filter;\n  }\n\n  .carousel-indicators [data-bs-target] {\n    background-color: $carousel-dark-indicator-active-bg;\n  }\n\n  .carousel-caption {\n    color: $carousel-dark-caption-color;\n  }\n}\n\n.carousel-dark {\n  @include carousel-dark();\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    @if $color-mode-type == \"media-query\" {\n      .carousel {\n        @include carousel-dark();\n      }\n    } @else {\n      .carousel,\n      &.carousel {\n        @include carousel-dark();\n      }\n    }\n  }\n}\n","// scss-docs-start clearfix\n@mixin clearfix() {\n  &::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n}\n// scss-docs-end clearfix\n","//\n// Rotating border\n//\n\n.spinner-grow,\n.spinner-border {\n  display: inline-block;\n  width: var(--#{$prefix}spinner-width);\n  height: var(--#{$prefix}spinner-height);\n  vertical-align: var(--#{$prefix}spinner-vertical-align);\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  animation: var(--#{$prefix}spinner-animation-speed) linear infinite var(--#{$prefix}spinner-animation-name);\n}\n\n// scss-docs-start spinner-border-keyframes\n@keyframes spinner-border {\n  to { transform: rotate(360deg) #{\"/* rtl:ignore */\"}; }\n}\n// scss-docs-end spinner-border-keyframes\n\n.spinner-border {\n  // scss-docs-start spinner-border-css-vars\n  --#{$prefix}spinner-width: #{$spinner-width};\n  --#{$prefix}spinner-height: #{$spinner-height};\n  --#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};\n  --#{$prefix}spinner-border-width: #{$spinner-border-width};\n  --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};\n  --#{$prefix}spinner-animation-name: spinner-border;\n  // scss-docs-end spinner-border-css-vars\n\n  border: var(--#{$prefix}spinner-border-width) solid currentcolor;\n  border-right-color: transparent;\n}\n\n.spinner-border-sm {\n  // scss-docs-start spinner-border-sm-css-vars\n  --#{$prefix}spinner-width: #{$spinner-width-sm};\n  --#{$prefix}spinner-height: #{$spinner-height-sm};\n  --#{$prefix}spinner-border-width: #{$spinner-border-width-sm};\n  // scss-docs-end spinner-border-sm-css-vars\n}\n\n//\n// Growing circle\n//\n\n// scss-docs-start spinner-grow-keyframes\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n// scss-docs-end spinner-grow-keyframes\n\n.spinner-grow {\n  // scss-docs-start spinner-grow-css-vars\n  --#{$prefix}spinner-width: #{$spinner-width};\n  --#{$prefix}spinner-height: #{$spinner-height};\n  --#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};\n  --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};\n  --#{$prefix}spinner-animation-name: spinner-grow;\n  // scss-docs-end spinner-grow-css-vars\n\n  background-color: currentcolor;\n  opacity: 0;\n}\n\n.spinner-grow-sm {\n  --#{$prefix}spinner-width: #{$spinner-width-sm};\n  --#{$prefix}spinner-height: #{$spinner-height-sm};\n}\n\n@if $enable-reduced-motion {\n  @media (prefers-reduced-motion: reduce) {\n    .spinner-border,\n    .spinner-grow {\n      --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed * 2};\n    }\n  }\n}\n","// stylelint-disable function-disallowed-list\n\n%offcanvas-css-vars {\n  // scss-docs-start offcanvas-css-vars\n  --#{$prefix}offcanvas-zindex: #{$zindex-offcanvas};\n  --#{$prefix}offcanvas-width: #{$offcanvas-horizontal-width};\n  --#{$prefix}offcanvas-height: #{$offcanvas-vertical-height};\n  --#{$prefix}offcanvas-padding-x: #{$offcanvas-padding-x};\n  --#{$prefix}offcanvas-padding-y: #{$offcanvas-padding-y};\n  --#{$prefix}offcanvas-color: #{$offcanvas-color};\n  --#{$prefix}offcanvas-bg: #{$offcanvas-bg-color};\n  --#{$prefix}offcanvas-border-width: #{$offcanvas-border-width};\n  --#{$prefix}offcanvas-border-color: #{$offcanvas-border-color};\n  --#{$prefix}offcanvas-box-shadow: #{$offcanvas-box-shadow};\n  --#{$prefix}offcanvas-transition: #{transform $offcanvas-transition-duration ease-in-out};\n  --#{$prefix}offcanvas-title-line-height: #{$offcanvas-title-line-height};\n  // scss-docs-end offcanvas-css-vars\n}\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $next: breakpoint-next($breakpoint, $grid-breakpoints);\n  $infix: breakpoint-infix($next, $grid-breakpoints);\n\n  .offcanvas#{$infix} {\n    @extend %offcanvas-css-vars;\n  }\n}\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $next: breakpoint-next($breakpoint, $grid-breakpoints);\n  $infix: breakpoint-infix($next, $grid-breakpoints);\n\n  .offcanvas#{$infix} {\n    @include media-breakpoint-down($next) {\n      position: fixed;\n      bottom: 0;\n      z-index: var(--#{$prefix}offcanvas-zindex);\n      display: flex;\n      flex-direction: column;\n      max-width: 100%;\n      color: var(--#{$prefix}offcanvas-color);\n      visibility: hidden;\n      background-color: var(--#{$prefix}offcanvas-bg);\n      background-clip: padding-box;\n      outline: 0;\n      @include box-shadow(var(--#{$prefix}offcanvas-box-shadow));\n      @include transition(var(--#{$prefix}offcanvas-transition));\n\n      &.offcanvas-start {\n        top: 0;\n        left: 0;\n        width: var(--#{$prefix}offcanvas-width);\n        border-right: var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color);\n        transform: translateX(-100%);\n      }\n\n      &.offcanvas-end {\n        top: 0;\n        right: 0;\n        width: var(--#{$prefix}offcanvas-width);\n        border-left: var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color);\n        transform: translateX(100%);\n      }\n\n      &.offcanvas-top {\n        top: 0;\n        right: 0;\n        left: 0;\n        height: var(--#{$prefix}offcanvas-height);\n        max-height: 100%;\n        border-bottom: var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color);\n        transform: translateY(-100%);\n      }\n\n      &.offcanvas-bottom {\n        right: 0;\n        left: 0;\n        height: var(--#{$prefix}offcanvas-height);\n        max-height: 100%;\n        border-top: var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color);\n        transform: translateY(100%);\n      }\n\n      &.showing,\n      &.show:not(.hiding) {\n        transform: none;\n      }\n\n      &.showing,\n      &.hiding,\n      &.show {\n        visibility: visible;\n      }\n    }\n\n    @if not ($infix == \"\") {\n      @include media-breakpoint-up($next) {\n        --#{$prefix}offcanvas-height: auto;\n        --#{$prefix}offcanvas-border-width: 0;\n        background-color: transparent !important; // stylelint-disable-line declaration-no-important\n\n        .offcanvas-header {\n          display: none;\n        }\n\n        .offcanvas-body {\n          display: flex;\n          flex-grow: 0;\n          padding: 0;\n          overflow-y: visible;\n          // Reset `background-color` in case `.bg-*` classes are used in offcanvas\n          background-color: transparent !important; // stylelint-disable-line declaration-no-important\n        }\n      }\n    }\n  }\n}\n\n.offcanvas-backdrop {\n  @include overlay-backdrop($zindex-offcanvas-backdrop, $offcanvas-backdrop-bg, $offcanvas-backdrop-opacity);\n}\n\n.offcanvas-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--#{$prefix}offcanvas-padding-y) var(--#{$prefix}offcanvas-padding-x);\n\n  .btn-close {\n    padding: calc(var(--#{$prefix}offcanvas-padding-y) * .5) calc(var(--#{$prefix}offcanvas-padding-x) * .5);\n    margin-top: calc(-.5 * var(--#{$prefix}offcanvas-padding-y));\n    margin-right: calc(-.5 * var(--#{$prefix}offcanvas-padding-x));\n    margin-bottom: calc(-.5 * var(--#{$prefix}offcanvas-padding-y));\n  }\n}\n\n.offcanvas-title {\n  margin-bottom: 0;\n  line-height: var(--#{$prefix}offcanvas-title-line-height);\n}\n\n.offcanvas-body {\n  flex-grow: 1;\n  padding: var(--#{$prefix}offcanvas-padding-y) var(--#{$prefix}offcanvas-padding-x);\n  overflow-y: auto;\n}\n",".placeholder {\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: middle;\n  cursor: wait;\n  background-color: currentcolor;\n  opacity: $placeholder-opacity-max;\n\n  &.btn::before {\n    display: inline-block;\n    content: \"\";\n  }\n}\n\n// Sizing\n.placeholder-xs {\n  min-height: .6em;\n}\n\n.placeholder-sm {\n  min-height: .8em;\n}\n\n.placeholder-lg {\n  min-height: 1.2em;\n}\n\n// Animation\n.placeholder-glow {\n  .placeholder {\n    animation: placeholder-glow 2s ease-in-out infinite;\n  }\n}\n\n@keyframes placeholder-glow {\n  50% {\n    opacity: $placeholder-opacity-min;\n  }\n}\n\n.placeholder-wave {\n  mask-image: linear-gradient(130deg, $black 55%, rgba(0, 0, 0, (1 - $placeholder-opacity-min)) 75%, $black 95%);\n  mask-size: 200% 100%;\n  animation: placeholder-wave 2s linear infinite;\n}\n\n@keyframes placeholder-wave {\n  100% {\n    mask-position: -200% 0%;\n  }\n}\n","// All-caps `RGBA()` function used because of this Sass bug: https://github.com/sass/node-sass/issues/2251\n@each $color, $value in $theme-colors {\n  .text-bg-#{$color} {\n    color: color-contrast($value) if($enable-important-utilities, !important, null);\n    background-color: RGBA(var(--#{$prefix}#{$color}-rgb), var(--#{$prefix}bg-opacity, 1)) if($enable-important-utilities, !important, null);\n  }\n}\n","// All-caps `RGBA()` function used because of this Sass bug: https://github.com/sass/node-sass/issues/2251\n@each $color, $value in $theme-colors {\n  .link-#{$color} {\n    color: RGBA(var(--#{$prefix}#{$color}-rgb), var(--#{$prefix}link-opacity, 1)) if($enable-important-utilities, !important, null);\n    text-decoration-color: RGBA(var(--#{$prefix}#{$color}-rgb), var(--#{$prefix}link-underline-opacity, 1)) if($enable-important-utilities, !important, null);\n\n    @if $link-shade-percentage != 0 {\n      &:hover,\n      &:focus {\n        $hover-color: if(color-contrast($value) == $color-contrast-light, shade-color($value, $link-shade-percentage), tint-color($value, $link-shade-percentage));\n        color: RGBA(#{to-rgb($hover-color)}, var(--#{$prefix}link-opacity, 1)) if($enable-important-utilities, !important, null);\n        text-decoration-color: RGBA(to-rgb($hover-color), var(--#{$prefix}link-underline-opacity, 1)) if($enable-important-utilities, !important, null);\n      }\n    }\n  }\n}\n\n// One-off special link helper as a bridge until v6\n.link-body-emphasis {\n  color: RGBA(var(--#{$prefix}emphasis-color-rgb), var(--#{$prefix}link-opacity, 1)) if($enable-important-utilities, !important, null);\n  text-decoration-color: RGBA(var(--#{$prefix}emphasis-color-rgb), var(--#{$prefix}link-underline-opacity, 1)) if($enable-important-utilities, !important, null);\n\n  @if $link-shade-percentage != 0 {\n    &:hover,\n    &:focus {\n      color: RGBA(var(--#{$prefix}emphasis-color-rgb), var(--#{$prefix}link-opacity, .75)) if($enable-important-utilities, !important, null);\n      text-decoration-color: RGBA(var(--#{$prefix}emphasis-color-rgb), var(--#{$prefix}link-underline-opacity, .75)) if($enable-important-utilities, !important, null);\n    }\n  }\n}\n",".focus-ring:focus {\n  outline: 0;\n  // By default, there is no `--bs-focus-ring-x`, `--bs-focus-ring-y`, or `--bs-focus-ring-blur`, but we provide CSS variables with fallbacks to initial `0` values\n  box-shadow: var(--#{$prefix}focus-ring-x, 0) var(--#{$prefix}focus-ring-y, 0) var(--#{$prefix}focus-ring-blur, 0) var(--#{$prefix}focus-ring-width) var(--#{$prefix}focus-ring-color);\n}\n",".icon-link {\n  display: inline-flex;\n  gap: $icon-link-gap;\n  align-items: center;\n  text-decoration-color: rgba(var(--#{$prefix}link-color-rgb), var(--#{$prefix}link-opacity, .5));\n  text-underline-offset: $icon-link-underline-offset;\n  backface-visibility: hidden;\n\n  > .bi {\n    flex-shrink: 0;\n    width: $icon-link-icon-size;\n    height: $icon-link-icon-size;\n    fill: currentcolor;\n    @include transition($icon-link-icon-transition);\n  }\n}\n\n.icon-link-hover {\n  &:hover,\n  &:focus-visible {\n    > .bi {\n      transform: var(--#{$prefix}icon-link-transform, $icon-link-icon-transform);\n    }\n  }\n}\n","// Credit: Nicolas Gallagher and SUIT CSS.\n\n.ratio {\n  position: relative;\n  width: 100%;\n\n  &::before {\n    display: block;\n    padding-top: var(--#{$prefix}aspect-ratio);\n    content: \"\";\n  }\n\n  > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@each $key, $ratio in $aspect-ratios {\n  .ratio-#{$key} {\n    --#{$prefix}aspect-ratio: #{$ratio};\n  }\n}\n","// Shorthand\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n// Responsive sticky top and bottom\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .sticky#{$infix}-top {\n      position: sticky;\n      top: 0;\n      z-index: $zindex-sticky;\n    }\n\n    .sticky#{$infix}-bottom {\n      position: sticky;\n      bottom: 0;\n      z-index: $zindex-sticky;\n    }\n  }\n}\n","// scss-docs-start stacks\n.hstack {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: stretch;\n}\n\n.vstack {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-self: stretch;\n}\n// scss-docs-end stacks\n","//\n// Visually hidden\n//\n\n.visually-hidden,\n.visually-hidden-focusable:not(:focus):not(:focus-within) {\n  @include visually-hidden();\n}\n","// stylelint-disable declaration-no-important\n\n// Hide content visually while keeping it accessible to assistive technologies\n//\n// See: https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/\n// See: https://kittygiraudel.com/2016/10/13/css-hide-and-seek/\n\n@mixin visually-hidden() {\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n\n  // Fix for positioned table caption that could become anonymous cells\n  &:not(caption) {\n    position: absolute !important;\n  }\n}\n\n// Use to only display content when it's focused, or one of its child elements is focused\n// (i.e. when focus is within the element/container that the class was applied to)\n//\n// Useful for \"Skip to main content\" links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n\n@mixin visually-hidden-focusable() {\n  &:not(:focus):not(:focus-within) {\n    @include visually-hidden();\n  }\n}\n","//\n// Stretched link\n//\n\n.stretched-link {\n  &::#{$stretched-link-pseudo-element} {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: $stretched-link-z-index;\n    content: \"\";\n  }\n}\n","//\n// Text truncation\n//\n\n.text-truncate {\n  @include text-truncate();\n}\n","// Text truncate\n// Requires inline-block or block for proper styling\n\n@mixin text-truncate() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n",".vr {\n  display: inline-block;\n  align-self: stretch;\n  width: $vr-border-width;\n  min-height: 1em;\n  background-color: currentcolor;\n  opacity: $hr-opacity;\n}\n","// Utility generator\n// Used to generate utilities & print utilities\n@mixin generate-utility($utility, $infix: \"\", $is-rfs-media-query: false) {\n  $values: map-get($utility, values);\n\n  // If the values are a list or string, convert it into a map\n  @if type-of($values) == \"string\" or type-of(nth($values, 1)) != \"list\" {\n    $values: zip($values, $values);\n  }\n\n  @each $key, $value in $values {\n    $properties: map-get($utility, property);\n\n    // Multiple properties are possible, for example with vertical or horizontal margins or paddings\n    @if type-of($properties) == \"string\" {\n      $properties: append((), $properties);\n    }\n\n    // Use custom class if present\n    $property-class: if(map-has-key($utility, class), map-get($utility, class), nth($properties, 1));\n    $property-class: if($property-class == null, \"\", $property-class);\n\n    // Use custom CSS variable name if present, otherwise default to `class`\n    $css-variable-name: if(map-has-key($utility, css-variable-name), map-get($utility, css-variable-name), map-get($utility, class));\n\n    // State params to generate pseudo-classes\n    $state: if(map-has-key($utility, state), map-get($utility, state), ());\n\n    $infix: if($property-class == \"\" and str-slice($infix, 1, 1) == \"-\", str-slice($infix, 2), $infix);\n\n    // Don't prefix if value key is null (e.g. with shadow class)\n    $property-class-modifier: if($key, if($property-class == \"\" and $infix == \"\", \"\", \"-\") + $key, \"\");\n\n    @if map-get($utility, rfs) {\n      // Inside the media query\n      @if $is-rfs-media-query {\n        $val: rfs-value($value);\n\n        // Do not render anything if fluid and non fluid values are the same\n        $value: if($val == rfs-fluid-value($value), null, $val);\n      }\n      @else {\n        $value: rfs-fluid-value($value);\n      }\n    }\n\n    $is-css-var: map-get($utility, css-var);\n    $is-local-vars: map-get($utility, local-vars);\n    $is-rtl: map-get($utility, rtl);\n\n    @if $value != null {\n      @if $is-rtl == false {\n        /* rtl:begin:remove */\n      }\n\n      @if $is-css-var {\n        .#{$property-class + $infix + $property-class-modifier} {\n          --#{$prefix}#{$css-variable-name}: #{$value};\n        }\n\n        @each $pseudo in $state {\n          .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {\n            --#{$prefix}#{$css-variable-name}: #{$value};\n          }\n        }\n      } @else {\n        .#{$property-class + $infix + $property-class-modifier} {\n          @each $property in $properties {\n            @if $is-local-vars {\n              @each $local-var, $variable in $is-local-vars {\n                --#{$prefix}#{$local-var}: #{$variable};\n              }\n            }\n            #{$property}: $value if($enable-important-utilities, !important, null);\n          }\n        }\n\n        @each $pseudo in $state {\n          .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {\n            @each $property in $properties {\n              @if $is-local-vars {\n                @each $local-var, $variable in $is-local-vars {\n                  --#{$prefix}#{$local-var}: #{$variable};\n                }\n              }\n              #{$property}: $value if($enable-important-utilities, !important, null);\n            }\n          }\n        }\n      }\n\n      @if $is-rtl == false {\n        /* rtl:end:remove */\n      }\n    }\n  }\n}\n","// Loop over each breakpoint\n@each $breakpoint in map-keys($grid-breakpoints) {\n\n  // Generate media query if needed\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    // Loop over each utility property\n    @each $key, $utility in $utilities {\n      // The utility can be disabled with `false`, thus check if the utility is a map first\n      // Only proceed if responsive media queries are enabled or if it's the base media query\n      @if type-of($utility) == \"map\" and (map-get($utility, responsive) or $infix == \"\") {\n        @include generate-utility($utility, $infix);\n      }\n    }\n  }\n}\n\n// RFS rescaling\n@media (min-width: $rfs-mq-value) {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @if (map-get($grid-breakpoints, $breakpoint) < $rfs-breakpoint) {\n      // Loop over each utility property\n      @each $key, $utility in $utilities {\n        // The utility can be disabled with `false`, thus check if the utility is a map first\n        // Only proceed if responsive media queries are enabled or if it's the base media query\n        @if type-of($utility) == \"map\" and map-get($utility, rfs) and (map-get($utility, responsive) or $infix == \"\") {\n          @include generate-utility($utility, $infix, true);\n        }\n      }\n    }\n  }\n}\n\n\n// Print utilities\n@media print {\n  @each $key, $utility in $utilities {\n    // The utility can be disabled with `false`, thus check if the utility is a map first\n    // Then check if the utility needs print styles\n    @if type-of($utility) == \"map\" and map-get($utility, print) == true {\n      @include generate-utility($utility, \"-print\");\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/reset.scss":
/*!************************!*\
  !*** ./src/reset.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./reset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/reset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/subscribe_form/sass/subscribe_form.scss":
/*!***********************************************************!*\
  !*** ./src/views/subscribe_form/sass/subscribe_form.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_subscribe_form_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./subscribe_form.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/subscribe_form/sass/subscribe_form.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_subscribe_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_subscribe_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_subscribe_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_subscribe_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/views/subscribe_form/subscribe_form.js"));
/******/ }
]);
//# sourceMappingURL=subscribe_form.bundle.js.map