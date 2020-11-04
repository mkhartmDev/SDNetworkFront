import React, { Component } from 'react'
import classes from './Post.module.sass'
import PostBody from './PostBody/PostBody'
import Poster from './Poster/Poster'

interface Props {
    
}

interface State {
    
}

export default class Post extends Component<any, any> {
    state = {
        image: true,
        imgSrc: 'https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg',
        date: '2020-11-1',
        time: '8:29 PM'
    }

    render() {
        let dateTime = `${this.state.date} ${this.state.time}`
        let image = !this.state.image ? null : (
            <div className={classes.DateImageContainer}>
                <div className={classes.dateTime}>{dateTime}</div>
                <div className={classes.ImageContainer}>
                    <img className={classes.PostImage} src={this.state.imgSrc} alt="pic" />
                </div>
            </div>
        )
        
        
        return (
            <div className={classes.PostContainer}>
                <div className={classes.LeftSide}>
                    <Poster />
                </div>
                <div className={classes.RightSide}>
                    {image}
                    <PostBody numLikes={this.props.numLikes} />
                </div>
            </div>
        )
    }
}
