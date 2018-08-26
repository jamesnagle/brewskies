import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breweries: []
        }
    }
    componentDidMount() {

        axios.get('/api/zipcode/87114')
        .then((response) => {
            this.setState({breweries: response.data});
        });
    }
    render() {
        console.log(this.state);
        return (
            <ul>
                {this.state.breweries.forEach((brewery) => {
                    <li key={brewery.id}>{brewery.name}</li>
                })}
            </ul>
        );
    }
}