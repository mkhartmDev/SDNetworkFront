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

        let dateTime = `${this.props.postData.date} ${this.props.postData.time}`
        let image = !this.props.postData.imagePost ? null : (

            <div className={classes.DateImageContainer}>
                <div className={classes.dateTime}>{dateTime}</div>
                <div className={classes.ImageContainer}>
                    <img className={classes.PostImage} src={this.props.postData.imgURL} alt="pic" />
                </div>
            </div>
            
        )
        
        return (
            <div className={classes.PostContainer}>
                <div className={classes.LeftSide}>
                    <Poster {...this.props.postData} />
                </div>
                <div className={classes.RightSide}>
                    {image}
                    <PostBody postData={this.props.postData} />
                </div>
            </div>
        )
    }
}

export default Post;