export interface RootState {
    count: number;
}

export enum CounterMutation {
    addCount = 'addCount',
    subCount = 'subCount',
    setCount = 'setCount'
}
