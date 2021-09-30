import gql from "graphql-tag";
import { IndexRoute } from "react-router";

export default gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;
