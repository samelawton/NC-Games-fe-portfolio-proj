import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://sam-l-back-end-hosting.onrender.com/api",
});

const fetchReviews = () => {
  return gamesApi 
  .get("/reviews")
  .then((data)=>{
    return data;
  });
};

export { fetchReviews};


