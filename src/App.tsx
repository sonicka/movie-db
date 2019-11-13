import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Menu from "./components/menu/menu";
import Overview from "./modules/overview/overview";
import Detail from "./modules/detail/detail";
import Search from "./modules/search/search";

// react-responsive - to manage responsiveness of the design
// reach router - to handle routing between pages
// material-ui - to use material design layout components
// redux - to manage state of the app // TODO install

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Overview path="/" />
        <Detail path="/movie/:nadSheetDraftId" />
        <Search path="/search" />
      </Router>
      {/* <Route overview> */}
      {/* <Route detail> */}
      {/* <Route search> */}
    </div>
  );
};

export default App;
