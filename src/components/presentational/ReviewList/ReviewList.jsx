import Review from "../Review/Review";
import styles from "./ReviewList.module.css";

const ReviewList = ({reviews}) => {

    return (
        <div className={styles.reviewList}>
            <ul className={styles.reviews}>
                 {
                    reviews.map((review, index) => {
                        return <Review key={index} review={review} />
                    })
                 }
            </ul>
        </div>
    );
}

export default ReviewList;