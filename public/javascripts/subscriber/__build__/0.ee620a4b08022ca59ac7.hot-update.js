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
  }, [_vm._v("\n        " + _vm._s(_vm.article.next ? _vm.article.next.title : "") + "      >>\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment"
  }, [_c('form', [_c('label', {
    staticClass: "required"
  }, [_vm._v("昵称*")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text"
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    staticClass: "required"
  }, [_vm._v("联系方式*")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text"
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    staticClass: "required"
  }, [_vm._v("评论")]), _vm._v(" "), _c('textarea', {
    attrs: {
      "type": "text"
    }
  }), _c('br'), _vm._v(" "), _c('label', [_vm._v("备注")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text"
    }
  })])])
}]}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(10).rerender("data-v-1ace19ff", module.exports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(undefined);
// imports


// module
exports.push([module.i, "\n#article[data-v-1ace19ff]{\n    padding:30px;\n}\n#article>h2[data-v-1ace19ff]{\n    line-height:40px;\n    text-align:center;\n    font-weight:500;\n}\n#article>.content[data-v-1ace19ff]{\n    line-height:2.4em;\n    font-size:16px;\n    background-color:#f9f9f9;\n}\n.footer[data-v-1ace19ff]{\n    margin-top:20px;\n    padding:15px 0;\n    border-top :1px solid #ddd;\n    border-bottom :1px solid #ddd;\n}\n.comment[data-v-1ace19ff]{\nlabel.required{\n}\ninput{\n}\n}\n", ""]);

// exports


/***/ })

})