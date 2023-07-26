import Movie from "../../container/Movie/Movie";
import styles from "./MovieList.module.css";

const MovieList = ({movies, addReview}) => {
 
    return (
            <div className={styles.moviesList}>
                {
                    movies.map((movie, index) => {
                        
                        if (movie.hidden === false) {
                            return (
                                <Movie key={index} movie={movie} addReview={addReview} />
                            )
                        }
                    })
                }
            </div>
    )
}

export default MovieList;