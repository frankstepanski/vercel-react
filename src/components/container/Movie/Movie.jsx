import React, {useState} from 'react';
import ReviewList from "../../presentational/ReviewList/ReviewList";
import YouTube from "../../presentational/YouTube/YoutTube";
import Categories from "../../presentational/Categories/Categories";
import ReviewModal from "../../presentational/ReviewModal/ReviewModal";
import styles from "./Movie.module.css";

const Movie = ({movie, addReview}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={styles.movieContainer}>
            <div className={styles.movieHeader}>
                <h1>{movie.title}</h1>
                <Categories categories={movie.categories} />
            </div>
            <ul className={styles.movieDetails}>
                <li>{movie.release}</li> 
                <li>{movie.length} </li> 
                <li><a rel="noreferrer" target="_blank" href={movie.imdb}>IMDB</a></li>
            </ul>
            <div className={styles.movieInfoContainer}>
                <div className={styles.movieImage}>
                    <img src={movie.image} alt={movie.alt} />
                </div>
                <div className={styles.youtube}>
                 <YouTube embedId={movie.youtube} />
                </div>
                <div className={styles.reviewContainer}>
                    <ReviewList reviews={movie.reviews} />
                    <button onClick={openModal}>Post a Review</button>
                    <ReviewModal 
                      isOpen={modalIsOpen} 
                      closeModal={closeModal}
                      movie={movie}
                      addReview={addReview}
                />
                </div>
            </div>
            <div className={styles.movieDescription}>
                <p>{movie.description}</p>
            </div>
        </div>
    );
}

export default Movie;