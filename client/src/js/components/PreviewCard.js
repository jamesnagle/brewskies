import React from 'react';

const PreviewCard = (props) => {
    return (
        <div className="col s12 m12">
    
            <div className="card horizontal">
                <div className="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6"></img>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{props.brewery.name}</p>
                        <p>{props.brewery.address}</p>
                        <p>{props.brewery.city}, {props.brewery.province} {props.brewery.postalCode}</p>
                    </div>
                    <div className="card-action">
                        <a href={props.brewery.websites}>Website</a>
                    </div>
                </div>      
            </div>
        </div>
    );
}

export default PreviewCard;