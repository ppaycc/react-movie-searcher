import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import TrendingReducer from "./TrandingPage-reducer";
import resultsReducer from "./Relusts-reducer";
import MovieReducer from "./MoviePage-reducer";

const reducers = combineReducers({
    trendingPage: TrendingReducer,
    moviePage: MovieReducer,
    results: resultsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;