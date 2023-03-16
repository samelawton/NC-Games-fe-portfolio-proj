import ReviewItem from "./ReviewItem";
import CategoryFilter from "./CategoryFilter";


const ReviewBody = ({reviews, setCategoryFilter, categoryFilter}) => {


        return (
            <section>
                <CategoryFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}/>
                <ol key={reviews.review_id} className="review-list">
                    {reviews.map((item)=>{
                        return (<ReviewItem key={item.review_id} review_id={item.review_id} owner={item.owner} category={item.category} comment_count={item.comment_count} created={item.created_at} designer={item.designer} image={item.review_img_url} title={item.title} votes={item.votes}/>)
                    })}
                </ol>
            </section>
          );
    }
 
export default ReviewBody;
