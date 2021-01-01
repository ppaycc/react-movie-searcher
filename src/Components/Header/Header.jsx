import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

const Header = props => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <NavLink to='/trending' activeClassName={s.active}>Trending</NavLink>
                <NavLink to='/movie' activeClassName={s.active}>Movie</NavLink>
                <NavLink to='/tvshow' activeClassName={s.active}>TV show</NavLink>
            </div>
        </header>
    )
}

export default Header;