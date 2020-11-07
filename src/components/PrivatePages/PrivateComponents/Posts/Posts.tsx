import React, { Component } from 'react'
import classes from './Posts.module.sass'
import Post from './Post/Post'

interface Props {
    
}
interface State {
    
}

class Posts extends Component<any, any> {
    
    state = {
        PostArray: []
    }

    fakeFeedAPICall = () => {
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

    fakeProfileAPICall = () => {
        return [
            {
                "username":"kyleaoki1",
                "firstName":"xyz",
                "lastName":"zzz",
                "postText":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "imagePost":true,
                "imgURL":"https://upload.wikimedia.org/wikipedia/commons/e/e1/Gaoliang_Bridge.JPG",
                "date":"2020-11-1",
                "time":"8:29 PM"
             },
             {
                "username":"kyleaoki2",
                "firstName":"Kyle2",
                "lastName":"Aoki2",
                "postText":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam magnam consequuntur quis labore dolorum asperiores recusandae esse, praesentium error saepe porro tempora corrupti.",
                "imagePost":true,
                "imgURL":"https://upload.wikimedia.org/wikipedia/commons/e/e1/Gaoliang_Bridge.JPG",
                "date":"2020-11-1",
                "time":"8:29 PM"
             },
             {
                "username": "kyleaoki3",
                "firstName":"asdfasdfasdf",
                "lastName":"asdfasdf",
                "postText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam magnam consequuntur quis labore dolorum asperiores recusandae esse, accusantium suscipit tenetur vero, delectus sequi, praesentium error saepe porro tempora corrupti.",
                "imagePost":true,
                "imgURL":"https://upload.wikimedia.org/wikipedia/commons/e/e1/Gaoliang_Bridge.JPG",
                "date":"2020-11-1",
                "time":"8:29 PM"
             }
        ];
    }

    genereateFeedArray = () => {
        let testPostData = this.fakeFeedAPICall(); // get all posts ordered by date (latest posts)
        return testPostData;
    }

    generateProfilePostsArray = (username: any) => {
        let testPostData = this.fakeProfileAPICall(); // Get posts of specific user "http:// ... /username"
        return testPostData;
    }

    generatePosts = () => {
        // Gets post data, depending on whether  this.props.ProfileOrFeed  is equal to 'PROFILE' or 'FEED'
        let postDataArr: any = [];
        if (this.props.ProfileOrFeed === 'PROFILE') {
            postDataArr = this.generateProfilePostsArray(this.props.username);
        } else {
            postDataArr = this.genereateFeedArray();
        }

        let postArr = [];
        for (let postData of postDataArr){
            postArr.push(
                <Post postData={postData} />
            );
        }
        return postArr;
    }

    componentDidMount() {
        let PostArray = this.generatePosts();
        this.setState({PostArray: PostArray});
    }

    render() {

        return (
            <div className={classes.PostList}>
                {this.state.PostArray}
            </div>
        )
    }
}

export default Posts;