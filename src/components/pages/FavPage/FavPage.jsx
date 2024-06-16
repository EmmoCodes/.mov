import React, { useContext } from 'react'
import { FavoritesContext } from '../../utils/Contexts/FavoritesContext.jsx'
import FavItem from '../../shared/FavItem/FavItem.jsx'
import '../MovieList/MovieList.scss'

function FavPage() {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  return (
    <section className="movie_wrapper">
      <article className="item_wrapper">
        {favorites.map(movie => (
          <FavItem key={movie.id} id={movie.id} movie={movie} />
        ))}
      </article>
    </section>
  )
}

export default FavPage
