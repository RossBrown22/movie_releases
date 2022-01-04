import Movie from "./Movie";

const MovieList = ({ movies }) => {
    const movieNodes = movies.map((movie) => {
        return (
            <Movie key={movie.id} title={movie.title} url={movie.url}></Movie>
        )
    })

    return (
        <>
            {movieNodes}
        </>
    )
}

export default MovieList;