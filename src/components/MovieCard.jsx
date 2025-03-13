// MovieCard.jsx

import { Link } from "react-router-dom"

const MovieCard = (props) => {

    const { id, title, director, abstract, image } = props.movieProp;

    return (

        <div className="card mb-4" style={{ width: "20rem" }}>
            {image && <img className="card-img-top img-fluid w-50 mx-auto d-block mt-3" src={image} alt={title} />}

            <div className="card-body">

                <h5 className="card-title">{title}</h5>

                <address><i>{director || "Anonymous"}</i></address>

                <p className="card-text">{abstract || "Abstract not found"}</p>

                <div className="d-flex justify-content-center mt-auto">
                    <Link to={`/movies/${id}`} className="btn btn-primary px-4 py-2 rounded-pill shadow">
                        See More
                    </Link>
                </div>
            </div>
        </div>
    )
}





export default MovieCard