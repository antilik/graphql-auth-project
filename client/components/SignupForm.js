import React, { Component } from "react";
import { graphql } from "react-apollo";

import AuthForm from "./AuthForm";
import SignUp from "../mutations/Signup";
import CurrentUser from "../queries/CurrentUser";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: "" };
  }

  onSubmit({ email, password }) {
    this.setState({ errors: "" });
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: CurrentUser }],
      })
      .catch((error) => {
        const errors = error.graphQLErrors.reduce((acc, { message }) => {
          return acc + " " + message;
        }, "");
        this.setState({ errors });
      });
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <h3>Sign up</h3>
          <AuthForm
            errors={this.state.errors}
            onSubmit={this.onSubmit.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default graphql(SignUp)(Signup);
