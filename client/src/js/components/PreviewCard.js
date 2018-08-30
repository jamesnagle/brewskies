import React from 'react';

const PreviewCard = (props) => {

    const classList = "btn waves-effect waves-light";

    return (
        <div  className="col s12 m12">
    
            <div className="card horizontal">
                
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{props.brewery.name}</p>
                        <p>{props.brewery.address}</p>
                        <p>{props.brewery.city}, {props.brewery.province} {props.brewery.postalCode}</p>
                    </div>
                    {props.brewery.websites ? (
                        <div className="card-action">         
                            <a className={classList} href="#!" onClick={props.clicked}>Remove</a>
                            <a className={classList} href="#!" onClick={props.fav}>Add To Favorites</a>
                            <a className={classList} href={props.brewery.websites}>Website</a>
                        </div>
                    ) : (
                        <div className="card-action">
                            <a className={classList} href="#!" onClick={props.clicked}>Remove</a>
                            <a className={classList} href="#!" onClick={props.fav}>Add to Favorites</a>

                        </div>
                    )}
                    
                </div>      
            </div>
        </div>
    );
}

export default PreviewCard;