import React, { Component } from 'react'
import classes from './Posts.module.sass'
import Post from './Post/Post'
import { axiosInstance } from '../../../../util/axiosConfig'

interface Props {
    
}
interface State {
    
}

class Posts extends Component<any, any> {
    
    state = {
        PostArray: []
    }

    feedAPICall = () => {
        axiosInstance.get('/posts/all').then(response => {
            let postArr = [];
            for (let postData of response.data){
                postArr.push(
                    <Post postData={postData} />
                );
            }
            this.setState({PostArray: postArr});
        });
    }

    profileAPICall = () => {
        axiosInstance.get('/posts/all').then(response => {
            let postArr = [];
            for (let postData of response.data){
                postArr.push(
                    <Post postData={postData} />
                );
            }
            this.setState({PostArray: postArr});
        });
    }

    componentDidMount() {
        if (this.props.ProfileOrFeed === 'PROFILE') {
            this.profileAPICall()
        } else {
            this.feedAPICall();
        }
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