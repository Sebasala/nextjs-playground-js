import { useState } from 'react'

export default function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue);

    const increaseCounter = () => {
        setCounter(currentCounter => currentCounter + 1)
    }

    const decreaseCounter = () => {
        setCounter(currentCounter => currentCounter - 1)
    }

    return { counter, increaseCounter, decreaseCounter }
}