webpackHotUpdate(0,{

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "article"
    }
  }, [_c('h2', [_vm._v(_vm._s(_vm.article.title))]), _vm._v(" "), _c('div', {
    staticClass: "content",
    domProps: {
      "innerHTML": _vm._s(_vm.article.contentHtml)
    }
  }), _vm._v(" "), (_vm.article.next) ? _c('div', {
    staticClass: "footer"
  }, [_c('router-link', {
    attrs: {
      "to": _vm.article.next ? _vm.article.next._id : ''
    }
  }, [_vm._v("\n        " + _vm._s(_vm.article.next ? _vm.article.next.title : "") + "      >>\n        ")])], 1) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(10).rerender("data-v-1ace19ff", module.exports)
  }
}

/***/ })

})