import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const GitHubLink = () => {
  return (
    <Link
      href="https://github.com/jakeEspinosa/athan.py"
      isExternal
      fontStyle="italic"
    >
      Go to GitHub Code <ExternalLinkIcon mx="2px" />
    </Link>
  );
};

export default GitHubLink;
