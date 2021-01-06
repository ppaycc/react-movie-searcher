import Card from "../Common/Card/Card";
import s from './Movie.module.scss'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changePortionPage, changeValueMovie, getNewItems, resetPortionCount} from "../../Redux/MoviePage-reducer";
import React from 'react'
import Preloader from "../Common/Preloader";
import InputForm from "../Common/InputForm/InputForm";
import Pagination from "../Common/Pagination/Pagination";
import {getFavorites} from "../../Redux/Favorite-reducer";

const MoviePage = props => {
    const dispatch = useDispatch();
    const query = useSelector(state => state.moviePage.query);
    const result = useSelector(state=> state.moviePage.result);
    const noResult = useSelector(state=> state.moviePage.noResult);
    const url = useSelector(state=> state.moviePage.url);
    const totalPage = useSelector(state=> state.moviePage.totalPage);
    const sought = useSelector(state=> state.moviePage.sought);
    const currentPage = useSelector(state=> state.moviePage.currentPage);
    const isFetching = useSelector(state=> state.moviePage.isFetching);
    const portionPage = useSelector(state=> state.moviePage.portionPage);
    const favorites = useSelector(state=> state.favorites.favorites);
    useEffect(()=>{
        dispatch(resetPortionCount())
    },[sought])
    useEffect(()=>{
        window.scrollTo(0, 0);
        dispatch(getFavorites());
    }, [])


    // const favorites = [{id:603, type: 'movie'}, {id:2374, type: 'movie'}, {id:25675, type: 'tv'}, {id:2234, type: 'tv'}]
    const movieCards =  result.map(item =>{
        const isFavorite = favorites.some(f=> f.id === item.id )
        return <Card date={item['release_date']}
                     title={item['title']}
                     id={item.id}
                     poster={item["poster_path"]}
                     path={`movie/movie-${item.id}`}
                     key={item.id}
                     favorite={isFavorite}
        />
    })

    return (
        <>
            {isFetching && <Preloader/>}
            <div className={s.flex}>
                <div className={s.pages}>
                    {sought.length > 0 ? `Results on request: ${sought}` : ""}
                </div>
                <InputForm query={query} getNewItems={getNewItems} changeValueMovie={changeValueMovie} url={url}/>
            </div>

            <div className={s.pages}>
                {totalPage>0 && <Pagination totalPage={totalPage}
                                           portionPage={portionPage}
                                           getNewItems={getNewItems}
                                           url={url}
                                           sought={sought}
                                           changePortionPage={changePortionPage}
                                           currentPage={currentPage}
                />}
            </div>
            <div className={s.items}>
                {
                   movieCards.length !== 0 ? movieCards : <p>{noResult}</p>
                }
            </div>
        </>
    )
}

export default MoviePage;