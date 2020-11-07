import React, { Component } from 'react'
import classes from '../SettingsPage.module.sass'

interface Props {
    
}
interface State {
    
}

class ChangeEmail extends Component<any, any> {
    state = {}

    render() {
        return (
            <div>
                <div className={classes.Section3}>
                    <div className={classes.InputField}>
                        <div>Current Email:</div>
                        <div className={classes.CurrentText}>{this.props.userObject.email}</div>
                    </div>
                    <div className={classes.InputField}>
                        <div>Change Email</div>
                        <input className={classes.Input}></input>
                    </div>
                    <div className={classes.ApplyButton}>Apply</div>
                </div>                
            </div>
        )
    }
}

export default ChangeEmail
