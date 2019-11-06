import React from 'react';
import './App.css';
import request from 'superagent';

class App extends React.Component {
    componentDidMount() {
        request
            .get('https://api.github.com/users/mahanteshshiva')
            .then(res => res.json())
    }


render() {
    return (
        <h1>kdhflj</h1>
    );
}

}

export default App;
