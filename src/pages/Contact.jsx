import React from 'react';
import './Contact.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const logoUrl = '/logo.jpg';
  return (
    <div className="contact-container">
       <img src={logoUrl} alt="Logo" className="contact-logo"/>
      <h1 className="contact-title">İletişim</h1>

      {/* İletişim Formu */}
      <section className="contact-form-section">
        <form className="contact-form">
          <input type="text" placeholder="Adınız" required />
          <input type="email" placeholder="E-posta Adresiniz" required />
          <textarea placeholder="Mesajınız" required></textarea>
          <button type="submit">Gönder</button>
        </form>
      </section>


      <div className="social-media-links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} /> Facebook
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
      </div>

      {/* Adres ve İletişim Bilgileri */}
      <section className="contact-info-section">
        <div className="address-info">
          <h2>Adres</h2>
          <p>Yenişehir Mahallesi Azerbaycan Caddesi No: 5 42010 Meram / KONYA</p>
          <p><strong>Telefon:</strong> 444 3 042</p>
          <p><strong>E-posta:</strong> bizimmeram@meram.bel.tr</p>
        </div>

        {/* Sosyal Medya Bağlantıları */}
        <div className="social-media-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;