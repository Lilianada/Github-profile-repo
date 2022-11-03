import React, { useEffect, useState } from "react";
import "./ReposList.css";
import Header from "../Header/NavBar/NavBar";
import axios from "axios";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {IoIosStarOutline} from 'react-icons/io';
import {FcPrevious, FcNext } from 'react-icons/fc';
import {FiUsers} from 'react-icons/fi';
import {BsDot} from 'react-icons/bs';

export default function RepositoriesList() {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [activePrev, setActivePrev] = useState(false);
  const [activeNext, setActiveNext] = useState(false);

  const url = `https://api.github.com/users/lilianada/repos?page=${page}&per_page=10`;
  const fetchData = () => {
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

  if (loading) { }

  useEffect(() => {
    fetchData();
    fetchProfile();
  }, []);



  const nextPage = () => {
    setPage((page) => page + 1);
    fetchData();
    setActiveNext(!activeNext);
    setTimeout(() => {
        setActiveNext(activeNext);
    }, 1000);
};

const prevPage = () => {
    setPage((page) => page - 1);
    fetchData();
    setActivePrev(!activePrev);
    setTimeout(() => {
        setActivePrev(activePrev);
    }, 1000);
  };

  return (
    <main className="wrapper">
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

                    </div>
                    <div className="loacation">

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
                      <a href=" {item.html_url}" className="repoLink">
                        <h5 className="repoName"> {item.name} </h5>
                        <div className="repoStatus">
                            <p> {item.visibility} </p>
                        </div>
                      </a>
                      <div className="description">
                        <p> {item.description} </p>
                      </div>
                      {/* <div className="updated">
                        <p>
                            {item.updated_at}
                        </p>
                      </div> */}
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
                    </div>
                  );
                })
              }
            </ErrorBoundary>
            <div className="buttonsWrap">
                <button className={`btnDisabled ${activePrev ? 'btnActive' : '' }`} onClick={prevPage}>
                    <FcPrevious className={`arrowDisabled ${activePrev ? 'arrowActive' : '' }`} />
                    Previous
                </button>
                <button className={`btnDisabled ${activeNext ? 'btnActive' : '' }`} onClick={fetchData}>
                    Next
                    <FcNext className={`arrowDisabled ${activeNext ? 'arrowActive' : '' }`} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
