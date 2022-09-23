import { Link } from "react-router-dom";
import "./index.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2231px-Tata_logo.svg.png" />
        </div>
        <div className="nav-item">
          <Link to="/" className="link">
            Home
          </Link>
          <br />
          <Link to="/buses" className="link">
            Tata Bus
          </Link>
          <br />
          <Link to="/buses/add" className="link">
            Add New Bus
          </Link>
          <br />
        </div>
      </div>
    </>
  );
}

export default Header;
