import React from "react";
import { Navbar, Nav, Tooltip, OverlayTrigger } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function NavBar() {
  // const navigate = useNavigate();

   //Star Tooltip
   const starTooltip = (
    <Tooltip id="starTooltip" className="custom-tooltip">
      Click me to see your saved list of rocket launches to <strong>take your imagination to the stars</strong>!
    </Tooltip>
  );

  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ width: "100%", zIndex: "1000" }}
      className="navbarr"
    >
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="d-flex justify-content-between w-100 me-auto"
          style={{ marginLeft: "30px" }}
        >
          <div className="d-flex flex-row">
            <Nav.Link href="/home" style={{ marginRight: "30px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/explore" style={{ marginRight: "30px" }}>
              Explore
            </Nav.Link>
            <Nav.Link href="/contact" style={{ marginRight: "30px" }}>
              Contact
            </Nav.Link>
          </div>
          {/* Star with saved rocket launches */}
          <OverlayTrigger 
            className="custom-tooltip"
            placement="left"
            overlay={starTooltip}
          >
          <a href="/favorites" onClick={() => navigate("/favorites")}>
            <i
              className="bi bi-star star starBtn"
              // style={{
              //   marginRight: "30px",
              //   color: "white",
              //   fontSize: "24px",
              // }}
            ></i>
          </a>
          </OverlayTrigger>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
