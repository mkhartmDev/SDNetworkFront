import React, { Component } from 'react'
import classes from './FriendSquare.module.sass'
import profilePic from '../../../../../assets/profilePic.png'

interface Props {
    
}
interface State {
    
}

export default class FriendSquare extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className={classes.FriendSquare}>
                <div className={classes.ProfilePicContainer}>
                    <img className={classes.ProfilePic} src={profilePic} alt="profilePic"/>
                </div>
                <div className={classes.NameContainer}>Firstname Lastname</div>
            </div>
        )
    }
}
