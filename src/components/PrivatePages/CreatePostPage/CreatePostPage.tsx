import React, { Component } from 'react'
import NavBar from '../PrivateComponents/NavBar/NavBar'
import classes from './CreatePostPage.module.sass'

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
                    <textarea className={classes.PostTextArea} placeholder='What would you like to post?'></textarea>
                    <input className={classes.ImageInput} type="file" id="img" name="img" accept="image/*"></input>
                    <button className={classes.SubmitButton}>Submit Post</button>
                </div>
            </div>
        </div>

        )
    }
}
