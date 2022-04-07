import { IconContext } from "react-icons";
import {
  FaAngleUp,
  FaPencilAlt,
  FaBriefcase,
  FaPaperclip,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <article className="article-home">
        <section>
          <h1 className="heading-one">
            SMARTER WAY TO FILE TAX RETURN{" "}
            <span>IN PERSON. BY PHONE. ONLINE</span>
          </h1>
          <p className="paragraph">
            We help lodging tax return Sydney from anywhere. Get your biggest
            tax refund with no tax knowledge needed.
          </p>
          <button className="btn">Book Appointment</button>
        </section>
      </article>

      <article className="article-services">
        <section className="article-services__intro">
          <h2 className="heading-two">
            PROVIDING YOU COMPREHENSIVE TAX, ACCOUNTING AND PAYROLL SERVICES.
          </h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis exercitationem dignissimos sed a tempora saepe optio
            esse aut sequi earum.
          </p>
        </section>
        <section className="article-services__taxes">
          <IconContext.Provider
            value={{
              className:
                "article-services__icons article-services__icons--caret",
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
          <IconContext.Provider
            value={{ className: "article-services__icons" }}
          >
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
          <IconContext.Provider
            value={{ className: "article-services__icons" }}
          >
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
          <IconContext.Provider
            value={{ className: "article-services__icons" }}
          >
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

      <article className="article-about">
        <section className="article-about__title">Meet The Team</section>
        <section className="article-about__intro"></section>
        <section className="article-about__image"></section>
        <section className="article-about__intro"></section>
        <section className="article-about__image"></section>
        <section className="article-about__image"></section>
        <section className="article-about__intro"></section>
        <section className="article-about__image"></section>
        <section className="article-about__intro"></section>
      </article>

      <article className="article-contact">
        <section className="article-contact__details"></section>
        <section className="article-contact__map"></section>
      </article>
    </>
  );
}
