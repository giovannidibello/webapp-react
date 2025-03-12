// ReviewCard.jsx

const ReviewCard = (props) => {

    const { name, vote, text } = props.reviewProp;

    return (

        <div className="card mb-4">

            <div className="card-body">

                <p className="card-text">{text}</p>

                <strong>Vote: {vote} </strong>

                <address><i>By {name} </i></address>
            </div>

        </div>

    )

}





export default ReviewCard