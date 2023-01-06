import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import RepositoriesList from "../components/ReposList/ReposList";
import UseData from "../components/ContextApi/UseData";

export default function Home() {
  let { id } = useParams();
  let { getData } = UseData();
  return (
    <>
      <Helmet>
        <title>Repository Page</title>
        <meta
          name="description"
          content="List of all the repositories in Lilianada's Github portfolio."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <RepositoriesList {...getData(id)} />
    </>
  );
}
