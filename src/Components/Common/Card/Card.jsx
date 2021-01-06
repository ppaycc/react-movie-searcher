import s from './Card.module.scss';
import {NavLink} from "react-router-dom";
import img from '../photo_2020-12-28_16-51-34.jpg';

const Card = props => {
    let poster = props.poster ? `https://image.tmdb.org/t/p/original${props.poster}` : img;
    return (
        <div className={`${s.card} ${s[props.favorite ? "favorite" : "noFavorite"]}`}>
            <NavLink to={`/${props.path}`}>
                <img src={poster} />
            </NavLink>
            <div>{props.title}</div>
            <div>{props.date ? props.date.replace(/-/g, "/") : ''}</div>
        </div>
    )
}

export default Card;