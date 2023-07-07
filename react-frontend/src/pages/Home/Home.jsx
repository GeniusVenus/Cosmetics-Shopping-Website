import React from "react";
import Header from "../../components/Header";
import ListProduct from "../../components/ListProduct";
import Advertisement from "../../components/Advertisement";
import Reason from "../../components/Reason";
import Questions from "../../components/Questions";
import SignUpBox from "../../components/SignUpBox";
import Footer from "../../components/Footer";
import CustomerReview from "../../components/CustomerReview";

const Home = () => {
  return (
    <>
      <Header />
      <ListProduct />
      <Advertisement />
      <Reason />
      <CustomerReview />
      <Questions />
      <SignUpBox />
      <Footer />
    </>
  );
};
export default Home;
