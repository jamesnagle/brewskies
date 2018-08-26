import React from 'react';


class CardWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            isLoaded: false
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.searchResults !== this.props.searchResults) {
            this.setState({
                searchResults: nextProps.searchResults,
                isLoaded: true
            });
        }
    }

    render() {
        let { searchResults, isLoaded } = this.state;

        if (isLoaded) {
            return (
                <div className="row">
                    <ul>
                        {searchResults.map((brewery) => (
                            <li key={brewery._id}>{brewery.name}</li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="row">
                    <p>Use the search bar above to query our brewery database!</p>
                </div>
            );
        }
    }

}

export default CardWrapper;