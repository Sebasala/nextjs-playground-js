import CounterButtonProvider from '../../stateful/CounterButtonProvider'

export default function IndependentCounterButtons() {
    return (
        <div>
            <div>
                <CounterButtonProvider />
            </div>
            <div>
                <CounterButtonProvider />
            </div>
        </div>
    )
}