import './App.css';
import Header from "./Components/Header/Header";
import {Route} from "react-router-dom";
import React from "react";
import TrendingPageContainer from "./Components/Trending/TrendingContainer";
import MoviePage from "./Components/Movie/Movie";
import ShowCard from "./Components/Common/ShowCard";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="block">
        {/*<Route  path='/trending/:path?' render={()=> <TrendingPageContainer/>} />*/}
        <Route exact path='/movie' render={()=> <MoviePage/>} />
        <Route exact path='/movie/:path' render={()=> <ShowCard/>} />
        </div>
    </div>
  );
}

export default App;
