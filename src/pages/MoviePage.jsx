// MoviePage.jsx

// importo axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// importo il componente Card delle reviews
import ReviewCard from '../components/ReviewCard';

// import del componente di form
import ReviewForm from '../components/ReviewForm';

// import del componente render stelle
import RenderStars from '../components/RenderStars';

// importo il loader
import Loader from '../components/Loader';

import { Link, useParams, useNavigate } from "react-router-dom"

export default function MoviePage() {

    // recupero l'id del film
    const { id } = useParams();

    // utilizzo per il redirect
    const redirect = useNavigate();

    // setto lo stato del componente
    const [movie, setMovie] = useState({});

    // stato per determinare se i dati sono in caricamento
    const [loading, setLoading] = useState(true);


    // funzione di chiamata all'API per il film richiesto
    const fetchMovie = () => {

        setLoading(true);
        axios.get("http://localhost:3000/api/movies/" + id)

            .then(
                res => {
                    setMovie(res.data)
                    setLoading(false);
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

    // funzione calcolo media voti delle reviews
    const calculateAverageRating = () => {
        if (!movie.reviews || movie.reviews.length === 0) {
            return 0;
        }

        const totalVotes = movie.reviews.reduce((acc, review) => acc + review.vote, 0);
        return (totalVotes / movie.reviews.length).toFixed();
    };

    return (
        <>

            {loading ? (
                <Loader />
            ) : (
                <>
                    <header className="border-bottom border-1 mb-3">
                        <div className="d-flex mb-3">
                            {movie.image && <img className="img-fluid" src={movie.image} alt={movie.title} style={{ width: "16rem", height: "22rem", flex: "0 0 auto" }} />}
                            <div className="ms-4">
                                <h1>{movie.title}</h1>
                                <h3><i>{movie.author}</i></h3>
                                <p>{movie.abstract || "Abstract not found"}</p>
                                <section>
                                    <header className="mt-5 mb-4 text-center">
                                        <h4>Our community reviews</h4>
                                        <div className="text-end">
                                            <h6>Average Rating: <RenderStars average={calculateAverageRating()} /></h6>
                                        </div>
                                    </header>
                                    <div className="d-flex flex-wrap">
                                        {renderReviews()}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </header>
                    <section>
                        <ReviewForm movie_id={movie.id} realoadReviews={fetchMovie} />
                    </section>
                </>
            )}
        </>
    );
}