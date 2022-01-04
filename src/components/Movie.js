const Movie = ({ title, url }) => {
    return (
        <a href={url}>
        <h4>{title}</h4>
        </a>
    )
}

export default Movie