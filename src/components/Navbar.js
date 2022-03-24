import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className="">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                  <Link to='/' className="navbar-brand">Livraria</Link>
              </div>
          </nav>
      </div>
  )
}

export default Navbar;