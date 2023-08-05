'use client'
import {useState} from 'react'
import Button from '@/components/Button'

export default function TextField() {
    const [text, setText] = useState('hello')

    const updateText = (event) => {
        setText(event.target.value)
    }

    const resetText = () => {
        setText('hello')
    }

    return (
        <section>
            <h2>Text field example</h2>
            <input value={text} onChange={updateText} type="text" />
            <p>You typed: {text}</p>
            <Button onClick={resetText} label='Reset' />
        </section>
    )
}