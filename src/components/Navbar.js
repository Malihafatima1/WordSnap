import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/">{props.aboutText}</a>
        <a className="nav-link" href="/">Contact</a>
      </div>
    </div>
  </div>
  
</nav>
 
  )
}
Navbar.propTypes ={
    title: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps={
    title:"Set title here",
    aboutText:"About text here"

}