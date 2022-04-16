import { IconContext } from "react-icons";
import {
  FaAngleUp,
  FaPencilAlt,
  FaBriefcase,
  FaPaperclip,
  FaPhone,
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
          <button className="btn btn--home">Book Appointment</button>
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
        <section className="article-about__title">
          <h2 className="heading-two">Meet The Team</h2>
        </section>
        <section className="article-about__gallery">
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
              <h3 className="heading-three heading-three--lighter">
                Jing Chao
              </h3>
            </div>
          </section>
        </section>
      </article>

      <article className="article-contact">
        <section className="article-contact__details">
          <h2 className="heading-two u-margin-bottom-small">Contact Us</h2>
          <button className="btn btn--contact align-items">
            <FaPhone className="align-items__icon" /> 02 9955 4488
          </button>
          <h3 className="heading-three">Address</h3>
          <p className="paragraph">
            500 George Street <br />
            Sydney NSW 2000
          </p>
          <h3 className="heading-three">Hours</h3>
          <p className="paragraph">
            Sun: Closed <br />
            Mon: 9am - 5pm <br />
            Tue: 9am - 5pm <br />
            Wed: 9am - 5pm <br />
            Thu: 9am - 6pm <br />
            Fri: 9am - 5pm <br />
            Sat: Closed <br />
          </p>
          <h3 className="heading-three">Email</h3>
          <p className="paragraph">
            Email: info@sutherland.com.au <br />
          </p>
        </section>
        <section className="article-contact__map"></section>
      </article>
    </>
  );
}
