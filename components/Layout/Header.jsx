import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header | u-flex u-items-center | u-clr-white">
      <div className="container | u-flex u-items-center u-justify-between">
        <Link href="#">
          <h2 className="u-uppercase">
            <a>Sunderland Accounting</a>
          </h2>
        </Link>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
