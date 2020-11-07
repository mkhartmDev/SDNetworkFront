import React, { Component } from 'react'
import classes from '../SettingsPage.module.sass'
import { BiShow } from 'react-icons/bi'

interface Props {
    
}
interface State {
    
}

class ChangePassword extends Component<Props, State> {
    
    state = {
        showPassword: false
    }

    showIconHandler = () => {
        this.setState({showPassword: !this.state.showPassword});
    }

    render() {

        let showPassword = this.state.showPassword ? '' : 'password'
        let showButtonClass = this.state.showPassword ? `${classes.ShowIcon} ${classes.ShowIconActive}` : classes.ShowIcon

        return (
            <div>
                <div className={classes.Section2}>
                    <div className={classes.InputField}>
                        <div>New Password</div>
                        <input type={showPassword} className={classes.Input}></input>
                        <BiShow onClick={this.showIconHandler} className={showButtonClass}/>
                    </div>
                    <div className={classes.ApplyButton}>Apply</div>
                </div>               
            </div>
        )
    }
}

export default ChangePassword
