import React, { useEffect, useRef } from "react";

import Link from "next/link";
import Header from "../Layout/Header";

const Hero: React.FC = () => {
  const blurredImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blurredImageDiv =
      blurredImageRef.current ?? document.createElement("div");
    const img = blurredImageDiv.querySelector("img");

    const loaded = () => {
      blurredImageDiv.classList.add("loaded");
    };

    if (img && img.complete) {
      loaded();
    } else if (img) {
      img.addEventListener("load", loaded);
    }

    return () => {
      // Cleanup function to remove event listener if component unmounts
      if (img && !img.complete) {
        img.removeEventListener("load", loaded);
      }
    };
  }, []); // Em

  return (
    <div className="blurred-img" ref={blurredImageRef}>
      <article id="home" className="article-home">
        <Header />
        <div className="container">
          <h1 className="heading-hero">
            SMARTER WAY TO FILE TAX RETURN{" "}
            <span>IN PERSON. BY PHONE. ONLINE</span>
          </h1>
          <p className="paragraph">
            We help lodging tax return Sydney from anywhere. Get your biggest
            tax refund with no tax knowledge needed.
          </p>
          <button className="btn btn--home">
            <Link href="#">Book Appointment</Link>
          </button>
        </div>
      </article>
    </div>
  );
};
export default Hero;
