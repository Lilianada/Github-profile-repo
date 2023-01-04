import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/NavBar";
import './RepoPage.css';

export default function RepositoryPage({ item }) {
  
  // const { attorneys } =  ();
  // const getRepo = (id) => {
  //   const filtered = repos.filter(
  //     (repo) => parseInt(repo.id) === parseInt(id)
  //   );
  //   return filtered[0];
  // };
  // return { getRepo };
  
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
            <h1 className="repoName">name</h1>
            {/* <p className="repoDesc">{item.description}</p> */}
            <div className="repoDetails"> 
              {/* <p className="name">Visibility: <span className="res"> {item.visibility}</span></p> */}
              {/* <p className="name">Last Updated: <span className="res">{item.updated_at} </span></p> */}
              {/* <p className="name">Language: <span className="res">{item.language}</span></p> */}
              {/* <p className="name">Forks: <span className="res"> {item.forks} </span></p> */}
              {/* <p className="name">Stars: <span className="res"> {item.stargazer_count} </span></p> */}
              {/* <p className="name">Open Issues: <span className="res"> {item.open_issues} </span></p> */}
              {/* <p className="name">Clone URL: <span className="res"> {item.clone_url}</span></p> */}
              {/* <a href={item.html_url} className="viewRepo">View on Github</a> */}
            </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}