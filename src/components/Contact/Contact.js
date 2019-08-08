import React from 'react';
import classes from './Contact.module.css';
import profilePic from '../../assets/Images/profilePicture/profileAlt.jpg';

//. This is the contact panel component above the Top5 technologies.
//. The values here are populated from the state.
const contact = (props) => {

    return (
        <div className={classes.card}>


            <img src={profilePic} alt="Card image" />
            <div className={classes.details}>
                <div>
                    <div>
                        <h1>{props.contact.name}</h1>
                        <hr />
                    </div>
                </div>
                <div className={classes.columnFlex}>
                    <div>
                        <p>Email :{props.contact.email}</p>
                        <p>Phone : {props.contact.phone}</p>
                        <p>Github :{props.contact.gitHub}</p>
                        <p>Linkedin : {props.contact.linkedin}</p>

                    </div>
                    <div>
                        <p>Address:</p>
                        <p>Boston,</p>
                        <p>Massachusetts,</p>
                        <p>USA</p>

                    </div>
                </div>


            </div>

        </div >
    );

};

export default contact;