import s from './ShowCard.module.scss';
import {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setResultThunk, setTrailerThunk} from "../../../Redux/ShowCard-reducer";
import poster from '../../Common/photo_2020-12-28_16-51-34.jpg';
import Preloader from "../../Common/Preloader";
import Trailer from "../../Common/Trailer/Trailer";
import {setFavorite} from "../../../Redux/Favorite-reducer";

const ShowCard = props => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.showInfo.result);
    const isFetching = useSelector(state => state.showInfo.isFetching);
    const trailer = useSelector(state => state.showInfo.trailer);
    const favorites = useSelector(state => state.favorites.favorites);

    const type = props.match.params.path.split('-')[0];
    const id = parseInt(props.match.params.path.split('-')[1]);

    useEffect(() => {
        window.scrollTo(0, 0,);
        dispatch(setResultThunk(type, id))
        dispatch(setTrailerThunk(id));
    }, [])
    const addToFavorite = (type, id) => {
        dispatch(setFavorite(type, id))
        setFv(fv => !fv);
    }
    const isFavorite = favorites.some(item=> item.id===id);
    const [fv, setFv] = useState(isFavorite);
    let posterLink = 'https://image.tmdb.org/t/p/original' + data.poster_path;
    return (
        <>
            {fv || <button onClick={() => addToFavorite(type, id)}>Add to favorite</button>}
            {isFetching && <Preloader/>}
            <div className={s.mt10} key={Date.now()}>
                <div className={s.main}>
                    <img src={data.poster_path ? posterLink : poster} className={s.poster}/>
                    <div className={s.description}>
                        <h2>{data.title}</h2>
                        <p><b>Tagline:</b> {data.tagline}</p>
                        <p><b>Overview:</b> {data.overview}</p>
                        <p><b>Genres:</b> {data.genres && data.genres.map(item => item.name).join(", ")}</p>
                        <p><b>Runtime:</b> {data.runtime}</p>
                        <p><b>Release date:</b> {data.release_date && data.release_date.replace(/-/g, ".")}</p>
                        <p><b>Status:</b> {data.status}</p>
                        <p><b>For adult:</b> {data.adult ? "YES" : "NO"}</p>
                        <p><b>Original language:</b> {data.original_language && data.original_language.toUpperCase()}
                        </p>
                        <p><b>Budget:</b> $ {data.budget} </p>
                        <p><b>Revenue:</b> $ {data.revenue}</p>
                        <p><b>Vote average:</b> {data.vote_average}</p>
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
        </>
    )
    // } else{
    //     return <Preloader/>
    // }
}

const ShowCardWithRouter = withRouter(ShowCard)

export default ShowCardWithRouter;