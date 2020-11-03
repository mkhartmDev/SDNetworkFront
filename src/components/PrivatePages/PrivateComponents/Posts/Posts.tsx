import React, { Component } from 'react'
import classes from './Posts.module.sass'
import Post from './Post/Post'

interface Props {
    
}
interface State {
    
}

export default class Posts extends Component<any, any> {
    state = {
        ProfileOrFeed: this.props.ProfileOrFeed
    }

    generatePostArray = () => {
        let postArr = [];
        for (let i = 0; i < 7; i++){
            postArr.push(
                <Post />
            );
        }
        return postArr;
    }

    render() {
        let PostArray = this.generatePostArray();
        return (
            <div className={classes.PostList}>
                {PostArray}
            </div>
        )
    }
}
