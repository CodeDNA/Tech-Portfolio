import React from 'react';
import Aux from '../../hoc/Aux'
import classes from './Navigation.module.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const navigation = (props) => (

    <header className={classes.toolbar}>
        <nav className={classes.toolbar_navigation}>
            <div className={classes.toggleButtonVisibility}>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className={classes.toolbar_logo}><a href="/" >MENU</a></div>
            <div className={classes.space}></div>

            <div className={classes.toolbar_navigation_items}>
                <ul>
                    <li><a href="/" >HOME</a></li>
                    <li><a href="/" >ABOUT</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default navigation;