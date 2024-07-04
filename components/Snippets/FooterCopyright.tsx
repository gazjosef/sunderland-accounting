import React from "react";

const currentYear: number = new Date().getFullYear();

export default function FooterCopyright() {
  return (
    <section className="footer__copyright | u-center-text">
      Copyright <span>&copy;</span> Gareth Hind {currentYear}
    </section>
  );
}
