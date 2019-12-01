import React from "react";
import { Router } from "@reach/router";
import Menu from "./components/menu/menu";
import Overview from "./modules/overview/overview";
import Detail from "./modules/detail/detail";
import Search from "./modules/search/search";
import "./App.css";

/** App component containing all routes within the application  */
const App: React.FC = () => {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Overview path="/" />
        <Detail path="/title/:titleId" />
        <Search path="/search" />
      </Router>
    </div>
  );
};

export default App;
