import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

import CurrentUser from "../queries/CurrentUser";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <h3>Dashboard</h3>
        <div>You are logged in</div>
      </div>
    );
  }
}

export default graphql(CurrentUser)(Dashboard);
