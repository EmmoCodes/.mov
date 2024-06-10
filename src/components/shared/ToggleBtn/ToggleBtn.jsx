import React, { useState } from 'react'
import './ToggleBtn.scss' 

function ToggleButton({ onClick }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    setIsChecked(prevChecked => !prevChecked)
    onClick()
  }

  return (
    <div className={`toggle-button-container ${isChecked ? 'checked' : ''}`}>
      <div className={`button r ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
        <input type="checkbox" className="checkbox" checked={isChecked} onChange={() => {}} />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </div>
  )
}

export default ToggleButton
