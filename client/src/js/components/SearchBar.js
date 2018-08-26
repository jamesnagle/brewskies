import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    zipCodeEVentHandler(event) {
        if (event.key === "Enter") {
            this.props.queryDatabaseHandler(event.target.value)
        }
    };
  
    render() {
        
        return (
           <div  className="row">
            <input onKeyPress={(event) => this.zipCodeEVentHandler(event)} type="text" placeholder="Enter zip code..."></input>
           </div>
            
        );
    }
    
}

export default SearchBar;