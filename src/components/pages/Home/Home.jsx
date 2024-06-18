import React, { useEffect, useState } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import { Link } from 'react-router-dom'
import { apiKey } from '../../../data/api'
import { getAllMovies } from '../../utils/fetches/movieFetch'
import 'react-awesome-slider/dist/styles.css'
import './Home.scss'
import SearchBar from '../../shared/SearchBar/SearchBar.jsx'
import star from '../../../assets/img/polygon.svg'

function Home() {
  const [popularMovies, setPopularMovies] = useState([])
  const [randomMovies, setRandomMovies] = useState([])

  useEffect(() => {
    getAllMovies(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`,
      setPopularMovies,
      'results',
    )
  }, [])

  useEffect(() => {
    const popularRandomMovies = popularMovies.sort(() => 0.5 - Math.random())
    const topFourMovies = popularRandomMovies.slice(0, 5)
    setRandomMovies(topFourMovies)
  }, [popularMovies])

  return (
    <section className="home">
      <div>
        <h1>Welcome, Helmut</h1>
        <SearchBar />
        <div></div>
      </div>
      <section className="slider_wrapper">
        <div className={'slider_container'}>
          <div className="trending">
            <p>Trending Movies</p>
            <Link to="/popular">
              <span defaultValue="27">See All</span>
            </Link>
          </div>
          <AwesomeSlider className="aws_btn">
            {randomMovies.map(movie => (
              <div key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img
                    className="image"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt="photos"
                    key={movie.backdrop_path}
                  />
                  <div className="rating_container">
                    <h2>{movie.title.substring(0, 14)}</h2>
                    <div>
                      <img src={star} alt="" />
                      <p>{movie.vote_average.toFixed(1)} / 10.0</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </section>
      <section className="animated_banner_container hidden_section">
        <div className="trending">
          <p>Trending Movies</p>
          <Link to="/popular">
            <span defaultValue="27">See All</span>
          </Link>
        </div>
        <article className="animated_banner">
          {randomMovies.map(movie => (
            <div key={movie.id} className="image_container">
              <Link to={`/details/${movie.id}`}>
                <img
                  className="animated_image"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt="photos"
                  key={movie.backdrop_path}
                />
                <h2>{movie.title}</h2>
              </Link>
            </div>
          ))}
          {randomMovies.map(movie => (
            <div key={movie.id} className="image_container">
              <Link to={`/details/${movie.id}`}>
                <img
                  className="animated_image"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt="photos"
                  key={movie.backdrop_path}
                />
                <h2>{movie.title}</h2>
              </Link>
            </div>
          ))}
        </article>
      </section>
    </section>
  )
}

export default Home
