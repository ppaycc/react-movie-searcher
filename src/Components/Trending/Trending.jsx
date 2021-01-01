import Card from "../Common/Card";
import s from './Trending.module.css'

const TrendingPage = props => {
    const changeType = type => {
        props.changeMediaTypeAC(type);
        props.makeNewSet();
    }
    const changeTimeWindow = type => {
        props.changeTimeWindowAC(type);
        props.makeNewSet();
    }
    return (
        <div className={s.trending}>
            trending
            <div className='btnWrapper'>
                <button className={props.mediaType === 'all' ? "btn active" : "btn"} onClick={()=>changeType('all')}>All</button>
                <button className={props.mediaType === 'movie' ? "btn active" : "btn"} onClick={()=>changeType('movie')}>Movie</button>
                <button className={props.mediaType === 'tv' ? "btn active" : "btn"} onClick={()=>changeType('tv')}>TV</button>
            </div>
            <div className='btnWrapper'>
                <button className={props.timeWindow === 'day' ? "btn active" : "btn"} onClick={()=> changeTimeWindow('day')}>Day</button>
                <button className={props.timeWindow === 'week' ? "btn active" : "btn"} onClick={()=> changeTimeWindow('week')}>Week</button>
            </div>
            <div className={s.items}>

                {props.result.map(res =>{
                return <Card title={res['title'] || res["name"]}
                date={res['release_date'] || res["first_air_date"] }
                poster={res['poster_path']}
                id={res["id"]}
                type={res["media_type"]}
                />})}

            </div>
        </div>
    )
}

export default TrendingPage;