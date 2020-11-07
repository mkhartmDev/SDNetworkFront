import classes from './SearchResult.module.sass'
import React, { Component } from 'react'
import { connect } from 'react-redux'

interface Props {
    
}
interface State {
    
}

class SearchResult extends Component<any, any> {
    state = {}

    render() {

        const profilePictureURL = this.props.s3BaseURL_ProfilePicture + this.props.username;

        return (
            <div className={classes.SearchResult}>
                <div className={classes.ImageContainer}>
                    <img className={classes.Image} src={profilePictureURL} alt="profile pic"/>
                </div>
                <div className={classes.NameContainer}>
                    {this.props.firstName} {this.props.lastName}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        s3BaseURL_ProfilePicture: state.s3BaseURL_ProfilePicture
    }
}

export default connect(mapStateToProps, null)(SearchResult)