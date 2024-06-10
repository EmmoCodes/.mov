import React, { useState } from 'react'
import './ProfilePage.scss'
import profileimg from '../../../assets/img/profilepic.jpg'
import settings from '../../../assets/img/settings.png'
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
        <h2>Helmut Rakete</h2>
        <h3>Los Angeles</h3>
      </div>
      <div className="account_stats">
        <div>
          <h4>Watchtime</h4>
          <p>61,2hrs</p>
        </div>
        <div></div>
        <div>
          <h4>Abo Level</h4>
          <p>Level 2 / 3</p>
        </div>
      </div>
      <img
        onClick={() => {
          setShowSettings(!showSettings)
        }}
        className="settings_icon"
        src={settings}
        alt=""
      />
      <ul className={showSettings ? 'profile_settings' : 'hide'}>
        <li>change profile settings</li>
        <li>change privacy settings</li>
        <li>see abo details</li>
        <li>change Abo plan</li>
        <li>application settings</li>
        <li>add payment method</li>
        <li>cancel membership</li>
      </ul>
      <div className="list_section_headline">
        <h4>Your Lists</h4>
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
