import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg bg-border-bottom "
        style={{backgroundColor:"#fff"}}
      >
        <div className="container p-2">
          <link className="navbar-brand" to="/">
            <img
              src="/Frontend/vite-project/images/logo.svg"
              style={{ width: "25%" }}
              alt="Logo"/>
          </link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </link>
                </li>
                <li className="nav-item"> 
                  <link className="nav-link active" to="/about">
                    About
                  </link>
                </li>
                <li className="nav-item">
                  <link className="nav-link active" to="/product">
                    Product
                  </link>
                </li>
                <li className="nav-item">
                  <link className="nav-link active" to="/pricing">
                    Pricing
                  </link>
                </li>
                <li className="nav-item">
                  <link className="nav-link active" href="support">
                    Support
                  </link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
