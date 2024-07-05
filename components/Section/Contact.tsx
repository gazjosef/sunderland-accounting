import React from "react";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import Form from "../../components/Snippets/Form/Form";
import Map from "../Snippets/Map";
import ContactDetails from "../Snippets/ContactDetails";

export default function Contact() {
  const [contactTitleRef, contactMapRef, contactDetailsRef] = useGsapFadeIn();
  return (
    <section id="contact" className="section article-contact">
      <div className="container">
        <div className="article-contact__title" ref={contactTitleRef}>
          <h2 className="heading-two u-margin-bottom-small">Contact Us</h2>
        </div>

        <section
          className="article-contact__contact | u-grid"
          ref={contactMapRef}
        >
          <section className="article-contact__map">
            <Map />
          </section>

          <section className="article-contact__form">
            <Form />
          </section>

          <section className="article-contact__details">
            <ContactDetails />
          </section>
        </section>
      </div>
    </section>
  );
}
