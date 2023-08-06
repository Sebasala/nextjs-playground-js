'use client'
import { useReducer } from 'react';
import AgeCounter from '../../stateless/AgeCounter'

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

export default function ReducerCounterContainer() {
    const [age, dispatch] = useReducer(reducer, 0);

    const incrementAge = () => dispatch({ type: actions.INCREMENT });
    const decrementAge = () => dispatch({ type: actions.DECREMENT });

    return (
        <AgeCounter age={age} incrementAge={incrementAge} decrementAge={decrementAge} />
    )
}