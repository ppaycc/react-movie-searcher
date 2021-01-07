import s from './Favorite.module.scss';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {deleteFavoriteItem, getFavorites, getFavoritesCard, resetFavoriteItems} from "../../Redux/Favorite-reducer";
import Card from "../Common/Card/Card";

const Favorite = (props) => {

    const favorites = useSelector(state=> state.favorites.favorites)
    const result = useSelector(state=> state.favorites.results)
    const dispatch = useDispatch();
    useEffect(()=>{
        window.scrollTo(0, 0);
        dispatch(getFavorites());
        dispatch(getFavoritesCard(favorites));
    }, []);
    // dispatch(getFavorites());
    useEffect(()=>{
        dispatch(getFavoritesCard(favorites));
    }, [favorites])

    const items = result.map(item=>{
        return(
            <div className={s.hidden}>
                <Card path={`movie/movie-${item.id}`}
                      date={item['release_date']}
                      title={item['title']}
                      id={item.id}
                      poster={item["poster_path"]}
                      key={item.id}
                      favorite={true}
                />
                <button className={s.favoriteBtn} onClick={()=>dispatch(deleteFavoriteItem(item.id))}>delete</button>
            </div>
        )
    })

    return(
        <div className={s.main}>
            {items.length>0 ? items : <p>You don't have favorites movie</p>}
        </div>
    )
}

export default Favorite;