import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import TitleCard from "../../components/TitleCard/TitleCard";

function Home() {
  return (
    <div className="relative h-screen w-full text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Background image */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="hero_banner.jpg"
          alt="Hero Background"
        />

        {/* Overlay gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black"></div>

        {/* Content */}
        <div className="absolute bottom-20 left-10 md:left-20 max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Watch Your Favorite Movies
          </h1>
          <p className="text-sm md:text-lg">
            Stream unlimited movies, TV shows, and more. Watch anywhere. Cancel
            anytime.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-red-700 hover:bg-red-500 text-white font-semibold px-6 py-2 !important rounded transition duration-300">
              Play
            </button>

            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded transition duration-300">
              More Info
            </button>

          </div>
          <TitleCard/>
        </div>
      </div>
    </div>
  );
}

export default Home;
