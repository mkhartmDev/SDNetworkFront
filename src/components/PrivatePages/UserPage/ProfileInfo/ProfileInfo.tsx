import React, { Component } from 'react'
import profilePic from '../../../../assets/profilePic.png'
import classes from './ProfileInfo.module.sass'

interface Props {
    
}

interface State {
    
}

export default class ProfileInfo extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className={classes.ProfileInfoContainer}>
                <div className={classes.ProfilePicContainer}>
                    <img className={classes.ProfilePic} src={profilePic} alt="profilePic"/>
                </div>
                <div className={classes.NameContainer}>Firstname Lastname</div>
            </div>
        )
    }
}
