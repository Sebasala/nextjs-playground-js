'use client'
import { useState } from 'react'

export default function CounterButton({ clicks, onClick }) {
    const [selfClicks, setSelfClicks] = useState(0);

    const increaseSelfCounter = () => {
        setSelfClicks(selfClicks => selfClicks + 1)
    }

    return (
        <button onClick={onClick ? onClick : increaseSelfCounter} >Clicked {clicks ? clicks : selfClicks} times</button>
    )
}