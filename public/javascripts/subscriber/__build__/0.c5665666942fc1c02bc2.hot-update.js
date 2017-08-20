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
            console.log("focus");
        },
        blur: function blur() {
            console.log("blur");
        },
        handleSearch: function handleSearch() {
            var _document$getElementB = document.getElementById("search-input"),
                value = _document$getElementB.value;

            this.display = true;
            if (value) this.$store.dispatch("getAllArticle", value);
        }
    })
};

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchGet = fetchGet;
exports.fetchJsonPost = fetchJsonPost;

var _isomorphicFetch = __webpack_require__(361);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'fetch-polyfill'
// import 'es6-promise'

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        Debugger.log("checkStatus success");
        return response;
    } else {
        Debugger.log("response.statusText = " + JSON.stringify(response.statusText));
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
} /**
   * Created by heben on 2017/4/26.
   */

function checkLogin(json) {
    //Debugger.log("checkLogin = "+JSON.stringify(json));
    if (json.redirectUrl) {
        Debugger.log("json.redirectUrl = " + json.redirectUrl);
        location.href = json.redirectUrl;
    } else {
        return json;
    }
}

function showMsg(msg) {
    Debugger.log("msg = " + msg);
}

function fetchGet(url, successFunc) {
    (0, _isomorphicFetch2.default)(url, { credentials: 'include' }).then(function (response) {
        return response.json();
    }).then(checkLogin).then(function (json) {
        if (json.errCode == 0) {
            successFunc(json);
        } else {
            showMsg(json.msg);
        }
    }).catch(function (e) {
        return console.log('error fetchGet = ' + e);
    });
}

function fetchJsonPost(url, data, successFunc) {
    Debugger.log("fetchJsonPost = " + JSON.stringify(data), { "fontSize": '20px', color: 'red' });
    (0, _isomorphicFetch2.default)(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        if (json.errCode == 0) {
            successFunc && successFunc(json);
        } else {
            showMsg(json.msg);
        }
    }).catch(function (e) {
        return console.log('error = ' + e);
    });
}

/***/ })

})