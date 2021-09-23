import React, { useState, useEffect } from "react";
import "./css/Carousel.css";

const slides = [
  <div className="slide" key={0}>
    <div className="slide-text">
      <h1>1 - Esse dolore voluptate ipsum irure sint quis excepteur irure.</h1>
      <p>
        Ea excepteur in commodo id cillum sunt excepteur adipisicing labore non.
        Labore adipisicing ipsum anim magna ex incididunt. Id veniam pariatur
        enim aute enim nulla reprehenderit voluptate sunt non in reprehenderit
        exercitation. Eu sit excepteur ipsum quis ea est.
      </p>
    </div>
    <div className="slide-image">
      <img alt="" src="carretera.png" />
    </div>
  </div>,
  <div className="slide left" key={1}>
    <div className="slide-image">
      <img alt="" src="frente.png" />
    </div>
    <div className="slide-text">
      <h1>2 - Esse dolore voluptate ipsum irure sint quis excepteur irure.</h1>
      <p>
        Ea excepteur in commodo id cillum sunt excepteur adipisicing labore non.
        Labore adipisicing ipsum anim magna ex incididunt. Id veniam pariatur
        enim aute enim nulla reprehenderit voluptate sunt non in reprehenderit
        exercitation. Eu sit excepteur ipsum quis ea est.
      </p>
    </div>
  </div>,
  <div className="slide" key={2}>
    <div className="slide-text">
      <h1>3 - Esse dolore voluptate ipsum irure sint quis excepteur irure.</h1>
      <p>
        Ea excepteur in commodo id cillum sunt excepteur adipisicing labore non.
        Labore adipisicing ipsum anim magna ex incididunt. Id veniam pariatur
        enim aute enim nulla reprehenderit voluptate sunt non in reprehenderit
        exercitation. Eu sit excepteur ipsum quis ea est.
      </p>
    </div>
    <div className="slide-image">
      <img alt="" src="interior.png" />
    </div>
  </div>,
  <div className="slide left" key={3}>
    <div className="slide-image">
      <img alt="" src="playa.png" />
    </div>
    <div className="slide-text">
      <h1>4 - Esse dolore voluptate ipsum irure sint quis excepteur irure.</h1>
      <p>
        Ea excepteur in commodo id cillum sunt excepteur adipisicing labore non.
        Labore adipisicing ipsum anim magna ex incididunt. Id veniam pariatur
        enim aute enim nulla reprehenderit voluptate sunt non in reprehenderit
        exercitation. Eu sit excepteur ipsum quis ea est.
      </p>
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
    }, 4000);

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
