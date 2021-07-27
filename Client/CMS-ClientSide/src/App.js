import React from "react";
import Student from "./Student/Student";
import Company from "./Company/company";
import User from "./Users/user";
import Admin from "./Admin/admin";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//node miller

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <User />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
