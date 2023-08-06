import { useReducer } from 'react';

const actions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

const reducer = (state, action) => {
    const { INCREMENT, DECREMENT } = actions;
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default function useReducerCounter(initialValue = 0) {
    const [counter, dispatch] = useReducer(reducer, initialValue);

    const increaseCounter = () => dispatch({ type: actions.INCREMENT });
    const decreaseCounter = () => dispatch({ type: actions.DECREMENT });

    return { counter, increaseCounter, decreaseCounter}
}