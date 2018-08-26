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
                {this.props.children.map((brewery, i) => {
                    <li key={brewery._id}>{brewery.name}</li>
                })}
            </ul>
        );
    }
}