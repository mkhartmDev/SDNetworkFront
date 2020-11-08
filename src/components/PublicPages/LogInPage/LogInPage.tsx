import React, { Component } from 'react'
import classes from './LogInPage.module.sass'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { axiosInstance } from '../../../util/axiosConfig'
import { User } from '../../../models/User'


interface Props {
    
}
interface State {
    
}

class LogInPage extends Component<any, any> {

    state = {
        usernameEntered: '',
        passwordEntered: '',
        invalidLogInMessage: false
    }

    logInHandler = async () => {
        const validateUser = async (username: string, password: string) => {
            let response;
            try{
            return response = await axiosInstance.post("/login/", {username: username, password: password});
            } catch (error) {
                console.log(error);
                response = null;
            }
            // let apiCall = `https://jsonplaceholder.typicode.com/${username}/${password}`;
            // const response = await fetch(apiCall); // fake api, backend validation
            // const responseJSON = await response.json();
            // console.log(responseJSON);
            // if (responseJSON.address?.zipcode === '92998-3874') {
            //     return 'VALID';
            // }
            // return 'NOT VALID';
        }
        let userIsValid = await validateUser(this.state.usernameEntered, this.state.passwordEntered);
        if (userIsValid != null && userIsValid.data) {
            const userObject : User = userIsValid.data; // api call goes here
            console.log(userObject);
            this.props.authenticateUser(userObject);
            this.props.history.push(`/user/${userObject.username}`);
        } else {
            this.setState({invalidLogInMessage: true});
        }
    }

    usernameOnChangeHandler = (event: any) => {
        this.setState({usernameEntered: event.target.value});
    }

    passwordOnChangeHandler = (event: any) => {
        this.setState({passwordEntered: event.target.value});
    }

    render() {
        let invalidMessage = this.state.invalidLogInMessage ? <div>Invalid Username or Password</div> : null;
        return (
            <div className={classes.LogInPageContainer}>
                <div>username</div>
                <input onChange={this.usernameOnChangeHandler} value={this.state.usernameEntered}></input>
                <div>password</div>
                <input onChange={this.passwordOnChangeHandler} value={this.state.passwordEntered}></input>
                <div></div>
                <div>{invalidMessage}</div>
                <button onClick={this.logInHandler} >Log In</button>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        authenticated: state.authenticated
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        authenticateUser: (userObject: any) => dispatch({type: 'AUTHENTICATE_USER', payload: { userObject: userObject }})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogInPage));
