import React, { useState, useEffect } from "react";
import { Box, Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import {
  motion,
  AnimatePresence,
  useAnimation,
  AnimateSharedLayout,
} from "framer-motion";
import Modal from "../../components/Modal/Modal";
import { useInView } from "react-intersection-observer";
import Project from "../../components/projects/Project";
import { projects } from "../../constans/Constants";
import Hero from "../../components/Hero/Hero";
import AnimCursor from "../../components/AnimCursor";
import AboutMe from "../../components/AboutMe/AboutMe";

const testando = (index) => {
  return {
    hidden: {
      opacity: 0,
      x: index % 2 !== 0 ? "100vw" : "-100vw",
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
      x: index % 2 !== 0 ? "100vw" : "-100vw",
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
  const [ref, isInView] = useInView();
  const controls = useAnimation();
  const openningModal = (project, func) => {
    setprojeto(project);
    func();
  };
  const [a, setA] = useState(false);

  if (isInView) {
    controls.start("visible");
  }
  if (!isInView) {
    controls.start("hidden");
  }

  return (
    <Box color="white" bg="#1e2029" h="3000px" overflow="hidden">
      <AnimCursor />
      <Header />
      <Hero />
      <AboutMe />
      <Flex h="700px"></Flex>
      <Flex ref={ref} w="100%" justify="center">
        <Grid
          gridTemplateColumns="repeat(auto-fit, minmax(330px, 1fr))"
          gap="24px"
          maxW="800px"
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          ref={ref}
        >
          {projects.map((project, index) => {
            return (
              <Project
                project={project}
                index={index}
                onOpen={onOpen}
                testando={testando}
                controls={controls}
                openningModal={openningModal}
              />
            );
          })}
        </Grid>
      </Flex>

      {/* <Flex onClick={() => setA((p) => !p)}>EITA PORRA</Flex>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && <Modal closeHandler={onClose} />}
      </AnimatePresence> */}
    </Box>
  );
};

export default index;
