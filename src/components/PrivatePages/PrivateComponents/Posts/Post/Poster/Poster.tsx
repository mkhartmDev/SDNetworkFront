import React, { Component } from 'react'
import classes from './Poster.module.sass'
import profilePic from '../../../../../../assets/profilePic.png'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
interface Props {
    
}
interface State {
    
}

class Poster extends Component<any, any> {
    state = {}

    posterOnClickHandler = () => {
        this.props.history.push(`/user/${this.props.username}`);
    }

    render() {

        const profilePicURL = this.props.s3BaseURL_ProfilePicture + this.props.username;

        return (
            <div className={classes.PosterContainer} onClick={this.posterOnClickHandler}>
                <div className={classes.PosterImageAndNameContainer}>
                    <div className={classes.PosterProfilePicContainer}>
                        <img className={classes.PosterProfilePic} 
                            src={profilePicURL} alt="pic"
                        />
                    </div>
                <div className={classes.PosterNameContainer}>{this.props.firstName} {this.props.lastName}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        s3BaseURL_ProfilePicture: state.s3BaseURL_ProfilePicture
    }
}

export default withRouter(connect(mapStateToProps, null)(Poster));