import { Link, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const GitHubLink = () => {
  return (
    <Badge borderRadius="8px" padding={3}>
      <Link
        href="https://github.com/jakeEspinosa/athan.py"
        isExternal
        fontStyle="italic"
      >
        Go to GitHub Code <ExternalLinkIcon mx="2px" />
      </Link>
    </Badge>
  );
};

export default GitHubLink;
