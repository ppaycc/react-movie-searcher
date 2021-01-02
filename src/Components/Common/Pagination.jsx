// import {useState} from "react";
// import s from "../Movie/Movie.module.css";
// import {getNewItems} from "../../Redux/MoviePage-reducer";
//
// const Pagination = (props) => {
//     const portionCount = props.totalPage/10;
//     const [portionNumber, setPortionNumber] = useState(1);
//     const left = (portionNumber -1) * 10 + 1;
//     const right = portionNumber * 10;
//
//     const onClick = (p) => {
//         props.dispatch(getNewItems(props.url, props.sought, p))
//     }
//
//     return (
//         <div>
//             {
//                 <button disabled={portionNumber===1} onClick={()=>setPortionNumber(portionNumber-1)}>prev</button>
//             }
//             <div>
//                 {
//                     props.pages.filter(p=> p >= left && p < right)
//                         .map(p=>{
//                             return <span className={s.item} onClick={()=>onClick(p)}>{p}</span>
//                         })
//                 }
//             </div>
//             {
//                 <button disabled={portionCount < portionNumber} onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>
//             }
//         </div>
//     )
// }
// export default Pagination;