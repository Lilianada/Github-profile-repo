import React, { useEffect, useState } from "react";
import "./RepoPage.css";
import Header from "../Header/NavBar/NavBar";
import axios from "axios";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {IoIosStarOutline} from 'react-icons/io'

export default function RepositoryPage() {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    const url = `https://api.github.com/users/lilianada/repos?page=1&per_page=10`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(true);
    })
    .catch((err) => {
        setError(err);
        setLoading(true);
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
        setProfile(response.data);
        setLoading(true);
        console.log(response.data);
    })
    .catch((err) => {
        setError(err);
        setLoading(true);
    })
    .finally(() => {
        setLoading(false)
    })
  }

  useEffect(() => {
    fetchData();
    fetchProfile();
  }, []);



//   const nextPage = () => {
//     setPage((page) => page + 1);
//     fetchData();
//   };

//   const prevPage = () => {
//     setPage((page) => page - 1);
//     fetchData();
//   };

  return (
    <main className="wrapper">
      <Header />
      <div className="bodyContent">
        {/* <div className="head">
          <h3>Repositories {profile.public_repos} </h3>
        </div> */}
        <div className="content">
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
                    <div className="followers"></div>
                    <div className="following"></div>
                </div>
                <div className="locate">
                    <div className="company">
                        
                    </div>
                    <div className="loacation">

                    </div>
                </div>
            </div>
          <div className="cards">
            <ErrorBoundary>
              {loading ? (
                <p>loading...</p>
              ) : (
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
              )}
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </main>
  );
}
