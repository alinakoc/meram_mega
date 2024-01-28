import React from 'react';
import './Services.css';

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} className="service-image" />
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <button className="service-more-btn">Daha Fazla</button>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Hizmetlerimiz</h1>
      <p className="services-intro">
        Profesyonel ekibimizle birlikte sunduğumuz yüksek kaliteli hizmetler.
      </p>
      <div className="services-list">
        
        <ServiceCard 
          title="İyi ki doğdun bebek" 
          description="Yeni doğan kayıt işlemi" 
          imageUrl="https://avita.com.tr/asset/image/website/corporate/blog/yenidogan-bakiminda-bilinmesi-gerekenler.jpg"
        />
        
          </div>
          <div className="services-list">
        
        <ServiceCard 
          title="Evlilik İşlemleri" 
          description="NOT:
          Bilgi için Tel : 0332 323 96 70" 
          imageUrl="https://blog.asligold.com/wp-content/uploads/2020/05/evlilik-teklifi-icin-yuzuk-secimi-nasil-yapilir.jpg"
        />
        
          </div>
          
          <div className="services-list">
      
        <ServiceCard 
          title="Arabuluculuk" 
          description="Birim Adı:
          Hukuk İşleri Müdürlüğü
          Birim Adresi:
          Yenişehir Mahallesi Azerbaycan Cadddesi No: 5 Meram / KONYA (Meram Belediyesi Hizmet Binası, Kat : 3 Hukuk İşleri Müdürlüğü)
          Telefon:
          0332 320 10 00
          E Posta:
          hukuk@meram.bel.tr" 
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvplKFYGjsTv_r33IZILz2-EOcqTLQM9Xi-g&usqp=CAU"
        />
        
      </div>
      
    </div>
  );
};

export default Services;