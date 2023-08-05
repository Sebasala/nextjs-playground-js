export default function AgeCounter({ age, incrementAge, decrementAge }) {
    return (
        <section>
            <h2>Age Counter: useReducer example</h2>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={decrementAge}>Decrement Age</button>
            <p>Hello you are {age}</p>
        </section>
    )
}