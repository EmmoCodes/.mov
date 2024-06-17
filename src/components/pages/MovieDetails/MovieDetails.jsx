import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { apiKey } from '../../../data/api.js'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'
import start from '../../../assets/img/polygon.svg'
import './MovieDetails.scss'
import LoadingAnime from '../../shared/LoadingAnime/LoadingAnime.jsx'

const MovieDetails = () => {
  const [showFullOverview, setShowFullOverview] = useState(false)
  const [movieDetail, setMovieDetail] = useState({})
  const params = useParams()
  const navigate = useNavigate()
  const [backButton, setBackButton] = useState('')

  useEffect(() => {
    getAllMovies(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`, setMovieDetail)
    const themeValue = localStorage.getItem('darkTheme')
    if (themeValue) {
      setBackButton('../../../assets/img/backButtonBlack.svg')
    }
  }, [params.id])

  if (!movieDetail.id) {
    return <LoadingAnime />
  }

  function truncateOverview(overview) {
    const words = overview.split(' ')
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...'
    } else {
      return overview
    }
  }

  return (
    <div className="details_wrapper">
      <div onClick={() => navigate(-1)} className="backbutton"></div>
      <section className="banner_section">
        <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt="Photo" className="main_img" />
        <div className="relativ_headline">
          <p>Movie Details</p>

          <h1>{movieDetail.title.substring(0, 22)}</h1>
          <div className="date_duration_genre">
            <img src={start} alt="star Icon" />
            <p>{movieDetail.vote_average.toFixed(1)}</p>
            <div className="punkt"></div>
            <p>{movieDetail.release_date}</p>
            <div className="punkt"></div>
            <p>{movieDetail.genres[0]?.name.substring(0, 9)}</p>
            <div className="punkt"></div>
            <p>{movieDetail.runtime} min</p>
          </div>
        </div>
      </section>
      <section className="movie_text_box">
        <div className="overview_wrapper">
          <h2>Overview</h2>
          <p className="overview_text">
            {showFullOverview ? movieDetail.overview : truncateOverview(movieDetail.overview)}
          </p>
          <span className="see_more" onClick={() => setShowFullOverview(!showFullOverview)}>
            {showFullOverview ? 'See less' : 'See more'}
          </span>
        </div>
        <section className="details_box">
          <div className="genre_box">
            <h3>Genre</h3>
            <div className="genre_name">
              <p>{movieDetail.genres[0]?.name}</p>
              <p>{movieDetail.genres[1]?.name}</p>
              <p>{movieDetail.genres[2]?.name}</p>
              <p>{movieDetail.genres[3]?.name}</p>
            </div>
          </div>

          <div className="language_box">
            <h3>Languages</h3>
            <div className="languages">
              <p>{movieDetail.spoken_languages[0]?.name}</p>
              <p>{movieDetail.spoken_languages[1]?.name}</p>
              <p>{movieDetail.spoken_languages[2]?.name}</p>
              <p>{movieDetail.spoken_languages[3]?.name}</p>
            </div>
          </div>
        </section>
        <div className="buttonbox">
          <Link to={`/trailer/${movieDetail.id}`}>
            <button type="button" className="button_red">
              Watch Trailer
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MovieDetails
