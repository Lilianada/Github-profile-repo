import React, { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./ReposList.css";

export default function RepoCard({ data }) {

  // stores current page number, initially 1
  const [currentPage, setCurrentPage] = useState(1);
  // stores no of items we want to display in single page.
  const [pageItems, setPageItems] = useState(9);
  // maxPageNum and minPageNum are used to set the limit of page numbers to be displayed on the screen.
  const [maxPageNum, setMaxPageNum] = useState(9);
  const [minPageNum, setMinPageNum] = useState(0);

  // Get current items
  const indexOfLastItem = currentPage * pageItems;
  const indexOfFirstItem = indexOfLastItem - pageItems;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // ------Pagination
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / pageItems); i++) {
    pages.push(i);
  }
  // onclick handler for the buttons
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  // component to display the buttons
  const showPageNumbers = pages.map((number) => {
    //if current number is greater than maxPageNum +1 and less than minPageNum then render it else render nothing.
    if (number < maxPageNum + 1 && number > minPageNum) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  // Next and Previous button handlers
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    //if current page +1 is greater than maxPageNum then set maxPageNum and minPageNum to 9 and 0 respectively.
    if (currentPage + 1 > maxPageNum) {
      setMaxPageNum(maxPageNum + pageItems);
      setMinPageNum(minPageNum + pageItems);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    //if current page -1 is 0 then set maxPageNum and minPageNum to 9 and 0 respectively.
    if ((currentPage - 1) % pageItems === 0) {
      setMaxPageNum(maxPageNum - pageItems);
      setMinPageNum(minPageNum - pageItems);
    }
  };

  return (
    <ErrorBoundary>
      {currentItems.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="repoLink">
              <h5 className="repoName"> {item.name} </h5>
              <div className="repoStatus">
                <p> {item.visibility} </p>
              </div>
            </div>
            <div className="description">
              <p> {item.description} </p>
            </div>
            <div className="row">
              <div className="language">
                <p>{item.language}</p>
              </div>
              <div className={`row ${item.stargazers_count === 0 ? "none" : ""}`}>
                <IoIosStarOutline
                  fill="#8b949e"
                  style={{ marginRight: ".5rem" }}
                />
                <p>{item.stargazers_count}</p>
              </div>
            </div>
            <Link to={"/repository/" + item.id} className="viewRepo">
              View Repo
            </Link>
          </div>
        );
      })}
      {/* Pagination */}
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
    </ErrorBoundary>
  );
}
