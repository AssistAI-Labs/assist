import React from 'react'
import ProfileCard from '../../components/ProfileCard'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'
import './style.css'

const OurTeam = () => {
  return (
    <div className='team-section'>
      <div className='team-heading'>
        Meet our team
      </div>
      <div className='team-container'>
        <ProfileCard picture={profile1} name={'Gaurika Gupta'}/>
        <ProfileCard picture={profile2} name={'Harshit Aggarwal'}/>
        <ProfileCard picture={profile3} name={'Kunal Baghel'}/>
      </div>
    </div>
  )
}

export default OurTeam