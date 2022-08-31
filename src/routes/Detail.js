import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Detail(){
    let {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovie = async () => {
        const json = await(
            await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json());
            setMovies(json.data.movie);
            setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return <div>{loading ? <h1>Loading...</h1> : 
        <div>
            {console.log(movies)}
            <img src={movies.large_cover_image} alt={movies.title} />
            <h1>{movies.title} ({movies.year})</h1>
            <p>⭐{movies.rating}</p>
            <p>{movies.summary}</p>
            <ul>
                {movies.genres.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>}
    </div>
}

export default Detail;