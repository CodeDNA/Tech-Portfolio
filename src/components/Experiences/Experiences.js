import React from 'react';
import Aux from '../../hoc/Aux';
import Box from '../Box/Box';
//import Project from '../Projects/Project/Project';
import classes from './Experiences.module.css';
import Experience from './Experience/Experience';

const experiences = (props) => {
    const experiences = (
        <Aux >
            {
                props.experience.map((experience, index) => {
                    return <Experience deleteExperienceHandler={() => props.deleteExperienceHandler(index)} experience={experience} />
                })

            }</Aux>
    )

    return (

        <Box key={props.experience.id} heading={`EXPERIENCE`}>


            {experiences}

        </Box>



    );



};

export default experiences;