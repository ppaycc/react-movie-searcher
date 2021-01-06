import * as axios from 'axios';

const GET_FAVORITE = 'GET_FAVORITE';
const SET_FAVORITE = 'SET_FAVORITE';
const SET_FAVORITE_CARD = 'SET_FAVORITE_CARD';
const RESET_FAVORITE_ITEMS = 'RESET_FAVORITE_ITEMS';
const DELETE_FAVORITE_ITEM = 'DELETE_FAVORITE_ITEM';

const initialState = {
    favorites: [],
    results: []
}

const FavoriteReducer = (state = initialState, action) => {
    switch (action.type){

        case GET_FAVORITE :{
            const arr = JSON.parse(localStorage.getItem('favorite')) || [];
            // const arr = [{id:603, types:123123123}, {id:604, types:21212}]
            return {
                ...state, favorites: arr
            }
        }
        case SET_FAVORITE :{
            const newItem = {id: action.id, type: action.kind}
            const arr = JSON.parse(localStorage.getItem('favorite')) || []
            arr.push(newItem);
            localStorage.setItem('favorite', JSON.stringify(arr))
            return {
                ...state
            }
        }
        case SET_FAVORITE_CARD :{
            return {
                ...state, results: [...action.items]
            }
        }
        case RESET_FAVORITE_ITEMS :{
            return {
                ...state, results: []
            }
        }
        case DELETE_FAVORITE_ITEM :{
            const newArr = state.favorites.filter(el=> el.id !== action.id);
            localStorage.setItem('favorite', JSON.stringify(newArr))
            return {
                ...state, favorites: [...newArr]
            }
        }
        default :{
            return state
        }
    }
}

export const getFavorites = () => {
    return {type: GET_FAVORITE}
}
export const setFavorite = (kind, id) => {
    return {type: SET_FAVORITE, kind, id}
}
const setFavoritesCard = (items) => {
    return {type: SET_FAVORITE_CARD, items}
}
export const resetFavoriteItems = () => {
    return {type: RESET_FAVORITE_ITEMS}
}
export const deleteFavoriteItem = id => {
    return {type: DELETE_FAVORITE_ITEM, id}
}
export const getFavoritesCard = (item) => {
    return async dispatch => {
        // dispatch(resetFavoriteItems());
        const arr = [];
        for(let i = 0; i < item.length; i++){

        await axios.get(`https://api.themoviedb.org/3/${item[i].type}/${item[i].id}?api_key=7f3d862c78d7078a1d152442970fcce6&language=en-US`)
            .then(response=>{
                // debugger
                arr.push(response.data)
                // dispatch(setFavoritesCard(response.data));
            })
        }
        dispatch(setFavoritesCard(arr));
    }
}

export default FavoriteReducer;






