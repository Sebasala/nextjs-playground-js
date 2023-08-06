'use client'
import useCounter from '@/hooks/useCounter';
import CounterButton from '@/components/stateless/CounterButton'

export default function CounterButtonProvider() {
    const { counter, increaseCounter } = useCounter();

    return (
        <CounterButton clicks={counter} onClick={increaseCounter} />
    )
}