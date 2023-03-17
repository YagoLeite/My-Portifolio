import React from "react";
import Project from "./Project";
import { Flex, Grid } from "@chakra-ui/react";
import { projects } from "../../constans/Constants";
import ProjectCard from "../Cards/ProjectCard";

const Projects = () => {
  return (
    <Flex w="100%" justifyContent="center">
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(330px, 1fr))"
        gap="24px"
        maxW="800px"
      >
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </Grid>
    </Flex>
  );
};

export default Projects;
