import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import sDeveloper from './modules/sDeveloper';

import { RootState } from '@/entities/store';

Vue.use(Vuex);

const state: RootState = {
    count: 1
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        sDeveloper
    }
});
