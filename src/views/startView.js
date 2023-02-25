import React from "react";
import "./startView.css"
import { StartViewCard } from "../components/StartViewCard";
import cardIcon1 from "../images/Glaciär.png";
import cardIcon2 from "../images/Havsnivåer.png";
import cardIcon3 from "../images/Fabrik.png";
import cardIcon4 from "../images/Temperatur.png";
import maskot from "../images/Maskot-ljusare.png";
import litenpilh from '../images/liten-pil-h.png';
import paths from "../routes/paths";
import { QuizButton } from "../components/quizButton";

/* UPPDATERAD:
- Bytt plats på Temperatur och Fossila Bränseln, blir samma ordning som Navbar
*/

export const StartView = () => {

  return (
    <div className="startViewContainer">
      <div className="frame">
        <header>
          <h1 className="font-link-h1" style={{ textAlign: 'center' }}>
            LÄR DIG OM KLIMATFÖRÄNDRINGAR
          </h1>
          <p
            className="font-link-p-ingress"
            style={{ textAlign: 'center' }}
          >
            Utforska klimatförändringarnas orsaker och påverkan genom att klicka
            dig vidare bland följande ämnen!
          </p>
        </header>
        {/* lagt till text="" */}
        <div className="CardParent">
          <StartViewCard
            image={cardIcon1}
            alt="Glaciär"
            category="Glaciär"
            color="#8BD69E"
            text="För att lära dig om varför glaciärerna smälter"
          />
          <StartViewCard
            image={cardIcon2}
            alt="Havsnivåer"
            category="Havsnivåer"
            color="#67A2B3"
            text="För att lära dig om varför havnivåerna stiger"
          />
          {/** UPPDATERAD: Bytt plats på Temperatur och Fossila Bränslen, samma ordning som Navbar */}
          <StartViewCard
            image={cardIcon4}
            alt="Temperatur"
            category="Temperatur"
            color="#F76245"
            text="För att lära dig om varför jordens temperatur förändras"
            path={paths.temperaturViewPath}
          />
          <StartViewCard
            image={cardIcon3}
            alt="Fossila Bränslen"
            category="Fossila Bränslen"
            color="#FFB126"
            text="För att lära dig om hur fossila bränslen påverkar jorden"
          />
        </div>
        {/*lagt till quizknapp, maskot och pratbubbla*/}
        <div className="startBottomContainer">
          <div className="startBottomBtn">
            <div className="quizButton">
              <QuizButton path={paths.quizViewPath} />
            </div>
          </div>
          <div className="quizBubbleContainer">
            <img
              style={{
                width: "18%",
                margin: "0 20px 0 0"
              }}
              src={maskot}
              alt="Jordglob med ansikte, webbapplikationens maskot"
            />
            <img
              style={{ width: "45%" }}
              src={litenpilh}
              alt="liten pratbubbla som innehåller text om quizet"
            />
          </div>
        </div>
      </div>
    </div>
  );
};



