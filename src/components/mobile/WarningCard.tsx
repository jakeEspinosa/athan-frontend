import { Card, CardBody, Text, VStack, Flex } from "@chakra-ui/react";
import React from "react";

const WarningCard = () => {
  return (
    <VStack width="full" height="80vh" justify="center" align="center">
      <Card
        width="80%"
        height="70%"
        justifyContent="center"
        alignItems="center"
      >
        <CardBody height="100%">
          <Text height="100%" paddingTop="40%">
            Sorry, this web app was designed for desktop only.
          </Text>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default WarningCard;
