import { Meta } from "./Meta";
import { useRouter } from "next/router";

import Topbar from "@/components/Layout/Topbar.jsx";
import Header from "@/components/Layout/Header.jsx";
import Footer from "@/components/Layout/Footer.jsx";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>

      <Topbar />
      <Header />

      {router.pathname === "/"}

      <main>{children}</main>

      <Footer />
    </>
  );
};
