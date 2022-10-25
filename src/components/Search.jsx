import React from 'react'

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }
  handleFilter = e => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type)
      }
    )
  }

  render() {
    return (
      <form className="col s12 ">
        <div className="input-field">
          <input
            placeholder="Search"
            type="text"
            className="validate"
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="waves-effect waves-light btn search-btn light-blue darken-4"
            onClick={e => {
              e.preventDefault()
              this.props.searchMovies(this.state.search, this.state.type)
            }}>
            Search
          </button>
        </div>
        <div className="filter">
          <label>
            <input
              className="with-gap light-blue darken-3"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </form>
    )
  }
}

export { Search }
