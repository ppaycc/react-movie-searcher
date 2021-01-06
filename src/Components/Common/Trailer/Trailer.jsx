import s from './Trailer.module.scss';

const Trailer = ({trailer}) => {
    const items = trailer.map(el=>{
        return <a key={el.id} target='_blank' href={`https://www.youtube.com/watch?v=${el.key}`}>{el.name}</a>
    })
    return (
        <div className={s.main}>
            <h2>Trailers:</h2>
            <div className={s.flex}>{items}</div>
        </div>
    )
}

export default Trailer;