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
    <>
      <section className="home">
        <h1>Welcome, Helmut</h1>
        <SearchBar />
        <div>
          <div className="trending">
            <h2>Trending Movies</h2>
            <Link to="/popular">
              <span defaultValue="27">See All</span>
            </Link>
          </div>

          <article className="slider_wrapper">
            <AwesomeSlider className="aws_btn">
              {randomMovies.map(movie => (
                <div key={movie.id}>
                  <Link to={`/details/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt="photos"
                      key={movie.backdrop_path}
                    />
                    <h2>{movie.title}</h2>
                    <div className="rating_container">
                      <img src={star} alt="" />
                      <p>{movie.vote_average} / 10.0</p>
                    </div>
                  </Link>
                </div>
              ))}
            </AwesomeSlider>
          </article>
          <section className="animated_banner_container hidden_section">
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
        </div>
      </section>
    </>
  )
}

export default Home
