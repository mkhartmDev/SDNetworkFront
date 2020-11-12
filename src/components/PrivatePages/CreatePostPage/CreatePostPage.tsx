import React, { Component } from 'react'
import NavBar from '../PrivateComponents/NavBar/NavBar'
import classes from './CreatePostPage.module.sass'
import { connect } from 'react-redux'
import { axiosInstance } from '../../../util/axiosConfig'

interface Props {
    
}
interface State {
    
}

class CreatePostPage extends Component<any, any> {

    state = {
        textAreaInput: '',
        imageToUpload: null,
        profilePictureURL: this.props.s3BaseURL_ProfilePicture + this.props.userObject.username
    }

    onTextAreaChangeHandler = (event: any) => {
        this.setState({
            textAreaInput: event.target.value
        })
    }

    onInputChangeHandler = (event: any) => {
        this.setState({imageToUpload: event.target.files[0]});
    }

    onSubmitButtonPressHandler = () => {

        const isImagePost = this.state.imageToUpload != null

        let post = {
            "postId": 0,
            "postText": this.state.textAreaInput,
            "numberOfLikes": 0,
            "imageLink": null,
            "likedBy": [],
            "posterId": this.props.userObject.userId,
            "imagePost": isImagePost
        }

        let username: any = this.props.userObject.username;

        function getBase64 (file: any, callback: any) {
            const reader = new FileReader();
            reader.addEventListener('load', () => callback(reader.result));
            reader.readAsDataURL(file);
        }

        axiosInstance.post('/posts/new', post).then(
            response => {
                if (isImagePost) {
                    getBase64(this.state.imageToUpload, function(b64Data: any){
                        axiosInstance.post('/upload-image/new-post', {postId: response.data.postId, b64: b64Data}).then(response => console.log(response))
                    });
                }
        });
        
    }

    profilePictureOnErrorHandler = () => {
        this.setState({profilePictureURL: this.props.s3BaseURL_ProfilePicture + 'default/default'});
    }

    render() {

        return (
            <div className={classes.Body}>
                <NavBar />
            <div className={classes.MAXWIDTH}>
                <div className={classes.CreatePostContainer}>

                    <div className={classes.PosterAndTextArea}>
                        <div className={classes.ProfilePicAndNameContainer}>
                            <div className={classes.ProfilePicContainer}>
                                <div className={classes.ProfilePicImageContainer}>
                                    <img className={classes.ProfilePic} src={this.state.profilePictureURL} alt="pic" onError={this.profilePictureOnErrorHandler}/>
                                </div>
                            </div>
                            <div className={classes.PosterName}>{this.props.userObject.firstName} {this.props.userObject.lastName}</div>
                        </div>
                        <textarea 
                            className={classes.PostTextArea} 
                            placeholder='What would you like to post?'
                            onChange={this.onTextAreaChangeHandler}
                        />
                    </div>

                    <div className={classes.ImageUploadContainer}>
                        <div>Upload An Image (Optional):</div>
                        <input 
                            className={classes.ImageInput} 
                            type="file" 
                            id="img" 
                            name="img" 
                            accept="image/*"
                            onChange={this.onInputChangeHandler}
                            />
                    </div>
                    
                    <div className={classes.SubmitButton} onClick={this.onSubmitButtonPressHandler}>Submit Post</div>
                </div>
            </div>
        </div>

        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userObject: state.userObject,
        s3BaseURL_ProfilePicture: state.s3BaseURL_ProfilePicture
    }
}

export default connect(mapStateToProps, null)(CreatePostPage);
