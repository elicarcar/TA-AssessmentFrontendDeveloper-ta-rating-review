import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Homepage from "./pages/Homepage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Homepage} />
      </Router>
    </Provider>
  );
}

export default App;
