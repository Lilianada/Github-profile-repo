import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/NavBar";
import './RepoPage.css';

export default function RepositoryPage(props) {
  const{
    name, 
    description,
    visibility,
    language,
    stargazers_count,
    forks,
    html_url,
    updated_at,
    clone_url,
    open_issues
  } = props;
  
  return (
    <main className="mainWrapper">
      <Header/>
      <div className="bodyContent">
        <div className="headSpace">
          <Link className="backBtn" to="/" >
            Back to Repos
          </Link>
        </div>
        <div className="repoInfo">
            <h1 className="repoName">{name}</h1> 
            <p className="repoDesc">{description}</p>
            <div className="repoDetails"> 
              <p className="name">Visibility: <span className="res"> {visibility}</span></p>
              <p className="name">Last Updated: <span className="res">{updated_at} </span></p>
              <p className="name">Language: <span className="res">{language}</span></p>
              <p className="name">Forks: <span className="res"> {forks} </span></p>
              <p className="name">Stars: <span className="res"> {stargazers_count} </span></p>
              <p className="name">Open Issues: <span className="res"> {open_issues} </span></p>
              <p className="name">Clone URL: <span className="res"> {clone_url}</span></p>
              <a href={html_url} className="viewRepo">View on Github</a>
            </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}