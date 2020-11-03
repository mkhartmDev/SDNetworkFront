import React, { Component } from 'react'
import classes from './FriendsBox.module.sass'
import FriendSquare from './FriendSquare/FriendSquare';

interface Props {
    
}
interface State {
    
}

export default class FriendsBox extends Component<Props, State> {

    state = {}

    generateFriendSquares = () => {
        let squareArr = [];
        for (let i = 0; i < 12; i++){
            squareArr.push(
                <FriendSquare />
            );
        }
        return squareArr;
    }

    render() {

        let friendSquares = this.generateFriendSquares();

        return (
            <div className={classes.FriendsBoxContainer}>
                {friendSquares}
            </div>
        )
    }
}
