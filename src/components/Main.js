/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import "./css/Main.css";
import Services from "./Services";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Main() {
  return (
    <div id="#main">
      <a id="linktoservices" href></a>
      <a href="https://wa.me/88888888" className="whatsapp" target="_blank">
        <AiOutlineWhatsApp className="whatsapp-logo" />
      </a>
      <Services />
    </div>
  );
}
