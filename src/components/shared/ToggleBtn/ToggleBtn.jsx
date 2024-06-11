import React, { useEffect, useState } from 'react'
import './ToggleBtn.scss'
import '@theme-toggles/react/css/Classic.css'
import { Classic } from '@theme-toggles/react'

function ToggleButton({ onClick }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    setIsChecked(prevChecked => !prevChecked)
    onClick()
  }

  useEffect(() => {
    setIsChecked(JSON.parse(localStorage.getItem('darkTheme')))
  }, [isChecked])

  return (
    <div className={`toggle-button-container ${isChecked ? 'checked' : ''}`}>
      {/*<div className={`button r ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>*/}
      {/*  // <input type="checkbox" className="checkbox" checked={isChecked} onChange={() => {}} />*/}
      {/*  // <input type="checkbox" className="checkbox" id="check" />*/}
      <Classic onToggle={handleToggle} toggled={isChecked} duration={750} />
    </div>
    // </div>
  )
}

export default ToggleButton
