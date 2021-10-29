import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
function Navbar() {
  const closeAccount = () =>{
    localStorage.removeItem('token')
  }
  return (
    <div className="mb-5 pb-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img src={logo}  alt='bazinga logo' height='64' ></img>
            <NavLink exact to='/home' className="navbar-brand fs-3">SuperHeroApi</NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end " id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <NavLink exact to='/home' className="nav-link fs-4" activeClassName="active" aria-current="page">Home</NavLink>
              <NavLink exact to='/login' className="nav-link fs-4" activeClassName="active" aria-current="page" onClick={closeAccount}>Logout</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
