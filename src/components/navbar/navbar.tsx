import "./navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const NavbarHeader = () => {
  return (
    <>
      <Navbar className="header">
        <Container fluid>
          <div>
            <Nav.Link as={Link} to={"/"} className="mainTextHeader">
              FlavorParser
            </Nav.Link>
            <Nav.Link as={Link} to={"/product"} className="textHeader">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to={"/create"} className="textHeader">
              Create
            </Nav.Link>
            <Nav.Link className="textHeader">Coffee Beans</Nav.Link>
            <Nav.Link className="textHeader">About Us</Nav.Link>
          </div>
          <div>
            <Nav.Link as={Link} to={"/login"} className="textHeader">
              Log-in
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default NavbarHeader;
