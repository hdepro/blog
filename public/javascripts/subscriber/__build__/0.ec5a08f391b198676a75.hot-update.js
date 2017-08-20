webpackHotUpdate(0,{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by heben on 2017/5/7.
 */

var GET_ALL_ARTICLE = exports.GET_ALL_ARTICLE = { action: 'GET_ALL_ARTICLE', route: '/blog/getAll' };
var GET_ARTICLE = exports.GET_ARTICLE = { action: 'GET_ARTICLE', route: '/blog/getById' };
var GET_ALL_TAG = exports.GET_ALL_TAG = { action: 'GET_ALL_TAG', route: '/tag/getAll' };
var GET_ALL_FILING_ARTICLE = exports.GET_ALL_FILING_ARTICLE = { action: 'GET_ALL_FILING_ARTICLE', route: '/blog/getAll' };
var GET_ARTICLE_COMMENT = exports.GET_ARTICLE_COMMENT = { action: 'GET_ARTICLE_COMMENT', route: '/comment/getByBlogId' };

/***/ }),

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

var _vuex = __webpack_require__(50);

exports.default = {
    props: ['_id'],
    created: function created() {
        this.$store.dispatch('getArticle', this._id);
        this.$store.dispatch('getArticle', this._id);
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
        article: 'getArticle'
    }),
    methods: _extends({}, (0, _vuex.mapActions)(['getArticle']), {
        comment: function comment(event) {
            event.preventDefault();
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
  })], 1), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "comments"
  }, [_c('li', [_c('h5')])])
}]}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(10).rerender("data-v-1ace19ff", module.exports)
  }
}

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getArticleComment = exports.getAllFilingArticle = exports.getAllTag = exports.getArticle = exports.getAllArticle = undefined;

var _mutationTypes = __webpack_require__(129);

var types = _interopRequireWildcard(_mutationTypes);

var _index = __webpack_require__(359);

var api = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by heben on 2017/5/7.
 */
var getAllArticle = exports.getAllArticle = function getAllArticle(_ref, _ref2) {
    var commit = _ref.commit;
    var search = _ref2.search,
        tag = _ref2.tag;
    //只能接受两个参数，第三个参数会被忽略
    var url = types.GET_ALL_ARTICLE.route;
    if (tag) url += "?tag=" + tag;
    if (search) url += "?search=" + search;
    api.getAllArticle(url, function (data) {
        commit(types.GET_ALL_ARTICLE.action, { data: data });
    });
};

var getArticle = exports.getArticle = function getArticle(_ref3, id) {
    var commit = _ref3.commit;
    return api.getArticle(types.GET_ARTICLE.route, id, function (data) {
        commit(types.GET_ARTICLE.action, { data: data });
    });
};

var getAllTag = exports.getAllTag = function getAllTag(_ref4) {
    var commit = _ref4.commit;
    return api.getAllTag(types.GET_ALL_TAG.route, function (data) {
        commit(types.GET_ALL_TAG.action, { data: data });
    });
};

var getAllFilingArticle = exports.getAllFilingArticle = function getAllFilingArticle(_ref5) {
    var commit = _ref5.commit,
        state = _ref5.state;

    console.log("getAllFilingArticle", state);
    api.getAllArticle(types.GET_ALL_ARTICLE.route, function (data) {
        commit(types.GET_ALL_FILING_ARTICLE.action, { data: data });
    });
};

var getArticleComment = exports.getArticleComment = function getArticleComment(_ref6, blogId) {
    var commit = _ref6.commit,
        state = _ref6.state;

    api.getArticleComment(types.GET_ALL_ARTICLE.route + "?blogId=" + blogId, function (data) {
        commit(types.GET_ALL_FILING_ARTICLE.action, { data: data });
    });
};

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getArticleComment = exports.getAllTag = exports.getArticle = exports.getAllArticle = undefined;

var _Fetch = __webpack_require__(360);

var _Logger = __webpack_require__(363);

/**
 * Created by heben on 2017/5/7.
 */

var getAllArticle = exports.getAllArticle = function getAllArticle(url, cb) {
    (0, _Fetch.fetchGet)(url, function (json) {
        return cb(json.data);
    });
};

var getArticle = exports.getArticle = function getArticle(url, _id, cb) {
    (0, _Fetch.fetchGet)(url + "/" + _id, function (json) {
        return cb(json.data);
    });
};

var getAllTag = exports.getAllTag = function getAllTag(url, cb) {
    (0, _Fetch.fetchGet)(url, function (json) {
        return cb(json.data);
    });
};

var getArticleComment = exports.getArticleComment = function getArticleComment(url, cb) {
    (0, _Fetch.fetchGet)(url, function (json) {
        return cb(json.data);
    });
};

window.Debugger = _Logger.Debugger;

/***/ })

})