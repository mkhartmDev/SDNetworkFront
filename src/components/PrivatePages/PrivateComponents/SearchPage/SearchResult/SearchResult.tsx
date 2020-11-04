import classes from './SearchResult.module.sass'
import React, { Component } from 'react'

interface Props {
    
}
interface State {
    
}

export default class SearchResult extends Component<any, any> {
    state = {}

    render() {
        return (
            <div className={classes.SearchResult}>
                <div className={classes.ImageContainer}>
                    <img className={classes.Image} src={this.props.img} alt="profile pic"/>
                </div>
                <div className={classes.NameContainer}>
                    Firstname Lastname
                </div>
            </div>
        )
    }
}
