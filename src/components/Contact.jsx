import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter top and move 150px over 1s">
          <div className="section-top">
            <div className="line-dark"></div>
            <h1>contact</h1>
            <div className="subtext-top">get in touch with us</div>
            <div className="line-dark1"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter bottom and move 250px over 1s">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: *
              <span className="error" id="err-name">please enter name</span>
            </label>
            <input name="name" id="name" type="text" value={formData.name} onChange={handleChange} required />
            <label htmlFor="email">E-Mail: *
              <span className="error" id="err-email">please enter e-mail</span>
              <span className="error" id="err-emailvld">e-mail is not a valid format</span>
            </label>
            <input name="email" id="email" type="email" value={formData.email} onChange={handleChange} required />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange}></textarea>
            <button className="send_message" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
