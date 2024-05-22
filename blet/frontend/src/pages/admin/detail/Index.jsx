import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setdata] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(id);
      setdata(response.data);
      console.log(data);
    };
    fetchData();
  }, [id]);

  return <p>{data.name}</p>;
};

export default Detail;
