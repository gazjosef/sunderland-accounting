import SocialMediaIcons from "../Snippets/SocialMediaIcons.tsx";
import FooterList from "../Snippets/FooterList.tsx";
import FooterCopyright from "../Snippets/FooterCopyright.tsx";

const links1 = ["Home", "Our Services", "About Us"];
const links2 = ["Contact Us", "Terms", "Privacy Policy"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h2 className="heading-two | u-margin-bottom-small">
            Sunderland Accounting
          </h2>
          <SocialMediaIcons />
        </div>

        <div className="u-flex u-items-center u-justify-end u-gap-8">
          <FooterList links={links1} />
          <FooterList links={links2} />
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}
