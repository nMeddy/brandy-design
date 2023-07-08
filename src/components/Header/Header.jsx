import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.css";

export default function Header() {
  return (
    <>
      <nav className="navBar">
        <div className="nav-brand">
          <h1 className="brand">Brandy design</h1>
        </div>
        <div className="lineMiddle">
          <div className="underLine"></div>
        </div>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Team</Link>
          <Outlet />
        </div>
        <div className="logo-link">
          <span>
          <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#000000",}} />
          </span>
        </div>
      </nav>
    </>
  );
}
