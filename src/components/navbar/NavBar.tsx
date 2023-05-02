import { HStack, Heading, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import GithubLink from "./GitHubLink";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <GithubLink />
      <Heading>Athan API String Generator</Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
