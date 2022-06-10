import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Text } from "@chakra-ui/react";
import { projects } from "../../constans/Constants";
import Image from "next/image";

const ProjectPage = () => {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const name = router.query.projects;

  const projectIndex = projects.findIndex((item) => item.title === name);
  const nextProjectIndex =
    projectIndex === projects.length - 1 ? 0 : projectIndex + 1;
  const nextProject = projects[nextProjectIndex];

  useEffect(() => {
    setProject(projects.filter((projeto) => projeto.title === name)[0]);
  }, [name]);

  return (
    <Box color="white" w="100%">
      {project && (
        <Flex w="100%">
          <Text>{project.textOne}</Text>
          <Flex overflow="hidden">
            <Image objectFit="cover" src={project.img} />
          </Flex>
        </Flex>
      )}
      <Box onClick={() => router.push(nextProject.title)}>Next project</Box>
    </Box>
  );
};

export default ProjectPage;
