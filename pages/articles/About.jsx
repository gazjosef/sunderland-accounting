import { useEffect, useRef } from "react";
import { gsapFadeIn, gsapFadeInStagger } from "../../components/Animations.js";

export default function About() {
  const aboutTitleRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutGalleryRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(aboutTitleRef, 0.2);
    gsapFadeIn(aboutTextRef, 0.3);
    gsapFadeInStagger(aboutGalleryRef, 0.35);
  }, []);

  return (
    <article id="about" className="article-about">
      <section className="article-about__about">
        <section className="article-about__title" ref={aboutTitleRef}>
          <h2 className="heading-two">About Us</h2>
        </section>
        <section className="article-about__text" ref={aboutTextRef}>
          <p className="paragraph">
            We are a professional accounting firm dedicated to providing
            top-notch financial services to businesses and individuals. Our team
            of experts has a combined experience of several decades in the field
            of accounting and finance. We offer a wide range of services
            including bookkeeping, tax planning and preparation, financial
            statement analysis, and consulting.
          </p>
          <p className="paragraph">
            Our goal is to help our clients make informed financial decisions,
            stay compliant with tax laws, and achieve their financial goals. We
            are committed to providing personalized, timely and efficient
            services at an affordable price.
          </p>
        </section>
      </section>
      <section className="article-about__gallery" ref={aboutGalleryRef}>
        <section className="article-about__team">
          <img
            src="/images/team/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg"
            alt=""
            className="section-about__img"
          />
          <div className="article-about__desc">
            <h3 className="heading-three">Founding Partner & Chairman</h3>
            <h3 className="heading-three heading-three--lighter">
              Jamie Ryder
            </h3>
          </div>
        </section>
        <section className="article-about__team">
          <img
            src="/images/team/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
            alt=""
            className="section-about__img"
          />
          <div className="article-about__desc">
            <h3 className="heading-three">Managing Partner</h3>
            <h3 className="heading-three heading-three--lighter">
              Jenete Ekwueme
            </h3>
          </div>
        </section>
        <section className="article-about__team">
          <img
            src="/images/team/mateus-campos-felipe-WnPJft0DJpk-unsplash.jpg"
            alt=""
            className="section-about__img"
          />
          <div className="article-about__desc">
            <h3 className="heading-three">Associate Director</h3>
            <h3 className="heading-three heading-three--lighter">
              Isabella Telfer
            </h3>
          </div>
        </section>
        <section className="article-about__team">
          <img
            src="/images/team/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg"
            alt=""
            className="section-about__img"
          />
          <div className="article-about__desc">
            <h3 className="heading-three">Accounting and Tax Manager</h3>
            <h3 className="heading-three heading-three--lighter">Jing Chao</h3>
          </div>
        </section>
      </section>
    </article>
  );
}
