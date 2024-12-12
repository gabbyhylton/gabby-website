// Filename - "./components/Navbar.js
import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div>
            <Link to="/">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}