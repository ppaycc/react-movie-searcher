import * as axios from "axios";

const SET_RESULT = 'SET_RESULT';
const SET_FETCHING = 'SET_FETCHING';

const initialState = {
    result: {},
    isFetching: false
}

const showReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT : {
            return {...state, result: action.result}
        }
        case SET_FETCHING :{
            return {
                ...state, isFetching: !state.isFetching
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

export default showReducer;