import CommentBody from "./CommentBody";

const CommentsItem = ({comments}) => {

    // useEffect(() => {
    //    fetchComments(review_id)
    //       .then((data) => {
    //         setComments(data[1].data.review);
    //         setError(null);
    //       })
    //       .catch((err) => {
    //         setError("Something went wrong. Could not fetch comments.");
    //       });
    //   }, [review_id]);

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

