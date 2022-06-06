import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const flip = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ProjectModal = (props) => {
  return (
    <motion.div variants={flip} initial="hidden" animate="visible" exit="exit">
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.config.title}</ModalHeader>

          <ModalBody></ModalBody>

          <ModalFooter>to aqui</ModalFooter>
        </ModalContent>
      </Modal>
    </motion.div>
  );
};

export default ProjectModal;
