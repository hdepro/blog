webpackHotUpdate(0,{

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(53);

exports.default = {
    props: ['_id'],
    created: function created() {
        this.$store.dispatch('getArticle', this._id);
        this.prev_id = this._id;
    },
    beforeUpdate: function beforeUpdate() {
        if (this._id !== this.prev_id) {
            this.$store.dispatch('getArticle', this._id);
            this.prev_id = this._id;
        }
    },

    computed: (0, _vuex.mapGetters)({
        article: 'getArticle'
    }),
    methods: (0, _vuex.mapActions)(['getArticle']),
    components: {}
}; //
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

/***/ })

})