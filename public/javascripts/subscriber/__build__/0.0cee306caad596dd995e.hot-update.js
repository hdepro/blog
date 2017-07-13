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
    computed: _extends({}, (0, _vuex.mapGetters)({
        articles: 'getAllArticle'
    }), {
        display: false
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

            console.log("Search Vue:", this, this.display);
            if (value) this.$store.dispatch("getAllArticle", value);
        }
    })
};

/***/ })

})