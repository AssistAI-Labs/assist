import React, { useState } from 'react'
import robotimg from '../../assets/robo.png'
import './style.css'
import TypingEffect from '../../components/TypingEffect'

const Home = () => {
  const [firstPartDone, setFirstPartDone] = useState(false);
  const [secondPartDone, setSecondPartDone] = useState(false);

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
      <TypingEffect text={"Welcome to the future of"} speed={100} callback={handleFirstPartComplete} />
      {firstPartDone && (
        <span className='highlight-text'>
          <TypingEffect text={" clean & carefree living!"} speed={100} callback={handleSecondPartComplete}/>
        </span>
      )}
    </div>
        {secondPartDone && (
        <div className={secondPartDone ? "sub-content show" : "sub-content"}>
          Get back to what matters most. Relax, recharge, and let your robots do the rest.
        </div>
      )}
      </div>

      <div className={secondPartDone ? "home-image-container show" : "home-image-container"}>
        <img src={robotimg} className="home-image"alt="Description" />
      </div>
    </div>
  )
}

export default Home