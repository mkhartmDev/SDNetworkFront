import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classes from './SettingsPage.module.sass'

import NavBar from '../PrivateComponents/NavBar/NavBar'
import { connect } from 'react-redux'
import ChangeProfilePicture from './Sections/ChangeProfilePicture'
import ChangePassword from './Sections/ChangePassword'
import ChangeEmail from './Sections/ChangeEmail'
import ChangeFirstName from './Sections/ChangeFirstName'
import ChangeLastName from './Sections/ChangeLastName'

interface Props {
    
}
interface State {
    
}

class SettingsPage extends Component<any, any> {
    state = {}

    backButtonHandler = () => {
        this.props.history.goBack();
    }

    render() {

        return (
        <div className={classes.Body}>
            <NavBar />
            <div className={classes.MAXWIDTH}>
                <div className={classes.SettingsPage}>
                    <div className={classes.BackButton} onClick={this.backButtonHandler}>Back</div>
                    <div className={classes.Form}>

                        <ChangeProfilePicture {...this.props.userObject} />
                        <ChangePassword />
                        <ChangeEmail        userObject={this.props.userObject} />
                        <ChangeFirstName    userObject={this.props.userObject} />
                        <ChangeLastName     userObject={this.props.userObject} />

                    </div>
                    <div className={classes.BottomSpacer}></div>
                </div>
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

export default withRouter(connect(mapStateToProps, null)(SettingsPage));