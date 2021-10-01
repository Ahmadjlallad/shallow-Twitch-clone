import React from "react";
import StreamCreate from "./Components/Stream/StreamCreate";
import StreamDelete from "./Components/Stream/StreamDelete";
import StreamEdit from "./Components/Stream/StreamEdit";
import StreamList from "./Components/Stream/StreamList";
import StreamShow from "./Components/Stream/StreamShow";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <StreamList />
          </Route>

          <Route path="/stream/create">
            <StreamCreate />
          </Route>

          <Route path="/stream/edit">
            <StreamEdit />
          </Route>

          <Route path="/stream/delete">
            <StreamDelete />
          </Route>

          <Route path="/stream/show">
            <StreamShow />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
