import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './../assets/styles/Carousel.css'; 
import imgProduto1 from './../assets/img/produto1.jpg';
import imgProduto2 from './../assets/img/produto2.jpg';
import imgProduto3 from './../assets/img/produto3.jpg';
import imgProduto4 from './../assets/img/produto4.jpg';
import imgProduto5 from './../assets/img/produto5.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="carousel-container">
      <h2>Promoções do Dia</h2>
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={imgProduto1} alt="Imagem 1" />
          <div className="carousel-caption">
            <h3>Título da Imagem 1</h3>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={imgProduto2} alt="Imagem 2" />
          <div className="carousel-caption">
            <h3>Título da Imagem 2</h3>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={imgProduto3} alt="Imagem 3" />
          <div className="carousel-caption">
            <h3>Título da Imagem 3</h3>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={imgProduto4} alt="Imagem 4" />
          <div className="carousel-caption">
            <h3>Título da Imagem 4</h3>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={imgProduto5} alt="Imagem 5" />
          <div className="carousel-caption">
            <h3>Título da Imagem 5</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;