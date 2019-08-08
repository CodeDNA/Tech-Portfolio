import React from 'react';
import Aux from '../../../hoc/Aux';
import Box from '../../Box/Box';
import classes from './Experience.module.css'
import deleteButton from '../../../assets/Images/buttonIcons/deleteIcon.png';

/*
company
startDate
endDate
position
details
*/
const experience = (props) => (
    <div className={classes.container}>
        <div className={classes.heading}>{props.experience.position}
            <div className={classes.space}>
            </div>
            <button className={`btn btn-success`}>EDIT</button>

            <button onClick={props.deleteExperienceHandler} className={`btn btn-danger`}><img className={classes.deleteBtn} src={deleteButton} /></button>
        </div>
        <div className={classes.flex}>
            <p>Company : {props.experience.company} </p>
            <p>Start Date : {props.experience.startDate} - End Date : {props.experience.endDate}</p>
        </div>

        <hr />
        <div>Details : {props.experience.details}</div>
    </div>
);

export default experience;
