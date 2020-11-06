import React, { Component } from 'react'
import classes from './Posts.module.sass'
import Post from './Post/Post'
import { connect } from 'react-redux'

interface Props {
    
}
interface State {
    
}

class Posts extends Component<any, any> {
    state = {
        ProfileOrFeed: this.props.ProfileOrFeed
    }

    generatePostArray = () => {
        
        let testPostData = [
           { username: 'kyleaoki1', firstName: 'Kyle1', lastName: 'Aoki1', 
            postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 
            imagePost: true, imgURL: "https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg",
            date: '2020-11-1', time: '8:29 PM' },
           { username: 'kyleaoki2', firstName: 'Kyle2', lastName: 'Aoki2', 
            postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 
            imagePost: true, imgURL: "https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg",
            date: '2020-11-1', time: '8:29 PM' },
           { username: 'kyleaoki3', firstName: 'Kyle3', lastName: 'Aoki3', 
            postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 
            imagePost: true, imgURL: "https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg",
            date: '2020-11-1', time: '8:29 PM' }
        ]

        let postArr = [];
        for (let obj of testPostData){
            postArr.push(
                <Post userObj = {obj} />
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

export default Posts;