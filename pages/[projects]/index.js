import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import ProjectPage from "../../components/projects/ProjectPage";

const index = () => {
  return (
    <Box color="white" bg="#1e2029" h="3000px" overflow="hidden">
      <Header />
      <ProjectPage />
    </Box>
  );
};

export default index;
