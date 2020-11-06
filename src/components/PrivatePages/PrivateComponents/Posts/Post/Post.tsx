import React, { Component } from 'react'
import classes from './Post.module.sass'
import PostBody from './PostBody/PostBody'
import Poster from './Poster/Poster'

interface Props {
    
}

interface State {
    
}

class Post extends Component<any, any> {
    state = {}

    render() {

        let dateTime = `${this.props.userObj.date} ${this.props.userObj.time}`
        let image = !this.props.userObj.imagePost ? null : (

            <div className={classes.DateImageContainer}>
                <div className={classes.dateTime}>{dateTime}</div>
                <div className={classes.ImageContainer}>
                    <img className={classes.PostImage} src={this.props.userObj.imgURL} alt="pic" />
                </div>
            </div>
            
        )
        
        return (
            <div className={classes.PostContainer}>
                <div className={classes.LeftSide}>
                    <Poster {...this.props} />
                </div>
                <div className={classes.RightSide}>
                    {image}
                    <PostBody numLikes={this.props.numLikes} />
                </div>
            </div>
        )
    }
}

export default Post;