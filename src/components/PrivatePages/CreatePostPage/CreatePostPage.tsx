import React, { Component } from 'react'
import NavBar from '../PrivateComponents/NavBar/NavBar'
import classes from './CreatePostPage.module.sass'
import profilePic from '../../../assets/profilePic.png'

interface Props {
    
}
interface State {
    
}

export default class CreatePostPage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className={classes.Body}>
                <NavBar />
            <div className={classes.MAXWIDTH}>
                <div className={classes.CreatePostContainer}>
                    <div className={classes.PosterAndTextArea}>
                        <div className={classes.ProfilePicContainer}>
                            <img className={classes.ProfilePic} src={profilePic} alt="pic" />
                            <div className={classes.PosterName}>Firstname Lastname</div>
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
