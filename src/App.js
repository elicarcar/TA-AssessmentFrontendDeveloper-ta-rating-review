import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Homepage from "./pages/Homepage";
import AboutMovie from "./pages/AboutMovie";
import store from "./store";
import "./App.less";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/movie/:id" exact component={AboutMovie} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
