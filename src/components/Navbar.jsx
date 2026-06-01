import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>

                <li>
                    <Link to="/ferrets">Ferrets</Link>
                </li>

                <li>
                    <Link to="/pairings">Pairings</Link>
                </li>

                <li>
                    <Link to="/litters">Litters</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;