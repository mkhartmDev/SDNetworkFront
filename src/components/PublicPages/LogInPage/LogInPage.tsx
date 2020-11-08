import React, { Component } from "react";
import classes from "./LogInPage.module.sass";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { axiosInstance } from "../../../util/axiosConfig";
import { User } from "../../../models/User";

interface Props {}
interface State {}

class LogInPage extends Component<any, any> {
  state = {
    usernameEntered: "",
    passwordEntered: "",
    invalidLogInMessage: false,
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

  usernameOnChangeHandler = (event: any) => {
    this.setState({ usernameEntered: event.target.value });
  };

  passwordOnChangeHandler = (event: any) => {
    this.setState({ passwordEntered: event.target.value });
  };

  render() {
    let invalidMessage = this.state.invalidLogInMessage ? (
      <div>Invalid Username or Password</div>
    ) : null;
    return (
      <div className={classes.LogInPageContainer}>
        <div className={classes.Controls}>
          <div>username</div>
          <input
            onChange={this.usernameOnChangeHandler}
            value={this.state.usernameEntered}/>
          <div >password</div>
          <input
            onChange={this.passwordOnChangeHandler}
            value={this.state.passwordEntered}/>
          <button className={classes.NavLink} onClick={this.logInHandler}>Log In</button>
          <div>{invalidMessage}</div>
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
