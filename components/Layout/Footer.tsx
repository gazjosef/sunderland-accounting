import React from "react";
// ** Import Icons
import { IconContext } from "react-icons";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h2 className="heading-two | u-margin-bottom-small">
            Sunderland Accounting
          </h2>
          <section className="footer__icons | u-margin-bottom-medium">
            <IconContext.Provider value={{}}>
              <FaFacebook size={40} />
              <FaGooglePlus size={40} />
              <FaInstagram size={40} />
              <FaLinkedin size={40} />
            </IconContext.Provider>
          </section>
        </div>

        <div className="u-flex u-items-center u-justify-end u-gap-8">
          <section className="footer__links | u-margin-bottom-small">
            <ul role="list">
              <li>Home</li>
              <li>Our Services</li>
              <li>About Us</li>
            </ul>
          </section>
          <section className="footer__links | u-margin-bottom-small">
            <ul role="list">
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
          </section>
        </div>
      </div>
      <section className="footer__copyright | u-center-text">
        Gareth Hind &copy; {currentYear}
      </section>
    </footer>
  );
};

export default Footer;
