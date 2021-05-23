import { DefaultButton } from "../../elements/Buttons/Button";
import "./ContactForm.scss";

export const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1 className="contact-form-title">Send Me a Message</h1>
      <input type="text" className="contact-form-name" placeholder="Name" />
      <input
        type="email"
        className="contact-form-email"
        placeholder="E-mail"
        required={true}
      />
      <input
        type="text"
        className="contact-form-message"
        placeholder="Your message"
      />
      <DefaultButton>Send</DefaultButton>
    </div>
  );
};
