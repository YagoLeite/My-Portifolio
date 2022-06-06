import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
} from "@chakra-ui/react";

const ProjectModal = (props) => {
  console.log(props.config);
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.config.title}</ModalHeader>

        <ModalBody></ModalBody>

        <ModalFooter>to aqui</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
