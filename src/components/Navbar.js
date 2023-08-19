import { Link } from "react-router-dom";

const Navbar = ({ isActive, routeActive, navbarIsActive }) => {
  return (
    <>
      <nav
        className={`${navbarIsActive === true ? "navbar active" : "navbar"}`}
      >
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => routeActive(1)}
              className={`${isActive === 1 ? "active" : ""}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => routeActive(2)}
              className={`${isActive === 2 ? "active" : ""}`}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/work"
              onClick={() => routeActive(3)}
              className={`${isActive === 3 ? "active" : ""}`}
            >
              Work
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => routeActive(4)}
              className={`${isActive === 4 ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
