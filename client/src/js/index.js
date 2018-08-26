import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './app';

let breweries = [];

ReactDOM.render(
    <App breweries={breweries} />,
    document.getElementById('root')
);