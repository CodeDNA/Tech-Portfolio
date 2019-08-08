import React from 'react';
import Aux from '../../../hoc/Aux';
import Box from '../../Box/Box';
import classes from './Project.module.css';
import deleteButton from '../../../assets/Images/buttonIcons/deleteIcon.png';

//. Below are the state properties that this componment gets as props.
// projectTitle:     "Algorithm ",
// projectInstitute: "Boston University",
// myRole:           "Research and develop the algorithm",
// startDate:        "11/11/11",
// endDate:         "12/12/12",
// techUsed:         ['Java', 'Tech 2', 'Tech 3'],
// description:     "I worked in Java to develop the aglgorithm"

//.The deleteProjectHandler is responsible for deleting the project.
//.updateprojectHandler is runs when the value in the textbox is changes (onChange event)
//. Both these methods are in App.js file. This is a dumb/stateless component.

const project = (props) => (
    <div className={classes.container}>
        <div className={classes.heading}>
            <div>
                {props.project.projectTitle}
            </div>
            <div className={classes.space}></div>

            <button className={`btn btn-success`}>EDIT</button>
            <button onClick={props.deleteProjectHandler} className={`btn btn-danger`}><img className={classes.deleteBtn} src={deleteButton} /></button>

        </div>

        <div className={classes.flex}>
            <p className={classes.left}>Company/Institute : {props.project.projectInstitute}</p>

            <p className={classes.right}>Start Date: {props.project.startDate} - End Date:{props.project.endDate}</p>
        </div>
        <hr />

        <div className={classes.flexify}>
            <div>Role: {props.project.myRole}</div>
            <div className={classes.space}></div>
            <div>
                <input type="text" value={props.project.myRole} onChange={props.updateProjectRoleHandler} />
            </div>
        </div>

        <hr />
        <div className={classes.flexify}>
            <div>Technologies used : {props.project.techUsed.join(' | ')} </div>
            <div className={classes.space}></div>

        </div>
        <hr />

        <div className={classes.flexify}>
            <div>Description : {props.project.description}</div>
            <div className={classes.space}></div>
            <div>
                <input type="text" value={props.project.description} onChange={props.updateDescriptionHandler} />
            </div>
        </div>
        <p></p>
        <hr />
        <p></p><p></p>

    </div>
);

export default project;
