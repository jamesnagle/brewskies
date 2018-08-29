import React from 'react';

const PreviewCardPlaceholder = (props) => {
    return (
        <div className="col s12 m12">

            <div className="card horizontal">

                <div className="card-stacked">
                    <div className="card-content">
                        <p className="animated-background placeholder--medium">&nbsp;</p>
                        <p className="animated-background placeholder--short">&nbsp;</p>
                        <p className="animated-background placeholder--long">&nbsp;</p>
                    </div>
                    <div className="card-action">
                        <a className="btn animated-background placeholder--btn">&nbsp;</a>
                        <a className="btn animated-background placeholder--btn">&nbsp;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviewCardPlaceholder;