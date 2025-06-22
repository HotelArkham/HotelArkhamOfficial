import { Container, Navbar, NavItem, NavLink, Nav, Offcanvas } from "react-bootstrap";
import { useMailingListModal } from "../Hooks/Modals/useMailingListModal";


function Sidebar() {

    const [mailingListModal, openMailingListModal] = useMailingListModal();

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
            <Container fluid>
                <Navbar.Brand>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="offcanvasNavbar" />

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    data-bs-theme="dark"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel" className="fs-2">
                            <span className="arkhamFont">Explore The Hotel</span>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto">
                            <NavItem>
                                <NavLink className="fs-4">
                                    <span className="arkhamFont"><i class="bi bi-music-note-list"></i> The Amphitheatre</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="fs-4">
                                    <span className="arkhamFont"><i class="bi bi-book"></i> The Library</span>
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={openMailingListModal}>
                                <NavLink className="fs-4">
                                    <span className="arkhamFont"><i class="bi bi-journal-text"></i> The Guest Book</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        {mailingListModal}
    </>
    );
}

export default Sidebar;