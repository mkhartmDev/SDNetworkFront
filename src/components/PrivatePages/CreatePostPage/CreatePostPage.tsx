import React, { Component } from 'react'
import NavBar from '../PrivateComponents/NavBar/NavBar'
import classes from './CreatePostPage.module.sass'
import profilePic from '../../../assets/profilePic.png'
import { connect } from 'react-redux'

interface Props {
    
}
interface State {
    
}

class CreatePostPage extends Component<any, any> {
    state = {}

    render() {

        const profilePictureURL = this.props.s3BaseURL_ProfilePicture + this.props.userObject.username;

        return (
            <div className={classes.Body}>
                <NavBar />
            <div className={classes.MAXWIDTH}>
                <div className={classes.CreatePostContainer}>
                    <div className={classes.PosterAndTextArea}>
                        <div className={classes.ProfilePicContainer}>
                            <img className={classes.ProfilePic} src={profilePictureURL} alt="pic" />
                            <div className={classes.PosterName}>{this.props.userObject.firstName} {this.props.userObject.lastName}</div>
                        </div>
                        <textarea 
                            className={classes.PostTextArea} 
                            placeholder='What would you like to post?' 
                        />
                    </div>
                    <div className={classes.ImageUploadContainer}>
                        <div>Upload An Image (Optional):</div>
                        <input 
                            className={classes.ImageInput} 
                            type="file" 
                            id="img" 
                            name="img" 
                            accept="image/*" />
                    </div>
                    
                    <button className={classes.SubmitButton}>Submit Post</button>
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
