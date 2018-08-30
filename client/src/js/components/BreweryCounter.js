import React from 'react';

const BreweryCounter = (props) => {
    return (
        <div className="collection">
            <a href="#!" className="collection-item"><span className="new badge blue darken-1">{props.brewCounter}</span>Breweries Found</a>
        </div>
    )
}

export default BreweryCounter;