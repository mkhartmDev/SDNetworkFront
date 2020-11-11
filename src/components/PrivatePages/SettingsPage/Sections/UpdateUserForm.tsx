import React, { Component } from 'react'
import classes from '../SettingsPage.module.sass'

interface Props {

}
interface State {

}

class UpdateUserForm extends Component<any, any> {
    state = {}

    render() {
        return (
                <div className={classes.Section2}>
                    <div className={classes.InputField}>
                        <div>Current {this.props.fieldName}:</div>
                        <div className={classes.CurrentText}>{this.props.current}</div>
                    </div>
                    <div className={classes.InputField} id={'input '+this.props.fieldName}>
                        <div>Change {this.props.fieldName}</div>
                        <input className={classes.Input}></input>
                    </div>
                    <div className={classes.ApplyButton} onClick={this.props.handler(this.props.field,{firstname:"bobert"})}>Apply</div>
                </div>
        );
    }
}
            
 
export default UpdateUserForm
