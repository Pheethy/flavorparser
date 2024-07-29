import "./navbar.css";
import { Outlet, Link } from "react-router-dom";

const NavbarHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-black">
        <div>
          <Link to="/" className="mainTextHeader">
            FlavorParser
          </Link>
          <Link to="/product" className="textHeader">
            Product
          </Link>
          <Link to="/create" className="textHeader">
            Create
          </Link>
          <Link to="#" className="textHeader">
            Coffee Beans
          </Link>
          <Link to="#" className="textHeader">
            About Us
          </Link>
        </div>
        <div>
          <Link to="/signin" className="textHeader">
            Log-in
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default NavbarHeader;
