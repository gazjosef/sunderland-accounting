import { IconContext } from "react-icons";
import { FaFacebook, FaGooglePlus, FaLinkedin, FaPhone } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__info">
        <div className="topbar__phone align-items">
          <IconContext.Provider value={{ className: "align-items__icons" }}>
            <FaPhone className="align-items__icon" /> 02 9644 9220
          </IconContext.Provider>
        </div>
        <div className="topbar__social-media align-items">
          <IconContext.Provider value={{ className: "align-items__icons" }}>
            <FaFacebook className="align-items__icon" />
            <FaGooglePlus className="align-items__icon" />
            <FaLinkedin className="align-items__icon" />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
