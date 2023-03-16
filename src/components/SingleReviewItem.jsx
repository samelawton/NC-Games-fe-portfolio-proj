import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchComments,
  fetchReviewID,
  upVote,
  downVote,
  postComment,
} from "../utils/api";
import CommentsItem from "./CommentsItem";

const SingleReviewItem = () => {
  const [singleItem, setSingleItem] = useState([]);
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [userLikeCount, setUserLikeCount] = useState(0);
  const [userDislikeCount, setUserDislikeCount] = useState(0);
  const [votingError, setVotingError] = useState(false);
  const [postCommentBody, setPostCommentBody] = useState({
    username: "",
    comment: ""
  });
  const [pendingComment, setPendingComment] = useState(false);
  const [commentConfirmation, setCommentConfirmation] = useState("");
  const [postCommentError, setPostCommentError ] = useState("");


  const onClickLike = () => {
    setUserLikeCount(1);
    setVotingError(false);
    upVote(review_id).catch(() => {
      setUserLikeCount(0);
      setVotingError(true);
    });
  };

  const onClickDislike = () => {
    setUserDislikeCount(1);
    setVotingError(false);
    downVote(review_id).catch(() => {
      setUserDislikeCount(0);
      setVotingError(true);
    });
  };


  const changeHandle = (event) => {
    const {id: key, value} = event.target;
    setPostCommentBody((currentState)=>{
      return {...currentState, [key]: value};
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setPendingComment(true);
    postComment(review_id, postCommentBody)
    .then(()=>{
      setPostCommentBody({});
      setCommentConfirmation("Comment posted!");
    }).catch((err)=>{
      setPostCommentError("Unable to post comment...please try again")
    }).finally(()=>{
      setPendingComment(false)
    })
    
  };

  useEffect(() => {
    fetchReviewID(review_id) 
      .then((data) => {
        
        setSingleItem(data.data.review[0]);
       
        setError(null);
      })
      .catch((err) => {
        
        setError("Something went wrong.");
      });
  }, [review_id]);

  useEffect(()=>{
    fetchComments(review_id)
    .then((data) => {
      setComments(data.data.review);
      setError(null);
    })
    .catch((err) => {
      
      if(err.response.data.msg === "review_id not found"){
        return;
      }else{setError("Something went wrong. Could not fetch comments.");}
      
    });
}, [review_id]);
  

  return (
    <article>
      <img className="single-review-img" src={singleItem.review_img_url} alt="game" />
      <div className="single-review-list__item__details">
        <section className="single-review-info">
          <section className="single-review-posted-by">
        <h4>Posted by {singleItem.owner} </h4>
        <p></p>
        <h4> at {singleItem.created_at}</h4>
        </section>
        <h3>{singleItem.title}</h3>
        <p>Category: {singleItem.category}</p>
        <p>Designer: {singleItem.designer}</p>
        
        <button
          className="upvote-button"
          onClick={onClickLike}
          disabled={userLikeCount !== 0 || userDislikeCount === 1}
        >
          <img src="../like.png" />
        </button>{" "}
        <p className="votes-p">{singleItem.votes + userLikeCount - userDislikeCount} votes</p>
        <button
          className="downvote-button"
          onClick={onClickDislike}
          disabled={userDislikeCount !== 0 || userLikeCount === 1}
        >
          <img src="../dislike.png" />
        </button>
        {votingError && (
          <p className="vote-error">
            Unable to process vote, please try again later.
          </p>
        )}
        <p>{singleItem.comment_count} comments</p>
        </section>
        
      </div>
      <div>{error && <p>{error}</p>}
        {!error && <CommentsItem comments={comments} />}</div>

      <form className="post-comment" onSubmit={submitHandler}>
        <input
          className="post-comment-box"
          id="comment"
          value={postCommentBody.comment}
          type="text"
          onChange={changeHandle}
          placeholder="Add a comment..."
        ></input>
        <button type="submit-comment">Add</button>
        {commentConfirmation && <p>{commentConfirmation}</p>}
        {postCommentError && <p>{postCommentError}</p>}
        {pendingComment && <p>Posting comment...</p>}
      </form>
    </article>
  );
};

export default SingleReviewItem;
