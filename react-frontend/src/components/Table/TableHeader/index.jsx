import React, { useState } from "react";
import TableImage from "../../../assets/image/TableImage";
import "./style.scss";
const { searchIcon, filterIcon, settingIcon } = TableImage;
const TableHeader = (props) => {
  const { listFilter, filterOption, setFilterOption, setSearchValue } = props;
  const [active, setActive] = useState(false);
  return (
    <div className="table-header">
      <div className="first-section">
        <div className="search-btn">{searchIcon}</div>
        <div className="filter-btn" onClick={() => setActive(!active)}>
          {filterIcon} <p> Filter</p>
          <div className={"filter-list" + (active ? " active" : "")}>
            {listFilter.map((filter, index) => (
              <div
                key={`filter_option_${index}`}
                className={
                  "filter-option" + (filterOption === filter ? " selected" : "")
                }
                onClick={() => setFilterOption(filter)}
              >
                {filter}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="setting-btn"> {settingIcon}</div>
      </div>
    </div>
  );
};

export default TableHeader;
