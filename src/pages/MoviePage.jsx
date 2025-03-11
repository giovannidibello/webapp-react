// MoviePage.jsx

import ReviewCard from '../components/ReviewCard';

import { Link } from "react-router-dom"

export default function MoviePage() {

    return (<>
        <header id="book" className="border-bottom border-1 mb-3">

            <div className="d-flex mb-3">

                <img className="img-fluid w-25"

                    src="http://localhost:3000/img/movies_cover/inception.jpg"

                    alt="descrizione img" />

                <div className="ms-3 p-3">

                    <h1>Inception</h1>

                    <h3 className="text-muted"><i>Christopher Nolan</i></h3>

                    <p>A skilled thief is given a chance at redemption if he can successfully perform inception.</p>

                </div>

            </div>
        </header>
        <section id="reviews">
            <header className="d-flex justify-content-between align-items-center mb-4">
                <h4>Our community reviews</h4>
            </header>

            <ReviewCard />

            <ReviewCard />

            <ReviewCard />

        </section>

        <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">

            <Link className="btn btn-secondary" to="/">Ritorna alla home</Link>

        </footer>
    </>
    );
}