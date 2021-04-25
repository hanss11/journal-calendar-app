import React from "react";

import {Provider} from 'react-redux';
import { store } from "../../store/store";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import JournalScreen from "../journal/JournalScreen";
import AuthRouter from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path={"/auth"} component={AuthRouter} />
          <Route exact path={"/"} component={JournalScreen} />
          <Redirect to={"/auth/login"}/>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
};
