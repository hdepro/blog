webpackHotUpdate(0,{

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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

var _vuex = __webpack_require__(50);

exports.default = {
    props: ['_id'],
    created: function created() {
        this.$store.dispatch('getArticle', this._id);
        this.$store.dispatch('getArticleComment', this._id);
        this.prev_id = this._id;
    },
    beforeUpdate: function beforeUpdate() {
        if (this._id !== this.prev_id) {
            this.$store.dispatch('getArticle', this._id);
            this.prev_id = this._id;
        }
    },
    comment: function comment() {
        console.log("comment");
    },

    computed: (0, _vuex.mapGetters)({
        article: 'getArticle',
        comments: 'getArticleComment'
    }),
    methods: _extends({}, (0, _vuex.mapActions)(['getArticle']), {
        comment: function comment(event) {
            var blogId = document.querySelector("[name=blogId]").value;
            var contact = document.querySelector("[name=contact]").value;
            var nickname = document.querySelector("[name=nickname]").value;
            var content = document.querySelector("[name=content]").value;
            //event.preventDefault();
            console.log("methods comment");
        }
    }),
    components: {}
};

/***/ }),

/***/ 344:
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
  }, [_vm._v("\n        " + _vm._s(_vm.article.next ? _vm.article.next.title : "") + "      >>\n        ")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "create-comment"
  }, [_c('form', {
    attrs: {
      "target": "hide",
      "method": "post",
      "action": "/comment/create",
      "onsubmit": ""
    }
  }, [_c('input', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "name": "blogId"
    },
    domProps: {
      "value": _vm.article._id
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "required"
  }, [_vm._v("昵称*")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "name": "nickname"
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    staticClass: "required"
  }, [_vm._v("联系方式*")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "name": "contact"
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    staticClass: "required"
  }, [_vm._v("评论*")]), _vm._v(" "), _c('textarea', {
    attrs: {
      "rows": "6",
      "type": "text",
      "name": "content"
    }
  }), _c('br'), _vm._v(" "), _c('label', [_vm._v("备注")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "name": "remark"
    }
  }), _c('br'), _c('br'), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.comment
    }
  }, [_vm._v("发表评论")])]), _vm._v(" "), _c('iframe', {
    attrs: {
      "name": "hide"
    }
  })], 1), _vm._v(" "), _c('ul', {
    staticClass: "comments"
  }, _vm._l((_vm.comments), function(comment) {
    return _c('li', {
      staticClass: "comment-item"
    }, [_c('h5', [_vm._v(_vm._s(comment.nickname))]), _vm._v(" "), _c('p', [_vm._v("\n                " + _vm._s(comment.content) + "\n            ")])])
  }))])
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