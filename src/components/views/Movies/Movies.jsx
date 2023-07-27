import React, {useState} from "react";
import MoviesMenu from '../../layout/MovieMenu/MoviesMenu';
import MovieList from '../../presentational/MovieList/MovieList';
import SyncLoader from "react-spinners/SyncLoader";
import styles from "./Movies.module.css";

const Movies = ({
    handleFilters,
    movies,
    addReview,
    moviesPerPage,
    paginate,
    currentPage,
    totalMovies    
}) => {

    const [color, setColor] = useState("#787878");

    return (
        <div className={styles.movies}>      
            <MoviesMenu 
                handleFilters = {handleFilters}
                moviesPerPage = {moviesPerPage}
                paginate = {paginate}
                currentPage = {currentPage}
                totalMovies = {totalMovies}
            />
            
            <div className={styles.moviesListContainer}>
                {
                     <MovieList movies={movies} addReview={addReview} />
                }
            </div>
        </div>
    )
}

export default Movies;