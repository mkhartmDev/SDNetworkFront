import React, { Component } from 'react'
import FriendsBox from './FriendsBox/FriendsBox'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import classes from './UserPage.module.sass'
import Posts from '../PrivateComponents/Posts/Posts'
import NavBar from '../PrivateComponents/NavBar/NavBar'

interface Props {
    
}

interface State {
    
}

export default class UserPage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className={classes.Body}>
                <NavBar />
                <div className={classes.MAXWIDTH}>
                    <div className={classes.UserPageContainer}>
                        <div className={classes.LeftSide}>
                            <ProfileInfo />
                            <FriendsBox />
                        </div>
                        <div className={classes.RightSide}>
                            <Posts ProfileOrFeed='PROFILE' />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
