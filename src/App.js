import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing";
import FavoritesPage from "./pages/favorites";
import Navbar from "./comonents/navbar";
import { InfoProvider } from "./general/weatherContext";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <InfoProvider>
            <Route exact path="/" component={LandingPage} />
            <Route path="/favorites" component={FavoritesPage} />
          </InfoProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
