import React, { useEffect, useState } from "react"
import axios from "./axios"
import "./Row.css"


import Youtube from "react-youtube"
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original"

function Row({ titles, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // console.log(requests)
            setMovies(request.data.results);
            // return request;

        }
        fetchData()

    }, [fetchUrl]);
    // console.log(movies)

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {

            movieTrailer(movie?.name || "").then(url => {
                const UrlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(UrlParams.get("v"));

            }).catch((error) => {
                console.log(error)
            })
        }
    }
    return (

        <div className="row">
            <h2>{titles}</h2>
            {/* <h2>{movies}</h2> */}
            <div className="row_posters" >

                {movies.map(movie => (

                    <img key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>

    )
}

export default Row