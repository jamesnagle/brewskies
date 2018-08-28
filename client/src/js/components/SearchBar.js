import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchWord : ''
        }
        
    }

    zipCodeEventHandler(event) {
        if (event.key === "Enter") {
            this.props.queryDatabaseHandler(event.target.value)
        } 
        

    };

    updateSearchTerm(event) {
        this.setState({
            searchWord: event.target.value
        });
    }

    searchButtonHandler(term) {
        this.props.queryDatabaseHandler(term);
    }

    render() {
        
        return (
            <div  className="row">
                <div className="col s12 m10">
                    <input key="inputField" onChange={(event)=> this.updateSearchTerm(event)} onKeyPress={(event) => this.zipCodeEventHandler(event)} type="text" placeholder="Enter Zip code or State Name..."></input>
                </div>
                <div className="col s12 m2">
                    <a href="#!" onClick={() => this.searchButtonHandler(this.state.searchWord)} className="btn waves-effect waves-light">Search</a>
                </div>
            </div>
            
        );
    }
    
}

export default SearchBar;