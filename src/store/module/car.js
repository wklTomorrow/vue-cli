import type from '../mutation-type'

let obj = {
    state: {
        sObj: 'hello world'
    },
    actions: {
        updateStr({commit, state}, param) {
            commit('showThisStr', param)
        }
    },
    mutations: {
        showThisStr(state, obj) {
            state.sObj = obj
        }
    }
}
export default obj