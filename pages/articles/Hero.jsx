import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsapFadeIn } from "../../components/Animations.js";

export default function Hero() {
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(heroTitleRef, 0.2);
    gsapFadeIn(heroTextRef, 0.3);
    gsapFadeIn(heroButtonRef, 0.5);
  }, []);

  return (
    <article id="home" className="article-home">
      <section>
        <h1 className="heading-one" ref={heroTitleRef}>
          SMARTER WAY TO FILE TAX RETURN{" "}
          <span>IN PERSON. BY PHONE. ONLINE</span>
        </h1>
        <p className="paragraph" ref={heroTextRef}>
          We help lodging tax return Sydney from anywhere. Get your biggest tax
          refund with no tax knowledge needed.
        </p>
        <button className="btn btn--home" ref={heroButtonRef}>
          <Link href="#contact">
            <a>Book Appointment</a>
          </Link>
        </button>
      </section>
    </article>
  );
}
