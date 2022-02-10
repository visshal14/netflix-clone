
import './App.css';
import Row from "./Row"
import React from "react"
import Banner from "./Banner"
import Nav from "./Nav"
import requests from "./requests"

function App() {
  return (
    <div className="App">
      <Nav/>
     <Banner/>
     <Row titles="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row titles="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row titles="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row titles="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row titles="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row titles="Horror Movies" fetchUrl={requests.fetchHorrorHovies} />
     <Row titles="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row titles="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
