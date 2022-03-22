function MovieItem({movie}){
    return(
        <article>
            <div>
                {movie.title}
            </div>
            <div>
                {movie.genre}
            </div>
            <img src={movie.imageUrl} alt='moviepicture' />
        </article>
    )
}

export default MovieItem;