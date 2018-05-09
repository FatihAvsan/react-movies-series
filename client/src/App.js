import React, { Component } from 'react';

class App extends Component {
    state = {
        response: []
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.movies_series.entries }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/movies-series');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        let items = this.state.response;
        return (
            <div className="App">
                {items.map(item => item.title)}
            </div>
        );
    }
}

export default App;