import React, { useState } from 'react'
import './ProfilePage.scss'
import profileimg from '../../../assets/img/profilepic.jpg'
import settings from '../../../assets/img/settings.svg'
import addlist from '../../../assets/img/addlist.png'
import anime from '../../../assets/img/anime.jpg'
import demonslayer from '../../../assets/img/demonslayer.png'

function ProfilePage() {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <section className="profile_section">
      <div className="profile_background">
        <img className="profile_img" src={profileimg} alt="" />
      </div>
      <div className="user_data">
        <p>Helmut Rakete</p>
        <p>Los Angeles</p>
      </div>
      <div className="account_stats">
        <div>
          <p>Watchtime</p>
          <p>61.2 hrs</p>
        </div>
        <div></div>
        <div>
          <p>Saved Movies</p>
          <p>13</p>
        </div>
      </div>
      <div
        onClick={() => {
          setShowSettings(!showSettings)
        }}
        className="settings_icon"
      />
      <ul className={showSettings ? 'profile_settings' : 'hide'}>
        <li>Change profile settings</li>
        <li>Change privacy settings</li>
        <li>Application settings</li>
        <li>Logout</li>
      </ul>
      <div className="list_section_headline">
        <p>Your Lists</p>
      </div>
      <section className="list_section">
        <img className="anime" src={anime} alt="" />
        <img className="anime" src={demonslayer} alt="" />
      </section>
      <div>
        <img className="add_list" src={addlist} alt="" />
      </div>
    </section>
  )
}

export default ProfilePage
