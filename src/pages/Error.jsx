import React from "react";
import { Helmet } from "react-helmet-async";

export default function Error() {
  return (
    <>
    <Helmet>
        <title>Error Page</title>
        <meta name="description" content="Shows how Error boundary functions." />
        <link rel="canonical" href="/error" />
      </Helmet>
        <section className="showError">
            <div className="ReactCounter"></div>
        </section>
    </>
  );
}
