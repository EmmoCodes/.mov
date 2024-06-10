import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { apiKey } from '../../../data/api.js'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'
import button from '../../../assets/img/backbuttondetails.svg'
import punkt from '../../../assets/img/Ellipse.svg'
import start from '../../../assets/img/polygon.svg'
import './MovieDetails.scss'
import LoadingAnime from '../../shared/LoadingAnime/LoadingAnime.jsx'

const MovieDetails = () => {
  const [showFullOverview, setShowFullOverview] = useState(false)
  const [movieDetail, setMovieDetail] = useState({})
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    getAllMovies(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`, setMovieDetail)
  }, [params.id])

  if (!movieDetail.id) {
    return <LoadingAnime/>
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
      <div className="backbutton">
        <img src={button} alt="" onClick={() => navigate(-1)} />
      </div>

      <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt="Photo" className="mainimg" />
      <div className="relativ_headline">
        <p>Movie Details</p>
        <h1>{movieDetail.title.substring(0, 30)}</h1>
        <div className="date_duration_genre">
          <img src={start} alt="star Icon" />
          <p>{movieDetail.vote_average.toFixed(1)}</p>
          <div className="punkt"></div>
          <p>{movieDetail.release_date}</p>
          <div className="punkt"></div>
          <p>{movieDetail.genres[0]?.name}</p>
          <div className="punkt"></div>
          <p>{movieDetail.runtime} min</p>
        </div>
      </div>
      <section className="movie_text_box">
        <div className="overview_wrapper">
          <h2>Overview</h2>
          <p>{showFullOverview ? movieDetail.overview : truncateOverview(movieDetail.overview)}</p>

          <span className="see_more" onClick={() => setShowFullOverview(!showFullOverview)}>
            {showFullOverview ? 'See less' : 'See more'}
          </span>
        </div>
        <section className="genere_language_box">
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
      </section>
      <div className="buttonbox">
        <Link to={`/trailer/${movieDetail.id}`}>
          <button type="button" className="watch_movie_button">
            Watch Trailer
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MovieDetails
