import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
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
        return (
            <ul>
                <li>{this.state.shitHead}</li>
                {this.state && this.state.breweries &&
                    this.state.breweries.forEach(function(brewery, i) {
                        console.log(brewery.name);
                        <li>{brewery.name}</li>
                    })
                }
            </ul>
        );
    }
}