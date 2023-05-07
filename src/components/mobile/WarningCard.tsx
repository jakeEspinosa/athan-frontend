import { Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";

const WarningCard = () => {
  return (
    <Card width="80%" height="70%">
      <CardBody>
        <Text>Sorry, this web app was designed for desktop only.</Text>
      </CardBody>
    </Card>
  );
};

export default WarningCard;
