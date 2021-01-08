import s from './ShowCard.module.scss';
import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRecommendedThunk, setResultThunk, setTrailerThunk} from "../../../Redux/ShowCard-reducer";
import poster from '../../Common/photo_2020-12-28_16-51-34.jpg';
import Preloader from "../../Common/Preloader";
import Trailer from "../../Common/Trailer/Trailer";
import {deleteFavoriteItem, getFavorites, setFavorite} from "../../../Redux/Favorite-reducer";
import Card from "../../Common/Card/Card";

const ShowCard = props => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.showInfo.result);
    const isFetching = useSelector(state => state.showInfo.isFetching);
    const trailer = useSelector(state => state.showInfo.trailer);
    const favorites = useSelector(state => state.favorites.favorites);
    const recommendations = useSelector(state => state.showInfo.recommendations);
    const totalRecommendedPage = useSelector(state => state.showInfo.totalRecommendedPage);

    const type = props.match.params.path.split('-')[0];
    const id = parseInt(props.match.params.path.split('-')[1]);


    const isFavorite = favorites.some(item=> item.id===id);
    const [fv, setFv] = useState(isFavorite);
    useEffect(() => {
        window.scrollTo(0, 0,);
        dispatch(setResultThunk(type, id));
        dispatch(setTrailerThunk(id));
        dispatch(getRecommendedThunk(type, id, pageRecommended));
        dispatch(getFavorites());
        if (fv !== isFavorite){
            setFv(fv => !fv);
        }
    }, [type, id, isFavorite])
    const addToFavorite = (type, id) => {
        dispatch(setFavorite(type, id))
        setFv(fv => !fv);
    }
    const [pageRecommended, setPageRecommended] = useState(1);
    useEffect(()=>{
        dispatch(getRecommendedThunk(type, id, pageRecommended));
    }, [pageRecommended, type, id, dispatch])


    console.log("isFavorite",isFavorite, "fv", fv);
    let posterLink = 'https://image.tmdb.org/t/p/original' + data.poster_path;
    return (
        <>

            {isFetching && <Preloader/>}
            <div className={s.mt10} key={Date.now()}>
                <div className={s.main}>
                    {fv ? <button className={s.addBtn} onClick={() => dispatch(deleteFavoriteItem(id))}>Delete from favorite</button>
                    : <button className={s.addBtn} onClick={() => addToFavorite(type, id)}>Add to favorite</button>
                    }
                    <img src={data.poster_path ? posterLink : poster} className={s.poster}/>
                    <div className={s.description}>
                        <h2>{data.title}</h2>
                        { data.tagline && <p><b>Tagline:</b> {data.tagline}</p>}
                        {data.overview && <p><b>Overview:</b> {data.overview}</p>}
                        {data.genres && <p><b>Genres:</b> {data.genres.map(item => item.name).join(", ")}</p>}
                        {data.runtime>0 && <p><b>Runtime:</b> {data.runtime}</p>}
                        {data.release_date && <p><b>Release date:</b> {data.release_date.split('-').reverse().join('.')}</p>}
                        <p><b>Status:</b> {data.status}</p>
                        <p><b>For adult:</b> {data.adult ? "YES" : "NO"}</p>
                        {data.original_language && <p><b>Original language:</b> {data.original_language.toUpperCase()}
                        </p>}
                        {data.budget>0 && <p><b>Budget:</b> $ {data.budget} </p>}
                        {data.revenue>0 && <p><b>Revenue:</b> $ {data.revenue}</p>}
                        {data.vote_average>0 && <p><b>Vote average:</b> {data.vote_average}</p>}
                    </div>
                </div>
                {data.backdrop_path &&
                <div className={s.bg1}>
                    <div className={s.bg}/>
                    <img className={s.img} src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt=""/>
                </div>
                }
            </div>
            {trailer.length>0 && <Trailer trailer={trailer}/>}
            {recommendations.length>0 && <> <h2>Recommendations</h2><div className={s.recommendations}>
                {recommendations.map(item=>{
                    const isInFavorite = favorites.some(fa=> fa.id===item.id);
                    return <div className={s.recommendationsItem} key={item.id}>
                        <Card
                            date={item['release_date']}
                            title={item['title']}
                            id={item.id}
                            poster={item["poster_path"]}
                            path={`movie/movie-${item.id}`}
                            favorite={isInFavorite}
                            />
                    </div>
                })}
                {pageRecommended === totalRecommendedPage || <button className={s.addRecommended} onClick={()=>setPageRecommended(pageRecommended + 1)}>Show more</button>}
            </div></>}
        </>
    )
}

const ShowCardWithRouter = withRouter(ShowCard)

export default ShowCardWithRouter;