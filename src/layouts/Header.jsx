function Header() {
  return (
    <nav className="light-blue darken-4">
      <div className="container">
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export { Header }
