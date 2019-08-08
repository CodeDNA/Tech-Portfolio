import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './TopFive.module.css';

//. This is just a dummy type component. it does not take the images from the state.
//. The images are hard coded here.
//. This is the main part I am going to work in the future.
const topFive = (props) => (


    <Aux>
        <div className={classes.header}>
            <hr></hr>
            <h5>MY TOP FIVE TECHNOLOGIES</h5>
        </div>

        <div className={classes.topFiveImages}>

            <img src={'/images/topFive/java.jpg'} alt="Card image" />
            <img src={'/images/topFive/node.jpg'} alt="Card image" />
            <img src={'/images/topFive/angular.jpg'} alt="Card image" />
            <img src={'/images/topFive/python.jpg'} alt="Card image" />
            <img src={'/images/topFive/react.jpg'} alt="Card image" />
        </div >
    </Aux>

);

export default topFive;