import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const NotFoundPage = () => {
  return (
    <div className="not_found_page">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <Link to="/">
          <button>
            Go back <i className="far fa-hand-point-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
