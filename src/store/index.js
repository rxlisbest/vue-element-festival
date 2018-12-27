import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let state = {
	bless: {
	},
	image: ''
}
let getter = {
	getBless: state => {
		return state.bless
	}
}
let actions = {

}
let mutations = {}
const store = new Vuex.Store({
	state: state,
	getter: getter,
	actions: actions,
	mutations: mutations,
});
 
export default store;