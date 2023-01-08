import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import UseData from "../useContext/UseData";
import RepositoryPage from "../components/RepoPage/RepoPage";

export default function Data() {
  let { id } = useParams();
  let { getData } = UseData();
  return <>
    <Helmet>
        <title>Repository Page</title>
        <meta name="description" content="Data for a single repository" />
      </Helmet>
      <RepositoryPage {...getData(id)}/>
  </>;
}
