// Header.jsx

// importo il modulo per il link
import { Link } from "react-router-dom"

export default function Header() {

    return (

        <nav className="navbar bg-primary bg-gradient mb-4">
            <div className="container-fluid justify-content-center">
                <Link className="navbar-brand" to="/">Bool Movies</Link>
            </div>
        </nav>

    );

}