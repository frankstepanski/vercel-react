function parseNowPlaying(data) {

    return data.results.map((item) => {
        return {
            id: item.id,
            title: item.title,
            release: item.release_date,
            rating: item.vote_average,
            poster: `https://image.tmdb.org/t/p/original/${item.poster_path}`
        };
    });
}

export { parseNowPlaying };