import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

interface BodyText {
  city: string;
  country: string;
  state: string;
  method: string;
  school: string;
}

interface Props {
  bodyText: BodyText;
  isButtonDisabled: boolean;
}

const StringModal = ({ bodyText, isButtonDisabled }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const displayString = () => {
    if (isButtonDisabled) {
      return;
    }
    onOpen();
  };

  const fixText = (bodyText: BodyText) => {
    let text = JSON.stringify(bodyText).replace(/[{}]/g, "");
    text = text.replace(/["]/g, "'");
    return text;
  };

  return (
    <>
      <Button isDisabled={isButtonDisabled} onClick={displayString}>
        Generate
      </Button>
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
