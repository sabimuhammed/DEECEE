import Vector from "../../assets/Vector.png";
import "../TopBar/TopBar.css";

function TopBar() {
  return (
    <div className="container-t">


      <div className="left-bar">
        <img src={Vector} alt="phone" className="phone" />
        <span className="phone-number"> 011-40848482</span>


      </div>



      <div className="right-bar">


        <span>Blog</span>
        <span>Career</span>
        <span>FAQs</span>

        
      </div>
    </div>
  );
}

export default TopBar;
