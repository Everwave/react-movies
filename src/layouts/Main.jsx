import React from 'react'
import { MoviesList } from '../components/MoviesList'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=future`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }
  searchMovies = (str, type) => {
    this.setState({ loading: true })
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch(err => console.error(err))
  }

  render() {
    const { movies, loading } = this.state
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <MoviesList movies={movies} />}
      </main>
    )
  }
}
export { Main }