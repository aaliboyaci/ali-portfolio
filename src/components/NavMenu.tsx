import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./navMenuStyle.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function NavMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Ali Boyacı
          <span className="nav-title-header">designer / developer</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="/"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Portfolios
              </a>
            </li>
            <li className="nav-item">
              {/* <Link
                to="services-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
                className="nav-link"
              >
                Services
              </Link> */}
              boş
            </li>
            <li className="nav-item">
              <Link to="/#services-link">services</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
