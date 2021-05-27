import "./Button.scss";

import { FiChevronUp } from "react-icons/fi";

const DefaultButton = (props) => {
  return (
    <button className="default-button" onClick={() => props.onClick}>
      {props.children}
    </button>
  );
};

const ScrollToTopButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top" onClick={handleScroll}>
      <div className="icon">
        <FiChevronUp />
      </div>
    </div>
  );
};

export { DefaultButton, ScrollToTopButton };
