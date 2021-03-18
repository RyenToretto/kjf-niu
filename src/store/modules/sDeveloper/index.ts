import { Module } from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import { RootState } from '@/entities/store';
import { Developer } from '@/entities/store/sDeveloper';

const state: Developer = {
    name: 'kjf',
    age: 18
};

export default {
    state,
    actions,
    mutations,
    getters
} as Module<Developer, RootState>;
