import { GetterTree } from 'vuex';

import {RootState} from '@/entities/store';
import {Developer} from '@/entities/store/sDeveloper';

export default {
    getDeveloperName(state: Developer, getters, rootState: RootState, rootGetters) {
        console.log('state = ', state);
        console.log('getters = ', getters);
        console.log('rootState = ', rootState);
        console.log('rootGetters = ', rootGetters);
        return state.name;
    }
} as GetterTree<Developer, RootState>;
