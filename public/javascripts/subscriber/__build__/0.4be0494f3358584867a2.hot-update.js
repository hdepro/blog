webpackHotUpdate(0,{

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(364)
}
var Component = __webpack_require__(35)(
  /* script */
  __webpack_require__(338),
  /* template */
  __webpack_require__(339),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\project\\blog\\public\\javascripts\\subscriber\\page\\Article.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Article.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(10)
  hotAPI.install(__webpack_require__(22), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ace19ff", Component.options)
  } else {
    hotAPI.reload("data-v-1ace19ff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 361:
false,

/***/ 362:
false,

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(undefined);
// imports


// module
exports.push([module.i, "\n#article {\n  padding: 30px;\n}\n#article > h2 {\n  line-height: 40px;\n  text-align: center;\n  font-weight: 500;\n}\n#article > .content {\n  line-height: 2.4em;\n  font-size: 16px;\n  background-color: #f9f9f9;\n}\n#article > .footer {\n  margin-top: 20px;\n  padding: 15px 0;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\nlabel.required {\n  color: red;\n}\ninput {\n  padding: 10px 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(363);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("a24b08f0", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(363, function() {
     var newContent = __webpack_require__(363);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

})