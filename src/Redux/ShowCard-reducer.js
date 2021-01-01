import * as axios from "axios";

const SET_RESULT = 'SET_RESULT';

//baseUrl: `https://api.themoviedb.org/3/trending/all/day?`

const initialState = {
    result: [],
}

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT : {
            return {...state, result: [...action.result]}
        }
        default : {
            return state;
        }
    }
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

export default resultsReducer;