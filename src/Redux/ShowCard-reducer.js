import * as axios from "axios";

const SET_RESULT = 'SET_RESULT';
const SET_FETCHING = 'SET_FETCHING';
const SET_TRAILER = 'SET_TRAILER';
const SET_RECOMMENDED = 'SET_RECOMMENDED';
const SET_TOTAL_PAGE_RECOMMENDED = 'SET_TOTAL_PAGE_RECOMMENDED';

const initialState = {
    result: {},
    trailer: [],
    recommendations: [],
    totalRecommendedPage: 1,
    isFetching: false
}

const showReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT : {
            return {...state, result: action.result}
        }
        case SET_TRAILER :{
            return {
                ...state, trailer: action.trailer
            }
        }
        case SET_FETCHING :{
            return {
                ...state, isFetching: !state.isFetching
            }
        }
        case SET_RECOMMENDED :{
            return {
                ...state, recommendations: [...action.payload]
            }
        }
        case SET_TOTAL_PAGE_RECOMMENDED :{
            return {
                ...state, totalRecommendedPage: action.payload
            }
        }
        default : {
            return state;
        }
    }
}
const setFetching =() => {
    return {type: SET_FETCHING}
}
const setResultAC = (result) => {
    return {type: SET_RESULT, result}
}
export const setResultThunk = (type, id) => {
    return dispatch => {
        dispatch(setFetching());
        // window.scrollTo(0,0);
        axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=7f3d862c78d7078a1d152442970fcce6&language=en-US`)
            .then(response => {
                dispatch(setResultAC(response.data));
                dispatch(setFetching());
            })
    }
}
const setTrailer = (trailer) => {
    return {type: SET_TRAILER, trailer}
}
export const setTrailerThunk = id => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=7f3d862c78d7078a1d152442970fcce6&language=en-US
`)
            .then(response=>{
                if(response.data.results.length > 0){
                    dispatch(setTrailer(response.data.results))
                }
                else{
                    dispatch(setTrailer([]));
                }
            })
    }
}
const setRecommended = (payload) => {
    return {type: SET_RECOMMENDED, payload}
}
const setTotalPageRecommended = payload => {
    return {type: SET_TOTAL_PAGE_RECOMMENDED, payload}
}
export const getRecommendedThunk = (type, id, page) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=7f3d862c78d7078a1d152442970fcce6&language=en-US&page=${page}
`)
            .then(response=> {
                debugger
                dispatch(setTotalPageRecommended(response.data.total_pages))
                dispatch(setRecommended(response.data.results))
            })
    }
}
// https://api.themoviedb.org/3/movie/603/recommendations?api_key=7f3d862c78d7078a1d152442970fcce6&language=en-US&page=1

export default showReducer;