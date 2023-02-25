import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import paths from "../routes/paths";
import { useLocation } from 'react-router-dom';
import logo from "../images/Maskot-ljusare.png";
import { NavButton } from "./NavButton";

/*
UPPDATERAD:
- Bytt plats på Temperatur och Fossila Bränseln pga tillgänglighet för färgblindhet
*/

/* Renderar navigationsmenyn. Varje kategori är kopplade till komponenten NavButton och överför props
 för att rendera ut rätt färg, bild, etikett och text*/
export function NavBar() {
  const currentPath = useLocation();
  return (

    <>
      <div className="navBarcontainer">

        <NavButton
          iconpath={logo}
          title="Start"
          path={paths.startViewPath}
          selected={currentPath.pathname == paths.startViewPath ? true : false}

        />

        <NavButton
          title="Glaciär"
          footerColor="#8BD69E"
        />

        <NavButton
          title="Havsnivåer"
          footerColor="#67A2B3"
        />

        {/*UPPDATERAD: Bytt plats på Temperatur och Fossila Bränslen*/}
        <NavButton
          title="Temperatur"
          footerColor="#F76245"
          path={paths.temperaturViewPath}
          selected={currentPath.pathname == paths.temperaturViewPath ? true : false}
        />

        <NavButton
          title="Fossila Bränslen"
          footerColor="#FFB126"
        />

        <NavButton
          title="Quiz"
          footerColor="#2E8336"
          path={paths.quizViewPath}
          selected={currentPath.pathname == paths.quizViewPath ? true : false}

        />

      </div>

    </>


  );
}

