import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  const [detail, setDetail] = useState([]);

  const getData = async () => {
   await fetch("https://www.mecallapi.com/api/attractions/"+id)
      .then((res) => res.json())
      .then((result) => setDetail(result));
   
  };

  useEffect(() => {
    getData(id);
    console.log(detail);
  }, [id]);

  return (
    <div>
      <h1>Attactions Detail ID : {id}</h1>

    </div>
  );
}
