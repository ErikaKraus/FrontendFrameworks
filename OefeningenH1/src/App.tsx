import Exercise from './exercise/exercise.tsx'
import ExerciseOne from './01-exerciseOne/exerciseOne.tsx'

function App() {


    return (
        <>
            <Exercise title={'Exercise 1: Multiplication Table'}>
                <ExerciseOne/>
            </Exercise>
            <Exercise title={'Exercise 2: Rater'} background={'#77EEEE'}/>
            <Exercise title={'Exercise 3: Progressbar'}/>
            <Exercise title={'Exercise 4: Number grid'} background={'#77EEEE'}/>
            <Exercise title={'Exercise 5: Comment card'}/>
        </>
    )
}

export default App
