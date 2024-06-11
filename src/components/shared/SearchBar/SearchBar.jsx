import React, { useContext, useEffect } from 'react'
import '../SearchBar/SearchBar.scss'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import lens from '../../../assets/img/vector.svg'
import { FilterContext } from '../../utils/Contexts/FilterContext.jsx'
import { InputContext } from '../../utils/Contexts/InputContext.jsx'
import { MovieContext } from '../../utils/Contexts/MovieContext.jsx'
import SearchModalItem from '../../pages/SearchModalItem/SearchModalItem.jsx'

function SearchBar() {
  const { handleGenreSearch } = useContext(FilterContext)
  const { handleInputSearch, handleSearch, inputSearch, setInputSearch } = useContext(InputContext)
  const { movieData } = useContext(MovieContext)
  const location = useLocation()
  const [searchFrame, setSearchFrame] = useState(false)
  const [focused, setFocused] = React.useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  useEffect(() => {
    if (inputSearch === '') {
      setSearchFrame(false)
      return
    }
    const searchTimeout = setTimeout(() => {
      if (inputSearch !== '') {
        setSearchFrame(true)
        handleSearch()
      }
    }, 300)
    return () => {
      clearTimeout(searchTimeout)
    }
  }, [inputSearch])

  return (
    <>
      <section className="searchbar_wrapper">
        <div className="search_bar">
          <div>
            <label htmlFor="search"></label>
            <input
              onFocus={onFocus}
              onBlur={onBlur}
              type="text"
              name="search"
              id="search"
              placeholder="Search Movie..."
              onChange={handleInputSearch}
              value={inputSearch}
              className="search_input"
            />
          </div>
        </div>
        {location.pathname !== '/home' && location.pathname !== '/popular' ? (
          <div className="genre_buttons">
            <NavLink
              to="/list"
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              <button className="button_red" type="button" value="28" onClick={handleGenreSearch}>
                Action
              </button>
            </NavLink>
            <NavLink
              to="/list"
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              <button className="button_red" value="35" onClick={handleGenreSearch}>
                Comedy
              </button>
            </NavLink>
            <NavLink
              to="/list"
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              <button className="button_red" value="27" onClick={handleGenreSearch}>
                Horror
              </button>
            </NavLink>
          </div>
        ) : null}
        {location.pathname === '/home' || location.pathname === '/popular' ? (
          <div className="movie_list_buttoncontainer">
            <NavLink to="/list">
              <button type="button" className="button_red">
                Browse all
              </button>
            </NavLink>
          </div>
        ) : null}
        {location.pathname === '/home' ? (
          <>
            <section className={searchFrame && focused ? 'searched_movie_frame' : 'hide'}>
              {movieData.map(movie => (
                <SearchModalItem key={movie.id} movie={movie} id={movie.id} />
              ))}
            </section>
          </>
        ) : null}
      </section>
    </>
  )
}

export default SearchBar
