import Card from "../Common/Card";
import s from './Movie.module.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeValueMovie, getNewItems} from "../../Redux/MoviePage-reducer";
import React from 'react'

const MoviePage = props => {

    const dispatch = useDispatch();
    const query = useSelector(state => state.moviePage.query);
    const result = useSelector(state=> state.moviePage.result);
    const noResult = useSelector(state=> state.moviePage.noResult);
    const url = useSelector(state=> state.moviePage.url);
    const totalPage = useSelector(state=> state.moviePage.totalPage);
    const sought = useSelector(state=> state.moviePage.sought);
    const currentPage = useSelector(state=> state.moviePage.currentPage);

    const movieCards =  result.map(item =>{
        return <Card date={item['release_date']}
                     title={item['title']}
                     id={item.id}
                     poster={item["poster_path"]}
                     path={`movie/movie-${item.id}`}
        />
    })
    console.log(currentPage)
    let pages = [];
    for(let i = 1; i<=totalPage; i++){
        pages.push(i);
    }
    const Paginator = (props) => {
        const portionCount = props.totalPage/10;
        const [portionNumber, setPortionNumber] = useState(1);
        const left = (portionNumber -1) * 10 + 1;
        const right = portionNumber * 10;

        return (
            <div>
                {
                    <button className={s.paginationBtn} disabled={portionNumber===1} onClick={()=>setPortionNumber(portionNumber-1)}>{"<<"}</button>
                }
                <div className={s.paginationContainerItem}>
                {
                    pages.filter(p=> p >= left && p < right +1)
                        .map(p=>{
                            return <span className={currentPage===p ? s.paginationItemActive : s.paginationItem} onClick={()=>dispatch(getNewItems(url, sought, p))}>{p}</span>
                        })
                }
                </div>
                {
                   <button className={s.paginationBtn} disabled={portionCount < portionNumber} onClick={()=>{setPortionNumber(portionNumber+1)}}>{'>>'}</button>
                }
            </div>
        )

    }
    return (
        <>
            <div className={s.flex}>
                <div className={s.pages}>
                    {sought.length > 0 ? `Results on request: ${sought}` : ""}
                </div>
                <div className={s.input}>
                    <input placeholder="Type here..." type="text" value={query}
                           onChange={(e)=>dispatch(changeValueMovie(e.currentTarget.value))}/>
                    <button onClick={()=>dispatch(getNewItems(url, query))}>Search</button>
                </div>
            </div>
            <div className={s.pages}>
                {totalPage>0 ? <Paginator totalPage={totalPage}/> : ''}
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