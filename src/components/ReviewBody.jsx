import ReviewItem from "./ReviewItem";


const ReviewBody = ({reviews, setSingleReview}) => {

        return (
            <section>
                <ol className="review-list">
                    {reviews.map((item)=>{
                        return (<ReviewItem review_id={item.review_id} owner={item.owner} category={item.category} comment_count={item.comment_count} created={item.created_at} designer={item.designer} image={item.review_img_url} title={item.title} votes={item.votes} setSingleReview={setSingleReview}/>)
                    })}
                </ol>
            </section>
          );
    }
 
export default ReviewBody;
