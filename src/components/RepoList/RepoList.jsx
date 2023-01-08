import React, { useEffect, useState } from "react";
import Header from "../Header/NavBar";
import axios from "axios";
import RepoCard from "./RepoCard";
import RepoProfile from "./RepoProfile";
import RepoHead from "./RepoHead";
import Footer from "../Footer/Footer";
import { DataContext, useDataContext } from "../../useContext/DataContext";
import "./RepoList.css";

export default function RepositoriesList() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);

  // Fetch my github profile
  const fetchData = async () => {
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
  
  useEffect(() => {
    fetchData();
  }, []);

  const { data } = useDataContext(DataContext);

  return (
    <main className="mainWrapper">
      <Header />
        <div className="bodyContent">
          <RepoHead profile={profile} />
          <div className="content">
            <RepoProfile profile={profile} />
            <div className="cards">
              <RepoCard profile={profile} data={data} />
            </div>
          </div>
        </div>
      <Footer />
    </main>
  );
}
