import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

interface BodyText {
  city: string;
  country: string;
  state: string;
  method: string;
  school: string;
}

interface Props {
  bodyText: BodyText;
}

const StringModal = ({ bodyText }: Props) => {
  const [isValid, setIsValid] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const displayString = () => {
    if (Object.values(bodyText).includes("")) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    onOpen();
  };

  const fixText = (bodyText: BodyText) => {
    let text = JSON.stringify(bodyText).replace(/[{}]/g, "");
    text = text.replace(/["]/g, "'");
    return text;
  };

  return (
    <>
      <Button onClick={displayString}>Generate</Button>
      {!isValid && <Text>Please fill out all fields!</Text>}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Athan API String</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{fixText(bodyText)}</ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StringModal;
