import { MutationTree } from 'vuex';

import { Developer, DeveloperMutation } from '@/entities/store/sDeveloper';

export default {
    [DeveloperMutation.setAge](state: Developer, { newAge }) {
        state.age = newAge;
    }
} as MutationTree<Developer>;
