import { Meta } from "./Meta";
import { useRouter } from "next/router";

import { Footer } from "@/components/Layout/Footer.jsx";
import Navbar from "@/components/Layout/Navbar/Navbar";
import Topbar from "@/components/Layout/Topbar.jsx";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>

      <Topbar />
      <Navbar />

      {router.pathname === "/"}

      <main>{children}</main>

      <Footer />
    </>
  );
};
