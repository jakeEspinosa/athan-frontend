import { HStack, Link, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Link href="https://github.com/jakeEspinosa/athan.py" isExternal>
        Go to GitHub Code
      </Link>
      <Text>Athan.py API String Generator</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
