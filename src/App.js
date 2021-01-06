import './App.scss';
import Header from "./Components/Header/Header";
import {Redirect, Route} from "react-router-dom";
import React from "react";
import MoviePage from "./Components/Movie/Movie";
import ShowCard from "./Components/Movie/ShowCard/ShowCard";
import Favorite from "./Components/Favorite/Favorite";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="block">

        <Route exact path='/movie' render={()=> <MoviePage/>} />
        <Route exact path='/movie/:path' render={()=> <ShowCard/>} />

        <Route exact path='/favorite' render={()=> <Favorite/> } />

        <Route exact path='/' render={()=> <Redirect to='/movie'/> }/>

        </div>
    </div>
  );
}

export default App;
