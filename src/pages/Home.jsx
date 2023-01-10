import React from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader/Loader";
import RepositoriesList from "../components/RepoList/RepoList";
import { DataContext, useDataContext } from "../useContext/DataContext";

export default function Home() {
  const { loading } = useDataContext(DataContext);
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
      {loading ? <Loader /> : <RepositoriesList />}
    </>
  );
}
