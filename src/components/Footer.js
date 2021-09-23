import "./css/Footer.css";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer-container">
      <div id="logo-nomada-container">
        <img id="logo" src="logo-completo.png" alt="logo"></img>
      </div>
      <div className="logos-container">
        <SiFacebook className="logo-red-social"></SiFacebook>
        <SiInstagram className="logo-red-social"></SiInstagram>
      </div>
      <div className="legal-container">
        <a href="#aviso">Aviso Legal</a>
        <a href="#politica">Política de Privacidad</a>
      </div>
      <p className="copyright">NOMADA LOGISTICA © 2021</p>
    </div>
  );
}
