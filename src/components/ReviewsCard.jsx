import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import ReviewBody from "./ReviewBody";

const ReviewsCard = () => {

    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 
    
    useEffect(()=>{
        setReviews([])
        setIsLoading(true);
        const promises = [
            fetchReviews()
        ];
        Promise.all(promises)
            .then((data)=>{
                const reviewsData = data[0].data.reviews;
                setReviews(reviewsData)
                setError(null)
            })
            .catch((err)=>{
                setError("Something went wrong. Could not fetch data.")
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }, [])

    return (
        <main className="reviews-card">
            {reviews && <ReviewBody reviews={reviews}/>}
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </main>
     );
}
 
export default ReviewsCard;