import React, { Component } from 'react'
import classes from '../SettingsPage.module.sass'

interface Props {
    
}
interface State {
    
}

class ChangeFirstName extends Component<any, any> {
    state = {}

    render() {
        return (
            <div>
                <div className={classes.Section2}>
                    <div className={classes.InputField}>
                        <div>Current First Name:</div>
                        <div className={classes.CurrentText}>{this.props.userObject.firstName}</div>
                    </div>
                    <div className={classes.InputField}>
                        <div>Change First Name</div>
                        <input className={classes.Input}></input>
                    </div>
                    <div className={classes.ApplyButton}>Apply</div>
                </div>                
            </div>
        )
    }
}

export default ChangeFirstName
