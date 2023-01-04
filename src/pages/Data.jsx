import React from "react";
import { Helmet } from "react-helmet-async";
import RepositoryPage from "../components/RepoPage/RepoPage";

export default function Data() {
  return <>
    <Helmet>
        <title>Repository Page</title>
        <meta name="description" content="Data for a single repository" />
      </Helmet>
      <RepositoryPage/>
  </>;
}
