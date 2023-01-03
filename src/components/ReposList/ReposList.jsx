import React, { useEffect, useState } from "react";
import "./ReposList.css";
import Header from "../Header/NavBar";
import axios from "axios";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {IoIosStarOutline} from 'react-icons/io';
import {BiBuildings} from 'react-icons/bi';
import {FiLink, FiUsers} from 'react-icons/fi';
import {BsDot} from 'react-icons/bs';
import RepositoryPage from "../RepoPage/RepoPage";
import { Link } from "react-router-dom";

export default function RepositoriesList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);
  
  
  // Pagination
  // stores current page number, initially 1
  const [currentPage, setCurrentPage] = useState(1);
  // stores no of items we want to display in single page.
  const [pageItems, setPageItems] = useState(9);
  // pages array contains total number of pages (total data e.g 20 / itemsPerPage e.g 5)*20/5 = 4 pages.
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / pageItems); i++) {
    pages.push(i);
  }
  const maxPageNum = 9;
  const minPageNum = 1;
  
  // onclick handler for the buttons
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  // component to display the buttons
  const showPageNumbers = pages.map((number) => {
    if (number < maxPageNum + 1) {
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

 
  // Fetch my github profile
  const fetchProfile = () => {
    const url = "https://api.github.com/users/lilianada"
    axios
    .get(url)
    .then((response) => {
      setLoading(true);
        setProfile(response.data);
        console.log(response.data);
    })
    .catch((err) => {
      setLoading(true);
        setError(err);
    })
    .finally(() => {
        setLoading(false)
    })
  }
  
  if (loading) { <h3>Loading...</h3>}
  
  // Fetch my repositories
  const fetchData = () => {
    const url = `https://api.github.com/users/lilianada/repos?page=${currentPage}&per_page=${pageItems}`;
    setLoading(true);
    axios
      .get(url)
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
   fetchData();
    fetchProfile();
  }, []);

  
  



  // Pagination
  // const nextPage = () => {
  //   setPage(page => page + 1);
  //   fetchData();

  //   setActiveNext(!activePrev);
  //   setTimeout(() => {
  //     setActiveNext(activeNext);
  //   }, 1000);
  // };

  // const prevPage = () => {
  //   setPage(page => page - 1);
  //   fetchData();
  //   setActivePrev(!activePrev);
  //   setTimeout(() => {
  //       setActivePrev(activePrev);
  //   }, 1000);
  // };

  // const [openRepo, setOpenRepo] = useState(false)
  // const isOpen = () => {
  //   setOpenRepo(true);
  // }

  return (
    <main className="mainWrapper">
      <Header />
      <div className="bodyContent">
        <div className="head">
          <h3>Repositories 
            <span>{profile.public_repos}</span> 
            </h3>
        </div>
        <div className="content">
          <ErrorBoundary>
            <div className="profile">
                <img src={profile.avatar_url} alt="Avatar" className="imageAavatar" />
                <div className="identity">
                    <h2 className="profileName">{profile.name} </h2>
                    <p className="profileLogin">{profile.login} </p>
                </div>
                <div className="bio">
                    <p className="bioText">{profile.bio} </p>
                </div>
                <div className="follows">
                    <div className="followers">
                        <FiUsers style={{marginRight: ".5rem"}}/>
                        <p>
                            <span className="textBold">{profile.followers} </span>
                            followers
                        </p>
                    </div>
                    <BsDot fill="#c9d1d9"/>
                    <div className="following">
                        <p>
                            <span className="textBold">{profile.following} </span>
                            following
                        </p>
                    </div>
                </div>
                <div className="locate">
                    <div className="company">
                      <BiBuildings style={{marginRight: ".5rem"}}/>
                      {profile.company && <p> {profile.company} </p>}
                    </div>
                    <div className="blog">
                      <FiLink style={{marginRight: ".5rem"}}/>
                      {profile.blog && <p> {profile.blog} </p>}
                    </div>
                </div>
            </div>
          </ErrorBoundary>
          <div className="cards">
            <ErrorBoundary>
              {
                data.map((item) => {
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
                            <p>
                                {item.language}
                            </p>
                        </div>
                        <div className={`row ${item.stargazers_count === 0 ? 'none' : ''}`}>
                            <IoIosStarOutline fill="#8b949e" style={{marginRight: '.5rem'}}/>
                            <p>
                                {item.stargazers_count}
                            </p>
                        </div>
                      </div>
                      <Link to='/repository'>
                        <button className="viewRepo">View Repo</button>
                      </Link>
                      
                    </div>
                  );
                })
               }
            </ErrorBoundary>

            {/* Pagination */}
            <div className="pagination">
                <ul className="pageNumbers">
                    {showPageNumbers}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
