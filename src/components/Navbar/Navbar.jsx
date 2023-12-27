import './Navbar.css'
import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body navbar-expand-md bg-body-tertiary py-1"
      data-bs-theme="dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav nav-fill w-75">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/homepage"
              >
                Homepage
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/product-list">
                    Product List
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/add-products">
                    Add Products
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
