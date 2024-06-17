import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Landingpage.scss'
import movWhite from '../../../assets/img/movWhite.png'
import movBlack from '../../../assets/img/movBlack.png'

function Landingpage() {
  const [logo, setLogo] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // UseEffect is used to set the condition for redirection
    setTimeout(() => {
      // Set the timeout
      navigate('/getstarted') // Redirect path to '/home'
    }, 1900) // set time 2000ms which is equal to 2seconds
  }, [])

  useEffect(() => {
    const themeValue = localStorage.getItem('darkTheme')
    if (themeValue) {
      setLogo(movWhite)
    } else {
      setLogo(movBlack)
    }
  }, [])

  return (
    <section className="landingpagesection">
      <Link to={'/getstarted'}>
        <div className="logo">
          <img src={logo} alt="" className="pulsate" />
        </div>
      </Link>
    </section>
  )
}

export default Landingpage
