import React, { useEffect, useRef, useState } from "react";

import "./titlecard.css";
import { Link } from "react-router-dom";

function TitleCard({ title, category }) {

  const cardRef = useRef();
  const [apiData,setApiData] = useState([])
  const url =
    `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDhlOGYwMDJmZmVhNWQ1ZDc2NTlmMjRkNjQ2NGNkNCIsIm5iZiI6MTc2ODU3OTc2NS44MjA5OTk5LCJzdWIiOiI2OTZhNjJiNTI5ZWZmYTQxNjdkYzg4ZjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W05StaFWZ2s6rwP0-GLEEuAexLjrZOaEx1qJkbJDT1E",
    },
  };

  const wheelhandle = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setApiData(json.results))
      .catch((err) => console.log(err));
    cardRef.current.addEventListener("wheel", wheelhandle);
  }, []);
  return (
    <div className="title-card">
      <h2>{title ? title : "Popular on netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCard;
