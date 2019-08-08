import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Summary from '../components/Summary/Summary';
import classes from './App.module.css';
import Projects from '../components/Projects/Projects';
import Experiences from '../components/Experiences/Experiences';
import TopFive from '../components/TopFive/TopFive';
import Contact from '../components/Contact/Contact';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import BackDrop from '../components/BackDrop/BackDrop';

//. This is main and the only component in this project that can change the state.
//. This is the stateful component of this project.
//. Other components are dumb/stateless componenets.
//. I did this to avaoid complicating my project as it grows.

class App extends Component {


  state = {
    userName: "Parker Punj",
    summary: "I am a self motivated student at BU studying Computer Science and loking for full time role",
    topFiveTech:
    {
      tech1: "Java",
      tech2: "Node",
      tech3: "Angular",
      tech4: "Python",
      tech5: "React"
    },
    experience: [
      {
        id: "1233",
        company: "Google",
        startDate: "11/11/11",
        endDate: "12/12/12",
        position: "Software Engineer",
        details: "I worked on Angular , Node.js, Mongo Db and Express.js"
      },
      {
        id: "1383",
        company: "Facebook",
        startDate: "11/11/11",
        endDate: "12/12/12",
        position: "Web applicaiton developer",
        details: "I worked on React js and Reduc to build responsive websites"
      },
    ],
    projects: [
      {
        id: "123",
        projectTitle: "Algorithm to determine the best sorting algorithm for large arrays",
        projectInstitute: "Boston University",
        myRole: "Research and develop the algorithm",
        startDate: "11/11/11",
        endDate: "12/12/12",
        techUsed: ['Java ', 'Tech 2 ', 'Tech 3 '],
        description: "I worked in Java to develop the aglgorithm"
      },

      {
        id: "133",
        projectTitle: "Hand Gesture Recognition System",
        projectInstitute: "Boston University",
        myRole: "Develop and implement the machine learning model",
        startDate: "11/11/11",
        endDate: "12/12/12",
        techUsed: ['Python ', 'Keras ', 'Tensorflow ', 'Jython '],
        description: "Implemented a 2-D convolutional neural network to classify hand gestures in colored images"
      }
    ],
    contact:
    {
      name: "Prabhakar Punj",
      email: "parkercs@bu.edu",
      phone: "123456789",
      linkedin: "https://www.linkedin.com/feed/",
      gitHub: "https://github.com/CodeDNA",
      address: {
        apartment: "188",
        street: "Washington Street",
        state: "MA",
        country: "USA",
      }
    },
    sideDrawerOpen: false
  };
  //NOTE:-----------State-----------------------

  //*-----------------------------------
  //. This is run when the value of the 'Role' textbox in the projects page is changed.
  //.i learned that we should never mutate our state to avoid unexpedted behaviour of the application.
  //. Thereore we first copy the desired element/variable/item using spread operator.
  //. Then change the values in that copied element.

  //. Copy the state using spread operator and merge the updated element into the copy of the state.
  //. Now the copy of our state has all the updated values.
  //. Then we overwrite the whole state using the new state (copied state variable with updated values)

  updateProjectRoleHandler = (event, id) => {
    const projectIndex = this.state.projects.findIndex(p => {
      return p.id === id;
    });

    const project = {
      ...this.state.projects[projectIndex]
    };

    const projects = [...this.state.projects];

    project.myRole = event.target.value;

    projects[projectIndex] = project;

    this.setState({
      projects: projects
    })

  }
  //*--------------------------------------------

  updateDescriptionHandler = (event, id) => {
    const projectIndex = this.state.projects.findIndex(p => {
      return p.id === id;
    });




    const project = {
      ...this.state.projects[projectIndex]
    };

    const projects = [...this.state.projects];

    project.description = event.target.value;

    projects[projectIndex] = project;

    this.setState({
      projects: projects
    })
    console.log(this.state.projects);

  }
  //*---------------------------------------------
  deleteProjectHandler = (projectindex) => {
    const projects = [...this.state.projects]
    projects.splice(projectindex, 1);
    this.setState({ projects: projects });
  };

  deleteExperienceHandler = (experienceindex) => {
    const experiences = [...this.state.experience]
    experiences.splice(experienceindex, 1);
    this.setState({ experience: experiences });
  };

  //.This is handler that is responsible for showing or hiding the side drawer. 
  drawToggleHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    })
  }

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer show={this.state.sideDrawerOpen} />;
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div>
        {sideDrawer}
        {backDrop}
        <div className={classes.App} >

          <Layout drawerClickHandler={this.drawToggleHandler}>
            <Contact contact={this.state.contact} />
            <TopFive />
            <Summary summary={this.state.summary} />
            <Experiences deleteExperienceHandler={this.deleteExperienceHandler} experience={this.state.experience} />
            <Projects
              updateProjectRoleHandler={this.updateProjectRoleHandler}
              deleteProjectHandler={this.deleteProjectHandler}
              projects={this.state.projects}
              updateDescriptionHandler={this.updateDescriptionHandler}
            />
          </Layout>
        </div >
      </div>
    );

  }
}

export default App;
