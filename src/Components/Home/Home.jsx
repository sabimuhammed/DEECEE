import STU from "../../assets/student.png";
import Stripe from "../../assets/stripe.png";
import recone from "../../assets/rec1.png";
import rectwo from "../../assets/rec2.png";
import Tick from "../../assets/Tick.png";
// import Line from "../../assets/line 8.png";

import "../Home/Home.css";

function Home() {
  return (
    <div className="Home-c">
      <div className="background">
        <div className="texts">
          <span id="yellow">Premiume Course</span>
          <span id="yellow">THE EARLY BIRDS BATCH</span>
          <span>CLASS 12 -SESSION 2023-24</span>
          <span>ACCOUNTANCY</span>

          <div className="ticks">
            <span>
              <img src={Tick} alt="" />
              Complete Syllabus
            </span>

            <span>
              <img src={Tick} alt="" />
              Revision
            </span>
            <span>
              <img src={Tick} alt="" />
              Doubt Support
            </span>
            <span>
              <img src={Tick} alt="" />
              Test Series
            </span>
            <span>
              <img src={Tick} alt="" />
              PDF notes
            </span>
            {/* <div className="line">
              <img src={Line} alt="" />
              <img src={Line} alt="" className="line-opacity"/>
                <img src={Line} alt="" className="line-opacity"/>
                <img src={Line} alt="" className="line-opacity"/>

            </div> */}
    
          </div>
        </div>
      </div>

      <div className="stripe">
        <img src={Stripe} alt="" />
      </div>

      <div className="tri-1">
        <img src={recone} alt="" />
      </div>

      <div className="student">
        <img src={STU} alt="" />
      </div>

      <div className="tri-2">
        <img src={rectwo} alt="" />
      </div>
    </div>
  );
}

export default Home;
