import React, { Component } from 'react'
import classes from './CreateAnAccountPage.module.sass'
import { BiShow } from 'react-icons/bi'
import { withRouter } from 'react-router-dom'

interface Props {
    
}
interface State {
    
}

class CreateAnAccountPage extends Component<any, any> {
    state = {
        showPassword: false
    }

    showIconHandler = () => {
        this.setState({showPassword: !this.state.showPassword});
    }

    backButtonClickedHandler = () => {
        this.props.history.push('/landing');
    }

    render() {

        let showPassword = this.state.showPassword ? '' : 'password'
        let showButtonClass = this.state.showPassword ? `${classes.ShowIcon} ${classes.ShowIconActive}` : classes.ShowIcon

        return (
            <div className={classes.CreateAnAccountPageContainer}>
                <div className={classes.CreateAccountForm}>
                    <div className={classes.BackButton} onClick={this.backButtonClickedHandler} >Back</div>
                    <div className={classes.FormField}>
                        <div className={classes.Field}><div className={classes.Label}>Username</div><input className={classes.Input} spellCheck="false"></input></div>
                        <div className={classes.Password}><div className={classes.Label}>Password</div><input type={showPassword} className={classes.PasswordInput} spellCheck="false"></input><BiShow onClick={this.showIconHandler} className={showButtonClass}/></div>
                        <div className={classes.Field}><div className={classes.Label}>Email</div><input className={classes.Input} spellCheck="false"></input></div>
                        <div className={classes.Field}><div className={classes.Label}>First Name</div><input className={classes.Input} spellCheck="false"></input></div>
                        <div className={classes.Field}><div className={classes.Label}>Last Name</div><input className={classes.Input} spellCheck="false"></input></div>
                    </div>
                    <div className={classes.SubmitButton}>Submit</div>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateAnAccountPage);