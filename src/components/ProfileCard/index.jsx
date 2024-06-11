import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './style.css'

const ProfileCard = ({picture, name, link1 , link2}) => {
  return (
    <div className='profile-box'>
      <div className='profile-image-div'>
        <img src={picture} alt="" />
      </div>
      <div className="profile-name">
        {name}
      </div>
      <div className="profile-buttons">
        <FaLinkedin className='icon' />
        <FaGithub className='icon'/>
      </div>
    </div>
  )
}

export default ProfileCard