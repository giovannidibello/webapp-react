// MoviePage.jsx

// importo axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// importo il componente Card delle reviews
import ReviewCard from '../components/ReviewCard';

// import del componente di form
import ReviewForm from '../components/ReviewForm';

import { Link, useParams, useNavigate } from "react-router-dom"

// importo fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
            review => <ReviewCard key={review.id} reviewProp={review} renderStars={renderStars} />
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

    // funzione per mostrare le stelle in base al voto
    const renderStars = (average) => {

        let stars = [];

        // trasformo la media in un numero intero (assumendo che l'average sia un numero tra 0 e 5)
        const fullStars = Math.floor(average);
        const halfStar = average % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                // aggiungo stella piena
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                    />
                );
            } else if (i === fullStars && halfStar) {
                // aggiungo mezza stella
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStarHalfAlt}
                        style={{ color: "#FFD43B" }}
                    />
                );
            } else {

                // aggiungo stella vuota
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#ccc" }}
                    />
                );
            }
        }

        return stars;
    };

    return (
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
                                    <h6>Average Rating: {renderStars(calculateAverageRating())}</h6>
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
    );
}