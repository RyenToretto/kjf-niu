import { ActionContext, ActionTree } from 'vuex';

import { CounterMutation, RootState } from '@/entities/store';

export default {
    async sAddCount(actionContext: ActionContext<RootState, RootState>) {
        actionContext.commit(CounterMutation.addCount);
    },
    async sSubCount(actionContext: ActionContext<RootState, RootState>) {
        actionContext.commit(CounterMutation.subCount);
    },
    async sSetCount(actionContext: ActionContext<RootState, RootState>, {newCount}) {
        actionContext.commit(CounterMutation.setCount, {newCount});
    }
} as ActionTree<RootState, RootState>;
