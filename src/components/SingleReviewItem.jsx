import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments, fetchReviewID } from "../utils/api";
import CommentsItem from "./CommentsItem";

const SingleReviewItem = () => {
  
    const [singleItem, setSingleItem] = useState([]);
    const {review_id} = useParams();
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

 
    useEffect(()=>{
        const promises =[fetchReviewID(review_id),fetchComments(review_id)
            ];
       Promise.all(promises)
        .then((data)=>{
            setSingleItem(data[0].data.review[0])
            setComments(data[1].data.review)
            setError(null)
        }).catch((err)=>{
            setError("Something went wrong. Could not fetch comments.")
        })
    }, [review_id])
  

  return (
    <article>
      <img src={singleItem.review_img_url} alt="game" />
      <div className="single-review-list__item__details">
        <h3>{singleItem.title}</h3>
        <h4>User: {singleItem.owner}</h4>
        <p>Created at: {singleItem.created_at}</p>
        <p>Category: {singleItem.category}</p>
        <p>Designer: {singleItem.designer}</p>
        <p>Votes: {singleItem.votes}</p>
        <p>Comment count: {singleItem.comment_count}</p>
        {error && <p>{error}</p>}
       <CommentsItem comments={comments}/>
      </div>
    </article>
  );
};

export default SingleReviewItem;
