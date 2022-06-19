import { createContext, useContext, useState } from "react";

const VideoDataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search,setSearch]=useState("")

  return (
    <VideoDataContext.Provider value={{ data, setData,search,setSearch}}>
      {children}
    </VideoDataContext.Provider>
  );
};

const useData = () => useContext(VideoDataContext);

export { useData, DataProvider };