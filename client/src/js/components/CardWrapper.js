import React from 'react';
import PreviewCard from './PreviewCard';
import PreviewCardPlaceholder from './PreviewCardPlaceholder';
import BreweryCounter from './BreweryCounter';


class CardWrapper extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            searchResults: '',
            isLoaded: false,
            isDirty: false,
            searchNotRecognized: false,
            searchHasNoResults: false,
            favorArray: [],
            isAddedToFavorites: false,
            disabledClass: '',
            styles: ''
        }


    }
    

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchResults !== this.props.searchResults) {
            this.setState({
                searchResults: nextProps.searchResults,
                isLoaded: true
            });
        }
        if (nextProps.searchNotRecognized !== this.props.searchNotRecognized) {
            this.setState({
                searchNotRecognized: nextProps.searchNotRecognized
            });
        }  
        if (nextProps.searchHasNoResults !== this.props.searchHasNoResults) {
            this.setState({
                searchHasNoResults: nextProps.searchHasNoResults
            });
        }  
        if (nextProps.isDirty !== this.props.isDirty) {
            this.setState({
                isDirty: nextProps.isDirty
            });
        }        
    }

    addToFavorites(index) {
        const favArr = this.state.favorArray;
        favArr.push(this.state.searchResults[index]);
        this.setState({
            favorArray: favArr,
        })
        console.log(this.state.favorArray);
    }

    deletePreviewCardHandler(index) {
        const updatedBrew = this.state.searchResults;
        updatedBrew.splice(index, 1);
        this.setState({
            searchResults: updatedBrew
        });
    }

    render() {
        let { searchResults, isLoaded, isDirty, searchNotRecognized, searchHasNoResults } = this.state;
      

        if (searchNotRecognized) {
            return (
                <div className="row">
                    <p>Hmmmm... not sure what you're searching for.</p>
                    <p>Try a zipcode, state abbreviation, or a full state name.</p>
                </div>
            );
        }
        if (isDirty) {
            return (
                <div className="row">
                    <PreviewCardPlaceholder />
                    <PreviewCardPlaceholder />
                </div>
            )
        }

        if (isLoaded) {
            if (searchHasNoResults) {
                return (
                    <div className="row">
                        <p>Shit yo.... We don't seem to have any breweries listed in your area.</p>
                        <p>Try another search?</p>
                    </div>
                );                
            }
            return (
                <div className="row">
                    <div>
                        <BreweryCounter brewCounter={this.state.searchResults.length} />
                        {searchResults.map((brewery, index) => (
                            <PreviewCard fav={()=> this.addToFavorites(index)} clicked={() => this.deletePreviewCardHandler(index)} key={brewery._id} brewery={brewery} />
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