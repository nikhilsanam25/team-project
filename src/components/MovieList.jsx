import React, { useState, useEffect } from "react";
import MoviesData from "../data.json";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    setMovies(MoviesData);
    setFilteredMovies(MoviesData);
  }, []);
  useEffect(() => {
    const newarray = movies.filter((m) => {
      const matchMoviename = m.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      // console.log(matchMoviename);
      const matchcategory = selectedCategory
        ? m.category === selectedCategory
        : true;
      return matchMoviename && matchselectedcategory;
    });
    setFilteredMovies(newarray);
    // console.log(newarray);
  }, [searchTerm, selectedCategory, movies]);
  const categories = [...new Set(movies.map((m) => m.category))];
  return (
    <>
      <h1>Movie search app</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {filteredMovies.length === 0 ? (
        <div>No movies found</div>
      ) : (
        filteredMovies.map((movie) => (
          <div key={movie.id} style={item}>
            <h3>Title : {movie.name}</h3>
            <p>Category : {movie.category}</p>
            <p>Year of Release : {movie.year} </p>
          </div>
        ))
      )}
    </>
  );
}
