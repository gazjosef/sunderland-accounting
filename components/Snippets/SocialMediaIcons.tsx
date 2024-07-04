import React from "react";
import { IconContext } from "react-icons";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

interface SocialMediaIconsProps {
  class: string;
}
export default function SocialMediaIcons() {
  return (
    <div className="footer__icons | u-margin-bottom-medium">
      <IconContext.Provider value={{}}>
        <FaFacebook size={40} />
        <FaGooglePlus size={40} />
        <FaInstagram size={40} />
        <FaLinkedin size={40} />
      </IconContext.Provider>
    </div>
  );
}
