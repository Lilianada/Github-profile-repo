import React from "react";
import { Helmet } from "react-helmet-async";
import Counter from "../components/Counter/Counter";

export default function Error() {
  return (
    <>
      <Helmet>
        <title>Error Page</title>
        <meta
          name="description"
          content="Shows how Error boundary functions."
        />
        <link rel="canonical" href="/error" />
      </Helmet>
      <Counter />
    </>
  );
}
