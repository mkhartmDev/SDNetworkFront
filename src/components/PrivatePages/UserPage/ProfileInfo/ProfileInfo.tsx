import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './ProfileInfo.module.sass'

interface Props {
    
}

interface State {
    
}

class ProfileInfo extends Component<any, any> {
    state = {
        profiePic: `${this.props.s3BaseURL}/profile-picture/${this.props.username}` // base URL + profilePictureURL
    }

    render() {

        return (
            <div className={classes.ProfileInfoContainer}>
                <div className={classes.ProfilePicContainer}>
                    <img className={classes.ProfilePic} src={this.state.profiePic} alt="profilePic"/>
                </div>
                <div className={classes.NameContainer}>Firstname Lastname</div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        username: state.userObject.username,
        s3BaseURL: state.s3BaseURL
    }
}

export default connect(mapStateToProps, null)(ProfileInfo);
