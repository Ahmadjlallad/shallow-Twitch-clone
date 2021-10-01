import React from "react";
import {
  BrowserRouter,
  //NOTE: HashRouter,//* http://localhost:3000/#/ injects hash into url setup your back end to not handle any thing after the hash like gitHub pages
  //NOTE: MemoryRouter, // * URL changes are not persisted
  // * we care about that when we deployment of the app
  Switch,
  Route,
  Link,
} from "react-router-dom";

const pageOne = () => <h1>Page One</h1>;
const pageTwo = () => <h1>Page Two</h1>;
export default function TypesOfRouter() {
  return (
    <BrowserRouter>
      <Link to="/">Page One</Link>
      <Link to="/pageTow">Page two</Link>
      <Switch>
        <Route path="/" exact component={pageOne} />
        <Route path="/pageTow" exact component={pageTwo} />
      </Switch>
    </BrowserRouter>
  );
}
