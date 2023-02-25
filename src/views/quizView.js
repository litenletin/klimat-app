import React, { useState } from "react";
import { Start } from "../components/quiz/Start";
import { Quiz } from "../components/quiz/Quiz";
import { Results } from "../components/quiz/Results";
import { QuizContext } from "../components/quiz/Context";
import ".././components/quiz/Quiz.css"

//Quiz-tutorial från https://www.youtube.com/watch?v=8LNb18ibNGs

export const QuizView = (props) => {

  //När man går in på Quiz-sidan visas alltid start.jsx först
  const [gameState, setGameState] = useState("start");
  //Poängräkningen börjar alltid på 0
  const [score, setScore] = useState(0);

  return (
    <div className="quizView">
      {/* Globala state-värden, skickar över värden från de olika staten med hjälp av useContext i Context.js */}
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {/* När gameState ändras visas vald komponent */}
        {gameState === "start" && <Start path={props} />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "results" && <Results />}
      </QuizContext.Provider>
    </div>
  );
}

export default QuizView;
