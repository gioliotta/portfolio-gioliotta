import "../styles/contact.css";
import BackArrow from "../components/BackArrow";
import Background from "../components/Background";
import ContactItems from "../components/ContactItems";

import { BsLinkedin as linkedin } from "react-icons/bs";
import { BsGithub as github } from "react-icons/bs";
import { MdEmail as email } from "react-icons/md";

function Contact() {
  return (
    <section className="contact">
      <Background />

      <BackArrow />

      <h2 className="contact__title">Puedes contactarme por estos medios</h2>
      <nav className="contact__nav">
        <ul className="contact__list">
          <ContactItems
            textIcon="Giovanni Liotta"
            iconItem={linkedin}
            iconClass="linkedin"
            href="###"
          />

          <ContactItems
            textIcon="gioliotta"
            iconItem={github}
            iconClass="github"
            href="##########"
          />

          <ContactItems
            textIcon="gioliotta.io@gmail.com"
            iconItem={email}
            iconClass="email"
            href="mailto:gioliotta.io@gmail.com"
          />
        </ul>
      </nav>
    </section>
  );
}

export default Contact;
