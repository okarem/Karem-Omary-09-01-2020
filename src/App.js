import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing";
import FavoritesPage from "./pages/favorites";
import Navbar from "./comonents/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
