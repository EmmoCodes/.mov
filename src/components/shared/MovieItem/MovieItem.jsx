import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import star from '../../../assets/img/polygon.svg'
import bookmark from '../../../assets/img/bookmark.svg'
import bookmarkred from '../../../assets/img/bookmarkred.svg'
import punkt from '../../../assets/img/Ellipse.svg'
import { apiKey } from '../../../data/api.js'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'
import { FilterContext } from '../../utils/Contexts/FilterContext.jsx'
import { FavoritesContext } from '../../utils/Contexts/FavoritesContext.jsx'
import LoadingAnime from '../LoadingAnime/LoadingAnime'

function MovieItem({ movie }) {
  const [movieId, setMovieId] = useState(movie.id)
  const [movieDetails, setMovieDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const { favorites, setFavorites } = useContext(FavoritesContext)
  const { genreValue, genreActive } = useContext(FilterContext)
  const isFavorite = !!favorites.find(favorite => {
    return favorite.id === movie.id
  })

  useEffect(() => {
    setLoading(true)
    getAllMovies(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, setMovieDetails).then(() => {
      setLoading(false)
    })
  }, [genreValue])

  if (loading === true) {
    return  <LoadingAnime/>
  }

  return (
    <div className="movie_frame">
      <Link to={`/details/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
      </Link>
      <div className="movie_frame_text">
        <div className="frame_text_headline">
          <h1>{movie.title.substring(0, 20)}</h1>
          <img
            className="bookmark"
            onClick={() => {
              const foundMovie = favorites.find(favorite => {
                return favorite.id === movie.id
              })
              if (!foundMovie) {
                setFavorites(prev => [...prev, movie])
                return
              }
              if (foundMovie) {
                setFavorites(prev => prev.filter(favorites => favorites.id !== movie.id))
                console.log('already added')
                return
              }
            }}
            src={isFavorite ? bookmarkred : bookmark}
            alt="Bookmark Icon"
          />
        </div>
        <div className="frame_text_info">
          <p>
            <span className="imdb"></span>
            {movie.vote_average.toFixed(1)}
            <span className="punkt"></span>
          </p>
          <p>
            {movie.release_date.slice(0, 4)}
            <span className="punkt"></span>
          </p>
          <p>
            {genreActive
              ? movieDetails.genres.find(genre => genre.id === Number(genreValue))?.name.substring(0, 9)
              : movieDetails.genres[0]
              ? movieDetails.genres[0].name.substring(0, 9)
              : 'n.A.'}
            <span className="punkt"></span>
          </p>
          <p>{movieDetails.runtime} m</p>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
