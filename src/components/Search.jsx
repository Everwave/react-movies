import { useState } from 'react'

const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')

  const handleKey = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      searchMovies(search, type)
    }
  }
  const handleFilter = e => {
    setType(e.target.dataset.type)
    searchMovies(search, e.target.dataset.type)
  }

  return (
    <form className="col s12 ">
      <div className="input-field">
        <input
          placeholder="Search"
          type="text"
          className="validate"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="waves-effect waves-light btn search-btn light-blue darken-4"
          onClick={e => {
            e.preventDefault()
            searchMovies(search, type)
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
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series</span>
        </label>
      </div>
    </form>
  )
}

export { Search }
