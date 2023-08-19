import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";

const Header = ({
  isActive,
  activeRoute,
  hamburgerMenu,
  navbarIsActive,
  toggleBtn,
}) => {
  return (
    <>
      <header>
        <div className="menu-icon" onClick={hamburgerMenu}>
          {toggleBtn ? (
            <FaTimes className="close-btn" />
          ) : (
            <GiHamburgerMenu className="hamburger" />
          )}
        </div>

        <Navbar
          isActive={isActive}
          routeActive={activeRoute}
          navbarIsActive={navbarIsActive}
        />
      </header>
    </>
  );
};

export default Header;
