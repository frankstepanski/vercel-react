import StarRating from "../../container/StarRating/StarRating";
import styles from "./Review.module.css";

const Review = ({review}) => {
    // note: slice(0,10) to not display time in date

    return (
        <li>
            <span className={styles.reviewUserInfo}>{review.user} ({review.date.slice(0, 10)}):</span>
            <StarRating stars={review.stars} />
            <p className={styles.review}>{review.comment}</p>
        </li>
    );
}

export default Review;