import { useEffect, useRef } from "react";
import { gsapFadeIn } from "@/styles/base/animations";

export default function About() {
  const aboutTitleRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutGalleryRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(aboutTitleRef, 0.3);
    gsapFadeIn(aboutTextRef, 0.6);
    gsapFadeIn(aboutGalleryRef, 0.7);
  }, []);

  return (
    <article id="about" className="article-about">
      <section className="article-about__about">
        <section className="article-about__title" ref={aboutTitleRef}>
          <h2 className="heading-two">About Us</h2>
        </section>
        <section className="article-about__text" ref={aboutTextRef}>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            veritatis itaque harum delectus atque deserunt ex quibusdam vero
            cumque ut, explicabo saepe doloremque quos incidunt, est in nisi at
            iste cum exercitationem quidem dolores?
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
            nesciunt totam. Eveniet sunt quidem unde quos nam adipisci assumenda
            suscipit aliquam, iste optio perspiciatis. Sapiente quisquam nihil
            accusantium iusto nam aliquam beatae neque modi nemo.
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
