import React from 'react'
import './SearchBar.css'

const sortByOptions = {
  "Best Match": 'best_match',
  "Highest Rated": 'rating',
  "Most Reviewed": 'review_count'
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption]
      return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
    })
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption })
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    })
  }

  handleSearch(event) {
    const { term, location, sortBy } = this.state
    this.props.searchYelp(term, location, sortBy)
    event.preventDefault()
  }

  getSortByClass(sortByOption) {
    return (this.state.sortBy === sortByOption) ? 'active' : ''
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <div className="button" onClick={this.handleSearch}>Let's Go</div>
        </div>
      </div>
    )
  }
}

export default SearchBar
