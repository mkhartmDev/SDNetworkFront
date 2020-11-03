import React, { Component } from 'react'
import classes from './PostBody.module.sass'

interface Props {
    
}
interface State {
    
}

export default class PostBody extends Component<any, any> {
    state = {}

    render() {
        return (
            <div className={classes.PostBodyContainer}>
                <div className={classes.PostBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className={classes.PostButtonsContainer}>
                    <div className={classes.Likes}>Likes: {this.props.numLikes}</div>
                    <div className={classes.Spacer}></div>
                    <div className={classes.LikeButton}>Like</div>
                    <div className={classes.ViewButton}>View</div>
                </div>
            </div>
        )
    }
}
