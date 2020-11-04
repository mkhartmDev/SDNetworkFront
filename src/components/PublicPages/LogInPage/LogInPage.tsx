import React, { Component } from 'react'
import classes from './LogInPage.module.sass'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
        const validateUser = async (username: any, password: any) => {
            let apiCall = `https://jsonplaceholder.typicode.com/${username}/${password}`;
            const response = await fetch(apiCall); // fake api, backend validation
            const responseJSON = await response.json();
            console.log(responseJSON);
            if (responseJSON.address?.zipcode === '92998-3874') {
                return 'VALID';
            }
            return 'NOT VALID';
        }
        let userIsValid = await validateUser(this.state.usernameEntered, this.state.passwordEntered);
        if (userIsValid === 'VALID') {
            this.props.authenticateUser();
            this.props.history.push('/user');
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
        authenticateUser: () => dispatch({type: 'AUTHENTICATE_USER'})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogInPage));
