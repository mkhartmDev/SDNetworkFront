import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classes from './SettingsPage.module.sass'
import { BiShow } from 'react-icons/bi'
import NavBar from '../PrivateComponents/NavBar/NavBar'
import profilePic from '../../../assets/profilePic.png'

interface Props {
    
}
interface State {
    
}

class SettingsPage extends Component<any, any> {
    state = {
        showPassword: false,
        currentEmail: 'n@b.com',
        currentFirstName: 'Napoleon',
        currentLastName: 'Bonaparte'
    }

    showIconHandler = () => {
        this.setState({showPassword: !this.state.showPassword});
    }

    backButtonHandler = () => {
        this.props.history.goBack();
    }

    componentDidMount() {
        // retrieve current user data to display on page, then set to state
    }

    render() {

        let showPassword = this.state.showPassword ? '' : 'password'
        let showButtonClass = this.state.showPassword ? `${classes.ShowIcon} ${classes.ShowIconActive}` : classes.ShowIcon

        return (
        <div className={classes.Body}>
            <NavBar />
            <div className={classes.MAXWIDTH}>
                <div className={classes.SettingsPage}>
                    <div className={classes.BackButton} onClick={this.backButtonHandler}>Back</div>
                    <div className={classes.Form}>
                        <div className={classes.SectionPic}>
                            <img className={classes.ProfilePicture} src={profilePic} alt="pic" height="150px" />
                            <div className={classes.InputField}><div>Change Profile Picture</div><input type="file" id="img" name="img" accept="image/*"></input></div>
                            <div className={classes.ApplyButton}>Apply</div>
                        </div>
                        <div className={classes.Section2}>
                            <div className={classes.InputField}><div>New Password</div><input type={showPassword} className={classes.Input}></input><BiShow onClick={this.showIconHandler} className={showButtonClass}/></div>
                            <div className={classes.ApplyButton}>Apply</div>
                        </div>
                        <div className={classes.Section3}>
                            <div className={classes.InputField}><div>Current Email:</div><div className={classes.CurrentText}>{this.state.currentEmail}</div></div>
                            <div className={classes.InputField}><div>Change Email</div><input className={classes.Input}></input></div>
                            <div className={classes.ApplyButton}>Apply</div>
                        </div>
                        <div className={classes.Section2}>
                            <div className={classes.InputField}><div>Current First Name:</div><div className={classes.CurrentText}>{this.state.currentFirstName}</div></div>
                            <div className={classes.InputField}><div>Change First Name</div><input className={classes.Input}></input></div>
                            <div className={classes.ApplyButton}>Apply</div>
                        </div>
                        <div className={classes.Section2}>
                            <div className={classes.InputField}><div>Current Last Name:</div><div className={classes.CurrentText}>{this.state.currentLastName}</div></div>
                            <div className={classes.InputField}><div>Change Last Name</div><input className={classes.Input}></input></div>
                            <div className={classes.ApplyButton}>Apply</div>
                        </div>
                    </div>
                    <div className={classes.BottomSpacer}></div>
                </div>
            </div>
        </div>

        )
    }
}

export default withRouter(SettingsPage);