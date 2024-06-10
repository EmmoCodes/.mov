import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import punkt from '../../../assets/img/Ellipse.svg'
import '../../pages/MovieList/MovieList.scss'
import { FavoritesContext } from '../../utils/Contexts/FavoritesContext.jsx'

function FavItem({ movie }) {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  console.log(favorites)

  return (
    <div className="movie_frame">
      <Link to={`/details/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
      </Link>
      <div className="movie_frame_text">
        <div className="frame_text_headline">
          <h1>{movie.title.substring(0, 20)}</h1>
        </div>
        <button
          onClick={event => {
            setFavorites(prev =>
              prev.filter(favorites => {
                return favorites.id !== movie.id
              }),
            )
          }}
          className="remove_fav">
          {' '}
          remove from favorites
        </button>
      </div>
    </div>
  )
}

export default FavItem
