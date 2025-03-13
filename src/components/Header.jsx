// Header.jsx

// importo il modulo per il link
import { Link } from "react-router-dom"

export default function Header() {

    return (

        <nav className="navbar bg-primary bg-gradient mb-3">
            <div className="container-fluid justify-content-center">
                <Link className="navbar-brand text-white fw-bold" to="/"><h1 className="display-6 text-shadow">BOOL MOVIES</h1></Link>
            </div>
        </nav>

    );

}