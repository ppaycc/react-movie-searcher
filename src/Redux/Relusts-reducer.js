import * as axios from "axios";

const CHANGE_MEDIA_TYPE = 'CHANGE_MEDIA_TYPE';
const CHANGE_TIME_WINDOW = 'CHANGE_TIME_WINDOW';
const SET_RESULT = 'SET_RESULT';

//baseUrl: `https://api.themoviedb.org/3/trending/all/day?`

const initialState = {
    mediaType: 'tv',
    timeWindow: 'day',
    result: [],
    baseUrl: `https://api.themoviedb.org/3/trending/`
}

const TrendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT : {
            return {...state, result: [...action.result]}
        }
        case CHANGE_TIME_WINDOW :{
            return {...state, timeWindow: action.timeWindow}
        }
        case CHANGE_MEDIA_TYPE  :{
            return {...state, mediaType: action.mediaType}
        }
        default : {
            return state;
        }
    }
}
export const changeTimeWindowAC = timeWindow => {
    return {type:CHANGE_TIME_WINDOW, timeWindow}
}
export const changeMediaTypeAC = mediaType => {
    return {type:CHANGE_MEDIA_TYPE, mediaType}
}
export const setResultAC = (result) => {
    return {type: SET_RESULT, result}
}
export const setResultThunk = (url, mediaType, timeWindow) => {
    return dispatch => {
        // window.scrollTo(0,0);
        axios.get(`${url}${mediaType}/${timeWindow}?api_key=7f3d862c78d7078a1d152442970fcce6`)
            .then(response => {
                dispatch(setResultAC(response.data.results));
            })
    }
}

export default TrendingReducer;