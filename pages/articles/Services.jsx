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
  const servicesImgRef = useRef(null);

  useEffect(() => {
    const el = servicesImgRef.current;
    gsap.fromTo(
      el,
      { rotation: 0 },
      {
        rotation: 180,
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <article id="services" className="article-services">
      <section className="article-services__intro" ref={servicesImgRef}>
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
      <section className="article-services__taxes">
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
      <section className="article-services__finances">
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
      <section className="article-services__bookkeeping">
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
      <section className="article-services__payroll">
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
