import React from 'react'
import { Link } from 'react-router-dom'
import './Landingpage.scss'
import logo from '../../../assets/img/njetflix.png'

function Landingpage() {
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
