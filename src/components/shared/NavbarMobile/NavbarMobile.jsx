import React, { useState, useEffect } from 'react'
import './NavbarMobile.scss'
import Home from '../../../assets/img/home.svg'
import HomeRed from '../../../assets/img/homered.svg'
import Bookmark from '../../../assets/img/bookmark.svg'
import BookmarkRed from '../../../assets/img/bookmarkred.svg'
import Save from '../../../assets/img/save.svg'
import SaveRed from '../../../assets/img/savered.svg'
import Profile from '../../../assets/img/profile.svg'
import ProfileRed from '../../../assets/img/profilered.svg'
import { Link, useLocation } from 'react-router-dom'

function NavbarMobile() {
  const location = useLocation()
  const [isHomeActive, setIsHomeActive] = useState(false)
  const [isBookmarkActive, setIsBookmarkActive] = useState(false)
  const [isSaveActive, setIsSaveActive] = useState(false)
  const [isProfileActive, setIsProfileActive] = useState(false)

  const handleHomeClick = () => {
    setIsHomeActive(true)
    setIsBookmarkActive(false)
    setIsSaveActive(false)
    setIsProfileActive(false)
  }

  const handleBookmarkClick = () => {
    setIsHomeActive(false)
    setIsBookmarkActive(true)
    setIsSaveActive(false)
    setIsProfileActive(false)
  }

  const handleSaveClick = () => {
    setIsHomeActive(false)
    setIsBookmarkActive(false)
    setIsSaveActive(true)
    setIsProfileActive(false)
  }

  const handleProfileClick = () => {
    setIsHomeActive(false)
    setIsBookmarkActive(false)
    setIsSaveActive(false)
    setIsProfileActive(true)
  }

  useEffect(() => {
    if (location.pathname === '/home') {
      setIsHomeActive(true)
      setIsBookmarkActive(false)
      setIsSaveActive(false)
      setIsProfileActive(false)
    } else if (location.pathname === '/bookmark') {
      setIsHomeActive(false)
      setIsBookmarkActive(true)
      setIsSaveActive(false)
      setIsProfileActive(false)
    } else if (location.pathname === '/save') {
      setIsHomeActive(false)
      setIsBookmarkActive(false)
      setIsSaveActive(true)
      setIsProfileActive(false)
    } else if (location.pathname === '/profile') {
      setIsHomeActive(false)
      setIsBookmarkActive(false)
      setIsSaveActive(false)
      setIsProfileActive(true)
    } else {
      setIsHomeActive(false)
      setIsBookmarkActive(false)
      setIsSaveActive(false)
      setIsProfileActive(false)
    }
  }, [location])

  return (
    <section className="navbarmobilesection">
      <ul>
        <Link to={'/home'} onClick={handleHomeClick}>
          <li>
            <img src={isHomeActive ? HomeRed : Home} alt="Home Icon" />
          </li>
        </Link>

         
        <li onClick={handleBookmarkClick}>
          <Link to="/favorites">
          <img src={isBookmarkActive ? BookmarkRed : Bookmark} alt="Bookmark Icon" />
          </Link>

        </li>
        <li onClick={handleSaveClick}>
          <img src={isSaveActive ? SaveRed : Save} alt="save Icon" />
        </li>

        <li onClick={handleProfileClick}>
          <Link to="/profile">
            <img src={isProfileActive ? ProfileRed : Profile} alt="Profile Icon" />
          </Link>

        </li>
      </ul>
    </section>
  )
}

export default NavbarMobile
