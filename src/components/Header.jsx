// Header.jsx

// importo il modulo per il link
import { Link } from "react-router-dom"

// importo fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (

        <nav className="navbar bg-primary bg-gradient mb-3">
            <div className="container-fluid justify-content-center">
                <Link className="navbar-brand text-white fw-bold" to="/"><h1 className="display-6 text-shadow">BOOL MOVIES</h1></Link>
                <Link to="/movies/create" className="icon-link">
                    <FontAwesomeIcon icon={faClapperboard} size="2x" style={{ color: "black", transform: "rotate(-10deg)" }} title="Add Movie" />
                </Link>
            </div>
        </nav>

    );

}