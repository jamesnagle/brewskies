import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CardWrapper from './components/CardWrapper';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shitHead: 'ReactJS',
            isLoaded: false,
            breweries: [],
            searchValue: "Enter Zip code...",
            searchTerm: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let searchTerm = this.state.searchTerm
        if (prevState.searchTerm !== searchTerm) {
            if (this.determineSearchType(searchTerm) === 'zip') {
                this.queryDatabaseByZipCode(searchTerm)
            } else {
                this.queryDatabaseByState(searchTerm)
            }
        }     
    }

    queryDatabaseByZipCode(zipcode) {
        axios.get('/api/zipcode/' + zipcode)
        .then(function (response) {
            this.setState({
                isLoaded: true,
                breweries: response.data
            });
        }.bind(this));
    }

    queryDatabaseByState(state) {
        axios.get('/api/state/' + state.toUpperCase())
        .then(function (response) {
            this.setState({
                isLoaded: true,
                breweries: response.data
            });
        }.bind(this));
    }

    queryDatabaseHandler(searchValue) {
        this.setState({ 
            searchTerm: searchValue
        });
    }

    determineSearchType(searchValue) {
        if (searchValue.length === 6) {
            return 'zip';
        } else {
            return 'state'
        }
    }
    
    render() {
        return (
            <div className="container">
                <SearchBar queryDatabaseHandler={this.queryDatabaseHandler.bind(this)}/>
                <CardWrapper searchResults={this.state.breweries} isLoaded={this.state.isLoaded} />
            </div>          
        ); 
    }
}

export default App;