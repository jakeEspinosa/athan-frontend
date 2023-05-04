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
}

const StringModal = ({ bodyText }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const displayString = () => {
    onOpen();
  };

  return (
    <>
      <Button onClick={displayString}>Generate</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Athan API String</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{JSON.stringify(bodyText)}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StringModal;
