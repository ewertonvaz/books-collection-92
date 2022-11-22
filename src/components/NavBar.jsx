import { Link } from "react-router-dom"
import logo from '../assets/books.png'

function NavBar() {

    return (
        <nav className="navbar navbar-dark bg-dark text-white p-3 fixed-top">
            <Link to="/">
                <img width={40} src={logo} alt="icone home" />
            </Link>
            <h4>Projeto 2 | Books Collection</h4>
        </nav >

    );

}

export default NavBar;