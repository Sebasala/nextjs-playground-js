import CheckboxCombo from '@/components/CheckboxCombo'
import DependentCounterButtons from '@/components/DependentCounterButtons'
import IndependentCounterButtons from '@/components/IndependentCounterButtons'
import ReducerCounterContainer from '@/components/ReducerCounterContainer'
import TextField from '@/components/TextField'

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