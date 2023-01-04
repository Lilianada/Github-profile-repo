import { useContext } from "react";

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/lilianada/repos");
    setLoading(true);
    axios
      .get(url + "?page={1}+page={2}")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {props.children}
    </DataContext.Provider>
  );
};


export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataContext");
    }
    return context;
};

export default DataProvider;