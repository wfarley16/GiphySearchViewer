import React from 'react';
import './App.css';

import axios from 'axios';
import { Button, Header, Input } from "semantic-ui-react";

import Cards from "./components/cards";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      query: null,
      results: [],
    };

    this.handleTextFieldUpdate = this.handleTextFieldUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTextFieldUpdate(ev, { value }) {
    this.setState({ query: value });
  }

  async handleSearch() {
    const { query } = this.state;
    const trimmed = query.trim().replace(/ /g, "+");
    const res = await this.getResults(trimmed);
    this.setState({ results: res });
  }

  async getResults(query) {
    const apiKey = '2YsvwmVwl6ueZeAFCd8Y0NRwVZRnUDCG';
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`);
    return res.data.data;
  }

  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <div className="nav">
          <Header className="nav-header" content="Giphy Search and View" />
        </div>
        <div className="page">
          <Input className="main-input" placeholder="Type Here" onChange={this.handleTextFieldUpdate} />
          <Button content="Search" onClick={this.handleSearch} />
          <Cards results={results} />
        </div>
      </div>
    );
  }
}

export default App;
