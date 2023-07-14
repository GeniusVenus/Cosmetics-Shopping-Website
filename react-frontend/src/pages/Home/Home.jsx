import React from "react";
import Header from "../../components/Header";
import ListProduct from "../../components/ListProduct";
import Advertisement from "../../components/Advertisement";
import Reason from "../../components/Reason";
import Questions from "../../components/Questions";
import CustomerReview from "../../components/CustomerReview";

const Home = () => {
  return (
    <>
      <div className="home-layout">
        <Header />
        <ListProduct title="Featured This Week" productPerPage={8} />
        <Advertisement />
        <Reason />
        <CustomerReview />
        <Questions />
      </div>
    </>
  );
};
export default Home;
