import React from 'react'
import './style.css'

const ContactUs = () => {
  return (
    <div className='contact-section' >
      <div className='contact-heading'>
      Let&apos;s   Connect and  navigate <br />your life goals
      </div>
      <div className='contact-content'>
      I&apos;m here to listen and help you achieve your dreams. <br />
      Schedule your call today.
      </div>
      <div className='contact-form-container'>
        <div className='contact-form'>
          <label className='form-label'>Name : </label>
          <input type="text" placeholder='Name' className='form-input'/>
          <label className='form-label'>Email : </label>
          <input type="email" placeholder='Email' className='form-input'/>
          <label className='form-label'>Message : </label>
          <input type="text" placeholder='Message' className='form-input'/>
          <button className='submit-btn'>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs