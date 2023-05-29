import React from "react";
import Project from "./Project";
import { Flex, Grid } from "@chakra-ui/react";
import { projects, secondProjects } from "../../constans/Constants";
import ProjectCard from "../Cards/ProjectCard";
import WavyText from "../MyText/WavyText";
import BritCard from "../Cards/BritCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      justifyContent="center"
      align="center"
      gap="30px"
    >
      <Flex w="100%" justify="left" align="center">
        <WavyText
          text={`Things I've built!`}
          delayDuration={0}
          fontSize="45px"
        />
      </Flex>
      <Flex w="100%" gap="80px" justify="center" align="center" wrap="wrap">
        {/* {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })} */}
        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap="20px"
          w="100%"
        >
          {secondProjects.map((project, index) => {
            return (
              <Flex key={index} as={motion.div} whileHover={{ y: -8 }}>
                <BritCard data={project} />
              </Flex>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Projects;
