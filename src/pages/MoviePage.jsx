// MoviePage.jsx

// importo axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// importo il componente Card delle reviews
import ReviewCard from '../components/ReviewCard';

import { Link, useParams, useNavigate } from "react-router-dom"

export default function MoviePage() {

    // recupero l'id del film
    const { id } = useParams();

    // utilizzo per il redirect
    const redirect = useNavigate();

    // setto lo stato del componente
    const [movie, setMovie] = useState({});

    // funzione di chiamata all'API per il film richiesto
    const fetchMovie = () => {

        axios.get("http://localhost:3000/api/movies/" + id)

            .then(
                res => {
                    setMovie(res.data)
                }
            )
            .catch(err => {
                console.log(err)
                if (err.status === 404) redirect("/404")
            }
            )
    }

    useEffect(fetchMovie, [])

    // funzione di rendering delle reviews
    const renderReviews = () => {
        return movie.reviews?.map(
            review => <ReviewCard key={review.id} reviewProp={review} />
        )
    }

    return (
        <>
            <header id="book" className="border-bottom border-1 mb-3">

                <div className="d-flex mb-3">

                    <img className="img-fluid w-25"

                        src={movie.image}

                        alt={movie.title} />

                    <div className="ms-3 p-3">

                        <h1>{movie.title}</h1>

                        <h3 className="text-muted"><i>{movie.author}</i></h3>

                        <p>{movie.abstract}</p>

                    </div>

                </div>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>

                {renderReviews()}

            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">

                <Link className="btn btn-secondary" to="/">Ritorna alla home</Link>

            </footer>
        </>
    );
}