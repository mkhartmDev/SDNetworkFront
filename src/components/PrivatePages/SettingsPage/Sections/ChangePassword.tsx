import React, { Component } from 'react'
import classes from '../SettingsPage.module.sass'
import { BiShow } from 'react-icons/bi'
import { axiosInstance } from "../../../../util/axiosConfig";
import { Console } from 'console';

interface Props {
    
}
interface State {
    
}

class ChangePassword extends Component<any, any> {
    
    state = {
        showPassword: false,
        passwordEntered: ''
    }

    showIconHandler = () => {
        this.setState({showPassword: !this.state.showPassword});
    }

    btnHandler = async () => {
        let response;
        response = await axiosInstance.post("/user/changepass", {
            email: this.props.userObject.email,
            password: this.state.passwordEntered
          });
    }

    setPass = async (event: any) => {
        this.setState({ passwordEntered: event.target.value });
    }

    render() {

        let showPassword = this.state.showPassword ? '' : 'password'
        let showButtonClass = this.state.showPassword ? `${classes.ShowIcon} ${classes.ShowIconActive}` : classes.ShowIcon

        return (
            <div>
                <div className={classes.Section2}>
                    <div className={classes.InputField}>
                        <div>New Password</div>
                        <input onChange={this.setPass} value={this.state.passwordEntered} type={showPassword} className={classes.Input}></input>
                        <BiShow onClick={this.showIconHandler} className={showButtonClass}/>
                    </div>
                    <div onClick={this.btnHandler} className={classes.ApplyButton}>Apply</div>
                </div>               
            </div>
        )
    }
}

export default ChangePassword
