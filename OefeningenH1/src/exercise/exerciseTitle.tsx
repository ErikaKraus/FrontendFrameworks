import {FunctionComponent} from 'react'

interface ExerciseTitleProps {
title: string
}

const ExerciseTitle: FunctionComponent<ExerciseTitleProps> = ({title}) => {
    return (
        <>
            {title}
        </>
    )
}

export default ExerciseTitle
