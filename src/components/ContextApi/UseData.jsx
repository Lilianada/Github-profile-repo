import { useDataContext } from "./DataContext";

export const UseData = () => {
  const { data } = useDataContext();
  const getData = (id) => {
    const items = data.filter((item) => parseInt(item.id) === parseInt(id));
    return items[0];
  };
  return { getData };
};
