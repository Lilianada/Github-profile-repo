import axios from "axios";
import React, { useEffect, useContext, useState } from "react";

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://api.github.com/users/lilianada/repos";
    fetch(url);
    setLoading(true);
    axios
      .get(url + "?page={1}+page={2}")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <DataContext.Provider value={{ data, loading, error, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataContext");
  }
  return context;
};

export default DataProvider;
