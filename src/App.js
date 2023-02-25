import './App.css';
import React from 'react';
import { Routing } from "./routes/Routing";
import { NavBar } from "./components/Navbar";

function App() {


  return (

    <Routing >
      <NavBar />
    </Routing>
  );
}

export default App;
