import { useState } from "react";
import "./css/Services.css";

const services = [
  <div className="service-item-container" key={0}>
    <p>
      1 - Est aliqua ut proident duis ipsum sunt nulla aliqua cillum amet
      consequat magna qui. Est consectetur sit nostrud commodo duis qui eiusmod.
      Et irure officia et culpa duis eu mollit nostrud exercitation non nostrud
      non adipisicing non. Mollit do et occaecat sit. Eu ut esse laborum aliquip
      officia commodo. Ullamco esse elit dolor officia nulla ipsum irure elit
      Lorem. Nisi amet commodo eiusmod incididunt officia mollit commodo
      voluptate.
    </p>
  </div>,
  <div className="service-item-container" key={1}>
    <p>
      2 - Est aliqua ut proident duis ipsum sunt nulla aliqua cillum amet
      consequat magna qui. Est consectetur sit nostrud commodo duis qui eiusmod.
      Et irure officia et culpa duis eu mollit nostrud exercitation non nostrud
      non adipisicing non. Mollit do et occaecat sit. Eu ut esse laborum aliquip
      officia commodo. Ullamco esse elit dolor officia nulla ipsum irure elit
      Lorem. Nisi amet commodo eiusmod incididunt officia mollit commodo
      voluptate.
    </p>
  </div>,
  <div className="service-item-container" key={2}>
    <p>
      3 - Est aliqua ut proident duis ipsum sunt nulla aliqua cillum amet
      consequat magna qui. Est consectetur sit nostrud commodo duis qui eiusmod.
      Et irure officia et culpa duis eu mollit nostrud exercitation non nostrud
      non adipisicing non. Mollit do et occaecat sit. Eu ut esse laborum aliquip
      officia commodo. Ullamco esse elit dolor officia nulla ipsum irure elit
      Lorem. Nisi amet commodo eiusmod incididunt officia mollit commodo
      voluptate.
    </p>
  </div>,
];

export default function Services() {
  const [currentService, setCurrentService] = useState(0);

  const changeDisplay = (e) => {
    if (e.target.innerHTML === "Servicios") {
      setCurrentService(0);
    } else if (e.target.innerHTML === "Precios") {
      setCurrentService(1);
    } else {
      setCurrentService(2);
    }
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Nuestros Servicios</h1>
      <div className="services">
        <button onClick={changeDisplay}>Servicios</button>
        <button onClick={changeDisplay}>Precios</button>
        <button onClick={changeDisplay}>Sobre Nosotros</button>
      </div>
      {services[currentService]}
    </div>
  );
}
