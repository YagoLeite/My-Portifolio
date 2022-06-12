import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import ProjectPage from "../../components/projects/ProjectPage";
import _ProjectPage from "../../components/projects/_ProjectPage";

const index = () => {
  return (
    <Box color="white" bg="#1e2029" h="20000px" overflow="hidden">
      <Header />
      <_ProjectPage />
    </Box>
  );
};

export default index;
