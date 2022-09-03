import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Badge
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "80" }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a product"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <span role="img">🛒</span>
                <Badge>{10}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is Empty</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export { Header };
