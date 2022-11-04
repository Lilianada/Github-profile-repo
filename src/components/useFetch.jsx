import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    setLoading(true); 
    axios.get(url).then((response) => {
      setData(response.data.results);
      console.log(response.data.results)
      setLoading(true);
    }).catch((err) => {
      setError(err);
      setLoading(true);
    }).finally(() => {
        setLoading(false);
    })
  }, [url]);
   return { data, error, loading };
}
