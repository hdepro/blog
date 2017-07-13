webpackHotUpdate(0,{

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by heben.hb on 2017/7/12.
 */

//export const Util = {};
var Util = {};

Util.parseUrl = function (url) {
    var index = url.indexOf("?");
    var paramArray = url.slice(index + 1).split("&");
    var reg = /^([\S]+)=([\S]+)/;
    var paramObj = new Map();
    paramArray.map(function (param) {
        var match = param.match(reg);
        paramObj.set(match[1], match[2]);
    });
    console.log("parseUrl paramObj:", paramObj);
    return paramObj;
};

Util.parseUrl("/ssl/sk?$%ass=1&bbb22=2");
Util.parseUrl("");

/***/ })

})