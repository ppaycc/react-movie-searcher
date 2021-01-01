import './App.css';
import Header from "./Components/Header/Header";
import {Route} from "react-router-dom";
import React from "react";
import TrendingPageContainer from "./Components/Trending/TrendingContainer";
import MoviePage from "./Components/Movie/Movie";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="block">
        <Route path='/trending/:path?' render={()=> <TrendingPageContainer/>} />
        <Route path='/movie/:path?' render={()=> <MoviePage/>} />
        </div>
    </div>
  );
}

export default App;
