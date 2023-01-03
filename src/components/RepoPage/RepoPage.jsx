import React from "react";
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
      <Header/>
      <h3>Body</h3>
    </main>
  );
}
