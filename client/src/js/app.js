import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        this.state = {
            shitHead: 'ReactJS'
        }
    }

    componentDidMount() {
        axios.get('/api/zipcode/87114')
            .then(function (response) {
                this.setState({breweries: response.data});
            }.bind(this));
    }
    
    render() {
        let list = (
            this.state.breweries.map((brewery, i) => {
                <li key={brewery._id}>{brewery.name}</li>
            })
        );
        return (
            <ul>
                <li>{this.state.shitHead}</li>
                {this.state && this.state.breweries &&
                    <li>Loaded</li>
                }
            </ul>
        );
    }
}