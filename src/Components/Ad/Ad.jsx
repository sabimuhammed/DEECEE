import Group from "../../assets/Group24.png";
import "../Ad/Ad.css";
import Card from "../Card/Card";
import vector6 from '../../assets/Vector6.png'
import vector7 from '../../assets/Vector7.png';
import vector8 from '../../assets/Vector8.png';
import vector9 from '../../assets/Vector9.png';
import Rect9 from "../../assets/Rect9.png";
import Rectangle7 from "../../assets/Rectangle 10.png";
import Rectangle11 from "../../assets/Rectangle 11.png";
import Rectangle12 from "../../assets/Rectangle 12.png";







function Ad() {
  return (
    <div className="container-ad">
      <div className="ad-c">
        <div className="grou-cc">
          <img src={Group} alt="" />
        </div>
        <span className="text">
          Students love us. Choose excellence. Choose success. Choose DeeCee.
        </span>
      </div>
      <div className="cards">
        <div>
          <Card title="View" number="500" details="Veiews" plus="+" bg={vector9} tint={Rect9}/>
        </div>
        <div>
          <Card
            title="Happy learners"
            plus="+"
            number="2M"
            details="and Counting"
            className=""
            bg={vector8}
            tint={Rectangle7}
          />
        </div>
        <div>
          <Card
            title="Totel Classes Watch Time"
            plus="+"
            number="1.8M"
            details="Minutess"
            style={{background:'#7DF1B8'}}
            bg={vector7}
            tint={Rectangle11}
          />
        </div>
        <div>
          <Card title="Questions solved" number="1Lac" details=""
          bg={vector6} 
          tint={Rectangle12}
          />

        </div>
      </div>
    </div>
  );
}

export default Ad;
