import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import CurrentUser from "../queries/CurrentUser";
import Logout from "../mutations/Logout";

class Header extends Component {
  onLogoutHandler() {
    this.props.mutate({
      refetchQueries: [{ query: CurrentUser }],
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    if (!loading) {
      if (user) {
        return (
          <li>
            <a onClick={() => this.onLogoutHandler()}>Logout</a>
          </li>
        );
      } else {
        return (
          <div>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          {this.props.loading ? <div className="center">Loading</div> : null}
          <ul className="right row">
            <div className="col">{this.renderButtons()}</div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(Logout)(graphql(CurrentUser)(Header));
