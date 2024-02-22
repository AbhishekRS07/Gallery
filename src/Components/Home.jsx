import React, { useEffect, useState } from "react";
import "./home.css"
const Home = () => {
  const [query, setQuery] = useState("mountain");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPhotos = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}`,
        {
          headers: {
            Authorization:
              "DW7ncf4JrVlEKrDRtPpnF14YZkBOPe9v03rhitr9zKcHnlyVJbWarp9E",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from Pexels API");
      }

      const result = await response.json();
      setLoading(false);
      console.log(result.photos);
      setData(result.photos);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, [query]);

const onKeyDownHandler= (e)=>{
    if(e.KeyCode===13){
        getPhotos();
    }
}

  return (
    <div>
      <h1>Photo Gallery</h1>
      <input placeholder="Search for photos" 
      className="inputSearch"
      onKeyDown={onKeyDownHandler}
      onChange={(e)=> setQuery(e.target.value)}
      value={query}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid-container" >
          {data.map((photo) => (
            <div className="cards" key={photo.id}>
              <img
                src={photo.src.large}
                style={{ width: "300px", height: "200px", margin: "5px" }}
              />
              <h4>{photo.alt}</h4>
               <p>{photo.photographer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
