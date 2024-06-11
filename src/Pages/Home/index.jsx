import React, { useState } from 'react'
import robotimg from '../../assets/robo14.png'
import './style.css'
import TypingEffect from '../../components/TypingEffect'

const Home = () => {
  const [firstPartDone, setFirstPartDone] = useState(true);
  const [secondPartDone, setSecondPartDone] = useState(true);

  const handleFirstPartComplete = () => {
    setFirstPartDone(true);
  };

  const handleSecondPartComplete = () => {
    setSecondPartDone(true);
  };
  return (
    <div className='home-section'>
      <div className='home-content-container'>
      <div className='main-heading'>
      {/* <TypingEffect text={"Welcome to the future of"} callback={handleFirstPartComplete} />
      {firstPartDone && (
        <span className='highlight-text'>
          <TypingEffect text={" clean & carefree living!"} callback={handleSecondPartComplete}/>
        </span>
      )} */}
      Welcome to the future of&nbsp;
      <span className='highlight-text'>
          clean & carefree living!
        </span>
    </div>
        {secondPartDone && (
        <div className={secondPartDone ? "sub-content show" : "sub-content"}>
          Get back to what matters most. Relax, recharge, and let your robots do the rest.
        </div>
      )}
      </div>

      <div className='home-buttons-container'>
        <button className='home-button-explore'>Explore</button>
        <button className='home-button-contact'>Contact us</button>
      </div>

      <div className={secondPartDone ? "home-image-container show" : "home-image-container"}>
        <div className='home-image-background'>
          <img src={robotimg} className="home-image"alt="Description" />
        </div>
      </div>
    </div>
  )
}

export default Home