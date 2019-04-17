import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

import api from './api/api';

import './App.css';

export default class App extends React.Component {
  state = {
    array: '',
    ordered: []
  };

  handleChange = event => {
    var splited = event.target.value;
    var array = splited.split(',');

    this.setState({ array: array });
  };

  handleSubmitTwo = async event => {
    event.preventDefault();
    const array = this.state.array;
    const response = await api.sort(array);
    this.setState({ ordered: response.data });
  };

  render() {
    var { ordered } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <Paper>
            <form onSubmit={this.handleSubmitTwo}>
              <label>
                Array:
                <input
                  id="array "
                  type="text"
                  name="array"
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <div>
              {ordered.map(function(item) {
                return (
                  <Fab key={item} color="primary" aria-label="Add">
                    {item}
                  </Fab>
                );
              })}
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
