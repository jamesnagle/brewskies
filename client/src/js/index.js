import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './app';

let breweries = [];

axios.get('/api/zipcode/87114')
    .then(function (response) {
        breweries = response.data
    });

ReactDOM.render(
    <App breweries={breweries} />,
    document.getElementById('root')
);