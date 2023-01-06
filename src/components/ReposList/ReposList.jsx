import React, { useEffect, useState } from "react";
import Header from "../Header/NavBar";
import axios from "axios";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import RepoCard from "./RepoCard";
import RepoProfile from "./RepoProfile";
import RepoHead from "./RepoHead";
import "./ReposList.css";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import UseData from "../ContextApi/UseData";

export default function RepositoriesList() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);

  // Fetch my github profile
  useEffect(() => {
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
  }, []);

  let { id } = useParams();
  let { getData } = UseData();
  console.log(getData()); // This is the data from the context api but it says undefined

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
              <RepoCard profile={profile} {...getData(id)} />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
