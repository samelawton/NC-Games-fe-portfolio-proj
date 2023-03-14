import { fetchReviewID } from "../utils/api";

const ReviewItem = ({review_id, owner, image, category, comment_count, created, designer, title, votes, setSingleReview}) => {

    const openReviewButton = (event) =>{
        fetchReviewID(event.target.value)
        .then((data)=>{
            setSingleReview(data.data.review)
        })
    }
    
    
    return ( 
        <li className="review-list__item">
            <article>
            <img src={image} alt="game"/>
            <div className="review-list__item__details">
            <h3>{title}</h3>
            <h4>User: {owner}</h4>
            <p>Created at: {created}</p>
            <p>Category: {category}</p>
            <p>Designer: {designer}</p>
            <p>Votes: {votes}</p>
            <p>Comment count: {comment_count}</p>
            <button onClick={openReviewButton} value={review_id}>Open Review</button>
            </div>
            </article>
        </li>
     );
}
 
export default ReviewItem;