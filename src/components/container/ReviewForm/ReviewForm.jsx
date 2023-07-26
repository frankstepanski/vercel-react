import StarRating from "../StarRating/StarRating";
import styles from "./ReviewForm.module.css";

const ReviewForm = ({id, addReview, closeModal}) => {

    const submitHandler = (e) => {
        e.preventDefault();
        const stars = e.target.rating.value;
        const review = e.target.comment.value;
        if (!stars || !review) return
        addReview(id, stars, review);
        closeModal();
    }

    return (
        <div className={styles.reviewForm}>
            <form onSubmit = {submitHandler}>
                <label>Stars:</label>
                    <StarRating name = "stars" stars = "0"/>
                    <label>Review:</label>
                    <textarea rows="3" cols="25" name="comment" /> 
                    <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ReviewForm;