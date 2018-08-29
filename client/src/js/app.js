import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CardWrapper from './components/CardWrapper';

import config from './config/config';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shitHead: 'ReactJS',
            isLoaded: false,
            isDirty: false,
            searchNotRecognized: false,
            searchHasNoResults: false,
            breweries: [],
            searchValue: "Enter Zip code...",
            searchTerm: '',
            brewCount: '',
        }
        this.sendDatabaseQuery = this.sendDatabaseQuery.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {

        let searchTerm = this.state.searchTerm

        if (prevState.searchTerm !== searchTerm) {

            const searchType = this.determineSearchType(searchTerm);
            const normalizedSearchTerm = searchTerm.trim().toUpperCase();

            if (searchType === 'zip') {
                this.queryDatabaseByZipCode(normalizedSearchTerm)
            } else if (searchType === 'state_code') {
                this.queryDatabaseByStateCode(normalizedSearchTerm)
            } else if (searchType === 'state_name') {
                this.queryDatabaseByStateName(normalizedSearchTerm)
            } else {
                this.setState({searchNotRecognized: true});
            }
        }     
    }

    queryDatabaseByZipCode(zipcode) {
        this.sendDatabaseQuery('/api/zipcode/' + zipcode);
    }

    queryDatabaseByStateCode(state) {
        this.sendDatabaseQuery('/api/state/' + state);
    }

    queryDatabaseByStateName(state) {
        const states = config.get('States');

        const result = states.find(obj => {
            return obj.name.toUpperCase() === state
        });
        this.sendDatabaseQuery('/api/state/' + result.code);
    }

    sendDatabaseQuery(uri) {
        if (this.state.isDirty === false) {
            this.setState({isDirty: true});
        }
        if (this.state.searchNotRecognized === true) {
            this.setState({searchNotRecognized: false});
        }

        axios.get(uri)
            .then(function (response) {
                this.setState({
                    isLoaded: true,
                    isDirty: false,
                    breweries: response.data,
                    searchHasNoResults: (response.data.length === 0) ? true : false
                });
            }.bind(this));        
    }

    queryDatabaseHandler(searchValue) {
        this.setState({ 
            searchTerm: searchValue
        });
    }



    determineSearchType(searchValue) {

        const normalizedSearchValue = searchValue.trim().toUpperCase();
        const stateNameArray = config.getNormalizedStateNameArray();
        const stateCodeArray = config.getNormalizedStateCodeArray();

        if (stateNameArray.includes(normalizedSearchValue)) {
            return 'state_name';
        } else if (stateCodeArray.includes(normalizedSearchValue)) {
            return 'state_code';
        } else if (normalizedSearchValue.length === 5) {
            const checkIsInteger = parseInt(normalizedSearchValue);
            if (!isNaN(checkIsInteger)) {
                return 'zip';
            }
        }
        return 'unknown';
    }

    render() {

        
        return (
            
            <div className="container">
                <SearchBar queryDatabaseHandler={this.queryDatabaseHandler.bind(this)}/>
                <div className="collection">
                    <a href="#!" className="collection-item"><span className="new badge blue darken-1">{this.state.breweries.length}</span>Breweries Found</a>
                </div>
                
                <CardWrapper 
                    searchResults={this.state.breweries} 
                    isLoaded={this.state.isLoaded} 
                    isDirty={this.state.isDirty} 
                    searchNotRecognized={this.state.searchNotRecognized} 
                    searchHasNoResults={this.state.searchHasNoResults}
                />
            </div>          
        ); 
    }
}

export default App;