import React, { Component } from "react";
import classes from "./LogInPage.module.sass";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { axiosInstance } from "../../../util/axiosConfig";
import { User } from "../../../models/User";
import { BiShow } from 'react-icons/bi'

interface Props {}
interface State {}

class LogInPage extends Component<any, any> {
  state = {
    usernameEntered: "",
    passwordEntered: "",
    invalidLogInMessage: false,
    showPassword: false
  };

  logInHandler = async () => {
    //get user from api
    const getUser = async (username: string, password: string) => {
      let response;
      try {
        return (response = await axiosInstance.post("/login/", {
          username: username,
          password: password,
        }));
      } catch (error) {
        console.log(error);
        response = null;
      }
    };
    let user = await getUser(
      this.state.usernameEntered,
      this.state.passwordEntered
    );
    //validate user
    if (user != null && user.data) {
      const userObject: User = user.data;
      this.props.authenticateUser(userObject);
      this.props.history.push(`/user/${userObject.username}`);
    } else {
      this.setState({ invalidLogInMessage: true });
    }
  };

  backButtonClickedHandler = () => {
    this.props.history.push('/landing');
  };

  showIconHandler = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  usernameOnChangeHandler = (event: any) => {
    this.setState({ usernameEntered: event.target.value });
  };

  passwordOnChangeHandler = (event: any) => {
    this.setState({ passwordEntered: event.target.value });
  };

  render() {

    let invalidMessage = this.state.invalidLogInMessage ? (
      <div className={classes.InvalidMessage}>Invalid Username or Password</div>
    ) : null;

    let showPassword = this.state.showPassword ? '' : 'password'
    let showButtonClass = this.state.showPassword ? `${classes.ShowIcon} ${classes.ShowIconActive}` : classes.ShowIcon

    return (
      <div className={classes.LogInPageContainer}>
        <div className={classes.Controls}>
          <div className={classes.BackButton} onClick={this.backButtonClickedHandler} >Back</div>

          <div className={classes.UsernameAndPasswordFieldsContainer}>
            <div className={classes.Field}>
                <div className={classes.Label}>Username</div>
                <input className={classes.Input} onChange={this.usernameOnChangeHandler} value={this.state.usernameEntered}/>
            </div>
            <div className={classes.Field}>
                <div className={classes.Label}>Password</div>
                <input className={classes.Input} type={showPassword} onChange={this.passwordOnChangeHandler} value={this.state.passwordEntered}/>
                <BiShow className={showButtonClass} onClick={this.showIconHandler} />
            </div>
          </div>

          <div className={classes.LogInButton} onClick={this.logInHandler}>Log In</div>
          {invalidMessage}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    authenticated: state.authenticated,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    authenticateUser: (userObject: User) =>
      dispatch({
        type: "AUTHENTICATE_USER",
        payload: { userObject: userObject },
      }),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LogInPage)
);
