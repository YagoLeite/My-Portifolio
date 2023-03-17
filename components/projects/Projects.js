import React from "react";
import Project from "./Project";
import { Flex, Grid } from "@chakra-ui/react";
import { projects } from "../../constans/Constants";
import ProjectCard from "../Cards/ProjectCard";
import WavyText from "../MyText/WavyText";

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
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </Flex>
    </Flex>
  );
};

export default Projects;
