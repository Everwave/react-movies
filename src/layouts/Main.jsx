import { useEffect, useState } from 'react'
import { MoviesList } from '../components/MoviesList'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=future`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const searchMovies = (str, type) => {
    setLoading(true)
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <MoviesList movies={movies} />}
    </main>
  )
}

export { Main }
