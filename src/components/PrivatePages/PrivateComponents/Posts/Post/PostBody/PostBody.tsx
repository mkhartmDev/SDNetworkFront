import React, { Component } from 'react'
import classes from './PostBody.module.sass'
import { FiThumbsUp } from 'react-icons/fi'

interface Props {
    
}
interface State {
    
}

export default class PostBody extends Component<any, any> {
    state = {
        userLikedPost: false
    }

    onLikeButtonPressedHandler = () => {
        
    }

    render() {

        console.log(this.props);

        return (
            <div className={classes.PostBodyContainer}>
                <div className={classes.PostBody}>
                    {this.props.postData.postText}
                </div>
                <div className={classes.PostButtonsContainer}>
                    <div className={classes.Likes}><FiThumbsUp />{this.props.postData.numberLikes}</div>
                    <div className={classes.Spacer}></div>
                    <div className={classes.LikeButton} onClick={this.onLikeButtonPressedHandler}>Like</div>
                </div>
            </div>
        )
    }
}
