import React, { useState } from "react";

import NavbarList from "../Snippets/NavbarList";
import NavbarMobileNavToggle from "../Snippets/NavbarMobileNavToggle";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setToggle((t) => !t);
  };

  return (
    <nav className="navbar | u-flex u-items-center | u-fs-nav">
      <NavbarList />

      <NavbarMobileNavToggle />
    </nav>
  );
};

export default Navbar;
