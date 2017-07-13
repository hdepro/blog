webpackHotUpdate(0,{

/***/ 355:
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

var _vuex = __webpack_require__(50);

exports.default = {
    data: function data() {
        return {
            display: false
        };
    },

    computed: (0, _vuex.mapGetters)({
        articles: 'getAllArticle'
    }),
    methods: _extends({}, (0, _vuex.mapActions)(['getAllArticle']), {
        focus: function focus() {
            var _this = this;

            console.log("focus");
            this.handleKeyup = function (e) {
                //console.log(e,e.keyCode);
                if (e.keyCode === 13) _this.handleSearch();
            };
            document.addEventListener("keyup", this.handleKeyup);
        },
        blur: function blur() {
            console.log("blur");
            document.removeEventListener("keyup", this.handleKeyup);
        },
        handleSearch: function handleSearch() {
            var _document$getElementB = document.getElementById("search-input"),
                value = _document$getElementB.value;

            if (value) {
                this.display = true;
                this.$store.dispatch("getAllArticle", value);
            }
        }
    })
};

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "search"
    }
  }, [_c('form', {
    attrs: {
      "onsubmit": "return false"
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "id": "search-input"
    },
    on: {
      "focus": _vm.focus,
      "blur": _vm.blur
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.handleSearch
    }
  }, [_vm._v("搜索")])]), _vm._v(" "), (_vm.display) ? _c('div', {
    staticClass: "search-result"
  }, [_c('h3', [_vm._v("本次共搜到"), _c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.articles.length))]), _vm._v("篇博客")]), _vm._v(" "), _c('div', {
    staticClass: "articles"
  }, _vm._l((_vm.articles), function(article) {
    return _c('router-link', {
      attrs: {
        "to": {
          path: '/article/' + article._id
        }
      }
    }, [_c('h4', {
      staticClass: "title"
    }, [_vm._v(_vm._s(article.title))])])
  }))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(10).rerender("data-v-7745e6a2", module.exports)
  }
}

/***/ })

})