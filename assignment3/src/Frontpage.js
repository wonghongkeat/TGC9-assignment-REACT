import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './frontPage.css'

const base = "https://8080-c693cb85-d658-493b-9a4c-ec22f40a36b6.ws-us03.gitpod.io/"

export default function Frontpage(){
    return (
        <React.Fragment>
  <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#">Suck It</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto" >
      <li className="nav-item active">
        <a className="nav-link" href="https://8080-c693cb85-d658-493b-9a4c-ec22f40a36b6.ws-us03.gitpod.io/flavours">flavour <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://8080-c693cb85-d658-493b-9a4c-ec22f40a36b6.ws-us03.gitpod.io/customers/show">user</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">user</a>
      </li>
    </ul>
  </div>
</nav>
        </React.Fragment>
    )
}