import React from "react";
import {
  FaAngleUp,
  FaPencilAlt,
  FaBriefcase,
  FaPaperclip,
} from "react-icons/fa";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import Box from "../Snippets/Box";

const Services: React.FC = () => {
  const [servicesIntroRef, servicesTaxesRef, servicesBookkeepingRef] =
    useGsapFadeIn();

  const iconColor = "#145da0";

  return (
    <article id="services" className="section">
      <div className="container | article-services">
        <section className="article-services__intro" ref={servicesIntroRef}>
          <h2 className="heading-two">
            PROVIDING YOU COMPREHENSIVE TAX, ACCOUNTING AND PAYROLL SERVICES.
          </h2>
          <p className="paragraph">
            We offer a customized approach to meet the specific needs of each of
            our clients, and strive to provide the highest level of quality and
            efficiency in all that we do.
          </p>
          <p className="paragraph">
            We understand the importance of staying compliant with tax laws and
            regulations, and work closely with our clients to help them make
            informed financial decisions.
          </p>
        </section>

        <Box
          title={"TAX ACCOUNTING & PREPARATION"}
          description={
            "Our team of certified tax professionals have a deep understanding of the tax code and are equipped to handle all of your tax-related needs."
          }
          // ref={servicesBookkeepingRef}
        >
          <FaAngleUp color={iconColor} size={48} />
        </Box>

        <Box
          title={"FINANCIAL REPORTING"}
          description={
            "Our Financial Reporting Services go beyond numbers, providing comprehensive insights into your business financial health."
          }
        >
          <FaPencilAlt color={iconColor} size={48} />
        </Box>

        <Box
          title={"BOOKKEEPING SERVICES"}
          description={
            "We provide a range of bookkeeping services, including ledger maintenance, invoicing, and expense tracking, allowing you to tailor our services to fit your business model seamlessly."
          }
        >
          <FaBriefcase color={iconColor} size={48} />
        </Box>

        <Box
          title={"PAYROLL SERVICES"}
          description={`We take care of the entire payroll cycle, from data entry to taxfiling. Whether you are a small business owner or part of a larger organization, our services scale to meet your payroll needs.`}
        >
          <FaPaperclip color={iconColor} size={48} />
        </Box>
      </div>
    </article>
  );
};
export default Services;
