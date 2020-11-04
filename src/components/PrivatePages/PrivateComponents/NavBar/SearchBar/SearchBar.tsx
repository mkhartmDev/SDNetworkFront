import React, { Component } from 'react'
import classes from './SearchBar.module.sass'
import { HiOutlineSearch } from 'react-icons/hi'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

interface Props {
    
}

interface State {
    
}

class SearchBar extends Component<any, any> {
    
    state = {
        searchBarInputText: this.props.searchInput
    }

    searchButtonClickedHandler = () => {
        this.props.setSearchInput(this.state.searchBarInputText);
        this.props.history.push('/search');
    }

    searchBarOnChangeHandler = (event: any) => {
        this.setState({
            ...this.state,
            searchBarInputText: event.target.value
        });
    }

    render() {
        return (
            <div className={classes.SearchBarContainer}>
                <input className={classes.SearchInput} onChange={this.searchBarOnChangeHandler}></input>
                <div className={classes.SearchButton} onClick={this.searchButtonClickedHandler}>
                    <HiOutlineSearch className={classes.SearchButtonIcon} />
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state: any) => {
    return {
        searchInput: state.searchInput
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setSearchInput: (input: any) => dispatch({type: 'SET_SEARCH_INPUT', payload: {searchInput: input}})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))