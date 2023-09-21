import "./Header.css";
import img from "./INBA LOGO.jpg";

const Header = (props) => {
  return (
    <div className="Header">
    <img src= {img} alt = "logo-INBA"/>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
