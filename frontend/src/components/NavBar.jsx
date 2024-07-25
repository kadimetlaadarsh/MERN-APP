import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">MERN</a>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" >Create POST</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/all">All POST</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

