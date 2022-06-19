import { useState, useEffect } from "react";
import axios from "axios";

const videoData = () => {
  const [data, setData] = useState([]);
const [search, setSearch]= useState("")
  useEffect(() => {
    axios("/api/videos")
    .then((res) => setData(res.data.videos));
  }, []);

  return { data };
};

export { videoData };