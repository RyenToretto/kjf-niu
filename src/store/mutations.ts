import { MutationTree } from 'vuex';

import {CounterMutation, RootState} from '@/entities/store';

export default {
    [CounterMutation.addCount](state: RootState) {
        state.count++;
    },
    [CounterMutation.subCount](state: RootState) {
        state.count--;
    },
    [CounterMutation.setCount](state: RootState, { newCount }) {
        state.count = newCount;
    }
} as MutationTree<RootState>;
