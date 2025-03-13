// HomePage.jsx

// importo axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// importo il componente Card del film
import MovieCard from '../components/MovieCard';

export default function HomePage() {

    // setto lo stato del componente
    const [movies, setMovies] = useState([]);

    // funzione chiamata dei dati lista films (index)
    const fetchMovies = () => {

        axios.get("http://localhost:3000/api/movies")

            .then(
                res => {
                    setMovies(res.data)
                }
            )

            .catch(err => console.log(err)
            )

    }

    useEffect(fetchMovies, [])

    // funzione di rendering delle card dei films
    const renderMovies = () => {

        return movies.map(

            movie => {

                return (
                    <div className="col" key={movie.id} >
                        <MovieCard movieProp={movie} />
                    </div>
                )
            }
        )
    }

    return (
        <>
            <h2 className="text-center"><i>The nerdest movie community</i></h2>

            <div className="movie-cards-wrapper">

                {renderMovies()}

            </div>
        </>
    );
}