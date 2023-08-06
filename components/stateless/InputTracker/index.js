import Button from '@/components/stateless/Button'

export default function InputTracker({text, updateText, resetText}) {
    return (
        <>
            <input value={text} onChange={updateText} type="text" />
            <p>You typed: {text}</p>
            <Button onClick={resetText} label='Reset' />
        </>
    )
}