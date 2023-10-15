import {FunctionComponent} from 'react';
import './exerciseFour.css'
import NumberGrid from './NumberGrid.tsx';

interface ExerciseFourProps {
    n: number

}

const ExerciseFour: FunctionComponent<ExerciseFourProps> = ({n}) => {
    return (
        <>
        <NumberGrid n={2}/>
        <NumberGrid n={3}/>
        <NumberGrid n={5}/>
        </>
    );
};

export default ExerciseFour;
