import React, { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Lorem,
} from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import ProjectModal from "../../components/projects/ProjectModal";

const projects = [
  {
    title: "World Cup Simulator",
    demo: "https://world-cup-simulator.vercel.app",
    github: "https://github.com/YagoLeite/World-Cup-Simulator",
    img: "teste",
  },
  {
    title: "Jokenpo",
    demo: "https://jokenpo-inky.vercel.app",
    github: "https://github.com/YagoLeite/jokenpo",
    img: "teste",
  },
  {
    title: "Country Codex",
    demo: "https://country-codex.vercel.app",
    github: "https://github.com/YagoLeite/where-in-the-world",
    img: "teste",
  },
  {
    title: "World Cup Simulator",
    demo: "https://country-codex.vercel.app",
    github: "https://github.com/YagoLeite/where-in-the-world",
    img: "teste",
  },
];

const testando = (index) => {
  return {
    hidden: {
      opacity: 0,
      x: index % 2 !== 0 ? 150 : -150,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      x: index % 2 !== 0 ? 50 : -50,
    },
  };
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.55,
    },
  },
};

const index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projeto, setprojeto] = useState({});
  const openningModal = (project, func) => {
    setprojeto(project);
    func();
  };
  return (
    <Box color="white" bg="#1e2029" h="3000px">
      <Header />
      <Flex w="100%" justify="center">
        <Grid
          gridTemplateColumns="repeat(auto-fit, minmax(330px, 1fr))"
          gap="24px"
          maxW="800px"
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {projects.map((project, index) => {
            return (
              <motion.div variants={testando(index)}>
                <Flex
                  onClick={() => {
                    openningModal(project, onOpen);
                  }}
                  key={index}
                  direction="column"
                >
                  <Flex bg="green" h="200px">
                    {project.img}
                  </Flex>
                  <Box>
                    <Text>Title: {project.title}</Text>

                    <Text>Demo: {project.demo} </Text>
                    <Text>GitHub: {project.github} </Text>
                  </Box>
                </Flex>
              </motion.div>
            );
          })}
        </Grid>
      </Flex>
      <ProjectModal config={projeto} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default index;
