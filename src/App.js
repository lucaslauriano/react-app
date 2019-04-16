import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

export default class App extends React.Component {
  state = {
    array: '',
  }

  handleChange = event => {
    this.setState({ array: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const array = {
      array: this.state.array
    };
 
    console.log('1', array)
    axios.post(`http://localhost:3001/sort`, { array })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
              Array:
            <input id="array " type="text" name="array" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>

        </div>
      </div>
    );
  }
}
