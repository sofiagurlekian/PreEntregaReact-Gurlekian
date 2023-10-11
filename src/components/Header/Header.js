import "./Header.css";
import img from "./INBA LOGO.jpg";

import {Link} from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <Link to="/">
      <img src= {img} alt = "logo-INBA"/>
      </Link>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
