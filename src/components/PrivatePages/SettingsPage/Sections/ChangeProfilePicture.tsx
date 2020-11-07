import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classes from '../SettingsPage.module.sass'

interface Props {
    
}
interface State {
    
}

class ChangeProfilePicture extends Component<any, any> {
    state = {}

    render() {

        const profilePictureURL = this.props.s3BaseURL_ProfilePicture + this.props.userObject.username;

        return (
            <div>
                <div className={classes.SectionPic}>
                    <img className={classes.ProfilePicture} src={profilePictureURL} alt="pic" height="150px" />
                    <div className={classes.InputField}>
                        <div>Change Profile Picture</div>
                        <input type="file" id="img" name="img" accept="image/*"></input>
                    </div>
                    <div className={classes.ApplyButton}>Apply</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userObject: state.userObject,
        s3BaseURL_ProfilePicture: state.s3BaseURL_ProfilePicture
    }
}

export default withRouter(connect(mapStateToProps, null)(ChangeProfilePicture));
