import { useNavigate } from "react-router-dom";

/* Quizknapp-komponent */
export function QuizButton(props) {
  const navigate = useNavigate();

  return (
    <button
      className="quizButton"
      onClick={() => {
        navigate(props.path);
      }}
    >
      {"Quiz"}
    </button>
  );
}

