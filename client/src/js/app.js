import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar.js';


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
            this.queryDatabaseByZipCode(searchTerm)
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

    queryDatabaseHandler(searchValue) {
        this.setState({ 
            searchTerm: searchValue
        });
    }

    
    
    render() {
        return (
            
            <div className="container">
                <SearchBar queryDatabaseHandler={this.queryDatabaseHandler.bind(this)}/> 
            </div>
            
            
        ); 
    }
}

export default App;