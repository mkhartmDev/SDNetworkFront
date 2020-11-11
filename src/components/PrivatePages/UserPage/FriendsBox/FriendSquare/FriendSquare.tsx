import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './FriendSquare.module.sass'

interface Props {
    
}
interface State {
    
}
class FriendSquare extends Component<any, any> {
    state = {
        profilePicture: this.props.s3BaseURL_ProfilePicture + this.props.username
    }

    onImageErrorHandler = () => {
        this.setState({profilePicture: this.props.s3BaseURL_ProfilePicture + "default/default"});
    }

    render() {

        return (
            <div className={classes.FriendSquare}>
                <div className={classes.ProfilePicContainer}>
                    <img className={classes.ProfilePic} onError={this.onImageErrorHandler} src={this.state.profilePicture} alt="profilePic"/>
                </div>
                <div className={classes.NameContainer}>{this.props.firstName}</div>
                <div className={classes.NameContainer}>{this.props.lastName}</div>
            </div>
        )
        
    }
}

const mapStateToProps = (state: any) => {
    return {
        s3BaseURL_ProfilePicture: state.s3BaseURL_ProfilePicture
    };
}

export default connect(mapStateToProps, null)(FriendSquare);