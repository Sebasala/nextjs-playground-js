'use client'
import { useState } from 'react'

export default function CheckboxCombo() {
    const [liked, setLiked] = useState(false)

    const likedText = liked ? 'liked' : "didn't like"

    const toggleLike = (e) => {
        setLiked(e.target.checked)
    }

    return (
        <section>
            <h2>Checkbox example</h2>
            <p><input type="checkbox" checked={liked} onChange={toggleLike} />I liked this</p>
            <p>You {likedText} this.</p>
        </section>
    )
}