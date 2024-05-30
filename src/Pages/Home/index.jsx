import React from 'react'
import robotimg from '../../assets/robo16.png'
import './style.css'

const Home = () => {
  
  return (
    <div className='section' id='home'>
      <div className='home-text'>
        <div className='intro-heading'>
          Welcome to the future of clean & carefree living! 
        </div>
        <div className='sub-text'>
          Get back to what matters most. Relax, recharge, and let your robots do the rest.
        </div>
      </div>
      <div className='glow-container'>
        <img src={robotimg} alt="" className='glowing-image'/>
      </div>
    </div>
  )
}

export default Home