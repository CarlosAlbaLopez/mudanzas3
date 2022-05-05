import React, { useState, useEffect } from "react";
import "./css/Carousel.css";

const slides = [
  <div className="slide" key={0}>
    <div className="slide-text">
      <h1>1 - Mudanzas.</h1>
      <p>
        Servicio integral de empaquetamiento, transporte, almacenaje, montaje y
        desmontaje. Con sedes en Galicia y Madrid.
      </p>
    </div>
    <div className="slide-image">
      <img alt="" src="IMG-20220112-WA0003.jpg" />
    </div>
  </div>,
  <div className="slide left" key={1}>
    <div className="slide-image">
      <img alt="" src="IMG-20220112-WA0005.jpg" />
    </div>
    <div className="slide-text">
      <h1>2 - Portes.</h1>
      <div>
        <p>Más de 5000 servicios en todo el territorio nacional.</p>
        <p>Recogidas, envíos y entregas express.</p>
      </div>
    </div>
  </div>,
  <div className="slide" key={2}>
    <div className="slide-text">
      <h1>3 - Montaje y desmontaje de muebles.</h1>
      <p>En todos nuestros transportes facilitamos este servicio.</p>
    </div>
    <div className="slide-image">
      <img alt="" src="IMG-20220112-WA0004.jpg" />
    </div>
  </div>,
  <div className="slide left" key={3}>
    <div className="slide-image">
      <img alt="" src="IMG-20220112-WA0005.jpg" />
    </div>
    <div className="slide-text">
      <h1>4 - Servicio internacional.</h1>
      <p>Con más de diez años de experiencia el sector.</p>
    </div>
  </div>,
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (currentSlide === 3) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prevState) => prevState + 1);
      }
    }, 5500);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const handleBackbtn = () => {
    if (currentSlide === 0) {
      setCurrentSlide(3);
    } else {
      setCurrentSlide((prevState) => prevState - 1);
    }
  };

  const handleForwardbtn = () => {
    if (currentSlide === 3) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevState) => prevState + 1);
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="backbtn" onClick={handleBackbtn}>
        &#x21e6;
      </button>
      {slides[currentSlide]}
      <button className="forwardbtn" onClick={handleForwardbtn}>
        &#x21e8;
      </button>
    </div>
  );
}
