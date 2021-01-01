import Card from "../Common/Card";
import s from './Movie.module.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeQueryAC, getNewItems} from "../../Redux/MoviePage-reducer";

const MoviePage = props => {

    const query = useSelector(state => state.moviePage.text);
    const firstRequest = useSelector(state => state.moviePage.firstRequest);
    const result = useSelector(state => state.moviePage.result);
    const searchRequest = useSelector(state => state.moviePage.searchRequest);
    const currentPage = useSelector(state => state.moviePage.currentPage);
    const dispatch = useDispatch();

    useEffect(()=>{
        window.scrollTo(0,0);
        if (result.length <= 0){
            dispatch(getNewItems(firstRequest));
        }
    }, [firstRequest, result])
    // if (result.length === 0) {
    //     dispatch(getNewItems(url));
    // }
    // const get = () => {
    //     dispatch(getNewItems(url));
    // }

    const changeText = e => {
        console.log(e.target.value);
        dispatch(changeQueryAC(e.target.value));
    }
    const clickBtn = () =>{
        debugger
        dispatch(getNewItems(searchRequest, query, currentPage))
    }
    console.log(result);
    debugger
    return (
        <>
            <div className={s.input}>
                <input placeholder="Type here..." type="text" value={query} onChange={(e)=>changeText(e)}/>
                <button onClick={clickBtn}>Search</button>
            </div>
            <div className={s.items}>
                {
                    result.map(item =>{
                        return <Card date={item['release_date']}
                                     title={item['title']}
                                     id={item.id}
                                     poster={item["poster_path"]}
                                     path='movie/mv'
                        />
                    })
                }
            </div>
        </>
    )
}

export default MoviePage;