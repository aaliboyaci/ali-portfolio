// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./navMenuStyle.css";

// function NavMenu() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <a className="navbar-brand" href="/">
//           Ali Boyacı
//           <span className="nav-title-header">designer / developer</span>
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//               <a
//                 className="nav-link"
//                 href="/"
//                 data-toggle="collapse"
//                 data-target=".navbar-collapse.show"
//               >
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="/portfolios"
//                 className="nav-link"
//                 data-toggle="collapse"
//                 data-target=".navbar-collapse.show"
//               >
//                 Portfolios
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="/services"
//                 className="nav-link"
//                 data-toggle="collapse"
//                 data-target=".navbar-collapse.show"
//               >
//                 Services
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="/contact"
//                 className="nav-link"
//                 data-toggle="collapse"
//                 data-target=".navbar-collapse.show"
//               >
//                 Contact Me
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavMenu;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navMenuStyle.css";

function NavMenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  console.log("DENEME TEST");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          Ali Boyacı
          <span className="nav-title-header">designer / developer</span>
        </Link>

        <button
          className={`navbar-toggler ${navbarOpen ? "" : "collapsed"}`}
          type="button"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolios" className="nav-link" onClick={closeNavbar}>
                Portfolios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={closeNavbar}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeNavbar}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
