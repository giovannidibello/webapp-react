// CreateMoviePage.jsx

import axios from "axios";

// importo parte LInk del modulo react-router
import { Link, useNavigate } from "react-router-dom"

// importiamo lo useState 
import { useState } from "react";

const initialData = {

    title: "",
    director: "",
    genre: "",
    release_year: "",
    image: null,
    abstract: ""
};

const endpointApi = "http://localhost:3000/api/movies";

const CreateMoviePage = () => {

    // navigazione
    const navigate = useNavigate();

    // states iniziali
    const [formDataOgj, setFormDataOgj] = useState(initialData);

    const setFieldValue = (e) => {
        const { value, name } = e.target;
        if (name === "image") setFormDataOgj({ ...formDataOgj, image: e.target.files[0] });
        else setFormDataOgj({ ...formDataOgj, [name]: value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post(endpointApi, formDataOgj, { headers: { "Content-Type": "multipart/form-data" } })
            .then(
                () => { navigate("/") }
            )
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <header className="border-bottom border-1 mb-3">
                <h1>Add a new movie</h1>
            </header>


            <section>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">

                        <label>Title:</label>
                        <input
                            className="form-control"
                            name="title"
                            type="text"
                            value={formDataOgj.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    <div className="mb-4">

                        <label>Director:</label>
                        <input
                            className="form-control"
                            name="director"
                            type="text"
                            value={formDataOgj.director}
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    <div className="mb-4">

                        <label>Genre:</label>
                        <input
                            className="form-control"
                            name="genre"
                            type="text"
                            value={formDataOgj.genre}
                            onChange={setFieldValue}
                        />
                    </div>

                    <div className="mb-4">

                        <label>Release year:</label>
                        <input
                            className="form-control"
                            name="release_year"
                            type="text"
                            value={formDataOgj.release_year}
                            onChange={setFieldValue}
                        />
                    </div>

                    <div className="mb-4">

                        <label>Image:</label>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    <div className="mb-4">

                        <label>Abstract:</label>
                        <textarea
                            value={formDataOgj.abstract}
                            className="form-control"
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>

                    <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                        <button className="btn btn-success rounded-pill shadow" type="submit">
                            Add Movie
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateMoviePage