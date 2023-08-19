import React, { useState } from "react";
import ProductDetailImage from "../../../assets/image/ProductDetailImage";
import "./style.scss";
import { toast } from "react-toastify";
import {
  useEditReviewMutation,
  useGetReviewDetailQuery,
} from "../../../features/review/reviewApiSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../../features/auth/authSlice";
const ProductReview = () => {
  const { sendIcon } = ProductDetailImage;
  const [point, setPoint] = useState(0);
  console.log(point);
  const productId = useParams().id;
  const userId = useSelector(selectCurrentUserId);
  const [editReview] = useEditReviewMutation();
  const { data, isLoading, isError } = useGetReviewDetailQuery(productId);
  const handleRating = async () => {
    try {
      await editReview({ userId, productId, point });
      setPoint(0);
    } catch (error) {
      toast.error("Rating failed!");
    }
  };
  return (
    <div className="product-review">
      <div className="rating-point">
        Rating :{" "}
        {!isLoading && !isError ? " " + data.avgpoint + " ★" : " ...Loading"}
      </div>
      <span> Leave a complain or review</span>
      <form className="rate">
        <input
          type="radio"
          id="star5"
          name="rate"
          value="5"
          required
          onChange={(e) => setPoint(e.target.value)}
        />
        <label htmlFor="star5" title="text"></label>
        <input
          type="radio"
          id="star4"
          name="rate"
          value="4"
          onChange={(e) => setPoint(e.target.value)}
          required
        />
        <label htmlFor="star4" title="text"></label>
        <input
          type="radio"
          id="star3"
          name="rate"
          value="3"
          onChange={(e) => setPoint(e.target.value)}
          required
        />
        <label htmlFor="star3" title="text"></label>
        <input
          type="radio"
          id="star2"
          name="rate"
          value="2"
          onChange={(e) => setPoint(e.target.value)}
          required
        />
        <label htmlFor="star2" title="text"></label>
        <input
          type="radio"
          id="star1"
          name="rate"
          value="1"
          onChange={(e) => setPoint(e.target.value)}
          required
        />
        <label htmlFor="star1" title="text"></label>
      </form>
      <div className="review">
        <textarea placeholder="Enter message"></textarea>
        <div className="send-review-container">
          <div className="send-review" onClick={handleRating}>
            {sendIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
