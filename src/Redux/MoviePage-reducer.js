import * as axios from "axios";

const SET_NEW_RESULT = 'SET_NEW_RESULT';
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE';
const CHANGE_VALUE_MOVIE = 'CHANGE_VALUE_MOVIE';
const NOT_FOUND = 'NOT_FOUND';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const CHANGE_CURRENT_PORTION_FOR_PAGE = 'CHANGE_CURRENT_PORTION_FOR_PAGE';
const RESET_PORTION_COUNT = 'RESET_PORTION_COUNT';

const initialState = {
    query: '',
    sought: '',
    textForPagination: '',
    currentPage: 1,
    totalPage: '',
    result: [],
    noResult: `You can find something`,
    isFetching: false,
    portionPage: 1,
    url: 'https://api.themoviedb.org/3/search/movie?api_key=7f3d862c78d7078a1d152442970fcce6&language=en-US'
}

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_RESULT :{
            return {
                ...state, result: [...action.result], sought: action.query, query: ''
            }
        }
        case SET_TOTAL_PAGE :{
            return {
                ...state, totalPage: action.page
            }
        }
        case CHANGE_VALUE_MOVIE :{
            return {
                ...state, query: action.value
            }
        }
        case NOT_FOUND :{
            return {
                ...state, noResult: "I couldn't find it. Try again"
            }
        }
        case SET_CURRENT_PAGE :{
            return {
                ...state, currentPage: action.page
            }
        }
        case SET_IS_FETCHING :{
            return {
                ...state, isFetching: !state.isFetching
            }
        }
        case CHANGE_CURRENT_PORTION_FOR_PAGE :{
            return {
                ...state, portionPage: state.portionPage + action.portionPage
            }
        }
        case RESET_PORTION_COUNT :{
            return {
                ...state, portionPage: 1
            }
        }
        default : {
            return state;
        }
    }
}
export const resetPortionCount = () => {
    return {type: RESET_PORTION_COUNT}
}
export const changePortionPage = (portionPage) => {
    return {type: CHANGE_CURRENT_PORTION_FOR_PAGE, portionPage}
}
const setIsFetching = () => {
    return {type: SET_IS_FETCHING}
}
const setNewResult = (result, query) => {
    return {type: SET_NEW_RESULT, result, query }
}
const setTotalPage = page => {
    return {type: SET_TOTAL_PAGE, page}
}
export const changeValueMovie = value => {
    return {type: CHANGE_VALUE_MOVIE, value}
}
const notFound = () => {
    return {type: NOT_FOUND}
}
const setCurrentPage = page => {
    return {type:SET_CURRENT_PAGE, page}
}
export const getNewItems = (url, query="", page=1) => {
    return dispatch => {
        dispatch(setIsFetching());
        let Q = query.length>0 ? `&query=${query}` : '';
        axios.get(url + "&page=" + page + Q).then(response => {
            if (response.data.results.length === 0){
                dispatch(notFound());
                dispatch(setTotalPage(''))
                dispatch(setNewResult([], query));
                dispatch(setIsFetching());
            } else {
                dispatch(setCurrentPage(page))
                dispatch(setNewResult(response.data.results, query));
                dispatch(setTotalPage(response.data.total_pages));
                dispatch(setIsFetching());
            }
        })
    }
}


export default MovieReducer;