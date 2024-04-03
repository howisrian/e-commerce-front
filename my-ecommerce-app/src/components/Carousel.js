import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './../assets/styles/Carousel.css'; 

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src="./../assets/img/produto1.jpg" alt="Imagem 1" />
          <div className="carousel-caption">
            <h3>Título da Imagem 1</h3>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="./../assets/img/produto1.jpg" alt="Imagem 2" />
          <div className="carousel-caption">
            <h3>Título da Imagem 2</h3>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="./../assets/img/produto1.jpg" alt="Imagem 3" />
          <div className="carousel-caption">
            <h3>Título da Imagem 3</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;