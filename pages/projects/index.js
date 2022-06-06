import React, { useState } from "react";
import { Box, Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "../../components/projects/ProjectModal";
import Modal from "../../components/Modal/Modal";

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
    visible: {
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
  visible: {
    transition: {
      staggerChildren: 0.55,
    },
  },
};

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

const index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projeto, setprojeto] = useState({});
  const openningModal = (project, func) => {
    setprojeto(project);
    func();
  };
  const [a, setA] = useState(false);

  return (
    <Box color="white" bg="#1e2029" h="3000px" overflow="hidden">
      <Header />
      <Flex w="100%" justify="center">
        <Grid
          gridTemplateColumns="repeat(auto-fit, minmax(330px, 1fr))"
          gap="24px"
          maxW="800px"
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="visible"
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

      <Flex onClick={() => setA((p) => !p)}>EITA PORRA</Flex>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {a && (
          <motion.div
            variants={flip}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ProjectModal config={projeto} isOpen={isOpen} onClose={onClose} />
            <Flex h="200px" w="200px" bg="red" />
          </motion.div>
        )}
        {isOpen && <Modal closeHandler={onClose} />}
      </AnimatePresence>
    </Box>
  );
};

export default index;
