import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classes from './SettingsPage.module.sass'

import NavBar from '../PrivateComponents/NavBar/NavBar'
import { connect } from 'react-redux'
import ChangeProfilePicture from './Sections/ChangeProfilePicture'
import ChangePassword from './Sections/ChangePassword'
import UpdateUserForm from './Sections/UpdateUserForm'
import { parseConfigFileTextToJson } from 'typescript'
import { axiosInstance } from '../../../util/axiosConfig'
import { User } from '../../../models/User'
import UserPage from '../UserPage/UserPage'

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
        console.log(this.props.userObject);
        return (
        <div className={classes.Body}>
            <NavBar />
            <div className={classes.MAXWIDTH}>
                <div className={classes.SettingsPage}>
                    <div className={classes.BackButton} onClick={this.backButtonHandler}>Back</div>
                    <div className={classes.Form}>

                        <ChangeProfilePicture {...this.props.userObject} />
                        <UpdateUserForm fieldName="First Name" field="firstName" current={this.props.userObject.firstName} handler={handleSubmit}/>
                        <UpdateUserForm fieldName="Last Name" current={this.props.userObject.Last}/>
                        <UpdateUserForm fieldName="email" current={this.props.userObject.email}/>
                        <ChangePassword />

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

const handleSubmit = (field:string,userObject:User)=>{
    const axios = axiosInstance;
    const newField = document.getElementById('input '+field)?.innerText;
    Object.defineProperty(userObject,field,{value:newField});
    console.log(userObject);


    
}


export default withRouter(connect(mapStateToProps, null)(SettingsPage));