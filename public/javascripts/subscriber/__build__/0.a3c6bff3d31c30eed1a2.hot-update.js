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
  })], 1), _vm._v(" "), _c('ul', {
    staticClass: "comments"
  }, _vm._l((_vm.comments), function(comment) {
    return _c('li', [_c('h5', [_vm._v(_vm._s(comment.nickname))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(10).rerender("data-v-1ace19ff", module.exports)
  }
}

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(22);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(50);

var _vuex2 = _interopRequireDefault(_vuex);

var _actions = __webpack_require__(358);

var actions = _interopRequireWildcard(_actions);

var _getters = __webpack_require__(364);

var getters = _interopRequireWildcard(_getters);

var _mutations = __webpack_require__(365);

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default); /**
                                    * Created by heben on 2017/5/7.
                                    */


var state = {
    articles: [],
    currentArticle: {},
    tags: [],
    articleFiling: [{ date: String, data: [] }],
    comments: []
};

exports.default = new _vuex2.default.Store({
    state: state,
    getters: getters,
    actions: actions,
    mutations: _mutations2.default
});

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

    api.getArticleComment(types.GET_ARTICLE_COMMENT.route + "?blogId=" + blogId, function (data) {
        commit(types.GET_ARTICLE_COMMENT.action, { data: data });
    });
};

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types$GET_ALL_ARTICL;

var _vue = __webpack_require__(22);

var _vue2 = _interopRequireDefault(_vue);

var _mutationTypes = __webpack_require__(129);

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by heben on 2017/5/7.
                                                                                                                                                                                                                   */

var handleDate = function handleDate(timestamp) {
    return new Date(timestamp).getFullYear() + "年" + (new Date(timestamp).getUTCMonth() + 1) + "月";
};

exports.default = (_types$GET_ALL_ARTICL = {}, _defineProperty(_types$GET_ALL_ARTICL, types.GET_ALL_ARTICLE.action, function (state, _ref) {
    var data = _ref.data;

    state.articles = data;
    /*data.forEach((art,index) => {
        Vue.set(state.articles,index,art);
    });*/
}), _defineProperty(_types$GET_ALL_ARTICL, types.GET_ALL_TAG.action, function (state, _ref2) {
    var data = _ref2.data;

    state.tags = data;
}), _defineProperty(_types$GET_ALL_ARTICL, types.GET_ARTICLE.action, function (state, _ref3) {
    var data = _ref3.data;

    state.currentArticle = data;
}), _defineProperty(_types$GET_ALL_ARTICL, types.GET_ALL_FILING_ARTICLE.action, function (state, _ref4) {
    var data = _ref4.data;

    var n = data.length;
    if (!n) return;
    var date = handleDate(data[0].createTime),
        count = 0,
        res = [{ date: date, data: [data[0]] }];
    for (var i = 1; i < n; i++) {
        if (handleDate(data[i].createTime) === date) {
            res[count].data.push(data[i]);
            continue;
        }
        date = handleDate(data[i].createTime);
        res[++count].push({ date: date, data: [data[i]] });
    }
    state.articles = res;
    console.log("res", res);
}), _defineProperty(_types$GET_ALL_ARTICL, types.GET_ARTICLE_COMMENT.action, function (state, _ref5) {
    var data = _ref5.data;

    state.comments = data;
}), _types$GET_ALL_ARTICL);

/***/ })

})