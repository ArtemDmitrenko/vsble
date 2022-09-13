import { gql } from "@apollo/client";

const COUNTRIES = gql`
  query countries {
    countries {
      data
      errors
      success
    }
  }
`;

export { COUNTRIES };
