import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './ProfileInfo.module.sass'
import { withRouter } from 'react-router-dom'

interface Props {
    
}

interface State {
    
}

class ProfileInfo extends Component<any, any> {

    state = {}

    render() {

        const ProfilePicURL = this.props.s3BaseURL_ProfilePicture + this.props.username;

        return (
            <div className={classes.ProfileInfoContainer}>
                <div className={classes.ProfilePicContainer}>
                    <img className={classes.ProfilePic} src={ProfilePicURL} alt="profilePic"/>
                </div>
                <div className={classes.NameContainer}>{this.props.firstName} {this.props.lastName}</div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        s3BaseURL_ProfilePicture: state.s3BaseURL_ProfilePicture
    }
}

export default connect(mapStateToProps, null)(ProfileInfo);
