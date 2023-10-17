import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <header className='bg-transparent'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
        <a className="navbar-brand text-white fw-semibold" href="#test">NEXT INVEST</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#test" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Investment Opportunities
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#test">Action</a></li>
              <li><a className="dropdown-item" href="#test">Another action</a></li>
              <li><a className="dropdown-item" href="#test">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#test" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            How it Works
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#test">Action</a></li>
              <li><a className="dropdown-item" href="#test">Another action</a></li>
              <li><a className="dropdown-item" href="#test">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#test">About Us</a>
          </li>
          <li className="nav-item">
          <button type="button" className="btn btn-primary rounded-0">LOGIN</button>
          </li>
          <li className="nav-item">
          <button type="button" className="btn btn-outline-primary rounded-0">REGISTER</button>
          </li>
        </ul>
      </div>
      </div>
      </nav>
    </header>
  )}

export default Navigation
// rafc