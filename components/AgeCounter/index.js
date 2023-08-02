export default function AgeCounter({ age, incrementAge, decrementAge }) {
    return (
        <section>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={decrementAge}>Increment Age</button>
            <p>Hello you are {age}</p>
        </section>
    )
}