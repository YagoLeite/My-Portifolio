import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import { Box, Flex, Text } from "@chakra-ui/react";
import { projects } from "../../constans/Constants";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const _ProjectPage = () => {
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
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <Flex
      direction="column"
      position="relative"
      spacing="2000px"
      color="white"
      w="100%"
    >
      {project && (
        <Flex justify="center" w="100%">
          <Text w="100%"> {project.textOne} </Text>
          <Flex
            w="100%"
            as={motion.div}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <AnimatePresence>
              {!isHovering ? (
                <Flex
                  position="absolute"
                  top="0%"
                  left="50%"
                  as={motion.div}
                  key={Math.random()}
                  variants={fadeImg}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  justify="center"
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.img} />
                </Flex>
              ) : (
                <Flex
                  position="absolute"
                  top="0%"
                  left="50%"
                  as={motion.div}
                  key={Math.random()}
                  variants={fadeImg}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  justify="center"
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.imgOne} />
                </Flex>
              )}
            </AnimatePresence>
          </Flex>
        </Flex>
      )}
      <Box onClick={() => router.push(nextProject.title)}>Next project</Box>
    </Flex>
    // <Box as={motion.div} position="relative" gap="20px">
    //   <Flex as={motion.div}>
    //     <AnimatePresence>
    //       {a ? (
    //         <Flex
    //           position="absolute"
    //           top="0px"
    //           right="0px"
    //           variants={fadeImg}
    //           initial="hidden"
    //           animate="visible"
    //           exit="exit"
    //           key={Math.random()}
    //           as={motion.div}
    //           bg="red"
    //           h="200px"
    //           w="200px"
    //           justify="center"
    //         ></Flex>
    //       ) : (
    //         <Flex
    //           as={motion.div}
    //           position="absolute"
    //           top="0px"
    //           right="0px"
    //           variants={fadeImg}
    //           initial="hidden"
    //           animate="visible"
    //           exit="exit"
    //           key={Math.random()}
    //           bg="blue"
    //           h="200px"
    //           w="200px"
    //           justify="center"
    //         ></Flex>
    //       )}
    //     </AnimatePresence>
    //   </Flex>

    //   <Flex onClick={() => setA(!a)}>Change color</Flex>
    // </Box>
  );
};

export default _ProjectPage;
