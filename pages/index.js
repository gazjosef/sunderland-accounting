export default function Home() {
  return (
    <>
      <article className="article-home">
        <section>
          <h1 className="heading-one">
            SMARTER WAY TO FILE TAX RETURN IN PERSON. BY PHONE. ONLINE
          </h1>
          <p className="paragraph">
            We help lodging tax return Sydney from anywhere. Get your biggest
            tax refund with no tax knowledge needed.
          </p>
          <button>Book Appointment</button>
        </section>
      </article>

      <article className="article-services">
        <section className="article-services__intro"></section>
        <section className="article-services__taxes"></section>
        <section className="article-services__finances"></section>
        <section className="article-services__bookkeeping"></section>
        <section className="article-services__payroll"></section>
      </article>

      <article className="article-about">
        <section className="article-about__intro"></section>
        <section className="article-about__image"></section>
      </article>

      <article className="article-contact">
        <section className="article-contact__details"></section>
        <section className="article-contact__map"></section>
      </article>
    </>
  );
}
