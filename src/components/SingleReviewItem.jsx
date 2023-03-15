import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments, fetchReviewID, upVote, downVote } from "../utils/api";
import CommentsItem from "./CommentsItem";


const SingleReviewItem = () => {
  const [singleItem, setSingleItem] = useState([]);
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [userLikeCount, setUserLikeCount] = useState(0);
  const [userDislikeCount, setUserDislikeCount] = useState(0);
  const [votingError, setVotingError] = useState(false);

  const onClickLike = () =>{
    setUserLikeCount(1);
    setVotingError(false)
    upVote(review_id).catch(()=>{
      setUserLikeCount(0)
      setVotingError(true);
    });
  }

  const onClickDislike = () =>{
    setUserDislikeCount(1);
    setVotingError(false)
    downVote(review_id).catch(()=>{
      setUserDislikeCount(0)
      setVotingError(true);
    })
  }

  useEffect(() => {
    const promises = [fetchReviewID(review_id), fetchComments(review_id)];
    Promise.all(promises)
      .then((data) => {
        setSingleItem(data[0].data.review[0]);
        setComments(data[1].data.review);
        setError(null);
      })
      .catch((err) => {
        setError("Something went wrong. Could not fetch comments.");
      });
  }, [review_id]);

  return (
    <article>
      <img src={singleItem.review_img_url} alt="game" />
      <div className="single-review-list__item__details">
        <h3>{singleItem.title}</h3>
        <h4>User: {singleItem.owner}</h4>
        <p>Created at: {singleItem.created_at}</p>
        <p>Category: {singleItem.category}</p>
        <p>Designer: {singleItem.designer}</p>
        <p>Votes: {singleItem.votes + userLikeCount - userDislikeCount}</p> 
        <button className="upvote-button" onClick={onClickLike} disabled={userLikeCount !==0 || userDislikeCount == 1}><img src="../like.png"/></button>{" "}
        <button className="downvote-button" onClick={onClickDislike} disabled={userDislikeCount !==0 || userLikeCount == 1}><img src="../dislike.png"/></button>
        {votingError && <p className="vote-error">Unable to process vote, please try again later.</p>}
        <p>Comment count: {singleItem.comment_count}</p>
        {error && <p>{error}</p>}
        <CommentsItem comments={comments} />
      </div>
    </article>
  );
};

export default SingleReviewItem;
