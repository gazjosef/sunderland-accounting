import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="#" passHref>
          <h2 className="heading-logo">Sunderland Accounting</h2>
        </Link>

        <Navbar />
      </div>
    </header>
  );
}
