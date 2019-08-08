import React from 'react';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return (

        <nav className={classes.side_drawer}>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
            </ul>
        </nav>
    );
}
export default sideDrawer;
