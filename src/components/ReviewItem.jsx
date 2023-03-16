import { Link } from "react-router-dom";

const ReviewItem = ({
  review_id,
  owner,
  image,
  category,
  comment_count,
  created,
  designer,
  title,
  votes,
}) => {
  return (
    <li className="review-list__item">
      <article>
        <img src={image} alt="game" />
        <div className="review-list__item__details">
          <section className="user-post-details">
            <h4>Posted by {owner} </h4>
            <p></p>
            <h4> at {created}</h4>
          </section>

          <h3>{title}</h3>

          <p>Category: {category}</p>
          <p>Designer: {designer}</p>
          <p>{votes} votes</p>
          <p>{comment_count} Comments</p>
          <Link to={`/reviews/${review_id}`}>
            <button value={review_id}>Open Review</button>
          </Link>
        </div>
      </article>
    </li>
  );
};

export default ReviewItem;
