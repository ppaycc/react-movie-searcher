import './App.scss';
import Header from "./Components/Header/Header";
import {Route} from "react-router-dom";
import React from "react";
import MoviePage from "./Components/Movie/Movie";
import ShowCard from "./Components/Common/ShowCard";
import TrendingPage from "./Components/Trending/Trending";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="block">
        <Route  path='/trending/:path?' render={()=> <TrendingPage/>} />
        <Route exact path='/tvshow/:path?' render={()=> <TrendingPage/>} />

        <Route exact path='/movie' render={()=> <MoviePage/>} />
        <Route exact path='/movie/:path' render={()=> <ShowCard/>} />
        </div>
    </div>
  );
}

export default App;
