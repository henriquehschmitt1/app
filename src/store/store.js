/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        apiData:{
            apiName: '',
            apiDoc: '',
            apiPath:'',
            apiMethod:'',
        },
    }
})