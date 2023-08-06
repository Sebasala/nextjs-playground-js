import Button from "@/components/stateless/Button"

export default function AgeCounter({ age, incrementAge, decrementAge }) {
    return (
        <section>
            <h2>Age Counter: useReducer example</h2>
            <Button onClick={decrementAge} label='- Age' />
            <Button onClick={incrementAge} label='+ Age' />
            <p>Hello you are {age}</p>
        </section>
    )
}