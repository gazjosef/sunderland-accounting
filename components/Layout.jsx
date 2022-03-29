import { Meta } from "./Meta";
import { useRouter } from "next/router";

import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar";

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
