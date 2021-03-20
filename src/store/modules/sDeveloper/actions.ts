import { ActionContext, ActionTree } from 'vuex';

import { RootState } from '@/entities/store';
import { Developer, DeveloperMutation } from '@/entities/store/sDeveloper';

export default {
    async sSetDeveloperAge(actionContext: ActionContext<Developer, RootState>, { newAge }) {
        actionContext.commit(DeveloperMutation.setAge, { newAge })
    }
} as ActionTree<Developer, RootState>
