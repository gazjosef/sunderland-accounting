import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function NavbarMobileNavToggle() {
  // const [toggle, setToggle] = useState<boolean>(false);
  // const handleClick = () => {
  //   setToggle((t) => !t);
  // };
  return (
    <div
      className="navbar__mobile-nav-toggle sr-only"
      aria-label="Toggle navigation"
    >
      <h1>Hello World</h1>

      {/* <IconContext.Provider value={{}}>
              {toggle ? (
                <FaTimes onClick={handleClick} />
              ) : (
                <FaBars onClick={handleClick} />
              )}
            </IconContext.Provider> */}
    </div>
  );
}
