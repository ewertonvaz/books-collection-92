import {Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavBar() {
    return ( <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link to="/" style={{textDecoration:'none'}}>
          <Navbar.Brand as="div" >
            <h2>Books Collection 92</h2> 
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <Navbar fixed='bottom'/>
    </div> );
}

export default NavBar;