import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GlobalStyleContainer = ({ children }: Props) => {
  return <Box fontFamily="system-ui">{children}</Box>;
};

export default GlobalStyleContainer;
