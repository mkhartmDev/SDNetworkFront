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
        PostArray: []
    }

    fakeAPICall = () => {
        return [
            {
                "username":"kyleaoki1",
                "firstName":"Kyle1",
                "lastName":"Aoki1",
                "postText":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "imagePost":true,
                "imgURL":"https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg",
                "date":"2020-11-1",
                "time":"8:29 PM"
             },
             {
                "username":"kyleaoki2",
                "firstName":"Kyle2",
                "lastName":"Aoki2",
                "postText":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "imagePost":true,
                "imgURL":"https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg",
                "date":"2020-11-1",
                "time":"8:29 PM"
             },
             {
                "username":"kyleaoki3",
                "firstName":"Kyle3",
                "lastName":"Aoki3",
                "postText":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "imagePost":true,
                "imgURL":"https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg",
                "date":"2020-11-1",
                "time":"8:29 PM"
             }
        ];
    }

    genereateFeedArray = () => {
        let testPostData = this.fakeAPICall();
        return testPostData;
    }

    generateProfilePostsArray = (username: any) => {
        // Get posts of specific user "http:// ... /username"
        let testPostData = this.fakeAPICall();
        return testPostData;
    }

    generatePosts = () => {
        // Gets post data, depending on whether  this.props.ProfileOrFeed  is equal to 'PROFILE' or 'FEED'
        let postData: any = [];
        if (this.props.ProfileOrFeed === 'PROFILE') {
            postData = this.generateProfilePostsArray(this.props.username);
        } else {
            postData = this.genereateFeedArray();
        }

        let postArr = [];
        for (let obj of postData){
            postArr.push(
                <Post userObj={obj} />
            );
        }
        return postArr;
    }

    componentDidMount() {
        let PostArray = this.generatePosts();
        this.setState({PostArray: PostArray})
    }

    render() {

        console.log(this.state.PostArray);

        return (
            <div className={classes.PostList}>
                {this.state.PostArray}
            </div>
        )
    }
}

export default Posts;