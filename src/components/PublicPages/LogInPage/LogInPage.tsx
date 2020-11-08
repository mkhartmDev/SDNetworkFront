import React, { Component } from 'react'
import classes from './LogInPage.module.sass'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
import { axiosInstance } from '../../../util/axiosConfig'

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
            response = await axiosInstance.post("/login/", {username: username, password: password});
            } catch (error) {
                console.log(error);
                response = null;
            }
        // const data = JSON.stringify({username: username, password: password});
        // const response = await axiosInstance({
        //     method: 'post',
        //     url: '/login',
        //     data: data,
        //     headers:{
        //         'Access-Control-Allow-Origin':'*',
        //     },

        
            if(response){
                console.log(response.data);
                return 'VALID'
            }
            return 'NOT VALID'
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
        if (userIsValid === 'VALID') {
            const userObject = await { 
                username: 'kyleaoki', 
                firstName: 'Kyle', 
                lastName: 'Aoki',
                email: 'kyle@aoki.com'
            }; // api call goes here
            
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
        console.log("[TEST]");
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
