// importo il componente segnaposto della libreria di router
import { Outlet } from "react-router-dom";

// importo i componenti del layout
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function FooterLayout() {

    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
                <Footer />
            </main>

        </>
    );
}