import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Banner.module.css'

//. This is the top panel or banner of the page.
//.It includes everything above the MENU bar.
const banner = (props) => (

    < Aux >
        <div className={classes.banner}>
            <img src={'/images/backgrounds/wp1.jpg'} alt="Banner image" />
            <h1>TECHNICAL PORTFOLIO</h1>
            <p>A Platform to showcase yourself</p>

        </div>

    </Aux >
);

export default banner;