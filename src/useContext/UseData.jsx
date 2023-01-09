import { useDataContext } from "./DataContext";

const UseData = () => {
  const { data } = useDataContext();
  const getData = (id) => {
    const items = data.filter((item) => parseInt(item.id) === parseInt(id));
    return items[0];
  };
  return { getData };
};
export default UseData;