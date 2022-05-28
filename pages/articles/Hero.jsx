import Link from "next/link";
import { gsapFadeIn } from "../../components/Animations.js";

export default function Hero() {
  return (
    <article id="home" className="article-home">
      <section>
        <h1 className="heading-one">
          SMARTER WAY TO FILE TAX RETURN{" "}
          <span>IN PERSON. BY PHONE. ONLINE</span>
        </h1>
        <p className="paragraph">
          We help lodging tax return Sydney from anywhere. Get your biggest tax
          refund with no tax knowledge needed.
        </p>
        <button className="btn btn--home">
          <Link href="#contact">
            <a>Book Appointment</a>
          </Link>
        </button>
      </section>
    </article>
  );
}
