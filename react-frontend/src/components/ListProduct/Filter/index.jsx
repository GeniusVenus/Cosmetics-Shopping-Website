import React, { useState } from "react";
import "./style.scss";
const Filter = (props) => {
  const filterList = [
    { title: "Gender", filterOption: ["Male", "Female"] },
    {
      title: "Category",
      filterOption: [
        "Skin care",
        "Grooming",
        "Perfume & Body Mist",
        "Hair care",
        "Body",
      ],
    },
    { title: "Price", filterOption: [] },
    {
      title: "Brand",
      filterOption: [
        "The Ordinary",
        "La Roche-Posay",
        "Laneige",
        "Curology",
        "Channel",
        "Innisfree",
        "Yves Saint Laurent",
        "Lancôme",
        "L’ Oréal",
        "Some By Mi",
        "Bioderma",
        "Vichy",
      ],
    },
  ];
  const [filter] = useState({
    gender: [],
    category: [],
    price: {
      min: 0,
      max: 999999999999999999,
    },
    brand: [],
  });
  const handleMinValueChange = (e) => {
    filter.price[e.target.name] = e.target.value !== null ? e.target.value : 0;
    props.handleFilter(filter);
  };
  const handleMaxValueChange = (e) => {
    filter.price[e.target.name] =
      e.target.value !== null ? e.target.value : 999999999999999999;
    props.handleFilter(filter);
  };
  const handleFilterChange = (e) => {
    const checked = e.target.checked;
    const checkedValue = e.target.value;
    const checkedName = e.target.name;
    if (checked) filter[checkedName].push(checkedValue);
    else
      filter[checkedName] = filter[checkedName].filter(
        (item) => item !== checkedValue
      );
    props.handleFilter(filter);
  };
  return (
    <>
      <div className="list-product-filter">
        <div className="label"> Filter </div>
        <div className="list-filter-content">
          {filterList.map((filter, index) => {
            return (
              <div key={index} className="filter-content">
                <div className="filter-title">{filter.title} </div>
                {filter.title === "Price" && (
                  <div className="max-min-option">
                    <input
                      type="number"
                      id="min"
                      name="min"
                      min="0"
                      max="9999999999"
                      placeholder="Min ........."
                      onChange={handleMinValueChange}
                    />
                    <span className="block"></span>
                    <input
                      type="number"
                      id="max"
                      name="max"
                      min="0"
                      max="9999999999"
                      placeholder="Max ........."
                      onChange={handleMaxValueChange}
                    />
                  </div>
                )}

                {filter.title !== "Price" && (
                  <div className="filter-option">
                    {filter.filterOption.map((option, index) => {
                      return (
                        <div key={index} className="option">
                          <input
                            type="checkbox"
                            name={filter.title.toLowerCase()}
                            value={option}
                            id={option}
                            onChange={handleFilterChange}
                          />
                          <label htmlFor={option}> {option}</label>
                        </div>
                      );
                    })}{" "}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filter;
