import React from "react";
import s from './Pagination.module.scss';
import {useDispatch} from "react-redux";

const Pagination = props => {
    const dispatch = useDispatch();
    let pages = [];
    for(let i = 1; i<=props.totalPage; i++){
        pages.push(i);
    }

    const portionCount = props.totalPage/10;
    // const [portionNumber, setPortionNumber] = useState(1);
    const left = (props.portionPage -1) * 10 + 1;
    const right = props.portionPage * 10;

    const clickOnPage = (p) => {
        dispatch(props.getNewItems(props.url, props.sought, p))
    }

    return (
        <div>
            {
                <button className={s.paginationBtn} disabled={props.portionPage===1} onClick={()=>dispatch(props.changePortionPage(-1))}>{"<<"}</button>
            }
            <div className={s.paginationContainerItem}>
                {
                    pages.filter(p=> p >= left && p < right +1)
                        .map(p=>{
                            return <span key={p} className={props.currentPage===p ? s.paginationItemActive : s.paginationItem} onClick={()=>clickOnPage(p)}>{p}</span>
                        })
                }
            </div>
            {
                <button className={s.paginationBtn} disabled={portionCount < props.portionPage} onClick={()=>dispatch(props.changePortionPage(+1))}>{'>>'}</button>
            }
        </div>
    )
}
export default Pagination;