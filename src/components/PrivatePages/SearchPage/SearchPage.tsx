import React, { Component } from 'react'
import NavBar from '../PrivateComponents/NavBar/NavBar'
import classes from './SearchPage.module.sass'
import SearchResult from './SearchResult/SearchResult'
import profilePic from '../../../assets/profilePic.png'
import { connect } from 'react-redux'

interface Props {
    
}
interface State {
    
}

class SearchPage extends Component<any, any> {

    state = {
        maxResultsDisplayed: 18,
        currentFirstResultIndex: 0,
        currentLastResultIndex: 18,
        searchResults: [],
        searchResultsQuantity: 0
    }

    fakeSearchResultsAPIcall = () => {
        return [
            {
                username: 'kyleaoki1',
                firstName: 'kyle',
                lastName: 'aoki'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki1',
                firstName: 'kyle',
                lastName: 'aoki'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            },
            {
                username: 'kyleaoki2',
                firstName: 'asdf',
                lastName: 'fdfdf'
            },
            {
                username: 'kyleaoki3',
                firstName: '9i239',
                lastName: 'pqeoru'
            }
        ]
    }

    componentDidMount () {
        const searchResults = this.fakeSearchResultsAPIcall();
        const searchResultsQuantity = searchResults.length;
        this.setState({
            searchResults: searchResults,
            searchResultsQuantity: searchResultsQuantity
        });
    }

    moreButtonOnClickHandler = () => {
        const currentFirstResultIndex = this.state.currentFirstResultIndex + this.state.maxResultsDisplayed;
        const currentLastResultIndex = this.state.currentLastResultIndex + this.state.maxResultsDisplayed;
        this.setState({
            currentFirstResultIndex: currentFirstResultIndex,
            currentLastResultIndex: currentLastResultIndex
        });
    }

    backButtonOnClickHandler = () => {
        const currentFirstResultIndex = this.state.currentFirstResultIndex - this.state.maxResultsDisplayed;
        const currentLastResultIndex = this.state.currentLastResultIndex - this.state.maxResultsDisplayed;
        this.setState({
            currentFirstResultIndex: currentFirstResultIndex,
            currentLastResultIndex: currentLastResultIndex
        });
    }

    render() {
        
        const moreButton = this.state.currentLastResultIndex < this.state.searchResultsQuantity ? 
        <div className={classes.SearchButton} onClick={this.moreButtonOnClickHandler}>More</div> 
        : null;

        const backButton = this.state.currentLastResultIndex > this.state.maxResultsDisplayed ?
        <div className={classes.SearchButton} onClick={this.backButtonOnClickHandler}>Back</div>
        : null;

        let searchResultComponents = [];

        for (let i = this.state.currentFirstResultIndex; i < this.state.currentLastResultIndex; i++) {
            const result = this.state.searchResults[i];
            if (result) {
                searchResultComponents.push( <SearchResult {...result} /> );
            }
        }

        return (
            
            <div className={classes.Body}>
                <NavBar />
                <div className={classes.MAXWIDTH}>
                    <div className={classes.SearchPage}>
                        <div className={classes.SearchResults}>
                            {searchResultComponents}
                        </div>
                        <div className={classes.ButtonContainer}>
                            {backButton}
                            {moreButton}
                        </div>
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