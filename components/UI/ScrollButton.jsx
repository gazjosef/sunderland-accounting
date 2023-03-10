import { useState } from "react";
import { IconContext } from "react-icons";
import { FaArrowUp } from "react-icons/fa";

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <button
      className="scrollButton | "
      style={{ display: visible ? "inline" : "none" }}
    >
      <div className="u-flex u-flex-col u-items-center u-justify-center u-gap-0-5">
        <IconContext.Provider value={{ className: "scrollButton__icon" }}>
          <FaArrowUp onClick={scrollToTop} />
        </IconContext.Provider>
        <h3 className="scrollButton__text | u-clr-white-0">TOP</h3>
      </div>
    </button>
  );
}

export default ScrollButton;
