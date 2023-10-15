import Exercise from './exercise/exercise.tsx';
import ExerciseOne from './01-exerciseOne/ExerciseOne.tsx';
import ExerciseTwo from './02-exerciseTwo/exerciseTwo.tsx';
import ExerciseThree from './03-exerciseThree/exerciseThree.tsx';
import ExerciseFour from './04-exerciseFour/exerciseFour.tsx';
import ExerciseFive from './05-exerciseFive/exerciseFive.tsx';

function App() {

  return (
    <>
      <Exercise title={'Exercise 1: Multiplication Table'}>
          <ExerciseOne/>
      </Exercise>

      <Exercise title={'Exercise 2: Rater'} background={'#77EEEE'}>
          <ExerciseTwo/>
      </Exercise>
        <Exercise title={'Exercise 3: Progressbar'}>
            <ExerciseThree/>
        </Exercise>
        <Exercise title={'Exercise 4: Number grid'} background={'#77EEEE'}>
            <ExerciseFour/>
        </Exercise>
      <Exercise title={'Exercise 5: Comment Card'}>
          <ExerciseFive/>
      </Exercise>

    </>
  )
}

export default App
