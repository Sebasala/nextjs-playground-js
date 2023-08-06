'use client'
import { useState } from 'react'
import CounterButton from '../CounterButton'

export default function CounterButtonsGroup() {
    const [clicks, setClicks] = useState(0)

    const increaseCounter = () => {
        setClicks(prevClicks => prevClicks + 1)
    }

    return (
        <>
            <div><CounterButton clicks={clicks} onClick={increaseCounter} /></div>
            <div><CounterButton clicks={clicks} onClick={increaseCounter} /></div>
        </>
    )
}