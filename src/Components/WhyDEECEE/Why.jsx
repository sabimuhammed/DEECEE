
import "../../Components/WhyDEECEE/Why.css";
import G1 from "../../assets/g1.png";
import Mask from "../../assets/Mask.png";
function Why() {
  return (
    <div className="why-container">
        <div className="g">
        <img className="g1"src={G1} alt="" />
        <img className="mas"src={Mask} alt="" />
        <div className="text-w-c">

            <div className="title-w">Why DEECEE</div>
            <div className="why-t1">Since its inception in 2021, DeeCee has been dedicated to guiding students towards excellence in their commerce subjects. From humble beginnings in a small room, this initiative by Rajat Sir has flourished into a dynamic educational force, now reaching over 2 million learners through our innovative app and engaging YouTube channels.</div>
            <div className="why-t2">Our commitment to delivering concise and impactful content has propelled countless students to achieve remarkable success in their Class 12 Examinations, securing placements in prestigious universities across the nation. Our streamlined content delivery methodology has paved the way for their achievements.</div>
            <div><button className="btn">Read More</button></div>

        </div>
        </div>
      <div className="mask">
      </div>
    </div>
  );
}

export default Why;
