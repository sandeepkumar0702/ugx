import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid mx-30">
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div>
            <div className="dropdown mx-50 mydiv">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Jonathan
                </button>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className=''>

            </div>
            <div className=''>

            </div>
            </div>
        </div>
    </nav>
  );
}
