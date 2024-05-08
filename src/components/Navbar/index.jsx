import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <>
            <style type="text/css">
                {`
                    .bg-bluish {
                        background-color: #F1F3FF;
                    }
                `}
            </style>

            <Navbar expand="lg" className="bg-bluish" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="images/logo.png"
                            width="90"
                            className="d-inline-block align-top"
                            alt="Binar Car Rental logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" className="ms-3">
                                Home
                            </Nav.Link>

                            {/* For Any Authenticated Users */}
                            <Nav.Link as={Link} to="/profile" className="ms-3">
                                Profile
                            </Nav.Link>

                            {/* For Admin Users */}
                            <Nav.Link
                                as={Link}
                                to="/manageCar"
                                className="ms-3"
                            >
                                Manage Cars
                            </Nav.Link>

                            {/* For Super Admin */}
                            <Nav.Link
                                as={Link}
                                to="/manageUser"
                                className="ms-3"
                            >
                                Manage User
                            </Nav.Link>

                            {/* For Guest Users */}
                            <Nav.Link as={Link} to="/login" className="ms-3">
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to="/register" className="ms-3">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
