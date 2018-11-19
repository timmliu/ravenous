import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this)
  }

  searchYelp(term, location, searchBy) {
    if (!term || !term.length) return alert("Please enter search term")
    if (!location || !location.length) return alert("Please enter location")
    Yelp.search(term, location, searchBy)
    .then(businesses => {
      this.setState({
        businesses: businesses || this.state.businesses
      })
    })
  }

  render() {
    return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={this.state.businesses} />
    </div>
    )
  }
}

export default App;
