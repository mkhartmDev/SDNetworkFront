import React, { Component } from 'react'
import classes from './Poster.module.sass'
import profilePic from '../../../../../../assets/profilePic.png'
interface Props {
    
}
interface State {
    
}

export default class Poster extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className={classes.PosterContainer}>
                <div className={classes.PosterImageAndNameContainer}>
                    <div className={classes.PosterProfilePicContainer}>
                        <img className={classes.PosterProfilePic} 
                            src={profilePic} alt="pic"
                        />
                    </div>
                    <div className={classes.PosterNameContainer}>Firstname Lastname</div>
                </div>
            </div>
        )
    }
}
