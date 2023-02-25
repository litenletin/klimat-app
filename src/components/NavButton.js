import { useNavigate } from "react-router-dom";
import "./NavButton.css";

/* Navigationsmenyns kategoriknappar */
export function NavButton(props) {
  const navigate = useNavigate();

  const footerStyling = {
    background: `${props.footerColor}`,
    height: `${props.selected ? "30%" : "15%"}`,
  };

  const weight = props.selected ? "bold" : "normal";

  return (
    <div
      className="navButton"
      onClick={() => {
        navigate(props.path);
      }}
    >
      <div
        className="row1"
        style={{
          height: `${!props.footerColor ? "100%" : props.selected ? "70%" : "85%"
            }`,
        }}
      >
        {props.iconpath && (
          <img src={props.iconpath} style={{ height: "38px" }}></img>
        )}
        <h2 style={{ fontWeight: weight }}>{props.title}</h2>
      </div>
      {props.footerColor && (
        <div className="button-footer" style={footerStyling}></div>
      )}
    </div>
  );
}
