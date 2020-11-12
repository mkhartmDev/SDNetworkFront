import React, { Component } from 'react'
import classes from './PostBody.module.sass'
import { FiThumbsUp } from 'react-icons/fi'
import { axiosInstance } from '../../../../../../util/axiosConfig'
import { connect } from 'react-redux'

interface Props {
    
}
interface State {
    
}

class PostBody extends Component<any, any> {
    state = {
        userLikedPost: false
    }

    onLikeButtonPressedHandler = () => {
        axiosInstance.post('/likes/add', { postId: this.props.postId, userId: this.props.userObject.userId }).then(response => console.log(response));
    }

    render() {

        console.log(this.props);

        return (
            <div className={classes.PostBodyContainer}>
                <div className={classes.PostBody}>
                    {this.props.postText}
                </div>
                <div className={classes.PostButtonsContainer}>
                    <div className={classes.Likes}><FiThumbsUp />{this.props.numberLikes}</div>
                    <div className={classes.Spacer}></div>
                    <div className={classes.LikeButton} onClick={this.onLikeButtonPressedHandler}>Like</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userObject: state.userObject
    }
}

export default connect(mapStateToProps, null)(PostBody);