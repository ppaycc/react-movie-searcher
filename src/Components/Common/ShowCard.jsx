import s from './ShowCard.module.css';
import {useEffect} from "react";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setResultThunk} from "../../Redux/ShowCard-reducer";
import poster from './photo_2020-12-28_16-51-34.jpg';

const ShowCard = props => {
    const dispatch = useDispatch();
    const data = useSelector(state=> state.showInfo.result)
    // console.log(data, "data");

    if(Object.keys(data).length !== 0){
        console.log("not 0");
        console.log(data, "data")
    } else{
        console.log("0");
    }

    const type = props.match.params.path.split('-')[0];
    const id = parseInt(props.match.params.path.split('-')[1]);

    useEffect(()=>{
        dispatch(setResultThunk(type, id))
    },[])
    ///

    //багает, нашел костыльный выход)
    if(Object.keys(data).length !== 0){
        let posterLink = 'https://image.tmdb.org/t/p/original' + data.poster_path;
        return (
            <div className={s.mt10}>
                <div className={s.main}>
                    <img src={data.poster_path ? posterLink : poster} alt="" className={s.poster}/>
                    <div className={s.description}>
                        <h2>{data.title}</h2>
                        <p><b>Tagline:</b> {data.tagline}</p>
                        <p><b>Overview:</b>  {data.overview}</p>
                        <p><b>Genres:</b> {data.genres.map(item=> item.name).join(", ")}</p>
                        <p><b>Runtime:</b> {data.runtime}</p>
                        <p><b>Release date:</b> {data.release_date.replace(/-/g, ".")}</p>
                        <p><b>Status:</b> {data.status}</p>
                        <p><b>For adult:</b> {data.adult ? "YES" : "NO"}</p>
                        <p><b>Original language:</b> {data.original_language.toUpperCase()}</p>
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
        )
    } else{
        return <div>Loading</div>
    }

    // return (
    //     <div className={s.mt10}>
    //         <div className={s.main}>
    //             <img src={'https://image.tmdb.org/t/p/original' + data.poster_path} alt="" className={s.poster}/>
    //             <div className={s.description}>
    //                 <h2>{data.title}</h2>
    //                 <p>Tagline: {data.tagline}</p>
    //                 <p>Overview: {data.overview}</p>
    //                 <p>Genres: {data.genres.map(item=> item.name).join(", ")}</p>
    //                 <p>Runtime: {data.runtime}</p>
    //                 <p>Release date: {data.release_date}</p>
    //                 <p>Status: {data.status}</p>
    //                 <p>For adult: {data.adult ? "YES" : "NO"}</p>
    //                 <p>Budget: $ {data.budget} </p>
    //                 <p>Revenue: $ {data.revenue}</p>
    //                 <p>Vote average: {data.vote_average}</p>
    //             </div>
    //         </div>
    //     </div>
    // )
}

const ShowCardWithRouter = withRouter(ShowCard)

export default ShowCardWithRouter;