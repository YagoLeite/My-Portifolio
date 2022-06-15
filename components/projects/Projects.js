import React from "react";
import Project from "./Project";
import { Flex, Grid } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { projects } from "../../constans/Constants";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, isInView] = useInView();
  const controls = useAnimation();

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

  if (isInView) {
    controls.start("visible");
  }
  if (!isInView) {
    controls.start("hidden");
  }

  return (
    <Flex w="100%" justifyContent="center">
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
              key={index}
              project={project}
              index={index}
              testando={testando}
              controls={controls}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Projects;
