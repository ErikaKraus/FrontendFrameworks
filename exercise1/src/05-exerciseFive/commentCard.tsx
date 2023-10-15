import {FunctionComponent} from 'react';
import Avatar from './Avatar.tsx';
import CommentSection from './commentSection.tsx';
import {IComment} from '../models/IComment.ts';




const CommentCard: FunctionComponent<IComment> = ({avatar, ...rest}) => {
    /*avatar gaat daar in en de rest gaat in de comment section*/
    return (
        <div className='card'>
            <Avatar avatarUrl={avatar}/>
            <CommentSection {...rest}/>
        </div>
    );
};

export default CommentCard;
