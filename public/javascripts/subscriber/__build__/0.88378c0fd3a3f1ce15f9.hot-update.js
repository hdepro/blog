webpackHotUpdate(0,{

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
}), _types$GET_ALL_ARTICL);

/***/ })

})