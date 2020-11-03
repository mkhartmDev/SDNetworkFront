import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classes from './SettingsPage.module.sass'
import NavBar from '../PrivateComponents/NavBar/NavBar'

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
                    <button onClick={this.backButtonHandler}>Back</button>
                    This is Settings
                </div>
            </div>
        </div>

        )
    }
}

export default withRouter(SettingsPage);