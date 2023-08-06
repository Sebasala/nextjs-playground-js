import CounterButton from '../../stateful/CounterButton'

export default function IndependentCounterButtons() {
    return (
        <section>
            <h2>Independent Counter Buttons</h2>
            <div>
                <CounterButton />
            </div>
            <div>
                <CounterButton />
            </div>
        </section>
    )
}