import React from "react";
import { Helmet } from "react-helmet-async";
import ErrorPage from "../components/404Page/404Page";

export default function NoMatch() {
  return (
  <>
    <Helmet>
        <title>404 Page</title>
        <meta name="description" content="Page not found!" />
      </Helmet>
      <ErrorPage/>
  </>
  );
}
