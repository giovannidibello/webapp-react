// App.jsx

// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage";

import './App.css'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route index path="/" element={<HomePage />} />
          <Route path="movies/" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App

