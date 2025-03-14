// RenderStars.jsx

// importo fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function RenderStars({ average }) {

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
}