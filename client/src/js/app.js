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
        return (
            <ul>
                {this.state.breweries.map((brewery) => {
                    console.log(brewery.name);
                    <li key={brewery._id}>{brewery.name}</li>
                })}
            </ul>
        );
    }
}