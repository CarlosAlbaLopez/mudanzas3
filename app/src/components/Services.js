import { useState } from "react";
import "./css/Services.css";

const services = [
  <div className="service-item-container" key={0}>
    <div>
      <h3>Con mas de diez años de experiencia en el sector ofrecemos:</h3>
      <p>
        Embalaje, transporte, almacenaje, montaje y desmontaje en todos nuestros
        servicios.
      </p>
      <p>Porte local desde 20€ carga y descarga incluida.</p>
      <p>Porte nacional o internacional desde 1€/kg.</p>
      <p>Presupuesto y tasacion sin compromiso.</p>
      <p>Mudanza desde 40€/hora 2 personas.</p>
      <p>Seriedad, experiencia y confianza.</p>
    </div>
  </div>,
  <div className="service-item-container" key={1}>
    <div>
      <h3>
        Aprovecha nuestras rutas activas para obtener descuentos inmejorables.
      </h3>
      <p>
        Galicia - Asturias - Cantabria - Castilla y León - Madrid - País Vasco -
        Navarra - La Rioja - Aragón - Valencia - Murcia - Andalucía -
        Extremadura - Castilla la Mancha
      </p>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="maps"
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=spain&t=&z=5&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
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
    } else if (e.target.innerHTML === "Rutas") {
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
        <button onClick={changeDisplay}>Rutas</button>
        <button onClick={changeDisplay}>Sobre Nosotros</button>
      </div>
      {services[currentService]}
    </div>
  );
}
