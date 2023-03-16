import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import ReviewBody from "./ReviewBody";
import { useSearchParams } from "react-router-dom";


const ReviewsCard = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
 
  useEffect(()=>{
    const category = searchParams.get("category")
    if(category) {setCategoryFilter(category)}
    else{
      setCategoryFilter(null)
    }
  },[searchParams])

  useEffect(() => {
    setReviews([]);
    setIsLoading(true);
    if(categoryFilter)
    {setSearchParams({category: categoryFilter})}
    fetchReviews(categoryFilter)
      .then((data) => {
        const reviewsData = data.reviews;
        setReviews(reviewsData);
        setError(null);
      })
      .catch((err) => {
        setError("Something went wrong. Could not fetch data.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryFilter]);

  return (
    <main className="reviews-card">
      {reviews && (
        <div>
        <ReviewBody reviews={reviews} setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}/>
        </div>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </main>
  );
};

export default ReviewsCard;
