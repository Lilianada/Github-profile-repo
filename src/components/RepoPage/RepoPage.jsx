import React from "react";
import { Helmet } from "react-helmet-async";
import { MdArrowBackIos } from "react-icons/md";
import Header from "../Header/NavBar";
import './RepoPage.css';

export default function RepositoryPage() {
  
  // const { attorneys } = useAttorneyContext();
  // const getRepo = (id) => {
  //   const filtered = repos.filter(
  //     (repo) => parseInt(repo.id) === parseInt(id)
  //   );
  //   return filtered[0];
  // };
  // return { getRepo };
  
  return (
    <main className="mainWrapper">
      <Helmet>
        <title>Repository Page</title>
        <meta name="description" content="Data for a single repository" />
      </Helmet>
      <Header/>
      <div className="wrapper">
        <div className="headSpace">
          <button className="backBtn">
            Back to Repos</button>
        </div>
        <div className="repoInfo">
            <h1 className="repoName">Repo Name</h1>
            <p className="repoDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at deleniti molestias commodi tenetur sunt?</p>
            <div className="repoDetails"> 
              <p className="name">Visibility: <span className="res"> Public</span></p>
              <p className="name">Last Updated: <span className="res"> 2 days ago</span></p>
              <p className="name">Language: <span className="res"> HTML</span></p>
              <p className="name">Forks: <span className="res"> 1</span></p>
              <p className="name">Open Issues: <span className="res"> 1</span></p>
              <p className="name">Default Branch: <span className="res"> Master</span></p>
              <p className="name">Clone URL: <span className="res"> https://liludyc.git</span></p>
              <p className="viewRepo">View on Github</p>
            </div>
        </div>
      </div>
    </main>
  );
}