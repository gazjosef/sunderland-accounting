import { IconContext } from "react-icons";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__info">
        <section className="footer__title">
          <h2>Sunderland Accounting</h2>
        </section>
        <section className="footer__links">
          <li>Home</li>
          <li>Our Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
        </section>
        <section className="footer__icons align-items">
          <IconContext.Provider value={{ color: "$color-blue-300" }}>
            <FaFacebook className="social-media-icons--facebook" />
            <FaGooglePlus className="social-media-icons--google" />
            <FaInstagram className="social-media-icons--instagram" />
            <FaLinkedin className="social-media-icons--linkedin" />
          </IconContext.Provider>
        </section>
      </section>
      <section className="footer__copyright">&copy; Ant Software 2022</section>
    </footer>
  );
};
