import React from 'react';
import style from './Navigations.module.css';

const Navigation = ()=> {
    return(
        <nav className= {style.sectionNav}>
            <div>
                <a href= '/profile' className={style.item}>Profile</a>
            </div>
            <div>
                <a href= '/dialogs' className={`${style.item} ${style.active}`}>Messages</a>
            </div>
            <div>
                <a href= '/news' className={style.item}>News</a>
            </div>
            <div>
                <a href= '/music' className={style.item}>Music</a>
            </div>
            <div>
                <a href= '/settings' className={style.item}>Settings</a>
            </div>

        </nav>
    );
}

export default Navigation;