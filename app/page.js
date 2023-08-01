import CounterButtonsGroup from '../components/CounterButtonsGroup'
import IndependentCounterButtons from '../components/IndependentCounterButtons'
import DependentCounterButtons from '../components/DependentCounterButtons'

export default function Home() {
  return (
    <main>
      <h1>Next JS Playground with JS</h1>
      <IndependentCounterButtons />
      <DependentCounterButtons />
    </main>
  )
}
