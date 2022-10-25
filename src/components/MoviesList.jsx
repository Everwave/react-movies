import { MovieCard } from './MovieCard'

function MoviesList(props) {
  const { movies = [] } = props
  return (
    <div className="movies">
      {movies.length ? (
        movies.map(movie => <MovieCard key={movie.imdbID} {...movie} />)
      ) : (
        <h5>Ничего не найдено</h5>
      )}
    </div>
  )
}

export { MoviesList }
