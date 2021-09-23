/* eslint-disable jsx-a11y/anchor-has-content */
import "./css/Form.css";
import { AiOutlineMail } from "react-icons/ai";

export default function Form() {
  const sendForm = (e) => {
    e.preventDefault();

    const name = document.getElementById("name_input").value;
    const email = document.getElementById("email_input").value;
    const telephone = document.getElementById("telephone_input").value;
    const subject = document.getElementById("subject_input").value;
    const message = document.getElementById("message_input").value;

    console.log(
      `Nombre: ${name} - Email: ${email} - Teléfono: ${telephone} - Asunto: ${subject} - Mensaje: ${message}`
    );
  };

  return (
    <div className="form-container">
      <a id="linktocontact" href="#linktocontact"></a>
      <div className="separator"></div>

      <a href="mailto:call4mefb@gmail.com" className="title-mail">
        <AiOutlineMail className="mail-icon" />
        <h1>Contacta con nosotros</h1>
      </a>
      <form id="contact-form" onSubmit={sendForm}>
        <div className="name">
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            id="name_input"
            required
          />
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email_input"
            required
          />
        </div>
        <div className="telephone">
          <input
            type="text"
            placeholder="Teléfono"
            name="telephone"
            id="telephone_input"
            required
          />
        </div>
        <div className="message">
          <textarea
            name="message"
            placeholder="¿En qué podemos ayudarte?"
            id="message_input"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <input type="submit" value="Enviar" id="form-button" />
      </form>
    </div>
  );
}
