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
            this.setState({breweries: response});
        });
    }
    render() {
        console.log(this.state);
        return (
            <ul>
                <li>test</li>
            </ul>
        );
    }
}