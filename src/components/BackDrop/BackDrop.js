import React from 'react';
import classes from './BackDrop.module.css';

//.This is the component to show the backdrop
//.Backdrop is nothing but the darkening of the background to show the effect two layers - the upper layer being the current one.

const backdrop = (props) => (
    <div className={classes.backdrop} onClick={props.click}>
    </div>
)

export default backdrop;