'use client'
import useCounter from '@/hooks/useCounter';
import SyncedCounterButtons from '@/components/stateless/SyncedCounterButtons'

export default function SyncedCounterButtonsProvider() {
    const { counter, increaseCounter } = useCounter();

    return (
        <SyncedCounterButtons clicks={counter} onClick={increaseCounter} />
    )
}