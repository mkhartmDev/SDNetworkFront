import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './SearchPage.module.sass'
import SearchResult from './SearchResult/SearchResult'
import profilePic from '../../../../assets/profilePic.png'
import { connect } from 'react-redux'

interface Props {
    
}
interface State {
    
}

class SearchPage extends Component<any, any> {

    state = {
        resultQuantity: 30
    }

    generateSearchResults = () => {
        const maxQuantity = 24
        let searchResultsArr = [];
        let quantity = this.state.resultQuantity <= maxQuantity ? this.state.resultQuantity : maxQuantity
        for (let i = 0; i < quantity; i++){
            searchResultsArr.push(
                <SearchResult img={profilePic} />
            );
        }
        return searchResultsArr;
    }

    componentDidMount () {
        console.log(this.props.searchInput);
    }

    render() {
        const searchResultArr = this.generateSearchResults();
        const moreButton = this.state.resultQuantity >= 30 ? <div className={classes.MoreButton}>More</div> : null
        return (
            
            <div className={classes.Body}>
                <NavBar />
                <div className={classes.MAXWIDTH}>
                    <div className={classes.SearchPage}>
                        <div className={classes.SearchResults}>
                            {searchResultArr}
                        </div>
                        {moreButton}
                    </div>
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

export default connect(mapStateToProps, null)(SearchPage)