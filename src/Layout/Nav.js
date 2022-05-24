import "../Styled/Nav.css";
import logo2 from "../Styled/Images/logo2.JPG"
function Nav() {
  return (
    <div className="navMain">
      <img className="renoLogo" src={logo2} alt="logo" />
      <p className="renoName">RENO</p>
    </div>
  );
}

export default Nav;
