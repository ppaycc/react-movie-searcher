import s from './ShowCard.module.scss';
import {useEffect} from "react";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setResultThunk} from "../../Redux/ShowCard-reducer";
import poster from './photo_2020-12-28_16-51-34.jpg';
import Preloader from "./Preloader";

const ShowCard = props => {
    const dispatch = useDispatch();
    const data = useSelector(state=> state.showInfo.result);
    const isFetching = useSelector(state=> state.showInfo.isFetching);
    // console.log(data, "data");

    const type = props.match.params.path.split('-')[0];
    const id = parseInt(props.match.params.path.split('-')[1]);

    useEffect(()=>{
        dispatch(setResultThunk(type, id))
    },[])
    ///

    //багает, нашел костыльный выход)
    // if(!isFetching){
        let posterLink = 'https://image.tmdb.org/t/p/original' + data.poster_path;
        return (
            <>
            {isFetching && <Preloader/>}
            <div className={s.mt10} key={Date.now()}>
                <div className={s.main}>
                    <img src={data.poster_path ? posterLink : poster} alt="" className={s.poster}/>
                    <div className={s.description}>
                        <h2>{data.title}</h2>
                        <p><b>Tagline:</b> {data.tagline}</p>
                        <p><b>Overview:</b>  {data.overview}</p>
                        <p><b>Genres:</b> {data.genres && data.genres.map(item=> item.name).join(", ")}</p>
                        <p><b>Runtime:</b> {data.runtime}</p>
                        <p><b>Release date:</b> {data.release_date && data.release_date.replace(/-/g, ".")}</p>
                        <p><b>Status:</b> {data.status}</p>
                        <p><b>For adult:</b> {data.adult ? "YES" : "NO"}</p>
                        <p><b>Original language:</b> {data.original_language && data.original_language.toUpperCase()}</p>
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
            </>
        )
    // } else{
    //     return <Preloader/>
    // }
}

const ShowCardWithRouter = withRouter(ShowCard)

export default ShowCardWithRouter;