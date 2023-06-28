import { Link, Outlet } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <>
      <nav className="navBar">
        <div className="nav-brand">
          <h1 className="brand">Brandy design</h1>
        </div>

        <div className="nav-link">
            <Link to='/'>Acceuil</Link>
            <Link to='/'>Service</Link>
            <Link to='/'>À propos</Link>
            <Outlet/>
        </div>
      </nav>
    </>
  );
}
