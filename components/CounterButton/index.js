'use client'
import { useState } from 'react'
import styles from './counterButton.module.css'

export default function CounterButton({ clicks, onClick }) {
    const [selfClicks, setSelfClicks] = useState(0);

    const increaseSelfCounter = () => {
        setSelfClicks(prevClicks => prevClicks + 1)
    }

    return (
        <button className={styles.button} onClick={onClick ? onClick : increaseSelfCounter} >Clicked {clicks ? clicks : selfClicks} times</button>
    )
}