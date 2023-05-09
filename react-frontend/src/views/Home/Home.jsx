import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useState, useEffect } from "react";
import api from "../../api/api";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  });
  return (
    <>
      <Link to="/login"> Login</Link>
      <div> Hello </div>
      <div> This is </div>
      <div>
        {" "}
        {posts.map((post) => (
          <>
            {" "}
            <div>
              {" "}
              {post.id} - {post.title}{" "}
            </div>{" "}
          </>
        ))}{" "}
      </div>
      <Link to="/login"> Login</Link>
    </>
  );
};
export default Home;
