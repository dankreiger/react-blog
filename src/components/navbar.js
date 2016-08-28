import React, { Component } from 'react';
import { Link } from 'react-router';


class Navbar extends Component {
  render () {
    return(
      <div>
        <nav className="navbar navbar-light bg-faded">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header">
            ☰
          </button>
          <div className="collapse navbar-toggleable-xs" id="navbar-header">
            <Link to="/" className="navbar-brand">
              Blog
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
