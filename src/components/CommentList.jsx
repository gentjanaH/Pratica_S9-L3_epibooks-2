import ListGroup from 'react-bootstrap/ListGroup';
import SingleComment from "./SingleComment";



const CommentList = function (props) {
    return (
        <ListGroup>
            {props.comments.map((comment) => (
                <SingleComment key={comment._id} comment={comment} />
            ))}
        </ListGroup>
    )
}


export default CommentList