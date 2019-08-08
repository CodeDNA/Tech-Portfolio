import React from 'react';
import Aux from '../../hoc/Aux';

import classes from './Footer.module.css'


//.This is the footer. Just some text and linke to my GitHub profile.

const footer = (props) => (
    <div>
        <div className={classes.footer}>CREATED BY PARKER PUNJ
        <p>@BOSTON UNIVERSITY</p>
            <p>Follow my <a href="https://github.com/CodeDNA">GitHub</a> page to see the progress of my project.</p>
            <div><a href="https://github.com/CodeDNA">My GitHub Page</a>
            </div>
        </div>

    </div>

);

export default footer;
