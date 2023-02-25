import "./StartViewCard.css";
import { useNavigate } from "react-router-dom";

/* Kort för kategorierna på startsidan */
export function StartViewCard(props) {
  const navigate = useNavigate();

  return (

    <div
      className="card"
      style={{ backgroundColor: props.color, width: "340px", height: "390px", borderRadius: "30px", }}
      onClick={() => navigate(props.path)}
    >
      <div className="imgHolder">
        <img src={props.image} alt={props.alt}/>
      </div>
      <h3>{props.category}</h3>
      {/* lagt till, vid hover visas denna text */}
      <div class="cardTextContainer">
        <div
          className="clickHere"
          style={{ fontWeight: "600" }}>KLICKA</div>
        <p class="cardText"><span class="font-link-p">{props.text}</span></p>
      </div>
    </div>


  );
}

