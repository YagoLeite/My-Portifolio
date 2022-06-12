import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import { Box, Flex, Text } from "@chakra-ui/react";
import { projects } from "../../constans/Constants";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ProjectPage = () => {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [refOne, isInViewOne] = useInView({ threshold: 0.2 });
  const [refTwo, isInViewTwo] = useInView({ threshold: 0.2 });
  const controls = useAnimation();
  const name = router.query.projects;

  const projectIndex = projects.findIndex((item) => item.title === name);
  const nextProjectIndex =
    projectIndex === projects.length - 1 ? 0 : projectIndex + 1;
  const nextProject = projects[nextProjectIndex];

  useEffect(() => {
    setProject(projects.filter((projeto) => projeto.title === name)[0]);
  }, [name]);

  const container = {
    visible: {
      opacity: 1,
      staggerChildren: 1,
    },
  };

  const fadeImg = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      <Flex
        as={motion.div}
        key={Math.random()}
        variants={fadeImg}
        initial="hidden"
        animate="visible"
        exit="exit"
        direction="column"
        spacing="2000px"
        color="white"
        w="100%"
      >
        {project && (
          <Flex as={motion.div} w="100%">
            <Text>{project.textOne}</Text>
            <Flex
              as={motion.div}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            >
              {isHovering ? (
                <Flex
                  key={Math.random()}
                  as={motion.div}
                  variants={fadeImg}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.imgOne} />
                </Flex>
              ) : (
                <Flex
                  key={Math.random()}
                  as={motion.div}
                  variants={fadeImg}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.img} />
                </Flex>
              )}
            </Flex>
          </Flex>
        )}
        <Box onClick={() => router.push(nextProject.title)}>Next project</Box>
      </Flex>
    </AnimatePresence>
  );
};

export default ProjectPage;
