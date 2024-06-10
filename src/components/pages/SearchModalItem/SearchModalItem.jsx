import React from 'react'
import { Link } from 'react-router-dom'
import './SearchModalItem.scss'

function SearchModalItem({ movie }) {
  return (
    <div className="movie_frame_list">
      <Link to={`/details/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
      </Link>
      <div className="modal_movie_text">
        <h2>{movie.title.substring(0, 30)}</h2>
        <p>{movie?.genre}</p>
      </div>
    </div>
  )
}

export default SearchModalItem
