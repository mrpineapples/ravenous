import React, { Component } from 'react';
import './App.css';
import BusinessList from "./components/BusinessList/BusinessList"
import SearchBar from "./components/SearchBar/SearchBar"
import Yelp from "./util/Yelp"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      buttonText: "Let's go",
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    this.setState({ buttonText: "Waiting..." })
    Yelp.search(term ,location, sortBy).then(businesses => {
      this.setState({ businesses: businesses, buttonText: "Let's go" })
    })
  };

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar buttonState={this.state.buttonText} searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
