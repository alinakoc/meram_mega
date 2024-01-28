import React from 'react';
import './About.css'; 

const About = () => {
  
  return (
    <div className="about-container">
      <h1 className="about-title">Hakkımızda</h1>
      

      <section className="about-intro">
        
        <img src="https://www.emlaksayfasi.com.tr/images/resize/90/625x325/haberler/2019/10/meram_belediye_baskani_mustafa_kavus_kimdir_h78443_8a7a3.jpg" alt="Ekibimiz" className="about-image"/>
        <p>
          2004 yılında Konya Büyükşehir Belediyesi Başkanlık danışmanlığına getirilen KAVUŞ, 2006’da Teftiş Kurulu Müfettişliği’ne atandı. 2009 yılında getirildiği Teftiş Kurulu Başkanlığını 2018 yılına kadar sürdürdü. Çevre ve Şehircilik Bakanlığı’nda Bakan Müşaviri olarak görev yapmakta iken aday adaylığı başvurusu için istifa etti.
        </p>
      </section>

      <section className="projects">
        <h2>Projeler</h2>
        <div className="projects-container">
          <div className="project">
            <h3>10 Adet Açık Halı Saha Yapımı</h3>
            <p>Status: Tamamlanan</p>
          </div>
          <div className="project">
            <h3>Meram Yaka Sosyal Tesisi</h3>
            <p>Status: Devam Eden</p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Hizmetlerimiz</h2>
          <ul>
            <a href= "hizmetler"><li>İyi Ki Doğdun Bebek Formu</li></a>
            <a href= "hizmetler"><li>Evlilik İşlemleri</li></a>
            <a href= "hizmetler"><li>Lisans İşlemleri</li></a>
            <a href= "hizmetler"><li>Vergi Hizmetleri</li></a>
          </ul>
        </div>
        <div className="vision">
          <h2>Bilgilendirme</h2>
          <ul>
          <a href= "Bilgilendirme"><li>Haberler</li></a>
          <a href= "Bilgilendirme"><li>Duyurular</li></a>
          <a href= "Bilgilendirme"><li>Dosyalar</li></a>
          <a href= "Bilgilendirme"><li>Haber Arşivi</li></a>
          </ul>
        </div>
      </section>

    </div>
  );
};
export default About;