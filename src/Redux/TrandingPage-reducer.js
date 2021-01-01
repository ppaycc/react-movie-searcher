import * as axios from "axios";

const CHANGE_MEDIA_TYPE = 'CHANGE_MEDIA_TYPE';
const CHANGE_TIME_WINDOW = 'CHANGE_TIME_WINDOW';
const SET_RESULT = 'SET_RESULT';

//baseUrl: `https://api.themoviedb.org/3/trending/all/day?`

const initialState = {
    mediaType: 'all',
    timeWindow: 'day',
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

export default TrendingReducer;