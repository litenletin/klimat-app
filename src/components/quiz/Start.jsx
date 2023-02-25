import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { QuizContext } from "./Context";
import "./Quiz.css"
import logo from "../../images/Maskot-ljusare.png";
import bubble1 from "../../images/quizbubbla-1.png";


export function Start() {

  //Kopplas ihop med quizView med knapptryck ska quiz-komponenten visas
  const { gameState, setGameState } = useContext(QuizContext);

  //Kopplat till onClick-event som navigerar till temperaturvyn
  const navigate = useNavigate();
  const navigateTemp = () => {
    navigate("/temperatur");
  };


  return (
    <div className="quizContainer">
      <div className="speechBubbleContainer">
        <img
          src={bubble1}
          alt="Pratbubbla"
          style={{
            width: "100%",
            height: '380px',
          }}
        />
        <div className="speechBubbleContent">
          <h1
            className="font-link-h1"
            style={{ textAlign: 'center', }}
          >
            VÄLKOMMEN TILL MITT QUIZ!
          </h1>
          <div className="font-link-p-ingress">
            Hur mycket kan du om klimatet?
          </div>
          <div className="quizInfo">
            <p className="font-link-p">
              När du lärt dig om&nbsp;
              <a href="#">glaciärer</a>,&nbsp;
              <a href="#">havsnivåer</a>,&nbsp;
              <a href="#">fossila bränslen</a>&nbsp;
              och&nbsp;
              <a
                href="#"
                onClick={navigateTemp}
              >
                temperatur
              </a>
              &nbsp;kan du utmana dig själv och andra med mitt quiz!
            </p>
          </div>
        </div>
      </div>
      <div className="quizLogoContainer">
        <img
          className="quizLogo"
          src={logo}
          alt="Jordglob med ansikte, webbapplikationens maskot"
        />
      </div>
      <div className="quizBtn">
        <button className="quizButton" onClick={() => { setGameState("quiz") }}>
          Starta Quiz
        </button>
      </div>
    </div>
  );
}