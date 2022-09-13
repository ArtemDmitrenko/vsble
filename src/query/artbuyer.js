import { gql } from "@apollo/client";

const ARTBUYER_ACCOUNT_SETTINGS_GET = gql`
  query artbuyerAccountSettingsGet {
    artbuyerAccountSettingsGet {
      data
      errors
      success
    }
  }
`;

export { ARTBUYER_ACCOUNT_SETTINGS_GET };
