/*import { useEffect, useState } from "react";
import "./App.css";
//import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
//@ts-ignore
import NavBar from "./components/Navbar/Navbar";
import { fetchTopAlbums } from "./components/api/api";
import Section from "./components/Sections/Section";

function App() {
  const [topAlbumData, settopAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    settopAlbumData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
  }, []);
  console.log(topAlbumData, "topAlbumData");
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="sectionWrapper" >
      <Section type="album" title="Top Albums" data={topAlbumData} />
      </div>
      {/* <div className="cardContainer">
      {topAlbumData.map((item) => {
        return <Card key={item.id} data={item} type="album" />;
      })}
      </div> }
    </div>
  );
}

export default App;*/


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


const searchData = [
  // Example search data; this would typically be fetched from an API
  { title: "Album 1", slug: "album-1", songs: [{ artists: ["Artist 1"] }] },
  { title: "Album 2", slug: "album-2", songs: [{ artists: ["Artist 2"] }] },
  // Add more data as needed
];

function App() {
  return (
    <Router>
      <div>
        <Navbar searchData={searchData} />
        <Routes>
          <Route path="/" element={<Hero />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
