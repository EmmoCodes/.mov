import React from 'react'
import '../GetStarted/GetStarted.scss'
import getStartedImg1 from '../../../assets/img/getStarted1.png'
import getStartedImg2 from '../../../assets/img/getStarted2.png'
import { Link } from 'react-router-dom'

function GetStarted() {
  return (
    <section className="get_started">
      <div className="img_background">
        <div className="get_started_img">
          <img src={getStartedImg2} alt="" />
          <img src={getStartedImg1} alt="" />
        </div>
      </div>
      <div className="get_started_text">
        <h1>Enjoy Your Movie Watch Everywhere</h1>
        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
        <Link to="/login">
          <button>Get Started</button>
        </Link>
      </div>
    </section>
  )
}

export default GetStarted
