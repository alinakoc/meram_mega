import React from 'react';
import './Home.css';
import Calendar from './Calendar'; 
import './Calendar.css';

 const Home = () => {
  return (
    <div className="home">
       <h1 className="home-title">Bizim Meram için çalışıyoruz</h1>
      <p className="home-description">Mustafa KAVUŞ</p>
      
      

      <div className="image-gallery">
        <div className="image-item">
          <img src="https://www.meram.bel.tr/upload/medya/MRM_2444.jpg" alt="Placeholder" />
          <p className="image-description">Meramda Kış</p>
        </div>
        <div className="image-item">
          <img src="https://www.meram.bel.tr/upload/medya/847A8789_1.jpg" alt="Placeholder" />
          <p className="image-description">Meram Köprüsü</p>
        </div>
        <div className="image-item">
          <img src="https://www.meram.bel.tr/upload/medya/37623-2.jpg" alt="Placeholder" />
          <p className="image-description">4 Mevsim Meram</p>

          
        </div>

        
      </div>
      <Calendar />
      
    </div>
  );
};

export default Home;