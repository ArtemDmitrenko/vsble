import { gql } from "@apollo/client";

const ARTBUYER_SIGN_UP = gql`
  mutation artbuyerSignUp(
    $firstName: String!
    $lastName: String!
    $login: String!
    $company: String
    $email: String!
    $password: String!
    $countryId: ID!
    $receiveNewsletter: Boolean
  ) {
    artbuyerSignUp(
      firstName: $firstName
      lastName: $lastName
      login: $login
      company: $company
      email: $email
      password: $password
      countryId: $countryId
      receiveNewsletter: $receiveNewsletter
    ) {
      data
      errors
      success
    }
  }
`;

const PHOTOGRAPHER_SIGN_UP = gql`
  mutation photographerSignUp(
    $firstName: String!
    $lastName: String!
    $siteURL: String!
    $email: String!
    $login: String!
    $password: String!
    $countryId: Int!
    $receiveNewsletter: Boolean
  ) {
    photographerSignUp(
      firstName: $firstName
      lastName: $lastName
      siteURL: $siteURL
      email: $email
      login: $login
      password: $password
      countryId: $countryId
      receiveNewsletter: $receiveNewsletter
    ) {
      data
      errors
      success
    }
  }
`;

const LOGIN = gql`
  mutation login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      data
      errors
      success
    }
  }
`;

const PROFILE = gql`
  query profile {
    profile {
      data
      errors
      success
    }
  }
`;

const LOGOUT = gql`
  mutation logout {
    logout {
      id
      login
      email
      role
      avatarURL
    }
  }
`;

export { ARTBUYER_SIGN_UP, PHOTOGRAPHER_SIGN_UP, LOGIN, LOGOUT, PROFILE };
