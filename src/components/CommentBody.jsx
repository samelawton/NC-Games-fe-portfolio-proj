const CommentBody = ({author, body, created, votes, id}) => {
    return ( 
        <li key={id} className="comment-list__item">
        <article>
        <div className="comment-list__item__details">
        <h4>Author: {author}</h4>
        <p>{body}</p>
        <p>Created at: {created}</p>
        <p>Votes: {votes}</p>
        </div>
        </article>
    </li>
    
        );
}
 
export default CommentBody;