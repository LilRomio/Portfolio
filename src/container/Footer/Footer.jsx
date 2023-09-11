import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:popescu.romeo9@gmail.com" className="p-text">
            popescu.romeo9@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +40 (753) 380 101" className="p-text">
            +40 (753) 380 101
          </a>
        </div>
      </div>
     {!isFormSubmitted ? (
        <form
          className="app__footer-form app__flex"
          target="_blank"
          action="https://formsubmit.co/popescu.romeo9@gmail.com"
          method="POST"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Nume"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
         
          <div>
            <textarea
              className="p-text"
              placeholder="Mesajul tau"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>

         
          {true ? (
            <button className="p-text">{'Trimite Mesaj'}</button>
          ) : (
            <button type="submit" className="p-text" onClick={handleSubmit}>
              {loading ? 'Se trimite' : 'Trimite Mesaj'}
            </button>
          )}
        </form>
      ) : (
        <div>
          <h3 className="head-text">Multumim pentru mesaj!</h3>
        </div>
      )}

      <div className="copyright">
        <p className="p-text">@2023 ROMEO</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');
