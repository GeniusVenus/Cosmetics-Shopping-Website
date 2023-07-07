import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Accordion = (props) => {
  const { title, content } = props;
  const [active, setActive] = useState(false);
  return (
    <div
      className={active ? "accordion active" : "accordion"}
      onClick={(e) => setActive(!active)}
    >
      <div className="accordion-title">
        <p>{title}</p>
        <div className="font-icon">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      <div className="accordion-content">
        <div className="inner">
          <p>
            {content}
            {content}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
