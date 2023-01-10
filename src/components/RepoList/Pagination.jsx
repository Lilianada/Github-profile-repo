import React from "react";
import "./RepoList.css";

export default function Pagination({
  handlePrevBtn,
  handleNextBtn,
  showPageNumbers,
  currentPage,
  pages,
}) {
  return (
      <div className="pagination">
        <ul className="pageNumbers">
          <li>
            <button
              onClick={handlePrevBtn}
              disabled={currentPage === pages[0] ? true : false}
              className={currentPage !== pages[0] ? "active" : null}
            >
              Prev
            </button>
          </li>
          {showPageNumbers}
          <li>
            <button
              onClick={handleNextBtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
              className={currentPage !== pages.length ? "active" : null}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
  );
}
