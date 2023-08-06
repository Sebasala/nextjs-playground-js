import CheckboxCombo from '@/components/stateful/CheckboxCombo'
import DependentCounterButtons from '@/components/stateless/DependentCounterButtons'
import IndependentCounterButtons from '@/components/stateless/IndependentCounterButtons'
import ReducerCounterContainer from '@/components/stateful/ReducerCounterContainer'
import TextField from '@/components/stateful/TextField'

export const metadata = {
    title: 'React Hooks Examples',
    description: 'Examples using React Hooks in different ways',
  }

const HooksExamples = () => {
    return (
        <main>
            <h1>React Hooks Examples</h1>
            <IndependentCounterButtons />
            <DependentCounterButtons />
            <TextField />
            <CheckboxCombo />
            <ReducerCounterContainer />
        </main>
    )
}
export default HooksExamples