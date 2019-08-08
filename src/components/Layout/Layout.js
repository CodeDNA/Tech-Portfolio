import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import BackDrop from '../BackDrop/BackDrop';

const layout = (props) => (

    <Aux>

        <div className={classes.header}>
            <Banner />
            <Navigation drawerClickHandler={props.drawerClickHandler} />

        </div>

        <div className={classes.children}>
            {props.children}
        </div>

        <Footer />



    </Aux >

);

export default layout;