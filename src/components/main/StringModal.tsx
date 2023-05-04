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

const StringModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const calculateString = () => {
    console.log("test");
    onOpen();
  };

  return (
    <>
      <Button onClick={calculateString}>Generate</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Athan API String</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{"test"}</ModalBody>

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
