// ReviewCard.jsx

// importo fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = (props) => {

    const { name, vote, text } = props.reviewProp;

    // funzione per mostrare le stelle in base al voto
    const renderStars = (vote) => {

        let stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < vote) {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                    />
                );
            } else {
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
    };

    return (

        <div className="card mb-4">

            <div className="card-body">

                <p className="card-text">{text || "Text not found"}</p>

                <strong>Vote: {renderStars(vote)} </strong>

                <address><i>By {name} </i></address>
            </div>

        </div>

    )

}





export default ReviewCard