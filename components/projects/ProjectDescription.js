import { Flex, Text } from "@chakra-ui/react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ProjectDescription = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [ref, isInView] = useInView();
  const controls = useAnimation();
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

  if (isInView) {
    controls.start("visible");
  }
  if (!isInView) {
    controls.start("exit");
  }

  return (
    <Flex justify="center" ref={ref} position="relative" w="100%">
      <Text w="100%"> {props.textOne} </Text>
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
              animate={controls}
              exit="exit"
              justify="center"
              overflow="hidden"
            >
              <Image objectFit="cover" src={props.img} alt="test" />
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
              animate={controls}
              exit="exit"
              justify="center"
              overflow="hidden"
            >
              <Image objectFit="cover" src={props.imgOne} alt="test" />
            </Flex>
          )}
        </AnimatePresence>
      </Flex>
    </Flex>
  );
};

export default ProjectDescription;
