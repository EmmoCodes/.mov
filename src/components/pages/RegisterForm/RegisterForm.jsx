import React, { useEffect, useState } from 'react'
import './RegisterForm.scss'
import { Link } from 'react-router-dom'
import twitter from '../../../assets/img/twitter.svg'
import movWhite from '../../../assets/img/movWhite.png'
import movBlack from '../../../assets/img/movBlack.png'

function RegisterForm() {
  const [logo, setLogo] = useState('')

  useEffect(() => {
    const themeValue = localStorage.getItem('darkTheme')
    if (themeValue) {
      setLogo(movWhite)
    } else {
      setLogo(movBlack)
    }
  }, [])
  return (
    <section className="register_page">
      <img src={logo} alt="" className="logo" />
      <p>Create an Account</p>
      <form className="register_inputs">
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" placeholder="E-Mail..." />
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" placeholder="Username..." />
        <label htmlFor="firstname"></label>
        <input type="text" name="firstname" id="firstname" placeholder="Firstname..." />
        <label htmlFor="lastname"></label>
        <input type="text" name="lastname" id="lastname" placeholder="Lastname..." />
        <label htmlFor="password"></label>
        <input type="text" name="password" id="password" placeholder="Password..." />
      </form>
      <div className="register_buttons">
        <Link to="/home">
          <button className="button_red" type="button">
            Create
          </button>
        </Link>
      </div>
    </section>
  )
}

export default RegisterForm
