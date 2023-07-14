import React from "react";
import "./style.scss";
import Accordion from "./Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
const Questions = () => {
  const questions = [
    {
      title: "How can I become a vendor on the app?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
    },
    {
      title: "Is there a way I can reach out to the seller directly?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
    },
    {
      title: "What if I want a refund?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
    },
    {
      title: "Can I request for a particular products?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
    },
  ];
  return (
    <div className="questions">
      <div className="questions-zone">Frequently Asked Questions</div>
      <div className="questions-layout">
        <div className="questions-container">
          {questions.map(({ title, content }, index) => {
            return <Accordion title={title} content={content} key={index} />;
          })}
        </div>
        <div className="questions-ask">
          <div className="question-mark">
            <FontAwesomeIcon icon={faQuestion} />
          </div>
          <span> Do you have more questions ?</span>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus
            condimentum.
          </p>
          <button className="contact-btn"> Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
