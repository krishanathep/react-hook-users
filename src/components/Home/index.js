import React, { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      setLoading(true);
      await fetch(`https://www.mecallapi.com/api/attractions/?_limit=3`)
        .then((res) => res.json())
        .then((res) => {
          setItems(res);
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if(loading===true){
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }



  return (
    <>
      <div className="mt-4 p-5 bg-primary text-white rounded">
        <h1>Jumbotron Example</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat..
        </p>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="mt-5 mb-3" align="center">
            Attractions
          </h2>
        </div>
        {items.map((item) => (
          <div className="col-md-4 mt-2 mb-2" key={item.id}>
            <div className="card">
              <img className="card-img-top" src={item.coverimage}></img>
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.detail.substring(0, 100)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
