import { Button } from "@chakra-ui/react";

interface Props {
  type: "button" | "reset" | "submit" | undefined;
  text: string;
}

const CustomButton = ({ type, text }: Props) => {
  return <Button type={type}>{text}</Button>;
};

export default CustomButton;
