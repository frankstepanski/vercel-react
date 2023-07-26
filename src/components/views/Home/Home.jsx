import styles from "./Home.module.css";

const Home = (props) => {

    return (
        <div className={styles.home}>
            <section className={styles.jumbotron}>
                <h1>Welcome to the Movie Reviewer Database</h1>
                <p>Comment and rate your favorite movies. Fun for the whole family. 🍿 </p>
            </section>

            <section className={styles.featuredMoviesContainer}>
                <h2>Featured Movies:</h2>
                <div className={styles.featuredMoviesList}>
                {
                    !props.isLoading  ? 
                        props.movies.map((item, index) => {
                            return (
                                <div key={index} className={styles.featuredMovie}>
                                    <a rel="noreferrer" href={item.imdb} target="_blank" ><img src={item.image} alt={item.alt} /></a>
                                    <div className={styles.featuredMovieInfo}>
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                        )
                    })
                    :
                    <p>Loading...</p>
                }
                </div>
            </section>  
        </div>
    );
}

export default Home;