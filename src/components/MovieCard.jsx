// MovieCard.jsx

import { Link } from "react-router-dom"

const MovieCard = (props) => {

    const { id, title, director, abstract, image } = props.movieProp;

    return (

        <div className="movie-card-container">
            <div className="card mb-2 d-flex flex-column h-100 text-center movie-card" style={{ width: "16rem", flex: "0 0 auto" }}>
                {image && <img className="card-img-top img-fluid mx-auto d-block" src={image} alt={title} style={{ height: "300px" }} />}

                <div className="card-body text-center">

                    <h5 className="card-title">{title}</h5>

                    <address><i>{director || "Anonymous"}</i></address>

                    <div className="d-flex justify-content-center mt-auto">
                        <Link to={`/movies/${id}`} className="btn btn-primary btn-sm px-4 py-2 rounded-pill shadow">
                            See More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default MovieCard