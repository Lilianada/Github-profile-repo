import React, { useEffect, useState } from "react";
import Header from "../Header/NavBar";
import axios from "axios";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import RepoCard from "./RepoCard";
import RepoProfile from "./RepoProfile";
import RepoHead from "./RepoHead";
import "./ReposList.css";
import Footer from "../Footer/Footer";

export default function RepositoriesList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);

  // stores current page number, initially 1
  const [currentPage, setCurrentPage] = useState(1);
  // stores no of items we want to display in single page.
  const [pageItems, setPageItems] = useState(9);
  // maxPageNum and minPageNum are used to set the limit of page numbers to be displayed on the screen.
  const [maxPageNum, setMaxPageNum] = useState(9);
  const [minPageNum, setMinPageNum] = useState(0);

  // Fetch my github profile
  const fetchProfile = () => {
    const url = "https://api.github.com/users/lilianada";
    axios
      .get(url)
      .then((response) => {
        setLoading(true);
        setProfile(response.data);
      })
      .catch((err) => {
        setLoading(true);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    <h3>Loading...</h3>;
  }

  //Fetch my repositories
  const fetchData = () => {
    const url = `https://api.github.com/users/lilianada/repos`;
    setLoading(true);
    axios
      .get(url + "?page={1}+page={2}")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProfile();
    fetchData();
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * pageItems;
  const indexOfFirstItem = indexOfLastItem - pageItems;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / pageItems); i++) {
    pages.push(i);
    console.log(data.length);
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
    <main className="mainWrapper">
      <Header />
      {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (
      <div className="bodyContent">
        <RepoHead profile={profile} />
        <div className="content">
          <RepoProfile profile={profile} />

          <div className="cards">
            <ErrorBoundary>
              {currentItems.map((item) => {
                return (
                <RepoCard 
                item={item} 
                profile={profile} 
                key={item.id} 
                // name= {item.name}
                // description={item.description}
                // language={item.language}
                // forks={item.forks}
                // stars={item.stargazers_count}
                // watchers={item.watchers}
                // url={item.html_url}
                // updated={item.updated_at}
                // clone={item.clone_url}
                // visibility={item.private}
                // issues={item.open_issues}
                />);
              })}
            </ErrorBoundary>

            {/* Pagination */}
            <div className="pagination">
              <ul className="pageNumbers">
                <li>
                  <button
                    onClick={handlePrevBtn}
                    disabled={currentPage === pages[0] ? true : false}
                    className={currentPage !==  pages[0] ? "active" : null}
                  >
                    Prev
                  </button>
                </li>
                {showPageNumbers}
                <li>
                  <button
                    onClick={handleNextBtn}
                    disabled={
                      currentPage === pages[pages.length - 1] ? true : false}
                      className={currentPage !==  pages.length ? "active" : null}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      )}
      <Footer/>
    </main>
  );
}
