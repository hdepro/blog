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
            var blogId = document.querySelector("[name=blogId]").value;
            var contact = document.querySelector("[name=contact]").value;
            var nickname = document.querySelector("[name=nickname]").value;
            var content = document.querySelector("[name=content]").value;
            //event.preventDefault();
            console.log("methods comment");
        }
    }),
    components: {}
};

/***/ })

})