import * as axios from "axios";

const SET_RESULT = 'SET_RESULT';

const initialState = {
    result: {},
}

const showReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT : {
            return {...state, result: action.result}
        }
        default : {
            return state;
        }
    }
}
const setResultAC = (result) => {
    return {type: SET_RESULT, result}
}
export const setResultThunk = (type, id) => {
    return dispatch => {
        // window.scrollTo(0,0);
        axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=7f3d862c78d7078a1d152442970fcce6&language=en-US`)
            .then(response => {
                dispatch(setResultAC(response.data));
            })
    }
}

export default showReducer;