import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ScrollToTopButton } from "../../elements/Buttons/Button";
import { Footer } from "../../elements/Footer/Footer";
import "./ContactPage.scss";

export const ContactPage = () => {
  return (
    <div className="contact-page" id="contact">
      <h1 className="contact-page-title">Get in touch</h1>
      <div className="contact-page-columns">
        <ContactForm />
        <div className="contact-page-social-section">
          <h1 className="contact-page-social-section-title">How can I help?</h1>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>GitHub</span>
          <span>Email: </span>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};
