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
                this.$store.dispatch("getAllArticle", { search: value });
            }
        }
    })
};

/***/ })

})