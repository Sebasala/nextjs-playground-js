import DependentCounterButtons from '../components/DependentCounterButtons'
import IndependentCounterButtons from '../components/IndependentCounterButtons'
import TextField from '../components/TextField'

export default function Home() {
  return (
    <main>
      <h1>Next JS Playground with JS</h1>
      <IndependentCounterButtons />
      <DependentCounterButtons />
      <TextField />
    </main>
  )
}
