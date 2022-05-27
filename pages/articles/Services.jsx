import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import {
  FaAngleUp,
  FaPencilAlt,
  FaBriefcase,
  FaPaperclip,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesIntroRef = useRef(null);
  const servicesTaxesRef = useRef(null);
  const servicesFinancesRef = useRef(null);
  const servicesBookkeepingRef = useRef(null);
  const servicesPayrollRef = useRef(null);

  const gsapFadeIn = (ref, delay) => {
    const el = ref.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: delay,
        scrollTrigger: {
          trigger: el,
          markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "3rem",
          },
        },
      }
    );
  };

  useEffect(() => {
    gsapFadeIn(servicesIntroRef, 0.3);
    gsapFadeIn(servicesTaxesRef, 0.6);
    gsapFadeIn(servicesFinancesRef, 0.7);
    gsapFadeIn(servicesBookkeepingRef, 0.8);
    gsapFadeIn(servicesPayrollRef, 0.9);
  }, []);

  return (
    <article id="services" className="article-services">
      <section className="article-services__intro" ref={servicesIntroRef}>
        <h2 className="heading-two">
          PROVIDING YOU COMPREHENSIVE TAX, ACCOUNTING AND PAYROLL SERVICES.
        </h2>
        <p className="paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          distinctio exercitationem harum nulla temporibus doloribus deleniti
          reiciendis hic, aspernatur consequatur quidem cum fugit quis placeat
          laudantium voluptas iure tempore dolorum iste deserunt qui minima
          dolores! Quae itaque molestias tempore tempora ad amet impedit
          corrupti animi.
        </p>
      </section>
      <section className="article-services__taxes" ref={servicesTaxesRef}>
        <IconContext.Provider
          value={{
            className: "article-services__icons article-services__icons--caret",
          }}
        >
          <FaAngleUp />
        </IconContext.Provider>
        <div className="article-services__text">
          <h3 className="heading-three">TAX ACCOUNTING & PREPARATION</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis exercitationem dignissimos sed a tempora saepe optio
            esse aut sequi earum.
          </p>
        </div>
      </section>

      <section className="article-services__finances" ref={servicesFinancesRef}>
        <IconContext.Provider value={{ className: "article-services__icons" }}>
          <FaPencilAlt />
        </IconContext.Provider>
        <div className="article-services__text">
          <h3 className="heading-three">FINANCIAL REPORTING</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis exercitationem dignissimos sed a tempora saepe optio
            esse aut sequi earum.
          </p>
        </div>
      </section>

      <section
        className="article-services__bookkeeping"
        ref={servicesBookkeepingRef}
      >
        <IconContext.Provider value={{ className: "article-services__icons" }}>
          <FaBriefcase />
        </IconContext.Provider>
        <div className="article-services__text">
          <h3 className="heading-three">BOOKKEEPING SERVICES</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis exercitationem dignissimos sed a tempora saepe optio
            esse aut sequi earum.
          </p>
        </div>
      </section>

      <section className="article-services__payroll" ref={servicesPayrollRef}>
        <IconContext.Provider value={{ className: "article-services__icons" }}>
          <FaPaperclip />
        </IconContext.Provider>
        <div className="article-services__text">
          <h3 className="heading-three">PAYROLL SERVICES</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis exercitationem dignissimos sed a tempora saepe optio
            esse aut sequi earum.
          </p>
        </div>
      </section>
    </article>
  );
}
