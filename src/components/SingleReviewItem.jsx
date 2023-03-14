import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewID } from "../utils/api";

const SingleReviewItem = () => {
  
    const [singleItem, setSingleItem] = useState([]);
    const {review_id} = useParams();


    useEffect(()=>{
        fetchReviewID(review_id)
        .then((data)=>{
            setSingleItem(data.data.review[0])
        })
    }, [])
  

  return (
    <article>
      <img src={singleItem.review_img_url} alt="game" />
      <div className="single-review-list__item__details">
        <h3>{singleItem.title}</h3>
        <h4>User: {singleItem.owner}</h4>
        <p>Created at: {singleItem.created}</p>
        <p>Category: {singleItem.category}</p>
        <p>Designer: {singleItem.designer}</p>
        <p>Votes: {singleItem.votes}</p>
        <p>Comment count: {singleItem.comment_count}</p>
      </div>
    </article>
  );
};

export default SingleReviewItem;
