import useGsapFadeIn from "hooks/useGsapFadeIn";

export default function About() {
  const [aboutTitleRef, aboutTextRef, aboutGalleryRef] = useGsapFadeIn();

  const team = [
    {
      name: "Jamie Ryder",
      position: "Founding Partner & Chairman",
      image_src:
        "/images/team/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg",
    },
    {
      name: "Jenete Ekwueme",
      position: "Managing Partner",
      image_src:
        "/images/team/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg",
    },
    {
      name: "Isabella Telfer",
      position: "Associate Director",
      image_src: "/images/team/mateus-campos-felipe-WnPJft0DJpk-unsplash.jpg",
    },
    {
      name: "Jing Chao",
      position: "Accounting and Tax Manager",
      image_src:
        "/images/team/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
    },
  ];

  return (
    <section id="about" className="article-about">
      <div className="article-about__about container">
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
      </div>

      <div className="container">
        <section className="article-about__gallery" ref={aboutGalleryRef}>
          {team.map((member, index) => {
            return (
              <section className="article-about__team" key={index}>
                <img
                  src={member.image_src}
                  alt={member.name}
                  className="section-about__img"
                />
                <div className="article-about__desc">
                  <h3 className="heading-three">{member.position}</h3>
                  <h3 className="heading-three heading-three--lighter">
                    {member.name}
                  </h3>
                </div>
              </section>
            );
          })}
        </section>
      </div>
    </section>
  );
}
