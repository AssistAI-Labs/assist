import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async(e) => {
  //   e.preventDefault();

  //   const formBody = new FormData();
  //   formBody.append('entry.256161788', formData.name);
  //   formBody.append('entry.2028599109', formData.email);
  //   formBody.append('entry.1635918990', formData.message);

  //   const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_Qx9YMZLilYxPVNkC7egNd0xlTTn2nthMSc2yJZjybtWYsw/formResponse';

  //   try {
  //     const response = await axios.post(formUrl, formBody);
  //     console.log('Form submission successful:', response.data);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       message: ''
  //     })
  //   } catch (error) {
  //     console.error('Form submission failed:', error);
  //   }

  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_Qx9YMZLilYxPVNkC7egNd0xlTTn2nthMSc2yJZjybtWYsw/formResponse'

  //   const formBody = new FormData();
  //   formBody.append('entry.256161788', formData.name);    // Replace with your actual field names
  //   formBody.append('entry.2028599109', formData.email);   // Replace with your actual field names
  //   formBody.append('entry.1635918990', formData.message); // Replace with your actual field names

  //   fetch(formUrl, {
  //     method: 'POST',
  //     body: formBody
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       alert('Form submitted successfully');
  //       setFormData({
  //         name: '',
  //         email: '',
  //         message: ''
  //       });
  //     } else {
  //       alert('Form submission failed');
  //     }
  //   })
  //   .catch(error => {
  //     alert('Form submission failed');
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formEndpoint = "https://formspree.io/f/xgeggngl";

    fetch(formEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          alert("Form submission failed");
        }
      })
      .catch((error) => {
        alert("Form submission failed");
      });
  };

  return (
    <div className="contact-section">
      <div className="contact-heading">
        Let&apos;s Connect and navigate <br />
        your life goals
      </div>
      <div className="contact-content">
        I&apos;m here to listen and help you achieve your dreams. <br />
        Schedule your call today.
      </div>
      <div className="contact-form-container">
        <div className="contact-form">
          <label className="form-label">Name : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-input"
            required
          />
          <label className="form-label">Email : </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-input"
            required
          />
          <label className="form-label">Message : </label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="form-input"
            required
          />
          <button className="submit-btn" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
