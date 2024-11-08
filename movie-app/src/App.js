// src/App.js
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller about dream invasion.",
      posterURL: "https://example.com/inception.jpg",
      rating: 5,
    },
    {
      title: "The Matrix",
      description: "A hacker discovers reality is an illusion.",
      posterURL: "https://example.com/matrix.jpg",
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="App">
      <h1>My Movie App</h1>

      <Filter
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />

      <div>
        <h2>Add a New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />
        <input
          type="number"
          min="0"
          max="5"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
