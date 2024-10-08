import React, { PureComponent } from 'react'
export default class NavBar extends PureComponent {
  
    
  render() {
    const isLoggedIn = localStorage.getItem('authToken');
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Library</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {(!isLoggedIn) && (
                  <>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/register">Register</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/login">Login</a>
                    </li>
                  </>
        )}
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/update-profile">updateuser</a>
        </li>
        {(!isLoggedIn) && (
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/logout">Logout</a>
                  </li>
            )}

                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/borrowed-books">borrowed-books</a>
                  </li>
        </ul>
     </div>
  </div>
</nav>
      </div>
    )
  }
}
