import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieList(){

    const [movies, setMovies] = useState([])

    useEffect(() => {
        console.log("useEffect")
        listMovies();
    }, []);

    const listMovies = async() => {
        const url = "https://moviesflix-development.azurewebsites.net/api/v1/movies";

        try {
            const response = await fetch(url, {method:'GET',});

            if(!response.status === 200){
                console.log('det gick inte att hamta');
                return
            }
            const result = await response.json();
            console.log(result);
            setMovies(result)
        }
        catch(error)
        {   
            console.log(error);
        }
    } 

    return(
        <section>
            <h2>Here list all movies.</h2>
            <h1>One more last movie</h1>
            {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
            ))}
        </section>
    )
}

export default MovieList;