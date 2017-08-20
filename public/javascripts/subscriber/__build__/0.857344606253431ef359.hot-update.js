webpackHotUpdate(0,{

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(50);

var _ArticleItem = __webpack_require__(335);

var _ArticleItem2 = _interopRequireDefault(_ArticleItem);

var _Util = __webpack_require__(339);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'home',
    created: function created() {
        var tag = _Util.Util.parseUrl(location.search).get("tag");
        console.log("tagwwttt", tag);
        this.$store.dispatch('getAllArticle', null, "aa");
    },

    computed: (0, _vuex.mapGetters)({
        articles: 'getAllArticle'
    }),
    methods: (0, _vuex.mapActions)(['getAllArticle']),
    components: {
        ArtItem: _ArticleItem2.default
    }
}; //
//
//
//
//
//

/***/ })

})