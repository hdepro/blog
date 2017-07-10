webpackHotUpdate(0,{

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(53);

exports.default = {
    props: ['_id'],
    created: function created() {
        this.$store.dispatch('getArticle', this._id);
        this.prev_id = this._id;
    },
    beforeUpdate: function beforeUpdate() {
        if (this._id !== this.prev_id) {
            this.$store.dispatch('getArticle', this._id);
            this.prev_id = this._id;
        }
    },

    computed: (0, _vuex.mapGetters)({
        article: 'getArticle'
    }),
    methods: (0, _vuex.mapActions)(['getArticle']),
    components: {}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

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
  }, [_vm._v("评论*")]), _vm._v(" "), _c('textarea', {
    attrs: {
      "rows": "6",
      "type": "text"
    }
  }), _c('br'), _vm._v(" "), _c('label', [_vm._v("备注")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text"
    }
  }), _c('br'), _vm._v(" "), _c('button', [_vm._v("发表评论")])])])
}]}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(10).rerender("data-v-1ace19ff", module.exports)
  }
}

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(undefined);
// imports


// module
exports.push([module.i, "\n#article {\n  padding: 30px;\n}\n#article > h2 {\n  line-height: 40px;\n  text-align: center;\n  font-weight: 500;\n}\n#article > .content {\n  line-height: 2.4em;\n  font-size: 16px;\n  background-color: #f9f9f9;\n}\n#article > .footer {\n  margin: 20px 0;\n  padding: 15px 0;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\nlabel {\n  display: inline-block;\n  width: 100px;\n}\nlabel.required {\n  color: red;\n}\ninput, textarea {\n  width: 300px;\n  margin-top: 20px;\n  padding: 6px 8px;\n  border: 1px solid #ddd;\n}\nbutton {\n  padding: 10px 15px;\n}\n", ""]);

// exports


/***/ })

})