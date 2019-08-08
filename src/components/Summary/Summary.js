import React from 'react';
import Aux from '../../hoc/Aux';
import Box from '../Box/Box';
import classes from './Summary.module.css'

//. This page shows the summary of the person. It's just like the linkedin summary.
const summary = (props) => (

    <Box heading={`SUMMARY`}>
        <div className={classes.content}>
            <p>{props.summary}</p>
        </div>
    </Box>
);

export default summary;
