const ReviewItem = ({key, owner, image, category, comment_count, created, designer, title, votes}) => {
    return ( 
        <li className="review-list__item">
            <article>
            <img src={image} alt="image of game"/>
            <div className="review-list__item__details">
            <h3>User: {owner}</h3>
            <h4>{title}</h4>
            <p>Created at: {created}</p>
            <p>Category: {category}</p>
            <p>Designer: {designer}</p>
            <p>Votes: {votes}</p>
            <p>Comment count: {comment_count}</p>
            </div>
            
            
            </article>
        </li>
     );
}
 
export default ReviewItem;