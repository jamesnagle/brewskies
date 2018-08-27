import React from 'react';
import PreviewCard from './PreviewCard';


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
                    <div>
                        {searchResults.map((brewery) => (
                            <PreviewCard key={brewery._id} brewery={brewery} />
                        ))}
                    </div>
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