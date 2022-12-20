import React from 'react'
// import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
<div className="container-fluid">
<b><a className="navbar-brand" href="/">{props.title} </a></b>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">About Us</a>
  </li>
<li>
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} my-2 mx-2`}>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
</div>
</li>

{/*   
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/">Action</a></li>
      <li><a className="dropdown-item" href="/">Another action</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="/">Something else here</a></li>
    </ul>
  </li> */}
  <li className="nav-item">

  </li>
</ul>


<form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-success" type="submit">Search</button>
</form>
</div>
</div>
</nav> 
  )
}
Navbar.defaultProps = {
    title: 'set title here',
}