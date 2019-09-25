import React from "react";
import "./App.css";
import Ride from "./pages/ride";
import Statistics from "./pages/statistics";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./store";
import Main from "./pages";
function App() {
  return (
    <StoreProvider>
      <Main />
      <Router>
        <Switch>
          <Route exact path="/" component={Ride}></Route>
          <Route path="/statistics" component={Statistics}></Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
