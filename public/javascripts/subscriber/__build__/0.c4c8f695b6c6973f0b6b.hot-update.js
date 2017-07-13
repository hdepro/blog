webpackHotUpdate(0,{

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllFilingArticle = exports.getAllTag = exports.getArticle = exports.getAllArticle = undefined;

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

    var url = types.GET_ALL_ARTICLE.route;
    console.log("tagww", search, tag);
    if (tag) url += "?tag=" + tag;
    if (search) url += "?search=" + search;
    console.log("url", url);
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

/***/ })

})