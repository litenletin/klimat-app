import { BrowserRouter, Routes, Route } from "react-router-dom";
import paths from "./paths.js";
import { StartView } from "../views/startView";
import { TemperaturView  } from "../views/temperaturView";
import { QuizView } from "../views/quizView";

export const Routing = ({children}) => {

    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path={paths.startViewPath} element={<StartView/>}/>
                <Route path={paths.temperaturViewPath} element={<TemperaturView/>}/>
                <Route path={paths.quizViewPath} element={<QuizView/>}/>
            </Routes>
        </BrowserRouter>
    );
}