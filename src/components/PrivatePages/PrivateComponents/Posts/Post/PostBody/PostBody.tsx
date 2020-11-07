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
                    {this.props.postData.postText}
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
