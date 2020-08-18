import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
export default class Pages extends Component {
  render() {
    return (
      <div className="Pages">
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div>
    );
  }
}
