import "../../Components/Card/Card.css";


function Card({ title, number, details,plus,bg,tint}) {
  return (
    <div className="card-container">
        <div className="img-bg">

        <img src={tint} alt="" /> 
        </div>
      <div className="card-top">
        <div className="circle"><img src={bg} alt="" /></div>
        <div className="title">{title}</div>
      </div>
      <div className="card-bottom">
    
        <div style={{color:'#01539D', fontSize:'40px',fontWeight:'800'}}>{number}</div>
        <div className="plus">{plus}</div>
        <div>{details}</div>
      </div>
    </div>
  );
}

export default Card;
