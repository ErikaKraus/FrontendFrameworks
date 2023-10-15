import {FunctionComponent} from 'react';
import Rater from './rater.tsx';

interface ExerciseTwoProps {

}

const ExerciseTwo: FunctionComponent<ExerciseTwoProps> = () => {
    return (
        <div className='exercise'>
            <Rater max={9} rating={8}/>
            <Rater max={5} rating={3}/>
            <Rater max={3} rating={10}/>
        </div>
    );
};

export default ExerciseTwo;
