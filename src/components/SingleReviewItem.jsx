const SingleReviewItem = ({ singleReview }) => {
  const review = singleReview[0];
  console.log(review);

  return (
    <article>
      <img src={review.review_img_url} alt="game" />
      <div className="review-list__item__details">
        <h3>{review.title}</h3>
        <h4>User: {review.owner}</h4>
        <p>Created at: {review.created}</p>
        <p>Category: {review.category}</p>
        <p>Designer: {review.designer}</p>
        <p>Votes: {review.votes}</p>
        <p>Comment count: {review.comment_count}</p>
      </div>
    </article>
  );
};

export default SingleReviewItem;
