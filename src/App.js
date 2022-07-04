import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/global/shared/Header";
import HomePage from "./components/Home/Homepage";
import MovieListing from "./components/MovieListing/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Footer from "./components/global/shared/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:imdbID" element={<MovieListing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
