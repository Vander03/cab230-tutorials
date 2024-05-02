import { Link } from "react-router-dom";

// navigation links
export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/Book">Book</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  );
}
