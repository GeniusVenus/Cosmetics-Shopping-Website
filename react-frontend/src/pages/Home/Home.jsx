import React from "react";
import Header from "../../components/Header";
import ListProduct from "../../components/ListProduct";
import Advertisement from "../../components/Advertisement";
import Reason from "../../components/Reason";
import Questions from "../../components/Questions";
import CustomerReview from "../../components/CustomerReview";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
  selectCurrentUserId,
} from "../../features/auth/authSlice";

const Home = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const id = useSelector(selectCurrentUserId);
  console.log(id + "-" + user + "-" + token);
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
