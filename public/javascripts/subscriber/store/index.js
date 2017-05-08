/**
 * Created by heben on 2017/5/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
    articles:[

    ],
    currentArticle:{

    },
    tags:[

    ],
    articleFiling:[
        {date:String,data:[]}
    ]
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})