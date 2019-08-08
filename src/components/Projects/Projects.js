import React from 'react';
import Aux from '../../hoc/Aux';
import Box from '../Box/Box';
import Project from '../Projects/Project/Project';
import classes from './Projects.module.css'

//. This is the wrapper for the projects (Multiple 'Project' Component). 
//. It maps the project list from the state and returns them using Project component.
//. The 'Project' component renders a single project while this 'Projects' component renders those projects into the DOM.
//. The is wrapped inside the Box component which gives all the projects uniform styling.

//. Important AUX here is higher Order Auxilary component that only returns whatever is inside the child coponent. I could also have used just a div for this. There is no difference.
//. I used it because I wanted to learn the mehtod of using Auxilary HOC components.

//. The value of the textboxes is set to the current value of their corresponding labels. When the values is changed the state is also changed.
//. This is two way binding implementation.
//. If we don't use the onChange handler on the textbox, then if we try to change the value of the  text box we won't be able to do so.
//. This is because the value property of the textbox is set from the state and the moment we are enter a character in it, it restores itself from the state.
const projects = (props) => {
    const projects = (
        <Aux>
            {
                props.projects.map((project, index) => {
                    return <Project

                        updateProjectRoleHandler={(event) => props.updateProjectRoleHandler(event, project.id)}
                        deleteProjectHandler={() => props.deleteProjectHandler(index)}
                        key={props.projects.id}
                        project={project}
                        updateDescriptionHandler={(event) => props.updateDescriptionHandler(event, project.id)}
                    />
                })
            }
        </Aux>
    )


    return (
        <Box heading={`PROJECTS`}>
            {projects}
        </Box>
    );



};

export default projects;