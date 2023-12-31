import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>

            <nav>
            
                <Link to="/">Home</Link>
                <NavLink to="about">About Us</NavLink>
                {/* <Link to="about">About us</Link> */}
                <Link to="users">Users</Link>
                <Link to="contact">Contact</Link>
            
            </nav>
        </div>
    );
};

export default Navbar;