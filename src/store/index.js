import Vue from 'vue'
import Vuex from 'vuex'
import type from './mutation-type'
import car from './module/car'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1,
        str: 'hello'
    },
    mutations: {
        addCount(state) {
            state.count++
        },
        plus(state) {
            state.count--
        },
        [type.ON_SHOW_THIS] (state, param) {
            state.str = param
        }
    },
    actions: {
        plusCount({commit}) {
            commit()
        },
        showStr({commit, state}, param) {
            commit(type.ON_SHOW_THIS, param)
        }
    },
    modules: {
        car
    }

})

export default store