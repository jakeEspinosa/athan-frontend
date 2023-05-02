import { HStack, Heading, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Link href="https://github.com/jakeEspinosa/athan.py" isExternal>
        Go to GitHub Code
      </Link>
      <Heading>Athan API String Generator</Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
