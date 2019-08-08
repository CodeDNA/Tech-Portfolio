import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Box.module.css'

//. This is the layout for showing the project, experience and summary item.
//.It contains a heading and a container element.

const box = (props) => {
    let id = props.heading;
    // let id = props.heading === 'SUMMARY' ? " " : props.heading;


    return (
        <div className={classes.wrapper}>
            <div className={`btn btn-primary ${classes.topTab}`}>{props.heading}
                <button
                    data-toggle="collapse"
                    aria-expanded='true'
                    aria-controls={`#${id}`}
                    data-target={`#${id}`}
                    className={`btn btn-secondary`}>ᐁ</button>
            </div>


            <div className={`${classes.content} collapse multi-collapse`}
                id={id}
            >
                {props.children}
            </div>
        </div>


    );

};

export default box;
