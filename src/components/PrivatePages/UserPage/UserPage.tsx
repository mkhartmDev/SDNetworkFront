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
        const userObject = { username: usernameFromURLParameter, firstName: 'Kyle', lastName: 'Aoki' }; // api call
        this.setState({userObject: userObject})
    }

    // componentWillReceiveProps(nextProps: any) {
    //     if (nextProps.match.params.product !== this.props.match.params.product) {
    //       this.setState({userObject: {}});
    //     }
    // }

    render() {

        return (
            <div className={classes.Body}>
                <NavBar />
                <div className={classes.MAXWIDTH}>
                    <div className={classes.UserPageContainer}>
                        <div className={classes.LeftSide}>
                            <ProfileInfo {...this.state.userObject} />
                            <FriendsBox />
                        </div>
                        <div className={classes.RightSide}>
                            <Posts {...this.state.userObject} ProfileOrFeed='PROFILE' />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(UserPage);