import { AppLink } from "@atls/react-app-links";

import React from "react";
import { FC } from "react";
import { FormattedMessage } from "react-intl";

import { Divider } from "@ui/divider";
import { Box } from "@ui/layout";
import { Layout } from "@ui/layout";
import { Column } from "@ui/layout";
import { Row } from "@ui/layout";
import { NextLink } from "@ui/link";
import { Text } from "@ui/text";
import { Space } from "@ui/text";
import { capitalize } from "@ui/utils";

import { User } from "./menu.interfaces";

const Menu: FC = () => {
  const user: User = {
    firstName: "Aiden",
    lastName: "Frost",
    role: "photographer",
  };

  const menus = {
    artbuyer: [
      {
        name: "account",
        path: "/artbuyer/profile",
      },
      {
        name: "pricing",
        path: "/artbuyer/pricing",
      },
      {
        name: "settings",
        path: "/artbuyer/settings",
      },
    ],
    photographer: [
      {
        name: "account",
        path: "/creator/profile",
      },
      {
        name: "public info",
        path: "/creator/public-info",
      },
      {
        name: "pricing",
        path: "/creator/pricing",
      },
      {
        name: "settings",
        path: "/creator/settings",
      },
    ],
  };

  return (
    <Box
      width={216}
      borderRadius="normal"
      backgroundColor="background.white"
      p={24}
      boxShadow="light"
    >
      <Column fill>
        <Row>
          <Text
            fontWeight="semiBold"
            fontSize="default"
            lineHeight="default"
            color="text.accent"
          >
            {user.firstName}
            <Space />
            {user.lastName}
          </Text>
        </Row>
        <Row>
          <Text fontSize="semiRegular" lineHeight="default">
            {capitalize(user.role)}
          </Text>
        </Row>
        <Layout flexBasis={14} />
        <Row>
          <Divider backgroundColor="background.gray" weight={1} />
        </Row>
        <Layout flexBasis={14} />
        {menus[user.role || "artbuyer"].map(({ name, path }) => (
          <>
            <Row>
              <NextLink path={path}>{capitalize(name)}</NextLink>
            </Row>
            <Layout flexBasis={14} />
          </>
        ))}
        <Row>
          <Divider backgroundColor="background.gray" weight={1} />
        </Row>
        <Layout flexBasis={14} />
        <Row>
          <AppLink subdomain="accounts" pathname="/auth/logout">
            {(url) => (
              <NextLink path={url}>
                <FormattedMessage
                  id="avatar.log_out"
                  defaultMessage="Log Out"
                />
              </NextLink>
            )}
          </AppLink>
        </Row>
      </Column>
    </Box>
  );
};

export { Menu };
