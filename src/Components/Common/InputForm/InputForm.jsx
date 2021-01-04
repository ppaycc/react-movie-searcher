import s from "./InputForm.module.scss";
import {useDispatch} from "react-redux";

const InputForm = props => {
    const dispatch = useDispatch();
    const clickEnter = e => {
        if(e.keyCode === 13 && props.query.trim().length > 0){
            dispatch(props.getNewItems(props.url, props.query))
        }
    }

    const clickButton = () => {
        if(props.query.trim().length > 0){
            dispatch(props.getNewItems(props.url, props.query))
        }
    }

    return (
        <div className={s.input}>
            <input placeholder="Type here..." type="text" value={props.query}
                   onKeyDown={e=>clickEnter(e)}
                   onChange={(e)=>dispatch(props.changeValueMovie(e.currentTarget.value))}/>
            <button onClick={()=>clickButton()}>Search</button>
        </div>    )
}
export default InputForm;