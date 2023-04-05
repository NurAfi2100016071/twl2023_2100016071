import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#bengkelappi">Bengkel Appi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/link">Link</Nav.Link>
            <NavDropdown title="Selengkapnya" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/action">Produk</NavDropdown.Item>
              <NavDropdown.Item href="/penawaran">
                Penawaran Spesial
              </NavDropdown.Item>
              <NavDropdown.Item href="/galeri">Galery Foto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/testimoni">
                Testimoni
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/alamat">Alamat</Nav.Link>
            <Nav.Link eventKey={2} href="/nohp">
              No HP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;