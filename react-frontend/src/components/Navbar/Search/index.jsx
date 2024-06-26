import React, { useRef, useEffect, useState, useMemo } from "react";
import NavBarImage from "../../../assets/image/NavBarImage";
import { useGetProductsQuery } from "../../../features/product/productApiSlice";
import "./style.scss";
import Result from "./Result";
const Normalization = (value) => {
  return value.toLowerCase().trim();
};
const { searchIcon } = NavBarImage;
const Search = (props) => {
  const { active, setActive } = props;
  const { data, isLoading, isError } = useGetProductsQuery();
  const [query, setQuery] = useState("");
  const searchList = useMemo(() => {
    if (!isLoading) {
      if (data)
        return data.filter((item) =>
          Normalization(item.name).includes(Normalization(query))
        );
      return [];
    }
    return [];
  }, [data, query, isLoading]);

  const searchRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!searchRef.current.contains(e.target)) setActive(false);
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setActive]);
  return (
    <>
      <div
        className={active ? "search active" : "search"}
        ref={searchRef}
        onClick={() => (active ? "" : setActive(!active))}
      >
        <div className="icon" onClick={() => setActive(!active)}>
          {searchIcon}
        </div>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search here"
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="search-results">
            <div className="num-results">
              {" "}
              There are <span>{searchList.length}</span> results as u can see
            </div>
            {!isLoading && !isError && (
              <div className="list-results">
                {searchList.map((result, index) => {
                  return (
                    <Result
                      {...result}
                      key={index}
                      handleClick={() => setActive(!active)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <p> Search</p>
      </div>
    </>
  );
};

export default Search;
