import React, { useEffect, useState } from "react";
import "./player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
 const {id} = useParams();
 const navigate = useNavigate()
  const [apiData,setApiData] = useState({
    name : "",
    key: "",
    published_at : "",
    type : ""
  })
  const url =
   `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDhlOGYwMDJmZmVhNWQ1ZDc2NTlmMjRkNjQ2NGNkNCIsIm5iZiI6MTc2ODU3OTc2NS44MjA5OTk5LCJzdWIiOiI2OTZhNjJiNTI5ZWZmYTQxNjdkYzg4ZjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W05StaFWZ2s6rwP0-GLEEuAexLjrZOaEx1qJkbJDT1E",
    },
  };

  useEffect(()=>{
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setApiData(json.results[0]))
      .catch((err) => console.error(err));
    
    },[])
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>navigate(-1)}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        title="Trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}
export default Player;
