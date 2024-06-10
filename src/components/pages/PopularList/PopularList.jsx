import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../../utils/Contexts/MovieContext.jsx'
import { FilterContext } from '../../utils/Contexts/FilterContext.jsx'
import { InputContext } from '../../utils/Contexts/InputContext.jsx'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'
import { apiKey } from '../../../data/api.js'
import SearchBar from '../../shared/SearchBar/SearchBar.jsx'
import MovieItem from '../../shared/MovieItem/MovieItem.jsx'
import button from '../../../assets/img/backbuttondetails.svg'
import LoadingAnime from '../../shared/LoadingAnime/LoadingAnime.jsx'
import NavbarMobile from '../../shared/NavbarMobile/NavbarMobile.jsx'

function PopularList() {
  const { movieData, setMovieData } = useContext(MovieContext)
  const [loading, setLoading] = useState(false)
  const { genreValue } = useContext(FilterContext)
  const { inputSearch, handleSearch } = useContext(InputContext)

  useEffect(() => {
    setLoading(true)
    getAllMovies(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`,
      setMovieData,
      'results',
    )
    const searchTimeout = setTimeout(() => {
      if (inputSearch !== undefined) {
        handleSearch()
      }
    }, 300)
    clearTimeout(searchTimeout)

    setLoading(false)
  }, [genreValue])

  if (loading === true) {
    return <LoadingAnime />
  }

  return (
    <>
      <section className="movie_wrapper">
        <SearchBar />
        <article className="item_wrapper">
          {movieData.map(movie => (
            <MovieItem key={movie.id} movie={movie} id={movie.id} />
          ))}
        </article>
        <div className="scroll_to_topbutton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={button} alt="button icon" />
        </div>
      </section>
      <NavbarMobile />
    </>
  )
}

export default PopularList
