import {FunctionComponent, ReactNode} from 'react';
import Star from './star.tsx';
import Label from './label.tsx';

interface RaterProps {
    rating: number
    max: number

}

const Rater: FunctionComponent<RaterProps> = ({max, rating}) => {

    const output: ReactNode[] = []
    for (let i=1; i <= max; i++) {
        output.push(<Star full={i <= rating}/>)
    }
    return (
        <div className='rater'>
            <Label score={rating/max}/>
            {output}
        </div>
    );
};

export default Rater;
