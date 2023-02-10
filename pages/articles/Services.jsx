import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import {
  FaAngleUp,
  FaPencilAlt,
  FaBriefcase,
  FaPaperclip,
} from "react-icons/fa";
import { gsapFadeIn } from "../../components/Animations.js";

export default function Services() {
  const servicesIntroRef = useRef(null);
  const servicesTaxesRef = useRef(null);
  const servicesFinancesRef = useRef(null);
  const servicesBookkeepingRef = useRef(null);
  const servicesPayrollRef = useRef(null);

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
        <p>
          We offer a customized approach to meet the specific needs of each of
          our clients, and strive to provide the highest level of quality and
          efficiency in all that we do. We understand the importance of staying
          compliant with tax laws and regulations, and work closely with our
          clients to help them make informed financial decisions.
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
          <p>
            Our team of certified tax professionals have a deep understanding of
            the tax code and are equipped to handle all of your tax-related
            needs. We offer a full range of tax services, including tax
            planning, preparation, and representation before the tax
            authorities.
          </p>
        </div>
      </section>

      <section className="article-services__finances" ref={servicesFinancesRef}>
        <IconContext.Provider value={{ className: "article-services__icons" }}>
          <FaPencilAlt />
        </IconContext.Provider>
        <div className="article-services__text">
          <h3 className="heading-three">FINANCIAL REPORTING</h3>
          <p>
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
          <p>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis exercitationem dignissimos sed a tempora saepe optio
            esse aut sequi earum.
          </p>
        </div>
      </section>
    </article>
  );
}
