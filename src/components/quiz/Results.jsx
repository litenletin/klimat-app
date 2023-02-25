import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { QuizContext } from "./Context";
import { Questions } from "./Questions";
import logo from "../../images/Maskot-ljusare.png";
import bubble1 from "../../images/quizbubbla-1.png";

/* Star icon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

/* Quiz-komponenten för visa resultat */
export function Results() {

    //För över poängen från tidigare komponent för att visas på den här komponenten, setGameState kopplad till knappen för att göra om quizet
    const { score, setScore, setGameState } = useContext(QuizContext);

    //Kopplat till onClick-event som navigerar till startvyn
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };

    //Om man får alla rätt visas första meddelandet annars visas det andra
    const message = () => {
        if (score === 3) {
            return <div className="quizMessage">
                Bra jobbat, du förtjänar en guldstjärna!
                <span className="iconStar">
                    <FontAwesomeIcon icon={faStar} />
                </span>
            </div>
        }
        else {
            return <div className="quizMessage">
                <div>Du behöver nog läsa på lite mer om klimatet.</div>
                <div>Vi ses igen vid nästa försök!</div>
            </div>
        }

    }

    //Nollställer poängen när man vill göra om quizet
    const restartQuiz = () => {
        setScore(0)
        setGameState("start")
    }

    return (
        <div className="quizContainer">
            <div className="speechBubbleContainer">
                <img
                    src={bubble1}
                    alt="Pratbubbla"
                    style={{
                        width: "100%",
                        height: "380px",
                    }}
                />
                <div className="speechBubbleContent">
                    <h2 className="font-link-h2">
                        DITT RESULTAT
                    </h2>
                    {/* Visar hur många poäng användaren fått av antal frågor */}
                    <p
                        className="font-link-h1"
                        style={{
                            textAlign: "center",
                            margin: "20px",
                        }}
                    >
                        {score} / {Questions.length}
                    </p>
                    <p className="font-link-p">
                        {message()}
                    </p>
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
                <button
                    className="quizButton"
                    onClick={restartQuiz}
                >
                    Gör quiz igen
                </button>
                <div style={{ width: "160px" }}></div>
                <button
                    className="quizButton"
                    onClick={navigateHome}
                >
                    Till Start
                </button>
            </div>
        </div>
    )
}