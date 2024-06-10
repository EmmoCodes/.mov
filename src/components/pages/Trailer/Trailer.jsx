import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'
import { apiKey } from '../../../data/api.js'
import './Trailer.scss'
import trailer from '../../../assets/img/watchtrailer.png'
import notrailer from '../../../assets/img/notrailer.png'
import button from '../../../assets/img/backbuttondetails.svg'
import cinema from '../../../assets/img/cinema.jpg'

function Trailer() {
  const [trailerData, setTrailerData] = useState([])
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getAllMovies(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${apiKey}`, setTrailerData, 'results')
  }, [params.id])

  let trailerKey = ''

  trailerData.forEach(item => {
    if (
      item.name === 'Official Trailer' ||
      item.name === 'Trailer' ||
      item.type === 'Trailer' ||
      item.type === 'Clip'
    ) {
      trailerKey = item.key
    }
  })

  // if (!trailerData.id) {
  //   return <p>Is Loading...</p>
  // }
  console.log(trailerData)

  return (
    <>
      <div className="backbutton">
        <img src={button} alt="" onClick={() => navigate(-1)} />
      </div>
      <section className="trailer_section">
        <img className="watch_trailer" src={trailer} alt="" />
        <div className="trailer_box">
          {trailerKey ? (
            <iframe
              title="Movie Trailer"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allowFullScreen
              frameBorder="0"
              ></iframe>
          ) : (
            <img className="no_trailer" src={notrailer} alt="" />
          )}
        </div>
      </section>
    </>
  )
}

export default Trailer
