import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggleButton = (props) => (
    <div>
        <button className={classes.toggle_button} onClick={props.click}>
            <div className={classes.toggle_button_line}></div>
            <div className={classes.toggle_button_line}></div>
            <div className={classes.toggle_button_line}></div>
        </button>
    </div>
);

export default drawerToggleButton;