import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/img/logo.png";

const NavbarApp = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

    return (
        <Navbar bg='dark' variant='dark' className='nav'>
            <Container>
                <Navbar.Brand>
                    <NavLink className={setActiveClass} to='/'>
                        <img
                            src={logo}
                            width='50'
                            height='50'
                            className='d-inline-block align-center'
                            alt='PokemonApp'
                            title='Ir a Home'
                        />
                    </NavLink>
                        <span className="brand">PokemonApp</span>
                </Navbar.Brand>
                <Nav className='justify-content-end'>
                    <NavLink className={setActiveClass} to='/'>
                        Home
                    </NavLink>

                    {" - "}
                    {" - "}

                    <NavLink className={setActiveClass} to='/pokemones'>
                        Pokemones
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarApp;
