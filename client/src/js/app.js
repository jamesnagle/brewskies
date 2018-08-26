import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shitHead: 'ReactJS',
            isLoaded: false,
            breweries: []
        }
    }

    componentDidMount() {
        axios.get('/api/zipcode/87114')
            .then(function (response) {
                this.setState({
                    isLoaded: true,
                    breweries: response.data
                });
            }.bind(this));
    }
    
    render() {
        let { isLoaded, breweries, shitHead } = this.state;
        if (!isLoaded) {
            return (
                <p>Not Loaded</p>
            );
        } else {
            return (
                <ul>
                    <li>{shitHead}</li>
                    {breweries.map((brewery, i) => (
                        <li key={brewery._id}>{brewery.name}</li>
                    ))}
                </ul>
            );
        }
    }
}

export default App;