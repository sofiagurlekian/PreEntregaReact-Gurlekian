import {Link} from "react-router-dom";
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget.tsx';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link style={{color: "white"}} to="/"><li>Home</li></Link>
        <Link style={{color: "white"}} to="/about"><li>About</li></Link>
        <Link style={{color: "white"}} to="/contact"><li>Contact us</li></Link>
        <Link style={{color: "white"}}><li><CartWidget/></li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
