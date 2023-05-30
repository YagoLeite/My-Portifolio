import React from "react";
import Project from "./Project";
import { Divider, Flex, Grid, Text } from "@chakra-ui/react";
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
      gap="35px"
    >
      <Flex w="100%" gap="20px" justify="left" align="center">
        <Text color="#CCD6F6" fontSize="32px">{`Things I've Built`}</Text>
        <Divider
          orientation="horizontal"
          borderColor="#ccd6f6"
          w="40%"
          opacity={0.2}
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
