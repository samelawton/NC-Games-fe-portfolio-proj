import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://sam-l-back-end-hosting.onrender.com/api",
});

const fetchReviews = () => {
  return gamesApi.get("/reviews").then((data) => {
    return data.data;
  });
};

const fetchReviewID = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((data) => {
    return data;
  });
};

const fetchComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((data) => {
    return data;
   
  });
};

const upVote = (review_id) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data;
    });
};

const downVote = (review_id) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: -1 })
    .then(({ data }) => {
      return data;
    });
};

const postComment = (review_id, commentBody) => {
 
  return gamesApi
  .post(`/reviews/${review_id}/comments`, {username: "tickle122", body: commentBody.comment})
  .then((data)=>{
    console.log(data)
    return data;
  });
}
 

export { fetchReviews, fetchReviewID, fetchComments, upVote, downVote, postComment };
