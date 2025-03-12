// Footer.jsx

// importo il modulo per il link
import { Link } from "react-router-dom"

export default function Footer() {

    return (

        <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-center">

            <Link className="btn btn-secondary btn-lg px-4 py-2 rounded-pill shadow" to="/">Back to home</Link>

        </footer>

    );

}