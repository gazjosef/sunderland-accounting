import { FaPhone } from "react-icons/fa";

export default function ContactDetails() {
  return (
    <section className="article-contact__details">
      <h3 className="heading-three">Address</h3>
      <p className="paragraph">
        5/8 Ave of the Americas <br />
        Newington NSW 2127
      </p>
      <h3 className="heading-three">Hours</h3>
      <p className="paragraph">
        Sun: Closed <br />
        Mon: 8:30am - 5:30pm <br />
        Tue: 8:30am - 5:30pm <br />
        Wed: 8:30am - 5:30pm <br />
        Thu: 8:30am - 5:30pm <br />
        Fri: 8:30am - 5:30pm <br />
        Sat: Closed <br />
      </p>
      <h3 className="heading-three">Email</h3>
      <p className="paragraph">
        Email: info@sunderland.com.au <br />
      </p>
      <button className="btn btn--contact | u-flex u-items-center u-justify-between u-gap-1">
        <FaPhone /> 02 9644 9220
      </button>
    </section>
  );
}
