"use strict";
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["index"],{

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

/***/ "./src/index-modules/cardRenderer.js":
/*!*******************************************!*\
  !*** ./src/index-modules/cardRenderer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardRenderer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CardRenderer = /*#__PURE__*/function () {
  function CardRenderer() {
    _classCallCheck(this, CardRenderer);
  }
  _createClass(CardRenderer, null, [{
    key: "renderSingleCard",
    value: function renderSingleCard(movie) {
      //*? card row & col
      var cardsRow = document.querySelector('#cards-row');
      var cardCol = document.createElement('div');
      cardCol.classList.toggle('col');

      //*? card composition
      var cardDiv = document.createElement('div');
      cardDiv.classList.toggle('card');
      // const cardLink = document.createElement('a');
      // cardLink.classList.toggle('card-link-wrapper');  
      var cardImage = document.createElement('img');
      cardImage.classList.toggle('card-img');
      cardImage.alt = "".concat(movie.title, " poster");
      cardImage.src = "".concat(movie.poster);

      //*card text-overlay        
      var cardTextContainer = document.createElement('div');
      cardTextContainer.classList.toggle('card-img-overlay');
      var cardTitle = document.createElement('h5');
      cardTitle.classList.toggle('card-title');
      cardTitle.textContent = "".concat(movie.title, " (").concat(movie.year, ")");
      var cardTextGenre = document.createElement('p');
      cardTextGenre.classList.toggle('card-text');
      cardTextGenre.textContent = "".concat(movie.genre.join(', '));
      var cardTextDuration = document.createElement('p');
      cardTextDuration.classList.toggle('card-text');
      cardTextDuration.textContent = "".concat(movie.duration);
      var cardTextDirector = document.createElement('p');
      cardTextDirector.classList.toggle('card-text');
      cardTextDirector.textContent = "".concat(movie.director);
      var cardTextRate = document.createElement('p');
      cardTextRate.classList.toggle('card-text');
      cardTextRate.textContent = "".concat(movie.rate);

      //**appending
      //*?appending
      cardTextContainer.append(cardTitle, cardTextGenre, cardTextDuration, cardTextDirector, cardTextRate);
      cardDiv.append(cardImage, cardTextContainer);
      cardCol.append(cardDiv);
      cardsRow.append(cardCol);
    }
  }, {
    key: "renderAllCards",
    value: function renderAllCards(allMovies) {
      //* not actually necessary when rendering onload
      CardRenderer.refreshGrid();
      allMovies.forEach(function (movie) {
        CardRenderer.renderSingleCard(movie);
      });
    }
  }, {
    key: "refreshGrid",
    value: function refreshGrid() {
      var cardsRow = document.querySelector('#cards-row');
      cardsRow.innerHTML = '';
    }
  }]);
  return CardRenderer;
}();

;

/***/ }),

/***/ "./src/index-modules/movie.js":
/*!************************************!*\
  !*** ./src/index-modules/movie.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Movie)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Movie = /*#__PURE__*/_createClass(function Movie(_ref) {
  var title = _ref.title,
    year = _ref.year,
    director = _ref.director,
    duration = _ref.duration,
    genre = _ref.genre,
    rate = _ref.rate,
    poster = _ref.poster,
    id = _ref.id;
  _classCallCheck(this, Movie);
  this.title = title;
  this.year = year;
  this.director = director;
  this.duration = duration;
  this.genre = genre;
  this.rate = rate;
  this.poster = poster;
  this.id = id;

  //*id is generated with uuid
});


/***/ }),

/***/ "./src/index-modules/movieLoader.js":
/*!******************************************!*\
  !*** ./src/index-modules/movieLoader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieLoader)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repository */ "./src/index-modules/repository.js");
/* harmony import */ var _cardRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardRenderer */ "./src/index-modules/cardRenderer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// import $ from 'jquery';
// import tempData from '../../scripts/tempData';




//*new repository
var newRepo = new _repository__WEBPACK_IMPORTED_MODULE_0__["default"]();
// const URL = `https://students-api.2.us-1.fl0.io/movies`;
var URL = 'http://localhost:3001/movies';

// export default class MovieLoader {

//     static loadAndRenderGrid() {
//         //*? request data

//      const response = $.get(URL, (data)=> {
//          //*? push data to local storage + id
//          data.forEach(movie => {
//              const newMovie = newRepo.addMovie(movie);
//          })

//          //*!! Render Cards on Page
//          CardRenderer.renderAllCards(newRepo.getAllMovies());    
//      });   
// }

//* implementation with axios > cors error > 
var MovieLoader = /*#__PURE__*/function () {
  function MovieLoader() {
    _classCallCheck(this, MovieLoader);
  }
  _createClass(MovieLoader, null, [{
    key: "loadAndRenderGrid",
    value: function () {
      var _loadAndRenderGrid = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(URL);
            case 2:
              response = _context.sent;
              //*? push data to local storage + id
              response.data.forEach(function (movie) {
                var newMovie = newRepo.addMovie(movie);
              });

              //*!! Render Cards on Page
              _cardRenderer__WEBPACK_IMPORTED_MODULE_1__["default"].renderAllCards(newRepo.getAllMovies());

              //*! Uncomment this and comment out the async function if cors error is encounter in order to see the cards rendered
              // tempData.forEach(movie => {
              //     const newMovie = newRepo.addMovie(movie);
              // })    

              // CardRenderer.renderAllCards(newRepo.getAllMovies());  
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function loadAndRenderGrid() {
        return _loadAndRenderGrid.apply(this, arguments);
      }
      return loadAndRenderGrid;
    }()
  }]);
  return MovieLoader;
}();


/***/ }),

/***/ "./src/index-modules/repository.js":
/*!*****************************************!*\
  !*** ./src/index-modules/repository.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Repository)
/* harmony export */ });
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie */ "./src/index-modules/movie.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// const uuid = require('uuid').v4;
var Repository = /*#__PURE__*/function () {
  function Repository() {
    _classCallCheck(this, Repository);
    this.allMovies = [];
  }

  //* takes 1 movieObject  > pushes new movieObject + id
  _createClass(Repository, [{
    key: "addMovie",
    value: function addMovie(movieData) {
      // const id = uuid();
      var newMovie = new _movie__WEBPACK_IMPORTED_MODULE_0__["default"](_objectSpread({}, movieData));
      this.allMovies.push(newMovie);
      return newMovie;
    }
  }, {
    key: "getAllMovies",
    value: function getAllMovies() {
      return this.allMovies;
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      this.allCards = [];
    }
  }, {
    key: "deleteMovieById",
    value: function deleteMovieById(id) {
      var index = this.allMovies.findIndex(function (movie) {
        return movie.id === id;
      });
      if (index > -1) {
        this.allMovies.splice(index, 1);
      }
    }
  }]);
  return Repository;
}();


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _index_modules_movieLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-modules/movieLoader */ "./src/index-modules/movieLoader.js");
// import './reset.scss'; > using bootstrap reset


_index_modules_movieLoader__WEBPACK_IMPORTED_MODULE_1__["default"].loadAndRenderGrid();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
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
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/hero-image.jpg */ "./src/assets/images/hero-image.jpg"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
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
  --bs-graydark: #151515;
  --bs-altyellow: rgb(237, 241, 7);
  --bs-altgreen: rgb(28, 237, 69);
  --bs-altpink: rgb(215, 10, 161);
  --bs-altlight: #f2ebfa;
  --bs-altdark: #522192;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-graydark-rgb: 21, 21, 21;
  --bs-altyellow-rgb: 237, 241, 7;
  --bs-altgreen-rgb: 28, 237, 69;
  --bs-altpink-rgb: 215, 10, 161;
  --bs-altlight-rgb: 242, 235, 250;
  --bs-altdark-rgb: 82, 33, 146;
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

.btn-graydark {
  --bs-btn-color: #fff;
  --bs-btn-bg: #151515;
  --bs-btn-border-color: #151515;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #121212;
  --bs-btn-hover-border-color: #111111;
  --bs-btn-focus-shadow-rgb: 56, 56, 56;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #111111;
  --bs-btn-active-border-color: #101010;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #151515;
  --bs-btn-disabled-border-color: #151515;
}

.btn-altyellow {
  --bs-btn-color: #000;
  --bs-btn-bg: rgb(237, 241, 7);
  --bs-btn-border-color: rgb(237, 241, 7);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #f0f32c;
  --bs-btn-hover-border-color: #eff220;
  --bs-btn-focus-shadow-rgb: 201, 205, 6;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #f1f439;
  --bs-btn-active-border-color: #eff220;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: rgb(237, 241, 7);
  --bs-btn-disabled-border-color: rgb(237, 241, 7);
}

.btn-altgreen {
  --bs-btn-color: #000;
  --bs-btn-bg: rgb(28, 237, 69);
  --bs-btn-border-color: rgb(28, 237, 69);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #3ef061;
  --bs-btn-hover-border-color: #33ef58;
  --bs-btn-focus-shadow-rgb: 24, 201, 59;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #49f16a;
  --bs-btn-active-border-color: #33ef58;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: rgb(28, 237, 69);
  --bs-btn-disabled-border-color: rgb(28, 237, 69);
}

.btn-altpink {
  --bs-btn-color: #fff;
  --bs-btn-bg: rgb(215, 10, 161);
  --bs-btn-border-color: rgb(215, 10, 161);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #b70989;
  --bs-btn-hover-border-color: #ac0881;
  --bs-btn-focus-shadow-rgb: 221, 47, 175;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #ac0881;
  --bs-btn-active-border-color: #a10879;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: rgb(215, 10, 161);
  --bs-btn-disabled-border-color: rgb(215, 10, 161);
}

.btn-altlight {
  --bs-btn-color: #000;
  --bs-btn-bg: #f2ebfa;
  --bs-btn-border-color: #f2ebfa;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #f4eefb;
  --bs-btn-hover-border-color: #f3edfb;
  --bs-btn-focus-shadow-rgb: 206, 200, 213;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #f5effb;
  --bs-btn-active-border-color: #f3edfb;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #f2ebfa;
  --bs-btn-disabled-border-color: #f2ebfa;
}

.btn-altdark {
  --bs-btn-color: #fff;
  --bs-btn-bg: #522192;
  --bs-btn-border-color: #522192;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #461c7c;
  --bs-btn-hover-border-color: #421a75;
  --bs-btn-focus-shadow-rgb: 108, 66, 162;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #421a75;
  --bs-btn-active-border-color: #3e196e;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #522192;
  --bs-btn-disabled-border-color: #522192;
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

.btn-outline-graydark {
  --bs-btn-color: #151515;
  --bs-btn-border-color: #151515;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #151515;
  --bs-btn-hover-border-color: #151515;
  --bs-btn-focus-shadow-rgb: 21, 21, 21;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #151515;
  --bs-btn-active-border-color: #151515;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #151515;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #151515;
  --bs-gradient: none;
}

.btn-outline-altyellow {
  --bs-btn-color: rgb(237, 241, 7);
  --bs-btn-border-color: rgb(237, 241, 7);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: rgb(237, 241, 7);
  --bs-btn-hover-border-color: rgb(237, 241, 7);
  --bs-btn-focus-shadow-rgb: 237, 241, 7;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: rgb(237, 241, 7);
  --bs-btn-active-border-color: rgb(237, 241, 7);
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: rgb(237, 241, 7);
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: rgb(237, 241, 7);
  --bs-gradient: none;
}

.btn-outline-altgreen {
  --bs-btn-color: rgb(28, 237, 69);
  --bs-btn-border-color: rgb(28, 237, 69);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: rgb(28, 237, 69);
  --bs-btn-hover-border-color: rgb(28, 237, 69);
  --bs-btn-focus-shadow-rgb: 28, 237, 69;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: rgb(28, 237, 69);
  --bs-btn-active-border-color: rgb(28, 237, 69);
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: rgb(28, 237, 69);
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: rgb(28, 237, 69);
  --bs-gradient: none;
}

.btn-outline-altpink {
  --bs-btn-color: rgb(215, 10, 161);
  --bs-btn-border-color: rgb(215, 10, 161);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: rgb(215, 10, 161);
  --bs-btn-hover-border-color: rgb(215, 10, 161);
  --bs-btn-focus-shadow-rgb: 215, 10, 161;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: rgb(215, 10, 161);
  --bs-btn-active-border-color: rgb(215, 10, 161);
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: rgb(215, 10, 161);
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: rgb(215, 10, 161);
  --bs-gradient: none;
}

.btn-outline-altlight {
  --bs-btn-color: #f2ebfa;
  --bs-btn-border-color: #f2ebfa;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #f2ebfa;
  --bs-btn-hover-border-color: #f2ebfa;
  --bs-btn-focus-shadow-rgb: 242, 235, 250;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #f2ebfa;
  --bs-btn-active-border-color: #f2ebfa;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #f2ebfa;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #f2ebfa;
  --bs-gradient: none;
}

.btn-outline-altdark {
  --bs-btn-color: #522192;
  --bs-btn-border-color: #522192;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #522192;
  --bs-btn-hover-border-color: #522192;
  --bs-btn-focus-shadow-rgb: 82, 33, 146;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #522192;
  --bs-btn-active-border-color: #522192;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #522192;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #522192;
  --bs-gradient: none;
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

.alert-graydark {
  --bs-alert-color: var(--bs-graydark-text-emphasis);
  --bs-alert-bg: var(--bs-graydark-bg-subtle);
  --bs-alert-border-color: var(--bs-graydark-border-subtle);
  --bs-alert-link-color: var(--bs-graydark-text-emphasis);
}

.alert-altyellow {
  --bs-alert-color: var(--bs-altyellow-text-emphasis);
  --bs-alert-bg: var(--bs-altyellow-bg-subtle);
  --bs-alert-border-color: var(--bs-altyellow-border-subtle);
  --bs-alert-link-color: var(--bs-altyellow-text-emphasis);
}

.alert-altgreen {
  --bs-alert-color: var(--bs-altgreen-text-emphasis);
  --bs-alert-bg: var(--bs-altgreen-bg-subtle);
  --bs-alert-border-color: var(--bs-altgreen-border-subtle);
  --bs-alert-link-color: var(--bs-altgreen-text-emphasis);
}

.alert-altpink {
  --bs-alert-color: var(--bs-altpink-text-emphasis);
  --bs-alert-bg: var(--bs-altpink-bg-subtle);
  --bs-alert-border-color: var(--bs-altpink-border-subtle);
  --bs-alert-link-color: var(--bs-altpink-text-emphasis);
}

.alert-altlight {
  --bs-alert-color: var(--bs-altlight-text-emphasis);
  --bs-alert-bg: var(--bs-altlight-bg-subtle);
  --bs-alert-border-color: var(--bs-altlight-border-subtle);
  --bs-alert-link-color: var(--bs-altlight-text-emphasis);
}

.alert-altdark {
  --bs-alert-color: var(--bs-altdark-text-emphasis);
  --bs-alert-bg: var(--bs-altdark-bg-subtle);
  --bs-alert-border-color: var(--bs-altdark-border-subtle);
  --bs-alert-link-color: var(--bs-altdark-text-emphasis);
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

.list-group-item-graydark {
  --bs-list-group-color: var(--bs-graydark-text-emphasis);
  --bs-list-group-bg: var(--bs-graydark-bg-subtle);
  --bs-list-group-border-color: var(--bs-graydark-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-graydark-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-graydark-border-subtle);
  --bs-list-group-active-color: var(--bs-graydark-bg-subtle);
  --bs-list-group-active-bg: var(--bs-graydark-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-graydark-text-emphasis);
}

.list-group-item-altyellow {
  --bs-list-group-color: var(--bs-altyellow-text-emphasis);
  --bs-list-group-bg: var(--bs-altyellow-bg-subtle);
  --bs-list-group-border-color: var(--bs-altyellow-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-altyellow-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-altyellow-border-subtle);
  --bs-list-group-active-color: var(--bs-altyellow-bg-subtle);
  --bs-list-group-active-bg: var(--bs-altyellow-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-altyellow-text-emphasis);
}

.list-group-item-altgreen {
  --bs-list-group-color: var(--bs-altgreen-text-emphasis);
  --bs-list-group-bg: var(--bs-altgreen-bg-subtle);
  --bs-list-group-border-color: var(--bs-altgreen-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-altgreen-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-altgreen-border-subtle);
  --bs-list-group-active-color: var(--bs-altgreen-bg-subtle);
  --bs-list-group-active-bg: var(--bs-altgreen-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-altgreen-text-emphasis);
}

.list-group-item-altpink {
  --bs-list-group-color: var(--bs-altpink-text-emphasis);
  --bs-list-group-bg: var(--bs-altpink-bg-subtle);
  --bs-list-group-border-color: var(--bs-altpink-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-altpink-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-altpink-border-subtle);
  --bs-list-group-active-color: var(--bs-altpink-bg-subtle);
  --bs-list-group-active-bg: var(--bs-altpink-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-altpink-text-emphasis);
}

.list-group-item-altlight {
  --bs-list-group-color: var(--bs-altlight-text-emphasis);
  --bs-list-group-bg: var(--bs-altlight-bg-subtle);
  --bs-list-group-border-color: var(--bs-altlight-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-altlight-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-altlight-border-subtle);
  --bs-list-group-active-color: var(--bs-altlight-bg-subtle);
  --bs-list-group-active-bg: var(--bs-altlight-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-altlight-text-emphasis);
}

.list-group-item-altdark {
  --bs-list-group-color: var(--bs-altdark-text-emphasis);
  --bs-list-group-bg: var(--bs-altdark-bg-subtle);
  --bs-list-group-border-color: var(--bs-altdark-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-altdark-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-altdark-border-subtle);
  --bs-list-group-active-color: var(--bs-altdark-bg-subtle);
  --bs-list-group-active-bg: var(--bs-altdark-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-altdark-text-emphasis);
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

.text-bg-graydark {
  color: #fff !important;
  background-color: RGBA(var(--bs-graydark-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-altyellow {
  color: #000 !important;
  background-color: RGBA(var(--bs-altyellow-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-altgreen {
  color: #000 !important;
  background-color: RGBA(var(--bs-altgreen-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-altpink {
  color: #fff !important;
  background-color: RGBA(var(--bs-altpink-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-altlight {
  color: #000 !important;
  background-color: RGBA(var(--bs-altlight-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-altdark {
  color: #fff !important;
  background-color: RGBA(var(--bs-altdark-rgb), var(--bs-bg-opacity, 1)) !important;
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

.link-graydark {
  color: RGBA(var(--bs-graydark-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-graydark-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-graydark:hover, .link-graydark:focus {
  color: RGBA(17, 17, 17, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(17, 17, 17, var(--bs-link-underline-opacity, 1)) !important;
}

.link-altyellow {
  color: RGBA(var(--bs-altyellow-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-altyellow-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-altyellow:hover, .link-altyellow:focus {
  color: RGBA(241, 244, 57, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(241, 244, 57, var(--bs-link-underline-opacity, 1)) !important;
}

.link-altgreen {
  color: RGBA(var(--bs-altgreen-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-altgreen-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-altgreen:hover, .link-altgreen:focus {
  color: RGBA(73, 241, 106, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(73, 241, 106, var(--bs-link-underline-opacity, 1)) !important;
}

.link-altpink {
  color: RGBA(var(--bs-altpink-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-altpink-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-altpink:hover, .link-altpink:focus {
  color: RGBA(172, 8, 129, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(172, 8, 129, var(--bs-link-underline-opacity, 1)) !important;
}

.link-altlight {
  color: RGBA(var(--bs-altlight-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-altlight-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-altlight:hover, .link-altlight:focus {
  color: RGBA(245, 239, 251, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(245, 239, 251, var(--bs-link-underline-opacity, 1)) !important;
}

.link-altdark {
  color: RGBA(var(--bs-altdark-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-altdark-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-altdark:hover, .link-altdark:focus {
  color: RGBA(66, 26, 117, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(66, 26, 117, var(--bs-link-underline-opacity, 1)) !important;
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

.focus-ring-graydark {
  --bs-focus-ring-color: rgba(var(--bs-graydark-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-altyellow {
  --bs-focus-ring-color: rgba(var(--bs-altyellow-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-altgreen {
  --bs-focus-ring-color: rgba(var(--bs-altgreen-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-altpink {
  --bs-focus-ring-color: rgba(var(--bs-altpink-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-altlight {
  --bs-focus-ring-color: rgba(var(--bs-altlight-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-altdark {
  --bs-focus-ring-color: rgba(var(--bs-altdark-rgb), var(--bs-focus-ring-opacity));
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

.border-graydark {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-graydark-rgb), var(--bs-border-opacity)) !important;
}

.border-altyellow {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-altyellow-rgb), var(--bs-border-opacity)) !important;
}

.border-altgreen {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-altgreen-rgb), var(--bs-border-opacity)) !important;
}

.border-altpink {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-altpink-rgb), var(--bs-border-opacity)) !important;
}

.border-altlight {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-altlight-rgb), var(--bs-border-opacity)) !important;
}

.border-altdark {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-altdark-rgb), var(--bs-border-opacity)) !important;
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
.text-graydark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-graydark-rgb), var(--bs-text-opacity)) !important;
}

.text-altyellow {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-altyellow-rgb), var(--bs-text-opacity)) !important;
}

.text-altgreen {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-altgreen-rgb), var(--bs-text-opacity)) !important;
}

.text-altpink {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-altpink-rgb), var(--bs-text-opacity)) !important;
}

.text-altlight {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-altlight-rgb), var(--bs-text-opacity)) !important;
}

.text-altdark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-altdark-rgb), var(--bs-text-opacity)) !important;
}

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

.link-underline-graydark {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-graydark-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-altyellow {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-altyellow-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-altgreen {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-altgreen-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-altpink {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-altpink-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-altlight {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-altlight-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-altdark {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-altdark-rgb), var(--bs-link-underline-opacity)) !important;
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

.bg-graydark {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-graydark-rgb), var(--bs-bg-opacity)) !important;
}

.bg-altyellow {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-altyellow-rgb), var(--bs-bg-opacity)) !important;
}

.bg-altgreen {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-altgreen-rgb), var(--bs-bg-opacity)) !important;
}

.bg-altpink {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-altpink-rgb), var(--bs-bg-opacity)) !important;
}

.bg-altlight {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-altlight-rgb), var(--bs-bg-opacity)) !important;
}

.bg-altdark {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-altdark-rgb), var(--bs-bg-opacity)) !important;
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
.limelight-bg {
  font-family: "Limelight", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 4rem;
}
@media (min-width: 500px) {
  .limelight-bg {
    font-size: 7rem;
  }
}

.limelight-sm {
  font-family: "Limelight", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
}
@media (min-width: 500px) {
  .limelight-sm {
    font-size: 3rem;
  }
}

.roboto-mono-regular {
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-style: normal;
  font-size: 1.5rem;
}

.navbar-nav {
  flex: 1;
  justify-content: space-around;
}

.logo {
  width: 2rem;
}

@keyframes bg-animation {
  0% {
    background-position: 0% 50%;
    background-size: 200% 100%;
  }
  50% {
    background-position: 100% 50%;
    background-size: 200% 100%;
  }
  100% {
    background-position: 0% 50%;
    background-size: 200% 100%;
  }
}
.hero {
  min-height: 100svh;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___});
  background-position: center bottom;
  background-color: #505050;
  background-blend-mode: difference;
}

.hero-title {
  background-image: linear-gradient(to right, rgb(215, 10, 161), rgb(28, 237, 69));
  background-clip: text;
  color: transparent;
  background-size: 200%;
  animation: bg-animation 5s linear infinite alternate;
  letter-spacing: 20px;
}

.hero-para {
  background-image: linear-gradient(to right, rgb(95, 70, 224), rgb(237, 241, 7));
  background-clip: text;
  color: transparent;
  background-size: 200%;
  animation: bg-animation 5s linear infinite alternate;
}

.hero-cta {
  background-color: rgba(48, 48, 48, 0.7);
}
.hero-cta__para {
  word-spacing: 5px;
  line-height: 1.5;
}

.card {
  cursor: pointer;
  transform: scale(1);
  transition: transform ease-out 0.2s;
}
.card:hover {
  transform: scale(1.05);
}

body {
  background-color: #303030;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

img {
  width: 100%;
}

.btn {
  transition-duration: 0.06s;
}`, "",{"version":3,"sources":["webpack://./src/main.scss","webpack://./node_modules/bootstrap/scss/mixins/_banner.scss","webpack://./node_modules/bootstrap/scss/_root.scss","webpack://./node_modules/bootstrap/scss/vendor/_rfs.scss","webpack://./node_modules/bootstrap/scss/mixins/_color-mode.scss","webpack://./node_modules/bootstrap/scss/_reboot.scss","webpack://./node_modules/bootstrap/scss/_variables.scss","webpack://./node_modules/bootstrap/scss/mixins/_border-radius.scss","webpack://./node_modules/bootstrap/scss/_type.scss","webpack://./node_modules/bootstrap/scss/mixins/_lists.scss","webpack://./node_modules/bootstrap/scss/_images.scss","webpack://./node_modules/bootstrap/scss/mixins/_image.scss","webpack://./node_modules/bootstrap/scss/_containers.scss","webpack://./node_modules/bootstrap/scss/mixins/_container.scss","webpack://./node_modules/bootstrap/scss/mixins/_breakpoints.scss","webpack://./node_modules/bootstrap/scss/_grid.scss","webpack://./node_modules/bootstrap/scss/mixins/_grid.scss","webpack://./node_modules/bootstrap/scss/_tables.scss","webpack://./node_modules/bootstrap/scss/mixins/_table-variants.scss","webpack://./node_modules/bootstrap/scss/forms/_labels.scss","webpack://./node_modules/bootstrap/scss/forms/_form-text.scss","webpack://./node_modules/bootstrap/scss/forms/_form-control.scss","webpack://./node_modules/bootstrap/scss/mixins/_transition.scss","webpack://./node_modules/bootstrap/scss/mixins/_gradients.scss","webpack://./node_modules/bootstrap/scss/forms/_form-select.scss","webpack://./node_modules/bootstrap/scss/forms/_form-check.scss","webpack://./node_modules/bootstrap/scss/forms/_form-range.scss","webpack://./node_modules/bootstrap/scss/forms/_floating-labels.scss","webpack://./node_modules/bootstrap/scss/forms/_input-group.scss","webpack://./node_modules/bootstrap/scss/mixins/_forms.scss","webpack://./node_modules/bootstrap/scss/_buttons.scss","webpack://./node_modules/bootstrap/scss/mixins/_buttons.scss","webpack://./node_modules/bootstrap/scss/_transitions.scss","webpack://./node_modules/bootstrap/scss/_dropdown.scss","webpack://./node_modules/bootstrap/scss/mixins/_caret.scss","webpack://./node_modules/bootstrap/scss/_button-group.scss","webpack://./node_modules/bootstrap/scss/_nav.scss","webpack://./node_modules/bootstrap/scss/_navbar.scss","webpack://./node_modules/bootstrap/scss/_card.scss","webpack://./node_modules/bootstrap/scss/_accordion.scss","webpack://./node_modules/bootstrap/scss/_breadcrumb.scss","webpack://./node_modules/bootstrap/scss/_pagination.scss","webpack://./node_modules/bootstrap/scss/mixins/_pagination.scss","webpack://./node_modules/bootstrap/scss/_badge.scss","webpack://./node_modules/bootstrap/scss/_alert.scss","webpack://./node_modules/bootstrap/scss/_progress.scss","webpack://./node_modules/bootstrap/scss/_list-group.scss","webpack://./node_modules/bootstrap/scss/_close.scss","webpack://./node_modules/bootstrap/scss/_toasts.scss","webpack://./node_modules/bootstrap/scss/_modal.scss","webpack://./node_modules/bootstrap/scss/mixins/_backdrop.scss","webpack://./node_modules/bootstrap/scss/_tooltip.scss","webpack://./node_modules/bootstrap/scss/mixins/_reset-text.scss","webpack://./node_modules/bootstrap/scss/_popover.scss","webpack://./node_modules/bootstrap/scss/_carousel.scss","webpack://./node_modules/bootstrap/scss/mixins/_clearfix.scss","webpack://./node_modules/bootstrap/scss/_spinners.scss","webpack://./node_modules/bootstrap/scss/_offcanvas.scss","webpack://./node_modules/bootstrap/scss/_placeholders.scss","webpack://./node_modules/bootstrap/scss/helpers/_color-bg.scss","webpack://./node_modules/bootstrap/scss/helpers/_colored-links.scss","webpack://./node_modules/bootstrap/scss/helpers/_focus-ring.scss","webpack://./node_modules/bootstrap/scss/helpers/_icon-link.scss","webpack://./node_modules/bootstrap/scss/helpers/_ratio.scss","webpack://./node_modules/bootstrap/scss/helpers/_position.scss","webpack://./node_modules/bootstrap/scss/helpers/_stacks.scss","webpack://./node_modules/bootstrap/scss/helpers/_visually-hidden.scss","webpack://./node_modules/bootstrap/scss/mixins/_visually-hidden.scss","webpack://./node_modules/bootstrap/scss/helpers/_stretched-link.scss","webpack://./node_modules/bootstrap/scss/helpers/_text-truncation.scss","webpack://./node_modules/bootstrap/scss/mixins/_text-truncate.scss","webpack://./node_modules/bootstrap/scss/helpers/_vr.scss","webpack://./node_modules/bootstrap/scss/mixins/_utilities.scss","webpack://./node_modules/bootstrap/scss/utilities/_api.scss","webpack://./src/sass-partials/_utils.scss","webpack://./src/sass-partials/_navbar.scss","webpack://./src/sass-partials/_hero-section.scss","webpack://./src/sass-partials/_movies-info.scss"],"names":[],"mappings":"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IA;EFuMQ,iCAAA;AHrDR;AGvGI;EE3CJ;IF8MQ,iBAAA;EHxDN;AACF;;AKlJA;EFkMQ,iCAAA;AH5CR;AGhHI;EEtCJ;IFyMQ,eAAA;EH/CN;AACF;;AKtJA;EF6LQ,+BAAA;AHnCR;AGzHI;EEjCJ;IFoMQ,kBAAA;EHtCN;AACF;;AK1JA;EFwLQ,iCAAA;AH1BR;AGlII;EE5BJ;IF+LQ,iBAAA;EH7BN;AACF;;AK9JA;EF+KM,kBALI;AHRV;;AK7JA;EF0KM,eALI;AHJV;;AKtJA;EACE,aAAA;EACA,mBCwV0B;AN/L5B;;AK/IA;EACE,iCAAA;EACA,YAAA;EACA,8BAAA;ALkJF;;AK5IA;EACE,mBAAA;EACA,kBAAA;EACA,oBAAA;AL+IF;;AKzIA;;EAEE,kBAAA;AL4IF;;AKzIA;;;EAGE,aAAA;EACA,mBAAA;AL4IF;;AKzIA;;;;EAIE,gBAAA;AL4IF;;AKzIA;EACE,gBC6b4B;ANjT9B;;AKvIA;EACE,qBAAA;EACA,cAAA;AL0IF;;AKpIA;EACE,gBAAA;ALuIF;;AK/HA;;EAEE,mBCsa4B;ANpS9B;;AK1HA;EF6EM,kBALI;AHsDV;;AKvHA;EACE,iBCqf4B;EDpf5B,gCAAA;EACA,wCAAA;AL0HF;;AKjHA;;EAEE,kBAAA;EFwDI,iBALI;EEjDR,cAAA;EACA,wBAAA;ALoHF;;AKjHA;EAAM,eAAA;ALqHN;;AKpHA;EAAM,WAAA;ALwHN;;AKnHA;EACE,gEAAA;EACA,0BCgNwC;AN1F1C;AKpHE;EACE,mDAAA;ALsHJ;;AK3GE;EAEE,cAAA;EACA,qBAAA;AL6GJ;;AKtGA;;;;EAIE,qCCgV4B;EHlUxB,cALI;AHiGV;;AKlGA;EACE,cAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EFEI,kBALI;AHyGV;AKjGE;EFHI,kBALI;EEUN,cAAA;EACA,kBAAA;ALmGJ;;AK/FA;EFVM,kBALI;EEiBR,2BAAA;EACA,qBAAA;ALkGF;AK/FE;EACE,cAAA;ALiGJ;;AK7FA;EACE,2BAAA;EFtBI,kBALI;EE6BR,wBCu5CkC;EDt5ClC,sCCu5CkC;EC5rDhC,sBAAA;APsYJ;AK9FE;EACE,UAAA;EF7BE,cALI;AHmIV;;AKtFA;EACE,gBAAA;ALyFF;;AKnFA;;EAEE,sBAAA;ALsFF;;AK9EA;EACE,oBAAA;EACA,yBAAA;ALiFF;;AK9EA;EACE,mBC4X4B;ED3X5B,sBC2X4B;ED1X5B,gCC4Z4B;ED3Z5B,gBAAA;ALiFF;;AK1EA;EAEE,mBAAA;EACA,gCAAA;AL4EF;;AKzEA;;;;;;EAME,qBAAA;EACA,mBAAA;EACA,eAAA;AL4EF;;AKpEA;EACE,qBAAA;ALuEF;;AKjEA;EAEE,gBAAA;ALmEF;;AK3DA;EACE,UAAA;AL8DF;;AKzDA;;;;;EAKE,SAAA;EACA,oBAAA;EF5HI,kBALI;EEmIR,oBAAA;AL4DF;;AKxDA;;EAEE,oBAAA;AL2DF;;AKtDA;EACE,eAAA;ALyDF;;AKtDA;EAGE,iBAAA;ALuDF;AKpDE;EACE,UAAA;ALsDJ;;AK/CA;EACE,wBAAA;ALkDF;;AK1CA;;;;EAIE,0BAAA;AL6CF;AK1CI;;;;EACE,eAAA;AL+CN;;AKxCA;EACE,UAAA;EACA,kBAAA;AL2CF;;AKtCA;EACE,gBAAA;ALyCF;;AK/BA;EACE,YAAA;EACA,UAAA;EACA,SAAA;EACA,SAAA;ALkCF;;AK1BA;EACE,WAAA;EACA,WAAA;EACA,UAAA;EACA,qBCmN4B;EHpatB,iCAAA;EEoNN,oBAAA;AL4BF;AG5YI;EEyWJ;IFtMQ,iBAAA;EH6ON;AACF;AK/BE;EACE,WAAA;ALiCJ;;AK1BA;;;;;;;EAOE,UAAA;AL6BF;;AK1BA;EACE,YAAA;AL6BF;;AKpBA;EACE,6BAAA;EACA,oBAAA;ALuBF;;AKfA;;;;;;;CAAA;AAWA;EACE,wBAAA;ALeF;;AKVA;EACE,UAAA;ALaF;;AKNA;EACE,aAAA;EACA,0BAAA;ALSF;;AKJA;EACE,qBAAA;ALOF;;AKFA;EACE,SAAA;ALKF;;AKEA;EACE,kBAAA;EACA,eAAA;ALCF;;AKOA;EACE,wBAAA;ALJF;;AKYA;EACE,wBAAA;ALTF;;AQ5jBA;ELmQM,kBALI;EK5PR,gBFwoB4B;ANzE9B;;AQ1jBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;AN7C9B;AG5dI;EKpGF;ILuQM,eAAA;EH6TN;AACF;;AQrkBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;ANlC9B;AGveI;EKpGF;ILuQM,iBAAA;EHwUN;AACF;;AQhlBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;ANvB9B;AGlfI;EKpGF;ILuQM,eAAA;EHmVN;AACF;;AQ3lBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;ANZ9B;AG7fI;EKpGF;ILuQM,iBAAA;EH8VN;AACF;;AQtmBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;AND9B;AGxgBI;EKpGF;ILuQM,eAAA;EHyWN;AACF;;AQjnBE;ELgQM,iCAAA;EK5PJ,gBFynBkB;EExnBlB,gBFwmB0B;ANU9B;AGnhBI;EKpGF;ILuQM,iBAAA;EHoXN;AACF;;AQpmBA;ECvDE,eAAA;EACA,gBAAA;AT+pBF;;AQpmBA;EC5DE,eAAA;EACA,gBAAA;AToqBF;;AQtmBA;EACE,qBAAA;ARymBF;AQvmBE;EACE,oBFsoB0B;AN7B9B;;AQ/lBA;EL8MM,kBALI;EKvMR,yBAAA;ARkmBF;;AQ9lBA;EACE,mBFiUO;EH1HH,kBALI;AHgaV;AQ/lBE;EACE,gBAAA;ARimBJ;;AQ7lBA;EACE,iBAAA;EACA,mBFuTO;EH1HH,kBALI;EKtLR,cFtFS;ANsrBX;AQ9lBE;EACE,aAAA;ARgmBJ;;AUhsBA;ECIE,eAAA;EAGA,YAAA;AX8rBF;;AU/rBA;EACE,gBJ6jDkC;EI5jDlC,mCJ6jDkC;EI5jDlC,2DAAA;EHGE,sCAAA;EIRF,eAAA;EAGA,YAAA;AXusBF;;AUzrBA;EAEE,qBAAA;AV2rBF;;AUxrBA;EACE,qBAAA;EACA,cAAA;AV2rBF;;AUxrBA;EPyPM,kBALI;EOlPR,gCJgjDkC;ANr3BpC;;AY7tBE;;;;;;;ECHA,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,6CAAA;EACA,4CAAA;EACA,kBAAA;EACA,iBAAA;Ab0uBF;;AcprBI;EF5CE;IACE,gBNkee;ENkQrB;AACF;Ac1rBI;EF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ACE,yBAAA;EACA,0BAAA;EACA,0BforB0B;EenrB1B,2BfsyBoC;EiBp4BtC,uCjBqiCgC;Eer8B9B,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,+CfgsB0B;Ee/rB1B,gBAAA;ECzFE,qID0FF;ArB4hEJ;AsBlnEM;ED0EJ;ICzEM,gBAAA;EtBqnEN;AACF;AqB9hEE;EACE,wCf47B8B;ANomClC;;AqBvhEA;EACE,cAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBfwf4B;Eevf5B,2Bf2xBsC;Ee1xBtC,6BAAA;EACA,yBAAA;EACA,sCAAA;ArB0hEF;AqBxhEE;EACE,UAAA;ArB0hEJ;AqBvhEE;EAEE,gBAAA;EACA,eAAA;ArBwhEJ;;AqB7gEA;EACE,mEf4wBsC;Ee3wBtC,uBAAA;ElByII,mBALI;EIvQN,yCAAA;APqpEJ;AqB9gEE;EACE,uBAAA;EACA,wBAAA;EACA,yBfooB0B;AN44C9B;;AqB5gEA;EACE,iEfgwBsC;Ee/vBtC,oBAAA;ElB4HI,kBALI;EIvQN,yCAAA;APiqEJ;AqB7gEE;EACE,oBAAA;EACA,qBAAA;EACA,uBf2nB0B;ANo5C9B;;AqBvgEE;EACE,oEf6uBoC;AN6xCxC;AqBvgEE;EACE,mEf0uBoC;AN+xCxC;AqBtgEE;EACE,iEfuuBoC;ANiyCxC;;AqBngEA;EACE,WfquBsC;EepuBtC,gEf8tBsC;Ee7tBtC,iBfilB4B;ANq7C9B;AqBpgEE;EACE,eAAA;ArBsgEJ;AqBngEE;EACE,oBAAA;EdvLA,sCAAA;AP6rEJ;AqBlgEE;EACE,oBAAA;Ed5LA,sCAAA;APisEJ;AqBjgEE;EAAoB,+Df8sBkB;ANszCxC;AqBngEE;EAAoB,6Df8sBkB;ANwzCxC;;AwBrtEA;EACE,gEAAA;EAEA,cAAA;EACA,WAAA;EACA,0CAAA;ErBqRI,eALI;EqB7QR,gBlB+lB4B;EkB9lB5B,gBlBsmB4B;EkBrmB5B,2BlBy3BsC;EkBx3BtC,gBAAA;EACA,mClBk3BsC;EkBj3BtC,mFAAA;EACA,4BAAA;EACA,yClB+9BkC;EkB99BlC,0BlB+9BkC;EkB99BlC,2DAAA;EjBHE,sCAAA;EeHE,wEESJ;AxBqtEF;AsB1tEM;EEfN;IFgBQ,gBAAA;EtB6tEN;AACF;AwBxtEE;EACE,qBlBs3BoC;EkBr3BpC,UAAA;EAKE,kDlBi+B4B;ANqvClC;AwBltEE;EAEE,sBlB6uB0B;EkB5uB1B,sBAAA;AxBmtEJ;AwBhtEE;EAEE,wClBu1BoC;AN03CxC;AwB5sEE;EACE,kBAAA;EACA,uCAAA;AxB8sEJ;;AwB1sEA;EACE,oBlBsuB4B;EkBruB5B,uBlBquB4B;EkBpuB5B,oBlBquB4B;EHlgBxB,mBALI;EIvQN,yCAAA;APwvEJ;;AwB1sEA;EACE,mBlBkuB4B;EkBjuB5B,sBlBiuB4B;EkBhuB5B,kBlBiuB4B;EHtgBxB,kBALI;EIvQN,yCAAA;APgwEJ;;AwBxsEI;EACE,gEAAA;AxB2sEN;;AyBnxEA;EACE,cAAA;EACA,kBnBq6BwC;EmBp6BxC,mBnBq6BwC;EmBp6BxC,uBnBq6BwC;ANi3C1C;AyBpxEE;EACE,WAAA;EACA,mBAAA;AzBsxEJ;;AyBlxEA;EACE,oBnB25BwC;EmB15BxC,eAAA;EACA,iBAAA;AzBqxEF;AyBnxEE;EACE,YAAA;EACA,oBAAA;EACA,cAAA;AzBqxEJ;;AyBjxEA;EACE,qCAAA;EAEA,cAAA;EACA,UnB04BwC;EmBz4BxC,WnBy4BwC;EmBx4BxC,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,yCAAA;EACA,+CAAA;EACA,4BAAA;EACA,2BAAA;EACA,wBAAA;EACA,2DnB24BwC;EmB14BxC,yBAAA;AzBmxEF;AyBhxEE;ElB3BE,qBAAA;AP8yEJ;AyB/wEE;EAEE,kBnBm4BsC;AN64C1C;AyB7wEE;EACE,uBnB03BsC;ANq5C1C;AyB5wEE;EACE,qBnBs1BoC;EmBr1BpC,UAAA;EACA,kDnB8foB;ANgxDxB;AyB3wEE;EACE,yBnB5BM;EmB6BN,qBnB7BM;AN0yEV;AyB3wEI;EAII,iEAAA;AzB0wER;AyBtwEI;EAII,iEAAA;AzBqwER;AyBhwEE;EACE,yBnBjDM;EmBkDN,qBnBlDM;EmBuDJ,iEAAA;AzB8vEN;AyB1vEE;EACE,oBAAA;EACA,YAAA;EACA,YnBk2BuC;AN05C3C;AyBrvEI;EACE,eAAA;EACA,YnBy1BqC;AN85C3C;;AyBzuEA;EACE,mBnBo1BgC;ANw5ClC;AyB1uEE;EACE,4DAAA;EAEA,UnB80B8B;EmB70B9B,mBAAA;EACA,0CAAA;EACA,gCAAA;ElBjHA,kBAAA;EeHE,iDGsHF;AzB2uEJ;AsB71EM;EG0GJ;IHzGM,gBAAA;EtBg2EN;AACF;AyB9uEI;EACE,4DAAA;AzBgvEN;AyB7uEI;EACE,iCnB60B4B;EmBx0B1B,4DAAA;AzB2uER;AyBtuEE;EACE,oBnBwzB8B;EmBvzB9B,eAAA;AzBwuEJ;AyBtuEI;EACE,oBAAA;EACA,cAAA;AzBwuEN;;AyBnuEA;EACE,qBAAA;EACA,kBnBsyBgC;ANg8ClC;;AyBnuEA;EACE,kBAAA;EACA,sBAAA;EACA,oBAAA;AzBsuEF;AyBluEI;EACE,oBAAA;EACA,YAAA;EACA,anBspBwB;AN8kD9B;;AyB7tEI;EACE,4DAAA;AzBguEN;;A0Bn5EA;EACE,WAAA;EACA,cAAA;EACA,UAAA;EACA,gBAAA;EACA,6BAAA;A1Bs5EF;A0Bp5EE;EACE,UAAA;A1Bs5EJ;A0Bl5EI;EAA0B,kEpB8gCa;ANu4C3C;A0Bp5EI;EAA0B,kEpB6gCa;AN04C3C;A0Bp5EE;EACE,SAAA;A1Bs5EJ;A0Bn5EE;EACE,WpB+/BuC;EoB9/BvC,YpB8/BuC;EoB7/BvC,oBAAA;EACA,gBAAA;EH1BF,yBjBkCQ;EoBNN,SpB6/BuC;EC1gCvC,mBAAA;EeHE,4GImBF;A1Bo5EJ;AsBn6EM;EIMJ;IJLM,gBAAA;EtBs6EN;AACF;A0Bv5EI;EHjCF,yBjB8hCyC;AN65C3C;A0Br5EE;EACE,WpBw+B8B;EoBv+B9B,cpBw+B8B;EoBv+B9B,kBAAA;EACA,epBu+B8B;EoBt+B9B,wCpBu+B8B;EoBt+B9B,yBAAA;EnB7BA,mBAAA;APq7EJ;A0Bn5EE;EACE,WpBo+BuC;EoBn+BvC,YpBm+BuC;EoBl+BvC,gBAAA;EHpDF,yBjBkCQ;EoBoBN,SpBm+BuC;EC1gCvC,mBAAA;EeHE,4GI6CF;A1Bo5EJ;AsB77EM;EIiCJ;IJhCM,gBAAA;EtBg8EN;AACF;A0Bv5EI;EH3DF,yBjB8hCyC;ANu7C3C;A0Br5EE;EACE,WpB88B8B;EoB78B9B,cpB88B8B;EoB78B9B,kBAAA;EACA,epB68B8B;EoB58B9B,wCpB68B8B;EoB58B9B,yBAAA;EnBvDA,mBAAA;AP+8EJ;A0Bn5EE;EACE,oBAAA;A1Bq5EJ;A0Bn5EI;EACE,2CpBg9BqC;ANq8C3C;A0Bl5EI;EACE,2CpB48BqC;ANw8C3C;;A2B3+EA;EACE,kBAAA;A3B8+EF;A2B5+EE;;;EAGE,uDrBwiCoC;EqBviCpC,2DrBuiCoC;EqBtiCpC,iBrBuiCoC;ANu8CxC;A2B3+EE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,YAAA;EACA,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gDAAA;EACA,qBAAA;ELRE,gEKSF;A3B6+EJ;AsBl/EM;EKTJ;ILUM,gBAAA;EtBq/EN;AACF;A2B/+EE;;EAEE,qBAAA;A3Bi/EJ;A2B/+EI;;EACE,kBAAA;A3Bk/EN;A2B/+EI;;;EAEE,qBrB4gCkC;EqB3gClC,wBrB4gCkC;ANs+CxC;A2B/+EI;;EACE,qBrBugCkC;EqBtgClC,wBrBugCkC;AN2+CxC;A2B9+EE;EACE,qBrBigCoC;EqBhgCpC,wBrBigCoC;AN++CxC;A2Bz+EI;;;;EACE,2CAAA;EACA,8DrB2/BkC;ANm/CxC;A2B5+EM;;;;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,arBm/BgC;EqBl/BhC,WAAA;EACA,mCrBg0BgC;ECh3BpC,sCAAA;APkiFJ;A2B3+EI;EACE,2CAAA;EACA,8DrB0+BkC;ANmgDxC;A2Bx+EI;EACE,sCAAA;A3B0+EN;A2Bt+EE;;EAEE,crB1EO;ANkjFX;A2Bt+EI;;EACE,wCrB0yBkC;AN+rDxC;;A4BhkFA;EACE,kBAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;A5BmkFF;A4BjkFE;;;EAGE,kBAAA;EACA,cAAA;EACA,SAAA;EACA,YAAA;A5BmkF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14OQ;EAOI,0BAAA;AxEu4OZ;;AwE94OQ;EAOI,gCAAA;AxE24OZ;;AwEl5OQ;EAOI,yBAAA;AxE+4OZ;;AwEt5OQ;EAOI,wBAAA;AxEm5OZ;;AwE15OQ;EAOI,+BAAA;AxEu5OZ;;AwE95OQ;EAOI,yBAAA;AxE25OZ;;AwEl6OQ;EAOI,6BAAA;AxE+5OZ;;AwEt6OQ;EAOI,8BAAA;AxEm6OZ;;AwE16OQ;EAOI,wBAAA;AxEu6OZ;;AwE96OQ;EAOI,+BAAA;AxE26OZ;;AwEl7OQ;EAOI,wBAAA;AxE+6OZ;;AwEt7OQ;EAOI,2CAAA;AxEm7OZ;;AwE17OQ;EAOI,8CAAA;AxEu7OZ;;AwE97OQ;EAOI,8CAAA;AxE27OZ;;AwEl8OQ;EAOI,2BAAA;AxE+7OZ;;AwEh9OQ;EACE,iFAAA;AxEm9OV;;AwEp9OQ;EACE,kFAAA;AxEu9OV;;AwEx9OQ;EACE,iFAAA;AxE29OV;;AwE59OQ;EACE,gFAAA;AxE+9OV;;AwEh+OQ;EACE,iFAAA;AxEm+OV;;AwEp+OQ;EACE,gFAAA;AxEu+OV;;AwEx+OQ;EACE,gFAAA;AxE2+OV;;AwE5+OQ;EACE,kFAAA;AxE++OV;;AwEh/OQ;EACE,gFAAA;AxEm/OV;;AwEp/OQ;EACE,6EAAA;AxEu/OV;;AwEx/OQ;EACE,gFAAA;AxE2/OV;;AwE5/OQ;EACE,+EAAA;AxE+/OV;;AwEhgPQ;EACE,8EAAA;AxEmgPV;;AwEpgPQ;EACE,6EAAA;AxEugPV;;AwE9/OQ;EAOI,2BAAA;AxE2/OZ;;AwElgPQ;EAOI,6BAAA;AxE+/OZ;;AwEtgPQ;EAOI,6BAAA;AxEmgPZ;;AwE1gPQ;EAOI,0BAAA;AxEugPZ;;AwE9gPQ;EAOI,2BAAA;AxE2gPZ;;AwElhPQ;EAOI,iBAAA;AxE+gPZ;;AwEthPQ;EAOI,mBAAA;AxEmhPZ;;AwE1hPQ;EAOI,oBAAA;AxEuhPZ;;AwE9hPQ;EAOI,oBAAA;AxE2hPZ;;AwEliPQ;EAOI,sBAAA;AxE+hPZ;;AwEtiPQ;EAOI,uBAAA;AxEmiPZ;;AwE1iPQ;EAOI,kBAAA;AxEuiPZ;;AwE9iPQ;EAOI,oBAAA;AxE2iPZ;;AwEljPQ;EAOI,qBAAA;AxE+iPZ;;AwEtjPQ;EAOI,mBAAA;AxEmjPZ;;AwE1jPQ;EAOI,qBAAA;AxEujPZ;;AwE9jPQ;EAOI,sBAAA;AxE2jPZ;;AwElkPQ;EAOI,2CAAA;AxE+jPZ;;AwEtkPQ;EAOI,sCAAA;AxEmkPZ;;AwE1kPQ;EAOI,sCAAA;AxEukPZ;;AwE9kPQ;EAOI,uFAAA;AxE2kPZ;;AwEllPQ;EAOI,oBAAA;AxE+kPZ;;AwEtlPQ;EAOI,2FAAA;AxEmlPZ;;AwE1lPQ;EAOI,wBAAA;AxEulPZ;;AwE9lPQ;EAOI,6FAAA;AxE2lPZ;;AwElmPQ;EAOI,0BAAA;AxE+lPZ;;AwEtmPQ;EAOI,8FAAA;AxEmmPZ;;AwE1mPQ;EAOI,2BAAA;AxEumPZ;;AwE9mPQ;EAOI,4FAAA;AxE2mPZ;;AwElnPQ;EAOI,yBAAA;AxE+mPZ;;AwEtnPQ;EAIQ,sBAAA;EAGJ,+EAAA;AxEonPZ;;AwE3nPQ;EAIQ,sBAAA;EAGJ,gFAAA;AxEynPZ;;AwEhoPQ;EAIQ,sBAAA;EAGJ,+EAAA;AxE8nPZ;;AwEroPQ;EAIQ,sBAAA;EAGJ,8EAAA;AxEmoPZ;;AwE1oPQ;EAIQ,sBAAA;EAGJ,+EAAA;AxEwoPZ;;AwE/oPQ;EAIQ,sBAAA;EAGJ,8EAAA;AxE6oPZ;;AwEppPQ;EAIQ,sBAAA;EAGJ,8EAAA;AxEkpPZ;;AwEzpPQ;EAIQ,sBAAA;EAGJ,gFAAA;AxEupPZ;;AwE9pPQ;EAIQ,sBAAA;EAGJ,8EAAA;AxE4pPZ;;AwEnqPQ;EAIQ,sBAAA;EAGJ,2EAAA;AxEiqPZ;;AwExqPQ;EAIQ,sBAAA;EAGJ,8EAAA;AxEsqPZ;;AwE7qPQ;EAIQ,sBAAA;EAGJ,6EAAA;AxE2qPZ;;AwElrPQ;EAIQ,sBAAA;EAGJ,4EAAA;AxEgrPZ;;AwEvrPQ;EAIQ,sBAAA;EAGJ,2EAAA;AxEqrPZ;;AwE5rPQ;EAIQ,sBAAA;EAGJ,4EAAA;AxE0rPZ;;AwEjsPQ;EAIQ,sBAAA;EAGJ,4EAAA;AxE+rPZ;;AwEtsPQ;EAOI,wDAAA;AxEmsPZ;;AwE1sPQ;EAOI,0DAAA;AxEusPZ;;AwE9sPQ;EAOI,wDAAA;AxE2sPZ;;AwEltPQ;EAOI,qDAAA;AxE+sPZ;;AwEttPQ;EAOI,wDAAA;AxEmtPZ;;AwE1tPQ;EAOI,uDAAA;AxEutPZ;;AwE9tPQ;EAOI,sDAAA;AxE2tPZ;;AwEluPQ;EAOI,qDAAA;AxE+tPZ;;AwEtuPQ;EAOI,4BAAA;AxEmuPZ;;AwE1uPQ;EAOI,4BAAA;AxEuuPZ;;AwE9uPQ;EAOI,4BAAA;AxE2uPZ;;AwElvPQ;EAOI,4BAAA;AxE+uPZ;;AwEtvPQ;EAOI,4BAAA;AxEmvPZ;;AwEpwPQ;EACE,wBAAA;AxEuwPV;;AwExwPQ;EACE,yBAAA;AxE2wPV;;AwE5wPQ;EACE,wBAAA;AxE+wPV;;AwEhxPQ;EACE,yBAAA;AxEmxPV;;AwEpxPQ;EACE,sBAAA;AxEuxPV;;AwE9wPQ;EAOI,qBAAA;AxE2wPZ;;AwElxPQ;EAOI,qBAAA;AxE+wPZ;;AwEtxPQ;EAOI,qBAAA;AxEmxPZ;;AwE1xPQ;EAOI,sBAAA;AxEuxPZ;;AwE9xPQ;EAOI,sBAAA;AxE2xPZ;;AwElyPQ;EAOI,0BAAA;AxE+xPZ;;AwEtyPQ;EAOI,uBAAA;AxEmyPZ;;AwE1yPQ;EAOI,2BAAA;AxEuyPZ;;AwE9yPQ;EAOI,sBAAA;AxE2yPZ;;AwElzPQ;EAOI,sBAAA;AxE+yPZ;;AwEtzPQ;EAOI,sBAAA;AxEmzPZ;;AwE1zPQ;EAOI,uBAAA;AxEuzPZ;;AwE9zPQ;EAOI,uBAAA;AxE2zPZ;;AwEl0PQ;EAOI,2BAAA;AxE+zPZ;;AwEt0PQ;EAOI,wBAAA;AxEm0PZ;;AwE10PQ;EAOI,4BAAA;AxEu0PZ;;AwE90PQ;EAOI,yBAAA;AxE20PZ;;AwEl1PQ;EAOI,8BAAA;AxE+0PZ;;AwEt1PQ;EAOI,iCAAA;AxEm1PZ;;AwE11PQ;EAOI,sCAAA;AxEu1PZ;;AwE91PQ;EAOI,yCAAA;AxE21PZ;;AwEl2PQ;EAOI,uBAAA;AxE+1PZ;;AwEt2PQ;EAOI,uBAAA;AxEm2PZ;;AwE12PQ;EAOI,yBAAA;AxEu2PZ;;AwE92PQ;EAOI,yBAAA;AxE22PZ;;AwEl3PQ;EAOI,0BAAA;AxE+2PZ;;AwEt3PQ;EAOI,4BAAA;AxEm3PZ;;AwE13PQ;EAOI,kCAAA;AxEu3PZ;;AwE93PQ;EAOI,sCAAA;AxE23PZ;;AwEl4PQ;EAO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Ei3QZ;;AwEx3QQ;EAOI,+BAAA;AxEq3QZ;;AwE53QQ;EAOI,6BAAA;AxEy3QZ;;AwEh4QQ;EAOI,iBAAA;AxE63QZ;;AwEp4QQ;EAOI,uBAAA;AxEi4QZ;;AwEx4QQ;EAOI,sBAAA;AxEq4QZ;;AwE54QQ;EAOI,oBAAA;AxEy4QZ;;AwEh5QQ;EAOI,sBAAA;AxE64QZ;;AwEp5QQ;EAOI,oBAAA;AxEi5QZ;;AwEx5QQ;EAOI,qBAAA;AxEq5QZ;;AwE55QQ;EAOI,2BAAA;AxEy5QZ;;AwEh6QQ;EAOI,0BAAA;AxE65QZ;;AwEp6QQ;EAOI,wBAAA;AxEi6QZ;;AwEx6QQ;EAOI,0BAAA;AxEq6QZ;;AwE56QQ;EAOI,wBAAA;AxEy6QZ;;AwEh7QQ;EAOI,wBAAA;AxE66QZ;;AwEp7QQ;EAOI,8BAAA;AxEi7QZ;;AwEx7QQ;EAOI,6BAAA;AxEq7QZ;;AwE57QQ;EAOI,2BAAA;AxEy7QZ;;AwEh8QQ;EAOI,6BAAA;AxE67QZ;;AwEp8QQ;EAOI,2BAAA;AxEi8QZ;;AwEx8QQ;EAOI,gDAAA;AxEq8QZ;;AwE58QQ;EAOI,4CAAA;AxEy8QZ;;AwEh9QQ;EAOI,4CAAA;AxE68QZ;;AwEp9QQ;EAOI,0CAAA;AxEi9QZ;;AwEx9QQ;EAOI,4CAAA;AxEq9QZ;;AwE59QQ;EAOI,6BAAA;AxEy9QZ;;AwEh+QQ;EAOI,0BAAA;AxE69QZ;;AwEp+QQ;EAOI,6BAAA;AxEi+QZ;;AwEx+QQ;EAOI,6BAAA;AxEq+QZ;;AwE5+QQ;EAOI,+BAAA;AxEy+QZ;;AwEh/QQ;EAOI,2BAAA;AxE6+QZ;;AwEp/QQ;EAOI,2BAAA;AxEi/QZ;;AwEx/QQ;EAOI,2BAAA;AxEq/QZ;;AwE5/QQ;EAOI,2BAAA;AxEy/QZ;;AwEhgRQ;EAOI,2BAAA;AxE6/QZ;;AwEpgRQ;EAOI,8BAAA;AxEigRZ;;AwExgRQ;EAOI,yBAAA;AxEqgRZ;;AwE5gRQ;EAOI,4BAAA;AxEygRZ;;AwEhhRQ;EAOI,2BAAA;AxE6gRZ;;AwEphRQ;EAOI,yBAAA;AxEihRZ;;AwExhRQ;EAOI,2BAAA;AxEqhRZ;;AwE5hRQ;EAOI,4BAAA;AxEyhRZ;;AwEhiRQ;EAOI,6BAA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OI,qBAAA;AxE+zSZ;;AwEt0SQ;EAOI,qBAAA;AxEm0SZ;;AwE10SQ;EAOI,qBAAA;AxEu0SZ;;AwE90SQ;EAOI,qBAAA;AxE20SZ;;Acr1SI;E0DGI;IAOI,sBAAA;ExEg1SV;EwEv1SM;IAOI,uBAAA;ExEm1SV;EwE11SM;IAOI,sBAAA;ExEs1SV;EwE71SM;IAOI,8BAAA;ExEy1SV;EwEh2SM;IAOI,4BAAA;ExE41SV;EwEn2SM;IAOI,2BAAA;ExE+1SV;EwEt2SM;IAOI,iCAAA;ExEk2SV;EwEz2SM;IAOI,2BAAA;ExEq2SV;EwE52SM;IAOI,0BAAA;ExEw2SV;EwE/2SM;IAOI,gCAAA;ExE22SV;EwEl3SM;IAOI,yBAAA;ExE82SV;EwEr3SM;IAOI,wBAAA;ExEi3SV;EwEx3SM;IAOI,+BAAA;ExEo3SV;EwE33SM;IAOI,yBAAA;ExEu3SV;EwE93SM;IAOI,6BAAA;ExE03SV;EwEj4SM;IAOI,8BAAA;ExE63SV;EwEp4SM;IAOI,wBAAA;ExEg4SV;EwEv4SM;IAOI,+BAAA;ExEm4SV;EwE14SM;IAOI,wBAAA;ExEs4SV;EwE74SM;IAOI,yBAAA;ExEy4SV;EwEh5SM;IAOI,8BAAA;ExE44SV;EwEn5SM;IAOI,iCAAA;ExE+4SV;EwEt5SM;IAOI,sCAAA;ExEk5SV;EwEz5SM;IAOI,yCAAA;ExEq5SV;EwE55SM;IAOI,uBAAA;ExEw5SV;EwE/5SM;IAOI,uBAAA;ExE25SV;EwEl6SM;IAOI,yBAAA;ExE85SV;EwEr6SM;IAOI,yBAAA;ExEi6SV;EwEx6SM;IAOI,0BAAA;ExEo6SV;EwE36SM;IAOI,4BAAA;ExEu6SV;EwE96SM;IAOI,kCAAA;ExE06SV;EwEj7SM;IAOI,sCAAA;ExE66SV;EwEp7SM;IAOI,oCAAA;ExEg7SV;EwEv7SM;IAOI,kCAAA;ExEm7SV;EwE17SM;IAOI,yCAAA;ExEs7SV;EwE77SM;IAOI,wCAAA;ExEy7SV;EwEh8SM;IAOI,wCAAA;ExE47SV;EwEn8SM;IAOI,kCAAA;ExE+7SV;EwEt8SM;IAOI,gCAAA;ExEk8SV;EwEz8SM;IAOI,8BAAA;ExEq8SV;EwE58SM;IAOI,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M;IAOI,0BAAA;ExEm1TV;EwE11TM;IAOI,wBAAA;ExEs1TV;EwE71TM;IAOI,wBAAA;ExEy1TV;EwEh2TM;IAOI,8BAAA;ExE41TV;EwEn2TM;IAOI,6BAAA;ExE+1TV;EwEt2TM;IAOI,2BAAA;ExEk2TV;EwEz2TM;IAOI,6BAAA;ExEq2TV;EwE52TM;IAOI,2BAAA;ExEw2TV;EwE/2TM;IAOI,2BAAA;ExE22TV;EwEl3TM;IAOI,4BAAA;ExE82TV;EwEr3TM;IAOI,6BAAA;ExEi3TV;AACF;Ac53TI;E0DGI;IAOI,sBAAA;ExEs3TV;EwE73TM;IAOI,uBAAA;ExEy3TV;EwEh4TM;IAOI,sBAAA;ExE43TV;EwEn4TM;IAOI,8BAAA;ExE+3TV;EwEt4TM;IAOI,4BAAA;ExEk4TV;EwEz4TM;IAOI,2BAAA;ExEq4TV;EwE54TM;IAOI,iCAAA;ExEw4TV;EwE/4TM;IAOI,2BAAA;ExE24TV;EwEl5TM;IAOI,0BAAA;ExE84TV;EwEr5TM;IAOI,gCAAA;ExEi5TV;EwEx5TM;IAOI,yBAAA;ExEo5TV;EwE35TM;IAOI,wBAAA;ExEu5TV;EwE95TM;IAOI,+BAAA;ExE05TV;EwEj6TM;IAOI,yBAAA;ExE65TV;EwEp6TM;IAOI,6BAAA;ExEg6TV;EwEv6TM;IAOI,8BAAA;ExEm6TV;EwE16TM;IAOI,wBAAA;ExEs6TV;EwE76TM;IAOI,+BAAA;ExEy6TV;EwEh7TM;IAOI,wBAAA;ExE46TV;EwEn7TM;IAOI,yBAAA;ExE+6TV;EwEt7TM;IAOI,8BAAA;ExEk7TV;EwEz7TM;IAOI,iCAAA;ExEq7TV;EwE57TM;IAOI,sCAAA;ExEw7TV;EwE/7TM;IAOI,yCAAA;ExE27TV;EwEl8TM;IAOI,uBAAA;ExE87TV;EwEr8TM;IAOI,uBAAA;ExEi8TV;EwEx8TM;IAOI,yBAAA;ExEo8TV;EwE38TM;IAOI,yBAAA;ExEu8TV;EwE98TM;IAOI,0BAAA;ExE08TV;EwEj9TM;IAOI,4BAAA;ExE68TV;EwEp9TM;IAOI,kCAAA;ExEg9TV;EwEv9TM;IAOI,sCAAA;ExEm9TV;EwE19TM;IAOI,oCAAA;ExEs9TV;EwE79TM;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wEx2UM;IAOI,oBAAA;ExEo2UV;EwE32UM;IAOI,sBAAA;ExEu2UV;EwE92UM;IAOI,oBAAA;ExE02UV;EwEj3UM;IAOI,qBAAA;ExE62UV;EwEp3UM;IAOI,2BAAA;ExEg3UV;EwEv3UM;IAOI,0BAAA;ExEm3UV;EwE13UM;IAOI,wBAAA;ExEs3UV;EwE73UM;IAOI,0BAAA;ExEy3UV;EwEh4UM;IAOI,wBAAA;ExE43UV;EwEn4UM;IAOI,wBAAA;ExE+3UV;EwEt4UM;IAOI,8BAAA;ExEk4UV;EwEz4UM;IAOI,6BAAA;ExEq4UV;EwE54UM;IAOI,2BAAA;ExEw4UV;EwE/4UM;IAOI,6BAAA;ExE24UV;EwEl5UM;IAOI,2BAAA;ExE84UV;EwEr5UM;IAOI,2BAAA;ExEi5UV;EwEx5UM;IAOI,4BAAA;ExEo5UV;EwE35UM;IAOI,6BAAA;ExEu5UV;AACF;Acl6UI;E0DGI;IAOI,sBAAA;ExE45UV;EwEn6UM;IAOI,uBAAA;ExE+5UV;EwEt6UM;IAOI,sBAAA;ExEk6UV;EwEz6UM;IAOI,8BAAA;ExEq6UV;EwE56UM;IAOI,4BAAA;ExEw6UV;EwE/6UM;IAOI,2BAAA;ExE26UV;EwEl7UM;IAOI,iCAAA;ExE86UV;EwEr7UM;IAOI,2BAAA;ExEi7UV;EwEx7UM;IAOI,0BAAA;ExEo7UV;EwE37UM;IAOI,gCAAA;ExEu7UV;EwE97UM;IAOI,yBAAA;ExE07UV;EwEj8UM;IAOI,wBAAA;ExE67UV;EwEp8UM;IAOI,+BAAA;ExEg8UV;EwEv8UM;IAOI,yBAAA;ExEm8UV;EwE18UM;IAOI,6BAAA;ExEs8UV;EwE78UM;IAOI,8BAAA;ExEy8UV;EwEh9UM;IAOI,wBAAA;ExE48UV;EwEn9UM;IAOI,+BAAA;ExE+8UV;EwEt9UM;IAOI,wBAAA;ExEk9UV;EwEz9UM;IAOI,yBAAA;ExEq9UV;EwE59UM;IAOI,8BAAA;ExEw9UV;EwE/9UM;IAOI,iCAAA;ExE29UV;EwEl+UM;IAOI,sCAAA;ExE89UV;EwEr+UM;IAOI,yCAAA;ExEi+UV;EwEx+UM;IAOI,uBAAA;ExEo+UV;EwE3+UM;IAOI,uBAAA;ExEu+UV;EwE9+UM;IAOI,yBAAA;ExE0+UV;EwEj/UM;IAOI,yBAAA;ExE6+UV;EwEp/UM;IAOI,0BAAA;ExEg/UV;EwEv/UM;IAOI,4BAAA;ExEm/UV;EwE1/UM;IAOI,kCAAA;ExEs/UV;EwE7/UM;IAOI,sCAAA;ExEy/UV;EwEhgVM;IAOI,oCAAA;ExE4/UV;EwEngVM;IAOI,kCAAA;ExE+/UV;EwEtgVM;IAOI,yCAAA;ExEkgVV;EwEzgVM;IAOI,wCAAA;ExEqgVV;EwE5gVM;IAOI,wCAAA;ExEwgVV;EwE/gVM;IAOI,kCAAA;ExE2gVV;EwElhVM;IAOI,gCAAA;ExE8gVV;EwErhVM;IAOI,8BAAA;ExEihVV;EwExhVM;IAOI,gCAAA;ExEohVV;EwE3hVM;IAOI,+BAAA;ExEuhVV;EwE9hVM;IAOI,oCAAA;ExE0hVV;EwEjiVM;IAOI,kCAAA;ExE6hVV;EwEpiVM;IAOI,gCAAA;ExEgiVV;EwEviVM;IAOI,uCAAA;ExEmiVV;EwE1iVM;IAOI,sCAAA;ExEsiVV;EwE7iVM;IAOI,iCAAA;ExEyiVV;EwEhjVM;IAOI,2BAAA;ExE4iVV;EwEnjVM;IAOI,iCAAA;ExE+iVV;EwEtjVM;IAOI,+BAAA;ExEkjVV;EwEzjVM;IAOI,6BAAA;ExEqjVV;EwE5jVM;IAOI,+BAAA;ExEwjVV;EwE/jVM;IAOI,8BAAA;ExE2jVV;EwElkVM;IAOI,oBAAA;ExE8jVV;EwErkVM;IAOI,mBAAA;ExEikVV;EwExkVM;IAOI,mBAAA;ExEokVV;EwE3kVM;IAOI,mBAAA;ExEukVV;EwE9kVM;IAOI,mBAAA;ExE0kVV;EwEjlVM;IAOI,mBAAA;ExE6kVV;EwEplVM;IAOI,mBAAA;ExEglVV;EwEvlVM;IAOI,mBAAA;ExEmlVV;EwE1lVM;IAOI,oBAAA;ExEslVV;EwE7lVM;IAOI,0BAAA;ExEylVV;EwEhmVM;IAOI,yBAAA;ExE4lVV;EwEnmVM;IAOI,uBAAA;ExE+lVV;EwEtmVM;IAOI,yBAAA;ExEkmVV;EwEzmVM;IAOI,uBAAA;ExEqmVV;EwE5mVM;IAOI,uBAAA;ExEwmVV;EwE/mVM;IAOI,0BAAA;IAAA,yBAAA;ExE4mVV;EwEnnVM;IAOI,gCAAA;IAAA,+BAAA;ExEgnVV;EwEvnVM;IAOI,+BAAA;IAAA,8BAAA;ExEonVV;EwE3nVM;IAOI,6BAAA;IAAA,4BAAA;ExEwnVV;EwE/nVM;IAOI,+BAAA;IAAA,8BAAA;ExE4nVV;EwEnoVM;IAOI,6BAAA;IAAA,4BAAA;ExEgoVV;EwEvoVM;IAOI,6BAAA;IAAA,4BAAA;ExEooVV;EwE3oVM;IAOI,wBAAA;IAAA,2BAAA;ExEwoVV;EwE/oVM;IAOI,8BAAA;IAAA,iCAAA;ExE4oVV;EwEnpVM;IAOI,6BAAA;IAAA,gCAAA;ExEgpVV;EwEvpVM;IAOI,2BAAA;IAAA,8BAAA;ExEopVV;EwE3pVM;IAOI,6BAAA;IAAA,gCAAA;ExEwpVV;EwE/pVM;IAOI,2BAAA;IAAA,8BAAA;ExE4pVV;EwEnqVM;IAOI,2BAAA;IAAA,8BAAA;ExEgqVV;EwEvqVM;IAOI,wBAAA;ExEmqVV;EwE1qVM;IAOI,8BAAA;ExEsqVV;EwE7qVM;IAOI,6BAAA;ExEyqVV;EwEhrVM;IAOI,2BAAA;ExE4qVV;EwEnrVM;IAOI,6BAAA;ExE+qVV;EwEtrVM;IAOI,2BAAA;ExEkrVV;EwEzrVM;IAOI,2BAAA;ExEqrVV;EwE5rVM;IAOI,0BAAA;ExEwrVV;EwE/rVM;IAOI,gCAAA;ExE2rVV;EwElsVM;IAOI,+BAAA;ExE8rVV;EwErsVM;IAOI,6BAAA;ExEisVV;EwExsVM;IAOI,+BAAA;ExEosVV;EwE3sVM;IAOI,6BAAA;ExEusVV;EwE9sVM;IAOI,6BAAA;ExE0sVV;EwEjtVM;IAOI,2BAAA;ExE6sVV;EwEptVM;IAOI,iCAAA;ExEgtVV;EwEvtVM;IAOI,gCAAA;ExEmtVV;EwE1tVM;IAOI,8BAAA;ExEstVV;EwE7tVM;IAOI,gCAAA;ExEytVV;EwEhuVM;IAOI,8BAAA;ExE4tVV;EwEnuVM;IAOI,8BAAA;ExE+tVV;EwEtuVM;IAOI,yBAAA;ExEkuVV;EwEzuVM;IAOI,+BAAA;ExEquVV;EwE5uVM;IAOI,8BAAA;ExEwuVV;EwE/uVM;IAOI,4BAAA;ExE2uVV;EwElvVM;IAOI,8BAAA;ExE8uVV;EwErvVM;IAOI,4BAAA;ExEivVV;EwExvVM;IAOI,4BAAA;ExEovVV;EwE3vVM;IAOI,qBAAA;ExEuvVV;EwE9vVM;IAOI,2BAAA;ExE0vVV;EwEjwVM;IAOI,0BAAA;ExE6vVV;EwEpwVM;IAOI,wBAAA;ExEgwVV;EwEvwVM;IAOI,0BAAA;ExEmwVV;EwE1wVM;IAOI,wBAAA;ExEswVV;EwE7wVM;IAOI,2BAAA;IAAA,0BAAA;ExE0wVV;EwEjxVM;IAOI,iCAAA;IAAA,gCAAA;ExE8wVV;EwErxVM;IAOI,gCAAA;IAAA,+BAAA;ExEkxVV;EwEzxVM;IAOI,8BAAA;IAAA,6BAAA;ExEsxVV;EwE7xVM;IAOI,gCAAA;IAAA,+BAAA;ExE0xVV;EwEjyVM;IAOI,8BAAA;IAAA,6BAAA;ExE8xVV;EwEryVM;IAOI,yBAAA;IAAA,4BAAA;ExEkyVV;EwEzyVM;IAOI,+BAAA;IAAA,kCAAA;ExEsyVV;EwE7yVM;IAOI,8BAAA;IAAA,iCAAA;ExE0yVV;EwEjzVM;IAOI,4BAAA;IAAA,+BAAA;ExE8yVV;EwErzVM;IAOI,8BAAA;IAAA,iCAAA;ExEkzVV;EwEzzVM;IAOI,4BAAA;IAAA,+BAAA;ExEszVV;EwE7zVM;IAOI,yBAAA;ExEyzVV;EwEh0VM;IAOI,+BAAA;ExE4zVV;EwEn0VM;IAOI,8BAAA;ExE+zVV;EwEt0VM;IAOI,4BAAA;ExEk0VV;EwEz0VM;IAOI,8BAAA;ExEq0VV;EwE50VM;IAOI,4BAAA;ExEw0VV;EwE/0VM;IAOI,2BAAA;ExE20VV;EwEl1VM;IAOI,iCAAA;ExE80VV;EwEr1VM;IAOI,gCAAA;ExEi1VV;EwEx1VM;IAOI,8BAAA;ExEo1VV;EwE31VM;IAOI,gCAAA;ExEu1VV;EwE91VM;IAOI,8BAAA;ExE01VV;EwEj2VM;IAOI,4BAAA;ExE61VV;EwEp2VM;IAOI,kCAAA;ExEg2VV;EwEv2VM;IAOI,iCAAA;ExEm2VV;EwE12VM;IAOI,+BAAA;ExEs2VV;EwE72VM;IAOI,iCAAA;ExEy2VV;EwEh3VM;IAOI,+BAAA;ExE42VV;EwEn3VM;IAOI,0BAAA;ExE+2VV;EwEt3VM;IAOI,gCAAA;ExEk3VV;EwEz3VM;IAOI,+BAAA;ExEq3VV;EwE53VM;IAOI,6BAAA;ExEw3VV;EwE/3VM;IAOI,+BAAA;ExE23VV;EwEl4VM;IAOI,6BAAA;ExE83VV;EwEr4VM;IAOI,iBAAA;ExEi4VV;EwEx4VM;IAOI,uBAAA;ExEo4VV;EwE34VM;IAOI,sBAAA;ExEu4VV;EwE94VM;IAOI,oBAAA;ExE04VV;EwEj5VM;IAOI,sBAAA;ExE64VV;EwEp5VM;IAOI,oBAAA;ExEg5VV;EwEv5VM;IAOI,qBAAA;ExEm5VV;EwE15VM;IAOI,2BAAA;ExEs5VV;EwE75VM;IAOI,0BAAA;ExEy5VV;EwEh6VM;IAOI,wBAAA;ExE45VV;EwEn6VM;IAOI,0BAAA;ExE+5VV;EwEt6VM;IAOI,wBAAA;ExEk6VV;EwEz6VM;IAOI,wBAAA;ExEq6VV;EwE56VM;IAOI,8BAAA;ExEw6VV;EwE/6VM;IAOI,6BAAA;ExE26VV;EwEl7VM;IAOI,2BAAA;ExE86VV;EwEr7VM;IAOI,6BAAA;ExEi7VV;EwEx7VM;IAOI,2BAAA;ExEo7VV;EwE37VM;IAOI,2BAAA;ExEu7VV;EwE97VM;IAOI,4BAAA;ExE07VV;EwEj8VM;IAOI,6BAAA;ExE67VV;AACF;Acx8VI;E0DGI;IAOI,sBAAA;ExEk8VV;EwEz8VM;IAOI,uBAAA;ExEq8VV;EwE58VM;IAOI,sBAAA;ExEw8VV;EwE/8VM;IAOI,8BAAA;ExE28VV;EwEl9VM;IAOI,4BAAA;ExE88VV;EwEr9VM;IAOI,2BAAA;ExEi9VV;EwEx9VM;IAOI,iCAAA;ExEo9VV;EwE39VM;IAOI,2BAAA;ExEu9VV;EwE99VM;IAOI,0BAAA;ExE09VV;EwEj+VM;IAOI,gCAAA;ExE69VV;EwEp+VM;IAOI,yBAAA;ExEg+VV;EwEv+VM;IAOI,wBAAA;ExEm+VV;EwE1+VM;IAOI,+BAAA;ExEs+VV;EwE7+VM;IAOI,yBAAA;ExEy+VV;EwEh/VM;IAOI,6BAAA;ExE4+VV;EwEn/VM;IAOI,8BAAA;ExE++VV;EwEt/VM;IAOI,wBAAA;ExEk/VV;EwEz/VM;IAOI,+BAAA;ExEq/VV;EwE5/VM;IAOI,wBAAA;ExEw/VV;EwE//VM;IAOI,yBAAA;ExE2/VV;EwElgWM;IAOI,8BAAA;ExE8/VV;EwErgWM;IAOI,iCAAA;ExEigWV;EwExgWM;IAOI,sCAAA;ExEogWV;EwE3gWM;IAOI,yCAAA;ExEugWV;EwE9gWM;IAOI,uBAAA;ExE0gWV;EwEjhWM;IAOI,uBAAA;ExE6gWV;EwEphWM;IAOI,yBAAA;ExEghWV;EwEvhWM;IAOI,yBAAA;ExEmhWV;EwE1hWM;IAOI,0BAAA;ExEshWV;EwE7hWM;IAOI,4BAAA;ExEyhWV;EwEhiWM;IAOI,kCAAA;ExE4hWV;EwEniWM;IAOI,sCAAA;ExE+hWV;EwEtiWM;IAOI,oCAAA;ExEkiWV;EwEziWM;IAOI,kCAAA;ExEqiWV;EwE5iWM;IAOI,yCAAA;ExEwiWV;EwE/iWM;IAOI,wCAAA;ExE2iWV;EwEljWM;IAOI,wCAAA;ExE8iWV;EwErjWM;IAOI,kCAAA;ExEijWV;EwExjWM;IAOI,gCAAA;ExEojWV;EwE3jWM;IAOI,8BAAA;ExEujWV;EwE9jWM;IAOI,gCAAA;ExE0jWV;EwEjkWM;IAOI,+BAAA;ExE6jWV;EwEpkWM;IAOI,oCAAA;ExEgkWV;EwEvkWM;IAOI,kCAAA;ExEmkWV;EwE1kWM;IAOI,gCAAA;ExEskWV;EwE7kWM;IAOI,uCAAA;ExEykWV;EwEhlWM;IAOI,sCAAA;ExE4kWV;EwEnlWM;IAOI,iCAAA;ExE+kWV;EwEtlWM;IAOI,2BAAA;ExEklWV;EwEzlWM;IAOI,iCAAA;ExEqlWV;EwE5lWM;IAOI,+BAAA;ExEwlWV;EwE/lWM;IAOI,6BAAA;ExE2lWV;EwElmWM;IAOI,+BAAA;ExE8lWV;EwErmWM;IAOI,8BAAA;ExEimWV;EwExmWM;IAOI,oBAAA;ExEomWV;EwE3mWM;IAOI,mBAAA;ExEumWV;EwE9mWM;IAOI,mBAAA;ExE0mWV;EwEjnWM;IAOI,mBAAA;ExE6mWV;EwEpnWM;IAOI,mBAAA;ExEgnWV;EwEvnWM;IAOI,mBAAA;ExEmnWV;EwE1nWM;IAOI,mBAAA;ExEsnWV;EwE7nWM;IAOI,mBAAA;ExEynWV;EwEhoWM;IAOI,oBAAA;ExE4nWV;EwEnoWM;IA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;ExEm4WV;EwE14WM;IAOI,kCAAA;ExEs4WV;EwE74WM;IAOI,iCAAA;ExEy4WV;EwEh5WM;IAOI,+BAAA;ExE44WV;EwEn5WM;IAOI,iCAAA;ExE+4WV;EwEt5WM;IAOI,+BAAA;ExEk5WV;EwEz5WM;IAOI,0BAAA;ExEq5WV;EwE55WM;IAOI,gCAAA;ExEw5WV;EwE/5WM;IAOI,+BAAA;ExE25WV;EwEl6WM;IAOI,6BAAA;ExE85WV;EwEr6WM;IAOI,+BAAA;ExEi6WV;EwEx6WM;IAOI,6BAAA;ExEo6WV;EwE36WM;IAOI,iBAAA;ExEu6WV;EwE96WM;IAOI,uBAAA;ExE06WV;EwEj7WM;IAOI,sBAAA;ExE66WV;EwEp7WM;IAOI,oBAAA;ExEg7WV;EwEv7WM;IAOI,sBAAA;ExEm7WV;EwE17WM;IAOI,oBAAA;ExEs7WV;EwE77WM;IAOI,qBAAA;ExEy7WV;EwEh8WM;IAOI,2BAAA;ExE47WV;EwEn8WM;IAOI,0BAAA;ExE+7WV;EwEt8WM;IAOI,wBAAA;ExEk8WV;EwEz8WM;IAOI,0BAAA;ExEq8WV;EwE58WM;IAOI,wBAAA;ExEw8WV;EwE/8WM;IAOI,wBAAA;ExE28WV;EwEl9WM;IAOI,8BAAA;ExE88WV;EwEr9WM;IAOI,6BAAA;ExEi9WV;EwEx9WM;IAOI,2BAAA;ExEo9WV;EwE39WM;IAOI,6BAAA;ExEu9WV;EwE99WM;IAOI,2BAAA;ExE09WV;EwEj+WM;IAOI,2BAAA;ExE69WV;EwEp+WM;IAOI,4BAAA;ExEg+WV;EwEv+WM;IAOI,6BAAA;ExEm+WV;AACF;Ac9+WI;E0DGI;IAOI,sBAAA;ExEw+WV;EwE/+WM;IAOI,uBAAA;ExE2+WV;EwEl/WM;IAOI,sBAAA;ExE8+WV;EwEr/WM;IAOI,8BAAA;ExEi/WV;EwEx/WM;IAOI,4BAAA;ExEo/WV;EwE3/WM;IAOI,2BAAA;ExEu/WV;EwE9/WM;IAOI,iCAAA;ExE0/WV;EwEjgXM;IAOI,2BAAA;ExE6/WV;EwEpgXM;IAOI,0BAAA;ExEggXV;EwEvgXM;IAOI,gCAAA;ExEmgXV;EwE1gXM;IAOI,yBAAA;ExEsgXV;EwE7gXM;IAOI,wBAAA;ExEygXV;EwEhhXM;IAOI,+BAAA;ExE4gXV;EwEnhXM;IAOI,yBAAA;ExE+gXV;EwEthXM;IAOI,6BAAA;ExEkhXV;EwEzhXM;IAOI,8BAAA;ExEqhXV;EwE5hXM;IAOI,wBAAA;ExEwhXV;EwE/hXM;IAOI,+BAAA;ExE2hXV;EwEliXM;IAOI,wBAAA;ExE8hXV;EwEriXM;IAOI,yBAAA;ExEiiXV;EwExiXM;IAOI,8BAAA;ExEoiXV;EwE3iXM;IAOI,iCAAA;ExEuiXV;EwE9iXM;IAOI,sCAAA;ExE0iXV;EwEjjXM;IAOI,yCAAA;ExE6iXV;EwEpjXM;IAOI,uBAAA;ExEgjXV;EwEvjXM;IAOI,uBAAA;ExEmjXV;EwE1jXM;IAOI,yBAAA;ExEsjXV;EwE7jXM;IAOI,yBAAA;ExEyjXV;EwEhkXM;IAOI,0BAAA;ExE4jXV;EwEnkXM;IAOI,4BAAA;ExE+jXV;EwEtkXM;IAOI,kCAAA;ExEkkXV;EwEzkXM;IAOI,sCAAA;ExEqkXV;EwE5kXM;IAOI,oCAAA;ExEwkXV;EwE/kXM;IAOI,kCAAA;ExE2kXV;EwEllXM;IAOI,yCAAA;ExE8kXV;EwErlXM;IAOI,wCAAA;ExEilXV;EwExlXM;IAOI,wCAAA;ExEolXV;EwE3lXM;IAOI,kCAAA;ExEulXV;EwE9lXM;IAOI,gCAAA;ExE0lXV;EwEjmXM;IAOI,8BAAA;ExE6lXV;EwEpmXM;IAOI,gCAAA;ExEgmXV;EwEvmXM;IAOI,+BAAA;ExEmmXV;EwE1mXM;IAOI,oCAAA;ExEsmXV;EwE7mXM;IAOI,kCAAA;ExEymXV;EwEhnXM;IAOI,gCAAA;ExE4mXV;EwEnnXM;IAOI,uCAAA;ExE+mXV;EwEtnXM;IAOI,sCAAA;ExEknXV;EwEznXM;IAOI,iCAAA;ExEqnXV;EwE5nXM;IAOI,2BAAA;ExEwnXV;EwE/nXM;IAOI,iCAAA;ExE2nXV;EwEloXM;IAOI,+BAAA;ExE8nXV;EwEroXM;IAOI,6BAAA;ExEioXV;EwExoXM;IAOI,+BAAA;ExEooXV;EwE3oXM;IAOI,8BAAA;ExEuoXV;EwE9oXM;IAOI,oBAAA;ExE0oXV;EwEjpXM;IAOI,mBAAA;ExE6oXV;EwEpp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4BAAA;ExEo5XV;EwE35XM;IAOI,2BAAA;ExEu5XV;EwE95XM;IAOI,iCAAA;ExE05XV;EwEj6XM;IAOI,gCAAA;ExE65XV;EwEp6XM;IAOI,8BAAA;ExEg6XV;EwEv6XM;IAOI,gCAAA;ExEm6XV;EwE16XM;IAOI,8BAAA;ExEs6XV;EwE76XM;IAOI,4BAAA;ExEy6XV;EwEh7XM;IAOI,kCAAA;ExE46XV;EwEn7XM;IAOI,iCAAA;ExE+6XV;EwEt7XM;IAOI,+BAAA;ExEk7XV;EwEz7XM;IAOI,iCAAA;ExEq7XV;EwE57XM;IAOI,+BAAA;ExEw7XV;EwE/7XM;IAOI,0BAAA;ExE27XV;EwEl8XM;IAOI,gCAAA;ExE87XV;EwEr8XM;IAOI,+BAAA;ExEi8XV;EwEx8XM;IAOI,6BAAA;ExEo8XV;EwE38XM;IAOI,+BAAA;ExEu8XV;EwE98XM;IAOI,6BAAA;ExE08XV;EwEj9XM;IAOI,iBAAA;ExE68XV;EwEp9XM;IAOI,uBAAA;ExEg9XV;EwEv9XM;IAOI,sBAAA;ExEm9XV;EwE19XM;IAOI,oBAAA;ExEs9XV;EwE79XM;IAOI,sBAAA;ExEy9XV;EwEh+XM;IAOI,oBAAA;ExE49XV;EwEn+XM;IAOI,qBAAA;ExE+9XV;EwEt+XM;IAOI,2BAAA;ExEk+XV;EwEz+XM;IAOI,0BAAA;ExEq+XV;EwE5+XM;IAOI,wBAAA;ExEw+XV;EwE/+XM;IAOI,0BAAA;ExE2+XV;EwEl/XM;IAOI,wBAAA;ExE8+XV;EwEr/XM;IAOI,wBAAA;ExEi/XV;EwEx/XM;IAOI,8BAAA;ExEo/XV;EwE3/XM;IAOI,6BAAA;ExEu/XV;EwE9/XM;IAOI,2BAAA;ExE0/XV;EwEjgYM;IAOI,6BAAA;ExE6/XV;EwEpgYM;IAOI,2BAAA;ExEggYV;EwEvgYM;IAOI,2BAAA;ExEmgYV;EwE1gYM;IAOI,4BAAA;ExEsgYV;EwE7gYM;IAOI,6BAAA;ExEygYV;AACF;AyEhkYA;ED+CQ;IAOI,4BAAA;ExE8gYV;EwErhYM;IAOI,0BAAA;ExEihYV;EwExhYM;IAOI,6BAAA;ExEohYV;EwE3hYM;IAOI,4BAAA;ExEuhYV;AACF;AyE3jYA;ED4BQ;IAOI,0BAAA;ExE4hYV;EwEniYM;IAOI,gCAAA;ExE+hYV;EwEtiYM;IAOI,yBAAA;ExEkiYV;EwEziYM;IAOI,wBAAA;ExEqiYV;EwE5iYM;IAOI,+BAAA;ExEwiYV;EwE/iYM;IAOI,yBAAA;ExE2iYV;EwEljYM;IAOI,6BAAA;ExE8iYV;EwErjYM;IAOI,8BAAA;ExEijYV;EwExjYM;IAOI,wBAAA;ExEojYV;EwE3jYM;IAOI,+BAAA;ExEujYV;EwE9jYM;IAOI,wBAAA;ExE0jYV;AACF;A0EloYA;EACI,oCAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;A1EooYJ;A0EloYI;EANJ;IAOM,eAAA;E1EqoYJ;AACF;;A0EloYE;EACE,oCAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;A1EqoYJ;A0EnoYM;EANJ;IAOM,eAAA;E1EsoYN;AACF;;A0E/nYA;EACI,qCAAA;EAEA,gBAAA;EACA,kBAAA;EACA,iBAAA;A1EioYJ;;A2EhqYI;EACI,OAAA;EACA,6BAAA;A3EmqYR;;A2EhqYI;EACI,WAAA;A3EmqYR;;A4E1qYA;EACI;IACI,2BAAA;IACA,0BAAA;E5E6qYN;E4E3qYE;IACI,6BAAA;IACA,0BAAA;E5E6qYN;E4E3qYE;IACI,2BAAA;IACA,0BAAA;E5E6qYN;AACF;A4EzqYA;EACI,kBAAA;EACA,0DAAA;EACA,kCAAA;EACA,yBAAA;EACA,iCAAA;A5E2qYJ;;A4EtqYA;EAEI,gFAAA;EACA,qBAAA;EACA,kBAAA;EACA,qBAAA;EACA,oDAAA;EACA,oBAAA;A5EwqYJ;;A4ErqYA;EACI,+EAAA;EACA,qBAAA;EACA,kBAAA;EACA,qBAAA;EACA,oDAAA;A5EwqYJ;;A4ErqYA;EACI,uCAAA;A5EwqYJ;A4EtqYI;EACI,iBAAA;EACA,gBAAA;A5EwqYR;;A6ExtYA;EACI,eAAA;EACA,mBAAA;EACA,mCAAA;A7E2tYJ;A6E1tYI;EACI,sBAAA;A7E4tYR;;AA/tYA;EACI,yBAAA;EACA,WAAA;EACA,iCAAA;EACA,gBAAA;AAkuYJ;;AA9tYA;EACI,WAAA;AAiuYJ;;AA9tYA;EACI,0BAAA;AAiuYJ","sourcesContent":["@use './sass-partials/forward';\r\n\r\n\r\n\r\nbody{\r\n    background-color: #303030;\r\n    color: #fff;\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-weight: 400;\r\n}\r\n\r\n\r\nimg {\r\n    width: 100%;\r\n}\r\n\r\n.btn {\r\n    transition-duration: 0.06s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// //*header - navbar\r\n\r\n// .header {\r\n//     background-color: #252525;\r\n// }\r\n\r\n// .brand__logo {\r\n//     font-family: \"Limelight\", sans-serif;\r\n//     font-weight: 400;\r\n//     font-size: 4rem;\r\n//     text-align: center;\r\n//     //*mask effect\r\n//     background-image: linear-gradient(to right, rgb(95, 70, 224), rgb(237, 241, 7));\r\n//     background-clip: text;\r\n//     color: transparent;\r\n//     background-size: 200%;\r\n//     animation: bg-animation 4s linear infinite alternate;   \r\n// }\r\n\r\n// @keyframes bg-animation {\r\n//     0% {\r\n//         background-position: 0% 50%;\r\n//         background-size: 200% 100%;\r\n//     }\r\n//     50% {\r\n//         background-position: 100% 50%;\r\n//         background-size: 200% 100%;\r\n//     }\r\n//     100% {\r\n//         background-position: 0% 50%;\r\n//         background-size: 200% 100%;\r\n//     }\r\n// }\r\n\r\n// .log-line{\r\n//     text-align: center;\r\n// }\r\n\r\n// ul[role=\"list\"] {\r\n//     display: flex;\r\n//     align-items: center;\r\n//     gap: 1.5rem;\r\n// }\r\n\r\n// .nav-link {\r\n//     font-family: \"Roboto Mono\", monospace;\r\n//     font-optical-sizing: auto;\r\n//     font-style: normal;\r\n//     font-size: 1.5rem;\r\n\r\n//     &:hover {\r\n//         opacity: 0.7;\r\n//     }\r\n// }\r\n\r\n","@mixin bsBanner($file) {\n  /*!\n   * Bootstrap #{$file} v5.3.2 (https://getbootstrap.com/)\n   * Copyright 2011-2023 The Bootstrap Authors\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   */\n}\n",":root,\n[data-bs-theme=\"light\"] {\n  // Note: Custom variable values only support SassScript inside `#{}`.\n\n  // Colors\n  //\n  // Generate palettes for full colors, grays, and theme colors.\n\n  @each $color, $value in $colors {\n    --#{$prefix}#{$color}: #{$value};\n  }\n\n  @each $color, $value in $grays {\n    --#{$prefix}gray-#{$color}: #{$value};\n  }\n\n  @each $color, $value in $theme-colors {\n    --#{$prefix}#{$color}: #{$value};\n  }\n\n  @each $color, $value in $theme-colors-rgb {\n    --#{$prefix}#{$color}-rgb: #{$value};\n  }\n\n  @each $color, $value in $theme-colors-text {\n    --#{$prefix}#{$color}-text-emphasis: #{$value};\n  }\n\n  @each $color, $value in $theme-colors-bg-subtle {\n    --#{$prefix}#{$color}-bg-subtle: #{$value};\n  }\n\n  @each $color, $value in $theme-colors-border-subtle {\n    --#{$prefix}#{$color}-border-subtle: #{$value};\n  }\n\n  --#{$prefix}white-rgb: #{to-rgb($white)};\n  --#{$prefix}black-rgb: #{to-rgb($black)};\n\n  // Fonts\n\n  // Note: Use `inspect` for lists so that quoted items keep the quotes.\n  // See https://github.com/sass/sass/issues/2383#issuecomment-336349172\n  --#{$prefix}font-sans-serif: #{inspect($font-family-sans-serif)};\n  --#{$prefix}font-monospace: #{inspect($font-family-monospace)};\n  --#{$prefix}gradient: #{$gradient};\n\n  // Root and body\n  // scss-docs-start root-body-variables\n  @if $font-size-root != null {\n    --#{$prefix}root-font-size: #{$font-size-root};\n  }\n  --#{$prefix}body-font-family: #{inspect($font-family-base)};\n  @include rfs($font-size-base, --#{$prefix}body-font-size);\n  --#{$prefix}body-font-weight: #{$font-weight-base};\n  --#{$prefix}body-line-height: #{$line-height-base};\n  @if $body-text-align != null {\n    --#{$prefix}body-text-align: #{$body-text-align};\n  }\n\n  --#{$prefix}body-color: #{$body-color};\n  --#{$prefix}body-color-rgb: #{to-rgb($body-color)};\n  --#{$prefix}body-bg: #{$body-bg};\n  --#{$prefix}body-bg-rgb: #{to-rgb($body-bg)};\n\n  --#{$prefix}emphasis-color: #{$body-emphasis-color};\n  --#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color)};\n\n  --#{$prefix}secondary-color: #{$body-secondary-color};\n  --#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color)};\n  --#{$prefix}secondary-bg: #{$body-secondary-bg};\n  --#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg)};\n\n  --#{$prefix}tertiary-color: #{$body-tertiary-color};\n  --#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color)};\n  --#{$prefix}tertiary-bg: #{$body-tertiary-bg};\n  --#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg)};\n  // scss-docs-end root-body-variables\n\n  --#{$prefix}heading-color: #{$headings-color};\n\n  --#{$prefix}link-color: #{$link-color};\n  --#{$prefix}link-color-rgb: #{to-rgb($link-color)};\n  --#{$prefix}link-decoration: #{$link-decoration};\n\n  --#{$prefix}link-hover-color: #{$link-hover-color};\n  --#{$prefix}link-hover-color-rgb: #{to-rgb($link-hover-color)};\n\n  @if $link-hover-decoration != null {\n    --#{$prefix}link-hover-decoration: #{$link-hover-decoration};\n  }\n\n  --#{$prefix}code-color: #{$code-color};\n  --#{$prefix}highlight-color: #{$mark-color};\n  --#{$prefix}highlight-bg: #{$mark-bg};\n\n  // scss-docs-start root-border-var\n  --#{$prefix}border-width: #{$border-width};\n  --#{$prefix}border-style: #{$border-style};\n  --#{$prefix}border-color: #{$border-color};\n  --#{$prefix}border-color-translucent: #{$border-color-translucent};\n\n  --#{$prefix}border-radius: #{$border-radius};\n  --#{$prefix}border-radius-sm: #{$border-radius-sm};\n  --#{$prefix}border-radius-lg: #{$border-radius-lg};\n  --#{$prefix}border-radius-xl: #{$border-radius-xl};\n  --#{$prefix}border-radius-xxl: #{$border-radius-xxl};\n  --#{$prefix}border-radius-2xl: var(--#{$prefix}border-radius-xxl); // Deprecated in v5.3.0 for consistency\n  --#{$prefix}border-radius-pill: #{$border-radius-pill};\n  // scss-docs-end root-border-var\n\n  --#{$prefix}box-shadow: #{$box-shadow};\n  --#{$prefix}box-shadow-sm: #{$box-shadow-sm};\n  --#{$prefix}box-shadow-lg: #{$box-shadow-lg};\n  --#{$prefix}box-shadow-inset: #{$box-shadow-inset};\n\n  // Focus styles\n  // scss-docs-start root-focus-variables\n  --#{$prefix}focus-ring-width: #{$focus-ring-width};\n  --#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};\n  --#{$prefix}focus-ring-color: #{$focus-ring-color};\n  // scss-docs-end root-focus-variables\n\n  // scss-docs-start root-form-validation-variables\n  --#{$prefix}form-valid-color: #{$form-valid-color};\n  --#{$prefix}form-valid-border-color: #{$form-valid-border-color};\n  --#{$prefix}form-invalid-color: #{$form-invalid-color};\n  --#{$prefix}form-invalid-border-color: #{$form-invalid-border-color};\n  // scss-docs-end root-form-validation-variables\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark, true) {\n    color-scheme: dark;\n\n    // scss-docs-start root-dark-mode-vars\n    --#{$prefix}body-color: #{$body-color-dark};\n    --#{$prefix}body-color-rgb: #{to-rgb($body-color-dark)};\n    --#{$prefix}body-bg: #{$body-bg-dark};\n    --#{$prefix}body-bg-rgb: #{to-rgb($body-bg-dark)};\n\n    --#{$prefix}emphasis-color: #{$body-emphasis-color-dark};\n    --#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color-dark)};\n\n    --#{$prefix}secondary-color: #{$body-secondary-color-dark};\n    --#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color-dark)};\n    --#{$prefix}secondary-bg: #{$body-secondary-bg-dark};\n    --#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg-dark)};\n\n    --#{$prefix}tertiary-color: #{$body-tertiary-color-dark};\n    --#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color-dark)};\n    --#{$prefix}tertiary-bg: #{$body-tertiary-bg-dark};\n    --#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg-dark)};\n\n    @each $color, $value in $theme-colors-text-dark {\n      --#{$prefix}#{$color}-text-emphasis: #{$value};\n    }\n\n    @each $color, $value in $theme-colors-bg-subtle-dark {\n      --#{$prefix}#{$color}-bg-subtle: #{$value};\n    }\n\n    @each $color, $value in $theme-colors-border-subtle-dark {\n      --#{$prefix}#{$color}-border-subtle: #{$value};\n    }\n\n    --#{$prefix}heading-color: #{$headings-color-dark};\n\n    --#{$prefix}link-color: #{$link-color-dark};\n    --#{$prefix}link-hover-color: #{$link-hover-color-dark};\n    --#{$prefix}link-color-rgb: #{to-rgb($link-color-dark)};\n    --#{$prefix}link-hover-color-rgb: #{to-rgb($link-hover-color-dark)};\n\n    --#{$prefix}code-color: #{$code-color-dark};\n    --#{$prefix}highlight-color: #{$mark-color-dark};\n    --#{$prefix}highlight-bg: #{$mark-bg-dark};\n\n    --#{$prefix}border-color: #{$border-color-dark};\n    --#{$prefix}border-color-translucent: #{$border-color-translucent-dark};\n\n    --#{$prefix}form-valid-color: #{$form-valid-color-dark};\n    --#{$prefix}form-valid-border-color: #{$form-valid-border-color-dark};\n    --#{$prefix}form-invalid-color: #{$form-invalid-color-dark};\n    --#{$prefix}form-invalid-border-color: #{$form-invalid-border-color-dark};\n    // scss-docs-end root-dark-mode-vars\n  }\n}\n","// stylelint-disable scss/dimension-no-non-numeric-values\n\n// SCSS RFS mixin\n//\n// Automated responsive values for font sizes, paddings, margins and much more\n//\n// Licensed under MIT (https://github.com/twbs/rfs/blob/main/LICENSE)\n\n// Configuration\n\n// Base value\n$rfs-base-value: 1.25rem !default;\n$rfs-unit: rem !default;\n\n@if $rfs-unit != rem and $rfs-unit != px {\n  @error \"`#{$rfs-unit}` is not a valid unit for $rfs-unit. Use `px` or `rem`.\";\n}\n\n// Breakpoint at where values start decreasing if screen width is smaller\n$rfs-breakpoint: 1200px !default;\n$rfs-breakpoint-unit: px !default;\n\n@if $rfs-breakpoint-unit != px and $rfs-breakpoint-unit != em and $rfs-breakpoint-unit != rem {\n  @error \"`#{$rfs-breakpoint-unit}` is not a valid unit for $rfs-breakpoint-unit. Use `px`, `em` or `rem`.\";\n}\n\n// Resize values based on screen height and width\n$rfs-two-dimensional: false !default;\n\n// Factor of decrease\n$rfs-factor: 10 !default;\n\n@if type-of($rfs-factor) != number or $rfs-factor <= 1 {\n  @error \"`#{$rfs-factor}` is not a valid  $rfs-factor, it must be greater than 1.\";\n}\n\n// Mode. Possibilities: \"min-media-query\", \"max-media-query\"\n$rfs-mode: min-media-query !default;\n\n// Generate enable or disable classes. Possibilities: false, \"enable\" or \"disable\"\n$rfs-class: false !default;\n\n// 1 rem = $rfs-rem-value px\n$rfs-rem-value: 16 !default;\n\n// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14\n$rfs-safari-iframe-resize-bug-fix: false !default;\n\n// Disable RFS by setting $enable-rfs to false\n$enable-rfs: true !default;\n\n// Cache $rfs-base-value unit\n$rfs-base-value-unit: unit($rfs-base-value);\n\n@function divide($dividend, $divisor, $precision: 10) {\n  $sign: if($dividend > 0 and $divisor > 0 or $dividend < 0 and $divisor < 0, 1, -1);\n  $dividend: abs($dividend);\n  $divisor: abs($divisor);\n  @if $dividend == 0 {\n    @return 0;\n  }\n  @if $divisor == 0 {\n    @error \"Cannot divide by 0\";\n  }\n  $remainder: $dividend;\n  $result: 0;\n  $factor: 10;\n  @while ($remainder > 0 and $precision >= 0) {\n    $quotient: 0;\n    @while ($remainder >= $divisor) {\n      $remainder: $remainder - $divisor;\n      $quotient: $quotient + 1;\n    }\n    $result: $result * 10 + $quotient;\n    $factor: $factor * .1;\n    $remainder: $remainder * 10;\n    $precision: $precision - 1;\n    @if ($precision < 0 and $remainder >= $divisor * 5) {\n      $result: $result + 1;\n    }\n  }\n  $result: $result * $factor * $sign;\n  $dividend-unit: unit($dividend);\n  $divisor-unit: unit($divisor);\n  $unit-map: (\n    \"px\": 1px,\n    \"rem\": 1rem,\n    \"em\": 1em,\n    \"%\": 1%\n  );\n  @if ($dividend-unit != $divisor-unit and map-has-key($unit-map, $dividend-unit)) {\n    $result: $result * map-get($unit-map, $dividend-unit);\n  }\n  @return $result;\n}\n\n// Remove px-unit from $rfs-base-value for calculations\n@if $rfs-base-value-unit == px {\n  $rfs-base-value: divide($rfs-base-value, $rfs-base-value * 0 + 1);\n}\n@else if $rfs-base-value-unit == rem {\n  $rfs-base-value: divide($rfs-base-value, divide($rfs-base-value * 0 + 1, $rfs-rem-value));\n}\n\n// Cache $rfs-breakpoint unit to prevent multiple calls\n$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);\n\n// Remove unit from $rfs-breakpoint for calculations\n@if $rfs-breakpoint-unit-cache == px {\n  $rfs-breakpoint: divide($rfs-breakpoint, $rfs-breakpoint * 0 + 1);\n}\n@else if $rfs-breakpoint-unit-cache == rem or $rfs-breakpoint-unit-cache == \"em\" {\n  $rfs-breakpoint: divide($rfs-breakpoint, divide($rfs-breakpoint * 0 + 1, $rfs-rem-value));\n}\n\n// Calculate the media query value\n$rfs-mq-value: if($rfs-breakpoint-unit == px, #{$rfs-breakpoint}px, #{divide($rfs-breakpoint, $rfs-rem-value)}#{$rfs-breakpoint-unit});\n$rfs-mq-property-width: if($rfs-mode == max-media-query, max-width, min-width);\n$rfs-mq-property-height: if($rfs-mode == max-media-query, max-height, min-height);\n\n// Internal mixin used to determine which media query needs to be used\n@mixin _rfs-media-query {\n  @if $rfs-two-dimensional {\n    @if $rfs-mode == max-media-query {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}), (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n    @else {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) and (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n  }\n  @else {\n    @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) {\n      @content;\n    }\n  }\n}\n\n// Internal mixin that adds disable classes to the selector if needed.\n@mixin _rfs-rule {\n  @if $rfs-class == disable and $rfs-mode == max-media-query {\n    // Adding an extra class increases specificity, which prevents the media query to override the property\n    &,\n    .disable-rfs &,\n    &.disable-rfs {\n      @content;\n    }\n  }\n  @else if $rfs-class == enable and $rfs-mode == min-media-query {\n    .enable-rfs &,\n    &.enable-rfs {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Internal mixin that adds enable classes to the selector if needed.\n@mixin _rfs-media-query-rule {\n\n  @if $rfs-class == enable {\n    @if $rfs-mode == min-media-query {\n      @content;\n    }\n\n    @include _rfs-media-query () {\n      .enable-rfs &,\n      &.enable-rfs {\n        @content;\n      }\n    }\n  }\n  @else {\n    @if $rfs-class == disable and $rfs-mode == min-media-query {\n      .disable-rfs &,\n      &.disable-rfs {\n        @content;\n      }\n    }\n    @include _rfs-media-query () {\n      @content;\n    }\n  }\n}\n\n// Helper function to get the formatted non-responsive value\n@function rfs-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: \"\";\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + \" 0\";\n    }\n    @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == \"number\", unit($value), false);\n\n      @if $unit == px {\n        // Convert to rem if needed\n        $val: $val + \" \" + if($rfs-unit == rem, #{divide($value, $value * 0 + $rfs-rem-value)}rem, $value);\n      }\n      @else if $unit == rem {\n        // Convert to px if needed\n        $val: $val + \" \" + if($rfs-unit == px, #{divide($value, $value * 0 + 1) * $rfs-rem-value}px, $value);\n      } @else {\n        // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n        $val: $val + \" \" + $value;\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// Helper function to get the responsive value calculated by RFS\n@function rfs-fluid-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: \"\";\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + \" 0\";\n    } @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == \"number\", unit($value), false);\n\n      // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n      @if not $unit or $unit != px and $unit != rem {\n        $val: $val + \" \" + $value;\n      } @else {\n        // Remove unit from $value for calculations\n        $value: divide($value, $value * 0 + if($unit == px, 1, divide(1, $rfs-rem-value)));\n\n        // Only add the media query if the value is greater than the minimum value\n        @if abs($value) <= $rfs-base-value or not $enable-rfs {\n          $val: $val + \" \" + if($rfs-unit == rem, #{divide($value, $rfs-rem-value)}rem, #{$value}px);\n        }\n        @else {\n          // Calculate the minimum value\n          $value-min: $rfs-base-value + divide(abs($value) - $rfs-base-value, $rfs-factor);\n\n          // Calculate difference between $value and the minimum value\n          $value-diff: abs($value) - $value-min;\n\n          // Base value formatting\n          $min-width: if($rfs-unit == rem, #{divide($value-min, $rfs-rem-value)}rem, #{$value-min}px);\n\n          // Use negative value if needed\n          $min-width: if($value < 0, -$min-width, $min-width);\n\n          // Use `vmin` if two-dimensional is enabled\n          $variable-unit: if($rfs-two-dimensional, vmin, vw);\n\n          // Calculate the variable width between 0 and $rfs-breakpoint\n          $variable-width: #{divide($value-diff * 100, $rfs-breakpoint)}#{$variable-unit};\n\n          // Return the calculated value\n          $val: $val + \" calc(\" + $min-width + if($value < 0, \" - \", \" + \") + $variable-width + \")\";\n        }\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// RFS mixin\n@mixin rfs($values, $property: font-size) {\n  @if $values != null {\n    $val: rfs-value($values);\n    $fluid-val: rfs-fluid-value($values);\n\n    // Do not print the media query if responsive & non-responsive values are the same\n    @if $val == $fluid-val {\n      #{$property}: $val;\n    }\n    @else {\n      @include _rfs-rule () {\n        #{$property}: if($rfs-mode == max-media-query, $val, $fluid-val);\n\n        // Include safari iframe resize fix if needed\n        min-width: if($rfs-safari-iframe-resize-bug-fix, (0 * 1vw), null);\n      }\n\n      @include _rfs-media-query-rule () {\n        #{$property}: if($rfs-mode == max-media-query, $fluid-val, $val);\n      }\n    }\n  }\n}\n\n// Shorthand helper mixins\n@mixin font-size($value) {\n  @include rfs($value);\n}\n\n@mixin padding($value) {\n  @include rfs($value, padding);\n}\n\n@mixin padding-top($value) {\n  @include rfs($value, padding-top);\n}\n\n@mixin padding-right($value) {\n  @include rfs($value, padding-right);\n}\n\n@mixin padding-bottom($value) {\n  @include rfs($value, padding-bottom);\n}\n\n@mixin padding-left($value) {\n  @include rfs($value, padding-left);\n}\n\n@mixin margin($value) {\n  @include rfs($value, margin);\n}\n\n@mixin margin-top($value) {\n  @include rfs($value, margin-top);\n}\n\n@mixin margin-right($value) {\n  @include rfs($value, margin-right);\n}\n\n@mixin margin-bottom($value) {\n  @include rfs($value, margin-bottom);\n}\n\n@mixin margin-left($value) {\n  @include rfs($value, margin-left);\n}\n","// scss-docs-start color-mode-mixin\n@mixin color-mode($mode: light, $root: false) {\n  @if $color-mode-type == \"media-query\" {\n    @if $root == true {\n      @media (prefers-color-scheme: $mode) {\n        :root {\n          @content;\n        }\n      }\n    } @else {\n      @media (prefers-color-scheme: $mode) {\n        @content;\n      }\n    }\n  } @else {\n    [data-bs-theme=\"#{$mode}\"] {\n      @content;\n    }\n  }\n}\n// scss-docs-end color-mode-mixin\n","// stylelint-disable declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix\n\n\n// Reboot\n//\n// Normalization of HTML elements, manually forked from Normalize.css to remove\n// styles targeting irrelevant browsers while applying new styles.\n//\n// Normalize is licensed MIT. https://github.com/necolas/normalize.css\n\n\n// Document\n//\n// Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n\n// Root\n//\n// Ability to the value of the root font sizes, affecting the value of `rem`.\n// null by default, thus nothing is generated.\n\n:root {\n  @if $font-size-root != null {\n    @include font-size(var(--#{$prefix}root-font-size));\n  }\n\n  @if $enable-smooth-scroll {\n    @media (prefers-reduced-motion: no-preference) {\n      scroll-behavior: smooth;\n    }\n  }\n}\n\n\n// Body\n//\n// 1. Remove the margin in all browsers.\n// 2. As a best practice, apply a default `background-color`.\n// 3. Prevent adjustments of font size after orientation changes in iOS.\n// 4. Change the default tap highlight to be completely transparent in iOS.\n\n// scss-docs-start reboot-body-rules\nbody {\n  margin: 0; // 1\n  font-family: var(--#{$prefix}body-font-family);\n  @include font-size(var(--#{$prefix}body-font-size));\n  font-weight: var(--#{$prefix}body-font-weight);\n  line-height: var(--#{$prefix}body-line-height);\n  color: var(--#{$prefix}body-color);\n  text-align: var(--#{$prefix}body-text-align);\n  background-color: var(--#{$prefix}body-bg); // 2\n  -webkit-text-size-adjust: 100%; // 3\n  -webkit-tap-highlight-color: rgba($black, 0); // 4\n}\n// scss-docs-end reboot-body-rules\n\n\n// Content grouping\n//\n// 1. Reset Firefox's gray color\n\nhr {\n  margin: $hr-margin-y 0;\n  color: $hr-color; // 1\n  border: 0;\n  border-top: $hr-border-width solid $hr-border-color;\n  opacity: $hr-opacity;\n}\n\n\n// Typography\n//\n// 1. Remove top margins from headings\n//    By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top\n//    margin for easier control within type scales as it avoids margin collapsing.\n\n%heading {\n  margin-top: 0; // 1\n  margin-bottom: $headings-margin-bottom;\n  font-family: $headings-font-family;\n  font-style: $headings-font-style;\n  font-weight: $headings-font-weight;\n  line-height: $headings-line-height;\n  color: var(--#{$prefix}heading-color);\n}\n\nh1 {\n  @extend %heading;\n  @include font-size($h1-font-size);\n}\n\nh2 {\n  @extend %heading;\n  @include font-size($h2-font-size);\n}\n\nh3 {\n  @extend %heading;\n  @include font-size($h3-font-size);\n}\n\nh4 {\n  @extend %heading;\n  @include font-size($h4-font-size);\n}\n\nh5 {\n  @extend %heading;\n  @include font-size($h5-font-size);\n}\n\nh6 {\n  @extend %heading;\n  @include font-size($h6-font-size);\n}\n\n\n// Reset margins on paragraphs\n//\n// Similarly, the top margin on `<p>`s get reset. However, we also reset the\n// bottom margin to use `rem` units instead of `em`.\n\np {\n  margin-top: 0;\n  margin-bottom: $paragraph-margin-bottom;\n}\n\n\n// Abbreviations\n//\n// 1. Add the correct text decoration in Chrome, Edge, Opera, and Safari.\n// 2. Add explicit cursor to indicate changed behavior.\n// 3. Prevent the text-decoration to be skipped.\n\nabbr[title] {\n  text-decoration: underline dotted; // 1\n  cursor: help; // 2\n  text-decoration-skip-ink: none; // 3\n}\n\n\n// Address\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\n\n// Lists\n\nol,\nul {\n  padding-left: 2rem;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: $dt-font-weight;\n}\n\n// 1. Undo browser default\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; // 1\n}\n\n\n// Blockquote\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\n\n// Strong\n//\n// Add the correct font weight in Chrome, Edge, and Safari\n\nb,\nstrong {\n  font-weight: $font-weight-bolder;\n}\n\n\n// Small\n//\n// Add the correct font size in all browsers\n\nsmall {\n  @include font-size($small-font-size);\n}\n\n\n// Mark\n\nmark {\n  padding: $mark-padding;\n  color: var(--#{$prefix}highlight-color);\n  background-color: var(--#{$prefix}highlight-bg);\n}\n\n\n// Sub and Sup\n//\n// Prevent `sub` and `sup` elements from affecting the line height in\n// all browsers.\n\nsub,\nsup {\n  position: relative;\n  @include font-size($sub-sup-font-size);\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub { bottom: -.25em; }\nsup { top: -.5em; }\n\n\n// Links\n\na {\n  color: rgba(var(--#{$prefix}link-color-rgb), var(--#{$prefix}link-opacity, 1));\n  text-decoration: $link-decoration;\n\n  &:hover {\n    --#{$prefix}link-color-rgb: var(--#{$prefix}link-hover-color-rgb);\n    text-decoration: $link-hover-decoration;\n  }\n}\n\n// And undo these styles for placeholder links/named anchors (without href).\n// It would be more straightforward to just use a[href] in previous block, but that\n// causes specificity issues in many other styles that are too complex to fix.\n// See https://github.com/twbs/bootstrap/issues/19402\n\na:not([href]):not([class]) {\n  &,\n  &:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n}\n\n\n// Code\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: $font-family-code;\n  @include font-size(1em); // Correct the odd `em` font sizing in all browsers.\n}\n\n// 1. Remove browser default top margin\n// 2. Reset browser default of `1em` to use `rem`s\n// 3. Don't allow content to break outside\n\npre {\n  display: block;\n  margin-top: 0; // 1\n  margin-bottom: 1rem; // 2\n  overflow: auto; // 3\n  @include font-size($code-font-size);\n  color: $pre-color;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    @include font-size(inherit);\n    color: inherit;\n    word-break: normal;\n  }\n}\n\ncode {\n  @include font-size($code-font-size);\n  color: var(--#{$prefix}code-color);\n  word-wrap: break-word;\n\n  // Streamline the style when inside anchors to avoid broken underline and more\n  a > & {\n    color: inherit;\n  }\n}\n\nkbd {\n  padding: $kbd-padding-y $kbd-padding-x;\n  @include font-size($kbd-font-size);\n  color: $kbd-color;\n  background-color: $kbd-bg;\n  @include border-radius($border-radius-sm);\n\n  kbd {\n    padding: 0;\n    @include font-size(1em);\n    font-weight: $nested-kbd-font-weight;\n  }\n}\n\n\n// Figures\n//\n// Apply a consistent margin strategy (matches our type styles).\n\nfigure {\n  margin: 0 0 1rem;\n}\n\n\n// Images and content\n\nimg,\nsvg {\n  vertical-align: middle;\n}\n\n\n// Tables\n//\n// Prevent double borders\n\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: $table-cell-padding-y;\n  padding-bottom: $table-cell-padding-y;\n  color: $table-caption-color;\n  text-align: left;\n}\n\n// 1. Removes font-weight bold by inheriting\n// 2. Matches default `<td>` alignment by inheriting `text-align`.\n// 3. Fix alignment for Safari\n\nth {\n  font-weight: $table-th-font-weight; // 1\n  text-align: inherit; // 2\n  text-align: -webkit-match-parent; // 3\n}\n\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n\n// Forms\n//\n// 1. Allow labels to use `margin` for spacing.\n\nlabel {\n  display: inline-block; // 1\n}\n\n// Remove the default `border-radius` that macOS Chrome adds.\n// See https://github.com/twbs/bootstrap/issues/24093\n\nbutton {\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 0;\n}\n\n// Explicitly remove focus outline in Chromium when it shouldn't be\n// visible (e.g. as result of mouse click or touch tap). It already\n// should be doing this automatically, but seems to currently be\n// confused and applies its very visible two-tone outline anyway.\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\n// 1. Remove the margin in Firefox and Safari\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0; // 1\n  font-family: inherit;\n  @include font-size(inherit);\n  line-height: inherit;\n}\n\n// Remove the inheritance of text transform in Firefox\nbutton,\nselect {\n  text-transform: none;\n}\n// Set the cursor for non-`<button>` buttons\n//\n// Details at https://github.com/twbs/bootstrap/pull/30562\n[role=\"button\"] {\n  cursor: pointer;\n}\n\nselect {\n  // Remove the inheritance of word-wrap in Safari.\n  // See https://github.com/twbs/bootstrap/issues/24990\n  word-wrap: normal;\n\n  // Undo the opacity change from Chrome\n  &:disabled {\n    opacity: 1;\n  }\n}\n\n// Remove the dropdown arrow only from text type inputs built with datalists in Chrome.\n// See https://stackoverflow.com/a/54997118\n\n[list]:not([type=\"date\"]):not([type=\"datetime-local\"]):not([type=\"month\"]):not([type=\"week\"]):not([type=\"time\"])::-webkit-calendar-picker-indicator {\n  display: none !important;\n}\n\n// 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n//    controls in Android 4.\n// 2. Correct the inability to style clickable types in iOS and Safari.\n// 3. Opinionated: add \"hand\" cursor to non-disabled button elements.\n\nbutton,\n[type=\"button\"], // 1\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n\n  @if $enable-button-pointers {\n    &:not(:disabled) {\n      cursor: pointer; // 3\n    }\n  }\n}\n\n// Remove inner border and padding from Firefox, but don't restore the outline like Normalize.\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n// 1. Textareas should really only resize vertically so they don't break their (horizontal) containers.\n\ntextarea {\n  resize: vertical; // 1\n}\n\n// 1. Browsers set a default `min-width: min-content;` on fieldsets,\n//    unlike e.g. `<div>`s, which have `min-width: 0;` by default.\n//    So we reset that to ensure fieldsets behave more like a standard block element.\n//    See https://github.com/twbs/bootstrap/issues/12359\n//    and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n// 2. Reset the default outline behavior of fieldsets so they don't affect page layout.\n\nfieldset {\n  min-width: 0; // 1\n  padding: 0; // 2\n  margin: 0; // 2\n  border: 0; // 2\n}\n\n// 1. By using `float: left`, the legend will behave like a block element.\n//    This way the border of a fieldset wraps around the legend if present.\n// 2. Fix wrapping bug.\n//    See https://github.com/twbs/bootstrap/issues/29712\n\nlegend {\n  float: left; // 1\n  width: 100%;\n  padding: 0;\n  margin-bottom: $legend-margin-bottom;\n  @include font-size($legend-font-size);\n  font-weight: $legend-font-weight;\n  line-height: inherit;\n\n  + * {\n    clear: left; // 2\n  }\n}\n\n// Fix height of inputs with a type of datetime-local, date, month, week, or time\n// See https://github.com/twbs/bootstrap/issues/18842\n\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n\n::-webkit-inner-spin-button {\n  height: auto;\n}\n\n// 1. This overrides the extra rounded corners on search inputs in iOS so that our\n//    `.form-control` class can properly style them. Note that this cannot simply\n//    be added to `.form-control` as it's not specific enough. For details, see\n//    https://github.com/twbs/bootstrap/issues/11586.\n// 2. Correct the outline style in Safari.\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; // 1\n  outline-offset: -2px; // 2\n}\n\n// 1. A few input types should stay LTR\n// See https://rtlstyling.com/posts/rtl-styling#form-inputs\n// 2. RTL only output\n// See https://rtlcss.com/learn/usage-guide/control-directives/#raw\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n\n// Remove the inner padding in Chrome and Safari on macOS.\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n// Remove padding around color pickers in webkit browsers\n\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n\n// 1. Inherit font family and line height for file input buttons\n// 2. Correct the inability to style clickable types in iOS and Safari.\n\n::file-selector-button {\n  font: inherit; // 1\n  -webkit-appearance: button; // 2\n}\n\n// Correct element displays\n\noutput {\n  display: inline-block;\n}\n\n// Remove border from iframe\n\niframe {\n  border: 0;\n}\n\n// Summary\n//\n// 1. Add the correct display in all browsers\n\nsummary {\n  display: list-item; // 1\n  cursor: pointer;\n}\n\n\n// Progress\n//\n// Add the correct vertical alignment in Chrome, Firefox, and Opera.\n\nprogress {\n  vertical-align: baseline;\n}\n\n\n// Hidden attribute\n//\n// Always hide an element with the `hidden` HTML attribute.\n\n[hidden] {\n  display: none !important;\n}\n","// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n// Color system\n\n// scss-docs-start gray-color-variables\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n// scss-docs-end gray-color-variables\n\n// fusv-disable\n// scss-docs-start gray-colors-map\n$grays: (\n  \"100\": $gray-100,\n  \"200\": $gray-200,\n  \"300\": $gray-300,\n  \"400\": $gray-400,\n  \"500\": $gray-500,\n  \"600\": $gray-600,\n  \"700\": $gray-700,\n  \"800\": $gray-800,\n  \"900\": $gray-900\n) !default;\n// scss-docs-end gray-colors-map\n// fusv-enable\n\n// scss-docs-start color-variables\n$blue:    #0d6efd !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #d63384 !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #198754 !default;\n$teal:    #20c997 !default;\n$cyan:    #0dcaf0 !default;\n// scss-docs-end color-variables\n\n// scss-docs-start colors-map\n$colors: (\n  \"blue\":       $blue,\n  \"indigo\":     $indigo,\n  \"purple\":     $purple,\n  \"pink\":       $pink,\n  \"red\":        $red,\n  \"orange\":     $orange,\n  \"yellow\":     $yellow,\n  \"green\":      $green,\n  \"teal\":       $teal,\n  \"cyan\":       $cyan,\n  \"black\":      $black,\n  \"white\":      $white,\n  \"gray\":       $gray-600,\n  \"gray-dark\":  $gray-800\n) !default;\n// scss-docs-end colors-map\n\n// The contrast ratio to reach against white, to determine if color changes from \"light\" to \"dark\". Acceptable values for WCAG 2.0 are 3, 4.5 and 7.\n// See https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast\n$min-contrast-ratio:   4.5 !default;\n\n// Customize the light and dark text colors for use in our color contrast function.\n$color-contrast-dark:      $black !default;\n$color-contrast-light:     $white !default;\n\n// fusv-disable\n$blue-100: tint-color($blue, 80%) !default;\n$blue-200: tint-color($blue, 60%) !default;\n$blue-300: tint-color($blue, 40%) !default;\n$blue-400: tint-color($blue, 20%) !default;\n$blue-500: $blue !default;\n$blue-600: shade-color($blue, 20%) !default;\n$blue-700: shade-color($blue, 40%) !default;\n$blue-800: shade-color($blue, 60%) !default;\n$blue-900: shade-color($blue, 80%) !default;\n\n$indigo-100: tint-color($indigo, 80%) !default;\n$indigo-200: tint-color($indigo, 60%) !default;\n$indigo-300: tint-color($indigo, 40%) !default;\n$indigo-400: tint-color($indigo, 20%) !default;\n$indigo-500: $indigo !default;\n$indigo-600: shade-color($indigo, 20%) !default;\n$indigo-700: shade-color($indigo, 40%) !default;\n$indigo-800: shade-color($indigo, 60%) !default;\n$indigo-900: shade-color($indigo, 80%) !default;\n\n$purple-100: tint-color($purple, 80%) !default;\n$purple-200: tint-color($purple, 60%) !default;\n$purple-300: tint-color($purple, 40%) !default;\n$purple-400: tint-color($purple, 20%) !default;\n$purple-500: $purple !default;\n$purple-600: shade-color($purple, 20%) !default;\n$purple-700: shade-color($purple, 40%) !default;\n$purple-800: shade-color($purple, 60%) !default;\n$purple-900: shade-color($purple, 80%) !default;\n\n$pink-100: tint-color($pink, 80%) !default;\n$pink-200: tint-color($pink, 60%) !default;\n$pink-300: tint-color($pink, 40%) !default;\n$pink-400: tint-color($pink, 20%) !default;\n$pink-500: $pink !default;\n$pink-600: shade-color($pink, 20%) !default;\n$pink-700: shade-color($pink, 40%) !default;\n$pink-800: shade-color($pink, 60%) !default;\n$pink-900: shade-color($pink, 80%) !default;\n\n$red-100: tint-color($red, 80%) !default;\n$red-200: tint-color($red, 60%) !default;\n$red-300: tint-color($red, 40%) !default;\n$red-400: tint-color($red, 20%) !default;\n$red-500: $red !default;\n$red-600: shade-color($red, 20%) !default;\n$red-700: shade-color($red, 40%) !default;\n$red-800: shade-color($red, 60%) !default;\n$red-900: shade-color($red, 80%) !default;\n\n$orange-100: tint-color($orange, 80%) !default;\n$orange-200: tint-color($orange, 60%) !default;\n$orange-300: tint-color($orange, 40%) !default;\n$orange-400: tint-color($orange, 20%) !default;\n$orange-500: $orange !default;\n$orange-600: shade-color($orange, 20%) !default;\n$orange-700: shade-color($orange, 40%) !default;\n$orange-800: shade-color($orange, 60%) !default;\n$orange-900: shade-color($orange, 80%) !default;\n\n$yellow-100: tint-color($yellow, 80%) !default;\n$yellow-200: tint-color($yellow, 60%) !default;\n$yellow-300: tint-color($yellow, 40%) !default;\n$yellow-400: tint-color($yellow, 20%) !default;\n$yellow-500: $yellow !default;\n$yellow-600: shade-color($yellow, 20%) !default;\n$yellow-700: shade-color($yellow, 40%) !default;\n$yellow-800: shade-color($yellow, 60%) !default;\n$yellow-900: shade-color($yellow, 80%) !default;\n\n$green-100: tint-color($green, 80%) !default;\n$green-200: tint-color($green, 60%) !default;\n$green-300: tint-color($green, 40%) !default;\n$green-400: tint-color($green, 20%) !default;\n$green-500: $green !default;\n$green-600: shade-color($green, 20%) !default;\n$green-700: shade-color($green, 40%) !default;\n$green-800: shade-color($green, 60%) !default;\n$green-900: shade-color($green, 80%) !default;\n\n$teal-100: tint-color($teal, 80%) !default;\n$teal-200: tint-color($teal, 60%) !default;\n$teal-300: tint-color($teal, 40%) !default;\n$teal-400: tint-color($teal, 20%) !default;\n$teal-500: $teal !default;\n$teal-600: shade-color($teal, 20%) !default;\n$teal-700: shade-color($teal, 40%) !default;\n$teal-800: shade-color($teal, 60%) !default;\n$teal-900: shade-color($teal, 80%) !default;\n\n$cyan-100: tint-color($cyan, 80%) !default;\n$cyan-200: tint-color($cyan, 60%) !default;\n$cyan-300: tint-color($cyan, 40%) !default;\n$cyan-400: tint-color($cyan, 20%) !default;\n$cyan-500: $cyan !default;\n$cyan-600: shade-color($cyan, 20%) !default;\n$cyan-700: shade-color($cyan, 40%) !default;\n$cyan-800: shade-color($cyan, 60%) !default;\n$cyan-900: shade-color($cyan, 80%) !default;\n\n$blues: (\n  \"blue-100\": $blue-100,\n  \"blue-200\": $blue-200,\n  \"blue-300\": $blue-300,\n  \"blue-400\": $blue-400,\n  \"blue-500\": $blue-500,\n  \"blue-600\": $blue-600,\n  \"blue-700\": $blue-700,\n  \"blue-800\": $blue-800,\n  \"blue-900\": $blue-900\n) !default;\n\n$indigos: (\n  \"indigo-100\": $indigo-100,\n  \"indigo-200\": $indigo-200,\n  \"indigo-300\": $indigo-300,\n  \"indigo-400\": $indigo-400,\n  \"indigo-500\": $indigo-500,\n  \"indigo-600\": $indigo-600,\n  \"indigo-700\": $indigo-700,\n  \"indigo-800\": $indigo-800,\n  \"indigo-900\": $indigo-900\n) !default;\n\n$purples: (\n  \"purple-100\": $purple-100,\n  \"purple-200\": $purple-200,\n  \"purple-300\": $purple-300,\n  \"purple-400\": $purple-400,\n  \"purple-500\": $purple-500,\n  \"purple-600\": $purple-600,\n  \"purple-700\": $purple-700,\n  \"purple-800\": $purple-800,\n  \"purple-900\": $purple-900\n) !default;\n\n$pinks: (\n  \"pink-100\": $pink-100,\n  \"pink-200\": $pink-200,\n  \"pink-300\": $pink-300,\n  \"pink-400\": $pink-400,\n  \"pink-500\": $pink-500,\n  \"pink-600\": $pink-600,\n  \"pink-700\": $pink-700,\n  \"pink-800\": $pink-800,\n  \"pink-900\": $pink-900\n) !default;\n\n$reds: (\n  \"red-100\": $red-100,\n  \"red-200\": $red-200,\n  \"red-300\": $red-300,\n  \"red-400\": $red-400,\n  \"red-500\": $red-500,\n  \"red-600\": $red-600,\n  \"red-700\": $red-700,\n  \"red-800\": $red-800,\n  \"red-900\": $red-900\n) !default;\n\n$oranges: (\n  \"orange-100\": $orange-100,\n  \"orange-200\": $orange-200,\n  \"orange-300\": $orange-300,\n  \"orange-400\": $orange-400,\n  \"orange-500\": $orange-500,\n  \"orange-600\": $orange-600,\n  \"orange-700\": $orange-700,\n  \"orange-800\": $orange-800,\n  \"orange-900\": $orange-900\n) !default;\n\n$yellows: (\n  \"yellow-100\": $yellow-100,\n  \"yellow-200\": $yellow-200,\n  \"yellow-300\": $yellow-300,\n  \"yellow-400\": $yellow-400,\n  \"yellow-500\": $yellow-500,\n  \"yellow-600\": $yellow-600,\n  \"yellow-700\": $yellow-700,\n  \"yellow-800\": $yellow-800,\n  \"yellow-900\": $yellow-900\n) !default;\n\n$greens: (\n  \"green-100\": $green-100,\n  \"green-200\": $green-200,\n  \"green-300\": $green-300,\n  \"green-400\": $green-400,\n  \"green-500\": $green-500,\n  \"green-600\": $green-600,\n  \"green-700\": $green-700,\n  \"green-800\": $green-800,\n  \"green-900\": $green-900\n) !default;\n\n$teals: (\n  \"teal-100\": $teal-100,\n  \"teal-200\": $teal-200,\n  \"teal-300\": $teal-300,\n  \"teal-400\": $teal-400,\n  \"teal-500\": $teal-500,\n  \"teal-600\": $teal-600,\n  \"teal-700\": $teal-700,\n  \"teal-800\": $teal-800,\n  \"teal-900\": $teal-900\n) !default;\n\n$cyans: (\n  \"cyan-100\": $cyan-100,\n  \"cyan-200\": $cyan-200,\n  \"cyan-300\": $cyan-300,\n  \"cyan-400\": $cyan-400,\n  \"cyan-500\": $cyan-500,\n  \"cyan-600\": $cyan-600,\n  \"cyan-700\": $cyan-700,\n  \"cyan-800\": $cyan-800,\n  \"cyan-900\": $cyan-900\n) !default;\n// fusv-enable\n\n// scss-docs-start theme-color-variables\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-900 !default;\n// scss-docs-end theme-color-variables\n\n// scss-docs-start theme-colors-map\n$theme-colors: (\n  \"primary\":    $primary,\n  \"secondary\":  $secondary,\n  \"success\":    $success,\n  \"info\":       $info,\n  \"warning\":    $warning,\n  \"danger\":     $danger,\n  \"light\":      $light,\n  \"dark\":       $dark\n) !default;\n// scss-docs-end theme-colors-map\n\n// scss-docs-start theme-text-variables\n$primary-text-emphasis:   shade-color($primary, 60%) !default;\n$secondary-text-emphasis: shade-color($secondary, 60%) !default;\n$success-text-emphasis:   shade-color($success, 60%) !default;\n$info-text-emphasis:      shade-color($info, 60%) !default;\n$warning-text-emphasis:   shade-color($warning, 60%) !default;\n$danger-text-emphasis:    shade-color($danger, 60%) !default;\n$light-text-emphasis:     $gray-700 !default;\n$dark-text-emphasis:      $gray-700 !default;\n// scss-docs-end theme-text-variables\n\n// scss-docs-start theme-bg-subtle-variables\n$primary-bg-subtle:       tint-color($primary, 80%) !default;\n$secondary-bg-subtle:     tint-color($secondary, 80%) !default;\n$success-bg-subtle:       tint-color($success, 80%) !default;\n$info-bg-subtle:          tint-color($info, 80%) !default;\n$warning-bg-subtle:       tint-color($warning, 80%) !default;\n$danger-bg-subtle:        tint-color($danger, 80%) !default;\n$light-bg-subtle:         mix($gray-100, $white) !default;\n$dark-bg-subtle:          $gray-400 !default;\n// scss-docs-end theme-bg-subtle-variables\n\n// scss-docs-start theme-border-subtle-variables\n$primary-border-subtle:   tint-color($primary, 60%) !default;\n$secondary-border-subtle: tint-color($secondary, 60%) !default;\n$success-border-subtle:   tint-color($success, 60%) !default;\n$info-border-subtle:      tint-color($info, 60%) !default;\n$warning-border-subtle:   tint-color($warning, 60%) !default;\n$danger-border-subtle:    tint-color($danger, 60%) !default;\n$light-border-subtle:     $gray-200 !default;\n$dark-border-subtle:      $gray-500 !default;\n// scss-docs-end theme-border-subtle-variables\n\n// Characters which are escaped by the escape-svg function\n$escaped-characters: (\n  (\"<\", \"%3c\"),\n  (\">\", \"%3e\"),\n  (\"#\", \"%23\"),\n  (\"(\", \"%28\"),\n  (\")\", \"%29\"),\n) !default;\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:                true !default;\n$enable-rounded:              true !default;\n$enable-shadows:              false !default;\n$enable-gradients:            false !default;\n$enable-transitions:          true !default;\n$enable-reduced-motion:       true !default;\n$enable-smooth-scroll:        true !default;\n$enable-grid-classes:         true !default;\n$enable-container-classes:    true !default;\n$enable-cssgrid:              false !default;\n$enable-button-pointers:      true !default;\n$enable-rfs:                  true !default;\n$enable-validation-icons:     true !default;\n$enable-negative-margins:     false !default;\n$enable-deprecation-messages: true !default;\n$enable-important-utilities:  true !default;\n\n$enable-dark-mode:            true !default;\n$color-mode-type:             data !default; // `data` or `media-query`\n\n// Prefix for :root CSS variables\n\n$variable-prefix:             bs- !default; // Deprecated in v5.2.0 for the shorter `$prefix`\n$prefix:                      $variable-prefix !default;\n\n// Gradient\n//\n// The gradient which is added to components if `$enable-gradients` is `true`\n// This gradient is also added to elements with `.bg-gradient`\n// scss-docs-start variable-gradient\n$gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0)) !default;\n// scss-docs-end variable-gradient\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n// scss-docs-start spacer-variables-maps\n$spacer: 1rem !default;\n$spacers: (\n  0: 0,\n  1: $spacer * .25,\n  2: $spacer * .5,\n  3: $spacer,\n  4: $spacer * 1.5,\n  5: $spacer * 3,\n) !default;\n// scss-docs-end spacer-variables-maps\n\n// Position\n//\n// Define the edge positioning anchors of the position utilities.\n\n// scss-docs-start position-map\n$position-values: (\n  0: 0,\n  50: 50%,\n  100: 100%\n) !default;\n// scss-docs-end position-map\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-text-align:           null !default;\n$body-color:                $gray-900 !default;\n$body-bg:                   $white !default;\n\n$body-secondary-color:      rgba($body-color, .75) !default;\n$body-secondary-bg:         $gray-200 !default;\n\n$body-tertiary-color:       rgba($body-color, .5) !default;\n$body-tertiary-bg:          $gray-100 !default;\n\n$body-emphasis-color:       $black !default;\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                              $primary !default;\n$link-decoration:                         underline !default;\n$link-shade-percentage:                   20% !default;\n$link-hover-color:                        shift-color($link-color, $link-shade-percentage) !default;\n$link-hover-decoration:                   null !default;\n\n$stretched-link-pseudo-element:           after !default;\n$stretched-link-z-index:                  1 !default;\n\n// Icon links\n// scss-docs-start icon-link-variables\n$icon-link-gap:               .375rem !default;\n$icon-link-underline-offset:  .25em !default;\n$icon-link-icon-size:         1em !default;\n$icon-link-icon-transition:   .2s ease-in-out transform !default;\n$icon-link-icon-transform:    translate3d(.25em, 0, 0) !default;\n// scss-docs-end icon-link-variables\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n// scss-docs-start grid-breakpoints\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px\n) !default;\n// scss-docs-end grid-breakpoints\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints, \"$grid-breakpoints\");\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n// scss-docs-start container-max-widths\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px,\n  xxl: 1320px\n) !default;\n// scss-docs-end container-max-widths\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           1.5rem !default;\n$grid-row-columns:            6 !default;\n\n// Container padding\n\n$container-padding-x: $grid-gutter-width !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n// scss-docs-start border-variables\n$border-width:                1px !default;\n$border-widths: (\n  1: 1px,\n  2: 2px,\n  3: 3px,\n  4: 4px,\n  5: 5px\n) !default;\n$border-style:                solid !default;\n$border-color:                $gray-300 !default;\n$border-color-translucent:    rgba($black, .175) !default;\n// scss-docs-end border-variables\n\n// scss-docs-start border-radius-variables\n$border-radius:               .375rem !default;\n$border-radius-sm:            .25rem !default;\n$border-radius-lg:            .5rem !default;\n$border-radius-xl:            1rem !default;\n$border-radius-xxl:           2rem !default;\n$border-radius-pill:          50rem !default;\n// scss-docs-end border-radius-variables\n// fusv-disable\n$border-radius-2xl:           $border-radius-xxl !default; // Deprecated in v5.3.0\n// fusv-enable\n\n// scss-docs-start box-shadow-variables\n$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\n$box-shadow-inset:            inset 0 1px 2px rgba($black, .075) !default;\n// scss-docs-end box-shadow-variables\n\n$component-active-color:      $white !default;\n$component-active-bg:         $primary !default;\n\n// scss-docs-start focus-ring-variables\n$focus-ring-width:      .25rem !default;\n$focus-ring-opacity:    .25 !default;\n$focus-ring-color:      rgba($primary, $focus-ring-opacity) !default;\n$focus-ring-blur:       0 !default;\n$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color !default;\n// scss-docs-end focus-ring-variables\n\n// scss-docs-start caret-variables\n$caret-width:                 .3em !default;\n$caret-vertical-align:        $caret-width * .85 !default;\n$caret-spacing:               $caret-width * .85 !default;\n// scss-docs-end caret-variables\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n// scss-docs-start collapse-transition\n$transition-collapse:         height .35s ease !default;\n$transition-collapse-width:   width .35s ease !default;\n// scss-docs-end collapse-transition\n\n// stylelint-disable function-disallowed-list\n// scss-docs-start aspect-ratios\n$aspect-ratios: (\n  \"1x1\": 100%,\n  \"4x3\": calc(3 / 4 * 100%),\n  \"16x9\": calc(9 / 16 * 100%),\n  \"21x9\": calc(9 / 21 * 100%)\n) !default;\n// scss-docs-end aspect-ratios\n// stylelint-enable function-disallowed-list\n\n// Typography\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// scss-docs-start font-variables\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n// stylelint-enable value-keyword-case\n$font-family-base:            var(--#{$prefix}font-sans-serif) !default;\n$font-family-code:            var(--#{$prefix}font-monospace) !default;\n\n// $font-size-root affects the value of `rem`, which is used for as well font sizes, paddings, and margins\n// $font-size-base affects the font size of the body text\n$font-size-root:              null !default;\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-sm:                $font-size-base * .875 !default;\n$font-size-lg:                $font-size-base * 1.25 !default;\n\n$font-weight-lighter:         lighter !default;\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-medium:          500 !default;\n$font-weight-semibold:        600 !default;\n$font-weight-bold:            700 !default;\n$font-weight-bolder:          bolder !default;\n\n$font-weight-base:            $font-weight-normal !default;\n\n$line-height-base:            1.5 !default;\n$line-height-sm:              1.25 !default;\n$line-height-lg:              2 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n// scss-docs-end font-variables\n\n// scss-docs-start font-sizes\n$font-sizes: (\n  1: $h1-font-size,\n  2: $h2-font-size,\n  3: $h3-font-size,\n  4: $h4-font-size,\n  5: $h5-font-size,\n  6: $h6-font-size\n) !default;\n// scss-docs-end font-sizes\n\n// scss-docs-start headings-variables\n$headings-margin-bottom:      $spacer * .5 !default;\n$headings-font-family:        null !default;\n$headings-font-style:         null !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              inherit !default;\n// scss-docs-end headings-variables\n\n// scss-docs-start display-headings\n$display-font-sizes: (\n  1: 5rem,\n  2: 4.5rem,\n  3: 4rem,\n  4: 3.5rem,\n  5: 3rem,\n  6: 2.5rem\n) !default;\n\n$display-font-family: null !default;\n$display-font-style:  null !default;\n$display-font-weight: 300 !default;\n$display-line-height: $headings-line-height !default;\n// scss-docs-end display-headings\n\n// scss-docs-start type-variables\n$lead-font-size:              $font-size-base * 1.25 !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             .875em !default;\n\n$sub-sup-font-size:           .75em !default;\n\n// fusv-disable\n$text-muted:                  var(--#{$prefix}secondary-color) !default; // Deprecated in 5.3.0\n// fusv-enable\n\n$initialism-font-size:        $small-font-size !default;\n\n$blockquote-margin-y:         $spacer !default;\n$blockquote-font-size:        $font-size-base * 1.25 !default;\n$blockquote-footer-color:     $gray-600 !default;\n$blockquote-footer-font-size: $small-font-size !default;\n\n$hr-margin-y:                 $spacer !default;\n$hr-color:                    inherit !default;\n\n// fusv-disable\n$hr-bg-color:                 null !default; // Deprecated in v5.2.0\n$hr-height:                   null !default; // Deprecated in v5.2.0\n// fusv-enable\n\n$hr-border-color:             null !default; // Allows for inherited colors\n$hr-border-width:             var(--#{$prefix}border-width) !default;\n$hr-opacity:                  .25 !default;\n\n// scss-docs-start vr-variables\n$vr-border-width:             var(--#{$prefix}border-width) !default;\n// scss-docs-end vr-variables\n\n$legend-margin-bottom:        .5rem !default;\n$legend-font-size:            1.5rem !default;\n$legend-font-weight:          null !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$list-inline-padding:         .5rem !default;\n\n$mark-padding:                .1875em !default;\n$mark-color:                  $body-color !default;\n$mark-bg:                     $yellow-100 !default;\n// scss-docs-end type-variables\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n// scss-docs-start table-variables\n$table-cell-padding-y:        .5rem !default;\n$table-cell-padding-x:        .5rem !default;\n$table-cell-padding-y-sm:     .25rem !default;\n$table-cell-padding-x-sm:     .25rem !default;\n\n$table-cell-vertical-align:   top !default;\n\n$table-color:                 var(--#{$prefix}emphasis-color) !default;\n$table-bg:                    var(--#{$prefix}body-bg) !default;\n$table-accent-bg:             transparent !default;\n\n$table-th-font-weight:        null !default;\n\n$table-striped-color:         $table-color !default;\n$table-striped-bg-factor:     .05 !default;\n$table-striped-bg:            rgba(var(--#{$prefix}emphasis-color-rgb), $table-striped-bg-factor) !default;\n\n$table-active-color:          $table-color !default;\n$table-active-bg-factor:      .1 !default;\n$table-active-bg:             rgba(var(--#{$prefix}emphasis-color-rgb), $table-active-bg-factor) !default;\n\n$table-hover-color:           $table-color !default;\n$table-hover-bg-factor:       .075 !default;\n$table-hover-bg:              rgba(var(--#{$prefix}emphasis-color-rgb), $table-hover-bg-factor) !default;\n\n$table-border-factor:         .2 !default;\n$table-border-width:          var(--#{$prefix}border-width) !default;\n$table-border-color:          var(--#{$prefix}border-color) !default;\n\n$table-striped-order:         odd !default;\n$table-striped-columns-order: even !default;\n\n$table-group-separator-color: currentcolor !default;\n\n$table-caption-color:         var(--#{$prefix}secondary-color) !default;\n\n$table-bg-scale:              -80% !default;\n// scss-docs-end table-variables\n\n// scss-docs-start table-loop\n$table-variants: (\n  \"primary\":    shift-color($primary, $table-bg-scale),\n  \"secondary\":  shift-color($secondary, $table-bg-scale),\n  \"success\":    shift-color($success, $table-bg-scale),\n  \"info\":       shift-color($info, $table-bg-scale),\n  \"warning\":    shift-color($warning, $table-bg-scale),\n  \"danger\":     shift-color($danger, $table-bg-scale),\n  \"light\":      $light,\n  \"dark\":       $dark,\n) !default;\n// scss-docs-end table-loop\n\n\n// Buttons + Forms\n//\n// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.\n\n// scss-docs-start input-btn-variables\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-font-family:       null !default;\n$input-btn-font-size:         $font-size-base !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:         $focus-ring-width !default;\n$input-btn-focus-color-opacity: $focus-ring-opacity !default;\n$input-btn-focus-color:         $focus-ring-color !default;\n$input-btn-focus-blur:          $focus-ring-blur !default;\n$input-btn-focus-box-shadow:    $focus-ring-box-shadow !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-font-size-sm:      $font-size-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-font-size-lg:      $font-size-lg !default;\n\n$input-btn-border-width:      var(--#{$prefix}border-width) !default;\n// scss-docs-end input-btn-variables\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background, and border color.\n\n// scss-docs-start btn-variables\n$btn-color:                   var(--#{$prefix}body-color) !default;\n$btn-padding-y:               $input-btn-padding-y !default;\n$btn-padding-x:               $input-btn-padding-x !default;\n$btn-font-family:             $input-btn-font-family !default;\n$btn-font-size:               $input-btn-font-size !default;\n$btn-line-height:             $input-btn-line-height !default;\n$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping\n\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\n\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\n\n$btn-border-width:            $input-btn-border-width !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\n$btn-focus-width:             $input-btn-focus-width !default;\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\n$btn-disabled-opacity:        .65 !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\n\n$btn-link-color:              var(--#{$prefix}link-color) !default;\n$btn-link-hover-color:        var(--#{$prefix}link-hover-color) !default;\n$btn-link-disabled-color:     $gray-600 !default;\n$btn-link-focus-shadow-rgb:   to-rgb(mix(color-contrast($link-color), $link-color, 15%)) !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           var(--#{$prefix}border-radius) !default;\n$btn-border-radius-sm:        var(--#{$prefix}border-radius-sm) !default;\n$btn-border-radius-lg:        var(--#{$prefix}border-radius-lg) !default;\n\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$btn-hover-bg-shade-amount:       15% !default;\n$btn-hover-bg-tint-amount:        15% !default;\n$btn-hover-border-shade-amount:   20% !default;\n$btn-hover-border-tint-amount:    10% !default;\n$btn-active-bg-shade-amount:      20% !default;\n$btn-active-bg-tint-amount:       20% !default;\n$btn-active-border-shade-amount:  25% !default;\n$btn-active-border-tint-amount:   10% !default;\n// scss-docs-end btn-variables\n\n\n// Forms\n\n// scss-docs-start form-text-variables\n$form-text-margin-top:                  .25rem !default;\n$form-text-font-size:                   $small-font-size !default;\n$form-text-font-style:                  null !default;\n$form-text-font-weight:                 null !default;\n$form-text-color:                       var(--#{$prefix}secondary-color) !default;\n// scss-docs-end form-text-variables\n\n// scss-docs-start form-label-variables\n$form-label-margin-bottom:              .5rem !default;\n$form-label-font-size:                  null !default;\n$form-label-font-style:                 null !default;\n$form-label-font-weight:                null !default;\n$form-label-color:                      null !default;\n// scss-docs-end form-label-variables\n\n// scss-docs-start form-input-variables\n$input-padding-y:                       $input-btn-padding-y !default;\n$input-padding-x:                       $input-btn-padding-x !default;\n$input-font-family:                     $input-btn-font-family !default;\n$input-font-size:                       $input-btn-font-size !default;\n$input-font-weight:                     $font-weight-base !default;\n$input-line-height:                     $input-btn-line-height !default;\n\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\n\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\n\n$input-bg:                              var(--#{$prefix}body-bg) !default;\n$input-disabled-color:                  null !default;\n$input-disabled-bg:                     var(--#{$prefix}secondary-bg) !default;\n$input-disabled-border-color:           null !default;\n\n$input-color:                           var(--#{$prefix}body-color) !default;\n$input-border-color:                    var(--#{$prefix}border-color) !default;\n$input-border-width:                    $input-btn-border-width !default;\n$input-box-shadow:                      var(--#{$prefix}box-shadow-inset) !default;\n\n$input-border-radius:                   var(--#{$prefix}border-radius) !default;\n$input-border-radius-sm:                var(--#{$prefix}border-radius-sm) !default;\n$input-border-radius-lg:                var(--#{$prefix}border-radius-lg) !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              tint-color($component-active-bg, 50%) !default;\n$input-focus-color:                     $input-color !default;\n$input-focus-width:                     $input-btn-focus-width !default;\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\n\n$input-placeholder-color:               var(--#{$prefix}secondary-color) !default;\n$input-plaintext-color:                 var(--#{$prefix}body-color) !default;\n\n$input-height-border:                   calc(#{$input-border-width} * 2) !default; // stylelint-disable-line function-disallowed-list\n\n$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;\n$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;\n$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y * .5) !default;\n\n$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;\n$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;\n$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;\n\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$form-color-width:                      3rem !default;\n// scss-docs-end form-input-variables\n\n// scss-docs-start form-check-variables\n$form-check-input-width:                  1em !default;\n$form-check-min-height:                   $font-size-base * $line-height-base !default;\n$form-check-padding-start:                $form-check-input-width + .5em !default;\n$form-check-margin-bottom:                .125rem !default;\n$form-check-label-color:                  null !default;\n$form-check-label-cursor:                 null !default;\n$form-check-transition:                   null !default;\n\n$form-check-input-active-filter:          brightness(90%) !default;\n\n$form-check-input-bg:                     $input-bg !default;\n$form-check-input-border:                 var(--#{$prefix}border-width) solid var(--#{$prefix}border-color) !default;\n$form-check-input-border-radius:          .25em !default;\n$form-check-radio-border-radius:          50% !default;\n$form-check-input-focus-border:           $input-focus-border-color !default;\n$form-check-input-focus-box-shadow:       $focus-ring-box-shadow !default;\n\n$form-check-input-checked-color:          $component-active-color !default;\n$form-check-input-checked-bg-color:       $component-active-bg !default;\n$form-check-input-checked-border-color:   $form-check-input-checked-bg-color !default;\n$form-check-input-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/></svg>\") !default;\n$form-check-radio-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>\") !default;\n\n$form-check-input-indeterminate-color:          $component-active-color !default;\n$form-check-input-indeterminate-bg-color:       $component-active-bg !default;\n$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color !default;\n$form-check-input-indeterminate-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>\") !default;\n\n$form-check-input-disabled-opacity:        .5 !default;\n$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity !default;\n$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity !default;\n\n$form-check-inline-margin-end:    1rem !default;\n// scss-docs-end form-check-variables\n\n// scss-docs-start form-switch-variables\n$form-switch-color:               rgba($black, .25) !default;\n$form-switch-width:               2em !default;\n$form-switch-padding-start:       $form-switch-width + .5em !default;\n$form-switch-bg-image:            url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>\") !default;\n$form-switch-border-radius:       $form-switch-width !default;\n$form-switch-transition:          background-position .15s ease-in-out !default;\n\n$form-switch-focus-color:         $input-focus-border-color !default;\n$form-switch-focus-bg-image:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>\") !default;\n\n$form-switch-checked-color:       $component-active-color !default;\n$form-switch-checked-bg-image:    url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>\") !default;\n$form-switch-checked-bg-position: right center !default;\n// scss-docs-end form-switch-variables\n\n// scss-docs-start input-group-variables\n$input-group-addon-padding-y:           $input-padding-y !default;\n$input-group-addon-padding-x:           $input-padding-x !default;\n$input-group-addon-font-weight:         $input-font-weight !default;\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  var(--#{$prefix}tertiary-bg) !default;\n$input-group-addon-border-color:        $input-border-color !default;\n// scss-docs-end input-group-variables\n\n// scss-docs-start form-select-variables\n$form-select-padding-y:             $input-padding-y !default;\n$form-select-padding-x:             $input-padding-x !default;\n$form-select-font-family:           $input-font-family !default;\n$form-select-font-size:             $input-font-size !default;\n$form-select-indicator-padding:     $form-select-padding-x * 3 !default; // Extra padding for background-image\n$form-select-font-weight:           $input-font-weight !default;\n$form-select-line-height:           $input-line-height !default;\n$form-select-color:                 $input-color !default;\n$form-select-bg:                    $input-bg !default;\n$form-select-disabled-color:        null !default;\n$form-select-disabled-bg:           $input-disabled-bg !default;\n$form-select-disabled-border-color: $input-disabled-border-color !default;\n$form-select-bg-position:           right $form-select-padding-x center !default;\n$form-select-bg-size:               16px 12px !default; // In pixels because image dimensions\n$form-select-indicator-color:       $gray-800 !default;\n$form-select-indicator:             url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>\") !default;\n\n$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding !default;\n$form-select-feedback-icon-position:    center right $form-select-indicator-padding !default;\n$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half !default;\n\n$form-select-border-width:        $input-border-width !default;\n$form-select-border-color:        $input-border-color !default;\n$form-select-border-radius:       $input-border-radius !default;\n$form-select-box-shadow:          var(--#{$prefix}box-shadow-inset) !default;\n\n$form-select-focus-border-color:  $input-focus-border-color !default;\n$form-select-focus-width:         $input-focus-width !default;\n$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color !default;\n\n$form-select-padding-y-sm:        $input-padding-y-sm !default;\n$form-select-padding-x-sm:        $input-padding-x-sm !default;\n$form-select-font-size-sm:        $input-font-size-sm !default;\n$form-select-border-radius-sm:    $input-border-radius-sm !default;\n\n$form-select-padding-y-lg:        $input-padding-y-lg !default;\n$form-select-padding-x-lg:        $input-padding-x-lg !default;\n$form-select-font-size-lg:        $input-font-size-lg !default;\n$form-select-border-radius-lg:    $input-border-radius-lg !default;\n\n$form-select-transition:          $input-transition !default;\n// scss-docs-end form-select-variables\n\n// scss-docs-start form-range-variables\n$form-range-track-width:          100% !default;\n$form-range-track-height:         .5rem !default;\n$form-range-track-cursor:         pointer !default;\n$form-range-track-bg:             var(--#{$prefix}secondary-bg) !default;\n$form-range-track-border-radius:  1rem !default;\n$form-range-track-box-shadow:     var(--#{$prefix}box-shadow-inset) !default;\n\n$form-range-thumb-width:                   1rem !default;\n$form-range-thumb-height:                  $form-range-thumb-width !default;\n$form-range-thumb-bg:                      $component-active-bg !default;\n$form-range-thumb-border:                  0 !default;\n$form-range-thumb-border-radius:           1rem !default;\n$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\n$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\n$form-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in Edge\n$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%) !default;\n$form-range-thumb-disabled-bg:             var(--#{$prefix}secondary-color) !default;\n$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n// scss-docs-end form-range-variables\n\n// scss-docs-start form-file-variables\n$form-file-button-color:          $input-color !default;\n$form-file-button-bg:             var(--#{$prefix}tertiary-bg) !default;\n$form-file-button-hover-bg:       var(--#{$prefix}secondary-bg) !default;\n// scss-docs-end form-file-variables\n\n// scss-docs-start form-floating-variables\n$form-floating-height:                  add(3.5rem, $input-height-border) !default;\n$form-floating-line-height:             1.25 !default;\n$form-floating-padding-x:               $input-padding-x !default;\n$form-floating-padding-y:               1rem !default;\n$form-floating-input-padding-t:         1.625rem !default;\n$form-floating-input-padding-b:         .625rem !default;\n$form-floating-label-height:            1.5em !default;\n$form-floating-label-opacity:           .65 !default;\n$form-floating-label-transform:         scale(.85) translateY(-.5rem) translateX(.15rem) !default;\n$form-floating-label-disabled-color:    $gray-600 !default;\n$form-floating-transition:              opacity .1s ease-in-out, transform .1s ease-in-out !default;\n// scss-docs-end form-floating-variables\n\n// Form validation\n\n// scss-docs-start form-feedback-variables\n$form-feedback-margin-top:          $form-text-margin-top !default;\n$form-feedback-font-size:           $form-text-font-size !default;\n$form-feedback-font-style:          $form-text-font-style !default;\n$form-feedback-valid-color:         $success !default;\n$form-feedback-invalid-color:       $danger !default;\n\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\n$form-feedback-icon-valid:          url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>\") !default;\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\n$form-feedback-icon-invalid:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>\") !default;\n// scss-docs-end form-feedback-variables\n\n// scss-docs-start form-validation-colors\n$form-valid-color:                  $form-feedback-valid-color !default;\n$form-valid-border-color:           $form-feedback-valid-color !default;\n$form-invalid-color:                $form-feedback-invalid-color !default;\n$form-invalid-border-color:         $form-feedback-invalid-color !default;\n// scss-docs-end form-validation-colors\n\n// scss-docs-start form-validation-states\n$form-validation-states: (\n  \"valid\": (\n    \"color\": var(--#{$prefix}form-valid-color),\n    \"icon\": $form-feedback-icon-valid,\n    \"tooltip-color\": #fff,\n    \"tooltip-bg-color\": var(--#{$prefix}success),\n    \"focus-box-shadow\": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}success-rgb), $input-btn-focus-color-opacity),\n    \"border-color\": var(--#{$prefix}form-valid-border-color),\n  ),\n  \"invalid\": (\n    \"color\": var(--#{$prefix}form-invalid-color),\n    \"icon\": $form-feedback-icon-invalid,\n    \"tooltip-color\": #fff,\n    \"tooltip-bg-color\": var(--#{$prefix}danger),\n    \"focus-box-shadow\": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}danger-rgb), $input-btn-focus-color-opacity),\n    \"border-color\": var(--#{$prefix}form-invalid-border-color),\n  )\n) !default;\n// scss-docs-end form-validation-states\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n// scss-docs-start zindex-stack\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-offcanvas-backdrop:         1040 !default;\n$zindex-offcanvas:                  1045 !default;\n$zindex-modal-backdrop:             1050 !default;\n$zindex-modal:                      1055 !default;\n$zindex-popover:                    1070 !default;\n$zindex-tooltip:                    1080 !default;\n$zindex-toast:                      1090 !default;\n// scss-docs-end zindex-stack\n\n// scss-docs-start zindex-levels-map\n$zindex-levels: (\n  n1: -1,\n  0: 0,\n  1: 1,\n  2: 2,\n  3: 3\n) !default;\n// scss-docs-end zindex-levels-map\n\n\n// Navs\n\n// scss-docs-start nav-variables\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-font-size:                null !default;\n$nav-link-font-weight:              null !default;\n$nav-link-color:                    var(--#{$prefix}link-color) !default;\n$nav-link-hover-color:              var(--#{$prefix}link-hover-color) !default;\n$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out !default;\n$nav-link-disabled-color:           var(--#{$prefix}secondary-color) !default;\n$nav-link-focus-box-shadow:         $focus-ring-box-shadow !default;\n\n$nav-tabs-border-color:             var(--#{$prefix}border-color) !default;\n$nav-tabs-border-width:             var(--#{$prefix}border-width) !default;\n$nav-tabs-border-radius:            var(--#{$prefix}border-radius) !default;\n$nav-tabs-link-hover-border-color:  var(--#{$prefix}secondary-bg) var(--#{$prefix}secondary-bg) $nav-tabs-border-color !default;\n$nav-tabs-link-active-color:        var(--#{$prefix}emphasis-color) !default;\n$nav-tabs-link-active-bg:           var(--#{$prefix}body-bg) !default;\n$nav-tabs-link-active-border-color: var(--#{$prefix}border-color) var(--#{$prefix}border-color) $nav-tabs-link-active-bg !default;\n\n$nav-pills-border-radius:           var(--#{$prefix}border-radius) !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n\n$nav-underline-gap:                 1rem !default;\n$nav-underline-border-width:        .125rem !default;\n$nav-underline-link-active-color:   var(--#{$prefix}emphasis-color) !default;\n// scss-docs-end nav-variables\n\n\n// Navbar\n\n// scss-docs-start navbar-variables\n$navbar-padding-y:                  $spacer * .5 !default;\n$navbar-padding-x:                  null !default;\n\n$navbar-nav-link-padding-x:         .5rem !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5 !default;\n$navbar-brand-margin-end:           1rem !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n$navbar-toggler-focus-width:        $btn-focus-width !default;\n$navbar-toggler-transition:         box-shadow .15s ease-in-out !default;\n\n$navbar-light-color:                rgba(var(--#{$prefix}emphasis-color-rgb), .65) !default;\n$navbar-light-hover-color:          rgba(var(--#{$prefix}emphasis-color-rgb), .8) !default;\n$navbar-light-active-color:         rgba(var(--#{$prefix}emphasis-color-rgb), 1) !default;\n$navbar-light-disabled-color:       rgba(var(--#{$prefix}emphasis-color-rgb), .3) !default;\n$navbar-light-icon-color:           rgba($body-color, .75) !default;\n$navbar-light-toggler-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-light-toggler-border-color: rgba(var(--#{$prefix}emphasis-color-rgb), .15) !default;\n$navbar-light-brand-color:          $navbar-light-active-color !default;\n$navbar-light-brand-hover-color:    $navbar-light-active-color !default;\n// scss-docs-end navbar-variables\n\n// scss-docs-start navbar-dark-variables\n$navbar-dark-color:                 rgba($white, .55) !default;\n$navbar-dark-hover-color:           rgba($white, .75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\n$navbar-dark-icon-color:            $navbar-dark-color !default;\n$navbar-dark-toggler-icon-bg:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\n$navbar-dark-brand-color:           $navbar-dark-active-color !default;\n$navbar-dark-brand-hover-color:     $navbar-dark-active-color !default;\n// scss-docs-end navbar-dark-variables\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n// scss-docs-start dropdown-variables\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-x:                0 !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-font-size:                $font-size-base !default;\n$dropdown-color:                    var(--#{$prefix}body-color) !default;\n$dropdown-bg:                       var(--#{$prefix}body-bg) !default;\n$dropdown-border-color:             var(--#{$prefix}border-color-translucent) !default;\n$dropdown-border-radius:            var(--#{$prefix}border-radius) !default;\n$dropdown-border-width:             var(--#{$prefix}border-width) !default;\n$dropdown-inner-border-radius:      calc(#{$dropdown-border-radius} - #{$dropdown-border-width}) !default; // stylelint-disable-line function-disallowed-list\n$dropdown-divider-bg:               $dropdown-border-color !default;\n$dropdown-divider-margin-y:         $spacer * .5 !default;\n$dropdown-box-shadow:               var(--#{$prefix}box-shadow) !default;\n\n$dropdown-link-color:               var(--#{$prefix}body-color) !default;\n$dropdown-link-hover-color:         $dropdown-link-color !default;\n$dropdown-link-hover-bg:            var(--#{$prefix}tertiary-bg) !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      var(--#{$prefix}tertiary-color) !default;\n\n$dropdown-item-padding-y:           $spacer * .25 !default;\n$dropdown-item-padding-x:           $spacer !default;\n\n$dropdown-header-color:             $gray-600 !default;\n$dropdown-header-padding-x:         $dropdown-item-padding-x !default;\n$dropdown-header-padding-y:         $dropdown-padding-y !default;\n// fusv-disable\n$dropdown-header-padding:           $dropdown-header-padding-y $dropdown-header-padding-x !default; // Deprecated in v5.2.0\n// fusv-enable\n// scss-docs-end dropdown-variables\n\n// scss-docs-start dropdown-dark-variables\n$dropdown-dark-color:               $gray-300 !default;\n$dropdown-dark-bg:                  $gray-800 !default;\n$dropdown-dark-border-color:        $dropdown-border-color !default;\n$dropdown-dark-divider-bg:          $dropdown-divider-bg !default;\n$dropdown-dark-box-shadow:          null !default;\n$dropdown-dark-link-color:          $dropdown-dark-color !default;\n$dropdown-dark-link-hover-color:    $white !default;\n$dropdown-dark-link-hover-bg:       rgba($white, .15) !default;\n$dropdown-dark-link-active-color:   $dropdown-link-active-color !default;\n$dropdown-dark-link-active-bg:      $dropdown-link-active-bg !default;\n$dropdown-dark-link-disabled-color: $gray-500 !default;\n$dropdown-dark-header-color:        $gray-500 !default;\n// scss-docs-end dropdown-dark-variables\n\n\n// Pagination\n\n// scss-docs-start pagination-variables\n$pagination-padding-y:              .375rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n\n$pagination-font-size:              $font-size-base !default;\n\n$pagination-color:                  var(--#{$prefix}link-color) !default;\n$pagination-bg:                     var(--#{$prefix}body-bg) !default;\n$pagination-border-radius:          var(--#{$prefix}border-radius) !default;\n$pagination-border-width:           var(--#{$prefix}border-width) !default;\n$pagination-margin-start:           calc(#{$pagination-border-width} * -1) !default; // stylelint-disable-line function-disallowed-list\n$pagination-border-color:           var(--#{$prefix}border-color) !default;\n\n$pagination-focus-color:            var(--#{$prefix}link-hover-color) !default;\n$pagination-focus-bg:               var(--#{$prefix}secondary-bg) !default;\n$pagination-focus-box-shadow:       $focus-ring-box-shadow !default;\n$pagination-focus-outline:          0 !default;\n\n$pagination-hover-color:            var(--#{$prefix}link-hover-color) !default;\n$pagination-hover-bg:               var(--#{$prefix}tertiary-bg) !default;\n$pagination-hover-border-color:     var(--#{$prefix}border-color) !default; // Todo in v6: remove this?\n\n$pagination-active-color:           $component-active-color !default;\n$pagination-active-bg:              $component-active-bg !default;\n$pagination-active-border-color:    $component-active-bg !default;\n\n$pagination-disabled-color:         var(--#{$prefix}secondary-color) !default;\n$pagination-disabled-bg:            var(--#{$prefix}secondary-bg) !default;\n$pagination-disabled-border-color:  var(--#{$prefix}border-color) !default;\n\n$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$pagination-border-radius-sm:       var(--#{$prefix}border-radius-sm) !default;\n$pagination-border-radius-lg:       var(--#{$prefix}border-radius-lg) !default;\n// scss-docs-end pagination-variables\n\n\n// Placeholders\n\n// scss-docs-start placeholders\n$placeholder-opacity-max:           .5 !default;\n$placeholder-opacity-min:           .2 !default;\n// scss-docs-end placeholders\n\n// Cards\n\n// scss-docs-start card-variables\n$card-spacer-y:                     $spacer !default;\n$card-spacer-x:                     $spacer !default;\n$card-title-spacer-y:               $spacer * .5 !default;\n$card-title-color:                  null !default;\n$card-subtitle-color:               null !default;\n$card-border-width:                 var(--#{$prefix}border-width) !default;\n$card-border-color:                 var(--#{$prefix}border-color-translucent) !default;\n$card-border-radius:                var(--#{$prefix}border-radius) !default;\n$card-box-shadow:                   null !default;\n$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;\n$card-cap-padding-y:                $card-spacer-y * .5 !default;\n$card-cap-padding-x:                $card-spacer-x !default;\n$card-cap-bg:                       rgba(var(--#{$prefix}body-color-rgb), .03) !default;\n$card-cap-color:                    null !default;\n$card-height:                       null !default;\n$card-color:                        null !default;\n$card-bg:                           var(--#{$prefix}body-bg) !default;\n$card-img-overlay-padding:          $spacer !default;\n$card-group-margin:                 $grid-gutter-width * .5 !default;\n// scss-docs-end card-variables\n\n// Accordion\n\n// scss-docs-start accordion-variables\n$accordion-padding-y:                     1rem !default;\n$accordion-padding-x:                     1.25rem !default;\n$accordion-color:                         var(--#{$prefix}body-color) !default;\n$accordion-bg:                            var(--#{$prefix}body-bg) !default;\n$accordion-border-width:                  var(--#{$prefix}border-width) !default;\n$accordion-border-color:                  var(--#{$prefix}border-color) !default;\n$accordion-border-radius:                 var(--#{$prefix}border-radius) !default;\n$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width) !default;\n\n$accordion-body-padding-y:                $accordion-padding-y !default;\n$accordion-body-padding-x:                $accordion-padding-x !default;\n\n$accordion-button-padding-y:              $accordion-padding-y !default;\n$accordion-button-padding-x:              $accordion-padding-x !default;\n$accordion-button-color:                  var(--#{$prefix}body-color) !default;\n$accordion-button-bg:                     var(--#{$prefix}accordion-bg) !default;\n$accordion-transition:                    $btn-transition, border-radius .15s ease !default;\n$accordion-button-active-bg:              var(--#{$prefix}primary-bg-subtle) !default;\n$accordion-button-active-color:           var(--#{$prefix}primary-text-emphasis) !default;\n\n$accordion-button-focus-border-color:     $input-focus-border-color !default;\n$accordion-button-focus-box-shadow:       $btn-focus-box-shadow !default;\n\n$accordion-icon-width:                    1.25rem !default;\n$accordion-icon-color:                    $body-color !default;\n$accordion-icon-active-color:             $primary-text-emphasis !default;\n$accordion-icon-transition:               transform .2s ease-in-out !default;\n$accordion-icon-transform:                rotate(-180deg) !default;\n\n$accordion-button-icon:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n$accordion-button-active-icon:  url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n// scss-docs-end accordion-variables\n\n// Tooltips\n\n// scss-docs-start tooltip-variables\n$tooltip-font-size:                 $font-size-sm !default;\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     var(--#{$prefix}body-bg) !default;\n$tooltip-bg:                        var(--#{$prefix}emphasis-color) !default;\n$tooltip-border-radius:             var(--#{$prefix}border-radius) !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 $spacer * .25 !default;\n$tooltip-padding-x:                 $spacer * .5 !default;\n$tooltip-margin:                    null !default; // TODO: remove this in v6\n\n$tooltip-arrow-width:               .8rem !default;\n$tooltip-arrow-height:              .4rem !default;\n// fusv-disable\n$tooltip-arrow-color:               null !default; // Deprecated in Bootstrap 5.2.0 for CSS variables\n// fusv-enable\n// scss-docs-end tooltip-variables\n\n// Form tooltips must come after regular tooltips\n// scss-docs-start tooltip-feedback-variables\n$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;\n$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;\n$form-feedback-tooltip-font-size:     $tooltip-font-size !default;\n$form-feedback-tooltip-line-height:   null !default;\n$form-feedback-tooltip-opacity:       $tooltip-opacity !default;\n$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;\n// scss-docs-end tooltip-feedback-variables\n\n\n// Popovers\n\n// scss-docs-start popover-variables\n$popover-font-size:                 $font-size-sm !default;\n$popover-bg:                        var(--#{$prefix}body-bg) !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              var(--#{$prefix}border-width) !default;\n$popover-border-color:              var(--#{$prefix}border-color-translucent) !default;\n$popover-border-radius:             var(--#{$prefix}border-radius-lg) !default;\n$popover-inner-border-radius:       calc(#{$popover-border-radius} - #{$popover-border-width}) !default; // stylelint-disable-line function-disallowed-list\n$popover-box-shadow:                var(--#{$prefix}box-shadow) !default;\n\n$popover-header-font-size:          $font-size-base !default;\n$popover-header-bg:                 var(--#{$prefix}secondary-bg) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          $spacer !default;\n\n$popover-body-color:                var(--#{$prefix}body-color) !default;\n$popover-body-padding-y:            $spacer !default;\n$popover-body-padding-x:            $spacer !default;\n\n$popover-arrow-width:               1rem !default;\n$popover-arrow-height:              .5rem !default;\n// scss-docs-end popover-variables\n\n// fusv-disable\n// Deprecated in Bootstrap 5.2.0 for CSS variables\n$popover-arrow-color:               $popover-bg !default;\n$popover-arrow-outer-color:         var(--#{$prefix}border-color-translucent) !default;\n// fusv-enable\n\n\n// Toasts\n\n// scss-docs-start toast-variables\n$toast-max-width:                   350px !default;\n$toast-padding-x:                   .75rem !default;\n$toast-padding-y:                   .5rem !default;\n$toast-font-size:                   .875rem !default;\n$toast-color:                       null !default;\n$toast-background-color:            rgba(var(--#{$prefix}body-bg-rgb), .85) !default;\n$toast-border-width:                var(--#{$prefix}border-width) !default;\n$toast-border-color:                var(--#{$prefix}border-color-translucent) !default;\n$toast-border-radius:               var(--#{$prefix}border-radius) !default;\n$toast-box-shadow:                  var(--#{$prefix}box-shadow) !default;\n$toast-spacing:                     $container-padding-x !default;\n\n$toast-header-color:                var(--#{$prefix}secondary-color) !default;\n$toast-header-background-color:     rgba(var(--#{$prefix}body-bg-rgb), .85) !default;\n$toast-header-border-color:         $toast-border-color !default;\n// scss-docs-end toast-variables\n\n\n// Badges\n\n// scss-docs-start badge-variables\n$badge-font-size:                   .75em !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-color:                       $white !default;\n$badge-padding-y:                   .35em !default;\n$badge-padding-x:                   .65em !default;\n$badge-border-radius:               var(--#{$prefix}border-radius) !default;\n// scss-docs-end badge-variables\n\n\n// Modals\n\n// scss-docs-start modal-variables\n$modal-inner-padding:               $spacer !default;\n\n$modal-footer-margin-between:       .5rem !default;\n\n$modal-dialog-margin:               .5rem !default;\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-color:               null !default;\n$modal-content-bg:                  var(--#{$prefix}body-bg) !default;\n$modal-content-border-color:        var(--#{$prefix}border-color-translucent) !default;\n$modal-content-border-width:        var(--#{$prefix}border-width) !default;\n$modal-content-border-radius:       var(--#{$prefix}border-radius-lg) !default;\n$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;\n$modal-content-box-shadow-xs:       var(--#{$prefix}box-shadow-sm) !default;\n$modal-content-box-shadow-sm-up:    var(--#{$prefix}box-shadow) !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n\n$modal-header-border-color:         var(--#{$prefix}border-color) !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-header-padding-y:            $modal-inner-padding !default;\n$modal-header-padding-x:            $modal-inner-padding !default;\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\n\n$modal-footer-bg:                   null !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n\n$modal-sm:                          300px !default;\n$modal-md:                          500px !default;\n$modal-lg:                          800px !default;\n$modal-xl:                          1140px !default;\n\n$modal-fade-transform:              translate(0, -50px) !default;\n$modal-show-transform:              none !default;\n$modal-transition:                  transform .3s ease-out !default;\n$modal-scale-transform:             scale(1.02) !default;\n// scss-docs-end modal-variables\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n// scss-docs-start alert-variables\n$alert-padding-y:               $spacer !default;\n$alert-padding-x:               $spacer !default;\n$alert-margin-bottom:           1rem !default;\n$alert-border-radius:           var(--#{$prefix}border-radius) !default;\n$alert-link-font-weight:        $font-weight-bold !default;\n$alert-border-width:            var(--#{$prefix}border-width) !default;\n$alert-dismissible-padding-r:   $alert-padding-x * 3 !default; // 3x covers width of x plus default padding on either side\n// scss-docs-end alert-variables\n\n// fusv-disable\n$alert-bg-scale:                -80% !default; // Deprecated in v5.2.0, to be removed in v6\n$alert-border-scale:            -70% !default; // Deprecated in v5.2.0, to be removed in v6\n$alert-color-scale:             40% !default; // Deprecated in v5.2.0, to be removed in v6\n// fusv-enable\n\n// Progress bars\n\n// scss-docs-start progress-variables\n$progress-height:                   1rem !default;\n$progress-font-size:                $font-size-base * .75 !default;\n$progress-bg:                       var(--#{$prefix}secondary-bg) !default;\n$progress-border-radius:            var(--#{$prefix}border-radius) !default;\n$progress-box-shadow:               var(--#{$prefix}box-shadow-inset) !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   $primary !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n// scss-docs-end progress-variables\n\n\n// List group\n\n// scss-docs-start list-group-variables\n$list-group-color:                  var(--#{$prefix}body-color) !default;\n$list-group-bg:                     var(--#{$prefix}body-bg) !default;\n$list-group-border-color:           var(--#{$prefix}border-color) !default;\n$list-group-border-width:           var(--#{$prefix}border-width) !default;\n$list-group-border-radius:          var(--#{$prefix}border-radius) !default;\n\n$list-group-item-padding-y:         $spacer * .5 !default;\n$list-group-item-padding-x:         $spacer !default;\n// fusv-disable\n$list-group-item-bg-scale:          -80% !default; // Deprecated in v5.3.0\n$list-group-item-color-scale:       40% !default; // Deprecated in v5.3.0\n// fusv-enable\n\n$list-group-hover-bg:               var(--#{$prefix}tertiary-bg) !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         var(--#{$prefix}secondary-color) !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           var(--#{$prefix}secondary-color) !default;\n$list-group-action-hover-color:     var(--#{$prefix}emphasis-color) !default;\n\n$list-group-action-active-color:    var(--#{$prefix}body-color) !default;\n$list-group-action-active-bg:       var(--#{$prefix}secondary-bg) !default;\n// scss-docs-end list-group-variables\n\n\n// Image thumbnails\n\n// scss-docs-start thumbnail-variables\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      var(--#{$prefix}body-bg) !default;\n$thumbnail-border-width:            var(--#{$prefix}border-width) !default;\n$thumbnail-border-color:            var(--#{$prefix}border-color) !default;\n$thumbnail-border-radius:           var(--#{$prefix}border-radius) !default;\n$thumbnail-box-shadow:              var(--#{$prefix}box-shadow-sm) !default;\n// scss-docs-end thumbnail-variables\n\n\n// Figures\n\n// scss-docs-start figure-variables\n$figure-caption-font-size:          $small-font-size !default;\n$figure-caption-color:              var(--#{$prefix}secondary-color) !default;\n// scss-docs-end figure-variables\n\n\n// Breadcrumbs\n\n// scss-docs-start breadcrumb-variables\n$breadcrumb-font-size:              null !default;\n$breadcrumb-padding-y:              0 !default;\n$breadcrumb-padding-x:              0 !default;\n$breadcrumb-item-padding-x:         .5rem !default;\n$breadcrumb-margin-bottom:          1rem !default;\n$breadcrumb-bg:                     null !default;\n$breadcrumb-divider-color:          var(--#{$prefix}secondary-color) !default;\n$breadcrumb-active-color:           var(--#{$prefix}secondary-color) !default;\n$breadcrumb-divider:                quote(\"/\") !default;\n$breadcrumb-divider-flipped:        $breadcrumb-divider !default;\n$breadcrumb-border-radius:          null !default;\n// scss-docs-end breadcrumb-variables\n\n// Carousel\n\n// scss-docs-start carousel-variables\n$carousel-control-color:             $white !default;\n$carousel-control-width:             15% !default;\n$carousel-control-opacity:           .5 !default;\n$carousel-control-hover-opacity:     .9 !default;\n$carousel-control-transition:        opacity .15s ease !default;\n\n$carousel-indicator-width:           30px !default;\n$carousel-indicator-height:          3px !default;\n$carousel-indicator-hit-area-height: 10px !default;\n$carousel-indicator-spacer:          3px !default;\n$carousel-indicator-opacity:         .5 !default;\n$carousel-indicator-active-bg:       $white !default;\n$carousel-indicator-active-opacity:  1 !default;\n$carousel-indicator-transition:      opacity .6s ease !default;\n\n$carousel-caption-width:             70% !default;\n$carousel-caption-color:             $white !default;\n$carousel-caption-padding-y:         1.25rem !default;\n$carousel-caption-spacer:            1.25rem !default;\n\n$carousel-control-icon-width:        2rem !default;\n\n$carousel-control-prev-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>\") !default;\n$carousel-control-next-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n\n$carousel-transition-duration:       .6s !default;\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)\n// scss-docs-end carousel-variables\n\n// scss-docs-start carousel-dark-variables\n$carousel-dark-indicator-active-bg:  $black !default;\n$carousel-dark-caption-color:        $black !default;\n$carousel-dark-control-icon-filter:  invert(1) grayscale(100) !default;\n// scss-docs-end carousel-dark-variables\n\n\n// Spinners\n\n// scss-docs-start spinner-variables\n$spinner-width:           2rem !default;\n$spinner-height:          $spinner-width !default;\n$spinner-vertical-align:  -.125em !default;\n$spinner-border-width:    .25em !default;\n$spinner-animation-speed: .75s !default;\n\n$spinner-width-sm:        1rem !default;\n$spinner-height-sm:       $spinner-width-sm !default;\n$spinner-border-width-sm: .2em !default;\n// scss-docs-end spinner-variables\n\n\n// Close\n\n// scss-docs-start close-variables\n$btn-close-width:            1em !default;\n$btn-close-height:           $btn-close-width !default;\n$btn-close-padding-x:        .25em !default;\n$btn-close-padding-y:        $btn-close-padding-x !default;\n$btn-close-color:            $black !default;\n$btn-close-bg:               url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>\") !default;\n$btn-close-focus-shadow:     $focus-ring-box-shadow !default;\n$btn-close-opacity:          .5 !default;\n$btn-close-hover-opacity:    .75 !default;\n$btn-close-focus-opacity:    1 !default;\n$btn-close-disabled-opacity: .25 !default;\n$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%) !default;\n// scss-docs-end close-variables\n\n\n// Offcanvas\n\n// scss-docs-start offcanvas-variables\n$offcanvas-padding-y:               $modal-inner-padding !default;\n$offcanvas-padding-x:               $modal-inner-padding !default;\n$offcanvas-horizontal-width:        400px !default;\n$offcanvas-vertical-height:         30vh !default;\n$offcanvas-transition-duration:     .3s !default;\n$offcanvas-border-color:            $modal-content-border-color !default;\n$offcanvas-border-width:            $modal-content-border-width !default;\n$offcanvas-title-line-height:       $modal-title-line-height !default;\n$offcanvas-bg-color:                var(--#{$prefix}body-bg) !default;\n$offcanvas-color:                   var(--#{$prefix}body-color) !default;\n$offcanvas-box-shadow:              $modal-content-box-shadow-xs !default;\n$offcanvas-backdrop-bg:             $modal-backdrop-bg !default;\n$offcanvas-backdrop-opacity:        $modal-backdrop-opacity !default;\n// scss-docs-end offcanvas-variables\n\n// Code\n\n$code-font-size:                    $small-font-size !default;\n$code-color:                        $pink !default;\n\n$kbd-padding-y:                     .1875rem !default;\n$kbd-padding-x:                     .375rem !default;\n$kbd-font-size:                     $code-font-size !default;\n$kbd-color:                         var(--#{$prefix}body-bg) !default;\n$kbd-bg:                            var(--#{$prefix}body-color) !default;\n$nested-kbd-font-weight:            null !default; // Deprecated in v5.2.0, removing in v6\n\n$pre-color:                         null !default;\n","// stylelint-disable property-disallowed-list\n// Single side border-radius\n\n// Helper function to replace negative values with 0\n@function valid-radius($radius) {\n  $return: ();\n  @each $value in $radius {\n    @if type-of($value) == number {\n      $return: append($return, max($value, 0));\n    } @else {\n      $return: append($return, $value);\n    }\n  }\n  @return $return;\n}\n\n// scss-docs-start border-radius-mixins\n@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n  @if $enable-rounded {\n    border-radius: valid-radius($radius);\n  }\n  @else if $fallback-border-radius != false {\n    border-radius: $fallback-border-radius;\n  }\n}\n\n@mixin border-top-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n// scss-docs-end border-radius-mixins\n","//\n// Headings\n//\n.h1 {\n  @extend h1;\n}\n\n.h2 {\n  @extend h2;\n}\n\n.h3 {\n  @extend h3;\n}\n\n.h4 {\n  @extend h4;\n}\n\n.h5 {\n  @extend h5;\n}\n\n.h6 {\n  @extend h6;\n}\n\n\n.lead {\n  @include font-size($lead-font-size);\n  font-weight: $lead-font-weight;\n}\n\n// Type display classes\n@each $display, $font-size in $display-font-sizes {\n  .display-#{$display} {\n    @include font-size($font-size);\n    font-family: $display-font-family;\n    font-style: $display-font-style;\n    font-weight: $display-font-weight;\n    line-height: $display-line-height;\n  }\n}\n\n//\n// Emphasis\n//\n.small {\n  @extend small;\n}\n\n.mark {\n  @extend mark;\n}\n\n//\n// Lists\n//\n\n.list-unstyled {\n  @include list-unstyled();\n}\n\n// Inline turns list items into inline-block\n.list-inline {\n  @include list-unstyled();\n}\n.list-inline-item {\n  display: inline-block;\n\n  &:not(:last-child) {\n    margin-right: $list-inline-padding;\n  }\n}\n\n\n//\n// Misc\n//\n\n// Builds on `abbr`\n.initialism {\n  @include font-size($initialism-font-size);\n  text-transform: uppercase;\n}\n\n// Blockquotes\n.blockquote {\n  margin-bottom: $blockquote-margin-y;\n  @include font-size($blockquote-font-size);\n\n  > :last-child {\n    margin-bottom: 0;\n  }\n}\n\n.blockquote-footer {\n  margin-top: -$blockquote-margin-y;\n  margin-bottom: $blockquote-margin-y;\n  @include font-size($blockquote-footer-font-size);\n  color: $blockquote-footer-color;\n\n  &::before {\n    content: \"\\2014\\00A0\"; // em dash, nbsp\n  }\n}\n","// Lists\n\n// Unstyled keeps list items block level, just removes default browser padding and list-style\n@mixin list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n","// Responsive images (ensure images don't scale beyond their parents)\n//\n// This is purposefully opt-in via an explicit class rather than being the default for all `<img>`s.\n// We previously tried the \"images are responsive by default\" approach in Bootstrap v2,\n// and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n// which weren't expecting the images within themselves to be involuntarily resized.\n// See also https://github.com/twbs/bootstrap/issues/18178\n.img-fluid {\n  @include img-fluid();\n}\n\n\n// Image thumbnails\n.img-thumbnail {\n  padding: $thumbnail-padding;\n  background-color: $thumbnail-bg;\n  border: $thumbnail-border-width solid $thumbnail-border-color;\n  @include border-radius($thumbnail-border-radius);\n  @include box-shadow($thumbnail-box-shadow);\n\n  // Keep them at most 100% wide\n  @include img-fluid();\n}\n\n//\n// Figures\n//\n\n.figure {\n  // Ensures the caption's text aligns with the image.\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: $spacer * .5;\n  line-height: 1;\n}\n\n.figure-caption {\n  @include font-size($figure-caption-font-size);\n  color: $figure-caption-color;\n}\n","// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n\n@mixin img-fluid {\n  // Part 1: Set a maximum relative to the parent\n  max-width: 100%;\n  // Part 2: Override the height to auto, otherwise images will be stretched\n  // when setting a width and height attribute on the img element.\n  height: auto;\n}\n","// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n@if $enable-container-classes {\n  // Single container class with breakpoint max-widths\n  .container,\n  // 100% wide container at all breakpoints\n  .container-fluid {\n    @include make-container();\n  }\n\n  // Responsive containers that are 100% wide until a breakpoint\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    .container-#{$breakpoint} {\n      @extend .container-fluid;\n    }\n\n    @include media-breakpoint-up($breakpoint, $grid-breakpoints) {\n      %responsive-container-#{$breakpoint} {\n        max-width: $container-max-width;\n      }\n\n      // Extend each breakpoint which is smaller or equal to the current breakpoint\n      $extend-breakpoint: true;\n\n      @each $name, $width in $grid-breakpoints {\n        @if ($extend-breakpoint) {\n          .container#{breakpoint-infix($name, $grid-breakpoints)} {\n            @extend %responsive-container-#{$breakpoint};\n          }\n\n          // Once the current breakpoint is reached, stop extending\n          @if ($breakpoint == $name) {\n            $extend-breakpoint: false;\n          }\n        }\n      }\n    }\n  }\n}\n","// Container mixins\n\n@mixin make-container($gutter: $container-padding-x) {\n  --#{$prefix}gutter-x: #{$gutter};\n  --#{$prefix}gutter-y: 0;\n  width: 100%;\n  padding-right: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list\n  padding-left: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list\n  margin-right: auto;\n  margin-left: auto;\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl xxl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @if not $n {\n    @error \"breakpoint `#{$name}` not found in `#{$breakpoints}`\";\n  }\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width.\n// The maximum value is reduced by 0.02px to work around the limitations of\n// `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $max: map-get($breakpoints, $name);\n  @return if($max and $max > 0, $max - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min:  breakpoint-min($name, $breakpoints);\n  $next: breakpoint-next($name, $breakpoints);\n  $max:  breakpoint-max($next, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($next, $breakpoints) {\n      @content;\n    }\n  }\n}\n","// Row\n//\n// Rows contain your columns.\n\n:root {\n  @each $name, $value in $grid-breakpoints {\n    --#{$prefix}breakpoint-#{$name}: #{$value};\n  }\n}\n\n@if $enable-grid-classes {\n  .row {\n    @include make-row();\n\n    > * {\n      @include make-col-ready();\n    }\n  }\n}\n\n@if $enable-cssgrid {\n  .grid {\n    display: grid;\n    grid-template-rows: repeat(var(--#{$prefix}rows, 1), 1fr);\n    grid-template-columns: repeat(var(--#{$prefix}columns, #{$grid-columns}), 1fr);\n    gap: var(--#{$prefix}gap, #{$grid-gutter-width});\n\n    @include make-cssgrid();\n  }\n}\n\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@if $enable-grid-classes {\n  @include make-grid-columns();\n}\n","// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n@mixin make-row($gutter: $grid-gutter-width) {\n  --#{$prefix}gutter-x: #{$gutter};\n  --#{$prefix}gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  // TODO: Revisit calc order after https://github.com/react-bootstrap/react-bootstrap/issues/6039 is fixed\n  margin-top: calc(-1 * var(--#{$prefix}gutter-y)); // stylelint-disable-line function-disallowed-list\n  margin-right: calc(-.5 * var(--#{$prefix}gutter-x)); // stylelint-disable-line function-disallowed-list\n  margin-left: calc(-.5 * var(--#{$prefix}gutter-x)); // stylelint-disable-line function-disallowed-list\n}\n\n@mixin make-col-ready() {\n  // Add box sizing if only the grid is loaded\n  box-sizing: if(variable-exists(include-column-box-sizing) and $include-column-box-sizing, border-box, null);\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\n  // always setting `width: 100%;`. This works because we set the width\n  // later on to override this initial width.\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%; // Prevent `.col-auto`, `.col` (& responsive variants) from breaking out the grid\n  padding-right: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list\n  padding-left: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list\n  margin-top: var(--#{$prefix}gutter-y);\n}\n\n@mixin make-col($size: false, $columns: $grid-columns) {\n  @if $size {\n    flex: 0 0 auto;\n    width: percentage(divide($size, $columns));\n\n  } @else {\n    flex: 1 1 0;\n    max-width: 100%;\n  }\n}\n\n@mixin make-col-auto() {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n@mixin make-col-offset($size, $columns: $grid-columns) {\n  $num: divide($size, $columns);\n  margin-left: if($num == 0, 0, percentage($num));\n}\n\n// Row columns\n//\n// Specify on a parent element(e.g., .row) to force immediate children into NN\n// number of columns. Supports wrapping to new lines, but does not do a Masonry\n// style grid.\n@mixin row-cols($count) {\n  > * {\n    flex: 0 0 auto;\n    width: percentage(divide(1, $count));\n  }\n}\n\n// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\n      .col#{$infix} {\n        flex: 1 0 0%; // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      }\n\n      .row-cols#{$infix}-auto > * {\n        @include make-col-auto();\n      }\n\n      @if $grid-row-columns > 0 {\n        @for $i from 1 through $grid-row-columns {\n          .row-cols#{$infix}-#{$i} {\n            @include row-cols($i);\n          }\n        }\n      }\n\n      .col#{$infix}-auto {\n        @include make-col-auto();\n      }\n\n      @if $columns > 0 {\n        @for $i from 1 through $columns {\n          .col#{$infix}-#{$i} {\n            @include make-col($i, $columns);\n          }\n        }\n\n        // `$columns - 1` because offsetting by the width of an entire row isn't possible\n        @for $i from 0 through ($columns - 1) {\n          @if not ($infix == \"\" and $i == 0) { // Avoid emitting useless .offset-0\n            .offset#{$infix}-#{$i} {\n              @include make-col-offset($i, $columns);\n            }\n          }\n        }\n      }\n\n      // Gutters\n      //\n      // Make use of `.g-*`, `.gx-*` or `.gy-*` utilities to change spacing between the columns.\n      @each $key, $value in $gutters {\n        .g#{$infix}-#{$key},\n        .gx#{$infix}-#{$key} {\n          --#{$prefix}gutter-x: #{$value};\n        }\n\n        .g#{$infix}-#{$key},\n        .gy#{$infix}-#{$key} {\n          --#{$prefix}gutter-y: #{$value};\n        }\n      }\n    }\n  }\n}\n\n@mixin make-cssgrid($columns: $grid-columns, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      @if $columns > 0 {\n        @for $i from 1 through $columns {\n          .g-col#{$infix}-#{$i} {\n            grid-column: auto / span $i;\n          }\n        }\n\n        // Start with `1` because `0` is and invalid value.\n        // Ends with `$columns - 1` because offsetting by the width of an entire row isn't possible.\n        @for $i from 1 through ($columns - 1) {\n          .g-start#{$infix}-#{$i} {\n            grid-column-start: $i;\n          }\n        }\n      }\n    }\n  }\n}\n","//\n// Basic Bootstrap table\n//\n\n.table {\n  // Reset needed for nesting tables\n  --#{$prefix}table-color-type: initial;\n  --#{$prefix}table-bg-type: initial;\n  --#{$prefix}table-color-state: initial;\n  --#{$prefix}table-bg-state: initial;\n  // End of reset\n  --#{$prefix}table-color: #{$table-color};\n  --#{$prefix}table-bg: #{$table-bg};\n  --#{$prefix}table-border-color: #{$table-border-color};\n  --#{$prefix}table-accent-bg: #{$table-accent-bg};\n  --#{$prefix}table-striped-color: #{$table-striped-color};\n  --#{$prefix}table-striped-bg: #{$table-striped-bg};\n  --#{$prefix}table-active-color: #{$table-active-color};\n  --#{$prefix}table-active-bg: #{$table-active-bg};\n  --#{$prefix}table-hover-color: #{$table-hover-color};\n  --#{$prefix}table-hover-bg: #{$table-hover-bg};\n\n  width: 100%;\n  margin-bottom: $spacer;\n  vertical-align: $table-cell-vertical-align;\n  border-color: var(--#{$prefix}table-border-color);\n\n  // Target th & td\n  // We need the child combinator to prevent styles leaking to nested tables which doesn't have a `.table` class.\n  // We use the universal selectors here to simplify the selector (else we would need 6 different selectors).\n  // Another advantage is that this generates less code and makes the selector less specific making it easier to override.\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    padding: $table-cell-padding-y $table-cell-padding-x;\n    // Following the precept of cascades: https://codepen.io/miriamsuzanne/full/vYNgodb\n    color: var(--#{$prefix}table-color-state, var(--#{$prefix}table-color-type, var(--#{$prefix}table-color)));\n    background-color: var(--#{$prefix}table-bg);\n    border-bottom-width: $table-border-width;\n    box-shadow: inset 0 0 0 9999px var(--#{$prefix}table-bg-state, var(--#{$prefix}table-bg-type, var(--#{$prefix}table-accent-bg)));\n  }\n\n  > tbody {\n    vertical-align: inherit;\n  }\n\n  > thead {\n    vertical-align: bottom;\n  }\n}\n\n.table-group-divider {\n  border-top: calc(#{$table-border-width} * 2) solid $table-group-separator-color; // stylelint-disable-line function-disallowed-list\n}\n\n//\n// Change placement of captions with a class\n//\n\n.caption-top {\n  caption-side: top;\n}\n\n\n//\n// Condensed table w/ half padding\n//\n\n.table-sm {\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    padding: $table-cell-padding-y-sm $table-cell-padding-x-sm;\n  }\n}\n\n\n// Border versions\n//\n// Add or remove borders all around the table and between all the columns.\n//\n// When borders are added on all sides of the cells, the corners can render odd when\n// these borders do not have the same color or if they are semi-transparent.\n// Therefor we add top and border bottoms to the `tr`s and left and right borders\n// to the `td`s or `th`s\n\n.table-bordered {\n  > :not(caption) > * {\n    border-width: $table-border-width 0;\n\n    // stylelint-disable-next-line selector-max-universal\n    > * {\n      border-width: 0 $table-border-width;\n    }\n  }\n}\n\n.table-borderless {\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    border-bottom-width: 0;\n  }\n\n  > :not(:first-child) {\n    border-top-width: 0;\n  }\n}\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n// For rows\n.table-striped {\n  > tbody > tr:nth-of-type(#{$table-striped-order}) > * {\n    --#{$prefix}table-color-type: var(--#{$prefix}table-striped-color);\n    --#{$prefix}table-bg-type: var(--#{$prefix}table-striped-bg);\n  }\n}\n\n// For columns\n.table-striped-columns {\n  > :not(caption) > tr > :nth-child(#{$table-striped-columns-order}) {\n    --#{$prefix}table-color-type: var(--#{$prefix}table-striped-color);\n    --#{$prefix}table-bg-type: var(--#{$prefix}table-striped-bg);\n  }\n}\n\n// Active table\n//\n// The `.table-active` class can be added to highlight rows or cells\n\n.table-active {\n  --#{$prefix}table-color-state: var(--#{$prefix}table-active-color);\n  --#{$prefix}table-bg-state: var(--#{$prefix}table-active-bg);\n}\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  > tbody > tr:hover > * {\n    --#{$prefix}table-color-state: var(--#{$prefix}table-hover-color);\n    --#{$prefix}table-bg-state: var(--#{$prefix}table-hover-bg);\n  }\n}\n\n\n// Table variants\n//\n// Table variants set the table cell backgrounds, border colors\n// and the colors of the striped, hovered & active tables\n\n@each $color, $value in $table-variants {\n  @include table-variant($color, $value);\n}\n\n// Responsive tables\n//\n// Generate series of `.table-responsive-*` classes for configuring the screen\n// size of where your table will overflow.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n  @include media-breakpoint-down($breakpoint) {\n    .table-responsive#{$infix} {\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n}\n","// scss-docs-start table-variant\n@mixin table-variant($state, $background) {\n  .table-#{$state} {\n    $color: color-contrast(opaque($body-bg, $background));\n    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));\n    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));\n    $active-bg: mix($color, $background, percentage($table-active-bg-factor));\n    $table-border-color: mix($color, $background, percentage($table-border-factor));\n\n    --#{$prefix}table-color: #{$color};\n    --#{$prefix}table-bg: #{$background};\n    --#{$prefix}table-border-color: #{$table-border-color};\n    --#{$prefix}table-striped-bg: #{$striped-bg};\n    --#{$prefix}table-striped-color: #{color-contrast($striped-bg)};\n    --#{$prefix}table-active-bg: #{$active-bg};\n    --#{$prefix}table-active-color: #{color-contrast($active-bg)};\n    --#{$prefix}table-hover-bg: #{$hover-bg};\n    --#{$prefix}table-hover-color: #{color-contrast($hover-bg)};\n\n    color: var(--#{$prefix}table-color);\n    border-color: var(--#{$prefix}table-border-color);\n  }\n}\n// scss-docs-end table-variant\n","//\n// Labels\n//\n\n.form-label {\n  margin-bottom: $form-label-margin-bottom;\n  @include font-size($form-label-font-size);\n  font-style: $form-label-font-style;\n  font-weight: $form-label-font-weight;\n  color: $form-label-color;\n}\n\n// For use with horizontal and inline forms, when you need the label (or legend)\n// text to align with the form controls.\n.col-form-label {\n  padding-top: add($input-padding-y, $input-border-width);\n  padding-bottom: add($input-padding-y, $input-border-width);\n  margin-bottom: 0; // Override the `<legend>` default\n  @include font-size(inherit); // Override the `<legend>` default\n  font-style: $form-label-font-style;\n  font-weight: $form-label-font-weight;\n  line-height: $input-line-height;\n  color: $form-label-color;\n}\n\n.col-form-label-lg {\n  padding-top: add($input-padding-y-lg, $input-border-width);\n  padding-bottom: add($input-padding-y-lg, $input-border-width);\n  @include font-size($input-font-size-lg);\n}\n\n.col-form-label-sm {\n  padding-top: add($input-padding-y-sm, $input-border-width);\n  padding-bottom: add($input-padding-y-sm, $input-border-width);\n  @include font-size($input-font-size-sm);\n}\n","//\n// Form text\n//\n\n.form-text {\n  margin-top: $form-text-margin-top;\n  @include font-size($form-text-font-size);\n  font-style: $form-text-font-style;\n  font-weight: $form-text-font-weight;\n  color: $form-text-color;\n}\n","//\n// General form controls (plus a few specific high-level interventions)\n//\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y $input-padding-x;\n  font-family: $input-font-family;\n  @include font-size($input-font-size);\n  font-weight: $input-font-weight;\n  line-height: $input-line-height;\n  color: $input-color;\n  appearance: none; // Fix appearance for date inputs in Safari\n  background-color: $input-bg;\n  background-clip: padding-box;\n  border: $input-border-width solid $input-border-color;\n\n  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.\n  @include border-radius($input-border-radius, 0);\n\n  @include box-shadow($input-box-shadow);\n  @include transition($input-transition);\n\n  &[type=\"file\"] {\n    overflow: hidden; // prevent pseudo element button overlap\n\n    &:not(:disabled):not([readonly]) {\n      cursor: pointer;\n    }\n  }\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  &:focus {\n    color: $input-focus-color;\n    background-color: $input-focus-bg;\n    border-color: $input-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($input-box-shadow, $input-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $input-focus-box-shadow;\n    }\n  }\n\n  &::-webkit-date-and-time-value {\n    // On Android Chrome, form-control's \"width: 100%\" makes the input width too small\n    // Tested under Android 11 / Chrome 89, Android 12 / Chrome 100, Android 13 / Chrome 109\n    //\n    // On iOS Safari, form-control's \"appearance: none\" + \"width: 100%\" makes the input width too small\n    // Tested under iOS 16.2 / Safari 16.2\n    min-width: 85px; // Seems to be a good minimum safe width\n\n    // Add some height to date inputs on iOS\n    // https://github.com/twbs/bootstrap/issues/23307\n    // TODO: we can remove this workaround once https://bugs.webkit.org/show_bug.cgi?id=198959 is resolved\n    // Multiply line-height by 1em if it has no unit\n    height: if(unit($input-line-height) == \"\", $input-line-height * 1em, $input-line-height);\n\n    // Android Chrome type=\"date\" is taller than the other inputs\n    // because of \"margin: 1px 24px 1px 4px\" inside the shadow DOM\n    // Tested under Android 11 / Chrome 89, Android 12 / Chrome 100, Android 13 / Chrome 109\n    margin: 0;\n  }\n\n  // Prevent excessive date input height in Webkit\n  // https://github.com/twbs/bootstrap/issues/34433\n  &::-webkit-datetime-edit {\n    display: block;\n    padding: 0;\n  }\n\n  // Placeholder\n  &::placeholder {\n    color: $input-placeholder-color;\n    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.\n    opacity: 1;\n  }\n\n  // Disabled inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don't honor that edge case; we style them as disabled anyway.\n  &:disabled {\n    color: $input-disabled-color;\n    background-color: $input-disabled-bg;\n    border-color: $input-disabled-border-color;\n    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.\n    opacity: 1;\n  }\n\n  // File input buttons theming\n  &::file-selector-button {\n    padding: $input-padding-y $input-padding-x;\n    margin: (-$input-padding-y) (-$input-padding-x);\n    margin-inline-end: $input-padding-x;\n    color: $form-file-button-color;\n    @include gradient-bg($form-file-button-bg);\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: $input-border-width;\n    border-radius: 0; // stylelint-disable-line property-disallowed-list\n    @include transition($btn-transition);\n  }\n\n  &:hover:not(:disabled):not([readonly])::file-selector-button {\n    background-color: $form-file-button-hover-bg;\n  }\n}\n\n// Readonly controls as plain text\n//\n// Apply class to a readonly input to make it appear like regular plain\n// text (without any border, background color, focus indicator)\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y 0;\n  margin-bottom: 0; // match inputs if this class comes on inputs with default margins\n  line-height: $input-line-height;\n  color: $input-plaintext-color;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: $input-border-width 0;\n\n  &:focus {\n    outline: 0;\n  }\n\n  &.form-control-sm,\n  &.form-control-lg {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// Repeated in `_input_group.scss` to avoid Sass extend issues.\n\n.form-control-sm {\n  min-height: $input-height-sm;\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  @include border-radius($input-border-radius-sm);\n\n  &::file-selector-button {\n    padding: $input-padding-y-sm $input-padding-x-sm;\n    margin: (-$input-padding-y-sm) (-$input-padding-x-sm);\n    margin-inline-end: $input-padding-x-sm;\n  }\n}\n\n.form-control-lg {\n  min-height: $input-height-lg;\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  @include border-radius($input-border-radius-lg);\n\n  &::file-selector-button {\n    padding: $input-padding-y-lg $input-padding-x-lg;\n    margin: (-$input-padding-y-lg) (-$input-padding-x-lg);\n    margin-inline-end: $input-padding-x-lg;\n  }\n}\n\n// Make sure textareas don't shrink too much when resized\n// https://github.com/twbs/bootstrap/pull/29124\n// stylelint-disable selector-no-qualifying-type\ntextarea {\n  &.form-control {\n    min-height: $input-height;\n  }\n\n  &.form-control-sm {\n    min-height: $input-height-sm;\n  }\n\n  &.form-control-lg {\n    min-height: $input-height-lg;\n  }\n}\n// stylelint-enable selector-no-qualifying-type\n\n.form-control-color {\n  width: $form-color-width;\n  height: $input-height;\n  padding: $input-padding-y;\n\n  &:not(:disabled):not([readonly]) {\n    cursor: pointer;\n  }\n\n  &::-moz-color-swatch {\n    border: 0 !important; // stylelint-disable-line declaration-no-important\n    @include border-radius($input-border-radius);\n  }\n\n  &::-webkit-color-swatch {\n    border: 0 !important; // stylelint-disable-line declaration-no-important\n    @include border-radius($input-border-radius);\n  }\n\n  &.form-control-sm { height: $input-height-sm; }\n  &.form-control-lg { height: $input-height-lg; }\n}\n","// stylelint-disable property-disallowed-list\n@mixin transition($transition...) {\n  @if length($transition) == 0 {\n    $transition: $transition-base;\n  }\n\n  @if length($transition) > 1 {\n    @each $value in $transition {\n      @if $value == null or $value == none {\n        @warn \"The keyword 'none' or 'null' must be used as a single argument.\";\n      }\n    }\n  }\n\n  @if $enable-transitions {\n    @if nth($transition, 1) != null {\n      transition: $transition;\n    }\n\n    @if $enable-reduced-motion and nth($transition, 1) != null and nth($transition, 1) != none {\n      @media (prefers-reduced-motion: reduce) {\n        transition: none;\n      }\n    }\n  }\n}\n","// Gradients\n\n// scss-docs-start gradient-bg-mixin\n@mixin gradient-bg($color: null) {\n  background-color: $color;\n\n  @if $enable-gradients {\n    background-image: var(--#{$prefix}gradient);\n  }\n}\n// scss-docs-end gradient-bg-mixin\n\n// scss-docs-start gradient-mixins\n// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n}\n\n@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\n  background-image: linear-gradient($deg, $start-color, $end-color);\n}\n\n@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n}\n\n@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}\n// scss-docs-end gradient-mixins\n","// Select\n//\n// Replaces the browser default select with a custom one, mostly pulled from\n// https://primer.github.io/.\n\n.form-select {\n  --#{$prefix}form-select-bg-img: #{escape-svg($form-select-indicator)};\n\n  display: block;\n  width: 100%;\n  padding: $form-select-padding-y $form-select-indicator-padding $form-select-padding-y $form-select-padding-x;\n  font-family: $form-select-font-family;\n  @include font-size($form-select-font-size);\n  font-weight: $form-select-font-weight;\n  line-height: $form-select-line-height;\n  color: $form-select-color;\n  appearance: none;\n  background-color: $form-select-bg;\n  background-image: var(--#{$prefix}form-select-bg-img), var(--#{$prefix}form-select-bg-icon, none);\n  background-repeat: no-repeat;\n  background-position: $form-select-bg-position;\n  background-size: $form-select-bg-size;\n  border: $form-select-border-width solid $form-select-border-color;\n  @include border-radius($form-select-border-radius, 0);\n  @include box-shadow($form-select-box-shadow);\n  @include transition($form-select-transition);\n\n  &:focus {\n    border-color: $form-select-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($form-select-box-shadow, $form-select-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $form-select-focus-box-shadow;\n    }\n  }\n\n  &[multiple],\n  &[size]:not([size=\"1\"]) {\n    padding-right: $form-select-padding-x;\n    background-image: none;\n  }\n\n  &:disabled {\n    color: $form-select-disabled-color;\n    background-color: $form-select-disabled-bg;\n    border-color: $form-select-disabled-border-color;\n  }\n\n  // Remove outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $form-select-color;\n  }\n}\n\n.form-select-sm {\n  padding-top: $form-select-padding-y-sm;\n  padding-bottom: $form-select-padding-y-sm;\n  padding-left: $form-select-padding-x-sm;\n  @include font-size($form-select-font-size-sm);\n  @include border-radius($form-select-border-radius-sm);\n}\n\n.form-select-lg {\n  padding-top: $form-select-padding-y-lg;\n  padding-bottom: $form-select-padding-y-lg;\n  padding-left: $form-select-padding-x-lg;\n  @include font-size($form-select-font-size-lg);\n  @include border-radius($form-select-border-radius-lg);\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    .form-select {\n      --#{$prefix}form-select-bg-img: #{escape-svg($form-select-indicator-dark)};\n    }\n  }\n}\n","//\n// Check/radio\n//\n\n.form-check {\n  display: block;\n  min-height: $form-check-min-height;\n  padding-left: $form-check-padding-start;\n  margin-bottom: $form-check-margin-bottom;\n\n  .form-check-input {\n    float: left;\n    margin-left: $form-check-padding-start * -1;\n  }\n}\n\n.form-check-reverse {\n  padding-right: $form-check-padding-start;\n  padding-left: 0;\n  text-align: right;\n\n  .form-check-input {\n    float: right;\n    margin-right: $form-check-padding-start * -1;\n    margin-left: 0;\n  }\n}\n\n.form-check-input {\n  --#{$prefix}form-check-bg: #{$form-check-input-bg};\n\n  flex-shrink: 0;\n  width: $form-check-input-width;\n  height: $form-check-input-width;\n  margin-top: ($line-height-base - $form-check-input-width) * .5; // line-height minus check height\n  vertical-align: top;\n  appearance: none;\n  background-color: var(--#{$prefix}form-check-bg);\n  background-image: var(--#{$prefix}form-check-bg-image);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: $form-check-input-border;\n  print-color-adjust: exact; // Keep themed appearance for print\n  @include transition($form-check-transition);\n\n  &[type=\"checkbox\"] {\n    @include border-radius($form-check-input-border-radius);\n  }\n\n  &[type=\"radio\"] {\n    // stylelint-disable-next-line property-disallowed-list\n    border-radius: $form-check-radio-border-radius;\n  }\n\n  &:active {\n    filter: $form-check-input-active-filter;\n  }\n\n  &:focus {\n    border-color: $form-check-input-focus-border;\n    outline: 0;\n    box-shadow: $form-check-input-focus-box-shadow;\n  }\n\n  &:checked {\n    background-color: $form-check-input-checked-bg-color;\n    border-color: $form-check-input-checked-border-color;\n\n    &[type=\"checkbox\"] {\n      @if $enable-gradients {\n        --#{$prefix}form-check-bg-image: #{escape-svg($form-check-input-checked-bg-image)}, var(--#{$prefix}gradient);\n      } @else {\n        --#{$prefix}form-check-bg-image: #{escape-svg($form-check-input-checked-bg-image)};\n      }\n    }\n\n    &[type=\"radio\"] {\n      @if $enable-gradients {\n        --#{$prefix}form-check-bg-image: #{escape-svg($form-check-radio-checked-bg-image)}, var(--#{$prefix}gradient);\n      } @else {\n        --#{$prefix}form-check-bg-image: #{escape-svg($form-check-radio-checked-bg-image)};\n      }\n    }\n  }\n\n  &[type=\"checkbox\"]:indeterminate {\n    background-color: $form-check-input-indeterminate-bg-color;\n    border-color: $form-check-input-indeterminate-border-color;\n\n    @if $enable-gradients {\n      --#{$prefix}form-check-bg-image: #{escape-svg($form-check-input-indeterminate-bg-image)}, var(--#{$prefix}gradient);\n    } @else {\n      --#{$prefix}form-check-bg-image: #{escape-svg($form-check-input-indeterminate-bg-image)};\n    }\n  }\n\n  &:disabled {\n    pointer-events: none;\n    filter: none;\n    opacity: $form-check-input-disabled-opacity;\n  }\n\n  // Use disabled attribute in addition of :disabled pseudo-class\n  // See: https://github.com/twbs/bootstrap/issues/28247\n  &[disabled],\n  &:disabled {\n    ~ .form-check-label {\n      cursor: default;\n      opacity: $form-check-label-disabled-opacity;\n    }\n  }\n}\n\n.form-check-label {\n  color: $form-check-label-color;\n  cursor: $form-check-label-cursor;\n}\n\n//\n// Switch\n//\n\n.form-switch {\n  padding-left: $form-switch-padding-start;\n\n  .form-check-input {\n    --#{$prefix}form-switch-bg: #{escape-svg($form-switch-bg-image)};\n\n    width: $form-switch-width;\n    margin-left: $form-switch-padding-start * -1;\n    background-image: var(--#{$prefix}form-switch-bg);\n    background-position: left center;\n    @include border-radius($form-switch-border-radius);\n    @include transition($form-switch-transition);\n\n    &:focus {\n      --#{$prefix}form-switch-bg: #{escape-svg($form-switch-focus-bg-image)};\n    }\n\n    &:checked {\n      background-position: $form-switch-checked-bg-position;\n\n      @if $enable-gradients {\n        --#{$prefix}form-switch-bg: #{escape-svg($form-switch-checked-bg-image)}, var(--#{$prefix}gradient);\n      } @else {\n        --#{$prefix}form-switch-bg: #{escape-svg($form-switch-checked-bg-image)};\n      }\n    }\n  }\n\n  &.form-check-reverse {\n    padding-right: $form-switch-padding-start;\n    padding-left: 0;\n\n    .form-check-input {\n      margin-right: $form-switch-padding-start * -1;\n      margin-left: 0;\n    }\n  }\n}\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: $form-check-inline-margin-end;\n}\n\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n\n  &[disabled],\n  &:disabled {\n    + .btn {\n      pointer-events: none;\n      filter: none;\n      opacity: $form-check-btn-check-disabled-opacity;\n    }\n  }\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    .form-switch .form-check-input:not(:checked):not(:focus) {\n      --#{$prefix}form-switch-bg: #{escape-svg($form-switch-bg-image-dark)};\n    }\n  }\n}\n","// Range\n//\n// Style range inputs the same across browsers. Vendor-specific rules for pseudo\n// elements cannot be mixed. As such, there are no shared styles for focus or\n// active states on prefixed selectors.\n\n.form-range {\n  width: 100%;\n  height: add($form-range-thumb-height, $form-range-thumb-focus-box-shadow-width * 2);\n  padding: 0; // Need to reset padding\n  appearance: none;\n  background-color: transparent;\n\n  &:focus {\n    outline: 0;\n\n    // Pseudo-elements must be split across multiple rulesets to have an effect.\n    // No box-shadow() mixin for focus accessibility.\n    &::-webkit-slider-thumb { box-shadow: $form-range-thumb-focus-box-shadow; }\n    &::-moz-range-thumb     { box-shadow: $form-range-thumb-focus-box-shadow; }\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    width: $form-range-thumb-width;\n    height: $form-range-thumb-height;\n    margin-top: ($form-range-track-height - $form-range-thumb-height) * .5; // Webkit specific\n    appearance: none;\n    @include gradient-bg($form-range-thumb-bg);\n    border: $form-range-thumb-border;\n    @include border-radius($form-range-thumb-border-radius);\n    @include box-shadow($form-range-thumb-box-shadow);\n    @include transition($form-range-thumb-transition);\n\n    &:active {\n      @include gradient-bg($form-range-thumb-active-bg);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: $form-range-track-width;\n    height: $form-range-track-height;\n    color: transparent; // Why?\n    cursor: $form-range-track-cursor;\n    background-color: $form-range-track-bg;\n    border-color: transparent;\n    @include border-radius($form-range-track-border-radius);\n    @include box-shadow($form-range-track-box-shadow);\n  }\n\n  &::-moz-range-thumb {\n    width: $form-range-thumb-width;\n    height: $form-range-thumb-height;\n    appearance: none;\n    @include gradient-bg($form-range-thumb-bg);\n    border: $form-range-thumb-border;\n    @include border-radius($form-range-thumb-border-radius);\n    @include box-shadow($form-range-thumb-box-shadow);\n    @include transition($form-range-thumb-transition);\n\n    &:active {\n      @include gradient-bg($form-range-thumb-active-bg);\n    }\n  }\n\n  &::-moz-range-track {\n    width: $form-range-track-width;\n    height: $form-range-track-height;\n    color: transparent;\n    cursor: $form-range-track-cursor;\n    background-color: $form-range-track-bg;\n    border-color: transparent; // Firefox specific?\n    @include border-radius($form-range-track-border-radius);\n    @include box-shadow($form-range-track-box-shadow);\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    &::-webkit-slider-thumb {\n      background-color: $form-range-thumb-disabled-bg;\n    }\n\n    &::-moz-range-thumb {\n      background-color: $form-range-thumb-disabled-bg;\n    }\n  }\n}\n",".form-floating {\n  position: relative;\n\n  > .form-control,\n  > .form-control-plaintext,\n  > .form-select {\n    height: $form-floating-height;\n    min-height: $form-floating-height;\n    line-height: $form-floating-line-height;\n  }\n\n  > label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    height: 100%; // allow textareas\n    padding: $form-floating-padding-y $form-floating-padding-x;\n    overflow: hidden;\n    text-align: start;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    pointer-events: none;\n    border: $input-border-width solid transparent; // Required for aligning label's text with the input as it affects inner box model\n    transform-origin: 0 0;\n    @include transition($form-floating-transition);\n  }\n\n  > .form-control,\n  > .form-control-plaintext {\n    padding: $form-floating-padding-y $form-floating-padding-x;\n\n    &::placeholder {\n      color: transparent;\n    }\n\n    &:focus,\n    &:not(:placeholder-shown) {\n      padding-top: $form-floating-input-padding-t;\n      padding-bottom: $form-floating-input-padding-b;\n    }\n    // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped\n    &:-webkit-autofill {\n      padding-top: $form-floating-input-padding-t;\n      padding-bottom: $form-floating-input-padding-b;\n    }\n  }\n\n  > .form-select {\n    padding-top: $form-floating-input-padding-t;\n    padding-bottom: $form-floating-input-padding-b;\n  }\n\n  > .form-control:focus,\n  > .form-control:not(:placeholder-shown),\n  > .form-control-plaintext,\n  > .form-select {\n    ~ label {\n      color: rgba(var(--#{$prefix}body-color-rgb), #{$form-floating-label-opacity});\n      transform: $form-floating-label-transform;\n\n      &::after {\n        position: absolute;\n        inset: $form-floating-padding-y ($form-floating-padding-x * .5);\n        z-index: -1;\n        height: $form-floating-label-height;\n        content: \"\";\n        background-color: $input-bg;\n        @include border-radius($input-border-radius);\n      }\n    }\n  }\n  // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped\n  > .form-control:-webkit-autofill {\n    ~ label {\n      color: rgba(var(--#{$prefix}body-color-rgb), #{$form-floating-label-opacity});\n      transform: $form-floating-label-transform;\n    }\n  }\n\n  > .form-control-plaintext {\n    ~ label {\n      border-width: $input-border-width 0; // Required to properly position label text - as explained above\n    }\n  }\n\n  > :disabled ~ label,\n  > .form-control:disabled ~ label { // Required for `.form-control`s because of specificity\n    color: $form-floating-label-disabled-color;\n\n    &::after {\n      background-color: $input-disabled-bg;\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // For form validation feedback\n  align-items: stretch;\n  width: 100%;\n\n  > .form-control,\n  > .form-select,\n  > .form-floating {\n    position: relative; // For focus state's z-index\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0; // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size\n  }\n\n  // Bring the \"active\" form control to the top of surrounding elements\n  > .form-control:focus,\n  > .form-select:focus,\n  > .form-floating:focus-within {\n    z-index: 5;\n  }\n\n  // Ensure buttons are always above inputs for more visually pleasing borders.\n  // This isn't needed for `.input-group-text` since it shares the same border-color\n  // as our inputs.\n  .btn {\n    position: relative;\n    z-index: 2;\n\n    &:focus {\n      z-index: 5;\n    }\n  }\n}\n\n\n// Textual addons\n//\n// Serves as a catch-all element for any text or radio/checkbox input you wish\n// to prepend or append to an input.\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: $input-group-addon-padding-y $input-group-addon-padding-x;\n  @include font-size($input-font-size); // Match inputs\n  font-weight: $input-group-addon-font-weight;\n  line-height: $input-line-height;\n  color: $input-group-addon-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $input-group-addon-bg;\n  border: $input-border-width solid $input-group-addon-border-color;\n  @include border-radius($input-border-radius);\n}\n\n\n// Sizing\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  @include border-radius($input-border-radius-lg);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  @include border-radius($input-border-radius-sm);\n}\n\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: $form-select-padding-x + $form-select-indicator-padding;\n}\n\n\n// Rounded corners\n//\n// These rulesets must come after the sizing ones to properly override sm and lg\n// border-radius values when extending. They're more specific than we'd like\n// with the `.input-group >` part, but without it, we cannot override the sizing.\n\n// stylelint-disable-next-line no-duplicate-selectors\n.input-group {\n  &:not(.has-validation) {\n    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),\n    > .dropdown-toggle:nth-last-child(n + 3),\n    > .form-floating:not(:last-child) > .form-control,\n    > .form-floating:not(:last-child) > .form-select {\n      @include border-end-radius(0);\n    }\n  }\n\n  &.has-validation {\n    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),\n    > .dropdown-toggle:nth-last-child(n + 4),\n    > .form-floating:nth-last-child(n + 3) > .form-control,\n    > .form-floating:nth-last-child(n + 3) > .form-select {\n      @include border-end-radius(0);\n    }\n  }\n\n  $validation-messages: \"\";\n  @each $state in map-keys($form-validation-states) {\n    $validation-messages: $validation-messages + \":not(.\" + unquote($state) + \"-tooltip)\" + \":not(.\" + unquote($state) + \"-feedback)\";\n  }\n\n  > :not(:first-child):not(.dropdown-menu)#{$validation-messages} {\n    margin-left: calc(#{$input-border-width} * -1); // stylelint-disable-line function-disallowed-list\n    @include border-start-radius(0);\n  }\n\n  > .form-floating:not(:first-child) > .form-control,\n  > .form-floating:not(:first-child) > .form-select {\n    @include border-start-radius(0);\n  }\n}\n","// This mixin uses an `if()` technique to be compatible with Dart Sass\n// See https://github.com/sass/sass/issues/1873#issuecomment-152293725 for more details\n\n// scss-docs-start form-validation-mixins\n@mixin form-validation-state-selector($state) {\n  @if ($state == \"valid\" or $state == \"invalid\") {\n    .was-validated #{if(&, \"&\", \"\")}:#{$state},\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  } @else {\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  }\n}\n\n@mixin form-validation-state(\n  $state,\n  $color,\n  $icon,\n  $tooltip-color: color-contrast($color),\n  $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),\n  $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity),\n  $border-color: $color\n) {\n  .#{$state}-feedback {\n    display: none;\n    width: 100%;\n    margin-top: $form-feedback-margin-top;\n    @include font-size($form-feedback-font-size);\n    font-style: $form-feedback-font-style;\n    color: $color;\n  }\n\n  .#{$state}-tooltip {\n    position: absolute;\n    top: 100%;\n    z-index: 5;\n    display: none;\n    max-width: 100%; // Contain to parent when possible\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\n    margin-top: .1rem;\n    @include font-size($form-feedback-tooltip-font-size);\n    line-height: $form-feedback-tooltip-line-height;\n    color: $tooltip-color;\n    background-color: $tooltip-bg-color;\n    @include border-radius($form-feedback-tooltip-border-radius);\n  }\n\n  @include form-validation-state-selector($state) {\n    ~ .#{$state}-feedback,\n    ~ .#{$state}-tooltip {\n      display: block;\n    }\n  }\n\n  .form-control {\n    @include form-validation-state-selector($state) {\n      border-color: $border-color;\n\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-image: escape-svg($icon);\n        background-repeat: no-repeat;\n        background-position: right $input-height-inner-quarter center;\n        background-size: $input-height-inner-half $input-height-inner-half;\n      }\n\n      &:focus {\n        border-color: $border-color;\n        box-shadow: $focus-box-shadow;\n      }\n    }\n  }\n\n  // stylelint-disable-next-line selector-no-qualifying-type\n  textarea.form-control {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\n      }\n    }\n  }\n\n  .form-select {\n    @include form-validation-state-selector($state) {\n      border-color: $border-color;\n\n      @if $enable-validation-icons {\n        &:not([multiple]):not([size]),\n        &:not([multiple])[size=\"1\"] {\n          --#{$prefix}form-select-bg-icon: #{escape-svg($icon)};\n          padding-right: $form-select-feedback-icon-padding-end;\n          background-position: $form-select-bg-position, $form-select-feedback-icon-position;\n          background-size: $form-select-bg-size, $form-select-feedback-icon-size;\n        }\n      }\n\n      &:focus {\n        border-color: $border-color;\n        box-shadow: $focus-box-shadow;\n      }\n    }\n  }\n\n  .form-control-color {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        width: add($form-color-width, $input-height-inner);\n      }\n    }\n  }\n\n  .form-check-input {\n    @include form-validation-state-selector($state) {\n      border-color: $border-color;\n\n      &:checked {\n        background-color: $color;\n      }\n\n      &:focus {\n        box-shadow: $focus-box-shadow;\n      }\n\n      ~ .form-check-label {\n        color: $color;\n      }\n    }\n  }\n  .form-check-inline .form-check-input {\n    ~ .#{$state}-feedback {\n      margin-left: .5em;\n    }\n  }\n\n  .input-group {\n    > .form-control:not(:focus),\n    > .form-select:not(:focus),\n    > .form-floating:not(:focus-within) {\n      @include form-validation-state-selector($state) {\n        @if $state == \"valid\" {\n          z-index: 3;\n        } @else if $state == \"invalid\" {\n          z-index: 4;\n        }\n      }\n    }\n  }\n}\n// scss-docs-end form-validation-mixins\n","//\n// Base styles\n//\n\n.btn {\n  // scss-docs-start btn-css-vars\n  --#{$prefix}btn-padding-x: #{$btn-padding-x};\n  --#{$prefix}btn-padding-y: #{$btn-padding-y};\n  --#{$prefix}btn-font-family: #{$btn-font-family};\n  @include rfs($btn-font-size, --#{$prefix}btn-font-size);\n  --#{$prefix}btn-font-weight: #{$btn-font-weight};\n  --#{$prefix}btn-line-height: #{$btn-line-height};\n  --#{$prefix}btn-color: #{$btn-color};\n  --#{$prefix}btn-bg: transparent;\n  --#{$prefix}btn-border-width: #{$btn-border-width};\n  --#{$prefix}btn-border-color: transparent;\n  --#{$prefix}btn-border-radius: #{$btn-border-radius};\n  --#{$prefix}btn-hover-border-color: transparent;\n  --#{$prefix}btn-box-shadow: #{$btn-box-shadow};\n  --#{$prefix}btn-disabled-opacity: #{$btn-disabled-opacity};\n  --#{$prefix}btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--#{$prefix}btn-focus-shadow-rgb), .5);\n  // scss-docs-end btn-css-vars\n\n  display: inline-block;\n  padding: var(--#{$prefix}btn-padding-y) var(--#{$prefix}btn-padding-x);\n  font-family: var(--#{$prefix}btn-font-family);\n  @include font-size(var(--#{$prefix}btn-font-size));\n  font-weight: var(--#{$prefix}btn-font-weight);\n  line-height: var(--#{$prefix}btn-line-height);\n  color: var(--#{$prefix}btn-color);\n  text-align: center;\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: $btn-white-space;\n  vertical-align: middle;\n  cursor: if($enable-button-pointers, pointer, null);\n  user-select: none;\n  border: var(--#{$prefix}btn-border-width) solid var(--#{$prefix}btn-border-color);\n  @include border-radius(var(--#{$prefix}btn-border-radius));\n  @include gradient-bg(var(--#{$prefix}btn-bg));\n  @include box-shadow(var(--#{$prefix}btn-box-shadow));\n  @include transition($btn-transition);\n\n  &:hover {\n    color: var(--#{$prefix}btn-hover-color);\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    background-color: var(--#{$prefix}btn-hover-bg);\n    border-color: var(--#{$prefix}btn-hover-border-color);\n  }\n\n  .btn-check + &:hover {\n    // override for the checkbox/radio buttons\n    color: var(--#{$prefix}btn-color);\n    background-color: var(--#{$prefix}btn-bg);\n    border-color: var(--#{$prefix}btn-border-color);\n  }\n\n  &:focus-visible {\n    color: var(--#{$prefix}btn-hover-color);\n    @include gradient-bg(var(--#{$prefix}btn-hover-bg));\n    border-color: var(--#{$prefix}btn-hover-border-color);\n    outline: 0;\n    // Avoid using mixin so we can pass custom focus shadow properly\n    @if $enable-shadows {\n      box-shadow: var(--#{$prefix}btn-box-shadow), var(--#{$prefix}btn-focus-box-shadow);\n    } @else {\n      box-shadow: var(--#{$prefix}btn-focus-box-shadow);\n    }\n  }\n\n  .btn-check:focus-visible + & {\n    border-color: var(--#{$prefix}btn-hover-border-color);\n    outline: 0;\n    // Avoid using mixin so we can pass custom focus shadow properly\n    @if $enable-shadows {\n      box-shadow: var(--#{$prefix}btn-box-shadow), var(--#{$prefix}btn-focus-box-shadow);\n    } @else {\n      box-shadow: var(--#{$prefix}btn-focus-box-shadow);\n    }\n  }\n\n  .btn-check:checked + &,\n  :not(.btn-check) + &:active,\n  &:first-child:active,\n  &.active,\n  &.show {\n    color: var(--#{$prefix}btn-active-color);\n    background-color: var(--#{$prefix}btn-active-bg);\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n    border-color: var(--#{$prefix}btn-active-border-color);\n    @include box-shadow(var(--#{$prefix}btn-active-shadow));\n\n    &:focus-visible {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      @if $enable-shadows {\n        box-shadow: var(--#{$prefix}btn-active-shadow), var(--#{$prefix}btn-focus-box-shadow);\n      } @else {\n        box-shadow: var(--#{$prefix}btn-focus-box-shadow);\n      }\n    }\n  }\n\n  &:disabled,\n  &.disabled,\n  fieldset:disabled & {\n    color: var(--#{$prefix}btn-disabled-color);\n    pointer-events: none;\n    background-color: var(--#{$prefix}btn-disabled-bg);\n    background-image: if($enable-gradients, none, null);\n    border-color: var(--#{$prefix}btn-disabled-border-color);\n    opacity: var(--#{$prefix}btn-disabled-opacity);\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Alternate buttons\n//\n\n// scss-docs-start btn-variant-loops\n@each $color, $value in $theme-colors {\n  .btn-#{$color} {\n    @if $color == \"light\" {\n      @include button-variant(\n        $value,\n        $value,\n        $hover-background: shade-color($value, $btn-hover-bg-shade-amount),\n        $hover-border: shade-color($value, $btn-hover-border-shade-amount),\n        $active-background: shade-color($value, $btn-active-bg-shade-amount),\n        $active-border: shade-color($value, $btn-active-border-shade-amount)\n      );\n    } @else if $color == \"dark\" {\n      @include button-variant(\n        $value,\n        $value,\n        $hover-background: tint-color($value, $btn-hover-bg-tint-amount),\n        $hover-border: tint-color($value, $btn-hover-border-tint-amount),\n        $active-background: tint-color($value, $btn-active-bg-tint-amount),\n        $active-border: tint-color($value, $btn-active-border-tint-amount)\n      );\n    } @else {\n      @include button-variant($value, $value);\n    }\n  }\n}\n\n@each $color, $value in $theme-colors {\n  .btn-outline-#{$color} {\n    @include button-outline-variant($value);\n  }\n}\n// scss-docs-end btn-variant-loops\n\n\n//\n// Link buttons\n//\n\n// Make a button look and behave like a link\n.btn-link {\n  --#{$prefix}btn-font-weight: #{$font-weight-normal};\n  --#{$prefix}btn-color: #{$btn-link-color};\n  --#{$prefix}btn-bg: transparent;\n  --#{$prefix}btn-border-color: transparent;\n  --#{$prefix}btn-hover-color: #{$btn-link-hover-color};\n  --#{$prefix}btn-hover-border-color: transparent;\n  --#{$prefix}btn-active-color: #{$btn-link-hover-color};\n  --#{$prefix}btn-active-border-color: transparent;\n  --#{$prefix}btn-disabled-color: #{$btn-link-disabled-color};\n  --#{$prefix}btn-disabled-border-color: transparent;\n  --#{$prefix}btn-box-shadow: 0 0 0 #000; // Can't use `none` as keyword negates all values when used with multiple shadows\n  --#{$prefix}btn-focus-shadow-rgb: #{$btn-link-focus-shadow-rgb};\n\n  text-decoration: $link-decoration;\n  @if $enable-gradients {\n    background-image: none;\n  }\n\n  &:hover,\n  &:focus-visible {\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:focus-visible {\n    color: var(--#{$prefix}btn-color);\n  }\n\n  &:hover {\n    color: var(--#{$prefix}btn-hover-color);\n  }\n\n  // No need for an active state here\n}\n\n\n//\n// Button Sizes\n//\n\n.btn-lg {\n  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-border-radius-lg);\n}\n\n.btn-sm {\n  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-border-radius-sm);\n}\n","// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n// scss-docs-start btn-variant-mixin\n@mixin button-variant(\n  $background,\n  $border,\n  $color: color-contrast($background),\n  $hover-background: if($color == $color-contrast-light, shade-color($background, $btn-hover-bg-shade-amount), tint-color($background, $btn-hover-bg-tint-amount)),\n  $hover-border: if($color == $color-contrast-light, shade-color($border, $btn-hover-border-shade-amount), tint-color($border, $btn-hover-border-tint-amount)),\n  $hover-color: color-contrast($hover-background),\n  $active-background: if($color == $color-contrast-light, shade-color($background, $btn-active-bg-shade-amount), tint-color($background, $btn-active-bg-tint-amount)),\n  $active-border: if($color == $color-contrast-light, shade-color($border, $btn-active-border-shade-amount), tint-color($border, $btn-active-border-tint-amount)),\n  $active-color: color-contrast($active-background),\n  $disabled-background: $background,\n  $disabled-border: $border,\n  $disabled-color: color-contrast($disabled-background)\n) {\n  --#{$prefix}btn-color: #{$color};\n  --#{$prefix}btn-bg: #{$background};\n  --#{$prefix}btn-border-color: #{$border};\n  --#{$prefix}btn-hover-color: #{$hover-color};\n  --#{$prefix}btn-hover-bg: #{$hover-background};\n  --#{$prefix}btn-hover-border-color: #{$hover-border};\n  --#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix($color, $border, 15%))};\n  --#{$prefix}btn-active-color: #{$active-color};\n  --#{$prefix}btn-active-bg: #{$active-background};\n  --#{$prefix}btn-active-border-color: #{$active-border};\n  --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};\n  --#{$prefix}btn-disabled-color: #{$disabled-color};\n  --#{$prefix}btn-disabled-bg: #{$disabled-background};\n  --#{$prefix}btn-disabled-border-color: #{$disabled-border};\n}\n// scss-docs-end btn-variant-mixin\n\n// scss-docs-start btn-outline-variant-mixin\n@mixin button-outline-variant(\n  $color,\n  $color-hover: color-contrast($color),\n  $active-background: $color,\n  $active-border: $color,\n  $active-color: color-contrast($active-background)\n) {\n  --#{$prefix}btn-color: #{$color};\n  --#{$prefix}btn-border-color: #{$color};\n  --#{$prefix}btn-hover-color: #{$color-hover};\n  --#{$prefix}btn-hover-bg: #{$active-background};\n  --#{$prefix}btn-hover-border-color: #{$active-border};\n  --#{$prefix}btn-focus-shadow-rgb: #{to-rgb($color)};\n  --#{$prefix}btn-active-color: #{$active-color};\n  --#{$prefix}btn-active-bg: #{$active-background};\n  --#{$prefix}btn-active-border-color: #{$active-border};\n  --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};\n  --#{$prefix}btn-disabled-color: #{$color};\n  --#{$prefix}btn-disabled-bg: transparent;\n  --#{$prefix}btn-disabled-border-color: #{$color};\n  --#{$prefix}gradient: none;\n}\n// scss-docs-end btn-outline-variant-mixin\n\n// scss-docs-start btn-size-mixin\n@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {\n  --#{$prefix}btn-padding-y: #{$padding-y};\n  --#{$prefix}btn-padding-x: #{$padding-x};\n  @include rfs($font-size, --#{$prefix}btn-font-size);\n  --#{$prefix}btn-border-radius: #{$border-radius};\n}\n// scss-docs-end btn-size-mixin\n",".fade {\n  @include transition($transition-fade);\n\n  &:not(.show) {\n    opacity: 0;\n  }\n}\n\n// scss-docs-start collapse-classes\n.collapse {\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  @include transition($transition-collapse);\n\n  &.collapse-horizontal {\n    width: 0;\n    height: auto;\n    @include transition($transition-collapse-width);\n  }\n}\n// scss-docs-end collapse-classes\n","// The dropdown wrapper (`<div>`)\n.dropup,\n.dropend,\n.dropdown,\n.dropstart,\n.dropup-center,\n.dropdown-center {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n\n  // Generate the caret automatically\n  @include caret();\n}\n\n// The dropdown menu\n.dropdown-menu {\n  // scss-docs-start dropdown-css-vars\n  --#{$prefix}dropdown-zindex: #{$zindex-dropdown};\n  --#{$prefix}dropdown-min-width: #{$dropdown-min-width};\n  --#{$prefix}dropdown-padding-x: #{$dropdown-padding-x};\n  --#{$prefix}dropdown-padding-y: #{$dropdown-padding-y};\n  --#{$prefix}dropdown-spacer: #{$dropdown-spacer};\n  @include rfs($dropdown-font-size, --#{$prefix}dropdown-font-size);\n  --#{$prefix}dropdown-color: #{$dropdown-color};\n  --#{$prefix}dropdown-bg: #{$dropdown-bg};\n  --#{$prefix}dropdown-border-color: #{$dropdown-border-color};\n  --#{$prefix}dropdown-border-radius: #{$dropdown-border-radius};\n  --#{$prefix}dropdown-border-width: #{$dropdown-border-width};\n  --#{$prefix}dropdown-inner-border-radius: #{$dropdown-inner-border-radius};\n  --#{$prefix}dropdown-divider-bg: #{$dropdown-divider-bg};\n  --#{$prefix}dropdown-divider-margin-y: #{$dropdown-divider-margin-y};\n  --#{$prefix}dropdown-box-shadow: #{$dropdown-box-shadow};\n  --#{$prefix}dropdown-link-color: #{$dropdown-link-color};\n  --#{$prefix}dropdown-link-hover-color: #{$dropdown-link-hover-color};\n  --#{$prefix}dropdown-link-hover-bg: #{$dropdown-link-hover-bg};\n  --#{$prefix}dropdown-link-active-color: #{$dropdown-link-active-color};\n  --#{$prefix}dropdown-link-active-bg: #{$dropdown-link-active-bg};\n  --#{$prefix}dropdown-link-disabled-color: #{$dropdown-link-disabled-color};\n  --#{$prefix}dropdown-item-padding-x: #{$dropdown-item-padding-x};\n  --#{$prefix}dropdown-item-padding-y: #{$dropdown-item-padding-y};\n  --#{$prefix}dropdown-header-color: #{$dropdown-header-color};\n  --#{$prefix}dropdown-header-padding-x: #{$dropdown-header-padding-x};\n  --#{$prefix}dropdown-header-padding-y: #{$dropdown-header-padding-y};\n  // scss-docs-end dropdown-css-vars\n\n  position: absolute;\n  z-index: var(--#{$prefix}dropdown-zindex);\n  display: none; // none by default, but block on \"open\" of the menu\n  min-width: var(--#{$prefix}dropdown-min-width);\n  padding: var(--#{$prefix}dropdown-padding-y) var(--#{$prefix}dropdown-padding-x);\n  margin: 0; // Override default margin of ul\n  @include font-size(var(--#{$prefix}dropdown-font-size));\n  color: var(--#{$prefix}dropdown-color);\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  list-style: none;\n  background-color: var(--#{$prefix}dropdown-bg);\n  background-clip: padding-box;\n  border: var(--#{$prefix}dropdown-border-width) solid var(--#{$prefix}dropdown-border-color);\n  @include border-radius(var(--#{$prefix}dropdown-border-radius));\n  @include box-shadow(var(--#{$prefix}dropdown-box-shadow));\n\n  &[data-bs-popper] {\n    top: 100%;\n    left: 0;\n    margin-top: var(--#{$prefix}dropdown-spacer);\n  }\n\n  @if $dropdown-padding-y == 0 {\n    > .dropdown-item:first-child,\n    > li:first-child .dropdown-item {\n      @include border-top-radius(var(--#{$prefix}dropdown-inner-border-radius));\n    }\n    > .dropdown-item:last-child,\n    > li:last-child .dropdown-item {\n      @include border-bottom-radius(var(--#{$prefix}dropdown-inner-border-radius));\n    }\n\n  }\n}\n\n// scss-docs-start responsive-breakpoints\n// We deliberately hardcode the `bs-` prefix because we check\n// this custom property in JS to determine Popper's positioning\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .dropdown-menu#{$infix}-start {\n      --bs-position: start;\n\n      &[data-bs-popper] {\n        right: auto;\n        left: 0;\n      }\n    }\n\n    .dropdown-menu#{$infix}-end {\n      --bs-position: end;\n\n      &[data-bs-popper] {\n        right: 0;\n        left: auto;\n      }\n    }\n  }\n}\n// scss-docs-end responsive-breakpoints\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n// Just add .dropup after the standard .dropdown class and you're set.\n.dropup {\n  .dropdown-menu[data-bs-popper] {\n    top: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: var(--#{$prefix}dropdown-spacer);\n  }\n\n  .dropdown-toggle {\n    @include caret(up);\n  }\n}\n\n.dropend {\n  .dropdown-menu[data-bs-popper] {\n    top: 0;\n    right: auto;\n    left: 100%;\n    margin-top: 0;\n    margin-left: var(--#{$prefix}dropdown-spacer);\n  }\n\n  .dropdown-toggle {\n    @include caret(end);\n    &::after {\n      vertical-align: 0;\n    }\n  }\n}\n\n.dropstart {\n  .dropdown-menu[data-bs-popper] {\n    top: 0;\n    right: 100%;\n    left: auto;\n    margin-top: 0;\n    margin-right: var(--#{$prefix}dropdown-spacer);\n  }\n\n  .dropdown-toggle {\n    @include caret(start);\n    &::before {\n      vertical-align: 0;\n    }\n  }\n}\n\n\n// Dividers (basically an `<hr>`) within the dropdown\n.dropdown-divider {\n  height: 0;\n  margin: var(--#{$prefix}dropdown-divider-margin-y) 0;\n  overflow: hidden;\n  border-top: 1px solid var(--#{$prefix}dropdown-divider-bg);\n  opacity: 1; // Revisit in v6 to de-dupe styles that conflict with <hr> element\n}\n\n// Links, buttons, and more within the dropdown menu\n//\n// `<button>`-specific styles are denoted with `// For <button>s`\n.dropdown-item {\n  display: block;\n  width: 100%; // For `<button>`s\n  padding: var(--#{$prefix}dropdown-item-padding-y) var(--#{$prefix}dropdown-item-padding-x);\n  clear: both;\n  font-weight: $font-weight-normal;\n  color: var(--#{$prefix}dropdown-link-color);\n  text-align: inherit; // For `<button>`s\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap; // prevent links from randomly breaking onto new lines\n  background-color: transparent; // For `<button>`s\n  border: 0; // For `<button>`s\n  @include border-radius(var(--#{$prefix}dropdown-item-border-radius, 0));\n\n  &:hover,\n  &:focus {\n    color: var(--#{$prefix}dropdown-link-hover-color);\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    @include gradient-bg(var(--#{$prefix}dropdown-link-hover-bg));\n  }\n\n  &.active,\n  &:active {\n    color: var(--#{$prefix}dropdown-link-active-color);\n    text-decoration: none;\n    @include gradient-bg(var(--#{$prefix}dropdown-link-active-bg));\n  }\n\n  &.disabled,\n  &:disabled {\n    color: var(--#{$prefix}dropdown-link-disabled-color);\n    pointer-events: none;\n    background-color: transparent;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n  }\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: var(--#{$prefix}dropdown-header-padding-y) var(--#{$prefix}dropdown-header-padding-x);\n  margin-bottom: 0; // for use with heading elements\n  @include font-size($font-size-sm);\n  color: var(--#{$prefix}dropdown-header-color);\n  white-space: nowrap; // as with > li > a\n}\n\n// Dropdown text\n.dropdown-item-text {\n  display: block;\n  padding: var(--#{$prefix}dropdown-item-padding-y) var(--#{$prefix}dropdown-item-padding-x);\n  color: var(--#{$prefix}dropdown-link-color);\n}\n\n// Dark dropdowns\n.dropdown-menu-dark {\n  // scss-docs-start dropdown-dark-css-vars\n  --#{$prefix}dropdown-color: #{$dropdown-dark-color};\n  --#{$prefix}dropdown-bg: #{$dropdown-dark-bg};\n  --#{$prefix}dropdown-border-color: #{$dropdown-dark-border-color};\n  --#{$prefix}dropdown-box-shadow: #{$dropdown-dark-box-shadow};\n  --#{$prefix}dropdown-link-color: #{$dropdown-dark-link-color};\n  --#{$prefix}dropdown-link-hover-color: #{$dropdown-dark-link-hover-color};\n  --#{$prefix}dropdown-divider-bg: #{$dropdown-dark-divider-bg};\n  --#{$prefix}dropdown-link-hover-bg: #{$dropdown-dark-link-hover-bg};\n  --#{$prefix}dropdown-link-active-color: #{$dropdown-dark-link-active-color};\n  --#{$prefix}dropdown-link-active-bg: #{$dropdown-dark-link-active-bg};\n  --#{$prefix}dropdown-link-disabled-color: #{$dropdown-dark-link-disabled-color};\n  --#{$prefix}dropdown-header-color: #{$dropdown-dark-header-color};\n  // scss-docs-end dropdown-dark-css-vars\n}\n","// scss-docs-start caret-mixins\n@mixin caret-down($width: $caret-width) {\n  border-top: $width solid;\n  border-right: $width solid transparent;\n  border-bottom: 0;\n  border-left: $width solid transparent;\n}\n\n@mixin caret-up($width: $caret-width) {\n  border-top: 0;\n  border-right: $width solid transparent;\n  border-bottom: $width solid;\n  border-left: $width solid transparent;\n}\n\n@mixin caret-end($width: $caret-width) {\n  border-top: $width solid transparent;\n  border-right: 0;\n  border-bottom: $width solid transparent;\n  border-left: $width solid;\n}\n\n@mixin caret-start($width: $caret-width) {\n  border-top: $width solid transparent;\n  border-right: $width solid;\n  border-bottom: $width solid transparent;\n}\n\n@mixin caret(\n  $direction: down,\n  $width: $caret-width,\n  $spacing: $caret-spacing,\n  $vertical-align: $caret-vertical-align\n) {\n  @if $enable-caret {\n    &::after {\n      display: inline-block;\n      margin-left: $spacing;\n      vertical-align: $vertical-align;\n      content: \"\";\n      @if $direction == down {\n        @include caret-down($width);\n      } @else if $direction == up {\n        @include caret-up($width);\n      } @else if $direction == end {\n        @include caret-end($width);\n      }\n    }\n\n    @if $direction == start {\n      &::after {\n        display: none;\n      }\n\n      &::before {\n        display: inline-block;\n        margin-right: $spacing;\n        vertical-align: $vertical-align;\n        content: \"\";\n        @include caret-start($width);\n      }\n    }\n\n    &:empty::after {\n      margin-left: 0;\n    }\n  }\n}\n// scss-docs-end caret-mixins\n","// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n\n  > .btn {\n    position: relative;\n    flex: 1 1 auto;\n  }\n\n  // Bring the hover, focused, and \"active\" buttons to the front to overlay\n  // the borders properly\n  > .btn-check:checked + .btn,\n  > .btn-check:focus + .btn,\n  > .btn:hover,\n  > .btn:focus,\n  > .btn:active,\n  > .btn.active {\n    z-index: 1;\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n\n  .input-group {\n    width: auto;\n  }\n}\n\n.btn-group {\n  @include border-radius($btn-border-radius);\n\n  // Prevent double borders when buttons are next to each other\n  > :not(.btn-check:first-child) + .btn,\n  > .btn-group:not(:first-child) {\n    margin-left: calc(#{$btn-border-width} * -1); // stylelint-disable-line function-disallowed-list\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn.dropdown-toggle-split:first-child,\n  > .btn-group:not(:last-child) > .btn {\n    @include border-end-radius(0);\n  }\n\n  // The left radius should be 0 if the button is:\n  // - the \"third or more\" child\n  // - the second child and the previous element isn't `.btn-check` (making it the first child visually)\n  // - part of a btn-group which isn't the first child\n  > .btn:nth-child(n + 3),\n  > :not(.btn-check) + .btn,\n  > .btn-group:not(:first-child) > .btn {\n    @include border-start-radius(0);\n  }\n}\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-sm > .btn { @extend .btn-sm; }\n.btn-group-lg > .btn { @extend .btn-lg; }\n\n\n//\n// Split button dropdowns\n//\n\n.dropdown-toggle-split {\n  padding-right: $btn-padding-x * .75;\n  padding-left: $btn-padding-x * .75;\n\n  &::after,\n  .dropup &::after,\n  .dropend &::after {\n    margin-left: 0;\n  }\n\n  .dropstart &::before {\n    margin-right: 0;\n  }\n}\n\n.btn-sm + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-sm * .75;\n  padding-left: $btn-padding-x-sm * .75;\n}\n\n.btn-lg + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-lg * .75;\n  padding-left: $btn-padding-x-lg * .75;\n}\n\n\n// The clickable button for toggling the menu\n// Set the same inset shadow as the :active state\n.btn-group.show .dropdown-toggle {\n  @include box-shadow($btn-active-box-shadow);\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Vertical button groups\n//\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  > .btn,\n  > .btn-group {\n    width: 100%;\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-top: calc(#{$btn-border-width} * -1); // stylelint-disable-line function-disallowed-list\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-bottom-radius(0);\n  }\n\n  > .btn ~ .btn,\n  > .btn-group:not(:first-child) > .btn {\n    @include border-top-radius(0);\n  }\n}\n","// Base class\n//\n// Kickstart any navigation component with a set of style resets. Works with\n// `<nav>`s, `<ul>`s or `<ol>`s.\n\n.nav {\n  // scss-docs-start nav-css-vars\n  --#{$prefix}nav-link-padding-x: #{$nav-link-padding-x};\n  --#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};\n  @include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);\n  --#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};\n  --#{$prefix}nav-link-color: #{$nav-link-color};\n  --#{$prefix}nav-link-hover-color: #{$nav-link-hover-color};\n  --#{$prefix}nav-link-disabled-color: #{$nav-link-disabled-color};\n  // scss-docs-end nav-css-vars\n\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: var(--#{$prefix}nav-link-padding-y) var(--#{$prefix}nav-link-padding-x);\n  @include font-size(var(--#{$prefix}nav-link-font-size));\n  font-weight: var(--#{$prefix}nav-link-font-weight);\n  color: var(--#{$prefix}nav-link-color);\n  text-decoration: if($link-decoration == none, null, none);\n  background: none;\n  border: 0;\n  @include transition($nav-link-transition);\n\n  &:hover,\n  &:focus {\n    color: var(--#{$prefix}nav-link-hover-color);\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n\n  &:focus-visible {\n    outline: 0;\n    box-shadow: $nav-link-focus-box-shadow;\n  }\n\n  // Disabled state lightens text\n  &.disabled,\n  &:disabled {\n    color: var(--#{$prefix}nav-link-disabled-color);\n    pointer-events: none;\n    cursor: default;\n  }\n}\n\n//\n// Tabs\n//\n\n.nav-tabs {\n  // scss-docs-start nav-tabs-css-vars\n  --#{$prefix}nav-tabs-border-width: #{$nav-tabs-border-width};\n  --#{$prefix}nav-tabs-border-color: #{$nav-tabs-border-color};\n  --#{$prefix}nav-tabs-border-radius: #{$nav-tabs-border-radius};\n  --#{$prefix}nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};\n  --#{$prefix}nav-tabs-link-active-color: #{$nav-tabs-link-active-color};\n  --#{$prefix}nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};\n  --#{$prefix}nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};\n  // scss-docs-end nav-tabs-css-vars\n\n  border-bottom: var(--#{$prefix}nav-tabs-border-width) solid var(--#{$prefix}nav-tabs-border-color);\n\n  .nav-link {\n    margin-bottom: calc(-1 * var(--#{$prefix}nav-tabs-border-width)); // stylelint-disable-line function-disallowed-list\n    border: var(--#{$prefix}nav-tabs-border-width) solid transparent;\n    @include border-top-radius(var(--#{$prefix}nav-tabs-border-radius));\n\n    &:hover,\n    &:focus {\n      // Prevents active .nav-link tab overlapping focus outline of previous/next .nav-link\n      isolation: isolate;\n      border-color: var(--#{$prefix}nav-tabs-link-hover-border-color);\n    }\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: var(--#{$prefix}nav-tabs-link-active-color);\n    background-color: var(--#{$prefix}nav-tabs-link-active-bg);\n    border-color: var(--#{$prefix}nav-tabs-link-active-border-color);\n  }\n\n  .dropdown-menu {\n    // Make dropdown border overlap tab border\n    margin-top: calc(-1 * var(--#{$prefix}nav-tabs-border-width)); // stylelint-disable-line function-disallowed-list\n    // Remove the top rounded corners here since there is a hard edge above the menu\n    @include border-top-radius(0);\n  }\n}\n\n\n//\n// Pills\n//\n\n.nav-pills {\n  // scss-docs-start nav-pills-css-vars\n  --#{$prefix}nav-pills-border-radius: #{$nav-pills-border-radius};\n  --#{$prefix}nav-pills-link-active-color: #{$nav-pills-link-active-color};\n  --#{$prefix}nav-pills-link-active-bg: #{$nav-pills-link-active-bg};\n  // scss-docs-end nav-pills-css-vars\n\n  .nav-link {\n    @include border-radius(var(--#{$prefix}nav-pills-border-radius));\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    color: var(--#{$prefix}nav-pills-link-active-color);\n    @include gradient-bg(var(--#{$prefix}nav-pills-link-active-bg));\n  }\n}\n\n\n//\n// Underline\n//\n\n.nav-underline {\n  // scss-docs-start nav-underline-css-vars\n  --#{$prefix}nav-underline-gap: #{$nav-underline-gap};\n  --#{$prefix}nav-underline-border-width: #{$nav-underline-border-width};\n  --#{$prefix}nav-underline-link-active-color: #{$nav-underline-link-active-color};\n  // scss-docs-end nav-underline-css-vars\n\n  gap: var(--#{$prefix}nav-underline-gap);\n\n  .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n    border-bottom: var(--#{$prefix}nav-underline-border-width) solid transparent;\n\n    &:hover,\n    &:focus {\n      border-bottom-color: currentcolor;\n    }\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    font-weight: $font-weight-bold;\n    color: var(--#{$prefix}nav-underline-link-active-color);\n    border-bottom-color: currentcolor;\n  }\n}\n\n\n//\n// Justified variants\n//\n\n.nav-fill {\n  > .nav-link,\n  .nav-item {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n\n.nav-justified {\n  > .nav-link,\n  .nav-item {\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  }\n}\n\n.nav-fill,\n.nav-justified {\n  .nav-item .nav-link {\n    width: 100%; // Make sure button will grow\n  }\n}\n\n\n// Tabbable tabs\n//\n// Hide tabbable panes to start, show them when `.active`\n\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n","// Navbar\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  // scss-docs-start navbar-css-vars\n  --#{$prefix}navbar-padding-x: #{if($navbar-padding-x == null, 0, $navbar-padding-x)};\n  --#{$prefix}navbar-padding-y: #{$navbar-padding-y};\n  --#{$prefix}navbar-color: #{$navbar-light-color};\n  --#{$prefix}navbar-hover-color: #{$navbar-light-hover-color};\n  --#{$prefix}navbar-disabled-color: #{$navbar-light-disabled-color};\n  --#{$prefix}navbar-active-color: #{$navbar-light-active-color};\n  --#{$prefix}navbar-brand-padding-y: #{$navbar-brand-padding-y};\n  --#{$prefix}navbar-brand-margin-end: #{$navbar-brand-margin-end};\n  --#{$prefix}navbar-brand-font-size: #{$navbar-brand-font-size};\n  --#{$prefix}navbar-brand-color: #{$navbar-light-brand-color};\n  --#{$prefix}navbar-brand-hover-color: #{$navbar-light-brand-hover-color};\n  --#{$prefix}navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};\n  --#{$prefix}navbar-toggler-padding-y: #{$navbar-toggler-padding-y};\n  --#{$prefix}navbar-toggler-padding-x: #{$navbar-toggler-padding-x};\n  --#{$prefix}navbar-toggler-font-size: #{$navbar-toggler-font-size};\n  --#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};\n  --#{$prefix}navbar-toggler-border-color: #{$navbar-light-toggler-border-color};\n  --#{$prefix}navbar-toggler-border-radius: #{$navbar-toggler-border-radius};\n  --#{$prefix}navbar-toggler-focus-width: #{$navbar-toggler-focus-width};\n  --#{$prefix}navbar-toggler-transition: #{$navbar-toggler-transition};\n  // scss-docs-end navbar-css-vars\n\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // allow us to do the line break for collapsing content\n  align-items: center;\n  justify-content: space-between; // space out brand from logo\n  padding: var(--#{$prefix}navbar-padding-y) var(--#{$prefix}navbar-padding-x);\n  @include gradient-bg();\n\n  // Because flex properties aren't inherited, we need to redeclare these first\n  // few properties so that content nested within behave properly.\n  // The `flex-wrap` property is inherited to simplify the expanded navbars\n  %container-flex-properties {\n    display: flex;\n    flex-wrap: inherit;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  > .container,\n  > .container-fluid {\n    @extend %container-flex-properties;\n  }\n\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {\n      @extend %container-flex-properties;\n    }\n  }\n}\n\n\n// Navbar brand\n//\n// Used for brand, project, or site names.\n\n.navbar-brand {\n  padding-top: var(--#{$prefix}navbar-brand-padding-y);\n  padding-bottom: var(--#{$prefix}navbar-brand-padding-y);\n  margin-right: var(--#{$prefix}navbar-brand-margin-end);\n  @include font-size(var(--#{$prefix}navbar-brand-font-size));\n  color: var(--#{$prefix}navbar-brand-color);\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap;\n\n  &:hover,\n  &:focus {\n    color: var(--#{$prefix}navbar-brand-hover-color);\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n}\n\n\n// Navbar nav\n//\n// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).\n\n.navbar-nav {\n  // scss-docs-start navbar-nav-css-vars\n  --#{$prefix}nav-link-padding-x: 0;\n  --#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};\n  @include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);\n  --#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};\n  --#{$prefix}nav-link-color: var(--#{$prefix}navbar-color);\n  --#{$prefix}nav-link-hover-color: var(--#{$prefix}navbar-hover-color);\n  --#{$prefix}nav-link-disabled-color: var(--#{$prefix}navbar-disabled-color);\n  // scss-docs-end navbar-nav-css-vars\n\n  display: flex;\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n\n  .nav-link {\n    &.active,\n    &.show {\n      color: var(--#{$prefix}navbar-active-color);\n    }\n  }\n\n  .dropdown-menu {\n    position: static;\n  }\n}\n\n\n// Navbar text\n//\n//\n\n.navbar-text {\n  padding-top: $nav-link-padding-y;\n  padding-bottom: $nav-link-padding-y;\n  color: var(--#{$prefix}navbar-color);\n\n  a,\n  a:hover,\n  a:focus  {\n    color: var(--#{$prefix}navbar-active-color);\n  }\n}\n\n\n// Responsive navbar\n//\n// Custom styles for responsive collapsing and toggling of navbar contents.\n// Powered by the collapse Bootstrap JavaScript plugin.\n\n// When collapsed, prevent the toggleable navbar contents from appearing in\n// the default flexbox row orientation. Requires the use of `flex-wrap: wrap`\n// on the `.navbar` parent.\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  // For always expanded or extra full navbars, ensure content aligns itself\n  // properly vertically. Can be easily overridden with flex utilities.\n  align-items: center;\n}\n\n// Button for toggling the navbar when in its collapsed state\n.navbar-toggler {\n  padding: var(--#{$prefix}navbar-toggler-padding-y) var(--#{$prefix}navbar-toggler-padding-x);\n  @include font-size(var(--#{$prefix}navbar-toggler-font-size));\n  line-height: 1;\n  color: var(--#{$prefix}navbar-color);\n  background-color: transparent; // remove default button style\n  border: var(--#{$prefix}border-width) solid var(--#{$prefix}navbar-toggler-border-color); // remove default button style\n  @include border-radius(var(--#{$prefix}navbar-toggler-border-radius));\n  @include transition(var(--#{$prefix}navbar-toggler-transition));\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:focus {\n    text-decoration: none;\n    outline: 0;\n    box-shadow: 0 0 0 var(--#{$prefix}navbar-toggler-focus-width);\n  }\n}\n\n// Keep as a separate element so folks can easily override it with another icon\n// or image file as needed.\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-image: var(--#{$prefix}navbar-toggler-icon-bg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n\n.navbar-nav-scroll {\n  max-height: var(--#{$prefix}scroll-height, 75vh);\n  overflow-y: auto;\n}\n\n// scss-docs-start navbar-expand-loop\n// Generate series of `.navbar-expand-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-expand {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    // stylelint-disable-next-line scss/selector-no-union-class-name\n    &#{$infix} {\n      @include media-breakpoint-up($next) {\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .dropdown-menu {\n            position: absolute;\n          }\n\n          .nav-link {\n            padding-right: var(--#{$prefix}navbar-nav-link-padding-x);\n            padding-left: var(--#{$prefix}navbar-nav-link-padding-x);\n          }\n        }\n\n        .navbar-nav-scroll {\n          overflow: visible;\n        }\n\n        .navbar-collapse {\n          display: flex !important; // stylelint-disable-line declaration-no-important\n          flex-basis: auto;\n        }\n\n        .navbar-toggler {\n          display: none;\n        }\n\n        .offcanvas {\n          // stylelint-disable declaration-no-important\n          position: static;\n          z-index: auto;\n          flex-grow: 1;\n          width: auto !important;\n          height: auto !important;\n          visibility: visible !important;\n          background-color: transparent !important;\n          border: 0 !important;\n          transform: none !important;\n          @include box-shadow(none);\n          @include transition(none);\n          // stylelint-enable declaration-no-important\n\n          .offcanvas-header {\n            display: none;\n          }\n\n          .offcanvas-body {\n            display: flex;\n            flex-grow: 0;\n            padding: 0;\n            overflow-y: visible;\n          }\n        }\n      }\n    }\n  }\n}\n// scss-docs-end navbar-expand-loop\n\n// Navbar themes\n//\n// Styles for switching between navbars with light or dark background.\n\n.navbar-light {\n  @include deprecate(\"`.navbar-light`\", \"v5.2.0\", \"v6.0.0\", true);\n}\n\n.navbar-dark,\n.navbar[data-bs-theme=\"dark\"] {\n  // scss-docs-start navbar-dark-css-vars\n  --#{$prefix}navbar-color: #{$navbar-dark-color};\n  --#{$prefix}navbar-hover-color: #{$navbar-dark-hover-color};\n  --#{$prefix}navbar-disabled-color: #{$navbar-dark-disabled-color};\n  --#{$prefix}navbar-active-color: #{$navbar-dark-active-color};\n  --#{$prefix}navbar-brand-color: #{$navbar-dark-brand-color};\n  --#{$prefix}navbar-brand-hover-color: #{$navbar-dark-brand-hover-color};\n  --#{$prefix}navbar-toggler-border-color: #{$navbar-dark-toggler-border-color};\n  --#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};\n  // scss-docs-end navbar-dark-css-vars\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    .navbar-toggler-icon {\n      --#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.card {\n  // scss-docs-start card-css-vars\n  --#{$prefix}card-spacer-y: #{$card-spacer-y};\n  --#{$prefix}card-spacer-x: #{$card-spacer-x};\n  --#{$prefix}card-title-spacer-y: #{$card-title-spacer-y};\n  --#{$prefix}card-title-color: #{$card-title-color};\n  --#{$prefix}card-subtitle-color: #{$card-subtitle-color};\n  --#{$prefix}card-border-width: #{$card-border-width};\n  --#{$prefix}card-border-color: #{$card-border-color};\n  --#{$prefix}card-border-radius: #{$card-border-radius};\n  --#{$prefix}card-box-shadow: #{$card-box-shadow};\n  --#{$prefix}card-inner-border-radius: #{$card-inner-border-radius};\n  --#{$prefix}card-cap-padding-y: #{$card-cap-padding-y};\n  --#{$prefix}card-cap-padding-x: #{$card-cap-padding-x};\n  --#{$prefix}card-cap-bg: #{$card-cap-bg};\n  --#{$prefix}card-cap-color: #{$card-cap-color};\n  --#{$prefix}card-height: #{$card-height};\n  --#{$prefix}card-color: #{$card-color};\n  --#{$prefix}card-bg: #{$card-bg};\n  --#{$prefix}card-img-overlay-padding: #{$card-img-overlay-padding};\n  --#{$prefix}card-group-margin: #{$card-group-margin};\n  // scss-docs-end card-css-vars\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0; // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106\n  height: var(--#{$prefix}card-height);\n  color: var(--#{$prefix}body-color);\n  word-wrap: break-word;\n  background-color: var(--#{$prefix}card-bg);\n  background-clip: border-box;\n  border: var(--#{$prefix}card-border-width) solid var(--#{$prefix}card-border-color);\n  @include border-radius(var(--#{$prefix}card-border-radius));\n  @include box-shadow(var(--#{$prefix}card-box-shadow));\n\n  > hr {\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  > .list-group {\n    border-top: inherit;\n    border-bottom: inherit;\n\n    &:first-child {\n      border-top-width: 0;\n      @include border-top-radius(var(--#{$prefix}card-inner-border-radius));\n    }\n\n    &:last-child  {\n      border-bottom-width: 0;\n      @include border-bottom-radius(var(--#{$prefix}card-inner-border-radius));\n    }\n  }\n\n  // Due to specificity of the above selector (`.card > .list-group`), we must\n  // use a child selector here to prevent double borders.\n  > .card-header + .list-group,\n  > .list-group + .card-footer {\n    border-top: 0;\n  }\n}\n\n.card-body {\n  // Enable `flex-grow: 1` for decks and groups so that card blocks take up\n  // as much space as possible, ensuring footers are aligned to the bottom.\n  flex: 1 1 auto;\n  padding: var(--#{$prefix}card-spacer-y) var(--#{$prefix}card-spacer-x);\n  color: var(--#{$prefix}card-color);\n}\n\n.card-title {\n  margin-bottom: var(--#{$prefix}card-title-spacer-y);\n  color: var(--#{$prefix}card-title-color);\n}\n\n.card-subtitle {\n  margin-top: calc(-.5 * var(--#{$prefix}card-title-spacer-y)); // stylelint-disable-line function-disallowed-list\n  margin-bottom: 0;\n  color: var(--#{$prefix}card-subtitle-color);\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link {\n  &:hover {\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n\n  + .card-link {\n    margin-left: var(--#{$prefix}card-spacer-x);\n  }\n}\n\n//\n// Optional textual caps\n//\n\n.card-header {\n  padding: var(--#{$prefix}card-cap-padding-y) var(--#{$prefix}card-cap-padding-x);\n  margin-bottom: 0; // Removes the default margin-bottom of <hN>\n  color: var(--#{$prefix}card-cap-color);\n  background-color: var(--#{$prefix}card-cap-bg);\n  border-bottom: var(--#{$prefix}card-border-width) solid var(--#{$prefix}card-border-color);\n\n  &:first-child {\n    @include border-radius(var(--#{$prefix}card-inner-border-radius) var(--#{$prefix}card-inner-border-radius) 0 0);\n  }\n}\n\n.card-footer {\n  padding: var(--#{$prefix}card-cap-padding-y) var(--#{$prefix}card-cap-padding-x);\n  color: var(--#{$prefix}card-cap-color);\n  background-color: var(--#{$prefix}card-cap-bg);\n  border-top: var(--#{$prefix}card-border-width) solid var(--#{$prefix}card-border-color);\n\n  &:last-child {\n    @include border-radius(0 0 var(--#{$prefix}card-inner-border-radius) var(--#{$prefix}card-inner-border-radius));\n  }\n}\n\n\n//\n// Header navs\n//\n\n.card-header-tabs {\n  margin-right: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list\n  margin-bottom: calc(-1 * var(--#{$prefix}card-cap-padding-y)); // stylelint-disable-line function-disallowed-list\n  margin-left: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list\n  border-bottom: 0;\n\n  .nav-link.active {\n    background-color: var(--#{$prefix}card-bg);\n    border-bottom-color: var(--#{$prefix}card-bg);\n  }\n}\n\n.card-header-pills {\n  margin-right: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list\n  margin-left: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list\n}\n\n// Card image\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: var(--#{$prefix}card-img-overlay-padding);\n  @include border-radius(var(--#{$prefix}card-inner-border-radius));\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch\n}\n\n.card-img,\n.card-img-top {\n  @include border-top-radius(var(--#{$prefix}card-inner-border-radius));\n}\n\n.card-img,\n.card-img-bottom {\n  @include border-bottom-radius(var(--#{$prefix}card-inner-border-radius));\n}\n\n\n//\n// Card groups\n//\n\n.card-group {\n  // The child selector allows nested `.card` within `.card-group`\n  // to display properly.\n  > .card {\n    margin-bottom: var(--#{$prefix}card-group-margin);\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    // The child selector allows nested `.card` within `.card-group`\n    // to display properly.\n    > .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-bottom: 0;\n\n      + .card {\n        margin-left: 0;\n        border-left: 0;\n      }\n\n      // Handle rounded corners\n      @if $enable-rounded {\n        &:not(:last-child) {\n          @include border-end-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-right-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-right-radius: 0;\n          }\n        }\n\n        &:not(:first-child) {\n          @include border-start-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-left-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-left-radius: 0;\n          }\n        }\n      }\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.accordion {\n  // scss-docs-start accordion-css-vars\n  --#{$prefix}accordion-color: #{$accordion-color};\n  --#{$prefix}accordion-bg: #{$accordion-bg};\n  --#{$prefix}accordion-transition: #{$accordion-transition};\n  --#{$prefix}accordion-border-color: #{$accordion-border-color};\n  --#{$prefix}accordion-border-width: #{$accordion-border-width};\n  --#{$prefix}accordion-border-radius: #{$accordion-border-radius};\n  --#{$prefix}accordion-inner-border-radius: #{$accordion-inner-border-radius};\n  --#{$prefix}accordion-btn-padding-x: #{$accordion-button-padding-x};\n  --#{$prefix}accordion-btn-padding-y: #{$accordion-button-padding-y};\n  --#{$prefix}accordion-btn-color: #{$accordion-button-color};\n  --#{$prefix}accordion-btn-bg: #{$accordion-button-bg};\n  --#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon)};\n  --#{$prefix}accordion-btn-icon-width: #{$accordion-icon-width};\n  --#{$prefix}accordion-btn-icon-transform: #{$accordion-icon-transform};\n  --#{$prefix}accordion-btn-icon-transition: #{$accordion-icon-transition};\n  --#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};\n  --#{$prefix}accordion-btn-focus-border-color: #{$accordion-button-focus-border-color};\n  --#{$prefix}accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};\n  --#{$prefix}accordion-body-padding-x: #{$accordion-body-padding-x};\n  --#{$prefix}accordion-body-padding-y: #{$accordion-body-padding-y};\n  --#{$prefix}accordion-active-color: #{$accordion-button-active-color};\n  --#{$prefix}accordion-active-bg: #{$accordion-button-active-bg};\n  // scss-docs-end accordion-css-vars\n}\n\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: var(--#{$prefix}accordion-btn-padding-y) var(--#{$prefix}accordion-btn-padding-x);\n  @include font-size($font-size-base);\n  color: var(--#{$prefix}accordion-btn-color);\n  text-align: left; // Reset button style\n  background-color: var(--#{$prefix}accordion-btn-bg);\n  border: 0;\n  @include border-radius(0);\n  overflow-anchor: none;\n  @include transition(var(--#{$prefix}accordion-transition));\n\n  &:not(.collapsed) {\n    color: var(--#{$prefix}accordion-active-color);\n    background-color: var(--#{$prefix}accordion-active-bg);\n    box-shadow: inset 0 calc(-1 * var(--#{$prefix}accordion-border-width)) 0 var(--#{$prefix}accordion-border-color); // stylelint-disable-line function-disallowed-list\n\n    &::after {\n      background-image: var(--#{$prefix}accordion-btn-active-icon);\n      transform: var(--#{$prefix}accordion-btn-icon-transform);\n    }\n  }\n\n  // Accordion icon\n  &::after {\n    flex-shrink: 0;\n    width: var(--#{$prefix}accordion-btn-icon-width);\n    height: var(--#{$prefix}accordion-btn-icon-width);\n    margin-left: auto;\n    content: \"\";\n    background-image: var(--#{$prefix}accordion-btn-icon);\n    background-repeat: no-repeat;\n    background-size: var(--#{$prefix}accordion-btn-icon-width);\n    @include transition(var(--#{$prefix}accordion-btn-icon-transition));\n  }\n\n  &:hover {\n    z-index: 2;\n  }\n\n  &:focus {\n    z-index: 3;\n    border-color: var(--#{$prefix}accordion-btn-focus-border-color);\n    outline: 0;\n    box-shadow: var(--#{$prefix}accordion-btn-focus-box-shadow);\n  }\n}\n\n.accordion-header {\n  margin-bottom: 0;\n}\n\n.accordion-item {\n  color: var(--#{$prefix}accordion-color);\n  background-color: var(--#{$prefix}accordion-bg);\n  border: var(--#{$prefix}accordion-border-width) solid var(--#{$prefix}accordion-border-color);\n\n  &:first-of-type {\n    @include border-top-radius(var(--#{$prefix}accordion-border-radius));\n\n    .accordion-button {\n      @include border-top-radius(var(--#{$prefix}accordion-inner-border-radius));\n    }\n  }\n\n  &:not(:first-of-type) {\n    border-top: 0;\n  }\n\n  // Only set a border-radius on the last item if the accordion is collapsed\n  &:last-of-type {\n    @include border-bottom-radius(var(--#{$prefix}accordion-border-radius));\n\n    .accordion-button {\n      &.collapsed {\n        @include border-bottom-radius(var(--#{$prefix}accordion-inner-border-radius));\n      }\n    }\n\n    .accordion-collapse {\n      @include border-bottom-radius(var(--#{$prefix}accordion-border-radius));\n    }\n  }\n}\n\n.accordion-body {\n  padding: var(--#{$prefix}accordion-body-padding-y) var(--#{$prefix}accordion-body-padding-x);\n}\n\n\n// Flush accordion items\n//\n// Remove borders and border-radius to keep accordion items edge-to-edge.\n\n.accordion-flush {\n  .accordion-collapse {\n    border-width: 0;\n  }\n\n  .accordion-item {\n    border-right: 0;\n    border-left: 0;\n    @include border-radius(0);\n\n    &:first-child { border-top: 0; }\n    &:last-child { border-bottom: 0; }\n\n    .accordion-button {\n      &,\n      &.collapsed {\n        @include border-radius(0);\n      }\n    }\n  }\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    .accordion-button::after {\n      --#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon-dark)};\n      --#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon-dark)};\n    }\n  }\n}\n",".breadcrumb {\n  // scss-docs-start breadcrumb-css-vars\n  --#{$prefix}breadcrumb-padding-x: #{$breadcrumb-padding-x};\n  --#{$prefix}breadcrumb-padding-y: #{$breadcrumb-padding-y};\n  --#{$prefix}breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};\n  @include rfs($breadcrumb-font-size, --#{$prefix}breadcrumb-font-size);\n  --#{$prefix}breadcrumb-bg: #{$breadcrumb-bg};\n  --#{$prefix}breadcrumb-border-radius: #{$breadcrumb-border-radius};\n  --#{$prefix}breadcrumb-divider-color: #{$breadcrumb-divider-color};\n  --#{$prefix}breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};\n  --#{$prefix}breadcrumb-item-active-color: #{$breadcrumb-active-color};\n  // scss-docs-end breadcrumb-css-vars\n\n  display: flex;\n  flex-wrap: wrap;\n  padding: var(--#{$prefix}breadcrumb-padding-y) var(--#{$prefix}breadcrumb-padding-x);\n  margin-bottom: var(--#{$prefix}breadcrumb-margin-bottom);\n  @include font-size(var(--#{$prefix}breadcrumb-font-size));\n  list-style: none;\n  background-color: var(--#{$prefix}breadcrumb-bg);\n  @include border-radius(var(--#{$prefix}breadcrumb-border-radius));\n}\n\n.breadcrumb-item {\n  // The separator between breadcrumbs (by default, a forward-slash: \"/\")\n  + .breadcrumb-item {\n    padding-left: var(--#{$prefix}breadcrumb-item-padding-x);\n\n    &::before {\n      float: left; // Suppress inline spacings and underlining of the separator\n      padding-right: var(--#{$prefix}breadcrumb-item-padding-x);\n      color: var(--#{$prefix}breadcrumb-divider-color);\n      content: var(--#{$prefix}breadcrumb-divider, escape-svg($breadcrumb-divider)) #{\"/* rtl:\"} var(--#{$prefix}breadcrumb-divider, escape-svg($breadcrumb-divider-flipped)) #{\"*/\"};\n    }\n  }\n\n  &.active {\n    color: var(--#{$prefix}breadcrumb-item-active-color);\n  }\n}\n",".pagination {\n  // scss-docs-start pagination-css-vars\n  --#{$prefix}pagination-padding-x: #{$pagination-padding-x};\n  --#{$prefix}pagination-padding-y: #{$pagination-padding-y};\n  @include rfs($pagination-font-size, --#{$prefix}pagination-font-size);\n  --#{$prefix}pagination-color: #{$pagination-color};\n  --#{$prefix}pagination-bg: #{$pagination-bg};\n  --#{$prefix}pagination-border-width: #{$pagination-border-width};\n  --#{$prefix}pagination-border-color: #{$pagination-border-color};\n  --#{$prefix}pagination-border-radius: #{$pagination-border-radius};\n  --#{$prefix}pagination-hover-color: #{$pagination-hover-color};\n  --#{$prefix}pagination-hover-bg: #{$pagination-hover-bg};\n  --#{$prefix}pagination-hover-border-color: #{$pagination-hover-border-color};\n  --#{$prefix}pagination-focus-color: #{$pagination-focus-color};\n  --#{$prefix}pagination-focus-bg: #{$pagination-focus-bg};\n  --#{$prefix}pagination-focus-box-shadow: #{$pagination-focus-box-shadow};\n  --#{$prefix}pagination-active-color: #{$pagination-active-color};\n  --#{$prefix}pagination-active-bg: #{$pagination-active-bg};\n  --#{$prefix}pagination-active-border-color: #{$pagination-active-border-color};\n  --#{$prefix}pagination-disabled-color: #{$pagination-disabled-color};\n  --#{$prefix}pagination-disabled-bg: #{$pagination-disabled-bg};\n  --#{$prefix}pagination-disabled-border-color: #{$pagination-disabled-border-color};\n  // scss-docs-end pagination-css-vars\n\n  display: flex;\n  @include list-unstyled();\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: var(--#{$prefix}pagination-padding-y) var(--#{$prefix}pagination-padding-x);\n  @include font-size(var(--#{$prefix}pagination-font-size));\n  color: var(--#{$prefix}pagination-color);\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: var(--#{$prefix}pagination-bg);\n  border: var(--#{$prefix}pagination-border-width) solid var(--#{$prefix}pagination-border-color);\n  @include transition($pagination-transition);\n\n  &:hover {\n    z-index: 2;\n    color: var(--#{$prefix}pagination-hover-color);\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    background-color: var(--#{$prefix}pagination-hover-bg);\n    border-color: var(--#{$prefix}pagination-hover-border-color);\n  }\n\n  &:focus {\n    z-index: 3;\n    color: var(--#{$prefix}pagination-focus-color);\n    background-color: var(--#{$prefix}pagination-focus-bg);\n    outline: $pagination-focus-outline;\n    box-shadow: var(--#{$prefix}pagination-focus-box-shadow);\n  }\n\n  &.active,\n  .active > & {\n    z-index: 3;\n    color: var(--#{$prefix}pagination-active-color);\n    @include gradient-bg(var(--#{$prefix}pagination-active-bg));\n    border-color: var(--#{$prefix}pagination-active-border-color);\n  }\n\n  &.disabled,\n  .disabled > & {\n    color: var(--#{$prefix}pagination-disabled-color);\n    pointer-events: none;\n    background-color: var(--#{$prefix}pagination-disabled-bg);\n    border-color: var(--#{$prefix}pagination-disabled-border-color);\n  }\n}\n\n.page-item {\n  &:not(:first-child) .page-link {\n    margin-left: $pagination-margin-start;\n  }\n\n  @if $pagination-margin-start == calc(#{$pagination-border-width} * -1) {\n    &:first-child {\n      .page-link {\n        @include border-start-radius(var(--#{$prefix}pagination-border-radius));\n      }\n    }\n\n    &:last-child {\n      .page-link {\n        @include border-end-radius(var(--#{$prefix}pagination-border-radius));\n      }\n    }\n  } @else {\n    // Add border-radius to all pageLinks in case they have left margin\n    .page-link {\n      @include border-radius(var(--#{$prefix}pagination-border-radius));\n    }\n  }\n}\n\n\n//\n// Sizing\n//\n\n.pagination-lg {\n  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, $font-size-lg, $pagination-border-radius-lg);\n}\n\n.pagination-sm {\n  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, $font-size-sm, $pagination-border-radius-sm);\n}\n","// Pagination\n\n// scss-docs-start pagination-mixin\n@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {\n  --#{$prefix}pagination-padding-x: #{$padding-x};\n  --#{$prefix}pagination-padding-y: #{$padding-y};\n  @include rfs($font-size, --#{$prefix}pagination-font-size);\n  --#{$prefix}pagination-border-radius: #{$border-radius};\n}\n// scss-docs-end pagination-mixin\n","// Base class\n//\n// Requires one of the contextual, color modifier classes for `color` and\n// `background-color`.\n\n.badge {\n  // scss-docs-start badge-css-vars\n  --#{$prefix}badge-padding-x: #{$badge-padding-x};\n  --#{$prefix}badge-padding-y: #{$badge-padding-y};\n  @include rfs($badge-font-size, --#{$prefix}badge-font-size);\n  --#{$prefix}badge-font-weight: #{$badge-font-weight};\n  --#{$prefix}badge-color: #{$badge-color};\n  --#{$prefix}badge-border-radius: #{$badge-border-radius};\n  // scss-docs-end badge-css-vars\n\n  display: inline-block;\n  padding: var(--#{$prefix}badge-padding-y) var(--#{$prefix}badge-padding-x);\n  @include font-size(var(--#{$prefix}badge-font-size));\n  font-weight: var(--#{$prefix}badge-font-weight);\n  line-height: 1;\n  color: var(--#{$prefix}badge-color);\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  @include border-radius(var(--#{$prefix}badge-border-radius));\n  @include gradient-bg();\n\n  // Empty badges collapse automatically\n  &:empty {\n    display: none;\n  }\n}\n\n// Quick fix for badges in buttons\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n","//\n// Base styles\n//\n\n.alert {\n  // scss-docs-start alert-css-vars\n  --#{$prefix}alert-bg: transparent;\n  --#{$prefix}alert-padding-x: #{$alert-padding-x};\n  --#{$prefix}alert-padding-y: #{$alert-padding-y};\n  --#{$prefix}alert-margin-bottom: #{$alert-margin-bottom};\n  --#{$prefix}alert-color: inherit;\n  --#{$prefix}alert-border-color: transparent;\n  --#{$prefix}alert-border: #{$alert-border-width} solid var(--#{$prefix}alert-border-color);\n  --#{$prefix}alert-border-radius: #{$alert-border-radius};\n  --#{$prefix}alert-link-color: inherit;\n  // scss-docs-end alert-css-vars\n\n  position: relative;\n  padding: var(--#{$prefix}alert-padding-y) var(--#{$prefix}alert-padding-x);\n  margin-bottom: var(--#{$prefix}alert-margin-bottom);\n  color: var(--#{$prefix}alert-color);\n  background-color: var(--#{$prefix}alert-bg);\n  border: var(--#{$prefix}alert-border);\n  @include border-radius(var(--#{$prefix}alert-border-radius));\n}\n\n// Headings for larger alerts\n.alert-heading {\n  // Specified to prevent conflicts of changing $headings-color\n  color: inherit;\n}\n\n// Provide class for links that match alerts\n.alert-link {\n  font-weight: $alert-link-font-weight;\n  color: var(--#{$prefix}alert-link-color);\n}\n\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissible {\n  padding-right: $alert-dismissible-padding-r;\n\n  // Adjust close link position\n  .btn-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: $stretched-link-z-index + 1;\n    padding: $alert-padding-y * 1.25 $alert-padding-x;\n  }\n}\n\n\n// scss-docs-start alert-modifiers\n// Generate contextual modifier classes for colorizing the alert\n@each $state in map-keys($theme-colors) {\n  .alert-#{$state} {\n    --#{$prefix}alert-color: var(--#{$prefix}#{$state}-text-emphasis);\n    --#{$prefix}alert-bg: var(--#{$prefix}#{$state}-bg-subtle);\n    --#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);\n    --#{$prefix}alert-link-color: var(--#{$prefix}#{$state}-text-emphasis);\n  }\n}\n// scss-docs-end alert-modifiers\n","// Disable animation if transitions are disabled\n\n// scss-docs-start progress-keyframes\n@if $enable-transitions {\n  @keyframes progress-bar-stripes {\n    0% { background-position-x: $progress-height; }\n  }\n}\n// scss-docs-end progress-keyframes\n\n.progress,\n.progress-stacked {\n  // scss-docs-start progress-css-vars\n  --#{$prefix}progress-height: #{$progress-height};\n  @include rfs($progress-font-size, --#{$prefix}progress-font-size);\n  --#{$prefix}progress-bg: #{$progress-bg};\n  --#{$prefix}progress-border-radius: #{$progress-border-radius};\n  --#{$prefix}progress-box-shadow: #{$progress-box-shadow};\n  --#{$prefix}progress-bar-color: #{$progress-bar-color};\n  --#{$prefix}progress-bar-bg: #{$progress-bar-bg};\n  --#{$prefix}progress-bar-transition: #{$progress-bar-transition};\n  // scss-docs-end progress-css-vars\n\n  display: flex;\n  height: var(--#{$prefix}progress-height);\n  overflow: hidden; // force rounded corners by cropping it\n  @include font-size(var(--#{$prefix}progress-font-size));\n  background-color: var(--#{$prefix}progress-bg);\n  @include border-radius(var(--#{$prefix}progress-border-radius));\n  @include box-shadow(var(--#{$prefix}progress-box-shadow));\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: var(--#{$prefix}progress-bar-color);\n  text-align: center;\n  white-space: nowrap;\n  background-color: var(--#{$prefix}progress-bar-bg);\n  @include transition(var(--#{$prefix}progress-bar-transition));\n}\n\n.progress-bar-striped {\n  @include gradient-striped();\n  background-size: var(--#{$prefix}progress-height) var(--#{$prefix}progress-height);\n}\n\n.progress-stacked > .progress {\n  overflow: visible;\n}\n\n.progress-stacked > .progress > .progress-bar {\n  width: 100%;\n}\n\n@if $enable-transitions {\n  .progress-bar-animated {\n    animation: $progress-bar-animation-timing progress-bar-stripes;\n\n    @if $enable-reduced-motion {\n      @media (prefers-reduced-motion: reduce) {\n        animation: none;\n      }\n    }\n  }\n}\n","// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  // scss-docs-start list-group-css-vars\n  --#{$prefix}list-group-color: #{$list-group-color};\n  --#{$prefix}list-group-bg: #{$list-group-bg};\n  --#{$prefix}list-group-border-color: #{$list-group-border-color};\n  --#{$prefix}list-group-border-width: #{$list-group-border-width};\n  --#{$prefix}list-group-border-radius: #{$list-group-border-radius};\n  --#{$prefix}list-group-item-padding-x: #{$list-group-item-padding-x};\n  --#{$prefix}list-group-item-padding-y: #{$list-group-item-padding-y};\n  --#{$prefix}list-group-action-color: #{$list-group-action-color};\n  --#{$prefix}list-group-action-hover-color: #{$list-group-action-hover-color};\n  --#{$prefix}list-group-action-hover-bg: #{$list-group-hover-bg};\n  --#{$prefix}list-group-action-active-color: #{$list-group-action-active-color};\n  --#{$prefix}list-group-action-active-bg: #{$list-group-action-active-bg};\n  --#{$prefix}list-group-disabled-color: #{$list-group-disabled-color};\n  --#{$prefix}list-group-disabled-bg: #{$list-group-disabled-bg};\n  --#{$prefix}list-group-active-color: #{$list-group-active-color};\n  --#{$prefix}list-group-active-bg: #{$list-group-active-bg};\n  --#{$prefix}list-group-active-border-color: #{$list-group-active-border-color};\n  // scss-docs-end list-group-css-vars\n\n  display: flex;\n  flex-direction: column;\n\n  // No need to set list-style: none; since .list-group-item is block level\n  padding-left: 0; // reset padding because ul and ol\n  margin-bottom: 0;\n  @include border-radius(var(--#{$prefix}list-group-border-radius));\n}\n\n.list-group-numbered {\n  list-style-type: none;\n  counter-reset: section;\n\n  > .list-group-item::before {\n    // Increments only this instance of the section counter\n    content: counters(section, \".\") \". \";\n    counter-increment: section;\n  }\n}\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive\n// list items. Includes an extra `.active` modifier class for selected items.\n\n.list-group-item-action {\n  width: 100%; // For `<button>`s (anchors become 100% by default though)\n  color: var(--#{$prefix}list-group-action-color);\n  text-align: inherit; // For `<button>`s (anchors inherit)\n\n  // Hover state\n  &:hover,\n  &:focus {\n    z-index: 1; // Place hover/focus items above their siblings for proper border styling\n    color: var(--#{$prefix}list-group-action-hover-color);\n    text-decoration: none;\n    background-color: var(--#{$prefix}list-group-action-hover-bg);\n  }\n\n  &:active {\n    color: var(--#{$prefix}list-group-action-active-color);\n    background-color: var(--#{$prefix}list-group-action-active-bg);\n  }\n}\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: var(--#{$prefix}list-group-item-padding-y) var(--#{$prefix}list-group-item-padding-x);\n  color: var(--#{$prefix}list-group-color);\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: var(--#{$prefix}list-group-bg);\n  border: var(--#{$prefix}list-group-border-width) solid var(--#{$prefix}list-group-border-color);\n\n  &:first-child {\n    @include border-top-radius(inherit);\n  }\n\n  &:last-child {\n    @include border-bottom-radius(inherit);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: var(--#{$prefix}list-group-disabled-color);\n    pointer-events: none;\n    background-color: var(--#{$prefix}list-group-disabled-bg);\n  }\n\n  // Include both here for `<a>`s and `<button>`s\n  &.active {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: var(--#{$prefix}list-group-active-color);\n    background-color: var(--#{$prefix}list-group-active-bg);\n    border-color: var(--#{$prefix}list-group-active-border-color);\n  }\n\n  // stylelint-disable-next-line scss/selector-no-redundant-nesting-selector\n  & + .list-group-item {\n    border-top-width: 0;\n\n    &.active {\n      margin-top: calc(-1 * var(--#{$prefix}list-group-border-width)); // stylelint-disable-line function-disallowed-list\n      border-top-width: var(--#{$prefix}list-group-border-width);\n    }\n  }\n}\n\n// Horizontal\n//\n// Change the layout of list group items from vertical (default) to horizontal.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .list-group-horizontal#{$infix} {\n      flex-direction: row;\n\n      > .list-group-item {\n        &:first-child:not(:last-child) {\n          @include border-bottom-start-radius(var(--#{$prefix}list-group-border-radius));\n          @include border-top-end-radius(0);\n        }\n\n        &:last-child:not(:first-child) {\n          @include border-top-end-radius(var(--#{$prefix}list-group-border-radius));\n          @include border-bottom-start-radius(0);\n        }\n\n        &.active {\n          margin-top: 0;\n        }\n\n        + .list-group-item {\n          border-top-width: var(--#{$prefix}list-group-border-width);\n          border-left-width: 0;\n\n          &.active {\n            margin-left: calc(-1 * var(--#{$prefix}list-group-border-width)); // stylelint-disable-line function-disallowed-list\n            border-left-width: var(--#{$prefix}list-group-border-width);\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Flush list items\n//\n// Remove borders and border-radius to keep list group items edge-to-edge. Most\n// useful within other components (e.g., cards).\n\n.list-group-flush {\n  @include border-radius(0);\n\n  > .list-group-item {\n    border-width: 0 0 var(--#{$prefix}list-group-border-width);\n\n    &:last-child {\n      border-bottom-width: 0;\n    }\n  }\n}\n\n\n// scss-docs-start list-group-modifiers\n// List group contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@each $state in map-keys($theme-colors) {\n  .list-group-item-#{$state} {\n    --#{$prefix}list-group-color: var(--#{$prefix}#{$state}-text-emphasis);\n    --#{$prefix}list-group-bg: var(--#{$prefix}#{$state}-bg-subtle);\n    --#{$prefix}list-group-border-color: var(--#{$prefix}#{$state}-border-subtle);\n    --#{$prefix}list-group-action-hover-color: var(--#{$prefix}emphasis-color);\n    --#{$prefix}list-group-action-hover-bg: var(--#{$prefix}#{$state}-border-subtle);\n    --#{$prefix}list-group-action-active-color: var(--#{$prefix}emphasis-color);\n    --#{$prefix}list-group-action-active-bg: var(--#{$prefix}#{$state}-border-subtle);\n    --#{$prefix}list-group-active-color: var(--#{$prefix}#{$state}-bg-subtle);\n    --#{$prefix}list-group-active-bg: var(--#{$prefix}#{$state}-text-emphasis);\n    --#{$prefix}list-group-active-border-color: var(--#{$prefix}#{$state}-text-emphasis);\n  }\n}\n// scss-docs-end list-group-modifiers\n","// Transparent background and border properties included for button version.\n// iOS requires the button element instead of an anchor tag.\n// If you want the anchor version, it requires `href=\"#\"`.\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n.btn-close {\n  // scss-docs-start close-css-vars\n  --#{$prefix}btn-close-color: #{$btn-close-color};\n  --#{$prefix}btn-close-bg: #{ escape-svg($btn-close-bg) };\n  --#{$prefix}btn-close-opacity: #{$btn-close-opacity};\n  --#{$prefix}btn-close-hover-opacity: #{$btn-close-hover-opacity};\n  --#{$prefix}btn-close-focus-shadow: #{$btn-close-focus-shadow};\n  --#{$prefix}btn-close-focus-opacity: #{$btn-close-focus-opacity};\n  --#{$prefix}btn-close-disabled-opacity: #{$btn-close-disabled-opacity};\n  --#{$prefix}btn-close-white-filter: #{$btn-close-white-filter};\n  // scss-docs-end close-css-vars\n\n  box-sizing: content-box;\n  width: $btn-close-width;\n  height: $btn-close-height;\n  padding: $btn-close-padding-y $btn-close-padding-x;\n  color: var(--#{$prefix}btn-close-color);\n  background: transparent var(--#{$prefix}btn-close-bg) center / $btn-close-width auto no-repeat; // include transparent for button elements\n  border: 0; // for button elements\n  @include border-radius();\n  opacity: var(--#{$prefix}btn-close-opacity);\n\n  // Override <a>'s hover style\n  &:hover {\n    color: var(--#{$prefix}btn-close-color);\n    text-decoration: none;\n    opacity: var(--#{$prefix}btn-close-hover-opacity);\n  }\n\n  &:focus {\n    outline: 0;\n    box-shadow: var(--#{$prefix}btn-close-focus-shadow);\n    opacity: var(--#{$prefix}btn-close-focus-opacity);\n  }\n\n  &:disabled,\n  &.disabled {\n    pointer-events: none;\n    user-select: none;\n    opacity: var(--#{$prefix}btn-close-disabled-opacity);\n  }\n}\n\n@mixin btn-close-white() {\n  filter: var(--#{$prefix}btn-close-white-filter);\n}\n\n.btn-close-white {\n  @include btn-close-white();\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    .btn-close {\n      @include btn-close-white();\n    }\n  }\n}\n",".toast {\n  // scss-docs-start toast-css-vars\n  --#{$prefix}toast-zindex: #{$zindex-toast};\n  --#{$prefix}toast-padding-x: #{$toast-padding-x};\n  --#{$prefix}toast-padding-y: #{$toast-padding-y};\n  --#{$prefix}toast-spacing: #{$toast-spacing};\n  --#{$prefix}toast-max-width: #{$toast-max-width};\n  @include rfs($toast-font-size, --#{$prefix}toast-font-size);\n  --#{$prefix}toast-color: #{$toast-color};\n  --#{$prefix}toast-bg: #{$toast-background-color};\n  --#{$prefix}toast-border-width: #{$toast-border-width};\n  --#{$prefix}toast-border-color: #{$toast-border-color};\n  --#{$prefix}toast-border-radius: #{$toast-border-radius};\n  --#{$prefix}toast-box-shadow: #{$toast-box-shadow};\n  --#{$prefix}toast-header-color: #{$toast-header-color};\n  --#{$prefix}toast-header-bg: #{$toast-header-background-color};\n  --#{$prefix}toast-header-border-color: #{$toast-header-border-color};\n  // scss-docs-end toast-css-vars\n\n  width: var(--#{$prefix}toast-max-width);\n  max-width: 100%;\n  @include font-size(var(--#{$prefix}toast-font-size));\n  color: var(--#{$prefix}toast-color);\n  pointer-events: auto;\n  background-color: var(--#{$prefix}toast-bg);\n  background-clip: padding-box;\n  border: var(--#{$prefix}toast-border-width) solid var(--#{$prefix}toast-border-color);\n  box-shadow: var(--#{$prefix}toast-box-shadow);\n  @include border-radius(var(--#{$prefix}toast-border-radius));\n\n  &.showing {\n    opacity: 0;\n  }\n\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.toast-container {\n  --#{$prefix}toast-zindex: #{$zindex-toast};\n\n  position: absolute;\n  z-index: var(--#{$prefix}toast-zindex);\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n\n  > :not(:last-child) {\n    margin-bottom: var(--#{$prefix}toast-spacing);\n  }\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: var(--#{$prefix}toast-padding-y) var(--#{$prefix}toast-padding-x);\n  color: var(--#{$prefix}toast-header-color);\n  background-color: var(--#{$prefix}toast-header-bg);\n  background-clip: padding-box;\n  border-bottom: var(--#{$prefix}toast-border-width) solid var(--#{$prefix}toast-header-border-color);\n  @include border-top-radius(calc(var(--#{$prefix}toast-border-radius) - var(--#{$prefix}toast-border-width)));\n\n  .btn-close {\n    margin-right: calc(-.5 * var(--#{$prefix}toast-padding-x)); // stylelint-disable-line function-disallowed-list\n    margin-left: var(--#{$prefix}toast-padding-x);\n  }\n}\n\n.toast-body {\n  padding: var(--#{$prefix}toast-padding-x);\n  word-wrap: break-word;\n}\n","// stylelint-disable function-disallowed-list\n\n// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and stuff\n\n\n// Container that the modal scrolls within\n.modal {\n  // scss-docs-start modal-css-vars\n  --#{$prefix}modal-zindex: #{$zindex-modal};\n  --#{$prefix}modal-width: #{$modal-md};\n  --#{$prefix}modal-padding: #{$modal-inner-padding};\n  --#{$prefix}modal-margin: #{$modal-dialog-margin};\n  --#{$prefix}modal-color: #{$modal-content-color};\n  --#{$prefix}modal-bg: #{$modal-content-bg};\n  --#{$prefix}modal-border-color: #{$modal-content-border-color};\n  --#{$prefix}modal-border-width: #{$modal-content-border-width};\n  --#{$prefix}modal-border-radius: #{$modal-content-border-radius};\n  --#{$prefix}modal-box-shadow: #{$modal-content-box-shadow-xs};\n  --#{$prefix}modal-inner-border-radius: #{$modal-content-inner-border-radius};\n  --#{$prefix}modal-header-padding-x: #{$modal-header-padding-x};\n  --#{$prefix}modal-header-padding-y: #{$modal-header-padding-y};\n  --#{$prefix}modal-header-padding: #{$modal-header-padding}; // Todo in v6: Split this padding into x and y\n  --#{$prefix}modal-header-border-color: #{$modal-header-border-color};\n  --#{$prefix}modal-header-border-width: #{$modal-header-border-width};\n  --#{$prefix}modal-title-line-height: #{$modal-title-line-height};\n  --#{$prefix}modal-footer-gap: #{$modal-footer-margin-between};\n  --#{$prefix}modal-footer-bg: #{$modal-footer-bg};\n  --#{$prefix}modal-footer-border-color: #{$modal-footer-border-color};\n  --#{$prefix}modal-footer-border-width: #{$modal-footer-border-width};\n  // scss-docs-end modal-css-vars\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--#{$prefix}modal-zindex);\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n  // We deliberately don't use `-webkit-overflow-scrolling: touch;` due to a\n  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342\n  // See also https://github.com/twbs/bootstrap/issues/17695\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: var(--#{$prefix}modal-margin);\n  // allow clicks to pass through for custom click handling to close modal\n  pointer-events: none;\n\n  // When fading in the modal, animate it to slide down\n  .modal.fade & {\n    @include transition($modal-transition);\n    transform: $modal-fade-transform;\n  }\n  .modal.show & {\n    transform: $modal-show-transform;\n  }\n\n  // When trying to close, animate focus to scale\n  .modal.modal-static & {\n    transform: $modal-scale-transform;\n  }\n}\n\n.modal-dialog-scrollable {\n  height: calc(100% - var(--#{$prefix}modal-margin) * 2);\n\n  .modal-content {\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n  .modal-body {\n    overflow-y: auto;\n  }\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - var(--#{$prefix}modal-margin) * 2);\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%; // Ensure `.modal-content` extends the full width of the parent `.modal-dialog`\n  // counteract the pointer-events: none; in the .modal-dialog\n  color: var(--#{$prefix}modal-color);\n  pointer-events: auto;\n  background-color: var(--#{$prefix}modal-bg);\n  background-clip: padding-box;\n  border: var(--#{$prefix}modal-border-width) solid var(--#{$prefix}modal-border-color);\n  @include border-radius(var(--#{$prefix}modal-border-radius));\n  @include box-shadow(var(--#{$prefix}modal-box-shadow));\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  // scss-docs-start modal-backdrop-css-vars\n  --#{$prefix}backdrop-zindex: #{$zindex-modal-backdrop};\n  --#{$prefix}backdrop-bg: #{$modal-backdrop-bg};\n  --#{$prefix}backdrop-opacity: #{$modal-backdrop-opacity};\n  // scss-docs-end modal-backdrop-css-vars\n\n  @include overlay-backdrop(var(--#{$prefix}backdrop-zindex), var(--#{$prefix}backdrop-bg), var(--#{$prefix}backdrop-opacity));\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends\n  padding: var(--#{$prefix}modal-header-padding);\n  border-bottom: var(--#{$prefix}modal-header-border-width) solid var(--#{$prefix}modal-header-border-color);\n  @include border-top-radius(var(--#{$prefix}modal-inner-border-radius));\n\n  .btn-close {\n    padding: calc(var(--#{$prefix}modal-header-padding-y) * .5) calc(var(--#{$prefix}modal-header-padding-x) * .5);\n    margin: calc(-.5 * var(--#{$prefix}modal-header-padding-y)) calc(-.5 * var(--#{$prefix}modal-header-padding-x)) calc(-.5 * var(--#{$prefix}modal-header-padding-y)) auto;\n  }\n}\n\n// Title text within header\n.modal-title {\n  margin-bottom: 0;\n  line-height: var(--#{$prefix}modal-title-line-height);\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  // Enable `flex-grow: 1` so that the body take up as much space as possible\n  // when there should be a fixed height on `.modal-dialog`.\n  flex: 1 1 auto;\n  padding: var(--#{$prefix}modal-padding);\n}\n\n// Footer (for actions)\n.modal-footer {\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center; // vertically center\n  justify-content: flex-end; // Right align buttons with flex property because text-align doesn't work on flex items\n  padding: calc(var(--#{$prefix}modal-padding) - var(--#{$prefix}modal-footer-gap) * .5);\n  background-color: var(--#{$prefix}modal-footer-bg);\n  border-top: var(--#{$prefix}modal-footer-border-width) solid var(--#{$prefix}modal-footer-border-color);\n  @include border-bottom-radius(var(--#{$prefix}modal-inner-border-radius));\n\n  // Place margin between footer elements\n  // This solution is far from ideal because of the universal selector usage,\n  // but is needed to fix https://github.com/twbs/bootstrap/issues/24800\n  > * {\n    margin: calc(var(--#{$prefix}modal-footer-gap) * .5); // Todo in v6: replace with gap on parent class\n  }\n}\n\n// Scale up the modal\n@include media-breakpoint-up(sm) {\n  .modal {\n    --#{$prefix}modal-margin: #{$modal-dialog-margin-y-sm-up};\n    --#{$prefix}modal-box-shadow: #{$modal-content-box-shadow-sm-up};\n  }\n\n  // Automatically set modal's width for larger viewports\n  .modal-dialog {\n    max-width: var(--#{$prefix}modal-width);\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .modal-sm {\n    --#{$prefix}modal-width: #{$modal-sm};\n  }\n}\n\n@include media-breakpoint-up(lg) {\n  .modal-lg,\n  .modal-xl {\n    --#{$prefix}modal-width: #{$modal-lg};\n  }\n}\n\n@include media-breakpoint-up(xl) {\n  .modal-xl {\n    --#{$prefix}modal-width: #{$modal-xl};\n  }\n}\n\n// scss-docs-start modal-fullscreen-loop\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n  $postfix: if($infix != \"\", $infix + \"-down\", \"\");\n\n  @include media-breakpoint-down($breakpoint) {\n    .modal-fullscreen#{$postfix} {\n      width: 100vw;\n      max-width: none;\n      height: 100%;\n      margin: 0;\n\n      .modal-content {\n        height: 100%;\n        border: 0;\n        @include border-radius(0);\n      }\n\n      .modal-header,\n      .modal-footer {\n        @include border-radius(0);\n      }\n\n      .modal-body {\n        overflow-y: auto;\n      }\n    }\n  }\n}\n// scss-docs-end modal-fullscreen-loop\n","// Shared between modals and offcanvases\n@mixin overlay-backdrop($zindex, $backdrop-bg, $backdrop-opacity) {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex;\n  width: 100vw;\n  height: 100vh;\n  background-color: $backdrop-bg;\n\n  // Fade for backdrop\n  &.fade { opacity: 0; }\n  &.show { opacity: $backdrop-opacity; }\n}\n","// Base class\n.tooltip {\n  // scss-docs-start tooltip-css-vars\n  --#{$prefix}tooltip-zindex: #{$zindex-tooltip};\n  --#{$prefix}tooltip-max-width: #{$tooltip-max-width};\n  --#{$prefix}tooltip-padding-x: #{$tooltip-padding-x};\n  --#{$prefix}tooltip-padding-y: #{$tooltip-padding-y};\n  --#{$prefix}tooltip-margin: #{$tooltip-margin};\n  @include rfs($tooltip-font-size, --#{$prefix}tooltip-font-size);\n  --#{$prefix}tooltip-color: #{$tooltip-color};\n  --#{$prefix}tooltip-bg: #{$tooltip-bg};\n  --#{$prefix}tooltip-border-radius: #{$tooltip-border-radius};\n  --#{$prefix}tooltip-opacity: #{$tooltip-opacity};\n  --#{$prefix}tooltip-arrow-width: #{$tooltip-arrow-width};\n  --#{$prefix}tooltip-arrow-height: #{$tooltip-arrow-height};\n  // scss-docs-end tooltip-css-vars\n\n  z-index: var(--#{$prefix}tooltip-zindex);\n  display: block;\n  margin: var(--#{$prefix}tooltip-margin);\n  @include deprecate(\"`$tooltip-margin`\", \"v5\", \"v5.x\", true);\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size(var(--#{$prefix}tooltip-font-size));\n  // Allow breaking very long words so they don't overflow the tooltip's bounds\n  word-wrap: break-word;\n  opacity: 0;\n\n  &.show { opacity: var(--#{$prefix}tooltip-opacity); }\n\n  .tooltip-arrow {\n    display: block;\n    width: var(--#{$prefix}tooltip-arrow-width);\n    height: var(--#{$prefix}tooltip-arrow-height);\n\n    &::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-tooltip-top .tooltip-arrow {\n  bottom: calc(-1 * var(--#{$prefix}tooltip-arrow-height)); // stylelint-disable-line function-disallowed-list\n\n  &::before {\n    top: -1px;\n    border-width: var(--#{$prefix}tooltip-arrow-height) calc(var(--#{$prefix}tooltip-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list\n    border-top-color: var(--#{$prefix}tooltip-bg);\n  }\n}\n\n/* rtl:begin:ignore */\n.bs-tooltip-end .tooltip-arrow {\n  left: calc(-1 * var(--#{$prefix}tooltip-arrow-height)); // stylelint-disable-line function-disallowed-list\n  width: var(--#{$prefix}tooltip-arrow-height);\n  height: var(--#{$prefix}tooltip-arrow-width);\n\n  &::before {\n    right: -1px;\n    border-width: calc(var(--#{$prefix}tooltip-arrow-width) * .5) var(--#{$prefix}tooltip-arrow-height) calc(var(--#{$prefix}tooltip-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list\n    border-right-color: var(--#{$prefix}tooltip-bg);\n  }\n}\n\n/* rtl:end:ignore */\n\n.bs-tooltip-bottom .tooltip-arrow {\n  top: calc(-1 * var(--#{$prefix}tooltip-arrow-height)); // stylelint-disable-line function-disallowed-list\n\n  &::before {\n    bottom: -1px;\n    border-width: 0 calc(var(--#{$prefix}tooltip-arrow-width) * .5) var(--#{$prefix}tooltip-arrow-height); // stylelint-disable-line function-disallowed-list\n    border-bottom-color: var(--#{$prefix}tooltip-bg);\n  }\n}\n\n/* rtl:begin:ignore */\n.bs-tooltip-start .tooltip-arrow {\n  right: calc(-1 * var(--#{$prefix}tooltip-arrow-height)); // stylelint-disable-line function-disallowed-list\n  width: var(--#{$prefix}tooltip-arrow-height);\n  height: var(--#{$prefix}tooltip-arrow-width);\n\n  &::before {\n    left: -1px;\n    border-width: calc(var(--#{$prefix}tooltip-arrow-width) * .5) 0 calc(var(--#{$prefix}tooltip-arrow-width) * .5) var(--#{$prefix}tooltip-arrow-height); // stylelint-disable-line function-disallowed-list\n    border-left-color: var(--#{$prefix}tooltip-bg);\n  }\n}\n\n/* rtl:end:ignore */\n\n.bs-tooltip-auto {\n  &[data-popper-placement^=\"top\"] {\n    @extend .bs-tooltip-top;\n  }\n  &[data-popper-placement^=\"right\"] {\n    @extend .bs-tooltip-end;\n  }\n  &[data-popper-placement^=\"bottom\"] {\n    @extend .bs-tooltip-bottom;\n  }\n  &[data-popper-placement^=\"left\"] {\n    @extend .bs-tooltip-start;\n  }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: var(--#{$prefix}tooltip-max-width);\n  padding: var(--#{$prefix}tooltip-padding-y) var(--#{$prefix}tooltip-padding-x);\n  color: var(--#{$prefix}tooltip-color);\n  text-align: center;\n  background-color: var(--#{$prefix}tooltip-bg);\n  @include border-radius(var(--#{$prefix}tooltip-border-radius));\n}\n","@mixin reset-text {\n  font-family: $font-family-base;\n  // We deliberately do NOT reset font-size or overflow-wrap / word-wrap.\n  font-style: normal;\n  font-weight: $font-weight-normal;\n  line-height: $line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n}\n",".popover {\n  // scss-docs-start popover-css-vars\n  --#{$prefix}popover-zindex: #{$zindex-popover};\n  --#{$prefix}popover-max-width: #{$popover-max-width};\n  @include rfs($popover-font-size, --#{$prefix}popover-font-size);\n  --#{$prefix}popover-bg: #{$popover-bg};\n  --#{$prefix}popover-border-width: #{$popover-border-width};\n  --#{$prefix}popover-border-color: #{$popover-border-color};\n  --#{$prefix}popover-border-radius: #{$popover-border-radius};\n  --#{$prefix}popover-inner-border-radius: #{$popover-inner-border-radius};\n  --#{$prefix}popover-box-shadow: #{$popover-box-shadow};\n  --#{$prefix}popover-header-padding-x: #{$popover-header-padding-x};\n  --#{$prefix}popover-header-padding-y: #{$popover-header-padding-y};\n  @include rfs($popover-header-font-size, --#{$prefix}popover-header-font-size);\n  --#{$prefix}popover-header-color: #{$popover-header-color};\n  --#{$prefix}popover-header-bg: #{$popover-header-bg};\n  --#{$prefix}popover-body-padding-x: #{$popover-body-padding-x};\n  --#{$prefix}popover-body-padding-y: #{$popover-body-padding-y};\n  --#{$prefix}popover-body-color: #{$popover-body-color};\n  --#{$prefix}popover-arrow-width: #{$popover-arrow-width};\n  --#{$prefix}popover-arrow-height: #{$popover-arrow-height};\n  --#{$prefix}popover-arrow-border: var(--#{$prefix}popover-border-color);\n  // scss-docs-end popover-css-vars\n\n  z-index: var(--#{$prefix}popover-zindex);\n  display: block;\n  max-width: var(--#{$prefix}popover-max-width);\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size(var(--#{$prefix}popover-font-size));\n  // Allow breaking very long words so they don't overflow the popover's bounds\n  word-wrap: break-word;\n  background-color: var(--#{$prefix}popover-bg);\n  background-clip: padding-box;\n  border: var(--#{$prefix}popover-border-width) solid var(--#{$prefix}popover-border-color);\n  @include border-radius(var(--#{$prefix}popover-border-radius));\n  @include box-shadow(var(--#{$prefix}popover-box-shadow));\n\n  .popover-arrow {\n    display: block;\n    width: var(--#{$prefix}popover-arrow-width);\n    height: var(--#{$prefix}popover-arrow-height);\n\n    &::before,\n    &::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0;\n    }\n  }\n}\n\n.bs-popover-top {\n  > .popover-arrow {\n    bottom: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list\n\n    &::before,\n    &::after {\n      border-width: var(--#{$prefix}popover-arrow-height) calc(var(--#{$prefix}popover-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list\n    }\n\n    &::before {\n      bottom: 0;\n      border-top-color: var(--#{$prefix}popover-arrow-border);\n    }\n\n    &::after {\n      bottom: var(--#{$prefix}popover-border-width);\n      border-top-color: var(--#{$prefix}popover-bg);\n    }\n  }\n}\n\n/* rtl:begin:ignore */\n.bs-popover-end {\n  > .popover-arrow {\n    left: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list\n    width: var(--#{$prefix}popover-arrow-height);\n    height: var(--#{$prefix}popover-arrow-width);\n\n    &::before,\n    &::after {\n      border-width: calc(var(--#{$prefix}popover-arrow-width) * .5) var(--#{$prefix}popover-arrow-height) calc(var(--#{$prefix}popover-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list\n    }\n\n    &::before {\n      left: 0;\n      border-right-color: var(--#{$prefix}popover-arrow-border);\n    }\n\n    &::after {\n      left: var(--#{$prefix}popover-border-width);\n      border-right-color: var(--#{$prefix}popover-bg);\n    }\n  }\n}\n\n/* rtl:end:ignore */\n\n.bs-popover-bottom {\n  > .popover-arrow {\n    top: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list\n\n    &::before,\n    &::after {\n      border-width: 0 calc(var(--#{$prefix}popover-arrow-width) * .5) var(--#{$prefix}popover-arrow-height); // stylelint-disable-line function-disallowed-list\n    }\n\n    &::before {\n      top: 0;\n      border-bottom-color: var(--#{$prefix}popover-arrow-border);\n    }\n\n    &::after {\n      top: var(--#{$prefix}popover-border-width);\n      border-bottom-color: var(--#{$prefix}popover-bg);\n    }\n  }\n\n  // This will remove the popover-header's border just below the arrow\n  .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: var(--#{$prefix}popover-arrow-width);\n    margin-left: calc(-.5 * var(--#{$prefix}popover-arrow-width)); // stylelint-disable-line function-disallowed-list\n    content: \"\";\n    border-bottom: var(--#{$prefix}popover-border-width) solid var(--#{$prefix}popover-header-bg);\n  }\n}\n\n/* rtl:begin:ignore */\n.bs-popover-start {\n  > .popover-arrow {\n    right: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list\n    width: var(--#{$prefix}popover-arrow-height);\n    height: var(--#{$prefix}popover-arrow-width);\n\n    &::before,\n    &::after {\n      border-width: calc(var(--#{$prefix}popover-arrow-width) * .5) 0 calc(var(--#{$prefix}popover-arrow-width) * .5) var(--#{$prefix}popover-arrow-height); // stylelint-disable-line function-disallowed-list\n    }\n\n    &::before {\n      right: 0;\n      border-left-color: var(--#{$prefix}popover-arrow-border);\n    }\n\n    &::after {\n      right: var(--#{$prefix}popover-border-width);\n      border-left-color: var(--#{$prefix}popover-bg);\n    }\n  }\n}\n\n/* rtl:end:ignore */\n\n.bs-popover-auto {\n  &[data-popper-placement^=\"top\"] {\n    @extend .bs-popover-top;\n  }\n  &[data-popper-placement^=\"right\"] {\n    @extend .bs-popover-end;\n  }\n  &[data-popper-placement^=\"bottom\"] {\n    @extend .bs-popover-bottom;\n  }\n  &[data-popper-placement^=\"left\"] {\n    @extend .bs-popover-start;\n  }\n}\n\n// Offset the popover to account for the popover arrow\n.popover-header {\n  padding: var(--#{$prefix}popover-header-padding-y) var(--#{$prefix}popover-header-padding-x);\n  margin-bottom: 0; // Reset the default from Reboot\n  @include font-size(var(--#{$prefix}popover-header-font-size));\n  color: var(--#{$prefix}popover-header-color);\n  background-color: var(--#{$prefix}popover-header-bg);\n  border-bottom: var(--#{$prefix}popover-border-width) solid var(--#{$prefix}popover-border-color);\n  @include border-top-radius(var(--#{$prefix}popover-inner-border-radius));\n\n  &:empty {\n    display: none;\n  }\n}\n\n.popover-body {\n  padding: var(--#{$prefix}popover-body-padding-y) var(--#{$prefix}popover-body-padding-x);\n  color: var(--#{$prefix}popover-body-color);\n}\n","// Notes on the classes:\n//\n// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)\n//    even when their scroll action started on a carousel, but for compatibility (with Firefox)\n//    we're preventing all actions instead\n// 2. The .carousel-item-start and .carousel-item-end is used to indicate where\n//    the active slide is heading.\n// 3. .active.carousel-item is the current slide.\n// 4. .active.carousel-item-start and .active.carousel-item-end is the current\n//    slide in its in-transition state. Only one of these occurs at a time.\n// 5. .carousel-item-next.carousel-item-start and .carousel-item-prev.carousel-item-end\n//    is the upcoming slide in transition.\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  @include clearfix();\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  @include transition($carousel-transition);\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%);\n}\n\n\n//\n// Alternate transitions\n//\n\n.carousel-fade {\n  .carousel-item {\n    opacity: 0;\n    transition-property: opacity;\n    transform: none;\n  }\n\n  .carousel-item.active,\n  .carousel-item-next.carousel-item-start,\n  .carousel-item-prev.carousel-item-end {\n    z-index: 1;\n    opacity: 1;\n  }\n\n  .active.carousel-item-start,\n  .active.carousel-item-end {\n    z-index: 0;\n    opacity: 0;\n    @include transition(opacity 0s $carousel-transition-duration);\n  }\n}\n\n\n//\n// Left/right controls for nav\n//\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  // Use flex for alignment (1-3)\n  display: flex; // 1. allow flex styles\n  align-items: center; // 2. vertically center contents\n  justify-content: center; // 3. horizontally center contents\n  width: $carousel-control-width;\n  padding: 0;\n  color: $carousel-control-color;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: $carousel-control-opacity;\n  @include transition($carousel-control-transition);\n\n  // Hover/focus state\n  &:hover,\n  &:focus {\n    color: $carousel-control-color;\n    text-decoration: none;\n    outline: 0;\n    opacity: $carousel-control-hover-opacity;\n  }\n}\n.carousel-control-prev {\n  left: 0;\n  background-image: if($enable-gradients, linear-gradient(90deg, rgba($black, .25), rgba($black, .001)), null);\n}\n.carousel-control-next {\n  right: 0;\n  background-image: if($enable-gradients, linear-gradient(270deg, rgba($black, .25), rgba($black, .001)), null);\n}\n\n// Icons for within\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: $carousel-control-icon-width;\n  height: $carousel-control-icon-width;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: escape-svg($carousel-control-prev-icon-bg);\n}\n.carousel-control-next-icon {\n  background-image: escape-svg($carousel-control-next-icon-bg);\n}\n\n// Optional indicator pips/controls\n//\n// Add a container (such as a list) with the following class and add an item (ideally a focusable control,\n// like a button) with data-bs-target for each slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  // Use the .carousel-control's width as margin so we don't overlay those\n  margin-right: $carousel-control-width;\n  margin-bottom: 1rem;\n  margin-left: $carousel-control-width;\n\n  [data-bs-target] {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: $carousel-indicator-width;\n    height: $carousel-indicator-height;\n    padding: 0;\n    margin-right: $carousel-indicator-spacer;\n    margin-left: $carousel-indicator-spacer;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: $carousel-indicator-active-bg;\n    background-clip: padding-box;\n    border: 0;\n    // Use transparent borders to increase the hit area by 10px on top and bottom.\n    border-top: $carousel-indicator-hit-area-height solid transparent;\n    border-bottom: $carousel-indicator-hit-area-height solid transparent;\n    opacity: $carousel-indicator-opacity;\n    @include transition($carousel-indicator-transition);\n  }\n\n  .active {\n    opacity: $carousel-indicator-active-opacity;\n  }\n}\n\n\n// Optional captions\n//\n//\n\n.carousel-caption {\n  position: absolute;\n  right: (100% - $carousel-caption-width) * .5;\n  bottom: $carousel-caption-spacer;\n  left: (100% - $carousel-caption-width) * .5;\n  padding-top: $carousel-caption-padding-y;\n  padding-bottom: $carousel-caption-padding-y;\n  color: $carousel-caption-color;\n  text-align: center;\n}\n\n// Dark mode carousel\n\n@mixin carousel-dark() {\n  .carousel-control-prev-icon,\n  .carousel-control-next-icon {\n    filter: $carousel-dark-control-icon-filter;\n  }\n\n  .carousel-indicators [data-bs-target] {\n    background-color: $carousel-dark-indicator-active-bg;\n  }\n\n  .carousel-caption {\n    color: $carousel-dark-caption-color;\n  }\n}\n\n.carousel-dark {\n  @include carousel-dark();\n}\n\n@if $enable-dark-mode {\n  @include color-mode(dark) {\n    @if $color-mode-type == \"media-query\" {\n      .carousel {\n        @include carousel-dark();\n      }\n    } @else {\n      .carousel,\n      &.carousel {\n        @include carousel-dark();\n      }\n    }\n  }\n}\n","// scss-docs-start clearfix\n@mixin clearfix() {\n  &::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n}\n// scss-docs-end clearfix\n","//\n// Rotating border\n//\n\n.spinner-grow,\n.spinner-border {\n  display: inline-block;\n  width: var(--#{$prefix}spinner-width);\n  height: var(--#{$prefix}spinner-height);\n  vertical-align: var(--#{$prefix}spinner-vertical-align);\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  animation: var(--#{$prefix}spinner-animation-speed) linear infinite var(--#{$prefix}spinner-animation-name);\n}\n\n// scss-docs-start spinner-border-keyframes\n@keyframes spinner-border {\n  to { transform: rotate(360deg) #{\"/* rtl:ignore */\"}; }\n}\n// scss-docs-end spinner-border-keyframes\n\n.spinner-border {\n  // scss-docs-start spinner-border-css-vars\n  --#{$prefix}spinner-width: #{$spinner-width};\n  --#{$prefix}spinner-height: #{$spinner-height};\n  --#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};\n  --#{$prefix}spinner-border-width: #{$spinner-border-width};\n  --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};\n  --#{$prefix}spinner-animation-name: spinner-border;\n  // scss-docs-end spinner-border-css-vars\n\n  border: var(--#{$prefix}spinner-border-width) solid currentcolor;\n  border-right-color: transparent;\n}\n\n.spinner-border-sm {\n  // scss-docs-start spinner-border-sm-css-vars\n  --#{$prefix}spinner-width: #{$spinner-width-sm};\n  --#{$prefix}spinner-height: #{$spinner-height-sm};\n  --#{$prefix}spinner-border-width: #{$spinner-border-width-sm};\n  // scss-docs-end spinner-border-sm-css-vars\n}\n\n//\n// Growing circle\n//\n\n// scss-docs-start spinner-grow-keyframes\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n// scss-docs-end spinner-grow-keyframes\n\n.spinner-grow {\n  // scss-docs-start spinner-grow-css-vars\n  --#{$prefix}spinner-width: #{$spinner-width};\n  --#{$prefix}spinner-height: #{$spinner-height};\n  --#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};\n  --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};\n  --#{$prefix}spinner-animation-name: spinner-grow;\n  // scss-docs-end spinner-grow-css-vars\n\n  background-color: currentcolor;\n  opacity: 0;\n}\n\n.spinner-grow-sm {\n  --#{$prefix}spinner-width: #{$spinner-width-sm};\n  --#{$prefix}spinner-height: #{$spinner-height-sm};\n}\n\n@if $enable-reduced-motion {\n  @media (prefers-reduced-motion: reduce) {\n    .spinner-border,\n    .spinner-grow {\n      --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed * 2};\n    }\n  }\n}\n","// stylelint-disable function-disallowed-list\n\n%offcanvas-css-vars {\n  // scss-docs-start offcanvas-css-vars\n  --#{$prefix}offcanvas-zindex: #{$zindex-offcanvas};\n  --#{$prefix}offcanvas-width: #{$offcanvas-horizontal-width};\n  --#{$prefix}offcanvas-height: #{$offcanvas-vertical-height};\n  --#{$prefix}offcanvas-padding-x: #{$offcanvas-padding-x};\n  --#{$prefix}offcanvas-padding-y: #{$offcanvas-padding-y};\n  --#{$prefix}offcanvas-color: #{$offcanvas-color};\n  --#{$prefix}offcanvas-bg: #{$offcanvas-bg-color};\n  --#{$prefix}offcanvas-border-width: #{$offcanvas-border-width};\n  --#{$prefix}offcanvas-border-color: #{$offcanvas-border-color};\n  --#{$prefix}offcanvas-box-shadow: #{$offcanvas-box-shadow};\n  --#{$prefix}offcanvas-transition: #{transform $offcanvas-transition-duration ease-in-out};\n  --#{$prefix}offcanvas-title-line-height: #{$offcanvas-title-line-height};\n  // scss-docs-end offcanvas-css-vars\n}\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $next: breakpoint-next($breakpoint, $grid-breakpoints);\n  $infix: breakpoint-infix($next, $grid-breakpoints);\n\n  .offcanvas#{$infix} {\n    @extend %offcanvas-css-vars;\n  }\n}\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $next: breakpoint-next($breakpoint, $grid-breakpoints);\n  $infix: breakpoint-infix($next, $grid-breakpoints);\n\n  .offcanvas#{$infix} {\n    @include media-breakpoint-down($next) {\n      position: fixed;\n      bottom: 0;\n      z-index: var(--#{$prefix}offcanvas-zindex);\n      display: flex;\n      flex-direction: column;\n      max-width: 100%;\n      color: var(--#{$prefix}offcanvas-color);\n      visibility: hidden;\n      background-color: var(--#{$prefix}offcanvas-bg);\n      background-clip: padding-box;\n      outline: 0;\n      @include box-shadow(var(--#{$prefix}offcanvas-box-shadow));\n      @include transition(var(--#{$prefix}offcanvas-transition));\n\n      &.offcanvas-start {\n        top: 0;\n        left: 0;\n        width: var(--#{$prefix}offcanvas-width);\n        border-right: var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color);\n        transform: translateX(-100%);\n      }\n\n      &.offcanvas-end {\n        top: 0;\n        right: 0;\n        width: var(--#{$prefix}offcanvas-width);\n        border-left: var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color);\n        transform: translateX(100%);\n      }\n\n      &.offcanvas-top {\n        top: 0;\n        right: 0;\n        left: 0;\n        height: var(--#{$prefix}offcanvas-height);\n        max-height: 100%;\n        border-bottom: var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color);\n        transform: translateY(-100%);\n      }\n\n      &.offcanvas-bottom {\n        right: 0;\n        left: 0;\n        height: var(--#{$prefix}offcanvas-height);\n        max-height: 100%;\n        border-top: var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color);\n        transform: translateY(100%);\n      }\n\n      &.showing,\n      &.show:not(.hiding) {\n        transform: none;\n      }\n\n      &.showing,\n      &.hiding,\n      &.show {\n        visibility: visible;\n      }\n    }\n\n    @if not ($infix == \"\") {\n      @include media-breakpoint-up($next) {\n        --#{$prefix}offcanvas-height: auto;\n        --#{$prefix}offcanvas-border-width: 0;\n        background-color: transparent !important; // stylelint-disable-line declaration-no-important\n\n        .offcanvas-header {\n          display: none;\n        }\n\n        .offcanvas-body {\n          display: flex;\n          flex-grow: 0;\n          padding: 0;\n          overflow-y: visible;\n          // Reset `background-color` in case `.bg-*` classes are used in offcanvas\n          background-color: transparent !important; // stylelint-disable-line declaration-no-important\n        }\n      }\n    }\n  }\n}\n\n.offcanvas-backdrop {\n  @include overlay-backdrop($zindex-offcanvas-backdrop, $offcanvas-backdrop-bg, $offcanvas-backdrop-opacity);\n}\n\n.offcanvas-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--#{$prefix}offcanvas-padding-y) var(--#{$prefix}offcanvas-padding-x);\n\n  .btn-close {\n    padding: calc(var(--#{$prefix}offcanvas-padding-y) * .5) calc(var(--#{$prefix}offcanvas-padding-x) * .5);\n    margin-top: calc(-.5 * var(--#{$prefix}offcanvas-padding-y));\n    margin-right: calc(-.5 * var(--#{$prefix}offcanvas-padding-x));\n    margin-bottom: calc(-.5 * var(--#{$prefix}offcanvas-padding-y));\n  }\n}\n\n.offcanvas-title {\n  margin-bottom: 0;\n  line-height: var(--#{$prefix}offcanvas-title-line-height);\n}\n\n.offcanvas-body {\n  flex-grow: 1;\n  padding: var(--#{$prefix}offcanvas-padding-y) var(--#{$prefix}offcanvas-padding-x);\n  overflow-y: auto;\n}\n",".placeholder {\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: middle;\n  cursor: wait;\n  background-color: currentcolor;\n  opacity: $placeholder-opacity-max;\n\n  &.btn::before {\n    display: inline-block;\n    content: \"\";\n  }\n}\n\n// Sizing\n.placeholder-xs {\n  min-height: .6em;\n}\n\n.placeholder-sm {\n  min-height: .8em;\n}\n\n.placeholder-lg {\n  min-height: 1.2em;\n}\n\n// Animation\n.placeholder-glow {\n  .placeholder {\n    animation: placeholder-glow 2s ease-in-out infinite;\n  }\n}\n\n@keyframes placeholder-glow {\n  50% {\n    opacity: $placeholder-opacity-min;\n  }\n}\n\n.placeholder-wave {\n  mask-image: linear-gradient(130deg, $black 55%, rgba(0, 0, 0, (1 - $placeholder-opacity-min)) 75%, $black 95%);\n  mask-size: 200% 100%;\n  animation: placeholder-wave 2s linear infinite;\n}\n\n@keyframes placeholder-wave {\n  100% {\n    mask-position: -200% 0%;\n  }\n}\n","// All-caps `RGBA()` function used because of this Sass bug: https://github.com/sass/node-sass/issues/2251\n@each $color, $value in $theme-colors {\n  .text-bg-#{$color} {\n    color: color-contrast($value) if($enable-important-utilities, !important, null);\n    background-color: RGBA(var(--#{$prefix}#{$color}-rgb), var(--#{$prefix}bg-opacity, 1)) if($enable-important-utilities, !important, null);\n  }\n}\n","// All-caps `RGBA()` function used because of this Sass bug: https://github.com/sass/node-sass/issues/2251\n@each $color, $value in $theme-colors {\n  .link-#{$color} {\n    color: RGBA(var(--#{$prefix}#{$color}-rgb), var(--#{$prefix}link-opacity, 1)) if($enable-important-utilities, !important, null);\n    text-decoration-color: RGBA(var(--#{$prefix}#{$color}-rgb), var(--#{$prefix}link-underline-opacity, 1)) if($enable-important-utilities, !important, null);\n\n    @if $link-shade-percentage != 0 {\n      &:hover,\n      &:focus {\n        $hover-color: if(color-contrast($value) == $color-contrast-light, shade-color($value, $link-shade-percentage), tint-color($value, $link-shade-percentage));\n        color: RGBA(#{to-rgb($hover-color)}, var(--#{$prefix}link-opacity, 1)) if($enable-important-utilities, !important, null);\n        text-decoration-color: RGBA(to-rgb($hover-color), var(--#{$prefix}link-underline-opacity, 1)) if($enable-important-utilities, !important, null);\n      }\n    }\n  }\n}\n\n// One-off special link helper as a bridge until v6\n.link-body-emphasis {\n  color: RGBA(var(--#{$prefix}emphasis-color-rgb), var(--#{$prefix}link-opacity, 1)) if($enable-important-utilities, !important, null);\n  text-decoration-color: RGBA(var(--#{$prefix}emphasis-color-rgb), var(--#{$prefix}link-underline-opacity, 1)) if($enable-important-utilities, !important, null);\n\n  @if $link-shade-percentage != 0 {\n    &:hover,\n    &:focus {\n      color: RGBA(var(--#{$prefix}emphasis-color-rgb), var(--#{$prefix}link-opacity, .75)) if($enable-important-utilities, !important, null);\n      text-decoration-color: RGBA(var(--#{$prefix}emphasis-color-rgb), var(--#{$prefix}link-underline-opacity, .75)) if($enable-important-utilities, !important, null);\n    }\n  }\n}\n",".focus-ring:focus {\n  outline: 0;\n  // By default, there is no `--bs-focus-ring-x`, `--bs-focus-ring-y`, or `--bs-focus-ring-blur`, but we provide CSS variables with fallbacks to initial `0` values\n  box-shadow: var(--#{$prefix}focus-ring-x, 0) var(--#{$prefix}focus-ring-y, 0) var(--#{$prefix}focus-ring-blur, 0) var(--#{$prefix}focus-ring-width) var(--#{$prefix}focus-ring-color);\n}\n",".icon-link {\n  display: inline-flex;\n  gap: $icon-link-gap;\n  align-items: center;\n  text-decoration-color: rgba(var(--#{$prefix}link-color-rgb), var(--#{$prefix}link-opacity, .5));\n  text-underline-offset: $icon-link-underline-offset;\n  backface-visibility: hidden;\n\n  > .bi {\n    flex-shrink: 0;\n    width: $icon-link-icon-size;\n    height: $icon-link-icon-size;\n    fill: currentcolor;\n    @include transition($icon-link-icon-transition);\n  }\n}\n\n.icon-link-hover {\n  &:hover,\n  &:focus-visible {\n    > .bi {\n      transform: var(--#{$prefix}icon-link-transform, $icon-link-icon-transform);\n    }\n  }\n}\n","// Credit: Nicolas Gallagher and SUIT CSS.\n\n.ratio {\n  position: relative;\n  width: 100%;\n\n  &::before {\n    display: block;\n    padding-top: var(--#{$prefix}aspect-ratio);\n    content: \"\";\n  }\n\n  > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@each $key, $ratio in $aspect-ratios {\n  .ratio-#{$key} {\n    --#{$prefix}aspect-ratio: #{$ratio};\n  }\n}\n","// Shorthand\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n// Responsive sticky top and bottom\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .sticky#{$infix}-top {\n      position: sticky;\n      top: 0;\n      z-index: $zindex-sticky;\n    }\n\n    .sticky#{$infix}-bottom {\n      position: sticky;\n      bottom: 0;\n      z-index: $zindex-sticky;\n    }\n  }\n}\n","// scss-docs-start stacks\n.hstack {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: stretch;\n}\n\n.vstack {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-self: stretch;\n}\n// scss-docs-end stacks\n","//\n// Visually hidden\n//\n\n.visually-hidden,\n.visually-hidden-focusable:not(:focus):not(:focus-within) {\n  @include visually-hidden();\n}\n","// stylelint-disable declaration-no-important\n\n// Hide content visually while keeping it accessible to assistive technologies\n//\n// See: https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/\n// See: https://kittygiraudel.com/2016/10/13/css-hide-and-seek/\n\n@mixin visually-hidden() {\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n\n  // Fix for positioned table caption that could become anonymous cells\n  &:not(caption) {\n    position: absolute !important;\n  }\n}\n\n// Use to only display content when it's focused, or one of its child elements is focused\n// (i.e. when focus is within the element/container that the class was applied to)\n//\n// Useful for \"Skip to main content\" links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n\n@mixin visually-hidden-focusable() {\n  &:not(:focus):not(:focus-within) {\n    @include visually-hidden();\n  }\n}\n","//\n// Stretched link\n//\n\n.stretched-link {\n  &::#{$stretched-link-pseudo-element} {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: $stretched-link-z-index;\n    content: \"\";\n  }\n}\n","//\n// Text truncation\n//\n\n.text-truncate {\n  @include text-truncate();\n}\n","// Text truncate\n// Requires inline-block or block for proper styling\n\n@mixin text-truncate() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n",".vr {\n  display: inline-block;\n  align-self: stretch;\n  width: $vr-border-width;\n  min-height: 1em;\n  background-color: currentcolor;\n  opacity: $hr-opacity;\n}\n","// Utility generator\n// Used to generate utilities & print utilities\n@mixin generate-utility($utility, $infix: \"\", $is-rfs-media-query: false) {\n  $values: map-get($utility, values);\n\n  // If the values are a list or string, convert it into a map\n  @if type-of($values) == \"string\" or type-of(nth($values, 1)) != \"list\" {\n    $values: zip($values, $values);\n  }\n\n  @each $key, $value in $values {\n    $properties: map-get($utility, property);\n\n    // Multiple properties are possible, for example with vertical or horizontal margins or paddings\n    @if type-of($properties) == \"string\" {\n      $properties: append((), $properties);\n    }\n\n    // Use custom class if present\n    $property-class: if(map-has-key($utility, class), map-get($utility, class), nth($properties, 1));\n    $property-class: if($property-class == null, \"\", $property-class);\n\n    // Use custom CSS variable name if present, otherwise default to `class`\n    $css-variable-name: if(map-has-key($utility, css-variable-name), map-get($utility, css-variable-name), map-get($utility, class));\n\n    // State params to generate pseudo-classes\n    $state: if(map-has-key($utility, state), map-get($utility, state), ());\n\n    $infix: if($property-class == \"\" and str-slice($infix, 1, 1) == \"-\", str-slice($infix, 2), $infix);\n\n    // Don't prefix if value key is null (e.g. with shadow class)\n    $property-class-modifier: if($key, if($property-class == \"\" and $infix == \"\", \"\", \"-\") + $key, \"\");\n\n    @if map-get($utility, rfs) {\n      // Inside the media query\n      @if $is-rfs-media-query {\n        $val: rfs-value($value);\n\n        // Do not render anything if fluid and non fluid values are the same\n        $value: if($val == rfs-fluid-value($value), null, $val);\n      }\n      @else {\n        $value: rfs-fluid-value($value);\n      }\n    }\n\n    $is-css-var: map-get($utility, css-var);\n    $is-local-vars: map-get($utility, local-vars);\n    $is-rtl: map-get($utility, rtl);\n\n    @if $value != null {\n      @if $is-rtl == false {\n        /* rtl:begin:remove */\n      }\n\n      @if $is-css-var {\n        .#{$property-class + $infix + $property-class-modifier} {\n          --#{$prefix}#{$css-variable-name}: #{$value};\n        }\n\n        @each $pseudo in $state {\n          .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {\n            --#{$prefix}#{$css-variable-name}: #{$value};\n          }\n        }\n      } @else {\n        .#{$property-class + $infix + $property-class-modifier} {\n          @each $property in $properties {\n            @if $is-local-vars {\n              @each $local-var, $variable in $is-local-vars {\n                --#{$prefix}#{$local-var}: #{$variable};\n              }\n            }\n            #{$property}: $value if($enable-important-utilities, !important, null);\n          }\n        }\n\n        @each $pseudo in $state {\n          .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {\n            @each $property in $properties {\n              @if $is-local-vars {\n                @each $local-var, $variable in $is-local-vars {\n                  --#{$prefix}#{$local-var}: #{$variable};\n                }\n              }\n              #{$property}: $value if($enable-important-utilities, !important, null);\n            }\n          }\n        }\n      }\n\n      @if $is-rtl == false {\n        /* rtl:end:remove */\n      }\n    }\n  }\n}\n","// Loop over each breakpoint\n@each $breakpoint in map-keys($grid-breakpoints) {\n\n  // Generate media query if needed\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    // Loop over each utility property\n    @each $key, $utility in $utilities {\n      // The utility can be disabled with `false`, thus check if the utility is a map first\n      // Only proceed if responsive media queries are enabled or if it's the base media query\n      @if type-of($utility) == \"map\" and (map-get($utility, responsive) or $infix == \"\") {\n        @include generate-utility($utility, $infix);\n      }\n    }\n  }\n}\n\n// RFS rescaling\n@media (min-width: $rfs-mq-value) {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @if (map-get($grid-breakpoints, $breakpoint) < $rfs-breakpoint) {\n      // Loop over each utility property\n      @each $key, $utility in $utilities {\n        // The utility can be disabled with `false`, thus check if the utility is a map first\n        // Only proceed if responsive media queries are enabled or if it's the base media query\n        @if type-of($utility) == \"map\" and map-get($utility, rfs) and (map-get($utility, responsive) or $infix == \"\") {\n          @include generate-utility($utility, $infix, true);\n        }\n      }\n    }\n  }\n}\n\n\n// Print utilities\n@media print {\n  @each $key, $utility in $utilities {\n    // The utility can be disabled with `false`, thus check if the utility is a map first\n    // Then check if the utility needs print styles\n    @if type-of($utility) == \"map\" and map-get($utility, print) == true {\n      @include generate-utility($utility, \"-print\");\n    }\n  }\n}\n","//*font classes\r\n\r\n.limelight-bg {\r\n    font-family: \"Limelight\", sans-serif;\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    font-size: 4rem;\r\n\r\n    @media (min-width:500px){\r\n      font-size: 7rem;\r\n    }\r\n  }\r\n\r\n  .limelight-sm {\r\n    font-family: \"Limelight\", sans-serif;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    font-size: 2rem;\r\n\r\n      @media (min-width:500px){\r\n        font-size: 3rem;\r\n      }\r\n  }\r\n\r\n\r\n  // <uniquifier>: Use a uniquifier for the class name\r\n// <weight>: Use a value from 100 to 700\r\n\r\n.roboto-mono-regular {\r\n    font-family: \"Roboto Mono\", monospace;\r\n    // font-optical-sizing: auto;\r\n    font-weight: 200;\r\n    font-style: normal;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n\r\n","//*? NAVBAR\r\n\r\n    .navbar-nav {\r\n        flex: 1;\r\n        justify-content: space-around;\r\n    }\r\n\r\n    .logo {\r\n        width: 2rem\r\n    }\r\n  ","//*? animation\r\n@keyframes bg-animation {\r\n    0% {\r\n        background-position: 0% 50%;\r\n        background-size: 200% 100%;\r\n    }\r\n    50% {\r\n        background-position: 100% 50%;\r\n        background-size: 200% 100%;\r\n    }\r\n    100% {\r\n        background-position: 0% 50%;\r\n        background-size: 200% 100%;\r\n    }\r\n}\r\n\r\n\r\n.hero {\r\n    min-height: 100svh;\r\n    background-image: url('./assets/images/hero-image.jpg');\r\n    background-position: center bottom;\r\n    background-color: #505050;\r\n    background-blend-mode: difference; \r\n    \r\n}\r\n\r\n\r\n.hero-title {\r\n    //*mask effect    \r\n    background-image: linear-gradient(to right, rgb(215, 10, 161), rgb(28, 237, 69));\r\n    background-clip: text;\r\n    color: transparent;\r\n    background-size: 200%;\r\n    animation: bg-animation 5s linear infinite alternate; \r\n    letter-spacing: 20px;\r\n}\r\n\r\n.hero-para {\r\n    background-image: linear-gradient(to right, rgb(95, 70, 224), rgb(237, 241, 7));\r\n    background-clip: text;\r\n    color: transparent;\r\n    background-size: 200%;\r\n    animation: bg-animation 5s linear infinite alternate; \r\n}\r\n\r\n.hero-cta {\r\n    background-color: rgba(48, 48, 48,0.7);\r\n\r\n    &__para {\r\n        word-spacing: 5px;\r\n        line-height: 1.5;\r\n    }\r\n\r\n}","//*? the card grid\r\n\r\n.card {\r\n    cursor:pointer;\r\n    transform: scale(1);\r\n    transition: transform ease-out 0.2s;\r\n    &:hover {\r\n        transform: scale(1.05)\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/assets/images/hero-image.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/hero-image.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1a4d19012f588bff8aa.jpg";

/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};
_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {
        value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      value
    });
  }
});
const renderReason = reason => `- ${reason}`;
const isResolvedHandle = adapter => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter) || adapter === null || adapter === false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: adapters => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];
    const {
      length
    } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === undefined) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || '#' + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
      let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
    }
    return adapter;
  },
  adapters: knownAdapters
});

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);
  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };
    data[isDownloadStream ? 'download' : 'upload'] = true;
    listener(data);
  };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    let {
      responseType,
      withXSRFToken
    } = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    let contentType;
    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }
    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }
    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](timeoutErrorMessage, transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserEnv) {
      withXSRFToken && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
      if (withXSRFToken || withXSRFToken !== false && (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath)) {
        // Add xsrf header
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }
    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);
    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
});

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];
axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];
axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;
axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];
axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}
_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");










const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;
        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        if (!err.stack) {
          err.stack = stack;
          // match without the 2 top stack lines
        } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
          err.stack += '\n' + stack;
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const {
      transitional,
      paramsSerializer,
      headers
    } = config;
    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(headers.common, headers[config.method]);
    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
      delete headers[method];
    });
    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);

/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype = AxiosError.prototype;
const descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
  value: true
});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);

/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");




const $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);
      if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
        self[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);
        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];
          deleted = true;
        }
      }
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self = this;
    const headers = {};
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);
      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self[header];
      }
      self[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = Object.create(null);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach(target => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({
  value
}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");



class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformResponse, response);
    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformResponse, reason.response);
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");




const headersToObject = thing => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({
        caseless
      }, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Request failed with status code ' + response.status, [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  adapter: ['xhr', 'http'],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);
    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);
    if (isFormData) {
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    let isFileList;
    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }
      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;
        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';
    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], method => {
  defaults.headers[method] = {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);

/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.6.7";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  const _encode = encoder ? function (value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ? params.toString() : new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?
// Standard browser envs support document.cookie
{
  write(name, value, expires, path, domain, secure) {
    const cookie = [name + '=' + encodeURIComponent(value)];
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path) && cookie.push('path=' + path);
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain) && cookie.push('domain=' + domain);
    secure === true && cookie.push('secure');
    document.cookie = cookie.join('; ');
  },
  read(name) {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return match ? decodeURIComponent(match[3]) : null;
  },
  remove(name) {
    this.write(name, '', Date.now() - 86400000);
  }
} :
// Non-standard browser env (web workers, react-native) lack needed support.
{
  write() {},
  read() {
    return null;
  },
  remove() {}
});

/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === '__proto__') return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;
    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && payload.isAxiosError === true;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  const msie = /(msie|trident)/i.test(navigator.userAgent);
  const urlParsingNode = document.createElement('a');
  let originURL;

  /**
  * Parse a URL to discover its components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    let href = url;
    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    const parsed = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}());

/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
});

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}
const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value) || (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");





function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function (value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

/***/ }),

/***/ "./node_modules/axios/lib/platform/common/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/platform/common/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasBrowserEnv: () => (/* binding */ hasBrowserEnv),
/* harmony export */   hasStandardBrowserEnv: () => (/* binding */ hasStandardBrowserEnv),
/* harmony export */   hasStandardBrowserWebWorkerEnv: () => (/* binding */ hasStandardBrowserWebWorkerEnv)
/* harmony export */ });
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (product => {
  return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0;
})(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();


/***/ }),

/***/ "./node_modules/axios/lib/platform/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/platform/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils.js */ "./node_modules/axios/lib/platform/common/utils.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ..._common_utils_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._node_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {
  toString
} = Object.prototype;
const {
  getPrototypeOf
} = Object;
const kindOf = (cache => thing => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
const kindOfTest = type => {
  type = type.toLowerCase();
  return thing => kindOf(thing) === type;
};
const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {
  isArray
} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = thing => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = val => {
  if (kindOf(val) !== 'object') {
    return false;
  }
  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = val => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = thing => {
  let kind;
  return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
  // detect form-data instance
  kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {
  allOwnKeys = false
} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
})();
const isContextDefined = context => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */
) {
  const {
    caseless
  } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {
  allOwnKeys
} = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {
    allOwnKeys
  });
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = content => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = thing => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({
  hasOwnProperty
}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = obj => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = arr => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {};
const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {
    length
  } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}
const toJSONObject = obj => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest('AsyncFunction');
const isThenable = thing => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=index.bundle.js.map