import Dropdown from "./Dropdown";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
const TableFooter = (props) => {
  const {
    setInfoPerPage,
    infos,
    searchValue,
    handleFilter,
    infoPerPage,
    changePage,
  } = props;
  console.log("Table Footer ");
  console.log(infoPerPage);
  return (
    <div className="table-footer">
      <div className="table-num-row">
        <Dropdown setInfoPerPage={setInfoPerPage} />
        <div className="description">Entries per page</div>
      </div>
      <ReactPaginate
        previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
        pageCount={Math.ceil(
          infos.filter((p) => {
            if (!searchValue) return true;
            return handleFilter(p);
          }).length / infoPerPage
        )}
        onPageChange={changePage}
        containerClassName="pagination-section"
        previousLinkClassName="previous-btn"
        nextLinkClassName="next-btn"
        activeClassName="pagination-active"
      />
    </div>
  );
};
export default TableFooter;
