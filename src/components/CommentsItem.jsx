import CommentBody from "./CommentBody";

const CommentsItem = ({comments}) => {
    return (
        <section>
        <ol key={comments.comment_id} className="comment-list">
           {comments.map((comment)=>{
            return (<CommentBody author={comment.author}body={comment.body} created={comment.created_at} votes={comment.votes } id={comment.comment_id}/>)
           })}
        </ol>
        </section>
    
    );
}
 
export default CommentsItem;

