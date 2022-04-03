import { useContext } from "react";
import JobContext from "../../../context/JobContext";
import "./pagination.css";

const Pagination = ({ jobsPerPage, currentPage, filteredJobData }) => {
  const jobCtx = useContext(JobContext);
  const { paginate, prevPaginate, nextPaginate } = jobCtx;

  const pageNum = [];
  let lastPage = Math.ceil(filteredJobData.length / jobsPerPage);

  for (let i = 1; i <= lastPage; i++) {
    pageNum.push(i);
  }

  return (
    <ul className="pagination">
      <li
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={prevPaginate}
      >
        <span class="material-icons">keyboard_arrow_left</span>
      </li>
      {pageNum.map((num) => (
        <li
          key={num}
          id={num}
          className={`pagination-item ${currentPage === num ? "active" : ""}`}
          onClick={() => paginate(num)}
        >
          {num}
        </li>
      ))}
      <li
        className={`pagination-item ${
          currentPage === lastPage ? "disabled" : ""
        }`}
        onClick={nextPaginate}
      >
        <span class="material-icons">keyboard_arrow_right</span>
      </li>
    </ul>
  );
};

export default Pagination;
