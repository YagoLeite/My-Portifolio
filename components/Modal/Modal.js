import React from "react";
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const BackDrop = ({ children, onClick }) => {
  return (
    <Flex
      onClick={onClick}
      position="absolute"
      top="0"
      left="0"
      justify="center"
      alignItems="center"
      h="100vh"
      w="100vw"
      overflowY="hidden"
      bg="#000000e1"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Flex>
  );
};

const Modal = ({ closeHandler }) => {
  return (
    <BackDrop onClick={closeHandler}>
      <Flex
        as={motion.div}
        h="200px"
        w="200px"
        onClick={(e) => e.stopPropagation()}
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
        bg="red"
      >
        olá
      </Flex>
    </BackDrop>
  );
};

export default Modal;
