import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { request } from "../api/request";
import "./Banner.css";
export const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getData() {
      const result = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
      return result;
    }
    getData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backdropPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <a href="https://www.netflix.com/in/">
            <button className="banner_button">Play</button>
          </a>
          <a href="https://www.netflix.com/in/login">
            <button className="banner_button">My List </button>
          </a>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
};
