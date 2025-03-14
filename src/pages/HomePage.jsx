// HomePage.jsx

// importo axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// importo il componente Card del film
import MovieCard from '../components/MovieCard';

// importo il loader
import Loader from '../components/Loader';

export default function HomePage() {

    // setto lo stato del componente
    const [movies, setMovies] = useState([]);

    // stato per determinare se i dati sono in caricamento
    const [loading, setLoading] = useState(true);

    // funzione chiamata dei dati lista films (index)
    const fetchMovies = () => {

        setLoading(true);
        axios.get("http://localhost:3000/api/movies")

            .then(
                res => {
                    setMovies(res.data)
                    setLoading(false);
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

            {loading ? (
                <Loader />
            ) : (
                <>
                    <h2 className="text-center"><i>The nerdest movie community</i></h2>
                    <div className="movie-cards-wrapper">
                        {renderMovies()}
                    </div>
                </>
            )}
        </>
    );
}