// App.jsx

// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";
import FooterLayout from "./layouts/FooterLayout";

// Pages
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage";
import NotFoundPage from "./pages/NotFoundPage";

import './App.css'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route index path="/" element={<HomePage />} />
        </Route>
        <Route element={<FooterLayout />} >
          <Route path="movies/:id" element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App

