import Button from "@/components/Button"

export default function AgeCounter({ age, incrementAge, decrementAge }) {
    return (
        <section>
            <h2>Age Counter: useReducer example</h2>
            <Button onClick={incrementAge} label='Increment Age' />
            <Button onClick={decrementAge} label='Decrement Age' />
            <p>Hello you are {age}</p>
        </section>
    )
}