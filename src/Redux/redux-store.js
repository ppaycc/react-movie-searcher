import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import TrendingReducer from "./TrandingPage-reducer";
// import resultsReducer from "./Relusts-reducer";
import MovieReducer from "./MoviePage-reducer";
import showReducer from "./ShowCard-reducer";
import FavoriteReducer from "./Favorite-reducer";

const reducers = combineReducers({
    // trendingPage: TrendingReducer,
    moviePage: MovieReducer,
    // results: resultsReducer,
    showInfo: showReducer,
    favorites: FavoriteReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;