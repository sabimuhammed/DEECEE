import LOGO from "../../assets/LOGO.png";
import HOME from "../../assets/HOME.png";
import "../Menubar/Menubar.css";
function MenuBar() {
  return (
    <div className="menu-container">
      <div className="Logo-c">
        <img src={LOGO} alt="" />
      </div>

      <div className="left-menu">
        <div className="home">
          <img src={HOME} alt="" />
        </div>

        <div className="menu-list">
          <span>Courses offered</span>
          <span>join our live classes</span>
          <span>Free vedios</span>
          <span>Study meterial</span>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
