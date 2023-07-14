import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.scss";
const PageLocation = (props) => {
  const page = props.page;
  return (
    <div className="page-location">
      {page.map((value, index) => {
        return (
          <React.Fragment key={index}>
            <Link
              to={value.url}
              className={index !== page.length - 1 ? "page" : "page active"}
            >
              {" "}
              {value.title}{" "}
            </Link>
            {index !== page.length - 1 && (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default PageLocation;
