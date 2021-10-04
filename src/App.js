import React from "react";
import StreamCreate from "./Components/Stream/StreamCreate";
import StreamDelete from "./Components/Stream/StreamDelete";
import StreamEdit from "./Components/Stream/StreamEdit";
import StreamList from "./Components/Stream/StreamList";
import StreamShow from "./Components/Stream/StreamShow";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import History from "./History";
const App = () => {
  return (
    <div className="ui container">
      <Router history={History}>
        <Header />
        {/* Switch is used to render only one route at a time*/}
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/create" component={StreamCreate} />
          <Route path="/stream/edit/:id" component={StreamEdit} />
          <Route path="/stream/delete/:id" component={StreamDelete} />
          <Route path="/stream/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
