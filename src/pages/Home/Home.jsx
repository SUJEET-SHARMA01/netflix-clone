import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TitleCard from "../../components/TitleCard/TitleCard";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import Footer from '../../components/Footer/Footer'

import "./home.css";
function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />

        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />

          <p className="hero-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>

          <div className="hero-btn">
            <button>▶ Play</button>
            <button className="btn-dark">More Info</button>
          </div>
          <TitleCard/>
        </div>
  
      </div>
      {/* ✅ HERO KE BAHAR */}
      <div className="titleCard">
        <TitleCard title={"Popular"} category={"popular"}/>
        <TitleCard title={"Top Rated"} category={"top_rated"}/>
        <TitleCard title={"Upcoming"} category={"upcoming"}/>
        <TitleCard title={"Trending Movies"} category={"now_playing"} />

      </div>
       <Footer />
    </div>
  );
}

export default Home;
