import Link from "next/link";
import useGsapFadeIn from "hooks/useGsapFadeIn";
import Header from "../Layout/Header";

export default function Hero() {
  const [heroTitleRef, heroTextRef, heroImgRef] = useGsapFadeIn();

  return (
    <div>
      <section id="home" className="article-home u-relative">
        <Header />
        <div className="container">
          <h1 className="heading-one" ref={heroTitleRef}>
            SMARTER WAY TO FILE TAX RETURN{" "}
            <span>IN PERSON. BY PHONE. ONLINE</span>
          </h1>
          <p className="paragraph" ref={heroTextRef}>
            We help lodging tax return Sydney from anywhere. Get your biggest
            tax refund with no tax knowledge needed.
          </p>
          <button className="btn btn--home" ref={heroImgRef}>
            <Link href="#contact">
              <a>Book Appointment</a>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}
