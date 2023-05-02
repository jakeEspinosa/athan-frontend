import { HStack, Link, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Link href="https://github.com/jakeEspinosa/athan.py" isExternal>
        Go to GitHub Code
      </Link>
      <Text>Athan.py API String Generator</Text>
    </HStack>
  );
};

export default NavBar;
