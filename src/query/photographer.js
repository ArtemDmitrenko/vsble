import { gql } from '@apollo/client';

const PHOTOGRAPHER_PUBLIC_SETTINGS_GET = gql`
  query photographerPublicSettingsGet {
    photographerPublicSettingsGet {
      data
      errors
      success
    }
  }
`;

const PHOTOGRAPHER_ACCOUNT_SETTINGS_GET = gql`
  query photographerAccountSettingsGet {
    photographerAccountSettingsGet {
      data
      errors
      success
    }
  }
`;

const PHOTOGRAPHER_BRIEFINGS = gql`
  query photographerBriefings($page: Int!, $pageSize: Int!, $timestamp: Int!) {
    photographerBriefings(
      page: $page
      pageSize: $pageSize
      timestamp: $timestamp
    ) {
      data
      errors
      success
    }
  }
`;

const PHOTOGRAPHER_ACCOUNT_SETTINGS_UPDATE = gql`
  query photographerAccountSettingsUpdate(
    $page: Int!
    $pageSize: Int!
    $timestamp: Int!
  ) {
    photographerBriefings(
      page: $page
      pageSize: $pageSize
      timestamp: $timestamp
    ) {
      data
      errors
      success
    }
  }
`;

const PHOTOGRAPHER_MARKETPLACE_SETTINGS_UPDATE = gql`
  query photographerMarketplaceSettingsUpdate(
    $page: Int!
    $pageSize: Int!
    $timestamp: Int!
  ) {
    photographerBriefings(
      page: $page
      pageSize: $pageSize
      timestamp: $timestamp
    ) {
      data
      errors
      success
    }
  }
`;

const PHOTOGRAPHER_NOTIFICATION_SETTINGS_GET = gql`
  query photographerNotificationSettingsGet {
    photographerNotificationSettingsGet {
      data
      errors
      success
    }
  }
`;

const PHOTOGRAPHER_NOTIFICATION_SETTINGS_UPDATE = gql`
  mutation photographerNotificationSettingsUpdate(
    $briefings: Boolean!
    $showrooms: Boolean!
  ) {
    photographerNotificationSettingsUpdate(
      briefings: $briefings
      showrooms: $showrooms
    ) {
      data
      errors
      success
    }
  }
`;

export {
  PHOTOGRAPHER_PUBLIC_SETTINGS_GET,
  PHOTOGRAPHER_ACCOUNT_SETTINGS_GET,
  PHOTOGRAPHER_BRIEFINGS,
  PHOTOGRAPHER_ACCOUNT_SETTINGS_UPDATE,
  PHOTOGRAPHER_MARKETPLACE_SETTINGS_UPDATE,
  PHOTOGRAPHER_NOTIFICATION_SETTINGS_GET,
  PHOTOGRAPHER_NOTIFICATION_SETTINGS_UPDATE,
};
