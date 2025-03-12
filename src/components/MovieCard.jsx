// MovieCard.jsx

import { Link } from "react-router-dom"

const MovieCard = (props) => {

    const { id, title, author, abstract, image } = props.movieProp;

    return (

        <div className="card mb-4">
            <img className="card-img-top img-fluid w-50 mx-auto d-block mt-3"

                src={image}

                alt={title} />

            <div className="card-body">

                <h5 className="card-title">{title}</h5>

                <address><i>{author}</i></address>

                <p className="card-text">{abstract}</p>

                <Link to={`/movies/${id}`} className="btn btn-primary">Maggiori dettagli</Link>
            </div>
        </div>
    )
}





export default MovieCard