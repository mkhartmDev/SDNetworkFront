import React, { Component } from 'react'
import FriendsBox from './FriendsBox/FriendsBox'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import classes from './UserPage.module.sass'
import Posts from '../PrivateComponents/Posts/Posts'
import NavBar from '../PrivateComponents/NavBar/NavBar'
import { withRouter } from 'react-router-dom'

interface Props {
    
}

interface State {
    
}

class UserPage extends Component<any, any> {

    state = {
        userObject: {}
    }

    componentDidMount(){
        const usernameFromURLParameter = this.props.match.params.username;
        // use USERNAME from URLParam to get user object with api call
        const userObject = { username: 'kyleaoki', firstName: 'Kyle', lastName: 'Aoki' }; // api call
        this.setState({userObject: userObject})
    }

    render() {

        const ProfileInfoProps = this.state.userObject;

        return (
            <div className={classes.Body}>
                <NavBar />
                <div className={classes.MAXWIDTH}>
                    <div className={classes.UserPageContainer}>
                        <div className={classes.LeftSide}>
                            <ProfileInfo {...ProfileInfoProps} />
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

export default withRouter(UserPage);