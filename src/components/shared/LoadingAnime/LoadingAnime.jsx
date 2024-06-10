import React from "react";
import './LoadingAnime.scss'

const LoadingAnime = () => {
  return (
    <div className="loading-anime">
      <div className="loader">
        <div className="loader__filmstrip"></div>
        <p className="loader__text">loading</p>
      </div>
    </div>
  )
}

export default LoadingAnime;