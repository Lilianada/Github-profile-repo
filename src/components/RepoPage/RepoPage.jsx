import React from "react";
import Header from "../Header/NavBar/NavBar";
import './RepoPage.css';

export default function RepositoryPage() {
  
  const { attorneys } = useAttorneyContext();
  const getRepo = (id) => {
    const filtered = repos.filter(
      (repo) => parseInt(repo.id) === parseInt(id)
    );
    return filtered[0];
  };
  // return { getRepo };
  const fetchData = () => {
    const url = `https://api.github.com/users/lilianada/repos?page=${page}&per_page=12`;
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

  return (
    <main className="wrapper">
      <Header/>
      <h3>Body</h3>
    </main>
  );
}
