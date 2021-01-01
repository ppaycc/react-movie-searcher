import * as axios from "axios";

const SET_NEW_PAGE = 'SET_NEW_PAGE';
const SET_NEW_VALUE = 'SER_NEW_VALUE';
const CHANGE_NEW_QUERY = 'CHANGE_NEW_QUERY';

const initialState = {
    text: 'matrix',
    currentPage: 1,
    allPage: 0,
    result: [],
    firstRequest: `https://api.themoviedb.org/3/trending/movie/day?api_key=7f3d862c78d7078a1d152442970fcce6`,
    searchRequest: 'https://api.themoviedb.org/3/search/movie?api_key=7f3d862c78d7078a1d152442970fcce6&language=en-US'
}

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_VALUE :{
            return {
                ...state,
                text: '',
                result: [...action.result]
            }
        }
        case CHANGE_NEW_QUERY :{
            return {
                ...state, text: action.value
            }
        }
        default : {
            return state;
        }
    }
}

const setNewPageAC = result => {
    return {type: SET_NEW_VALUE, result}
}
export const changeQueryAC = value =>{
    return {type:CHANGE_NEW_QUERY, value}
}
export const getNewItems = (url, query="", page=1) => {
    return dispatch => {
        let Q = query.length>0 ? `&query=${query}` : '';
        console.log(Q);
        console.log(url + "&page=" + page + Q)
        axios.get(url + "&page=" + page + Q).then(response => {
            dispatch(setNewPageAC(response.data.results));
        })
    }
}


export default MovieReducer;