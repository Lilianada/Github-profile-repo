import React from "react";
import { Helmet } from "react-helmet-async";
import RepositoriesList from "../components/RepoList/RepoList";

export default function Home() {
 
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
      <RepositoriesList  />
    </>
  );
}
